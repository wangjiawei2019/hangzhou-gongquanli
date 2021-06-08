<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 10:32:19
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/cjgc-left.vue
-->
<template>
  <div class="cjgc-left-1 w-full">
    <sign title="工程情况"></sign>
    <div class="cjgc-left-1-content flex">
      <list-item :data="cityList"></list-item>
      <list-item style="margin-left: 100px;" :data="cityList"></list-item>
    </div>
  </div>

  <div class="cjgc-left-2">
    <sign title="招标方式情况"></sign>
    <div class="cjgc-left-2-content flex">
      <div ref="pieRef1" class="pie h-full"></div>
      <div ref="pieRef2" class="pie h-full" style="margin-left: 30px;"></div>
    </div>
  </div>
  <div class="cjgc-left-3 relative">
    <sign title="村级工程趋势"></sign>
    <ul class="cjgc-tab-wrapper flex absolute">
      <li
        class="cjgc-tab-item flex items-center justify-center"
        v-for="(item, index) in tabList"
        :key="index"
        :class="{ active: item === tab }"
        @click="tabClick(item)"
      >{{ item }}</li>
    </ul>
    <div class="cjgc-left-3-content">
      <qushi :data="qushiData"></qushi>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import ListItem from '@/components/section/section-detail/detail/list-item.vue'
import Qushi from '@/components/section/section-right/qushi.vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'cjgc-left',
  components: { Sign, ListItem, Qushi },
  setup() {
    const cityList = [
      {
        city: '杭州市',
        before: '共',
        num: '233',
        after: '项工程',
      },
      {
        city: '杭州市',
        before: '共',
        num: '233',
        after: '项工程',
      },
      {
        city: '杭州市',
        before: '共',
        num: '233',
        after: '项工程',
      },
      {
        city: '杭州市',
        before: '共',
        num: '233',
        after: '项工程',
      },
    ]

    const pieRef1 = ref<HTMLDivElement>()
    const pieRef2 = ref<HTMLDivElement>()

    const initPie = (pieEchart) => {
      const echartData = [
        {
          value: 21,
          name: '市场签约1',
        },
        {
          value: 38,
          name: '市场签约2',
        },
        {
          value: 35,
          name: '市场签约3',
        },
        {
          value: 31,
          name: '市场签约4',
        },
      ]
      const colors = ['#FEDB48', '#46EED4', '#EEA946', '#3099F2']
      const rich = {
        white: {
          color: '#fff',
          align: 'center',
          fontSize: 30,
          padding: [8, 0],
        },
      }

      const options = {
        legend: {
          show: true,
          right: 0,
          orient: 'vertical',
          textStyle: {
            color: '#fff',
            fontSize: 30,
          },
        },
        grid: {
          right: '-10%',
        },
        series: [
          {
            type: 'pie',
            left: '-15%',
            radius: ['40%', '50%'],
            color: colors,
            label: {
              formatter: (params) => {
                let total = 0 //考生总数量
                let percent = 0 //考生占比
                echartData.forEach((value) => {
                  total += value.value
                })
                percent = Number(((params.value / total) * 100).toFixed(1))
                return '{white|' + params.name + '}\n{white|' + percent + '%}'
              },
              rich,
            },
            labelLine: {
              length: 24,
              length2: 0,
              lineStyle: {
                color: '#4BBEFA',
              },
            },
            data: echartData,
          },
        ],
      }

      pieEchart.setOption(options)
    }

    const qushiData = ref([
      { num: '12,12,0,90,23,31,22,5,4,40,6,9', name: '工程数量' },
      { num: '10,12,0,90,23,31,22,50,4,4,6,89', name: '工程金额' },
    ])
    const tab = ref('全部情况')
    const tabList = ['全部情况', '公开招标', '邀请招标', '直接发包', '其他形式']
    const tabClick = (item: string) => {
      tab.value = item
    }
    onMounted(() => {
      const pieEchart1 = echarts.init(pieRef1.value)
      const pieEchart2 = echarts.init(pieRef2.value)

      initPie(pieEchart1)
      initPie(pieEchart2)
    })

    return {
      cityList,
      pieRef1,
      pieRef2,
      qushiData,
      tab,
      tabList,
      tabClick,
    }
  },
})
</script>

<style lang="scss">
.cjgc-left-1 {
  &-content {
    width: 100%;
    height: 420px;
    box-sizing: border-box;
    padding: 30px 250px 30px 60px;
  }
}

.cjgc-left-2 {
  margin-top: 90px;
  &-content {
    width: 100%;
    height: 350px;
    .pie {
      width: 700px;
    }
  }
}

.cjgc-left-3 {
  margin-top: 130px;

  &-content {
    margin-top: 30px;
    width: 1700px;
    height: 400px;
  }

  .cjgc-tab-wrapper {
    top: 0;
    right: 300px;
    .cjgc-tab-item {
      cursor: pointer;
      margin-right: 30px;
      width: 150px;
      height: 45px;
      background: rgba(48, 153, 242, 0.09);
      border: 2px solid rgba(48, 153, 242, 0.28);
      border-radius: 21px;
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
    .cjgc-tab-item.active {
      background: rgba(80, 171, 255, 0.16);
      border: 2px solid #50abff;
    }
  }
}
</style>
