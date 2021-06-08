<!--
 * @Date: 2021-06-07 14:28:18
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 20:42:56
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/detail/list-item.vue
-->
<template>
  <ul class="w-full h-full flex flex-col">
    <li
      class="list-item-wrapper w-full flex items-center"
      v-for="(item, index) in data"
      :key="index"
    >
      <svg
        t="1623047421580"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3975"
        width="48"
        height="48"
      >
        <path
          d="M198.4 473.6l332.8-332.8c6.4-6.4 25.6 0 25.6 12.8l0 256 262.4-262.4c6.4-6.4 25.6 0 25.6 12.8l0 729.6c0 12.8-12.8 19.2-25.6 12.8L556.8 627.2l0 256c0 12.8-12.8 19.2-25.6 12.8L198.4 550.4C172.8 531.2 172.8 492.8 198.4 473.6z"
          p-id="3976"
          fill="#a4eef2"
        />
      </svg>
      <div class="list-item-text flex-1">{{ item.city }}</div>
      <div class="list-item-text">
        {{ item.before }}
        <span style="color: #7aabe6;">{{ item.num }}</span>
        {{ item.after }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'list-item',
  props: ['data'],
  setup({ data }) {
    return {
      data,
    }
  },
})
</script>

<style lang="scss" >
.list-item-wrapper {
  margin-bottom: 10px;
  height: 80px;
  background: rgba(255, 255, 255, 0.04);

  padding-left: 30px;
  box-sizing: border-box;
  .list-item-text {
    font-size: 34px;
    color: #fff;
    margin: 0 20px;
  }
  &:first-child {
    background: rgba(255, 255, 255, 0.22);
  }
}
</style>