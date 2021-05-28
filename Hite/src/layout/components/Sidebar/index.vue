<template>
  <SideBarMask></SideBarMask>
  <div class="ht-sidebar" :class=" status ? 'open' : 'close'">
    <Header :status.sync="status"></Header>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <template v-for="item in menuList">
        <template v-if="!item.children">
          <a-menu-item :key="item.key" @click="resolvePath(item.path)">
            <MenuUnfoldOutlined style="font-size: 16px" />
            <span :hidden="!status"> {{ item.title }} </span>
          </a-menu-item>
        </template>
        <template v-else>
          <SubMenu :menu-info="item"></SubMenu>
        </template>
      </template>
    </a-menu>
    <div class="ht-sidebar-footer">
      <div style="padding-left: 15px" @click="changeSidebarStatus">
        <MenuFoldOutlined style="color: rgba(255, 255, 255, 0.65); height: 40px; line-height: 40px; font-size: 18px"/>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, computed } from "vue";
import SubMenu from "./SubMenu.vue";
import Header from "./Header.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons-vue"
import SideBarMask from "./SideBarMask.vue";

export default {
  name: "index",
  components: {SideBarMask, Header,SubMenu,MenuFoldOutlined,MenuUnfoldOutlined},
  setup() {
    const store = useStore();
    const status = computed(() => store.state.app.sideBarOpenStatus);

    const router = useRouter();

    const menuList = ref([
      {
        key: "1",
        path: "/Console",
        title: "控制台"
      },
      {
        key: "2",
        path: "/Login",
        title: "登陆页面"
      }
    ]);

    const resolvePath = (path) => {
      router.push(path);
    }

    const changeSidebarStatus = () => {
      store.commit("app/TOGGLE_SIDEBAR")
    }

    return {
      status,
      menuList,
      resolvePath,
      changeSidebarStatus
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/css/config.scss";
.ht-sidebar {
  height: 100%;
  background: #001925;
  transition: width 0.3s linear;
  position: relative;
  overflow-x: hidden;
}
.open {
  width: $sideBarOpenWidth !important;
}
.close {
  width: $sideBarCloseWidth;
}
.ht-sidebar-footer {
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  cursor: pointer;
}
@media screen and (max-width:766px) {
  .ht-sidebar {
    position: fixed;
    z-index: 5;
  }
  .ht-menu-mask {
    position: fixed;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    background: red;
  }
}
</style>