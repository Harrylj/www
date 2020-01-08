<template>
    <div>
        <router-view></router-view>
        <h1>test</h1>
        <van-button type="default" @click="open">默认按钮</van-button>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button,Dialog  } from 'vant';
import 'vant/lib/index.css';
// 全局注册
Vue.use(Button);
Vue.use(Dialog);
export default {
    data() {
        return {
        show: false
        };
    },
    created () {
        // this.$store.commit('increment')
        // console.log(this.$store.state.count)
        //请求接口方法
        // this.$http.get('/aaa').then((res) => {
        //   正确会掉
        // }).catch((err) => {
        //     错误回调
        // });
    },
    methods:{
        open(){
            //this.show = true;
            Dialog.alert({
            title: '标题',
            message: '弹窗内容'
            }).then(() => {
            // on close
            });

            let aa  = (a) => a
            console.log(aa(6))

        }
    }
    
}
</script>
<style lang="scss" scoped>
    $color_01: blue;
    h1{
        color: $color_01;
        font-size: 50px;
        line-height: 100px;
    }
</style>
