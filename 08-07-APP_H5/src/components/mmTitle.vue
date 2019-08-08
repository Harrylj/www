<template>
  <div class="title">
    {{name}}
  </div>
</template>

<script>
export default {
  props:['name'],
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
  .title{
    width: 100%;
    height: .88rem;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #ffffff;
    z-index: 9;
  }
</style>
