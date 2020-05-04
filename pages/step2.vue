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
            title: "「Git」をインストール",
            time: "2020年5月3日",
            url: "https:julienbenda.github.io/step1",
            samn: "Git.png",
            prekiji:
`
## Gitとは

　プログラムのソースコードなどの変更履歴を記録・追跡するための __分散型バージョン管理システム__ である。
Linuxカーネルのソースコード管理に用いるためにリーナス・トーバルズによって開発され、それ以降ほかの多くのプロジェクトで採用されている。
Linuxカーネルのような巨大プロジェクトにも対応できるように、__動作速度__ に重点が置かれている。

## インストール

- 今回はLinuxにてのインストールとする

\`\`\`sh
$ sudo apt install git
\`\`\`

ですが、基本的に標準インストールされていると思います。

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
