<template>
  <div class="ht-tags-view">
    <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { useStore } from "vuex";
import {computed, defineComponent, ref,onMounted} from 'vue';
export default defineComponent({
  setup() {
    const store = useStore();
    const panes = computed(() => store.state.tagsView.visitedViews);
    const activeKey =  ref(0);
    const newTabIndex = ref(0);

    const callback = key => {
      console.log(key);
    };

    onMounted(() => {
      if(panes.value.length === 0) {
        console.log("no panes");
      }
    })


    const remove = targetKey => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);

      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey, action) => {
      if (action === 'add') {
        add();
      } else {
        remove(targetKey);
      }
    };

    return {
      panes,
      activeKey,
      callback,
      onEdit,
    };
  },
});
</script>

<style scoped>
.ht-tags-view {
  width: 100%;
  padding: 15px;
}
</style>