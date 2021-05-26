<template>
  <a-sub-menu :title="menuInfo.title" >
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" @click="resolvePath(item.path)">{{ item.title }}</a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item"></SubMenu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    }
  },
  setup() {
    const router = useRouter();

    const resolvePath = (path) => {
      router.push(path);
    }

    return {
      resolvePath
    }
  }
}
</script>

<style scoped>

</style>