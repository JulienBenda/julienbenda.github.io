<template>
    <div class="pagination-container">
        <div class="pagination-block" @click="pageBack">&lt;</div>
        <div v-if="lengthPlimit<6" class="pagination-block-numbers">
            <div v-for="n of lengthPlimit">
                <div v-if="n==index" class="pagination-block-highlight" @click="pageOn(n)">{{n}}</div>
                <div v-else class="pagination-block" @click="pageOn(n)">{{n}}</div>
            </div>
        </div>
        <div v-else class="pagination-block-numbers">
            <div v-for="n of indexSlot">
                <div v-if="n==index" class="pagination-block-highlight" @click="pageOn(n)">{{n}}</div>
                <div v-else-if="n" class="pagination-block" @click="pageOn(n)">{{n}}</div>
                <div v-else class="point">...</div>
            </div>
        </div>
        <div class="pagination-block" @click="pageGo">&gt;</div>
    </div>
</template>

<script>
export default{
    data: function() {
        return {
            index: 1,
            indexSlot: [1,2,3,0,Math.ceil(this.$props.info.max / this.$props.info.limit)],
            start: this.$props.info.start,
            upto: this.$props.info.upto,
            limit: this.$props.info.limit,
            lengthPlimit: Math.ceil(this.$props.info.max / this.$props.info.limit),
        }
    },
    methods: {
        pageOn: function(n) {
            if(!n) return;
            if(this.start == this.limit * (n-1)) return;
            const ns = this.limit * (n-1);
            const nu = this.limit * n;
            this.index = n;
            this.paginationOn(ns, nu);
        },
        pageBack: function() {
            if(this.start == 0) return;
            const ns = this.start - this.limit;
            const nu = this.upto - this.limit;
            this.index = this.index - 1;
            this.paginationOn(ns, nu);
        },
        pageGo: function() {
            if(this.start + this.limit >= this.$props.info.max) return;
            const ns = this.start + this.limit;
            const nu = this.upto + this.limit;
            this.index = this.index + 1;
            this.paginationOn(ns, nu);
        },
        paginationOn: function(ns, nu){
            this.start = ns;
            this.upto = nu;
            if(this.lengthPlimit>=6) {
                const indexSplit = [this.index-1,this.index,this.index+1].filter((i)=>i>0&&i<=this.lengthPlimit);
                // アホ
                if(indexSplit.includes(1)){
                    indexSplit.push(0);
                    indexSplit.push(this.lengthPlimit);
                }else if(indexSplit.includes(this.lengthPlimit)){
                    indexSplit.unshift(0);
                    indexSplit.unshift(1);
                }else{
                    if(this.index > 3) indexSplit.unshift(0);
                    indexSplit.unshift(1);
                    if(this.index < this.lengthPlimit-2) indexSplit.push(0);
                    indexSplit.push(this.lengthPlimit);
                }
                this.indexSlot = indexSplit.slice();
            }
            this.$emit('onPaging', {start: ns, upto: nu});
        }
    },
    props: [
        'info'
    ],
}
</script>

<style>
.pagination-container{
    display: flex;
    justify-content: center;
}

.pagination-block-numbers{
    display: flex;
    padding: 0;
    margin: 0;
}

.pagination-block, .pagination-block-highlight, .point{
    padding: auto;
    margin: 2.5px;
    line-height: 3vh;
    width: 3vh;
    height: 3vh;
    text-align: center;
    border-radius: 10%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.pagination-block{
    border: solid 1px gray;
    box-shadow: 0.025vh 0.025vh 0.125vh 0.025vh darkslategray;
}

.pagination-block, .pagination-block-highlight{
    font-size: 50%;
}

.pagination-block, .point{
    color: darkslategray;
}

.pagination-block:hover{
    opacity: 0.5;
    background: dodgerblue;
    color: black;
}

.pagination-block-highlight{
    opacity: 0.7;
    background: midnightblue;
    border: solid 1px midnightblue;
    box-shadow: 0.025vh 0.025vh 0.125vh 0.025vh mediumblue, -0.025vh -0.025vh 0.125vh 0.025vh mediumblue;
    color: white;
}

.point{
    border: solid 1px white;
    box-shadow: 0.025vh 0.025vh 0.125vh 0.025vh white;
    opacity: 0.8;
}
</style>
