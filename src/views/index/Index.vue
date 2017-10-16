<template>
    <div class="amap-page-container">
        <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
        </el-amap>
        <div class="toolbar">
            <button @click="getMap()">get map</button>
        </div>
        <div class="toolbar">
            <span v-if="loaded">
            location: lng = {{ lng }} lat = {{ lat }}
            </span>
            <span v-else>正在定位</span>
        </div>
    </div>
</template>

<style>
    .amap-page-container {
        height: 500px;
        width: 100%;
        font-size:12px;
    }
</style>

<script>
    import { lazyAMapApiLoaderInstance ,AMapManager} from 'vue-amap';
    // NPM 方式
    // import { AMapManager } from 'vue-amap';
    // CDN 方式
    let amapManager = new AMapManager();
    export default {
        data: function() {
            let self = this;
            return {
                amapManager,
                zoom: 12,
                center: [114.298572, 30.584355],
                lng: 0,
                lat: 0,
                map:null,
                loaded: false,
                events: {
                    init: (o) => {
                        console.log('init',new Date().getTime())
                        console.log(o.getCenter())
                        console.log(this.$refs.map.$$getInstance())
                        o.getCity(result => {
                            console.log(result)
                        })
                        // self.getMap();
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
                },{
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            console.log(o)
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                }
                            });
                        }
                    }
                },{
                    pName:'Driving',
                    events:{
                        init(o){
                            // console.log(o);
                            // o.search([{keyword:'方恒国际',city:'北京'},{keyword:'壶口瀑布'}], function(status, result){
                            //     console.log(result);
                            // });   
                        }
                    }
                }]
            };
        },
        mounted(){
            lazyAMapApiLoaderInstance.load().then(() => {
                console.log(new Date().getTime());
                
                this.map = new AMap.Map('amapContainer', {
                    center: new AMap.LngLat(121.59996, 31.197646)
                });

                console.log(this.map);
                // let driving= new AMap.Driving({
                //     map: this.amapManager.getMap(), //this.map,
                //     panel: AMap.DrivingPolicy.LEAST_TIME
                // });

                // console.log(driving);

                // driving.search([{keyword:'方恒国际',city:'北京'},{keyword:'壶口瀑布'}], function(status, result){
                //     console.log(result);
                // });   
            })
        },
        methods: {
            getMap() {
                console.log('amap vue component');
                // amap vue component
                console.log(this.amapManager._componentMap);
                // gaode map instance
                console.log(this.amapManager._map);
            }
        }
    };
</script>
