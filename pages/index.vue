<template>
    <div class="container">
        <div id="top" style="height: 100vh;">
            <!-- <div class="cb"></div> -->
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
            <a 
                href="./privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
                style="display:block; margin-top:25px;"
                >
                個人情報保護方針
            </a>
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
                <a v-for="item in blogs" :key="item.link" 
                    :href="'./'+item.link"
                    style="padding: 0; margin: calc(25px + 2vw) 0 calc(25px + 2vw) 0; display:block;">
                    <div style="border: solid 2px black;box-shadow: 0.1vw 0.1vw 0.5vw 0.1vw black;padding: 12.5px; width: 100%; max-width: 900px;margin: auto;background: white;">
                        <img alt="" :src="'/'+item.samn" style="width: 100%;max-width:900px; margin: auto;border: solid 0 white;"></img>
                        <div>{{item.title}}</div>
                        <div style="font-size:80%;">{{item.time}}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import fileLists from '~/components/fileLists.json';

import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';

Vue.use(smoothScroll);

export default {
    data: function() {
        return {
            look: 0,
            dom_ids: [/*'#introduction',*/ '#blogs', '#top'],
            blogs: Object.values(fileLists).map(item=>{return item})
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
}
</script>
