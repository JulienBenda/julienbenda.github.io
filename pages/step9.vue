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
            link: "step9",
            prekiji:
`
## marked.jsとは
　JavaScriptによるMarkdownのパーサーである。

　Markdown（マークダウン）は、
メールを記述する時のように書きやすくて読みやすいプレーンテキストを、
ある程度見栄えのするHTML文書へ変換できるフォーマットとして開発されたもの。

　要するにHTMLを直接書いていくより、Markdownで書いていって、
最終的にコンバートして表示したほうが、書きやすいし効率的だと考えているからである。
また、以下に述べる「highlight.js」と合わせて使いやすい。

> [公式ドキュメント](https://marked.js.org/#/README.md#README.md)

## highlight.jsとは
　コードにシンタックスハイライトを実現するためのJavaScriptライブラリである。
サイト等でプログラムを公開したいときに、非常に有用である。

> [公式ドキュメント](https://highlightjs.org/)

## 使い方
　まずはnpmでインストールする。
\`\`\`bash
$ npm install highlight.js marked
\`\`\`

### 1. 設定
　../layouts/default.vueを以下のように修正する

\`\`\`vue
<template>
    <div>
        <nuxt />
    </div>
</template>


<script>
import Vue from 'vue';

import hljs from 'highlight.js';
import marked from 'marked';

export default {
    created: function(){
        if (!process.client) console.log('default created');
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return hljs.highlightAuto(code, [lang]).value;
            }
        });
    },
    async mounted(){
        if (!process.client) console.log('default mounted');
        // hljs.initHighlighting();
        hljs.initHighlightingOnLoad();
    },
}

<\/script>
\`\`\`

これで、ハイライトの設定とマークダウンのオプション設定は終わり。

また、__&lt;blockquote&gt;__がスタイル指定されていないので、同じファイルに以下の記述をする。
\`\`\`css
<style>
blockquote {
    border-left: 4px solid darkslategray;
    padding: 0 15px;
}
<\/style>
\`\`\`
　あやふやな記憶だが、確かリストもスタイル指定されていなかったかもしれない。
しかし、今回は特に記載しない。
調べ次第更新して追記してゆくつもりである。

### 2. コンポーネントなどで使う

\`\`\`vue
<template>
  <div v-html="text"></div>
</template>

<script>
import marked from "marked";

export default{
    computed: {
        text() {
            return marked("# Hello");
        },
    },
}
<\/script>
\`\`\`

簡単である。

## 終わり

　何から何までプログラマ御用達である。
もうJavaScriptさえあれば何も要らない。
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
