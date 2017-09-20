<template>
  <div>
    <div class="header">
      <text class="back font-40" @click="back">返回</text>
      <text class="title-nav">{{title}}</text>
    </div>
    <div class="wrapper">
      <div class="subject mb20">
        <text class="font-40">主题</text>
        <textarea name="" id="" cols="30" rows="2" placeholder="请输入日程主要内容主题" v-model="form.subject"></textarea>
      </div>
      <div class="infromation mb20">
        <text class="font-40">详情</text>
        <textarea name="" id="" cols="30" rows="4" placeholder="请输入日程详情" v-model="form.content"></textarea>
      </div>
      <div class="datePicker mb20">
        <text @click="pickStartTime" class="font-40 time1">开始时间：{{form.beginDate}}</text>
        <text @click="pickEndTime" class="font-40 time2">结束时间：{{form.endDate}}</text>
      </div>
      <div class="item">
        <text class="font-40">提醒</text>
        <text class="icon-right font-40">></text>
      </div>
      <div class="item">
        <text class="font-40">重复</text>
        <text class="icon-right font-40">></text>
      </div>
      <div class="actors mb20">
        <text class="font-40">参与者</text>
        <div class="actList">
          <text class="actor font-40">我</text>
        </div>
      </div>
      <div class="item">
        <text class="font-40">关联到任务</text>
        <switch @change="onchange"></switch>
      </div>
      <div class="submit">
        <text class="btn font-40" @click="postMsg">提交</text>
      </div>
    </div>
  </div>
</template>

<script>
const stream = weex.requireModule('stream');
const picker = weex.requireModule('picker');
const navigator = weex.requireModule('navigator');
const modal = weex.requireModule('modal');
export default {
  data() {
    return {
      title: '新增日程',
      form: {
        subject: '',
        content: '',
        beginDate: '年/月/日',
        endDate: '年/月/日',
      }
    }
  },
  created() {
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
          this.form.beginDate = event.data
        }
      })
    },
    pickEndTime() {
      picker.pickDate({
        max: '2029-11-28',
        min: '2005-11-28'
      }, event => {
        if (event.result === 'success') {
          this.form.endTendDateime = event.data
        }
      })
    },
    onchange(e) {
      modal.toast({
        message: e.value,
        duration: 0.3
      })
    },
    post(url, params, callback) {
      return stream.fetch({
        method: 'POST',
        type: 'json',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback)
    },
    postMsg() {
      console.log(this.form)
      this.post('http://120.25.240.32:9000/api/Schedule/Add', this.form, res => {
        modal.toast({
        message: res.message,
        duration: 0.3
      })
      })
    }
  }
}
</script>

<style scoped>
.font-40 {
  font-size: 40px;
  height: 70px;
  line-height: 70px;
}

.mb20 {
  margin-bottom: 20px;
}

.header {
  height: 88px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: rgb(217, 217, 217);
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.title-nav {
  width: 600px;
  height: 88px;
  font-size: 40px;
  line-height: 88px;
  overflow: hidden;
  text-align: center;
}

.wrapper {
  background-color: rgb(243, 243, 243);
}

.subject {
  padding-right: 15px;
  padding-left: 15px;
  background-color: #fff;
}

.infromation {
  padding-right: 15px;
  padding-left: 15px;
  background-color: #fff;
}

.datePicker {
  justify-content: space-between;
  flex-direction: row;
  background-color: rgb(243, 243, 243);
}

.time1 {
  background-color: #fff;
  padding-left: 15px;
}

.time2 {
  background-color: #fff;
  padding-right: 15px;
}

.item {
  display: flex;
  height: 70px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
}

.actors {
  padding-right: 15px;
  padding-left: 15px;
  background-color: #fff;
}

.actList {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.actor {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(225, 225, 225);
  text-align: center;
  line-height: 70px;
}

.submit {
  padding-right: 15px;
  padding-left: 15px;
  background-color: #fff;
}

.btn {
  height: 82px;
  line-height: 82px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
}
</style>
