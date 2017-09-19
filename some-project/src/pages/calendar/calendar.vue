<template>
  <div class="body">
    <!-- 导航 -->
    <div class="header">
      <text class="back" @click="back">返回</text>
      <text class="title-nav">{{titleStr}}</text>
      <text class="add" @click="add">＋</text>
    </div>
    <!-- 内容 -->
    <div class="wrapper">
      <!-- 星期？ -->
      <div class="weeksWrapper">
        <text class="weeksText" v-for="n in weeks">{{n}}</text>
      </div>
      <!-- 日历 -->
      <slider class="slider" interval="3000" @change="changeNum">
        <div class="frame" v-for="items in daysFinalArr">
          <text v-for="(item,$index) in items" class="font" :class="[item.className,{'isSelect':ind === $index}]" :data-date="item.date" @click="selectDays(item,$index)">{{item.num}}</text>
        </div>
      </slider>
      <!-- 事件 -->
      <scroller class="eventWrapper" show-scrollbar="false">
        <div class="eventItem" v-for="item in 10" @click="goInfo">
          <text class="eventTitle">111111111111111</text>
          <text class="icon-right eventTitle">></text>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
var stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal')
// import api from './api.js';
export default {
  data() {
    return {
      arr: [0, 1, -1],    //三个月的日历数据
      initIndex: 0,        //滑动默认索引
      direction: '',      //滑动方向
      //标题日期
      titleStr: '',
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      dateObj: {},
      daysArr: [],
      daysFinalArr: [],
      currentDate: new Date(),
      isActive: true,
      dayEvent: {},         //当前天的事件
      ind: ''
    }
  },
  created() {
    // 登陆
    this.post('http://120.25.240.32:9000/api/LoginAuthorize/Login', {
      "userName": "admin",
      "password": "123456",
      "rememberMe": true
    }, res => {
      console.log(res)
      this.get(`http://120.25.240.32:9000/api/Schedule/${this.getDateStr(this.currentDate)}`, res => {
        console.log(res)
        modal.toast({
          message: res.message,
          duration: 0.3
        })
      })
      modal.toast({
        message: res.data.message,
        duration: 0.3
      })
    })
    //获取当前月天数
    this.showCalendarData();
    this.daysFinalArr.push(this.daysArr);
    console.log(this.getDateStr(this.currentDate))
    //获取下一月天数
    this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
    this.showCalendarData();
    this.daysFinalArr.push(this.daysArr);
    //获取上月天数
    this.toPrevMonth();
    this.daysFinalArr.push(this.daysArr);
    //天数重置为当前显示月份
    this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
    this.showCalendarData();
  },
  methods: {
    //判断当前滑动方向和位置
    changeNum(e) {
      if (e.index == 1 && this.initIndex == 0) {
        this.direction = 'left'
        this.initIndex = e.index
        this.toNextMonth();
        this.daysFinalArr.pop();        //0 !1 2
        this.daysFinalArr.push(this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1));
        this.showCalendarData();
        return false;
      }
      if (e.index == 2 && this.initIndex == 1) {
        this.direction = 'left'
        this.initIndex = e.index
        this.daysFinalArr.shift()   //3 1 !2
        this.toNextMonth();
        this.daysFinalArr.unshift(this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1));
        this.showCalendarData();
        return false;
      }
      if (e.index == 0 && this.initIndex == 2) {
        this.direction = 'left'
        this.initIndex = e.index
        //!3 4 2
        this.toNextMonth();
        this.daysFinalArr.splice(1, 1, this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1));
        this.showCalendarData();
        return false;
      }
      if (e.index == 2 && this.initIndex == 0) {
        this.direction = 'right'
        this.initIndex = e.index
        //3 1 !2
        this.toPrevMonth();
        this.daysFinalArr.splice(1, 1, this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
        this.showCalendarData();
        return false;
      }
      if (e.index == 1 && this.initIndex == 2) {
        this.direction = 'right'
        this.initIndex = e.index
        //0 !1 2
        this.toPrevMonth()
        this.daysFinalArr.shift();
        this.daysFinalArr.unshift(this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
        this.showCalendarData();
        return false;
      }
      if (e.index == 0 && this.initIndex == 1) {
        this.direction = 'right'
        this.initIndex = e.index
        // !0 1 -1
        this.toPrevMonth();
        this.daysFinalArr.pop();
        this.daysFinalArr.push(this.daysArr)
        this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1));
        this.showCalendarData();
        return false;
      }
      console.log(this.daysFinalArr)
    },
    //根据默认时间显示挡前月天数
    showCalendarData() {
      this.daysArr = [];
      const _year = this.currentDate.getFullYear();
      const _month = this.currentDate.getMonth() + 1;
      const _dateStr = this.getDateStr(this.currentDate);
      this.titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(5, 2) + "月";
      const _firstDay = new Date(_year, _month - 1, 1); //当前月第一天；
      for (let i = 0; i < 42; i++) {
        var dayObj = {};
        let _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
        let _thisDayStr = this.getDateStr(_thisDay);
        dayObj.date = _thisDayStr;
        if (_thisDayStr == this.getDateStr(new Date())) { // 当前天
          dayObj.className = 'currentDay';
        } else if (_thisDayStr.substr(0, 7) == this.getDateStr(_firstDay).substr(0, 7)) {
          dayObj.className = 'currentMonth'; // 当前月
        } else { // 其他月
          dayObj.className = 'otherMonth';
        }
        dayObj.num = _thisDay.getDate()
        this.daysArr.push(dayObj);
      }
    },
    getDateStr(date) {
      const _year = date.getFullYear();
      let _month = date.getMonth() + 1; // 月从0开始计数
      let _d = date.getDate();

      _month = (_month > 9) ? ("" + _month) : ("0" + _month);
      _d = (_d > 9) ? ("" + _d) : ("0" + _d);
      return _year + "-" + _month + "-" + _d;
    },
    //上个月数据
    toPrevMonth() {
      this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 2, 1));
      this.showCalendarData();
    },
    //下个月数据 
    toNextMonth() {
      this.currentDate = (new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 2, 1));
      this.showCalendarData();
    },
    // 选择日期
    selectDays(e, index) {
      this.ind = index;
      console.log(e.date)
    },
    // 跳转到添加日程；
    add() {
      let url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/add.js';
      navigator.push({
        url: url,
        animated: "true"
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    },
    goInfo() {
      let url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/info.js';
      navigator.push({
        url: url,
        animated: "true"
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    },
    back() {
      navigator.pop();
    },
    //获取数据
    post(url, params, callback) {
      return stream.fetch({
        method: 'POST',
        type: 'json',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback)
    },
    get(url,callback) {
      return stream.fetch({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback)
    }
    // 截流
  }
}
</script>
<style scoped>
.header {
  height: 88px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #f7f7f7;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.title-nav {
  font-size: 40px;
}

.back {
  font-size: 40px;
}

.add {
  font-size: 40px;
}

.wrapper {
  background-color: #efeff4;
}

.font {
  height: 60px;
  line-height: 60px;
  font-size: 40px;
  width: 107.14px;
  text-align: center;
  align-items: center;
  white-space: nowrap;
}

.weeksWrapper {
  height: 60px;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: red;
  background-color: #fff;
}

.weeksText {
  flex: 1;
  height: 60px;
  line-height: 60px;
  font-size: 40px;
  text-align: center;
  white-space: normal;
}

.slider {
  width: 750px;
  height: 360px;
  background-color: #fff;
  margin-bottom: 30px;
}

.frame {
  width: 750px;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
}

.currentDay {
  color: red;
}


/* 本月 文字颜色 */

.currentMonth {
  color: #999;
}

.isSelect {
  color: red;
}


/* 其他月颜色 */

.otherMonth {
  color: #ede;
}


/* event */

.eventWrapper {
  height: 750px;
}

.eventItem {
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

.eventTitle {
  font-size: 40px;
}
</style>