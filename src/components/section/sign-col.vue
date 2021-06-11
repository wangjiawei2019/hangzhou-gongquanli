<!--
 * @Date: 2021-06-09 15:33:51
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 15:49:54
 * @FilePath: /hangzhou-gongquanli/src/components/section/sign-col.vue
-->
<template>
  <div class="sign-col bg-sign-col bg-no-repeat">{{ title || '十点多撒' }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['title'],
  setup({ title }) {
    return { title }
  },
})
</script>

<style lang="scss">
.sign-col {
  margin-right: 16px;
  width: 30px;
  height: 165px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-position: right bottom;
}
</style>
