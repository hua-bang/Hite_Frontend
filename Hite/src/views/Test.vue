<template>
  <div style="width: 256px">
    123
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue'; // you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js

const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  template: `
    <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
      <template #title>
        <span>
          <MailOutlined /><span>{{ menuInfo.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <PieChartOutlined />
            <span>{{ item.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined,
  },
};
const list = [
  {
    key: '1',
    title: 'Option 1',
  },
  {
    key: '2',
    title: 'Navigation 2',
    children: [
      {
        key: '2.1',
        title: 'Navigation 3',
        children: [
          {
            key: '2.1.1',
            title: 'Option 2.1.1',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const collapsed = ref(false);

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      list,
      collapsed,
      toggleCollapsed,
    };
  },

  components: {
    'sub-menu': SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  },
});
</script>