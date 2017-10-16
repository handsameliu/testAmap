// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Index.vue'
// import router from './router'
import axios from 'axios'; // 引入http

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

import VueAMap from 'vue-amap';
// import { lazyAMapApiLoaderInstance } from 'vue-amap';

Vue.use(VueAMap);

// Vue.prototype.VueAMap = VueAMap;

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 申请的高德key
    key: 'cff82cd9f15d3a4cbd0e1d948f02a2da',
    // 插件集合
    plugin: ['AMap.Geolocation','AMap.Driving','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
    
});

// lazyAMapApiLoaderInstance.load().then(() => {
//   // your code ...
//   this.map = new AMap.Map('amapContainer', {
//     center: new AMap.LngLat(121.59996, 31.197646)
//   });
// });

// cdn 方式
// window.VueAMap.initAMapApiLoader({
//     key: 'cff82cd9f15d3a4cbd0e1d948f02a2da',
//     plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// });

// window.VueAMap.lazyAMapApiLoaderInstance.load().then(() => {
//     // your code ...
//     this.map = new AMap.Map('amapContainer', {
//         center: new AMap.LngLat(121.59996, 31.197646)
//     });
// });

const FastClick = require('fastclick');
FastClick.attach(document.body);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
