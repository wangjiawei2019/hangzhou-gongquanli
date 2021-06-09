<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/bar.vue
-->
<template>
  <section class="bar flex flex-row items-center">
    <section class="text">{{ title }}</section>
    <section class="line flex-1"></section>
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
  .text {
    font-size: 16px;
    font-family: pfBlod;
    font-weight: bold;
    color: #fff;
  }
  .line {
    height: 1px;
    background: #708089;
    margin-left: 15px;
  }
}
</style>
