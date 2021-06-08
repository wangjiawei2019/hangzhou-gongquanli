<!--
 * @Date: 2021-05-28 19:48:49
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 10:36:14
 * @FilePath: /hangzhou-gongquanli/src/components/header/index.vue
-->
<template>
  <nav
    class="nav w-full h-full bg-header-bg bg-cover bg-no-repeat bg-center flex items-center relative"
  >
    <img src="../../assets/images/position-icon.png" class="img" />
    <p class="position font-semibold text-white flex-1">当前定位：全省</p>
    <h1 class="title font-semibold text-white absolute">浙江省基层权力大数据监督应用</h1>
    <p class="choose">
      时间选择：
      <el-date-picker v-model="year" type="year" style="width:140px;" :clearable="false"></el-date-picker>
    </p>
    <p class="date">{{ time }}</p>
    <ul class="tab-wrapper absolute flex items-center">
      <li
        class="tab-item"
        :class="{active: activeTab === item}"
        v-for="(item, index) in tabList"
        :key="index"
        @click="tabClick(item)"
      >{{ item }}</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import formatTime from '@/utils/formatTime'
import store from '@/store'

export default defineComponent({
  name: 'nav-header',
  setup() {
    const time = ref(formatTime())
    setInterval(() => {
      time.value = formatTime()
    }, 10000)
    const year = ref(new Date())

    watch(year, (newVal) => {
      store.year = newVal.getFullYear()
    })

    const route = useRoute()
    const router = useRouter()
    const tabList = [
      '首页',
      '村级工程',
      '资产资源',
      '劳务用工',
      '村级采购',
      '困难救助',
    ]
    const activeTab = ref(route.params.tabName || '首页')
    const tabClick = (item: string) => {
      activeTab.value = item
      router.replace({ name: 'Home', params: { tabName: item } })
    }
    watch(
      () => route.params.tabName,
      (newVal) => (activeTab.value = newVal || '首页')
    )
    return {
      time,
      year,
      tabList,
      activeTab,
      tabClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.nav {
  background-size: 3806px 214px;
  background-position: center bottom;
  .img {
    width: 98px;
    height: 104px;
  }
  .position {
    margin-left: 20px;
    font-size: 40px;
  }
  .title {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 64px;
    margin-left: 30px;
    margin-bottom: 30px;
    background: linear-gradient(0deg, #3099f2 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .choose {
    width: 367px;
    height: 80px;
    border: 2px solid #3098f1;
    border-radius: 40px;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    padding-left: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 34px;
      width: 18px;
      height: 11px;
    }
  }
  .date {
    margin-left: 40px;
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
  }
  .tab-wrapper {
    z-index: 999999;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .tab-item {
    width: 250px;
    text-align: center;
    line-height: 90px;
    height: 90px;
    font-size: 38px;
    color: #ffffff;
    background-image: url('../../assets/images/tab-1.png');
    background-size: 100% 100%;
    cursor: pointer;
    box-sizing: border-box;
  }
  .active {
    background-image: url('../../assets/images/tab-2.png');
    border: 1px solid #53c0ff;
    border-radius: 6px;
  }
}
</style>
