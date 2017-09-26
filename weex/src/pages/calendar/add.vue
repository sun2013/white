<template>
  <div>
    <div class="header">
      <text class="title-nav">{{title}}</text>
      <text class="back font-34 iconfont" @click="back">&#xe622;</text>
    </div>
    <scroller class="wrapper">
      <div class="subject mb20">
        <text class="font-25 sub-title">主题</text>
        <textarea class="font-25" name="" id="" rows="3" placeholder="请输入日程主要内容主题" v-model="form.subject"></textarea>
      </div>
      <div class="infromation mb20">
        <text class="font-25 sub-title">详情</text>
        <textarea class="font-25 " name="" id="" cols="30" rows="6" placeholder="请输入日程详情" v-model="form.content"></textarea>
      </div>
      <div class="item border" @click="pickStartTime">
        <text class="time1 font-25">开始时间</text>
        <div class="getTime">
          <text class="font-25">{{form.beginDate}} {{form.beginTime}}</text>
          <text class="icon-right font-25 iconfont">&#xe63a;</text>
        </div>
      </div>
      <div class="item" @click="pickEndTime">
        <text class="time1 font-25">结束时间</text>
        <div class="getTime">
          <text class="font-25">{{form.endDate}} {{form.endTime}}</text>
          <text class="icon-right font-25 iconfont">&#xe63a;</text>
        </div>
      </div>
      <div class="item border" @click="getTime">
        <text class="font-25">提醒</text>
        <div class="getTime">
          <text class="font-25">{{remind.label}}</text>
          <text class="icon-right font-25 iconfont">&#xe63a;</text>
        </div>
      </div>
      <div class="item" @click="getRepeat">
        <text class="font-25">重复</text>
        <div class="getTime">
          <text class="font-25">{{isRepeat.label}}</text>
          <text class="icon-right font-25 iconfont">&#xe63a;</text>
        </div>
      </div>
      <div class="actors mb20">
        <text class="font-25 sub-title">参与者</text>
        <div class="actList">
          <div class="act-cell">
            <image class="act-cover" src="https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>
          <div class="act-cell">
            <image class="act-cover" src="https://i2.hdslb.com/bfs/face/4b6eb872d4c29352bcea4b110bd04aef022ddf58.jpg"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>
          <div class="act-cell">
            <image class="act-cover" src="https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>

        </div>
      </div>
      <div class="item">
        <text class="font-25">设置为任务</text>
        <switch @change="onchange"></switch>
      </div>
      <div class="actors mb20" v-if="isRelate">
        <text class="font-25 sub-title">监督者</text>
        <div class="actList">
          <div class="act-cell">
            <image class="act-cover" src="https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>
          <div class="act-cell">
            <image class="act-cover" src="https://i2.hdslb.com/bfs/face/4b6eb872d4c29352bcea4b110bd04aef022ddf58.jpg"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>
          <div class="act-cell">
            <image class="act-cover" src="https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"></image>
            <text class="actor font-25">我我我我我我</text>
          </div>

        </div>
      </div>
      <div class="submit">
        <text class="btn font-25" @click="postMsg">提 交</text>
      </div>
    </scroller>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
const picker = weex.requireModule('picker');
const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
const storage = weex.requireModule('storage');
export default {
  data() {
    return {
      url: '',
      title: '新增日程',
      form: {
        subject: '',
        content: '',
        beginDate: '年/月/日',
        beginTime: '00:00:00',
        endDate: '年/月/日',
        endTime: '00:00:00'
      },
      isRelate: false,
      remind: {
        label: '无'
      },
      isRepeat: {
        label: '无'
      }
    }
  },
  mounted() {
    const storage = new BroadcastChannel('Avengers1');
    const repeat = new BroadcastChannel('Avengers2');
    const that = this;
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('//at.alicdn.com/t/font_428498_e5po2t3v3aii19k9.ttf')"
    });
    storage.onmessage = function(event) {
      that.remind = JSON.parse(event.data);
    };
    repeat.onmessage = function(event) {
      that.isRepeat = JSON.parse(event.data);
    }
  },
  methods: {
    back() {
      navigator.pop();
    },
    pickStartTime() {
      picker.pickDate({
        max: '2029-11-28',
        min: '2005-11-28'
      }, event => {
        if (event.result === 'success') {
          this.form.beginDate = event.data;
          picker.pickTime({}, event => {
            if (event.result === 'success') {
              this.form.beginTime = event.data;
            }
          })
        }
      })
    },
    pickEndTime() {
      picker.pickDate({
        max: '2029-11-28',
        min: '2005-11-28'
      }, event => {
        if (event.result === 'success') {
          this.form.endDate = event.data
          picker.pickTime({}, event => {
            if (event.result === 'success') {
              this.form.endTime = event.data;
            }
          })
        }
      })
    },
    onchange(e) {
      this.isRelate = e.value;
    },
    post(url, params, callback) {
      return stream.fetch({
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback)
    },
    postMsg() {
      const that = this
      this.post('http://120.25.240.32:9000/api/LoginAuthorize/Login', {
        "userName": "admin",
        "password": "123456",
        "rememberMe": true
      }, function(res) {
        that.post('http://120.25.240.32:9000/api/Schedule/Add', that.form, res => {
          console.log(res)
          modal.toast({
            message: res,
            duration: 0.3
          })
        })
      })
    },
    getTime() {
      let url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/getTime.js';
      navigator.push({
        url: url,
        animated: "true"
      }, event => {

      })
    },
    getRepeat() {
      let url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/isRepeat.js';
      navigator.push({
        url: url,
        animated: "true"
      }, event => {

      })
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
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

.wrapper {
  margin-top: 84px;
  background-color: #f3f3f3;
}

.subject {
  padding-right: 32px;
  padding-left: 32px;
  background-color: #fff;
}

.sub-title {
  margin-top: 40px;
  margin-bottom: 27px;
  height: 25px;
  line-height: 25px;
}

.infromation {
  padding-right: 32px;
  padding-left: 32px;
  background-color: #fff;
}

.datePicker {
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(243, 243, 243);
}

.getTime {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.act-cover {
  width: 96px;
  height: 96px;
  border-radius: 50%;
}

.time1 {
  background-color: #fff;
}

.time2 {
  background-color: #fff;
}

.item {
  display: flex;
  height: 80px;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
}

.border {
  margin-bottom: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
}

.icon-right {
  margin-left: 28px;
}

.actors {
  padding-right: 32px;
  padding-left: 32px;
  background-color: #fff;
}

.actList {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.act-cell {
  margin-right: 20px;
}

.actor {
  width: 96px;
  height: 63px;
  text-align: center;
  line-height: 63px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 23px;
}

.submit {
  padding-right: 32px;
  padding-left: 32px;
  background-color: #fff;
}

.btn {
  color: #fff;
  height: 80px;
  line-height: 80px;
  margin-top: 40px;
  margin-bottom: 110px;
  text-align: center;
  background-color: #09a1ff;
  border-radius: 20px;
}
</style>
