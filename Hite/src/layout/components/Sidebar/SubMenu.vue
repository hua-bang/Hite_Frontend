<template>
  <a-sub-menu>
    <template #title>
        <span>
          <MenuUnfoldOutlined></MenuUnfoldOutlined>
          <span>{{menuInfo.meta.title}}</span>
        </span>
    </template>
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children && !item.meta.hidden">
        <a-menu-item :key="item.path" @click="resolvePath(item)">
          <MenuUnfoldOutlined style="font-size: 16px" />
          <span> {{ item.meta.title }} </span>
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item" :base-path="basePath + item.path" v-if="!item.meta.hidden"></SubMenu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { useRouter } from "vue-router"
import { useStore } from "vuex";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons-vue"

export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    basePath: {
      type: String
    }
  },
  components: {
    MenuUnfoldOutlined
  },
  setup(prop) {
    const router = useRouter();
    const state = useStore();

    const resolvePath = (item) => {
      let { meta, path } = item;
      const realPath = prop.basePath ? `${prop.basePath}/${path}` : path;
      addTagsView({
        path,
        title: meta.title,
        key: path
      })
      router.push(realPath);
    }

    const addTagsView = (view) => {
      state.commit("tagsView/ADD_VISITED_VIEW", view)
    }

    return {
      resolvePath
    }
  }
}
</script>

<style scoped>

</style>