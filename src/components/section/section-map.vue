<!--
 * @Date: 2021-06-09 14:48:35
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 18:46:33
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-map.vue
-->
<template>
  <div class="w-full h-full relative" ref="mapRef">
    <img
      v-show="!currentCity"
      class="absolute w-full h-full top-0 left-0 z-10"
      src="../../assets/images/map.png"
    />
    <img
      v-show="currentCity === '临平区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/lingpin_p.png"
    />
    <img
      v-show="currentCity === '拱墅区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/gongshu_p.png"
    />
    <img
      v-show="currentCity === '余杭区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/yuhang_p.png"
    />
    <img
      v-show="currentCity === '钱塘区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/qiantang_p.png"
    />
    <img
      v-show="currentCity === '上城区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/shangcheng_p.png"
    />
    <img
      v-show="currentCity === '滨江区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/binjiang_p.png"
    />
    <img
      v-show="currentCity === '萧山区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/xiaoshan_p.png"
    />
    <img
      v-show="currentCity === '西湖区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/xihu_p.png"
    />
    <img
      v-show="currentCity === '富阳区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/fuyangqu_p.png"
    />
    <img
      v-show="currentCity === '桐庐县'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/tonglu_p.png"
    />
    <img
      v-show="currentCity === '临安区'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/lingan_p.png"
    />
    <img
      v-show="currentCity === '建德市'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/jiande_p.png"
    />
    <img
      v-show="currentCity === '淳安县'"
      class="absolute w-full h-full top-0 left-0"
      src="../../assets/images/chunan_p.png"
    />
    <map-title
      :title="item.name"
      :left="item.left"
      :x="item.x"
      :y="item.y"
      :isHover="item.name === currentCity"
      v-for="(item, index) in mapList"
      :key="index"
    ></map-title>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import mapTitle from './map-title.vue'
export default defineComponent({
  components: { mapTitle },
  name: 'section-map',
  setup() {
    const mapList = [
      { name: '临平区', left: true, x: 690, y: 40 },
      { name: '拱墅区', left: true, x: 660, y: 80 },
      { name: '余杭区', left: true, x: 560, y: 70 },
      { name: '钱塘区', left: true, x: 774, y: 99 },
      { name: '上城区', left: true, x: 680, y: 110 },
      { name: '滨江区', left: true, x: 670, y: 150 },
      { name: '萧山区', left: true, x: 693, y: 207 },
      { name: '西湖区', left: false, x: 560, y: 145 },
      { name: '富阳区', left: true, x: 520, y: 230 },
      { name: '桐庐县', left: true, x: 440, y: 300 },
      { name: '临安区', left: true, x: 310, y: 160 },
      { name: '建德市', left: true, x: 380, y: 400 },
      { name: '淳安县', left: true, x: 190, y: 370 },
    ]
    const mapRef = ref<HTMLDivElement>()
    const currentCity = ref('')
    const mouseMove = (e) => {
      // @ts-ignore
      if (e.path[0].localName === 'h6') {
        // @ts-ignore
        currentCity.value = e.target.innerHTML
      } else {
        if (!e.path.includes(mapRef.value)) {
          currentCity.value = ''
        }
      }
    }

    onMounted(() => {
      window.addEventListener('mousemove', mouseMove)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', mouseMove)
    })
    return { mapList, currentCity, mapRef }
  },
})
</script>

