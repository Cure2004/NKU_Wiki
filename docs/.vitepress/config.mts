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
	description: '南开大学公益校园生活百科',
	lastUpdated: true,
	cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/zh/reference/default-theme-config
		logo: '/logo.svg',
		// siteTitle: '',
		nav: nav(),
		sidebar: sidebar(),
		 		socialLinks: [
					{ icon: 'github', link: 'https://github.com/Cure2004/NKU_Wiki' },
				], 

		externalLinkIcon: true,
		langMenuLabel: '切换语言',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式',
		sidebarMenuLabel: '菜单',
		outline: { level: [2, 3], label: '大纲' },
		returnToTopLabel: '返回顶部',
				editLink: {
					pattern: 'https://github.com/Cure2004/NKU_Wiki/blame/main/docs/:path',
					text: '源代码',
				}, 
		lastUpdated: {
			text: '更新于',
			formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
		},
		docFooter: { prev: '上一篇', next: '下一篇' },

		footer: {
			message: '公益项目。与任何组织无关。Made with ❤.',
			//copyright: `© ${new Date().getFullYear()} <a href="https://github.com/xupt-wiki">西邮 Wiki 项目组</a>`,
		},

		search: {
      		provider: 'local',
      		options: {
        // 	自定义搜索框和弹窗的 UI 文案
        		translations: {
          			button: {
            			buttonText: '搜索文档',
            			buttonAriaLabel: '搜索文档'
          			},
          			modal: {
						backButtonTitle: '关闭搜索', 
						displayDetails: '显示详细列表', 
            			noResultsText: '无法找到相关结果',
            			resetButtonTitle: '清除查询条件',
            			footer: {
              				selectText: '选择',
              				navigateText: '切换',
              				closeText: '关闭'
            }
          }
        }
      }
    }
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
		{
			text: 'Coder',
			items: [
				{ text: '实验室/频道', link: '/coder/' },
				{ text: '校友博客', link: '/coder/blog' },
			],
		},
		{
				text: '校园',
				activeMatch: '^/campus/',
				items: [
					{ text: '学校简介', link: '/campus/' },
					{ text: '住宿生活', link: '/campus/accommodation' },
					{ text: '入学准备', link: '/campus/enrollment' },
					{ text: '军训', link: '/campus/military_training' },
					{ text: '防骗指南', link: '/campus/anti-fraud' },
					{ text: '校园一卡通', link: '/campus/campus-card' },
				],
		}, 
		{
			text: '学习',
			activeMatch: '^/study/',
			items: [
				{ text: '学习简介', link: '/study/' },
				{ text: '如何获得教材', link: '/study/textbooks' },
				{ text: '课内学业', link: '/study/grades' },
				{ text: '学号、学籍、二次选拔、转专业', link: '/study/status' },
				{ text: '实验室·兴趣小组', link: '/study/labs' },
				{ text: '竞赛与证书', link: '/study/contest' },
			],
		},
		{
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
		},
	]
}

function sidebar(): DefaultTheme.Sidebar {
	return {
		'/coder': [
			{ text: '⏴ 实验室/频道', link: '/coder/' },
			{
				text: '培养计划/方案',
				items: [
					{ text: '名称', link: '地址' },
				],
			},
		],
		'/': [
			{
				text: '主线',
				items: [
					{ text: '写在开头', link: '/overview' },
				],
			},
			{
				text: '校园',
				collapsed: true,
				items: [
					{ text: '学校简介', link: '/campus/' },
					{ text: '本科专业列表', link: '/campus/undergraduate_major' },
					{ text: '住宿生活', link: '/campus/accommodation' },
					{ text: '入学准备与办理', link: '/campus/enrollment' },
					{ text: '军训', link: '/campus/military_training' },
					{ text: '防骗', link: '/campus/anti-fraud' },
					{ text: '校园一卡通', link: '/campus/campus_card' },
					{ text: '手机必备APP', link: '/campus/apps' },
					{ text: '趣闻', link: '/campus/anecdote' },
					{ text: '反馈与舆论', link: '/campus/feedback' },
				],
			}, 
			{
				text: '学习',
				collapsed: true,
				items: [
					{ text: '学习简介', link: '/study/' },
					{ text: '如何获得教材', link: '/study/textbooks' },
					{
						text: '课内学业',
						items: [
							{ text: '课程安排', link: '/study/curriculum' },
							{ text: '学业成绩', link: '/study/grades' },
							{ text: '学分绩点/综测评优', link: '/study/gpa' },
							{ text: '学号、学籍、二次选拔、转专业', link: '/study/status' },
							{ text: '选课', link: '/study/selective_courses' },
						],
					},
					{ text: '实验室/兴趣小组', link: '/study/labs' },
					{ text: '竞赛与证书', link: '/study/contest' },
					{ text: '社团与爱好(未写)', link: '/study/clubs' },
				],
			},
			{
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
			}, 
			{
				text: '关于',
				items: [
					{ text: '友情链接', link: '/links' },
					{ text: '贡献指南', link: '/contributing' },
					{ text: '更新日志', link: '/changelog' },
					{ text: '关于我们', link: '/about' },
				],
			},
		],
	}
};
