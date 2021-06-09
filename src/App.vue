<!--
 * @Date: 2021-05-28 14:14:06
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 15:19:06
 * @FilePath: /hangzhou-gongquanli/src/App.vue
-->
<template>
  <div
    class="root-box bg-bg bg-no-repeat bg-cover"
    ref="rootBox"
    :style="{ transform: 'scale(' + scale + ') translate(-50%, -50%)' }"
  >
    <div class="w-full h-full flex flex-col">
      <header class="header w-full box-border">
        <nav-header></nav-header>
      </header>
      <div class="flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import NavHeader from '@/components/header/index.vue'
import { useThrottleFn } from '@vueuse/core'

export default defineComponent({
  name: 'App',
  components: { NavHeader },
  setup() {
    const scale = ref(1) // 初始缩放值
    const rootBox = ref<HTMLDivElement>(null)

    const initWidth = 1919
    const initHeight = 1080
    const getScale = () => {
      const ww = window.innerWidth / initWidth
      const wh = window.innerHeight / initHeight
      return ww < wh ? ww : wh
    }
    const setScale = () => {
      scale.value = getScale()
      rootBox.value?.style.setProperty('--scale', String(scale.value))
    }

    const throttledResize = useThrottleFn(() => {
      setScale()
    }, 1000)

    onMounted(() => {
      setScale()
      window.addEventListener('resize', throttledResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', throttledResize)
    })

    return {
      scale,
      rootBox,
    }
  },
})
</script>

<style lang="scss">
.root-box {
  width: 1919px;
  height: 1080px;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  z-index: 2;

  .header {
    height: 123px;
    // padding: 0 54px;
  }
  .section {
    height: 610px;
    &-item {
      width: 470px;
      border: 1px solid;
      border-image: linear-gradient(0deg, #225d73, #2c86a8) 10 10;
      background: linear-gradient(180deg, rgba(12, 62, 84, 0.6) 0%);
    }
    &-map {
      width: 911px;
      height: 656px;
      top: 110px;
    }
  }
  .footer {
    width: 100%;
    height: 200px;
    background-size: 1904px 100%;
  }
}
</style>