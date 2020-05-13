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
            link: "step2",
            prekiji:
`
## Gitとは

　プログラムのソースコードなどの変更履歴を記録・追跡するための __分散型バージョン管理システム__ である。
Linuxカーネルのソースコード管理に用いるためにリーナス・トーバルズによって開発され、それ以降ほかの多くのプロジェクトで採用されている。
Linuxカーネルのような巨大プロジェクトにも対応できるように、__動作速度__ に重点が置かれている。__GitHub__ そのもののことではないので注意。

## インストール

　今回はLinuxにての環境を想定している。


1. コマンドラインからインストールする
\`\`\`bash
$ sudo apt install git
\`\`\`
しかしながら、この時世であるから、ほとんど確実に基本的に標準インストールされていると思う。。

2. インストールされたか確認 
\`\`\`bash
$ git --version
git version 2.20.1
\`\`\`
インストールされていると、以上のようにバージョン情報を教えてくれる。

## Gitコマンドの種類
　コマンドラインに「git help」と入力して実行してみる。
\`\`\`bash
$ git help -a
See 'git help <command>' to read about a specific subcommand

Main Porcelain Commands
   add                  Add file contents to the index
   am                   Apply a series of patches from a mailbox
   archive              Create an archive of files from a named tree
   bisect               Use binary search to find the commit that introduced a bug
   branch               List, create, or delete branches
   bundle               Move objects and refs by archive
   checkout             Switch branches or restore working tree files
   cherry-pick          Apply the changes introduced by some existing commits
   citool               Graphical alternative to git-commit
   clean                Remove untracked files from the working tree
   clone                Clone a repository into a new directory
   commit               Record changes to the repository
   describe             Give an object a human readable name based on an available ref
   diff                 Show changes between commits, commit and working tree, etc
   fetch                Download objects and refs from another repository
   format-patch         Prepare patches for e-mail submission
   gc                   Cleanup unnecessary files and optimize the local repository
   gitk                 The Git repository browser
   grep                 Print lines matching a pattern
   gui                  A portable graphical interface to Git
   init                 Create an empty Git repository or reinitialize an existing one
   log                  Show commit logs
   merge                Join two or more development histories together
   mv                   Move or rename a file, a directory, or a symlink
   notes                Add or inspect object notes
   pull                 Fetch from and integrate with another repository or a local branch
   push                 Update remote refs along with associated objects
   range-diff           Compare two commit ranges (e.g. two versions of a branch)
   rebase               Reapply commits on top of another base tip
   reset                Reset current HEAD to the specified state
   revert               Revert some existing commits
   rm                   Remove files from the working tree and from the index
   shortlog             Summarize 'git log' output
   show                 Show various types of objects
   stash                Stash the changes in a dirty working directory away
   status               Show the working tree status
   submodule            Initialize, update or inspect submodules
   tag                  Create, list, delete or verify a tag object signed with GPG
   worktree             Manage multiple working trees

Ancillary Commands / Manipulators
   config               Get and set repository or global options
   fast-export          Git data exporter
   fast-import          Backend for fast Git data importers
   filter-branch        Rewrite branches
   mergetool            Run merge conflict resolution tools to resolve merge conflicts
   pack-refs            Pack heads and tags for efficient repository access
   prune                Prune all unreachable objects from the object database
   reflog               Manage reflog information
   remote               Manage set of tracked repositories
   repack               Pack unpacked objects in a repository
   replace              Create, list, delete refs to replace objects

Ancillary Commands / Interrogators
   annotate             Annotate file lines with commit information
   blame                Show what revision and author last modified each line of a file
   count-objects        Count unpacked number of objects and their disk consumption
   difftool             Show changes using common diff tools
   fsck                 Verifies the connectivity and validity of the objects in the database
   gitweb               Git web interface (web frontend to Git repositories)
   help                 Display help information about Git
   instaweb             Instantly browse your working repository in gitweb
   merge-tree           Show three-way merge without touching index
   rerere               Reuse recorded resolution of conflicted merges
   show-branch          Show branches and their commits
   verify-commit        Check the GPG signature of commits
   verify-tag           Check the GPG signature of tags
   whatchanged          Show logs with difference each commit introduces

Interacting with Others
   archimport           Import a GNU Arch repository into Git
   cvsexportcommit      Export a single commit to a CVS checkout
   cvsimport            Salvage your data out of another SCM people love to hate
   cvsserver            A CVS server emulator for Git
   imap-send            Send a collection of patches from stdin to an IMAP folder
   p4                   Import from and submit to Perforce repositories
   quiltimport          Applies a quilt patchset onto the current branch
   request-pull         Generates a summary of pending changes
   send-email           Send a collection of patches as emails
   svn                  Bidirectional operation between a Subversion repository and Git

Low-level Commands / Manipulators
   apply                Apply a patch to files and/or to the index
   checkout-index       Copy files from the index to the working tree
   commit-graph         Write and verify Git commit-graph files
   commit-tree          Create a new commit object
   hash-object          Compute object ID and optionally creates a blob from a file
   index-pack           Build pack index file for an existing packed archive
   merge-file           Run a three-way file merge
   merge-index          Run a merge for files needing merging
   mktag                Creates a tag object
   mktree               Build a tree-object from ls-tree formatted text
   multi-pack-index     Write and verify multi-pack-indexes
   pack-objects         Create a packed archive of objects
   prune-packed         Remove extra objects that are already in pack files
   read-tree            Reads tree information into the index
   symbolic-ref         Read, modify and delete symbolic refs
   unpack-objects       Unpack objects from a packed archive
   update-index         Register file contents in the working tree to the index
   update-ref           Update the object name stored in a ref safely
   write-tree           Create a tree object from the current index

Low-level Commands / Interrogators
   cat-file             Provide content or type and size information for repository objects
   cherry               Find commits yet to be applied to upstream
   diff-files           Compares files in the working tree and the index
   diff-index           Compare a tree to the working tree or index
   diff-tree            Compares the content and mode of blobs found via two tree objects
   for-each-ref         Output information on each ref
   get-tar-commit-id    Extract commit ID from an archive created using git-archive
   ls-files             Show information about files in the index and the working tree
   ls-remote            List references in a remote repository
   ls-tree              List the contents of a tree object
   merge-base           Find as good common ancestors as possible for a merge
   name-rev             Find symbolic names for given revs
   pack-redundant       Find redundant pack files
   rev-list             Lists commit objects in reverse chronological order
   rev-parse            Pick out and massage parameters
   show-index           Show packed archive index
   show-ref             List references in a local repository
   unpack-file          Creates a temporary file with a blob's contents
   var                  Show a Git logical variable
   verify-pack          Validate packed Git archive files

Low-level Commands / Synching Repositories
   daemon               A really simple server for Git repositories
   fetch-pack           Receive missing objects from another repository
   http-backend         Server side implementation of Git over HTTP
   send-pack            Push objects over Git protocol to another repository
   update-server-info    Update auxiliary info file to help dumb servers

Low-level Commands / Internal Helpers
   check-attr           Display gitattributes information
   check-ignore         Debug gitignore / exclude files
   check-mailmap        Show canonical names and email addresses of contacts
   check-ref-format     Ensures that a reference name is well formed
   column               Display data in columns
   credential           Retrieve and store user credentials
   credential-cache     Helper to temporarily store passwords in memory
   credential-store     Helper to store credentials on disk
   fmt-merge-msg        Produce a merge commit message
   interpret-trailers    add or parse structured information in commit messages
   mailinfo             Extracts patch and authorship from a single e-mail message
   mailsplit            Simple UNIX mbox splitter program
   merge-one-file       The standard helper program to use with git-merge-index
   patch-id             Compute unique ID for a patch
   sh-i18n              Git's i18n setup code for shell scripts
   sh-setup             Common Git shell script setup code
   stripspace           Remove unnecessary whitespace
\`\`\`
「-a」オプションをつけることですべて表示してくれるようだ。
いくら私といえど、これら全てはとてもじゃないが覚えてないし覚えきれない。

## 主に使うコマンド
　基本的にいつも使うコマンドがあるので、これらを覚えておけば先ず問題ないと思う。
しかし、勿論予め __Git Flow__ と、__Branch__ その他諸々の概念に関しては絶対覚えておかなくてはならない。
これは次の記事で言及したい。

---
### 1. clone

　WEB上にあるリポジトリをディレクトリにクローンする。これでローカルにもリポジトリが作成されたことになる。

EX:
\`\`\`bash
$ git clone https://github.com/nuxt/nuxt.js.git
\`\`\`

> 厳密には違うが、ディレクトリのようなものである。保守における各工程の様々な情報を含む一種のデータベースである。

---

### 2. add

　変更したファイルをインデックスに追加する。

EX:
\`\`\`bash
$ git add hogehuga.txt
\`\`\`

> インデックスとはリポジトリにコミットする一歩手前のスペースである。

---

### 3. commit

　リポジトリへの変更を記録する。条件として変更ファイルがインデックスに追加されていること。

EX:
\`\`\`bash
$ git commit -m "ほげふがを追加した"
\`\`\`

> 「-m」オプションをつけてコミットメッセージをつけることができる

---

### 4. push

　関連するオブジェクトとともにリモート参照を更新する。

EX:
\`\`\`bash
$ git push
\`\`\`

> うまくいかない時は、エラーログを読んで、サジェストされた内容に従って試してみること。

---

### 5. branch

　ブランチを一覧表示、作成、または削除する。最初のうちはブランチ作成を主に使うと思う。

EX:
\`\`\`bash
$ git branch test
\`\`\`

> 「test」というブランチを現在のローカルのブランチの最新(HEAD)から派生させる。
なぜブランチを分けたりするのかというと、例えば、大人数が使用するであろうサービスの開発で、
これをGitで管理しているとする。
人間というのは必ずしもミスをしないとは言い切れないので、
製品用の安定したソースコードを提供するために作ったブランチを、
毎日頻繁に更新していて、気がついたら変な修正がなされていた、ということになりかねないから、
これを防ぐというものが一つ。
もう一つは、バグが一つ出て、もう一つ別のところから発見されましたというとき、
それらを一元的に同じブランチで修正していたら、バグの修正が両方終わらないと反映(merge)できない。
それでは非効率的であるから、ブランチを切ることで、修正の明確化と区別をしようという発想である。
これらは__「git-flow」__という概念であるが、まあ、要するに慎重性も兼ねてのベストプラクティスである。

---

### 6. checkout

　ブランチの切り替えまたは作業ツリーファイルの復元。主にブランチの切り替えに用いる。

EX:
\`\`\`bash
$ git checkout -b test
\`\`\`

> 「-b」オプションをつけることで、新しいブランチの作成と切り替えを同時に行うことが可能。

---

### 7. pull

　別のリポジトリまたはローカルブランチからフェッチして統合する。

EX:
\`\`\`bash
$ git pull origin master
\`\`\`

> リモートリポジトリのmasterブランチがあって、バグの修正ブランチがmasterに統合(merge)されたとする。
でも自分のローカルリポジトリのmasterは最新じゃないとき、これを最新にするために主に用いたりする。

---

### 8. log

　コミットに関してのログが出る。

---

### 9. diff

　コミット、作業ツリーなどの変更を表示。

---

### 10. merge
　2つ以上の開発履歴を結合する。

> これに関しては安易に行ってはならず、mergeする前に殆どの場合PR(Pull-Request)という作業が入る。
これは自分だけでなく、他の人にも変更を見てもらい、これでいいかレヴューして了承してもらう作業である。
GitHubではGUIで行うことができるので、主にこちらを使うべきであると私は思う。

## 終わり
　あなたはもうエンジニアだ。なぜなら殆どの自称エンジニアがGitを知らないからである。
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
