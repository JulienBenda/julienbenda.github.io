<template>
    <div>
        <main style="padding:5vw;">
            <h2 style="text-align:center;border-color:rgba(0,0,0,0)">
                <a style="font-size: 50%; text-align: left; display: block;margin-bottom: 5vh;" href="../">
                    &lt; 記事一覧へ
                </a>
                <b style="border-bottom: dotted 3px crimson;">
                    {{title}}
                </b>
                <p style="font-size: 50%; text-align: right;">
                    {{time}}
                </p>
                <img alt="" :src="'/'+this.samn"></img>
            </h2>
            <div style="margin-top: 5vh; padding: 5vw; border: solid 0.2vw black;" v-html="kiji"></div>
        </main>
        <center style="margin-bottom: 10vh;">
            <a id="blink" v-if="this.beforeLink(this.url)" style="font-size: 80%; margin-right: 2vw" :href="'../'+this.beforeLink(this.url)">
                前の記事　{{this.linkTitle(this.beforeLink(this.url))}}
            </a>
            <a style="font-size: 80%;" href="../">
                記事一覧へ
            </a>
            <a id="alink" v-if="this.afterLink(this.url)" style="font-size: 80%; margin-left: 2vw" :href="'../'+this.afterLink(this.url)">
                次の記事　{{linkTitle(this.afterLink(this.url))}}
            </a>
        </center>
        <footer style="margin-bottom: 2vh; text-align: center;">© CYBER LAB 2020</footer>
        <center style="margin-bottom: 7vh;">
            <a 
                href="https://forms.gle/yMfcxPtxpsfHzJZ58"
                style="margin-right: 2vw; font-size: 70%;"
                rel="noopener noreferrer"    
                target="_blank"
                >
                お問い合わせ 
            </a>
            <a 
                href="../privacy-policy"
                style="font-size: 70%;"
                rel="noopener noreferrer"
                target="_blank"
                >
                個人情報保護方針
            </a>
        </center>
    </div>
</template>


<script>
import fileLists from '~/components/fileLists.json';
import marked from 'marked';

export default{
    data: function() {
        return {
            title: this.linkTitle(this.$props.content.link),
            time: fileLists[this.$props.content.link].time,
            url: "https://julienbenda.github.io/" + this.$props.content.link,
            samn: fileLists[this.$props.content.link].samn,
            prekiji: this.$props.content.prekiji,
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
    computed: {
        kiji() {
            return marked(this.prekiji);
        },
    },
    mounted() {
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
    }
}

</script>
