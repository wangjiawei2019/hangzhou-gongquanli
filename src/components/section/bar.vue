<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 10:28:10
 * @FilePath: /hangzhou-gongquanli/src/components/section/bar.vue
-->
<template>
  <section class="bar flex flex-row items-center">
    <section class="text">{{ title }}</section>
    <section class="line flex-1 relative"></section>
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
    margin-left: 25px;
    &::after {
      position: absolute;
      top: 50%;
      left: -8px;
      content: ' ';
      background-image: url('../../assets/images/zhuangshi.png');
      width: 10px;
      height: 12px;
      background-size: 100% 100%;
      transform: translateY(-50%);
    }
  }
}
</style>
