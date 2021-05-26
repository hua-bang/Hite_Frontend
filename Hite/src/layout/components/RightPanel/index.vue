<template>
  <div class="ht-right-panel">
    <div class="ht-right-panel-tags-view">

    </div>
    <div class="ht-right-panel-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.ht-right-panel{
  width: 100%;
}
.ht-right-panel-tags-view{
  width: 100%;
  height: 60px;
  background: #ffffff;
}
.ht-right-panel-content{
  width: 100%;
}
</style>