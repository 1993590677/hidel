import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// 安装element-Ul
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// echarts的引入
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// axios
import axios from "axios"
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$axios = axios

Vue.filter('dateFormat', function (dateStr, pattern = "") {
  //根据给定的时间字符串，得到特定的时间
  var dt = new Date(dateStr)
  //yyy---mm-dd
  var y = dt.getFullYear() //得到年份
  var m = dt.getMonth() + 1 //得到月份
  var d = dt.getDate() //得到日期
  // return y + '-' + m + '-' + d



  if (pattern.toLowerCase() === "yyy-mm-dd") {
    return `${y}-${m}-${d}`
  }
  else {
    var hh = dt.getHours() //得到时
    var mm = dt.getMinutes() //得到分
    var ss = dt.getSeconds() //得到秒
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
})



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
