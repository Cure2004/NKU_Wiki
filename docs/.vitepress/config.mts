import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
// GitHub Pages 项目站点部署在子路径下，必须与仓库名一致：
// https://cure2004.github.io/NKU_Wiki/
// 若将来绑定自定义域名到根路径，把这里改回 '/' 即可
const base = '/NKU_Wiki/'

export default defineConfig({
	base,

	lang: 'zh-CN',
	title: '南开 Wiki',
	description: '南开大学大学第三方公益校园生活百科',
	lastUpdated: true,
	cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/zh/reference/default-theme-config
		logo: '/logo.svg',
		// siteTitle: '',
		nav: nav(),
		sidebar: sidebar(),
		/* 		socialLinks: [
					{ icon: 'github', link: 'https://github.com/xupt-wiki/xupt-wiki' },
				], */

		externalLinkIcon: true,
		langMenuLabel: '切换语言',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式',
		sidebarMenuLabel: '菜单',
		outline: { level: [2, 3], label: '目录' },
		returnToTopLabel: '返回顶部',
		/* 		editLink: {
					pattern: 'https://github.com/xupt-wiki/xupt-wiki/blame/main/docs/:path',
					text: '源代码',
				}, */
		lastUpdated: {
			text: '更新于',
			formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
		},
		docFooter: { prev: '上一篇', next: '下一篇' },

		footer: {
			message: '公益项目。与任何组织无关。Made with ❤.',
			//copyright: `© ${new Date().getFullYear()} <a href="https://github.com/xupt-wiki">西邮 Wiki 项目组</a>`,
		},
	},

	head: [
		// 注意：head 里手写的路径不会被自动补 base，需手动拼接
		['link', { rel: 'icon', href: `${base}logo.svg` }],
		['link', { rel: 'preconnect', href: 'https://fonts.gstatic.cn/', crossorigin: '' }],
		['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.cn/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap' }],
		['link', { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],
	],

	markdown: {
		math: true,
		container: {
			tipLabel: '提示',
			warningLabel: '警告',
			dangerLabel: '危险',
			infoLabel: '信息',
			detailsLabel: '详细信息',
		},
	},

	vite: {
		resolve: {
			alias: {
				'@': import.meta.dirname,
			},
		},
		server: {
			allowedHosts: true,
		},
	},
})

function nav(): DefaultTheme.NavItem[] {
	return [
		/* 		{
					text: 'Coder',
					items: [
						{ text: '实验室列表', link: '/coder/' },
						{ text: '校友博客', link: '/coder/blog' },
					],
				}, */
		/* 	{
				text: '校园',
				activeMatch: '^/campus/',
				items: [
					{ text: '学校简介', link: '/campus/' },
					{ text: '住宿生活', link: '/campus/accommodation' },
					{ text: '入学准备', link: '/campus/enrollment' },
					{ text: '防骗指南', link: '/campus/anti-fraud' },
				],
			}, */
		{
			text: '目录',
			activeMatch: '^/study/',
			items: [
				{ text: '前言', link: '/overview' },
				{ text: '入学篇', link: '/campus/enrollment' },
				{ text: '生活篇', link: '/life/delivery' },
				/* { text: '实验室·兴趣小组', link: '/study/labs' }, */
				{ text: '学业篇', link: '/study/contest' },
				{ text: '饮食游乐篇', link: '/life/food' },
				{ text: '其他实用信息篇', link: '/study/clubs' },
			],
		},
		/* {
			text: '生活',
			activeMatch: '^/life/',
			items: [
				{ text: '生活简介', link: '/life/' },
				{ text: '校园墙·社区', link: '/life/forum' },
				{ text: '兴趣群展示', link: '/life/groups' },
				{ text: '美食推荐', link: '/life/food' },
				{ text: '快递·外卖', link: '/life/delivery' },
			],
		},
		{
			text: '关于',
			items: [
				{ text: '友情链接', link: '/links' },
				{ text: '贡献指南', link: '/contributing' },
				{ text: '更新日志', link: '/changelog' },
				{ text: '关于我们', link: '/about' },
			],
		}, */
	]
}

function sidebar(): DefaultTheme.Sidebar {
	return {
		/* 		'/coder': [
					{ text: '⏴ 实验室/码农频道', link: '/coder/' },
					{
						text: '培养计划/方案',
						items: [
							{ text: '西邮 Linux 兴趣小组', link: 'https://plan.xiyoulinux.com/' },
							{ text: '移动应用开发实验室', link: '/coder/plan-mobile' },
							{ text: '大数据实验室', link: '/coder/plan-bigdata' },
							{ text: '硬件科技协会', link: '/coder/plan-hardware' },
							{ text: '网络科技协会', link: '/coder/plan-net' },
							{ text: '软件科技协会', link: '/coder/plan-software' },
							{ text: 'ThoughtCoding 实验室', link: '/coder/plan-tc' },
						],
					},
				], */
		'/': [
			{
				text: '目录',
				items: [
					{ text: '写在开头', link: '/overview' },
					{ text: '入学篇', link: '/campus/enrollment' },
					{ text: '生活篇', link: '/life/delivery' },
					{ text: '学业篇', link: '/study/contest' },
					{ text: '饮食游乐篇', link: '/life/food' },
					{ text: '其他实用信息篇', link: '/study/clubs' },
				],
			},
			/* {
				text: '校园',
				collapsed: true,
				items: [
					{ text: '学校简介', link: '/campus/' },
					{ text: '本科专业列表', link: '/campus/major' },
					{ text: '住宿生活', link: '/campus/accommodation' },
					{ text: '入学准备与办理', link: '/campus/enrollment' },
					{ text: '防骗', link: '/campus/anti-fraud' },
					{ text: '手机必备APP', link: '/campus/apps' },
					{ text: '趣闻', link: '/campus/anecdote' },
					{ text: '反馈与舆论', link: '/campus/feedback' },
				],
			}, */
			/* {
				text: '学习',
				collapsed: true,
				items: [
					{ text: '学习简介', link: '/study/' },
					{
						text: '课内学业',
						items: [
							{ text: '课程安排', link: '/study/curriculum' },
							{ text: '学业成绩', link: '/study/grades' },
							{ text: '学分绩点/综测评优', link: '/study/gpa' },
							{ text: '学号/学籍', link: '/study/status' },
						],
					},
					{ text: '实验室/兴趣小组', link: '/study/labs' },
					{ text: '竞赛与证书', link: '/study/contest' },
					{ text: '社团与爱好(未写)', link: '/study/clubs' },
				],
			}, */
			/* {
				text: '生活',
				collapsed: true,
				items: [
					{ text: '生活简介', link: '/life/' },
					{ text: '校园墙/社区/二手交易', link: '/life/forum' },
					{ text: '兴趣群展示', link: '/life/groups' },
					{ text: '快递和外卖', link: '/life/delivery' },
					{ text: '美食推荐', link: '/life/food' },
					{ text: '周边去处', link: '/life/nearby' },
				],
			}, */
			/* {
				text: '关于',
				items: [
					{ text: '友情链接', link: '/links' },
					{ text: '贡献指南', link: '/contributing' },
					{ text: '更新日志', link: '/changelog' },
					{ text: '关于我们', link: '/about' },
				],
			}, */
		],
	}
};
