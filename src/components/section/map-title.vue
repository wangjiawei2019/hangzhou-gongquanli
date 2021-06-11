<!--
 * @Date: 2021-06-11 17:30:25
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 18:35:32
 * @FilePath: /hangzhou-gongquanli/src/components/section/map-title.vue
-->
<template>
  <h6
    class="map-title bg-zuanshi-bg bg-no-repeat absolute flex items-center justify-center cursor-pointer z-20"
    :class="{'left-bg': left, 'right-bg': !left,'is-hover':isHover}"
    :style="{top: y + 'px', left: x + 'px'}"
  >{{ title }}</h6>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'map-title',
  props: ['title', 'left', 'x', 'y', 'isHover'],
  // setup({title,left,x,y}) {
  //   return {

  //   }
  // },
})
</script>

<style lang="scss">
.map-title {
  background-color: rgba(29, 42, 53, 0.6);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-size: 22px 26px;
  background-position-y: center;
}
.right-bg {
  background-position-x: right;
  padding: 0 30px 0 3px;
}
.left-bg {
  background-position-x: left;
  box-sizing: border-box;
  padding: 0 3px 0 30px;
}
.is-hover {
  background-image: url('../../assets/images/zhixiang_p.png');
}
</style>