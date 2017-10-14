<template>
    <div class="amap-page-container">
      <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      </el-amap>

      <div class="toolbar">
        <button @click="getMap()">get map</button>
      </div>
    </div>
  </template>

  <style>
    .amap-page-container {
      height: 500px;
      width: 100%;
    }
  </style>

  <script>
    import VueAMap from 'vue-amap';
    import { lazyAMapApiLoaderInstance } from 'vue-amap';
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    let amapManager = new VueAMap.AMapManager();
    export default {
      data: function() {
        return {
          amapManager,
          zoom: 12,
          center: [114.298572, 30.584355],
          events: {
            init: (o) => {
                console.log('init',new Date().getTime())
                console.log(o.getCenter())
                console.log(this.$refs.map.$$getInstance())
                o.getCity(result => {
                    console.log(result)
                })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }]
        };
      },
        mounted(){
            let vm = this;
            lazyAMapApiLoaderInstance.load().then(() => {
                console.log(new Date().getTime());
                vm.getMap();
                // your code ...
                // this.map = new AMap.Map('amapContainer', {
                //     center: new AMap.LngLat(121.59996, 31.197646)
                // });
            });
        },
      methods: {
        getMap() {
          // amap vue component
          console.log(amapManager._componentMap);
          // gaode map instance
          console.log(amapManager._map);
        }
      }
    };
</script>