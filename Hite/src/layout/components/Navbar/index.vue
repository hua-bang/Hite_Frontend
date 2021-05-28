<template>
  <div class="ht-navbar">
    <div class="ht-navbar-btn">
        <component  @click="changeSidebarStatus" :is="status ? 'MenuFoldOutlined' : 'MenuUnfoldOutlined'"></component>
    </div>
    <div class="ht-navbar-info">
      <a-dropdown placement="bottomCenter">
        <div class="ant-dropdown-link">
          <div class="ht-navbar-info-img">
            <a-avatar :size="28" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
          </div>
          JiaHua Hu
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <UserOutlined />
                个人中心
            </a-menu-item>
            <a-menu-item key="1">
              <SettingOutlined />
                个人设置
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3"><LogoutOutlined />退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons-vue"
import { computed } from "vue"
import { useStore } from "vuex"

export default {
  name: "index",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined
  },
  setup() {
    const store = useStore();
    const status = computed(() => store.state.app.sideBarOpenStatus)

    const changeSidebarStatus = () => {
      store.commit("app/TOGGLE_SIDEBAR")
    }

    return {
      status,
      changeSidebarStatus
    }
  }
}
</script>

<style scoped>
.ht-navbar{
  background: #ffffff;
  width: 100%;
  height: 50px;
  color: rgba(0,0,0,.85);
  line-height: 50px;
  position: relative;
  z-index: 0;
  display: flex;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.ht-navbar-btn {
  flex: 1;
  padding-left: 20px;
  font-size: 18px;
  cursor: pointer;
}
.ht-navbar-info {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 50px;
}
.ant-dropdown-link {
  display: flex;
}
.ht-navbar-info-img{
  padding-right: 5px;
}
</style>