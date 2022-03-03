import path from 'path'
import matter from 'gray-matter'

const itemsDirectory = path.join(process.cwd(), 'portfolio-items');
const fs = require('fs');

export function getAllItemIDs() {
    const fileNames = fs.readdirSync(itemsDirectory)
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

function getItemPreviewData(id) {
    const fullPath = path.join(itemsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents)
    return {
        id,
        ...matterResult.data,
        mdContent: matterResult.content
    };
}

export function getAllItemPreviewData() {
    return getAllItemIDs().map(id => getItemPreviewData(id));
}

export async function getFullItemData(id) {
    const matterResult = getItemPreviewData(id);
    const linesIt = matterResult.mdContent.split(/\r?\n/).values();
    let line = linesIt.next();
    let sections = [];
    while (!line.done) {
        const divMatch = line.value.match(/^## (?<divider>.*)$/);
        if (divMatch) {
            const divider = divMatch.groups.divider;
            let content = [];
            line = linesIt.next();
            while (!line.done && !line.value.startsWith('## ')) {
                const headingMatch = line.value.match(/^### (?<heading>.*)$/);
                if (headingMatch) {
                    const heading = headingMatch.groups.heading;
                    let text = ''
                    line = linesIt.next();
                    while (!line.done && !line.value.startsWith('## ') && !line.value.startsWith('### ')) {
                        text += parseMarkdown(line.value) + '\n'
                        line = linesIt.next();
                    }
                    content.push({ heading, text })
                } else line = linesIt.next();
            }
            sections.push({ divider, content })
        } else line = linesIt.next();
    }
    return {
        ...matterResult,
        sections
    }
}

function parseMarkdown(md) {
    //blockquote
    md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
    //images
    // md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g,
    //     '<Image src="$2" alt="$1" layout="fill" objectFit="contain" />'
    // );
    md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)( (.*))?/g,
        '<div class="image-wrapper $4"><img src="$2" alt="$1" /></div>'
    );
    //links (not working right now because nextjs doesn't interpret the string)
    md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g,
        '<Link href="$2"><a>$1</a></Link>'
    );
    // bold / italic / strikethrough
    md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
    //code
    md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
    console.log(md);
    return md.trim()
}