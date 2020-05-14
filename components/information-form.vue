<template>
    <!-- TODO キモすぎ -->
    <div v-if="this.$props.displayStyle=='block'" style="margin-top: 5vw;">
        <a 
            href="https://forms.gle/yMfcxPtxpsfHzJZ58"
            rel="noopener noreferrer"
            target="_blank">
            {{contact}}
        </a>
        <a 
            href="./privacy-policy"
            rel="noopener noreferrer"
            target="_blank"
            style="display:block; margin-top:25px;"
            >
            {{privacy}}
        </a>
    </div>
    <center v-else-if="this.$props.displayStyle=='flex'" style="margin-bottom: 7vh;">
        <a 
            href="https://forms.gle/yMfcxPtxpsfHzJZ58"
            style="margin-right: 2vw; font-size: 2vh;"
            rel="noopener noreferrer"    
            target="_blank">
            {{contact}}
        </a>
        <a 
            href="../privacy-policy"
            style="font-size: 2vh;"
            rel="noopener noreferrer"    
            target="_blank">
            {{privacy}}
        </a>
    </center>
    <div v-else>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            // privacy: "個人情報保護方針",
            // contact: "お問い合わせ",
            privacy: "Privacy Policy",
            contact: "Contact Us",
        }
    },
    props: [
        'displayStyle'
    ]
}
</script>
