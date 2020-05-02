<template>
    <div class="container">
        <div>
            <!-- <logo /> -->
            <div class="logo">
                <div class="triangle2"></div>
                <div class="triangle1"></div>
                <div class="triangle3"></div>
                <div class="triangle4"></div>
            </div>
            <h1 class="title">
                julienbenda.github.io
            </h1>
            <h2 class="subtitle">
                My legendary Nuxt.js project
            </h2>
            <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    class="button--green"
                    >
                    Documentation
                </a>
                    <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        class="button--grey"
                        >
                        GitHub
                    </a>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    }
}
</script>

<style>
.logo {
    animation: turn 2s linear forwards 1s;     
    transform: scale(0.5, 0.5) rotateX(180deg);
    position: relative;
    height: 346px;
    width: 500px;
    margin: 10px auto;
    /* margin-bottom: 150px; */
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
/* 縦長 */
@media screen and (orientation: portrait) {
    :root{
        --font-size: 3.5vw;
        --landscape: none;
        --portrait: block;
    }
}
/* 横長 */
@media screen and (orientation: landscape) {
    :root{
        --font-size: 1.5vw;
        --landscape: block;
        --portrait: none;
    }
}

.container {
    margin: 0 auto;
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
