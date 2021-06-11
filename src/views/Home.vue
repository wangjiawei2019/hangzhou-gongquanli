<!--
 * @Date: 2021-06-01 16:25:46
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 19:17:19
 * @FilePath: /hangzhou-gongquanli/src/views/Home.vue
-->
<template>
  <section class="section relative w-full flex-col justify-between box-border">
    <div class="top w-full">
      <div class="section-item h-full">
        <jgztw-left></jgztw-left>
      </div>
      <div class="section-map h-full">
        <section-map></section-map>
      </div>
      <div class="section-item h-full">
        <qlyxjd-right></qlyxjd-right>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <dsjjddt-left></dsjjddt-left>
      </div>
      <div class="right">
        <jdydt-right></jdydt-right>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import JgztwLeft from '@/components/section/section-detail/jgztw-left.vue'
import QlyxjdRight from '@/components/section/section-detail/qlyxjd-right.vue'
import DsjjddtLeft from '@/components/section/section-detail/dsjjddt-left.vue'
import JdydtRight from '@/components/section/section-detail/jdydt-right.vue'

import SectionMap from '@/components/section/section-map.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SectionMap,
    JgztwLeft,
    QlyxjdRight,
    DsjjddtLeft,
    JdydtRight,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss">
.top {
  height: 610px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.bottom {
  width: 100%;
  height: 260px;
  padding: 0 32px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  .left {
    width: 1349px;
    height: 100%;
  }
  .right {
    width: 469px;
    margin-left: 34px;
  }
}
</style>
