<template>
  <div class="ht-sidebar-mask">

  </div>
</template>

<script>
// todo: 还没做好隐藏sidebar
export default {
  name: "SideBarMask"
}
</script>

<style scoped>
@media screen and (max-width:766px) {
  .ht-sidebar-mask {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.45);
  }
}
</style>