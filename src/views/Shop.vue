<template>
    <div class="shop-wrap">
        <div class="shop-banner-container">
            <div class="shop-banner"></div>
        </div>
        <div class="shop-specs" :class="color">
            <a class="blue-btn" @click="changeColor('blue')"></a>
            <a class="black-btn" @click="changeColor('black')"></a>
            <a class="white-btn" @click="changeColor('white')"></a>
        </div>
        <div class="shop-colors"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 'blue'
        }
    },
    methods: {
        changeColor(color) {
            this.color = color;
        }
    },
    components: {
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.shop-wrap {
    background: #fff;
}

.shop-banner-container {
    width: 100%;
    height: 648px;
    background-image: url(~images/shop-box-banner.jpg);
    background-image: -webkit-image-set(url(~images/shop-box-banner.jpg) 1x,url(~images/shop-box-banner@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .shop-banner {
        width: 1220px;
        height: 648px;
        margin: 0 auto;
        background-image: url(~images/shop-box-banner-text.png);
        background-image: -webkit-image-set(url(~images/shop-box-banner-text.png) 1x,url(~images/shop-box-banner-text@2x.png) 2x);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
}

.shop-specs {
    position: relative;
    width: 1290px;
    height: 600px;
    margin: 0 auto;
    margin-top: -60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &.black {
        background-image: url(~images/shop-box-black.png);
        background-image: -webkit-image-set(url(~images/shop-box-black.png) 1x,url(~images/shop-box-black@2x.png) 2x);
    }
    &.blue {
        background-image: url(~images/shop-box-blue.png);
        background-image: -webkit-image-set(url(~images/shop-box-blue.png) 1x,url(~images/shop-box-blue@2x.png) 2x);
    }
    &.white {
        background-image: url(~images/shop-box-white.png);
        background-image: -webkit-image-set(url(~images/shop-box-white.png) 1x,url(~images/shop-box-white@2x.png) 2x);
    }
    .black-btn {
        position: absolute;
        content: "";
        width: 38px;
        height: 38px;
        border-radius: 50%;
        right: 428px;
        top: 290px;
    }
    .blue-btn {
        position: absolute;
        content: "";
        width: 38px;
        height: 38px;
        border-radius: 50%;
        right: 372px;
        top: 290px;
    }
    .white-btn {
        position: absolute;
        content: "";
        width: 38px;
        height: 38px;
        border-radius: 50%;
        right: 316px;
        top: 290px;
    }
}

.shop-colors {
    width: 1201px;
    height: 788px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~images/shop-category.png);
    background-image: -webkit-image-set(url(~images/shop-category.png) 1x,url(~images/shop-category@2x.png) 2x);
}
</style>