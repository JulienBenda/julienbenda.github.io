<template>
    <div>
        <main style="padding:5vw;">
            <h1 style="text-align:center;border-color:rgba(0,0,0,0)">
                <nuxt-link style="font-size: 40%; text-align: left; display: block;margin-bottom: 5vh;" to="/">
                    &lt; 記事一覧へ
                </nuxt-link>
                <b style="border-bottom: solid 0.5vh black; font-size: 80%;">
                    {{title}}
                </b>
                <p style="text-align: right; font-size: 40%;">
                    {{time}} 制定
                </p>
            </h1>
            <div style="margin-top: 5vh; padding: 5vw; border: solid 5px black;" v-html="kiji"></div>
        </main>
        <footer style="margin-bottom: 2vh; text-align: center;">© CYBER LAB 2020</footer>
        <center style="margin-bottom: 7vh"><a 
            href="https://forms.gle/yMfcxPtxpsfHzJZ58"
            rel="noopener noreferrer"    
            target="_blank"
            style="font-size: 2vh;"
            >
            {{contact}}
        </a></center>
    </div>
</template>


<script>

import marked from 'marked';

export default{
    data: function() {
        return {
            contact: "Contact Us",
            title: "プライバシーポリシー",
            time: "2020年5月3日",
            url: "https:julienbenda.github.io/privacy-policy",
            prekiji:
`
## 当サイトに掲載されている広告について

　当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net、afb）を利用しています。
このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。

　またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、[こちら](https://policies.google.com/technologies/ads?hl=ja)をご覧ください。

## 当サイトが使用しているアクセス解析ツールについて

　当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
このトラフィックデータは匿名で収集されており、個人を特定するものではありません。

　この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは[こちら](https://marketingplatform.google.com/about/analytics/terms/jp/)をご覧ください。

## 当サイトへのコメントについて

　当サイトでは、スパム・荒らしへの対応として、コメントの際に使用されたIPアドレスを記録しています。
これは標準機能としてサポートされている機能で、スパム・荒らしへの対応以外にこのIPアドレスを使用することはありません。

　また、URLの入力に関しては、任意となっております。
全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となりますことをあらかじめご了承下さい。

　加えて、コメントは管理人の方針に従って基本的には承認しませんが、次に掲げる内容を含むコメントにおいても管理人の裁量によって承認せず、削除する事があります。

- 特定の自然人または法人を誹謗し、中傷するもの
- 極度にわいせつな内容を含むもの
- 禁制品の取引に関するものや、他者を害する行為の依頼など、法律によって禁止されている物品、行為の依頼や斡旋などに関するもの
- その他、公序良俗に反し、または管理人によって承認すべきでないと認められるもの

## 当サイトへのお問い合わせについて

　当サイトでは、スパム・荒らしへの対応として、お問い合わせの際に使用されたIPアドレスを記録しています。
これはお問い合わせの標準機能としてサポートされている機能で、スパム・荒らしへの対応以外にこのIPアドレスを使用することはありません。
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
