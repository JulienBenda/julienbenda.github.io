<template>
    <div>
        <nuxt />
    </div>
</template>


<script>
import Vue from 'vue';

import hljs from 'highlight.js';
import marked from 'marked';

export default {
    created: function(){
        if (!process.client) console.log('default created');
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return hljs.highlightAuto(code, [lang]).value;
            }
        });
    },
    async mounted(){
        if (!process.client) console.log('default mounted');
        // hljs.initHighlighting();
        hljs.initHighlightingOnLoad();
    }
}


</script>


<style>
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: #35495e;
}

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

html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* font-family: "PT Serif", "Ubuntu Mono", 'Bungee Shade', monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; */
    font-size: var(--font-size);
    word-break : break-all;
    color: black;
    /* background: linear-gradient(-45deg, black, darkslategray, black); */
    /* background: darkgray; */
    /* background-color: #661400; */
    /* -webkit-background-size: calc(var(--font-size)*0.4) calc(var(--font-size)*0.4); */
    /* background-image: -webkit-gradient(linear, -40% 100%, 10% 150%, color-stop(.5, rgba(255, 255, 255, .15)), color-stop(.5, transparent), to(transparent)); */
    -webkit-text-size-adjust: none;
}

main {
    /* text-align: center; */
}

main h2, main h1{
    /* margin-top: calc(var(--font-size)*2); */
    margin-bottom: calc(var(--font-size)*1);
    border-bottom: solid 5px;
    text-align: center;
}

main h2 {
    text-align: left;
    padding: 3px 0 3px 6px;
    border-left: solid 4px crimson;
    border-bottom: solid 2px black;
}

main h3, main p, main li{
    text-align: left;
    margin-top: calc(var(--font-size)*1);
    margin-bottom: calc(var(--font-size)*1);
}

#blogs {
    position: absolute;
    left: 0;
    top: 100vh;
    background: white;
    /* height: 100vh; */
    width: 100vw;
    text-align: center;
    padding: 5vh 50px 150px 50px;
}
/* #introduction { */
/*     position: absolute; */
/*     left: 0; */
/*     top: 100vh; */
/*     background: #41B883; */
/*     height: 100vh; */
/*     width: 100vw; */
/*     padding: 25vh 50px 50px 50px; */
/* } */
.cb {
    border-left: 1px solid black;
    width: 0;
    top: 0;
    left: 50%;
    height: 100vh;
    position: fixed;
    z-index: 362187;
}
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
    padding-bottom: 10vh;
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

img {
    /* margin: 50px auto; */
    border: solid 1px black;
    width: 60vw;
    /* height: 50%; */
    object-fit: contain;
}
</style>
