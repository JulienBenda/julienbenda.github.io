<template>
    <div>
        <main style="padding:5vw;">
            <h1 style="text-align:center;border-color:rgba(0,0,0,0)">
                <nuxt-link style="font-size: 40%; text-align: left; display: block;margin-bottom: 5vh;" to="/">
                    &lt; 記事一覧へ
                </nuxt-link>
                <b style="border-bottom: solid 0.5vh black; font-size: 80%;">
                    {{title}}
                </b>
                <p style="font-size: 50%; text-align: right; font-size: 40%;">
                    {{time}}
                </p>
                <picture>
                    <source type="image/webp" :srcset="'/'+(this.samn).split('.')[0]+'.webp'">
                    <img alt="" :src="'/'+this.samn" style="width: 100%;max-width:50%; margin: auto"></img>
                </picture>
            </h1>
            <div style="margin-top: 5vh; padding: 5vw; box-shadow: 0.1vh 0.1vh 0.5vh 0.1vh black;" v-html="this.$props.content.kiji"></div>
        </main>
        <center style="margin-bottom: 10vh;">
            <nuxt-link id="blink" v-if="this.beforeLink(this.url)" style="font-size: 80%; margin-right: 2vw" :to="'../'+this.beforeLink(this.url)">
                前の記事　{{linkTitle(this.beforeLink(this.url))}}
            </nuxt-link>
            <nuxt-link style="font-size: 80%;" to="/">
                記事一覧へ
            </nuxt-link>
            <nuxt-link id="alink" v-if="this.afterLink(this.url)" style="font-size: 80%; margin-left: 2vw" :to="'../'+this.afterLink(this.url)">
                次の記事　{{linkTitle(this.afterLink(this.url))}}
            </nuxt-link>
        </center>
        <footer style="margin-bottom: 2vh; text-align: center;">© CYBER LAB 2020</footer>
        <InformationForm :displayStyle="'flex'"/>
    </div>
</template>


<script>
import fileLists from '~/components/fileLists.json';
const InformationForm = () => import('~/components/information-form.vue');

import highlight from 'highlight.js';

export default{
    data: function() {
        return {
            title: this.linkTitle(this.$props.content.link),
            time: fileLists[this.$props.content.link].time,
            url: "https://julienbenda.github.io/" + this.$props.content.link,
            samn: fileLists[this.$props.content.link].samn,
            // prekiji: this.$props.content.prekiji,
            // kiji: this.$props.content.kiji,
            noExistLink: this.objectMax(fileLists),
        }
    },
    props: [
        'content'
    ],
    head () {
        return {
            title: this.title,
            meta: [
                { hid: 'og:url', property: 'og:url', content: this.url },
                { hid: 'og:description', property: 'og:description', content: 'programming' },
                { hid: 'og:title', property: 'og:title', content: `CYBER LAB - ${this.title}` },
                { hid: 'og:site_name', property: 'og:site_name', content: `CYBER LAB - ${this.title}` },
                { hid: 'og:image', property: 'og:image', content: `https://julienbenda.github.io/GitHub.png` },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: './favicon.ico?' }
            ]
        }
    },
    methods: {
        linkTitle(link) {
            return link ? fileLists[link].title : "";
        },
        objectMax(json) {
            const jok = Object.keys(json);
            const uptoLink = jok[jok.length - 1];
            return `step${parseInt(uptoLink.split("step")[1]) + 1}`;
        },
        beforeLink(link) {
            const result = `step${parseInt(link.split("step")[1]) - 1}`;
            if (result=="step0") return false;
            return result;
        },
        afterLink(link) {
            const result = `step${parseInt(link.split("step")[1]) + 1}`;
            if (result==this.noExistLink) return false;
            return result;
        },
    },
    async mounted() {
        if (!process.client) {
            console.log('default-article mounted');
        }

        const tags = document.body.getElementsByTagName('code');

        var i = 0;
        while(i < tags.length) {
            tags[i].className = tags[i].className + " hljs";
            i = (i+1)|0;
        }
        highlight.initHighlighting();

        if (window.innerHeight < window.innerWidth) return;
        if (this.beforeLink(this.url)) {
            document.getElementById("blink").style.display = "block";
            // document.getElementById("blink").style.textAlign = "left";
            document.getElementById("blink").style.margin = "0 0 2vh 0";
        }
        if (this.afterLink(this.url)) {
            document.getElementById("alink").style.display = "block";
            // document.getElementById("alink").style.textAlign = "right";
            document.getElementById("alink").style.margin = "2vh 0 0 0";
        }
    },
    components: {
        InformationForm,
    }
}

</script>
