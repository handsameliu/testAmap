<template>
    <div class="hello">
        <van-address-edit
            :area-list="areaList"
            :show-postal="true"
            :show-set-default="true"
            :show-search-result="true"
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
    import { Toast } from 'vant';
    import areaList from '../../../lib/area.json';

    export default {
        name: 'hello',
        data () {
            return {
                areaList,
                searchResult: []
            }
        },
        methods:{
            onSave() {
                Toast('save');
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }
</script>
<style scoped>
    
</style>
