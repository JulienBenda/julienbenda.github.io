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

<style>
/* 縦長 */
@media screen and (orientation: portrait) {
    :root{
        --font-size: 3.5vw;
        --logo-top: -50px;
    }
}
/* 横長 */
@media screen and (orientation: landscape) {
    :root{
        --font-size: 1.5vw;
        --logo-scale: 0;
    }
}
#blogs {
    position: absolute;
    left: 0;
    top: 200vh;
    height: 100vh;
    width: 100vw;
    padding: 5vh 50px 0px 50px;
}
#introduction {
    position: absolute;
    left: 0;
    top: 100vh;
    background: #41B883;
    height: 100vh;
    width: 100vw;
    padding: 25vh 50px 50px 50px;
}
/* .cb { */
/*     border-left: 1px solid black; */
/*     width: 0; */
/*     top: 0; */
/*     left: 50%; */
/*     height: 100vh; */
/*     position: fixed; */
/*     z-index: 362187; */
/* } */
.scrl, .scrlt{
    position: fixed;
    top: 90%;
    left: 50%;
    width: 200px;
    height: 50px;
    margin: 0 0 0 -100px;
    text-align: center;
    z-index: 10;
}

.scrl a, .scrlt a {
    padding: 15px;
    color: #35495e;
    text-decoration: none;
}
/* #scrl a:active, #scrl a:hover{ */
/*     background: rgba(0,0,0,0); */
/* } */
.scrl a span {
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top: -70px;
    border-left: 1px solid #35495e;
    border-bottom: 1px solid #35495e;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    -webkit-animation: sdb 1.5s infinite;
    animation: sdb 1.5s infinite;
    box-sizing: border-box;
}
.scrlt a span {
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top: -70px;
    border-right: 1px solid #35495e;
    border-top: 1px solid #35495e;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    -webkit-animation: sdbt 1.5s infinite;
    animation: sdbt 1.5s infinite;
    box-sizing: border-box;
}
@-webkit-keyframes sdbt {
    0% {
        -webkit-transform: rotateY(0) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
}
@keyframes sdbt {
    0% {
        transform: rotateY(0) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: rotateY(720deg) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
}
@-webkit-keyframes sdb {
    0% {
        -webkit-transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        -webkit-transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}
@keyframes sdb {
    0% {
        transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}

.logo {
    animation: turn 2s linear forwards 1s;     
    transform: scale(0.5, 0.5) rotateX(180deg);
    position: relative;
    height: 346px;
    width: 500px;
    margin: 10px auto;
    margin-top: var(--logo-top);
}

.triangle1, .triangle2, .triangle3, .triangle4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 0; 
    height: 0;
}
.triangle1 {
    border-left: 210px solid transparent;
    border-right: 210px solid transparent;
    border-bottom: 360px solid #41B883;
}
.triangle2 {
    top: 60px;
    left: 70px;
    animation: goright 0.5s linear forwards 3.5s;   
    border-left: 175px solid transparent;
    border-right: 175px solid transparent;
    border-bottom: 300px solid #3B8070;
}
.triangle3 {
    top: 120px;
    left: 70px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 140px solid transparent;
    border-right: 140px solid transparent;
    border-bottom: 240px solid #35495E;
}
.triangle4 {
    top: 240px;
    left: 140px;
    animation: godown 0.5s linear forwards 3s;     
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid #fff;
}

@keyframes turn {
    100% {
    transform: scale(0.5, 0.5) rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 360px;
  }
}
@keyframes goright {
  100% {
    left: 140px;
  }
}

.container {
    margin: 0 auto;
    padding: 0;
    min-height: 100vh;
    /* width: 100vw; */
    overflow-x: hidden;
    font-size: calc(var(--font-size));
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    /* font-size: 100px; */
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  /* font-size: 42px; */
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
