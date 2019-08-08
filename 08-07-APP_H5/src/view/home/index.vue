<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    created () {
        // this.$store.commit('increment')
        // console.log(this.$store.state.count)
        //请求接口方法
        // this.$http.get('/aaa').then((res) => {
        //   正确会掉
        // }).catch((err) => {
        //     错误回调
        // });
    }
}
</script>
<style scoped>

</style>
