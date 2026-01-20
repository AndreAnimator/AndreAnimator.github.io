// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({ title: {
			en: 'Dres coding blog',
			br: 'Blog de programação do Dre',
		},
		logo: {
			src: './src/assets/astro.svg'
		},
		social: [
			{icon: 'github', label: 'GitHub', href: 'https://github.com/andreanimator',},
			{icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/andreanimator.bsky.social'},
		],
		sidebar: [
			{
			label: 'Sidebar',
			autogenerate: { directory: 'docs' },
			},
		],
		tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
		defaultLocale: 'root',
			locales: {
			// English docs in `src/content/docs/en/`
			root: {
				label: 'English',
				lang: 'en'
			},
			// Português brasileiro in `src/content/docs/pt-br/`
			'pt-br': {
				label: 'Português',
				lang: 'pt-BR',
			},
			},
		}),
	],
});
