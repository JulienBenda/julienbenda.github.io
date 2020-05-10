<template>
    <div>
        <DefaultArticle :content="{link:this.link, prekiji:this.prekiji}"/>
    </div>
</template>


<script>

const DefaultArticle = () => import('~/components/default-article.vue');

export default{
    data: function() {
        return {
            link: "step6",
            prekiji:
`
## SSHとは

　

## 終わり

　この通り簡単なのでぜひやってみてください。
`
        }
    },
    components: {
        DefaultArticle
    },
}

</script>
