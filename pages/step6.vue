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
            link: "step6",
            prekiji:
`
## SSHとは
　SSH(Secure Shell)とは、安全に通信を行って、ネットワークに接続された機器を遠隔操作するための通信手段（プロトコル）の1つ。
通信する側とされる側とで取り決め、安全に通信を行う。
背景において、技術的にはRSA、理論的にはつまるところ代数学など、割と難しい理論を用いている。今回はそういった説明を割愛。

## 鍵の作成

1. sshのディレクトリに移動。
\`\`\`bash
$ cd ~/.ssh
\`\`\`

2. 鍵の生成。
\`\`\`bash
$ ssh-keygen -t rsa
\`\`\`
三回ほど質問されるがrequiredではないので、Enter三回連打で自動決定してもらう。
\`\`\`bash
$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/(username)/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
\`\`\`
> すでにid_rsaが存在する場合は上書きされてしまうので要注意である。

## 公開鍵をGitHubにアップロードする

1. https://github.com/&lt;username&gt;にアクセス。

2. 一番右上のアイコンをクリック &gt; 「Settings」 へ飛ぶ。

3. 「SSH and GPG keys」をクリック。

4. 「New SSH key」というボタンをクリック。

5. 「title」に公開鍵名、「key」に公開鍵の中身をコピペ。*.pubという名前のファイルが公開鍵である。

## 諸々の設定

1. 「~/.ssh/config」に以下の内容を追記。順序は関係なし。
\`\`\`bash
Host github
 Hostname github.com
 IdentityFile ~/.ssh/id_rsa
 User git
 Port 22
\`\`\`

2. 「~/.gitconfig」の内容に修正を加えてみる。
\`\`\`bash
[user]
 name = hoge
 email = huga
[url "github:"]
 InsteadOf = https://github.com/
 InsteadOf = git@github.com:
 [merge]
 tool = vimdiff
[color]
 diff = auto
 status = auto
 branch = auto
[push]
 default = simple
\`\`\`

3. この変更によってgitを用いるとき、コマンドラインで一々パスワードを入力しなくて済む。
また、commitに記載されるusernameもemailも隠すことができる。
ただし、共同プロジェクトの際はお互いを把握している必要があり、
一度別の情報で隠したのであれば、その情報は一貫して変更しないべき
(当然のことであるが、誰が誰だかわからなくなるから)。

4. 一応SSH接続可能か調べる。
\`\`\`bash
$ ssh -T git@github.com
\`\`\`
「Hi (account名)! You've successfully authenticated, but GitHub does not provide shell access.」
とよろしくされたら成功の可能性が高い。

## 終わり

　プログラマは効率厨でなければならない。
こういった対応は効率化の信念のもと行われて然るべきである。
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
