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
            link: "step3",
            prekiji:
`
## リポジトリとは
　ディレクトリはみんな知っていると思うが、簡単に言うと、
リポジトリとは、ディレクトリにファイル履歴などの情報が加味されたもの、と思うといいかもしれない。
役割としても、一種の__データベース__である。
GitHubで考えると、__「リモートリポジトリ」__と__「ローカルリポジトリ」__という２つのリポジトリがある。
ローカルリポジトリは自分がこつこつ更新してゆき、リモートリポジトリは他人ががんがん更新してゆくイメージである。
リモートリポジトリの他人の加えた修正を、自分のところのローカルリポジトリに取り込みながら進めてゆき、
一段落したらローカルリポジトリを、リモートリポジトリに反映すると言った手順である。

　GitHubの場合はもっとフランクなスタンスで使えるし、用いても良いと考えている。
ソースコードの共有、譲渡、レビューなどや、端末を複数持っていたときなど、コードの保管庫として有用である。
単なる画像保管庫としても用いることができる(容量に制限はあるが)。

## リポジトリ作成してみる

　今回は__「GitHub Pages」__の機能を用いて、ウェブサイトを作成して公開する、このフローの一部として紹介する。
まずは、GitHubの方にリポジトリを作成してから、自分のPC上にリポジトリを作成して、整合性を保った状態にする。

1. GitHubの公式サイト [https://github.com](https://github.com/) にアクセスして、__Sign In__ する。

2. 一番右上の方に「+」マークがあるので、クリックして「New repository」を選択。

3. リポジトリネーム(必須)とdescription(任意)、Public(公開)かPrivate(非公開)を選択。
最初のリポジトリネームは、「<自分のアカウント名>.github.io」としてみる。
> 無課金のときはPublicでないと公開できないので注意。

4. 次のページに英語で手順が出るので、そのとおりにコマンドを実行してみる。

5. これで自分のPCとGitHub上に同じリポジトリが出来た。

## 終わり

　この通り簡単なのでぜひやってみてほしい。余談であるが、GitHubのリポジトリには「スター」という、
ツイッターでいう「いいね」のような機能がある。是非、スター数獲得に向けて精進してほしい。
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
