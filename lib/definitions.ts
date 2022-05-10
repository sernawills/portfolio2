// COMPONENTS KNOWN TO PARSER
import Image from './markdown2react/components/Image';
import Gallery from './markdown2react/components/Gallery';
export const AllComponents = { Image, Gallery };

// SECTIONS
export const prp_section = (depth: number) => {
    return { className: `section-${depth}` }
};
export const ele_section = 'div';

// SPAN ELEMENTS
export const span_elements: { [key: string]: { regex: RegExp, comp: JSONComp } } = {
    bold: {
        regex: /(?<bold_lim>[\*\_]{2})(?<bold>.+?)\k<bold_lim>/,
        comp: { name: 'b', props: {} }
    }, italic: {
        regex: /(?<italic_lim>[\*\_])(?<italic>.+?)(?<![\*\_])\k<italic_lim>(?![\*\_])/,
        comp: { name: 'i', props: {} }
    }, strikethrough: {
        regex: /(?<striketrough_lim>[\~]{2})(?<strikethrough>.+?)\k<striketrough_lim>/,
        comp: { name: 's', props: {} }
    }, code: {
        regex: /(?<code_lim>[\`]+)(?<code>.+?)\k<code_lim>/,
        comp: { name: 'code', props: {} }
    }, link: {
        regex: /\[(?<link>.*?)\]\((?<link_href>.*?)(?: "(?<link_title>.*?)")?\)/,
        comp: { name: 'a', props: { href: '$link_href', title: '$link_title' } }
    }
};

// IMAGES
export const def_image: { regex: RegExp, img: JSONComp, gallery: JSONComp } = {
    regex: /!\[(?<altText>.*?)\]\((?<src>.*?)(?: "(?<title>.*?)")?\)(?<props>{.*?})?/g,
    img: { name: 'Image', props: { src: '$src', alt: '$altText', className: 'myImage' } },
    gallery: { name: 'Gallery', props: {} }
};

// LIST
export const def_list: { line_regex: RegExp, ul: JSONComp, ol: JSONComp, li: JSONComp, li_subl: JSONComp } = {
    line_regex: /^(?<indent>\s*)((?<ul>[-+*])|(?<ol>\d+\.)) (?<content>.*)/,
    ul: { name: 'ul', props: {} },
    ol: { name: 'ol', props: {} },
    li: { name: 'li', props: {} },
    li_subl: { name: 'li_subl', props: { style: { listStyle: 'none' } } }
};

// TYPES
export type PropsDef = { [key: string]: any };
export type JSONComp = { name: string, props: PropsDef };

