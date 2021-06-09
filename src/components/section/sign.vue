<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/sign.vue
-->
<template>
  <section class="sign">
    <section class="title">{{ title }}</section>
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
  width: 187px;
  height: 35px;
  background: url("@/assets/images/sign-bg.png") no-repeat center/100% 100%;
  margin: 12px 0 0 28px;
  .title {
    font-size: 20px;
    font-family: pfBlod;
    font-weight: bold;
    color: #95cfff;
  }
}
</style>
