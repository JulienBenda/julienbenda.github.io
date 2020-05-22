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
            link: "step4",
            prekiji:
`
## npmとは
　npmとは __パッケージ管理システム__ の1種。
Rubyだとgem、Debian系LinuxでAPTなどが例である。
「npm」は__N__ode __P__ackage __M__anager の略である(よく考えたらそうだが、改めて見直すと納得する)。
ライセンスはArtistic License 2.0で、OSではあるがごにょごにょ、、、V型8気筒 JavaScriptエンジンで動作する。npm自身もJavaScriptでできているのはメタ的で面白い。
特筆すべきは、自らパッケージを開発し公開するフローがしっかりしている点。

　Node.jsを使う上では避けて通れない、未来はどうなるかわからないが、現在のバックエンドエンジニアの需要スキルは「Rails, Go, Node」といったところなのではないかと思う。
なぜ必要とするかそれはドキュメントなどが豊富であったりして、学習コストが低かったり、つまりは保守運用しやすいという点があるからであろう。
とにかくエンジニア志望の方には是非触っておいてもらいたいものだ。

## npmをインストールする

1. npmをインストールするコマンドを入力して実行。
\`\`\`bash
$ sudo apt install npm
\`\`\`

2. バージョンを確認することで、インストールの是非を確認する。
\`\`\`bash
$ npm -v
 6.6.6
\`\`\`

3. カレントディレクトリを、前の記事で作ったリポジトリに設定する

4. Nuxt.jsをグローバルインストールする
\`\`\`javascript
$ npm install -g nuxt
\`\`\`

## 「npx」コマンド
　ローカルインストールしたnpmパッケージをこのコマンドだけで実行できるようになる。非常に便利。

## 「npm install」より「npm ci」の方がおすすめ

　「npm install」だと互換性のある同じ環境が再現できない可能性がある。
というのも、__「package-lock.json」__というのがあるが、実はこれは、
同じ環境を再現するために必要で、だからリポジトリにpushした方がよいものである。
全く同じ環境を再現しようとした場合、 __package-lock.json__ から __node_modules__ ディレクトリを構築する必要があるが、 
npm install はそれをやってくれない。

　一方で、__「npm ci」__は

1. node_modules ディレクトリの削除
2. package-lock.json と package.json の整合性のチェック
3. package-lock.json から node_modules を再現

という動作をし、また、 npm install のように勝手に package-lock.json を更新することはなく、__なんども同じ node_modules を再現__することができる。
そしてなおかつ npm install より高速。
> 引用 : [あなたがnpm installをしてはいけない時](https://qiita.com/jigengineer/items/2b15797b850179cb8be0)

## 終わり

　npmに関しては、ややバグの件数が多いように思えるので、
いざというときに、正確かつ迅速に対応できるようにしておくためにも、こういった仕組みの把握も重要である。
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
