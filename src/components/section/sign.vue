<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/sign.vue
-->
<template>
  <section class="sign">
    <section class="bar"></section>
    <section class="title">{{ title }}</section>
    <slot name="money"></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'sign',
  props: {
    title: { type: String, default: '' },
  },
})
</script>

<style scoped lang="scss">
.sign {
  margin: 60px 0 0 60px;
  display: flex;
  align-items: center;
  .bar {
    width: 8px;
    height: 33px;
    background: rgba(48, 153, 242, 1);
    margin-right: 20px;
  }
  .title {
    /*width: 178px;*/
    /*height: 31px;*/
    font-size: 38px;
    font-family: pfBlod;
    /*font-weight: bold;*/
    color: #ffffff;
    // line-height: 56px;
  }
}
</style>
