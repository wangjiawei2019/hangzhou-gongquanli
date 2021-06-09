<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 10:32:19
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jgztw-left.vue
-->

<template>
  <div class="dsjjddt-left w-full">
    <sign title="大数据监督动态"></sign>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import Bar from '@/components/section/bar.vue'
import Dot from '@/components/section/dot.vue'

export default defineComponent({
  name: 'dsjjddt-left',
  components: { Sign, Bar, Dot },
  setup() {},
})
</script>