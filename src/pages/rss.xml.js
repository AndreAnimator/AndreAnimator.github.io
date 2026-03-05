import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection('posts');
  return rss({
    title: 'Dre Coding Blog',
    description: 'Learning everything computers related (or trying)',
    site: context.site,
    items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        link: `/en/blog/${post.id}`,
        content: sanitizeHtml(parser.render(post.body), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
        }),
        ...post.data,
    })),
    customData: `<language>en-us</language>`,
  });
}