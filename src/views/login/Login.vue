<!-- 在*.vue文件，
template标签里写html代码，且template直接子级只能有一个标签。
style标签里写样式，
script里面写js代码 -->

<template>
    <div id="app">
        {{loginMsg}}
    </div>
</template>

<script>
    const FastClick = require('fastclick')
    FastClick.attach(document.body);
    export default {
        name: 'login',  /* 这个name暂时不知道用啥用，根据官方文档说的是方便排错的 */
        data() {
            return {
                loginMsg: '',/* 这里是数据，一定记住数据一定要放data中然后用return返回 */
            }
        },
        created:function(){
            var vm = this;
            this.$http.post('/api/user/signIn',{'userName':'112','password':'222'}).then((result) => {
                let data = result.data;
                vm.loginMsg = data;
                // that.$set('alllist',data);
            },(error) => {
                console.log(error);
            })
        },
        methods:{
            onShow () {
                console.log('on show')
            },
        }

    }
</script>
<style scoped>
    #login {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
