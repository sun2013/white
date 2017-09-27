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
var __vue_template__ = __webpack_require__(11)
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
__vue_options__.__file = "F:\\vue-weex-niurui-mobile\\white\\weex\\src\\App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a4c55f76"
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

var _add = __webpack_require__(4);

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },

  components: {
    calendar: _add2.default
  }
}; //
//
//
//
//
//

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(10)
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
__vue_options__.__file = "F:\\vue-weex-niurui-mobile\\white\\weex\\src\\pages\\calendar\\add.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-798430f2"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "font-34": {
    "fontSize": 34,
    "height": 84,
    "lineHeight": 84
  },
  "font-25": {
    "fontSize": 25
  },
  "mb20": {
    "marginBottom": 20
  },
  "header": {
    "height": 84,
    "paddingRight": 32,
    "paddingLeft": 32,
    "backgroundImage": "linear-gradient(to right, #1ac9f6, #0a83eb)",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "alignItems": "center",
    "position": "fixed",
    "left": 0,
    "top": 0
  },
  "back": {
    "position": "absolute",
    "left": 32,
    "top": 0,
    "color": "#ffffff",
    "height": 84,
    "lineHeight": 84
  },
  "title-nav": {
    "color": "#ffffff",
    "width": 686,
    "height": 84,
    "fontSize": 34,
    "lineHeight": 84,
    "overflow": "hidden",
    "textAlign": "center"
  },
  "wrapper": {
    "marginTop": 84,
    "backgroundColor": "#f3f3f3"
  },
  "subject": {
    "paddingRight": 32,
    "paddingLeft": 32,
    "backgroundColor": "#ffffff"
  },
  "sub-title": {
    "marginTop": 40,
    "marginBottom": 27,
    "height": 25,
    "lineHeight": 25
  },
  "infromation": {
    "paddingRight": 32,
    "paddingLeft": 32,
    "backgroundColor": "#ffffff"
  },
  "datePicker": {
    "justifyContent": "space-between",
    "flexDirection": "row",
    "backgroundColor": "rgb(243,243,243)"
  },
  "getTime": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "act-cover": {
    "width": 96,
    "height": 96,
    "borderRadius": 50
  },
  "time1": {
    "backgroundColor": "#ffffff"
  },
  "time2": {
    "backgroundColor": "#ffffff"
  },
  "item": {
    "display": "flex",
    "height": 80,
    "paddingLeft": 32,
    "paddingRight": 32,
    "marginBottom": 20,
    "flexDirection": "row",
    "flexWrap": "no-wrap",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "alignItems": "center"
  },
  "border": {
    "marginBottom": 0,
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#e5e5e5"
  },
  "icon-right": {
    "marginLeft": 28
  },
  "actors": {
    "paddingRight": 32,
    "paddingLeft": 32,
    "backgroundColor": "#ffffff"
  },
  "actList": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "flex-start"
  },
  "act-cell": {
    "marginRight": 20
  },
  "actor": {
    "width": 96,
    "height": 63,
    "textAlign": "center",
    "lineHeight": 63,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "fontSize": 23
  },
  "submit": {
    "paddingRight": 32,
    "paddingLeft": 32,
    "backgroundColor": "#ffffff"
  },
  "btn": {
    "color": "#ffffff",
    "height": 80,
    "lineHeight": 80,
    "marginTop": 40,
    "marginBottom": 110,
    "textAlign": "center",
    "backgroundColor": "#09a1ff",
    "borderRadius": 20
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(7);

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
var picker = weex.requireModule('picker');
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
Date.prototype.Format = function (fmt) {
  //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
};
exports.default = {
  data: function data() {
    return {
      url: '',
      title: '新增日程',
      form: {
        title: '',
        content: '',
        beginDate: '',
        endDate: '年/月/日 00:00:00',
        remind: []
      },
      isRelate: false,
      remind: {
        label: '无'
      },
      isRepeat: {
        label: '无'
      }
    };
  },
  created: function created() {
    this.form.beginDate = new Date().Format("yyyy-MM-dd hh:mm");
    this.form.endDate = new Date(new Date().setMinutes(new Date().getMinutes() + 1)).Format("yyyy-MM-dd hh:mm");
    var storage = new BroadcastChannel('Avengers1');
    var repeat = new BroadcastChannel('Avengers2');
    var that = this;
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('//at.alicdn.com/t/font_428498_e5po2t3v3aii19k9.ttf')"
    });
    storage.onmessage = function (event) {
      that.form.remind = [];
      that.remind = JSON.parse(event.data);
      that.form.remind.push(that.remind.value);
    };
    repeat.onmessage = function (event) {
      that.isRepeat = JSON.parse(event.data);
    };
  },

  methods: {
    back: function back() {
      navigator.pop();
    },
    pickStartTime: function pickStartTime() {
      var _this = this;

      picker.pickDate({
        max: '2029-11-28',
        min: '2005-11-28'
      }, function (event) {
        if (event.result === 'success') {
          _this.form.beginDate = event.data;
          picker.pickTime({}, function (event) {
            if (event.result === 'success') {
              _this.form.beginDate += ' ' + event.data;
            }
          });
        }
      });
    },
    pickEndTime: function pickEndTime() {
      var _this2 = this;

      picker.pickDate({
        max: '2029-11-28',
        min: '2005-11-28'
      }, function (event) {
        if (event.result === 'success') {
          _this2.form.endDate = event.data;
          picker.pickTime({}, function (event) {
            if (event.result === 'success') {
              _this2.form.endDate += ' ' + event.data;
            }
          });
        }
      });
    },
    onchange: function onchange(e) {
      this.isRelate = e.value;
    },
    post: function post(url, params, callback) {
      return stream.fetch({
        method: 'POST',
        body: (0, _stringify2.default)(params),
        headers: { 'Content-Type': 'application/json' },
        url: url,
        type: 'json'
      }, callback);
    },
    postMsg: function postMsg() {
      var that = this;
      console.log(that.form);
      modal.toast({ message: '正在提交...', duration: 1 });
      this.post('http://120.25.240.32:9000/api/LoginAuthorize/Login', {
        "userName": "admin",
        "password": "123456",
        "rememberMe": true
      }, function (res) {
        that.post('http://120.25.240.32:9000/api/Schedule/Add', that.form, function (res) {
          var data = res.data;
          modal.toast({
            message: res.message,
            duration: 0.3
          });
        });
      });
    },
    getTime: function getTime() {
      var url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/getTime.js';
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {});
    },
    getRepeat: function getRepeat() {
      var url = this.$getConfig().bundleUrl;
      url = url.split('/').slice(0, -1).join('/') + '/isRepeat.js';
      navigator.push({
        url: url,
        animated: "true"
      }, function (event) {});
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["title-nav"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
    staticClass: ["back", "font-34", "iconfont"],
    on: {
      "click": _vm.back
    }
  }, [_vm._v("")])]), _c('scroller', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["subject", "mb20"]
  }, [_c('text', {
    staticClass: ["font-25", "sub-title"]
  }, [_vm._v("主题")]), _c('textarea', {
    staticClass: ["font-25"],
    attrs: {
      "name": "",
      "id": "",
      "rows": "3",
      "placeholder": "请输入日程主要内容主题",
      "value": (_vm.form.title)
    },
    on: {
      "input": function($event) {
        _vm.form.title = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["infromation", "mb20"]
  }, [_c('text', {
    staticClass: ["font-25", "sub-title"]
  }, [_vm._v("详情")]), _c('textarea', {
    staticClass: ["font-25"],
    attrs: {
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "6",
      "placeholder": "请输入日程详情",
      "value": (_vm.form.content)
    },
    on: {
      "input": function($event) {
        _vm.form.content = $event.target.attr.value
      }
    }
  })]), _c('div', {
    staticClass: ["item", "border"],
    on: {
      "click": _vm.pickStartTime
    }
  }, [_c('text', {
    staticClass: ["time1", "font-25"]
  }, [_vm._v("开始时间")]), _c('div', {
    staticClass: ["getTime"]
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v(_vm._s(_vm.form.beginDate))]), _c('text', {
    staticClass: ["icon-right", "font-25", "iconfont"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.pickEndTime
    }
  }, [_c('text', {
    staticClass: ["time1", "font-25"]
  }, [_vm._v("结束时间")]), _c('div', {
    staticClass: ["getTime"]
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v(_vm._s(_vm.form.endDate))]), _c('text', {
    staticClass: ["icon-right", "font-25", "iconfont"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["item", "border"],
    on: {
      "click": _vm.getTime
    }
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v("提醒")]), _c('div', {
    staticClass: ["getTime"]
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v(_vm._s(_vm.remind.label))]), _c('text', {
    staticClass: ["icon-right", "font-25", "iconfont"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": _vm.getRepeat
    }
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v("重复")]), _c('div', {
    staticClass: ["getTime"]
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v(_vm._s(_vm.isRepeat.label))]), _c('text', {
    staticClass: ["icon-right", "font-25", "iconfont"]
  }, [_vm._v("")])])]), _vm._m(0), _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["font-25"]
  }, [_vm._v("设置为任务")]), _c('switch', {
    on: {
      "change": _vm.onchange
    }
  })]), (_vm.isRelate) ? _c('div', {
    staticClass: ["actors", "mb20"]
  }, [_c('text', {
    staticClass: ["font-25", "sub-title"]
  }, [_vm._v("监督者")]), _vm._m(1)]) : _vm._e(), _c('div', {
    staticClass: ["submit"]
  }, [_c('text', {
    staticClass: ["btn", "font-25"],
    on: {
      "click": _vm.postMsg
    }
  }, [_vm._v("提 交")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["actors", "mb20"]
  }, [_c('text', {
    staticClass: ["font-25", "sub-title"]
  }, [_vm._v("参与者")]), _c('div', {
    staticClass: ["actList"]
  }, [_c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])]), _c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i2.hdslb.com/bfs/face/4b6eb872d4c29352bcea4b110bd04aef022ddf58.jpg"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])]), _c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["actList"]
  }, [_c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])]), _c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i2.hdslb.com/bfs/face/4b6eb872d4c29352bcea4b110bd04aef022ddf58.jpg"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])]), _c('div', {
    staticClass: ["act-cell"]
  }, [_c('image', {
    staticClass: ["act-cover"],
    attrs: {
      "src": "https://i1.hdslb.com/bfs/face/306c7a83680a2787a462310ca9d80841d1930267.gif"
    }
  }), _c('text', {
    staticClass: ["actor", "font-25"]
  }, [_vm._v("我我我我我我")])])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('calendar')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);