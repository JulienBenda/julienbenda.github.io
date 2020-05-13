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
            link: "step8",
            prekiji:
`
## Auditsとは

　インターネットという広大な海で遭難しかけているエンジニアを導く灯台である(と個人的な感想を持っている)。
Chromeにはデベロッパーツールに標準搭載されている。主な機能として以下の項目を観点に、対象ウェブサイトをスコアリングしてくれるものだ。

- Performance
- PWA
- Accessibility
- Best Practices
- SEO

---

以下によく怒られることを書いていこうと思う。

### 1. Performance

- image filesはwebpを使うべき。
- Cache TTL が短すぎる(GitHub Pagesの場合これは解決できないと結論づけている)。
> Because of : Thanks for reaching out to GitHub Support about using GitHub Pages
We set the following Cache-Control header for all GitHub Pages content:
Cache-Control: max-age=600
This header is the same for all assets on all sites on our Pages service, and we don't currently provide a way to alter the value.
I hope that this answers your questions.
https://webapps.stackexchange.com/questions/119286/caching-assets-in-website-served-from-github-pages

### 2. PWA

- Nuxt の場合は「@nuxtjs/pwa」をインストールしてやれば良い。
> プログレッシブウェブアプリケーションは、ウェブを通じて配信されるアプリケーションソフトウェアの一種であり、
HTML、CSS、JavaScriptなどの一般的なウェブテクノロジーを使用して構築されています。
これは、標準に準拠したブラウザを使用するすべてのプラットフォームで動作することを目的としています。
機能には、オフラインでの作業、プッシュ通知、デバイスのハードウェアアクセスが含まれデスクトップおよびモバイルデバイス上のネイティブアプリケーションと同様のユーザーエクスペリエンスを作成できます。

### 3. Accessibility

- バックグラウンドの色とテキストの色のコントラストが文字の視認性を下げるので改善すべき。
> 便利なツールがある https://contrast-ratio.com/

- imagesにalt属性を使用すべき。

- formにはlabelを使用すべき。


### 4. Best Practices

- target="_blank"を使って外部リンクする場合、rel="noopener"等を使用すべき。

### 5. SEO

- metaタグが指定されていないと怒られる。

思いついたら追加していきたい。

## 終わり

　サイトを上げる前に、このツールでテストをして、スコアが良ければ更新するというフローがおすすめである。
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
