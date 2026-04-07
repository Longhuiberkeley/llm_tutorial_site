import { getCollection } from 'astro:content';

export async function getNavPages(currentLang: string) {
    const allDocs = await getCollection('docs');
    const filteredDocs = allDocs.filter(doc => doc.id.startsWith(`${currentLang}/`));

    const pages = filteredDocs.map(doc => {
        const slug = doc.id.replace(new RegExp(`^${currentLang}/`), '');
        
        return {
            id: doc.data.pageId || doc.id,
            title: doc.data.title,
            chapter: doc.data.chapter || 'Overview',
            file: `/${currentLang}/${slug}`,
            isSpecial: (doc.data.chapter || '').toLowerCase() === 'special'
        };
    });

    // Sort correctly
    pages.sort((a, b) => {
        if (a.isSpecial && !b.isSpecial) return 1;
        if (!a.isSpecial && b.isSpecial) return -1;
        if (a.chapter !== b.chapter) return a.chapter.localeCompare(b.chapter, undefined, { numeric: true, sensitivity: 'base' });
        return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
    });

    return pages;
}

export function getTOC(pages: any[]) {
    const toc = [];
    pages.forEach(page => {
        const chapterName = page.chapter.toUpperCase();
        let chapter = toc.find(c => c.title === chapterName);
        if (!chapter) {
            chapter = { title: chapterName, pages: [] };
            toc.push(chapter);
        }
        chapter.pages.push(page);
    });
    return toc;
}
