<template>
  <div class="ht-sidebar-header" :class="status ? 'ht-sidebar-header-open': 'ht-sidebar-header-close'">
    <div class="ht-sidebar-header-img">
      <img src="https://store.antdv.com/pro/preview/img/logo.59818776.png">
    </div>
    <div class="ht-sidebar-header-text">
      Hite
    </div>
  </div>
</template>


<script>
export default {
  name: "Header",
  props: {
    status: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.ht-sidebar-header-open{
  padding: 20px;
}
.ht-sidebar-header-close {
  padding: 20px 0;
}
.ht-sidebar-header {
  width: 100%;
  display: flex;
  .ht-sidebar-header-img {
    padding: 5px 5px;
  }
  img {
    width: 40px;
  }
  .ht-sidebar-header-text {
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
}
</style>