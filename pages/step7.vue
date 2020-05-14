<template>
    <div>
        <DefaultArticle :content="{link:this.link, kiji:kiji}"/>
    </div>
</template>


<script>

const DefaultArticle = () => import('~/components/default-article.vue');
import marked from 'marked';

export default{
    data: function() {
        return {
            link: "step7",
            prekiji:
`
## GitHub Pages
　この機能に関しては、以前の記事である程度説明しているが、改めてそして追加で重要な説明をしておく。

> Source
Your GitHub Pages site is currently being built from the master branch. Learn more.
User pages must be built from the master branch.

つまり&lt;username&gt;.github.ioは__masterブランチにWEBページ構成ソースを配置する必要がある__ということである。

　そして、__課金ユーザー__でないと__プライベートリポジトリでサイトは公開できない__。

この二点である。

> 以前はmasterでなくても良かったかもしれないという記憶がある。興味ある各位は調べてみるとよい。

## 作業用ブランチ作成

　masterに最終的に生成される静的ファイルを置きたい。
なので、コードを書くブランチは別に作成する。

\`\`\`bash
$ git checkout -b pre
\`\`\`

例えば私は「pre」というブランチを作ってみて作業している。

## 必要なパッケージを追加

　[公式ドキュメント](https://ja.nuxtjs.org/faq/github-pages/)に則って、必要なパッケージ__(cross-env, push-dir)__のインストール。
\`\`\`bash
npm install cross-env push-dir --save-dev
\`\`\`

特に「push-dir」はdistディレクトリ配下のファイルを全て対象ブランチにプッシュできるもので、非常に便利である。

## package.jsonにスクリプトを追加

　公式ドキュメントと違って、masterブランチにdeployするので、少々書き換える必要がある。
\`\`\`json
...
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate",
    "build:master": "DEPLOY_ENV=MASTER nuxt build",
    "generate:master": "DEPLOY_ENV=MASTER nuxt generate",
    "deploy": "push-dir --dir=dist --branch=master --verbose --cleanup",
    "clear-hard-source-cache": "rm -rf node_modules/.cache/hard-source/"
...
\`\`\`
__"clear-hard-source-cache"__は基本機能に__HardSourceWebpackPlugin__があり、
これを有効にするとキャッシュによってビルド速度が格段に上がる。
あるタイミングでキャッシュを削除するためのコマンドがこれである。
以下に述べるが、

\`\`\`javascript
...
build: {
    hardSource: true,
...
\`\`\`

この値をtrueに設定することで有効となる。

## nuxt.config.jsを修正

\`\`\`javascript
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    head: {
        title: process.env.npm_package_name || '',
        titleTemplate: 'CYBER LAB',
        htmlAttrs: {
            prefix: 'og: http://ogp.me/ns#',
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: 'XXXXXXXXXXXXXXXXXXXXXXX' },
            { name: 'theme-color', content: '#6495ED' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'CYBER LAB' },
            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:url', property: 'og:url', content: 'https://julienbenda.github.io' },
            { hid: 'og:title', property: 'og:title', content: 'CYBER LAB' },
            { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
            { hid: 'og:image', property: 'og:image', content: 'https://julienbenda.github.io/js.jpg' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './favicon.ico?' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        {src: '~/node_modules/highlight.js/styles/ir-black.css', lang: 'css'},
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/google-analytics'
    ],
    googleAnalytics: {
        id: 'xxxxxxxxxxx'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/pwa',
    ],
    pwa: {
        workbox: {
            // workbox options
            // 以下無駄、gh-pagesのcache ttlは10mで一律変更不能
            offline: false,
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                {
                    urlPattern: '/_nuxt/',
                    // handler: 'staleWhileRevalidate',
                    handler: 'CacheFirst',
                    method: 'GET',
                    strategyOptions: {
                        cacheExpiration: {
                            maxAgeSeconds: 60 * 60 * 24 * 60, // 60日
                        },
                        cacheableResponse: {
                            statuses: [200],
                        },
                    },
                },
                {
                    // デフォルト（最後に記述する）
                    urlPattern: '/*',
                    handler: 'networkFirst',
                    method: 'GET',
                },
            ],
        }
    },
    manifest: {
        name: "CYBER LAB",
        lang: 'ja',
    },
    /*
     ** Build configuration
     */
    build: {
        hardSource: true,
        /*
         ** You can extend webpack config here
         */
        extend (config, ctx) {
        }
    }
}
\`\`\`

以上はあくまで、一例としてあげているだけで、絶対的とはまだ確信が持てていない。
依存パッケージもあるので、このままやるとエラーが出る。一応調べてみてほしい。
後の記事である程度説明はしたい。

## 終わり
　サラッと説明したが、凄まじく悩むことはたくさんあった。
しかし、エラーログや、ググることでやっとここまでこられた。
プログラマで最も必要な能力の一つにググり力を挙げたい。
`

        }
    },
    computed: {
        kiji() {
            if (!process.client) console.log(this.prekiji.length);
            return marked(this.prekiji);
        },
    },
    components: {
        DefaultArticle
    },
}

</script>
