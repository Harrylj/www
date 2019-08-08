<template>
    <div class="cnt">
       <mm-title name="page1"></mm-title>
       <!-- <mm-button>hahah</mm-button> -->
       <!-- <div style="height:4rem;overflow-y: scroll"> -->
           <mm-load-more @loadTop="loadTop" @topStatusChange="handleTopChange" topValve="90" ref="loadmore">
               <!-- 自定义顶部加载提升内容-开始 -->
               <!-- <template v-slot:top>
                  hahah
               </template> -->
               <!-- 自定义顶部加载提升内容-结束 -->

                <div class="loadmorediv"  v-for="(item,index) in num" :key="index">
                    <div></div>
                    <div></div>
                </div>
            </mm-load-more>
       <!-- </div> -->
       
    </div>
</template>
<script>
export default {
    data () {
        return {
            num:1
        }
    },
    methods:{
        loadTop:function(){
            let _this = this
            setTimeout(() => {
                _this.num++
                _this.$refs.loadmore.onTopLoaded()
            }, 1000);
        },
        handleTopChange:function(status){
            // console.log(status)
        }
    }
}
</script>
<style scoped>
    .cnt{
        padding-top: .88rem;
        box-sizing: border-box;
    }
    .loadmorediv{
        width: 100%;
    }
    .loadmorediv>div{
        width: 100%;
        height: 1rem;
    }
    .loadmorediv>div:nth-child(1){
        background-color: pink;
    }
    .loadmorediv>div:nth-child(2){
        background-color: skyblue;
    }
</style>