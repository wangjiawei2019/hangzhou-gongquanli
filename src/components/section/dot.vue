<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 16:50:29
 * @FilePath: /hangzhou-gongquanli/src/components/section/dot.vue
-->
<template>
  <div class="dot flex items-center justify-center">
    <div class="inner" :style="{backgroundColor: color}"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'dot',
  props: {
    color: { type: String, default: '' },
  },
})
</script>

<style scoped lang="scss">
.dot {
  width: 12px;
  height: 12px;
  margin-top: 5px;
  border: 1px solid #393f45;
  border-radius: 50%;
  margin-right: 6px;

  .inner {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
}
</style>
