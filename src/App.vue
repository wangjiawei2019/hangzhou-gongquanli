<!--
 * @Date: 2021-05-28 14:14:06
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 18:16:13
 * @FilePath: /hangzhou-gongquanli/src/App.vue
-->
<template>
  <div
    class="root-box"
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
      <footer class="footer relative w-full bg-footer-bg bg-center bg-no-repeat" v-if="show">
        <footer-bar></footer-bar>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavHeader from '@/components/header/index.vue'
import FooterBar from '@/components/footer/index.vue'
import { useThrottleFn } from '@vueuse/core'

export default defineComponent({
  name: 'App',
  components: { NavHeader, FooterBar },
  setup() {
    const scale = ref(1) // 初始缩放值
    const rootBox = ref<HTMLDivElement>(null)

    const initWidth = 5120
    const initHeight = 1972
    const getScale = () => {
      const ww = window.innerWidth / initWidth
      const wh = window.innerHeight / initHeight
      return ww < wh ? ww : wh
    }
    const setScale = () => {
      // scale.value = getScale()
      // rootBox.value?.style.setProperty('--scale', String(scale.value))
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

    const route = useRoute()
    const show = ref(true)
    watch(
      () => route.params.tabName,
      (newVal) => {
        newVal === '首页' || newVal === '村级工程'
          ? (show.value = true)
          : (show.value = false)
      }
    )

    return {
      scale,
      rootBox,
      show,
    }
  },
})
</script>

<style lang="scss">
.root-box {
  width: 5120px;
  height: 1972px;
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  z-index: 2;
  .header {
    height: 230px;
    padding: 0 54px;
  }
  .section {
    height: 1642px;
    padding: 0 54px;
    &-item {
      width: 1876px;
    }
    &-map {
      width: 1821px;
      height: 1499px;
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