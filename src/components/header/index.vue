<!--
 * @Date: 2021-05-28 19:48:49
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 15:16:02
 * @FilePath: /hangzhou-gongquanli/src/components/header/index.vue
-->
<template>
  <nav
    class="nav w-full h-full bg-header-bg bg-cover bg-no-repeat bg-center flex items-center relative"
  >
    <h1 class="title font-semibold text-white absolute">杭州基层小微权力大数据监督平台</h1>
    <p class="time flex items-center absolute">
      {{ time }}
      <span class="date">{{ year }}</span>
    </p>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import formatTime from '@/utils/formatTime'
import formatDate from '@/utils/formatDate'
import store from '@/store'

export default defineComponent({
  name: 'nav-header',
  setup() {
    const time = ref(formatTime())
    setInterval(() => {
      time.value = formatTime()
    }, 10000)
    const year = ref(formatDate())

    watch(year, (newVal) => {
      store.year = formatDate()
    })

    return {
      time,
      year,
    }
  },
})
</script>

<style lang="scss" scoped>
.nav {
  background-size: 100% 100%;
  background-position: center center;

  .title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 38px;
    // background-image: url('../../assets/images/top bar.png');
    background: linear-gradient(0deg, #3099f2 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .time {
    right: 47px;
    height: 28px;
    font-size: 28px;
    font-weight: bold;
    color: #d9eaf6;
    .date {
      font-size: 18px;
      color: #afc2d0;
      margin-left: 21px;
    }
  }
}
</style>
