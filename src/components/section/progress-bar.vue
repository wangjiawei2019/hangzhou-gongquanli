<!--
 * @Date: 2021-05-28 19:43:26
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 09:50:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/progressbar.vue
-->
<template>
  <section class="progress-bar">
    <section class="line">
      <p class="title">{{ title }}</p>
      <p class="number">
        <span>{{ num }}</span
        >次
      </p>
    </section>
    <div class="bar w-full relative">
      <div class="percentage" :style="{width: percentage,backgroundColor: color}"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'progress-bar',
  props: {
    title: { type: String, default: '' },
    num: { type: String, default: '' },
    color: { type: String, default: '' },
    percentage: { type: String, default: '' },
  },
})
</script>

<style scoped lang="scss">
.progress-bar {
  width: 420px;
  height: 35px;
  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 14px;
      font-weight: bold;
      color: #95cfff;
    }
    .number {
      font-size: 14px;
      color: #acb4ba;
      span {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        margin-right: 7px;
      }
    }
  }
  .bar {
    width: 420px;
    height: 6px;
    background: #11374c;
  }
}
</style>
