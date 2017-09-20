// { "framework": "Vue" } 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(1);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_App2.default.el = '#root';
new Vue(_App2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\vue-weex-niurui-mobile\\weexApp\\src\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-be5f700e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  components: {
    calendar: _index2.default
  }
}; //
//
//
//
//
//

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('calendar')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\vue-weex-niurui-mobile\\weexApp\\src\\pages\\calendar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ee15faf8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calendar = __webpack_require__(12);

var _calendar2 = _interopRequireDefault(_calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  components: {
    calendar: _calendar2.default
  }
}; //
//
//
//
//
//

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\vue-weex-niurui-mobile\\weexApp\\src\\pages\\calendar\\calendar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9b7c5f08"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": 88,
    "paddingRight": 15,
    "paddingLeft": 15,
    "backgroundColor": "#f7f7f7",
    "justifyContent": "space-between",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "relative",
    "boxShadow": "0 2px 5px rgba(0, 0, 0, 0.5)"
  },
  "title-nav": {
    "fontSize": 40
  },
  "back": {
    "fontSize": 40
  },
  "add": {
    "fontSize": 40
  },
  "wrapper": {
    "backgroundColor": "#efeff4"
  },
  "font": {
    "height": 60,
    "lineHeight": 60,
    "fontSize": 40,
    "width": 107.14,
    "textAlign": "center",
    "alignItems": "center",
    "whiteSpace": "nowrap"
  },
  "weeksWrapper": {
    "height": 60,
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 2,
    "borderBottomColor": "#FF0000",
    "backgroundColor": "#ffffff"
  },
  "weeksText": {
    "flex": 1,
    "height": 60,
    "lineHeight": 60,
    "fontSize": 40,
    "textAlign": "center",
    "whiteSpace": "normal"
  },
  "slider": {
    "width": 750,
    "height": 360,
    "backgroundColor": "#ffffff",
    "marginBottom": 30
  },
  "frame": {
    "width": 750,
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "currentDay": {
    "color": "#FF0000"
  },
  "currentMonth": {
    "color": "#999999"
  },
  "isSelect": {
    "color": "#FF0000"
  },
  "otherMonth": {
    "color": "#eeddee"
  },
  "eventWrapper": {
    "height": 750
  },
  "eventItem": {
    "display": "flex",
    "height": 70,
    "paddingLeft": 15,
    "paddingRight": 15,
    "marginBottom": 20,
    "flexDirection": "row",
    "flexWrap": "no-wrap",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "alignItems": "center"
  },
  "eventTitle": {
    "fontSize": 40
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(15);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
// import api from './api.js';
exports.default = {
  data: function data() {
    return {
      arr: [0, 1, -1], //三个月的日历数据
      initIndex: 0, //滑动默认索引
      direction: '', //滑动方向
      //标题日期
      titleStr: '',
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      dateObj: {},
      daysArr: [],
      daysFinalArr: [],
      currentDate: new Date(),
      isActive: true,
      dayEvent: {}, //当前天的事件
      ind: ''
    };
  },
  created: function created() {
    var _this = this;

    // 登陆
    this.post('http://120.25.240.32:9000/api/LoginAuthorize/Login', {
      "userName": "admin",
      "password": "123456",
      "rememberMe": true
    }, function (res) {
      console.log(res);
      _this.get('http://120.25.240.32:9000/api/Schedule/' + _this.getDateStr(_this.currentDate), function (res) {
        console.log(res);
        modal.toast({
          message: res.message,
          duration: 0.3
        });
      });
      modal.toast({
        message: res.data.message,
        duration: 0.3
      });
    });
    //获取当前月天数
    this.showCalendarData();
    this.daysFinalArr.push(this.daysArr);
    console.log(this.getDateStr(this.currentDate));
    //获取下一月天数
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.showCalendarData();
    this.daysFinalArr.push(this.daysArr);
    //获取上月天数
    this.toPrevMonth();
    this.daysFinalArr.push(this.daysArr);
    //天数重置为当前显示月份
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.showCalendarData();
  },

  methods: {
    //判断当前滑动方向和位置
    changeNum: function changeNum(e) {
      if (e.index == 1 && this.initIndex == 0) {
        this.direction = 'left';
        this.initIndex = e.index;
        this.toNextMonth();
        this.daysFinalArr.pop(); //0 !1 2
        this.daysFinalArr.push(this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        this.showCalendarData();
        return false;
      }
      if (e.index == 2 && this.initIndex == 1) {
        this.direction = 'left';
        this.initIndex = e.index;
        this.daysFinalArr.shift(); //3 1 !2
        this.toNextMonth();
        this.daysFinalArr.unshift(this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        this.showCalendarData();
        return false;
      }
      if (e.index == 0 && this.initIndex == 2) {
        this.direction = 'left';
        this.initIndex = e.index;
        //!3 4 2
        this.toNextMonth();
        this.daysFinalArr.splice(1, 1, this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
        this.showCalendarData();
        return false;
      }
      if (e.index == 2 && this.initIndex == 0) {
        this.direction = 'right';
        this.initIndex = e.index;
        //3 1 !2
        this.toPrevMonth();
        this.daysFinalArr.splice(1, 1, this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.showCalendarData();
        return false;
      }
      if (e.index == 1 && this.initIndex == 2) {
        this.direction = 'right';
        this.initIndex = e.index;
        //0 !1 2
        this.toPrevMonth();
        this.daysFinalArr.shift();
        this.daysFinalArr.unshift(this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.showCalendarData();
        return false;
      }
      if (e.index == 0 && this.initIndex == 1) {
        this.direction = 'right';
        this.initIndex = e.index;
        // !0 1 -1
        this.toPrevMonth();
        this.daysFinalArr.pop();
        this.daysFinalArr.push(this.daysArr);
        this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
        this.showCalendarData();
        return false;
      }
      console.log(this.daysFinalArr);
    },

    //根据默认时间显示挡前月天数
    showCalendarData: function showCalendarData() {
      this.daysArr = [];
      var _year = this.currentDate.getFullYear();
      var _month = this.currentDate.getMonth() + 1;
      var _dateStr = this.getDateStr(this.currentDate);
      this.titleStr = _dateStr.substr(0, 4) + "年" + _dateStr.substr(5, 2) + "月";
      var _firstDay = new Date(_year, _month - 1, 1); //当前月第一天；
      for (var i = 0; i < 42; i++) {
        var dayObj = {};
        var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());
        var _thisDayStr = this.getDateStr(_thisDay);
        dayObj.date = _thisDayStr;
        if (_thisDayStr == this.getDateStr(new Date())) {
          // 当前天
          dayObj.className = 'currentDay';
        } else if (_thisDayStr.substr(0, 7) == this.getDateStr(_firstDay).substr(0, 7)) {
          dayObj.className = 'currentMonth'; // 当前月
        } else {
          // 其他月
          dayObj.className = 'otherMonth';
        }
        dayObj.num = _thisDay.getDate();
        this.daysArr.push(dayObj);
      }
    },
    getDateStr: function getDateStr(date) {
      var _year = date.getFullYear();
      var _month = date.getMonth() + 1; // 月从0开始计数
      var _d = date.getDate();

      _month = _month > 9 ? "" + _month : "0" + _month;
      _d = _d > 9 ? "" + _d : "0" + _d;
      return _year + "-" + _month + "-" + _d;
    },

    //上个月数据
    toPrevMonth: function toPrevMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 2, 1);
      this.showCalendarData();
    },

    //下个月数据 
    toNextMonth: function toNextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 2, 1);
      this.showCalendarData();
    },

    // 选择日期
    selectDays: function selectDays(e, index) {
      this.ind = index;
      console.log(e.date);
    },

    // 跳转到添加日程；
    add: function add() {
      var url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/add.js';
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    goInfo: function goInfo() {
      var url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/info.js';
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {
        modal.toast({ message: 'callback: ' + event });
      });
    },
    back: function back() {
      navigator.pop();
    },

    //获取数据
    post: function post(url, params, callback) {
      return stream.fetch({
        method: 'POST',
        type: 'json',
        body: (0, _stringify2.default)(params),
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback);
    },
    get: function get(url, callback) {
      return stream.fetch({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        url: url
      }, callback);
    }
    // 截流

  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(17);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["body"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["back"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回")]), _c('text', {
    staticClass: ["title-nav"]
  }, [_vm._v(_vm._s(_vm.titleStr))]), _c('text', {
    staticClass: ["add"],
    on: {
      "click": _vm.add
    }
  }, [_vm._v("＋")])]), _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["weeksWrapper"]
  }, _vm._l((_vm.weeks), function(n) {
    return _c('text', {
      staticClass: ["weeksText"]
    }, [_vm._v(_vm._s(n))])
  })), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000"
    },
    on: {
      "change": _vm.changeNum
    }
  }, _vm._l((_vm.daysFinalArr), function(items) {
    return _c('div', {
      staticClass: ["frame"]
    }, _vm._l((items), function(item, $index) {
      return _c('text', {
        staticClass: ["font"],
        class: [item.className, {
          'isSelect': _vm.ind === $index
        }],
        attrs: {
          "dataDate": item.date
        },
        on: {
          "click": function($event) {
            _vm.selectDays(item, $index)
          }
        }
      }, [_vm._v(_vm._s(item.num))])
    }))
  })), _c('scroller', {
    staticClass: ["eventWrapper"],
    attrs: {
      "showScrollbar": "false"
    }
  }, _vm._l((10), function(item) {
    return _c('div', {
      staticClass: ["eventItem"],
      on: {
        "click": _vm.goInfo
      }
    }, [_c('text', {
      staticClass: ["eventTitle"]
    }, [_vm._v("111111111111111")]), _c('text', {
      staticClass: ["icon-right", "eventTitle"]
    }, [_vm._v(">")])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('calendar')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);