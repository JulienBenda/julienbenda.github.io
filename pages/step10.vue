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
            link: "step10",
            prekiji:
`
## 最終段階
　ついにここまで来た。GitHub Pagesにサイトを公開してみる。

　おっとその前に、公開する前に一つポリシーの話をするが、
ポリシーとしてはpagesにどんどんページを作成していき(そのままの意味)、
使い回す部品的部分は、componentsで定義して使いまわしていくというスタンスが良いと思う。
そして、単一コンポーネントではあるが、同じクラス名同じ内容のスタイルをあちこちで散見させられると、
流石に鬱陶しくて苛立ってくるので、私の場合は、__「../layouts/default.vue」__に基本的なスタイルのクラスは記述し、
タグ内のstyleにて、既存のスタイルを上書きして表示するスタンスを取っている。

　上のことを踏まえて公開しようと思ったとする。
私はもう面倒くさかったので、以下のShellスクリプトを書いた
\`\`\`bash　
git add --all && git commit -m jidou && git push && npm run generate && npm run deploy
\`\`\`

preリポジトリの変更をコミットして、リモートを更新。
__「npm run generate」__でdist直下に静的ファイルを作成。
それから__「npm run deploy」__でdistの中身だけをリモートのmasterに更新。

　これで完了！

## 終わり

　あとはhttps://&lt;username&gt;.github.ioにアクセスして、実際に見てみるといい。
初めてだったら感動すると思う。なぜなら、非常に苦労して、WordPressとかとは異なり、
実際にコードを書いているわけだから、あんな絵日記みたいなものとは達成感が違う筈であろうからである。
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
