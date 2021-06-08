<!--
 * @Date: 2021-06-01 16:25:46
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 18:09:14
 * @FilePath: /hangzhou-gongquanli/src/views/Home.vue
-->
<template>
  <section class="section relative w-full flex justify-between box-border">
    <template v-if="show">
      <div class="section-item h-full bg-section-bg-left bg-cover">
        <component :is="leftComponentName"></component>
      </div>
      <div class="section-item h-full bg-section-bg-right bg-cover">
        <component :is="rightComponentName"></component>
      </div>
    </template>
    <template v-else>
      <div class="section-item h-full">
        <component :is="leftComponentName"></component>
      </div>
      <div class="section-item h-full">
        <component :is="rightComponentName"></component>
      </div>
    </template>
    <div
      class="section-map h-full absolute left-1/2 transform -translate-x-1/2 z-10 bg-map-bg bg-cover"
      v-if="show"
    >
      <section-map></section-map>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import SectionLeft from '@/components/section/section-left.vue'
import SectionRight from '@/components/section/section-right.vue'
import CjgcLeft from '@/components/section/section-detail/cjgc-left.vue'
import CjgcRight from '@/components/section/section-detail/cjgc-right.vue'
import CjzcLeft from '@/components/section/section-detail/cjzc-left.vue'
import CjzcRight from '@/components/section/section-detail/cjzc-right.vue'
import CjwgLeft from '@/components/section/section-detail/cjwg-left.vue'
import CjwgRight from '@/components/section/section-detail/cjwg-right.vue'
import CjcgLeft from '@/components/section/section-detail/cjcg-left.vue'
import CjcgRight from '@/components/section/section-detail/cjcg-right.vue'
import KnjzLeft from '@/components/section/section-detail/knjz-left.vue'
import KnjzRight from '@/components/section/section-detail/knjz-right.vue'

import SectionMap from '@/components/section/section-map.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SectionMap,
    SectionLeft,
    SectionRight,
    CjgcLeft,
    CjgcRight,
    CjzcLeft,
    CjzcRight,
    CjwgLeft,
    CjwgRight,
    CjcgLeft,
    CjcgRight,
    KnjzLeft,
    KnjzRight,
  },
  setup() {
    const route = useRoute()

    const leftComponentNameMap = {
      首页: 'SectionLeft',
      村级工程: 'CjgcLeft',
      资产资源: 'CjzcLeft',
      劳务用工: 'CjwgLeft',
      村级采购: 'CjcgLeft',
      困难救助: 'KnjzLeft',
    }
    const rightComponentNameMap = {
      首页: 'SectionRight',
      村级工程: 'CjgcRight',
      资产资源: 'CjzcRight',
      劳务用工: 'CjwgRight',
      村级采购: 'CjcgRight',
      困难救助: 'KnjzRight',
    }
    const leftComponentName = ref(
      leftComponentNameMap[route.params.tabName as string] || 'SectionLeft'
    )
    const rightComponentName = ref(
      rightComponentNameMap[route.params.tabName as string] || 'SectionRight'
    )

    const show = ref(true)
    watch(
      () => route.params.tabName,
      (newVal) => {
        newVal === '首页' || newVal === '村级工程'
          ? (show.value = true)
          : (show.value = false)
        leftComponentName.value = leftComponentNameMap[newVal as string]
        rightComponentName.value = rightComponentNameMap[newVal as string]
      }
    )
    return {
      leftComponentName,
      rightComponentName,
      show,
    }
  },
})
</script>
