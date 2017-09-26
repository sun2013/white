<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('live')">
            <text class="bar-ic iconfont" :class="['live' == pIndexKey ?'isSelect':'']">&#xe660;</text>
            <text class="bar-txt" :class="['live' == pIndexKey ?'isSelect':'']">直播</text>
        </div>
        <div class="bar-item" @click="tabTo('recommand')">
            <text class="bar-ic iconfont" :class="['recommand' == pIndexKey ?'isSelect':'']">&#xe744;</text>
            <text class="bar-txt" :class="['recommand' == pIndexKey ?'isSelect':'']">推荐</text>
        </div>
        <div class="bar-item act" @click="tabTo('drama')">
            <text class="bar-ic iconfont" :class="['drama' == pIndexKey ?'isSelect':'']">&#xe605;</text>
            <text class="bar-txt" :class="['drama' == pIndexKey ?'isSelect':'']">追番</text>
        </div>
        <div class="bar-item" @click="tabTo('part')">
            <text class="bar-ic iconfont" :class="['part' == pIndexKey ?'isSelect':'']">&#xe61a;</text>
            <text class="bar-txt" :class="['part' == pIndexKey ?'isSelect':'']">分区</text>
        </div>
        <div class="bar-item" @click="tabTo('own')">
            <text class="bar-ic iconfont" :class="['own' == pIndexKey ?'isSelect':'']">&#xe639;</text>
            <text class="bar-txt" :class="['own' == pIndexKey ?'isSelect':'']">专栏</text>
        </div>
    </div>
</template>
<style scoped>
.iconfont {
    font-family: iconfont;
}

.wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
}

.isSelect {
    color: #fb7299;
}

.bar-item {
    flex: 1;
}

.bar-txt,
.bar-ic {
    color: #757575;
    text-align: center;
}

.bar-active {
    color: #fb7299;
}

.bar-ic {
    padding-top: 14px;
    font-size: 38px;
}

.bar-txt {
    font-size: 22px;
    padding-top: 2px;
}
</style>
<script>

var modal = weex.requireModule('modal');
export default {
    computed: {
    },
    data() {
        return {
            pIndexKey: 'live'
        }
    },
    mounted() {
    },
    methods: {
        tabTo(_key) {
            console.log(_key)
            if (this.pIndexKey == _key) return;
            this.pIndexKey = _key;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: _key
                }
            })
        }
    }
}
</script>