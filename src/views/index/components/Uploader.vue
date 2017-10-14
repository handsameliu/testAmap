<template>
    <div class="uploader-container">
        <van-uploader :after-read="logContent">
            <van-icon name="photograph"></van-icon>
        </van-uploader>
    </div>
</template>

<script>
    export default {
        name: 'world',
        data () {
            return {
                
            }
        },
        methods:{
            logContent(file) {
                console.log(file)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
