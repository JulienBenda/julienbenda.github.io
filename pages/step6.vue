<template>
    <div>
        <DefaultArticle :content="{link:this.link, prekiji:this.prekiji}"/>
    </div>
</template>


<script>

const DefaultArticle = () => import('~/components/default-article.vue');

export default{
    data: function() {
        return {
            link: "step6",
            prekiji:
`
## npmとは
　npmとは__ パッケージ管理システム__ の1種。__Node Package Manager__ の意。
ライセンスはArtistic License 2.0。Node.jsのパッケージ管理システムであり、V8 JavaScriptエンジンで動作する。npm自身もJavaScriptで記述されている。
Node.jsは、サーバ上で動作するJavaScriptであるが、Node.jsを使ったツールが開発されるようになると、これらを管理するバージョン管理システムの必要性が生まれた。
npmは、Node.jsのツールやパッケージ（モジュール）をインストールしたり管理したりするだけでなく、パッケージを扱うためにインターフェイスを備えている。リポジトリ機能も備えており、必要とするパッケージ（モジュール）の検索、ダウンロード、インストール、アップデートを行えたり、開発したパッケージ（モジュール）を他者に公開できたりする。

　Node.jsを使う上では避けて通れない、未来はどうなるかわからないが、現在のバックエンドエンジニアの需要スキルは「Rails, Go, Node」といったところなのではないかと思う。
つまりエンジニア志望の方には是非触っておいてもらいたいものだ。

## npmをインストールする

1. npmをインストールするコマンドを入力して実行。
\`\`\`sh
$ sudo apt install npm
\`\`\`

2. バージョンを確認することで、インストールの是非を確認する。
\`\`\`sh
$ npm -v
 6.6.6
\`\`\`

3. カレントディレクトリを、前の記事で作ったリポジトリに設定する

4. Nuxt.jsをインストールする(次の記事)

## 終わり

　この通り簡単なのでぜひやってみてください。
`
        }
    },
    components: {
        DefaultArticle
    },
}

</script>
