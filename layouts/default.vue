<template>
    <div>
        <nuxt keep-alive />
    </div>
</template>


<script>
import Vue from 'vue';

import highlight from 'highlight.js';
// ⚠   Look at file ~/node_modules/highlight.js/lib/index.js ⚠

import marked from 'marked';

export default {
    created: function(){
        if (!process.client) console.log('default created');
        marked.setOptions({
            langPrefix: '',
            highlight: function(code, lang) {
                return highlight.highlightAuto(code, [lang]).value;
            }
        });
    },
    async mounted(){
        if (!process.client) console.log('default mounted');
        highlight.initHighlighting();
    },
}
</script>


<style>
/* 縦長 */
@media screen and (orientation: portrait) {
    :root{
        --font-size: 3.5vw;
        --logo-top: -50px;
    }
    .articleContainer{
        display: block;
    }
    .articleItem{
        padding: 0;
        margin: calc(25px + 2vw) auto calc(25px + 2vw) auto;
        display: block;
        width: 70vw;
        height: 55vw;
    }
}
/* 横長 */
@media screen and (orientation: landscape) {
    :root{
        --font-size: 1.5vw;
        --logo-scale: 0;
    }
    .articleContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1 1 33%;
    }
    .articleContainer::after{
        content: "";
        display: block;
        width: 29vw;
    }
    .articleItem{
        padding: 0;
        margin: calc(25px + 2vw) 0 calc(25px + 2vw) 0;
        display: block;
        width: 29vw;
        height: 25vw;
    }
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: var(--font-size);
    word-break : break-all;
    color: black;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
}

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
}

.innerArticleItem{
    position: relative;
    box-shadow: 0.1vh 0.1vh 0.5vh 0.1vh black;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 900px;
    max-height: 900px;
    margin: auto;
    background: white;
}

main h2, main h1{
    margin-bottom: calc(var(--font-size)*1);
    border-bottom: solid 5px;
    text-align: center;
}

main h2 {
    text-align: left;
    font-size: 130%;
    padding: 0.5vh 0 0.5vh 1vh;
    border-left: solid 0.5vh crimson;
    border-bottom: solid 0.3vh black;
}

main h3, main p, main li{
    text-align: left;
    margin-top: calc(var(--font-size)*1);
    margin-bottom: calc(var(--font-size)*1);
}

#top{
    height: 100vh;
}

#blogs {
    position: absolute;
    left: 0;
    top: 100vh;
    background: white;
    /* height: 100vh; */
    width: 100%;
    text-align: center;
    padding: 5vh 50px 150px 50px;
}

.nyoibo {
    border-bottom: solid 2px black;
    margin: auto;
    animation: nyoibo 1.5s forwards;
}

@keyframes nyoibo {
    0%{width: 0%;}
    100%{width: 100%;}
}

.container {
    margin: 0 auto;
    padding: 0;
    padding-bottom: 10vh;
    min-height: 100vh;
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
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

img {
    box-shadow: 0.1vh 0.1vh 0.5vh 0.1vh black;
    width: 60vw;
    object-fit: contain;
}

/* add marked styles */
blockquote {
    border-left: 2px solid darkslategray;
    padding: 0 15px;
}

</style>
