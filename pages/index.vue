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
                Provided By {Nuxt.js + GitHub Pages}
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
        </div>
        <div id="blogs">
            <h2 class="subtitle" style="color: black;">
                LATEST ARTICLES
            </h2>
            <div class="nyoibo" style="margin-bottom: 5%;">
            </div>
            <div class="articleContainer">
                <a v-for="item in blogs" :key="item.link" 
                   :href="'./'+item.link"
                   class="articleItem">
                    <div class="innerArticleItem">
                        <picture>
                            <source type="image/webp" :srcset="'/'+(item.samn).split('.')[0]+'.webp'">
                            <img alt="" :src="'/'+item.samn" style="width: 100%; margin: auto;border: none; box-shadow: none;"></img>
                        </picture>
                        <div style="position: absolute; bottom: 0px; width: 100%; padding: 10px;">
                            <div style="margin-bottom: 5px;">{{item.title}}</div>
                            <div style="font-size: 80%;">{{item.time}}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div v-if="look==this.dom_ids.length-1" class="scrlt">
            <a href="#" @click="clickSmoothScroll()"><span></span>Top</a>
        </div>
        <div v-else class="scrl">
            <a href="#" @click="clickSmoothScroll()"><span></span>Scroll</a>
        </div>
        <footer style="position: absolute; bottom: 10%;width: 100vw;margin-bottom:5vh; text-align: center;">© CYBER LAB 2020</footer> 
    </div>
</template>

<script>
import fileLists from '~/components/fileLists.json';

import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';
// import imageResize from '~/modules/imageResize'; // 画像リサイズモジュールの読み込み

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
