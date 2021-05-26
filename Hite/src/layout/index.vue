<template>
  <div class="ht-layout">
    <Sidebar></Sidebar>
    <div class="ht-layout-right">
      <div class="ht-layout-right-nav">
        <Navbar></Navbar>
      </div>
      <div class="ht-layout-right-panel">
        <RightPanel></RightPanel>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";
import RightPanel from "./components/RightPanel/index.vue";

export default {
  name: "index",
  components: {
    Sidebar,
    Navbar,
    RightPanel
  }
}
</script>

<style scoped>
.ht-layout {
  width: 100vw;
  height: 100vh;
  background: #f0f2f5;
  display: flex;
}
.ht-layout-right {
  flex: 1;
  height: 100%;
}
</style>