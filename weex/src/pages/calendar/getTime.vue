<template>
  <div class="body">
    <div class="header">
      <text class="title-nav">{{title}}</text>
      <text class="back font-34" @click="back">返回</text>
    </div>
    <text class="null" @click="setStorage('无',0)">无</text>
    <list class="list">
      <cell class="cell" v-for="item in options" :key="item.value" @click="setStorage(item.label,item.value)">
        <text class="text">{{item.label}}</text>
      </cell>
    </list>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
const navigator = weex.requireModule('navigator');
const storage = weex.requireModule('storage')
export default {
  data() {
    return {
      title: '提醒',
      options: [{
        value: 0,
        label: '事件发生时'
      }, {
        value: 5,
        label: '5分钟前'
      }, {
        value: 15,
        label: '15分钟前'
      }, {
        value: 30,
        label: '30分钟前'
      }, {
        value: 60,
        label: '1小时前'
      }, {
        value: 120,
        label: '2小时前'
      }, {
        value: 1440,
        label: '1天前'
      }, {
        value: 2880,
        label: '2天前'
      }],
      optionsEnd: [{
        value: 15,
        label: '15分钟前'
      }, {
        value: 30,
        label: '30分钟前'
      }, {
        value: 60,
        label: '1小时前'
      }, {
        value: 120,
        label: '2小时前'
      }, {
        value: 1440,
        label: '1天前'
      }, {
        value: 2880,
        label: '2天前'
      }, {
        value: 10080,
        label: '一周前'
      }],
    }
  },
  created() {
  },
  methods: {
    back() {
      navigator.pop()
    },
    setStorage(label, value) {
      console.log(label,value)
      const storage = new BroadcastChannel('Avengers1')
      storage.postMessage(JSON.stringify({ label: label, value: value }))
      navigator.pop()
    },
  }
}
</script>

<style scoped>
.body {
  background-color: #f3f3f3;
}

.font-34 {
  font-size: 34px;
  height: 84px;
  line-height: 84px;
}

.font-25 {
  font-size: 25px;
}

.mb20 {
  margin-bottom: 20px;
}

.header {
  height: 84px;
  padding-right: 32px;
  padding-left: 32px;
  background-image: linear-gradient(to right, #1ac9f6, #0a83eb);
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
}

.back {
  position: absolute;
  left: 32px;
  top: 0;
  color: #fff;
  height: 84px;
  line-height: 84px;
}

.title-nav {
  color: #fff;
  width: 686px;
  height: 84px;
  font-size: 34px;
  line-height: 84px;
  overflow: hidden;
  text-align: center;
}

.null {
  margin-top: 154px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  background-color: #fff;
  margin-bottom: 70px;
  line-height: 80px;
  font-size: 25px;
  height: 80px;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 32px;
}

.list {
  background-color: #fff;
}

.cell {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
}

.text {
  line-height: 80px;
  font-size: 25px;
  height: 80px;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 32px;
}
</style>
