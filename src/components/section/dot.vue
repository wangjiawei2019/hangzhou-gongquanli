<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/dot.vue
-->
<template>
  <div class="dot">
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
  border: 1px solid #393f45;
  border-radius: 50%;
  margin-right: 6px;
  padding: 4px;
  .inner {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
}
</style>
