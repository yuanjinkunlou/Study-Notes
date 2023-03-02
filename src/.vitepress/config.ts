import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Blog',
    outDir: '../docs',
    base: '/study-notes/',
    cleanUrls: true,
    themeConfig: {
        nav: [
            { text: 'CSS', link: '/css/spotlight' }
        ],
        sidebar: {
            '/css': [
                { text: '聚光灯', link: '/css/spotlight' },
                { text: '删除按钮', link: '/css/delete-btn' },
                { text: '轮播图', link: '/css/carousel' },
                { text: '打勾', link: '/css/tick' }
            ]
        }
    }
})