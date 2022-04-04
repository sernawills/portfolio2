import path from 'path'
import matter from 'gray-matter'
import { parseMarkdown} from "./markdown2react/markdown2json"

const itemsDirectory = path.join(process.cwd(), 'portfolio-items');
const fs = require('fs');

export function getAllItemIDs() {
    const fileNames = fs.readdirSync(itemsDirectory)
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}

function getMatterResult(id) {
    const fullPath = path.join(itemsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return matter(fileContents);
}

function getItemPreviewData(id) {
    const matterResult = getMatterResult(id);
    return {
        id,
        ...matterResult.data
    };
}

export function getAllItemPreviewData() {
    return getAllItemIDs().map(id => getItemPreviewData(id));
}

export async function getFullItemData(id) {
    const matterResult = getMatterResult(id);
    return {
        ...matterResult.data,
        bodyContent: parseMarkdown(matterResult.content)
    }
}
