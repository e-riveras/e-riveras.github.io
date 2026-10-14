import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib';
import { profile } from '../data/cv';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${profile.name}: writing`,
    description: 'Notes on data science, economics and careers.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/posts/${p.id}/`,
    })),
  });
}
