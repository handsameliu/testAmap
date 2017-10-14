<template>
	<div class="timeline-demo">
	</div>
</template>


<script>
    import eventHub from '../assets/eventHub'
    export default {
        name:'recordTimeLine',
        data () {
            return {
                count: 3
            }
        },
        created(){
            console.log(222);
        },
        methods:{
            sendMsg(){
                var _this = this;
                eventHub.$emit('username','my name is username')
            }
        }
    }
</script>

<style lang="less">
.timeline-demo {
	p {
		color: #888;
		font-size: 0.8rem;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: rgb(4, 190, 2)
	}
}
</style>