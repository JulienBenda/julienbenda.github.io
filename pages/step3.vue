<template>
    <div>
        <main style="padding:5vw;">
            <h2 style="text-align:center;border-color:rgba(0,0,0,0)">
                <p style="font-size: 50%; text-align: left;" @click="$router.push('/')">
                    &lt; 記事一覧へ
                </p>
                <b style="border-bottom: dotted 3px crimson;">
                    {{title}}
                </b>
                <p style="font-size: 50%; text-align: right;">
                    {{time}} 公開
                </p>
                <img alt="" :src="'/'+this.samn"></img>
            </h2>
            <div style="margin-top: 5vh; padding: 5vw; border: solid 5px black;" v-html="kiji"></div>
        </main>
        <center style="margin-bottom: 5vh"><a 
            href="https://forms.gle/yMfcxPtxpsfHzJZ58"
            rel="noopener noreferrer"    
            target="_blank"                                       
            >
            お問い合わせ 
        </a></center>
    </div>
</template>


<script>

import marked from 'marked';

export default{
    data: function() {
        return {
            title: "GitHubにリポジトリを作成する",
            time: "2020年5月3日",
            url: "https:julienbenda.github.io/step3",
            samn: 'GitHubCube.png',
            prekiji:
`
## GitHubとは

　バージョン管理システムの__「Git」__を利用して、ソフトウェア開発プロジェクトのソースコードを管理・共有することができる __Webサービス__ のこと。利用するには、アカウントの作成が必要になり、基本的機能は無料で使う事ができる。ローカル環境の「Git」で作成した __"ローカルリポジトリ"__ と「GitHub」の __"リモートリポジトリ"__ を送受信してソースコードのバージョン管理をするのが基本。リモートだけでも完結できる。

## アカウント登録

1.  GItHubの公式サイト [https://github.com](https://github.com/) にアクセスして、アカウント登録します。

<center><<img alt=' src="/github1.png"></<img alt='></center>

ユーザー名、メールアドレス、パスワードを決めて __Sign Up__ する。

2. メールアドレス宛に認証メールが送られてくるので、リンクにアクセスして認証する。

3. 有料プランか無料プランを選択。無料プランでオッケー。

4. 実際にログインしてみましょう。

## 終わり

　この通り簡単なのでぜひやってみてください。
`
        }
    },
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'og:url', property: 'og:url', content: this.url },
                { hid: 'og:description', property: 'og:description', content: 'programming' },
                { hid: 'og:title', property: 'og:title', content: `CYBER LAB - ${this.title}` },
                { hid: 'og:site_name', property: 'og:site_name', content: `CYBER LAB - ${this.title}` },
                { hid: 'og:image', property: 'og:image', content: `https://julienbenda.github.io/GitHub.png` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: './favicon.ico?' }
            ]
        }
    },
    computed: {
        kiji(){
            return marked(this.prekiji);
        }
    },
}

</script>
