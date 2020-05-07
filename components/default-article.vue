<template>
    <div>
        <main style="padding:5vw;">
            <h2 style="text-align:center;border-color:rgba(0,0,0,0)">
                <p style="font-size: 50%; text-align: left;" @click="$router.push('/')">
                    &lt; 記事一覧へ
                </p>
                <b style="border-bottom: dotted 3px crimson;">
                    {{title}}
                </b>
                <p style="font-size: 50%; text-align: right;">
                    {{time}}
                </p>
                <img alt="" :src="'/'+this.samn"></img>
            </h2>
            <div style="margin-top: 5vh; padding: 5vw; border: solid 5px black;" v-html="kiji"></div>
        </main>
        <center style="margin-bottom: 5vh"><a 
            href="https://forms.gle/yMfcxPtxpsfHzJZ58"
            rel="noopener noreferrer"    
            target="_blank"
            >
            お問い合わせ 
            </a>
            <a 
                href="../privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
                style="display:block; margin-top:25px;"
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
            title: fileLists[this.$props.content.link].title,
            time: fileLists[this.$props.content.link].time,
            url: "https://julienbenda.github.io/" + this.$props.content.link,
            samn: fileLists[this.$props.content.link].samn,
            prekiji: this.$props.content.prekiji
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
    computed: {
        kiji(){
            return marked(this.prekiji);
        }
    },
}

</script>
