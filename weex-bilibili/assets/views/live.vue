<template>
    <div class="wrapper">
        <home-header></home-header>
        <scroller class="main-list" offset-accuracy="300px">
            <slider class="slider" auto-play="true" interval="5000">
                <div class="frame" v-for="img in imageList">
                    <image class="image" :src="img.img"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
            <list class="list" v-for="items in liveArr" @loadmore="" loadmoreoffset="10">
                <cell class="cell" v-for="item in items.lives">
                    <image class="cover" :src="item.cover.src"></image>
                </cell>
            </list>
        </scroller>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
}

.wrapper {}


.image {
    width: 750px;
    height: 235px;
}

.slider {
    width: 750px;
    height: 235px;
}

.frame {
    width: 750px;
    height: 235px;
    position: relative;
}

.indicator {
    width: 750px;
    height: 40px;
    item-color: white;
    item-selected-color: #fb7299;
    item-size: 12px;
    position: absolute;
    bottom: 10px;
    right: 0px;
}

.list {
    flex-direction: column;
    width: 750px;
}

.cell {
    width: 750px;
    height: 750px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.cover {
    width: 300px;
    height: 300px;
}

.main-list {
    position: fixed;
    top: 168px;
    bottom: 90px;
    left: 0;
    right: 0;
    /*margin-top: 167px;*/
    /*margin-bottom: 90px;*/
}

.cell-button {
    padding-bottom: 18px;
}

.slogan {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #fff;
}

.i-slg {
    height: 66px;
    font-size: 26px;
    padding-top: 16px;
    flex: 1;
    text-align: center;
    color: #fb7299;
}
</style>

<script>
var modal = weex.requireModule('modal')
var navigator = weex.requireModule('navigator')
var stream = weex.requireModule('stream')
import util from '../../src/assets/util';
import Header from '../components/Header.vue';
export default {
    components: {
        'home-header': Header,
    },
    data() {
        return {
            Banners: [],
            showLoading: 'hide',
            liveData: {},
            imageList: [],
            liveArr: {}
        }
    },

    methods: {
        jumpWeb(_url) {
            const url = this.$getConfig().bundleUrl;
            navigator.push({
                url: util.setBundleUrl(url, 'page/web.js?weburl=' + _url),
                animated: "true"
            });
        },
        $httpsGet(url, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: url
            }, callback)
        }
    },
    created() {
        this.$httpsGet('http://api.live.bilibili.com/AppIndex/home?device=phone&platform=ios&scale=3&build=10000', res => {
            this.liveData = res.data.data;
            this.imageList = this.liveData.banner;
            this.liveArr = this.liveData.partitions;
            modal.toast({ message: this.imageList, duration: 1 })
        })
    }
}
</script>