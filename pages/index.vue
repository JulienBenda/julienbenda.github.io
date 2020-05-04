<template>
    <div class="container">
        <div id="top" style="height: 100vh;">
            <!-- <div class="cb"></div> -->
            <!-- <logo /> -->
            <div class="logo">
                <div class="triangle2"></div>
                <div class="triangle1"></div>
                <div class="triangle3"></div>
                <div class="triangle4"></div>
            </div>
            <h1 class="title">
                CYBER LAB
            </h1>
            <h2 class="subtitle">
                Nuxt.js + GitHub Pages
            </h2>
            <a 
                href="https://forms.gle/yMfcxPtxpsfHzJZ58"
                rel="noopener noreferrer"
                target="_blank">
                お問い合わせ
            </a>
            <!-- <div class="links"> -->
            <!--     <a -->
            <!--         href="https://nuxtjs.org/" -->
            <!--         rel="noopener noreferrer" -->
            <!--         target="_blank" -->
            <!--         class="button&#45;&#45;green" -->
            <!--         > -->
            <!--         Documentation -->
            <!--     </a> -->
            <!--     <a -->
            <!--         href="https://github.com/nuxt/nuxt.js" -->
            <!--         rel="noopener noreferrer" -->
            <!--         target="_blank" -->
            <!--         class="button&#45;&#45;grey" -->
            <!--         > -->
            <!--         GitHub -->
            <!--     </a> -->
            <!-- </div> -->
            <div v-if="look==this.dom_ids.length-1" class="scrlt">
                <a href="#" @click="clickSmoothScroll()"><span></span>Top</a>
            </div>
            <div v-else class="scrl">
                <a href="#" @click="clickSmoothScroll()"><span></span>Scroll</a>
            </div>
            <!-- <div id="introduction"> -->
            <!--     <p class="subtitle" style="color: black;"> -->
            <!--         このページはGitHub PagesとNuxt.jsを用いて作られています。 -->
            <!--     </p> -->
            <!--     <p class="subtitle" style="margin&#45;top: 10%; color: black;"> -->
            <!--         このように公開する方法を紹介する記事を上げていきたいと思います。 -->
            <!--     </p> -->
            <!-- </div> -->
            <div id="blogs">
                <h2 class="subtitle" style="color: black; padding: 0 0 2px 0; border-bottom: solid 3px black; margin-bottom: 5vw;">記事一覧</h2>
                <div v-for="item in blogs" :key="item.link" 
                    @click="$router.push('/'+item.link)"
                    style="padding: 25px 0 25px 0; margin: 2vw 0 2vw 0;">
                    <div style="border: solid 2px black;padding: 25px; width: 100%; max-width: 900px;margin: auto;background: azure;">
                        <img rel="" :src="'/'+item.smni" style="width: 90%;max-width:500px; margin: auto;"></img>
                        <div>{{item.title}}</div>
                        <div style="font-size:80%;">{{item.time}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';

Vue.use(smoothScroll);

export default {
    data: function() {
        return {
            look: 0,
            dom_ids: [/*'#introduction',*/ '#blogs', '#top'],
            blogs: [
                {title: "GitHubにアカウントを作成する", smni: "GitHub.png", time: "2020年5月3日 公開", link: "step1"},
                {title: "「Git」をインストール", smni: "Git.png", time: "2020年5月3日 公開", link: "step2"},
                {title: "GitHubにリポジトリを作成する", smni: "GitHubCube.png", time: "2020年5月3日 公開", link: "step3"},
                {title: "npmをインストールする", smni: "npm.png", time: "2020年5月3日 公開", link: "step4"},
                {title: "Nuxt.jsの設定をする", smni: "nuxt.jpeg", time: "2020年5月3日 公開", link: "step5"},
                {title: "GitHubのSSH設定をする", smni: "ssh.jpg", time: "2020年5月3日 公開", link: "step6"},
                {title: "Nuxt.jsで公開するにあたっての調整", smni: "nuxt.jpeg", time: "2020年5月3日 公開", link: "step7"},
                {title: "Auditsの機能を使ってサイトのグレードを上げる", smni: "Audits.png", time: "2020年5月3日 公開", link: "step8"},
                {title: "remark.js + highlight.js を使ってみる", smni: "github-npm-blog.png", time: "2020年5月3日 公開", link: "step9"},
                {title: "GitHubでサイトを公開する", smni: "ghpages.jpg", time: "2020年5月3日 公開", link: "step10"}
            ]
        }
    },
    methods: {
        clickSmoothScroll () {
            event.preventDefault();
            if (this.look > this.dom_ids.length - 1) this.look = 0;
            this.$SmoothScroll(
                document.querySelector(this.dom_ids[this.look++]),
                400,
                null,
                null,
                'y'
            )
        }
    }
    // components: {
    //     Logo
    // }
}
</script>
