<template>
    <div>
        <div v-if="this.lookO==this.$props.dom_ids.length-1" class="scrlt">
            <a href="#" @click="clickSmoothScroll()"><span></span>Top</a>
        </div>
        <div v-else class="scrl">
            <a href="#" @click="clickSmoothScroll()"><span></span>Scroll</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import smoothScroll from 'vue-smoothscroll';

Vue.use(smoothScroll);

export default {
    data: function() {
        return {
            lookO: this.$props.look,
        }
    },
    props: [
        'dom_ids', 'look'
    ],
    methods: {
        async clickSmoothScroll () {
            event.preventDefault();
            if (this.lookO > this.$props.dom_ids.length - 1) this.lookO = 0;
            this.$SmoothScroll(
                document.querySelector(this.$props.dom_ids[this.lookO++]),
                500,
                null,
                null,
                'y'
            // await this.sleep(500);
            // TODO css アニメーション
            );
            // this.$emit('on', {start: ns, upto: nu});
        },
        sleep: function(n) {
            return new Promise(resolve => setTimeout(resolve, n));
        }
    }
}
</script>

<style>
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

.scrl a span, .scrlt a span{
    position: absolute;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top: -70px;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    box-sizing: border-box;
}

.scrl a span {
    border-left: 1px solid #35495e;
    border-bottom: 1px solid #35495e;
    -webkit-animation: sdb 1.5s infinite;
    animation: sdb 1.5s infinite;
}

.scrlt a span {
    border-right: 1px solid #35495e;
    border-top: 1px solid #35495e;
    -webkit-animation: sdbt 1.5s infinite;
    animation: sdbt 1.5s infinite;
}

@keyframes sdbt {
    0% {
        transform: rotateY(0) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
    50% {opacity: 1;}
    100% {
        transform: rotateY(720deg) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
}
@keyframes sdb {
    0% {
        transform: rotateY(0) rotateZ(-45deg) translate(0, 0);
        opacity: 0;
    }
    50% {opacity: 1;}
    100% {
        transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px);
        opacity: 0;
    }
}
</style>
