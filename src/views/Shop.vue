<template>
    <div class="shop-wrap">
        <div class="shop-banner-container">
            <div class="shop-banner">
                <div class="shop-banner-btn">
                    <a class="btn-1" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-21283948660.2.4bb57afaMLmV8H&id=586143386583"></a>
                    <a class="btn-2" @click="showQRCode('qrCode1', $event)"></a>
                </div>
                <div class="qr-code" :class="{'qr-code-anim': qrcodeName == 'qrCode1'}"></div>
            </div>
        </div>
        <div class="shop-specs" :class="color">
            <a class="blue-btn" @click="changeColor('blue')"></a>
            <a class="black-btn" @click="changeColor('black')"></a>
            <a class="white-btn" @click="changeColor('white')"></a>
            <a class="taobao-btn" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-21283948660.2.4bb57afaMLmV8H&id=586143386583"></a>
            <a class="mini-program-btn" @click="showQRCode('qrCode2', $event)"></a>
            <div class="qr-code" :class="{'qr-code-anim': qrcodeName == 'qrCode2'}"></div>
        </div>
        <div class="shop-colors">
            <a class="taobao-btn" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-21283948660.2.4bb57afaMLmV8H&id=586143386583"></a>
            <a class="mini-program-btn" @click="showQRCode('qrCode3', $event)"></a>
            <div class="qr-code" :class="{'qr-code-anim': qrcodeName == 'qrCode3'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 'blue',
            qrcodeName: ''
        }
    },
    methods: {
        changeColor(color) {
            this.color = color;
        },
        showQRCode(name, event) {
            if (this.qrcodeName !== '') {
                this.qrcodeName = '';
            }else {
                this.qrcodeName = name;
                event.stopPropagation();
            }
        }
    },
    components: {
    },
    mounted() {
        let that = this;

        document.addEventListener('click', function (e) {
            let className = e.target.className;

            if(className === 'qr-code') return;
            that.qrcodeName = '';
        })
    }
}
</script>

<style lang="scss" scoped>
.shop-wrap {
    background: #fff;
}

.shop-banner-container {
    width: 100%;
    height: 598px;
    background-image: url(~images/shop-box-banner.jpg);
    background-image: -webkit-image-set(url(~images/shop-box-banner.jpg) 1x,url(~images/shop-box-banner@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .shop-banner {
        position: relative;
        width: 1220px;
        height: 648px;
        margin: 0 auto;
        background-image: url(~images/shop-box-banner-text.png);
        background-image: -webkit-image-set(url(~images/shop-box-banner-text.png) 1x,url(~images/shop-box-banner-text@2x.png) 2x);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .shop-banner-btn {
        position: absolute;
        width: 326px;
        height: 40px;
        top: 370px;
        left: 40px;
        .btn-1 {
            display: inline-block;
            width: 130px;
            height: 26px;
        }
        .btn-2 {
            display: inline-block;
            width: 160px;
            height: 26px;
            margin-left: 30px;
        }
    }
    .qr-code {
        position: absolute;
        width: 280px;
        height: 280px;
        transition: all .15s ease-out;
        opacity: 0;
        border-radius: 16px;
        border: 1px solid #e8e5e5;
        top: 300px;
        left: 380px;
        z-index: 5;
        background-size: cover;
        background-image: url(~images/mini-program.jpg);
        background-image: -webkit-image-set(url(~images/mini-program.jpg) 1x,url(~images/mini-program@2x.jpg) 2x);
        &.qr-code-anim {
            opacity: 1;
        }
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
    .taobao-btn {
        position: absolute;
        content: "";
        width: 152px;
        height: 52px;
        right: 362px;
        top: 364px;
    }
    .mini-program-btn {
        position: absolute;
        content: "";
        width: 152px;
        height: 52px;
        right: 182px;
        top: 364px;
    }
    .qr-code {
        position: absolute;
        width: 280px;
        height: 280px;
        transition: all .15s ease-out;
        opacity: 0;
        border-radius: 16px;
        border: 1px solid #e8e5e5;
        top: 426px;
        right: 116px;
        z-index: 5;
        background-size: cover;
        background-image: url(~images/mini-program.jpg);
        background-image: -webkit-image-set(url(~images/mini-program.jpg) 1x,url(~images/mini-program@2x.jpg) 2x);
        &.qr-code-anim {
            opacity: 1;
        }
    }
}

.shop-colors {
    position: relative;
    width: 1273px;
    height: 670px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url(~images/shop-category.png);
    background-image: -webkit-image-set(url(~images/shop-category.png) 1x,url(~images/shop-category@2x.png) 2x);
    .taobao-btn {
        position: absolute;
        content: "";
        width: 122px;
        height: 22px;
        top: 134px;
        left: 0;
        right: 162px;
        margin: 0 auto;
    }
    .mini-program-btn {
        position: absolute;
        content: "";
        width: 156px;
        height: 22px;
        top: 134px;
        left: 0;
        right: -186px;
        margin: 0 auto;
    }
    .qr-code {
        position: absolute;
        width: 280px;
        height: 280px;
        transition: all .15s ease-out;
        opacity: 0;
        border-radius: 16px;
        border: 1px solid #e8e5e5;
        top: 170px;
        right: 406px;
        z-index: 5;
        background-size: cover;
        background-image: url(~images/mini-program.jpg);
        background-image: -webkit-image-set(url(~images/mini-program.jpg) 1x,url(~images/mini-program@2x.jpg) 2x);
        &.qr-code-anim {
            opacity: 1;
        }
    }
}
</style>