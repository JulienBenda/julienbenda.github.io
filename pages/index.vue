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
            <div v-if="look==2" class="scrlt">
                <a href="#" @click="clickSmoothScroll()"><span></span>Top</a>
            </div>
            <div v-else class="scrl">
                <a href="#" @click="clickSmoothScroll()"><span></span>Scroll</a>
            </div>
            <div id="introduction">
                <p class="subtitle" style="color: black;">
                    このページはGitHub PagesとNuxt.jsを用いて作られています。
                </p>
                <p class="subtitle" style="margin-top: 10%; color: black;">
                    このように公開する方法を紹介する記事を上げていきたいと思います。
                </p>
            </div>
            <div id="blogs">
                <h2 class="subtitle" style="color: #35495e;">記事一覧</h2>
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
            dom_ids: ['#introduction', '#blogs', '#top']
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
