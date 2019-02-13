<template>
    <section class="home-wrap">
        <div class="banner-img-1">
            <!-- <video muted="muted" src="http://static.flowclub.com/Flow-F.mp4" loop="loop" autoplay="autoplay"></video>
            <div class="text-container">
                <span class="text"></span>
            </div> -->
        </div>
        <div class="banner-img-2">
            <div class="img"></div>
            <div class="text-container">
                <span class="text"></span>
                <div class="banner-btn">
                    <a class="btn-1" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-21283948660.2.4bb57afaMLmV8H&id=586143386583"></a>
                    <a class="btn-2" target="_blank" href="https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-21283948660.4.4bb57afaMLmV8H&id=586638905206"></a>
                </div>
            </div>
        </div>
        <div class="introduce-container">
            <div class="introduce">
                <h3 class="slogan"></h3>
                <transition name="fade">
                    <ul>
                        <li class="video-1" @mouseover="mouseover('videoFlowA', $event)" @mouseout="mouseout('videoFlowA')">
                            <i class="video-poster-1"></i>
                            <video muted="muted" id="videoFlowA" v-show="videoStatus == 'videoFlowA'" src="http://static.flowclub.com/Flow-A.mp4" loop="loop"></video>
                        </li>
                        <li class="video-2" @mouseover="mouseover('videoFlowB')" @mouseout="mouseout('videoFlowB')">
                            <i class="video-poster-2"></i>
                            <video muted="muted" id="videoFlowB" v-show="videoStatus == 'videoFlowB'" src="http://static.flowclub.com/Flow-B.mp4" loop="loop"></video>
                        </li>
                        <li class="video-3" @mouseover="mouseover('videoFlowC')" @mouseout="mouseout('videoFlowC')">
                            <i class="video-poster-3"></i>
                            <video muted="muted" id="videoFlowC" v-show="videoStatus == 'videoFlowC'" src="http://static.flowclub.com/Flow-C.mp4" loop="loop"></video>
                        </li>
                        <li class="video-4" @mouseover="mouseover('videoFlowD')" @mouseout="mouseout('videoFlowD')">
                            <i class="video-poster-4"></i>
                            <video muted="muted" id="videoFlowD" v-show="videoStatus == 'videoFlowD'" src="http://static.flowclub.com/Flow-D.mp4" loop="loop"></video>
                        </li>
                        <li class="video-5" @mouseover="mouseover('videoFlowE')" @mouseout="mouseout('videoFlowE')">
                            <i class="video-poster-5"></i>
                            <video muted="muted" id="videoFlowE" v-show="videoStatus == 'videoFlowE'" src="http://static.flowclub.com/Flow-E.mp4" loop="loop"></video>
                        </li>
                    </ul>
                </transition>
            </div>
        </div>
        <div class="footer-menu">
            <div class="content">
                <a ></a>
                <router-link to="/effect" class="hotlink"></router-link>
                <router-link to="/shop" class="official-btn"></router-link>
            </div>
        </div>
        <div class="prohibit"></div>
    </section>
</template>

<script>
import { setTimeout } from 'timers';

export default {
    data() {
        return {
            videoStatus: ""
        }
    },
    methods: {
        mouseover(name, event) {
            this.videoStatus = name;

            try {
                let video = document.getElementById(name);
                setTimeout(_ => {
                    console.log(video)
                    video && video.play();
                }, 150);
            }catch(e) {}
        },
        mouseout(name) {
            let video = document.getElementById(name);
            
            this.videoStatus = '';
            video.pause();
        }
    },
    computed: {
    },
    mounted () {
    },
    created () {
    },
    destroyed() {
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
    #videoFlowA {
        transition: opacity .5s;
        opacity: 0.2;
    }
}
.fade.move-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
    #videoFlowA {
        opacity: 0;
    }
  
}
.banner-img-1, .banner-img-2 {
    position: relative;
}

.banner-img-1 {
    // height: 788px;
    // overflow: hidden;
    /** 首屏 Banner 替换 Video **/
    height: 900px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-image: url(~images/home-banner.jpg);
    background-image: -webkit-image-set(url(~images/home-banner.jpg) 1x,url(~images/home-banner@2x.jpg) 2x);
    /** 首屏 Banner 替换 Video **/
    video {
        position: absolute;
        height: 1080px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        object-fit: cover;
        border-bottom: 1px solid #c0c0bd;
    }
    .text-container {
        width: 1200px;
        margin: 0 auto;
        padding-top: 250px;
    }
    .text {
        display: block;
        width: 428px;
        height: 183px;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        background-image: url(~images/home-banner-text.png);
        background-image: -webkit-image-set(url(~images/home-banner-text.png) 1x,url(~images/home-banner-text@2x.png) 2x);
    }
}

@media screen and (min-width: 1601px){
  .banner-img-1 {
    height: 1080px;
  }
}


.banner-img-2 {
    height: 1163px;
    .img {
        position: absolute;
        height: 1184px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: #fff;
        background-image: url(~images/home-banner2.png);
        background-image: -webkit-image-set(url(~images/home-banner2.png) 1x,url(~images/home-banner2@2x.png) 2x);
    }
    .text-container {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding-top: 314px;
        .banner-btn {
            position: absolute;
            content: "";
            bottom: 22px;
            height: 52px;
            left: 16px;
        }
        .btn-1 {
            width: 152px;
            height: 100%;
            display: inline-block;
        }
        .btn-2 {
            margin-left: 24px;
            width: 152px;
            height: 100%;
            display: inline-block;
        }
    }
    .text {
        display: block;
        width: 589px;
        height: 476px;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        background-image: url(~images/home-banner-text2.png);
        background-image: -webkit-image-set(url(~images/home-banner-text2.png) 1x,url(~images/home-banner-text2@2x.png) 2x);
    }
}

.introduce-container {
    width: 100%;
    background-color:#f8f9f9;
	background-image:-webkit-linear-gradient(top,#f5f5f5, #f9fafa,#ffffff);
	background-image:linear-gradient(top,#f5f5f5, #f9fafa,#ffffff);
}
.introduce {
    width: 1300px;
    margin: 0 auto;
    li {
        transition: all .95s ease-out;
        opacity: 0.8;
        position: relative;
        padding-bottom: 40px;
        padding-top: 40px;
    }
    li:hover {
        opacity: 1;
    }
    .slogan {
        width: 1300px;
        height: 410px;
        margin: 0 auto;
        background-image: url(~images/slogan.png);
        background-image: -webkit-image-set(url(~images/slogan.png) 1x,url(~images/slogan@2x.png) 2x);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .video-1 {
        width: 1300px;
        height: 540px;
        background-image: url(~images/video-box-1.png);
        background-image: -webkit-image-set(url(~images/video-box-1.png) 1x,url(~images/video-box-1@2x.png) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .video-poster-1 {
            position: absolute;
            width: 813px;
            height: 540px;
            top: 10px;
            left: 50px;
            background-image: url(~images/video-box-view-1.png);
            background-image: -webkit-image-set(url(~images/video-box-view-1.png) 1x,url(~images/video-box-view-1@2x.png) 2x);
            background-repeat: no-repeat;
            background-size: cover;
        }
        video {
            position: absolute;
            content: "";
            width: 813px;
            height: 540px;
            top: 10px;
            left: 50px;
            object-fit: cover;
            z-index: 10;
            border-radius: 15px 0 0 15px;
        }
    }
    .video-2 {
        width: 1300px;
        height: 540px;
        background-image: url(~images/video-box-2.png);
        background-image: -webkit-image-set(url(~images/video-box-2.png) 1x,url(~images/video-box-2.png) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        .video-poster-2 {
            position: absolute;
            width: 813px;
            height: 540px;
            top: 20px;
            right: 50px;
            background-image: url(~images/video-box-view-2.png);
            background-image: -webkit-image-set(url(~images/video-box-view-2.png) 1x,url(~images/video-box-view-2@2x.png) 2x);
            background-repeat: no-repeat;
            background-size: cover;
        }
        video {
            position: absolute;
            content: "";
            width: 813px;
            height: 540px;
            top: 20px;
            right: 50px;
            object-fit: cover;
            z-index: 10;
            border-radius:  0 15px 15px 0;
        }
    }
    .video-3 {
        width: 1300px;
        height: 540px;
        background-image: url(~images/video-box-3.png);
        background-image: -webkit-image-set(url(~images/video-box-3.png) 1x,url(~images/video-box-3@2x.png) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        .video-poster-3 {
            position: absolute;
            width: 813px;
            height: 540px;
            top: 20px;
            left: 50px;
            background-image: url(~images/video-box-view-3.png);
            background-image: -webkit-image-set(url(~images/video-box-view-3.png) 1x,url(~images/video-box-view-3@2x.png) 2x);
            background-repeat: no-repeat;
            background-size: cover;
        }
        video {
            position: absolute;
            content: "";
            width: 813px;
            height: 540px;
            top: 20px;
            left: 50px;
            object-fit: cover;
            z-index: 10;
            border-radius: 15px 0 0 15px;
        }
    }
    .video-4 {
        width: 1300px;
        height: 540px;
        background-image: url(~images/video-box-4.png);
        background-image: -webkit-image-set(url(~images/video-box-4.png) 1x,url(~images/video-box-4@2x.png) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        .video-poster-4 {
            position: absolute;
            width: 813px;
            height: 540px;
            top: 20px;
            right: 50px;
            background-image: url(~images/video-box-view-4.png);
            background-image: -webkit-image-set(url(~images/video-box-view-4.png) 1x,url(~images/video-box-view-4@2x.png) 2x);
            background-repeat: no-repeat;
            background-size: cover;
        }
        video {
            position: absolute;
            content: "";
            width: 813px;
            height: 540px;
            top: 20px;
            right: 50px;
            object-fit: cover;
            z-index: 10;
            border-radius: 0 15px 15px 0;
        }
    }
    .video-5 {
        width: 1300px;
        height: 540px;
        padding-bottom: 60px;
        background-image: url(~images/video-box-5.png);
        background-image: -webkit-image-set(url(~images/video-box-5.png) 1x,url(~images/video-box-5@2x.png) 2x);
        background-repeat: no-repeat;
        background-size: cover;
        .video-poster-5 {
            position: absolute;
            width: 813px;
            height: 540px;
            top: 20px;
            left: 50px;
            background-image: url(~images/video-box-view-5.png);
            background-image: -webkit-image-set(url(~images/video-box-view-5.png) 1x,url(~images/video-box-view-5@2x.png) 2x);
            background-repeat: no-repeat;
            background-size: cover;
        }
        video {
            position: absolute;
            content: "";
            width: 813px;
            height: 540px;
            top: 20px;
            left: 50px;
            object-fit: cover;
            z-index: 10;
            border-radius: 15px 0 0 15px;
        }
    }
}

.prohibit {
    width: 100%;
    height: 510px;
    margin: 0 auto;
    background-image: url(~images/prohibit.jpg);
    background-image: -webkit-image-set(url(~images/prohibit.jpg) 1x,url(~images/prohibit@2x.jpg) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.footer-menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    z-index: 20;
    background-image: url(~images/footer-menu.png);
    background-image: -webkit-image-set(url(~images/footer-menu.png) 1x,url(~images/footer-menu@2x.png) 2x);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .content {
        position: relative;
        width: 1200px;
        height: 100px;
        margin: 0 auto;
        &:after {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            background-image: url(~images/footer-menu-text.png);
            background-image: -webkit-image-set(url(~images/footer-menu-text.png) 1x,url(~images/footer-menu-text@2x.png) 2x);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    }
    .hotlink {
        position: absolute;
        z-index: 10;
        left: 176px;
        bottom: 16px;
        display: block;
        width: 170px;
        height: 18px;
    }
    .official-btn {
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 0;
        display: block;
        width: 204px;
        height: 100px;
    }
}

</style>