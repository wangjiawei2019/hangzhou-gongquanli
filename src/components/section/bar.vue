<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/bar.vue
-->
<template>
  <section class="bar">
    <section class="text">{{ title }}</section>
    <section class="line"></section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'bar',
  props: {
    title: { type: String, default: '' },
  },
})
</script>

<style scoped lang="scss">
.bar {
  display: flex;
  align-items: center;
  .text {
    font-size: 16px;
    font-family: pfBlod;
    font-weight: bold;
    color: #fff;
  }
  .bar {
    width: 8px;
    height: 33px;
    background: rgba(48, 153, 242, 1);
    margin-right: 20px;
  }
}
</style>
