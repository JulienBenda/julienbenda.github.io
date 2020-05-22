(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{194:function(n,t,e){"use strict";e.r(t);var r=e(80),_=e.n(r),c={data:function(){return{link:"step3",prekiji:"\n## リポジトリとは\n　ディレクトリはみんな知っていると思うが、簡単に言うと、\nリポジトリとは、ディレクトリにファイル履歴などの情報が加味されたもの、と思うといいかもしれない。\n役割としても、一種の__データベース__である。\nGitHubで考えると、__「リモートリポジトリ」__と__「ローカルリポジトリ」__という２つのリポジトリがある。\nローカルリポジトリは自分がこつこつ更新してゆき、リモートリポジトリは他人ががんがん更新してゆくイメージである。\nリモートリポジトリの他人の加えた修正を、自分のところのローカルリポジトリに取り込みながら進めてゆき、\n一段落したらローカルリポジトリを、リモートリポジトリに反映すると言った手順である。\n\n　GitHubの場合はもっとフランクなスタンスで使えるし、用いても良いと考えている。\nソースコードの共有、譲渡、レビューなどや、端末を複数持っていたときなど、コードの保管庫として有用である。\n単なる画像保管庫としても用いることができる(容量に制限はあるが)。\n\n## リポジトリ作成してみる\n\n　今回は__「GitHub Pages」__の機能を用いて、ウェブサイトを作成して公開する、このフローの一部として紹介する。\nまずは、GitHubの方にリポジトリを作成してから、自分のPC上にリポジトリを作成して、整合性を保った状態にする。\n\n1. GitHubの公式サイト [https://github.com](https://github.com/) にアクセスして、__Sign In__ する。\n\n2. 一番右上の方に「+」マークがあるので、クリックして「New repository」を選択。\n\n3. リポジトリネーム(必須)とdescription(任意)、Public(公開)かPrivate(非公開)を選択。\n最初のリポジトリネームは、「<自分のアカウント名>.github.io」としてみる。\n> 無課金のときはPublicでないと公開できないので注意。\n\n4. 次のページに英語で手順が出るので、そのとおりにコマンドを実行してみる。\n\n5. これで自分のPCとGitHub上に同じリポジトリが出来た。\n\n## 終わり\n\n　この通り簡単なのでぜひやってみてほしい。余談であるが、GitHubのリポジトリには「スター」という、\nツイッターでいう「いいね」のような機能がある。是非、スター数獲得に向けて精進してほしい。\n"}},computed:{kiji:function(){return _()(this.prekiji)}},components:{DefaultArticle:function(){return e.e(0).then(e.bind(null,204))}}},l=e(21),component=Object(l.a)(c,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("DefaultArticle",{attrs:{content:{link:this.link,kiji:this.kiji}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);