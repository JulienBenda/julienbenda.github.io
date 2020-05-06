<template>
    <div>
        <DefaultArticle :content="{link:this.link, prekiji:this.prekiji}"/>
    </div>
</template>


<script>

import DefaultArticle from '~/components/default-article.vue';

export default{
    data: function() {
        return {
            link: "step3",
            prekiji:
`
## リポジトリとは

　情報工学において、仕様・デザイン・ソースコード・テスト情報・インシデント情報など、システムの開発プロジェクトに関連するデータの一元的な貯蔵庫を意味する。日本語でレポジトリと表記される場合もある。一種のデータベースであり、ソフトウェア開発および保守における各工程の様々な情報を一元管理する。

## リポジトリ作成してみる
　GitHubの方にリポジトリを作成し、自分のPC上にリポジトリを作成して、整合性を保った状態にしましょう。

1. GItHubの公式サイト [https://github.com](https://github.com/) にアクセスして、__Sign In__ します。

2. 一番右上の方に「+」マークがあるので、クリックして「New repository」を選択。

3. リポジトリネーム(必須)とdescription(任意)、Public(公開)かPrivate(非公開)を選択しましょう。
最初のリポジトリネームは、「<自分のアカウント名>.github.io」としてみましょう。

4. 次のページに英語で手順が出るので、そのとおりにコマンドを実行してみる。

5. これで自分のPCとGitHub上に同じリポジトリが出来た

## 終わり

　この通り簡単なのでぜひやってみてください。最初のリポジトリは、公開状態にしてやってみましょう。
`
        }
    },
    components: {
        DefaultArticle
    },
}

</script>
