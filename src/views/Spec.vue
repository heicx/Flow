<template>
    <div class="spec-wrap">
        <div class="spec-banner"></div>
        <div class="spec-detail"></div>
    </div>
</template>

<script>
export default {
    methods: {},
    components: {
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.spec-wrap {
    background: #fff;
}

.spec-banner {
    width: 100%;
    height: 604px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~images/spec-banner.png);
    background-image: -webkit-image-set(url(~images/spec-banner.png) 1x,url(~images/spec-banner@2x.png) 2x);
}

.spec-detail {
    width: 100%;
    height: 3271px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~images/spec-content.png);
    background-image: -webkit-image-set(url(~images/spec-content.png) 1x,url(~images/spec-content@2x.png) 2x);
}
</style>