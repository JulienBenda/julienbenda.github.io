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
            link: "step5",
            prekiji:
`
## Nuxtとは

　モダンな __Vue.js__ アフターなモダンWEBサービス作成を目的としたときに、実現が容易となるようなプログレッシブなフレームワーク。
Vue.jsのライブラリやツールに関しては、殆どの場合で恩恵が受けられると考えて間違いない。
UXに関しては他と比較して抜きん出て段違いに高められる。

> __Vue__ は view と同じ発音。スタートアップがとにかく容易で、後から機能を追加していくのも非常に容易となる。
ツギハギになりそうなものであるが、そうはならず、故に開発効率も上がる。
これは __単一コンポーネント__ という信念に基づく。

## デザインパターン・ソフトウェアアーキテクチャパターン MVVM
　デザインパターンの話になるが、現代の主流は__MVVM__であるといえるであろう。
プログラムを3つの要素、__Model (モデル)__、__View (ビュー)__、__ViewModel (ビューモデル)__ に分割する。

---

- ### Model
　ビジネスロジックとドメインを担う。

- ###  View
　UIロジック。データの入出力を担う。UIの外観構造を定義する。

- ### ViewModel
　プレゼンテーションロジック。Viewに関しての状態を保持する機能を担う。ViewからModelに受け流すパイプ役でもある。

　依存関係は単一方向であるべきで、各役割へと分割がしっかり出来ていて、テストの容易さも上げよう、
効率も良くなる、綺麗なコーディングは素晴らしいね、そういうことである。
　Vue.jsはMVVMを採用可能なプラットフォームである(これこそが現状考えられるベストプラクティスである)。
そしてNuxtはVue.jsに基づくので、MVVMを採用可能ということになる。

## Nuxtのレンダリング
　3つある。

- SSR(サバーサイドレンダリング)
- Generate Static Pages(静的ファイルの生成)
- SPA(シングルページアプリケーション)

---

1. ### SSR
　主にみんなこの機能を使っていると感じる。
ユニーク性が高いのと、従来のVue SPAと比較して、
SEOが向上し、UXが向上すると言われている。
賛否両論がありそうである。

2. ### Generate Static Pages
　GitHub Pagesを用いる際はこちらを使う。__JAMStack__ としても知られている。
> JAMStackのJamはJavaScript/APIs/Markupの頭文字である。
特徴としてパフォーマンスの高さとセキュリティの高さが挙げられている。
SSRとSPAのいいとこ取りとも言われる。


3. ### SPA
　上記に挙げたものを必要とせずに、Nuxtの恩恵を享受したいときに使う機能である。
軽量な状態からのスタートが可能となる。

　今回は__Generate Static Pages(静的ファイルの生成)__でスタートする。

---

## プロジェクトを始める

1. npxがインストールされていることを確認した後、__&lt;username&gt;.github.io のリポジトリをクローンしたディレクトリ__で、以下のように入力して実行。
\`\`\`bash
$ npx create-nuxt-app <username>.github.io
\`\`\`

2. いくつか質問されるが、適当でいい。"none(特になし)"に選択できる箇所はそれでいい。
Nuxtのモードは__Universal__を選択する。

## 終わり

　NuxtやVueは今非常にホットで、今後もっと伸びていくと思っているし、是非布教したい。
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
