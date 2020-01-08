<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'APP'
}
</script>

<style lang="scss">

$back: red;
#app{
  color:$back
}

// 变量声明也分为全局变量和局部变量 

// 这样也是好用的

$highlight-color: #F90;
$highlight-border: 1px solid $highlight-color;
.selected {
  border: $highlight-border;
}
</style>
