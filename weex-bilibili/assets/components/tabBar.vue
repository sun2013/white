<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('live')">
            <text class="bar-ic iconfont" :class="{'isActivity':'live' == pIndexKey}">&#xe660;</text>
            <text class="bar-txt" :class="{'isActivity':'live' == pIndexKey}">直播</text>
        </div>
        <div class="bar-item" @click="tabTo('recommand')">
            <text class="bar-ic iconfont" :class="{'isActivity':'recommand' == pIndexKey}">&#xe744;</text>
            <text class="bar-txt" :class="{'isActivity':'recommand' == pIndexKey}">推荐</text>
        </div>
        <div class="bar-item act" @click="tabTo('drama')">
            <text class="bar-ic iconfont" :class="{'isActivity':'drama' == pIndexKey}">&#xe605;</text>
            <text class="bar-txt" :class="{'isActivity':'drama' == pIndexKey}">追番</text>
        </div>
        <div class="bar-item" @click="tabTo('part')">
            <text class="bar-ic iconfont" :class="{'isActivity':'part' == pIndexKey}">&#xe61a;</text>
            <text class="bar-txt" :class="{'isActivity':'part' == pIndexKey}">分区</text>
        </div>
        <div class="bar-item" @click="tabTo('own')">
            <text class="bar-ic iconfont" :class="{'isActivity':'own' == pIndexKey}">&#xe639;</text>
            <text class="bar-txt" :class="{'isActivity':'own' == pIndexKey}">专栏</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .isActivity{
      color: red;
    }
</style>
<script>

    var modal = weex.requireModule('modal');
    export default {
        computed:{
            testCS:function () {
                return this.pIndexKey == 'live'?'color:#b4282d;':''
            }
        },
        data () {
            return {
                pIndexKey:'live',
                isActivity:false
            }
        },
        mounted(){
        },
        methods: {
            tabTo(_key){
              console.log(_key)
                if(this.pIndexKey == _key) return;
                this.pIndexKey = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            }
        }
    }
</script>