<!--
 * @Date: 2021-06-07 15:41:57
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 16:24:30
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/cjwg-left.vue
-->
<template>
  <div class="cjwg-left-1 w-full">
    <sign title="务工情况"></sign>
    <div class="cjwg-left-1-content flex">
      <list-item :data="cityList"></list-item>
      <list-item style="margin-left: 100px" :data="cityList"></list-item>
    </div>
  </div>
  <div class="cjwg-left-2">
    <sign title="务工方式及支付情况"></sign>
    <div class="cjwg-left-2-content flex">
      <div
        ref="barRef2"
        style="width: 750px; height: 350px; margin-right: 30px"
      ></div>
      <div ref="pieRef1" class="pie h-full"></div>
    </div>
  </div>
  <div class="cjwg-left-3 relative">
    <sign title="务工方式趋势"></sign>
    <ul class="cjwg-tab-wrapper flex absolute">
      <li
        class="cjwg-tab-item flex items-center justify-center"
        v-for="(item, index) in tabList"
        :key="index"
        :class="{ active: item === tab }"
        @click="tabClick(item)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="cjwg-left-3-content">
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
  name: 'cjwg-left',
  components: { Sign, ListItem, Qushi },
  setup() {
    const cityList = [
      {
        city: '杭州市',
        before: '共',
        num: '5615',
        after: '个项目',
      },
      {
        city: '金华市',
        before: '共',
        num: '233',
        after: '个项目',
      },
      {
        city: '丽水市',
        before: '共',
        num: '233',
        after: '个项目',
      },
      {
        city: '湖州市',
        before: '共',
        num: '233',
        after: '个项目',
      },
    ]

    const pieRef1 = ref<HTMLDivElement>()
    const barRef2 = ref<HTMLDivElement>()

    const initPie = (pieEchart) => {
      const echartData = [
        {
          value: 21,
          name: '转账',
        },
        {
          value: 38,
          name: '现金',
        },
        {
          value: 35,
          name: '其他',
        },
      ]
      const colors = ['#3099F2', '#FEDB48', '#46EED4']
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

    const initEchart1 = (echart1) => {
      let xAxisData = [
        '施工',
        '普查',
        '夜巡执勤',
        '消防安全',
        '水电工',
        '会议用工',
        '其他',
      ]
      let data = [1068, 860, 650, 657, 340, 120, 221]
      const options = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '15%',
          right: '7%',
          left: '18%',
          bottom: '20%',
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
            axisLabel: {
              interval: 0,
              rotate: -45,
              color: '#e2e9ff',
              fontSize: 18,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
              fontSize: 16,
            },
            nameTextStyle: {
              fontSize: 30,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,1)',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data,
            barWidth: '20px',
            itemStyle: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                //数值样式
                color: 'rgba(48, 152, 241, 1)',
                fontSize: 22,
              },
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(0,244,255,1)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,77,167,1)', // 100% 处的颜色
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4,
            },
          },
        ],
      }
      echart1.setOption(options)
    }

    const qushiData = ref([
      { num: '12,12,0,90,23,31,22,5,4,40,6,9', name: '务工数量' },
      { num: '10,12,0,90,23,31,22,50,4,4,6,89', name: '涉及工程' },
    ])
    const tab = ref('全部情况')
    const tabList = [
      '全部情况',
      '施工',
      '普查',
      '夜巡执勤',
      '消防安全',
      '水电工',
      '会议用工',
      '其他',
    ]
    const tabClick = (item: string) => {
      tab.value = item
    }

    onMounted(() => {
      const pieEchart1 = echarts.init(pieRef1.value)
      const barEchart1 = echarts.init(barRef2.value)

      initPie(pieEchart1)
      initEchart1(barEchart1)
    })

    return {
      cityList,
      pieRef1,
      barRef2,
      qushiData,
      tab,
      tabList,
      tabClick,
    }
  },
})
</script>

<style lang="scss">
.cjwg-left-1 {
  &-content {
    width: 100%;
    height: 420px;
    box-sizing: border-box;
    padding: 30px 250px 30px 60px;
  }
}

.cjwg-left-2 {
  margin-top: 90px;
  &-content {
    width: 100%;
    height: 350px;
    .pie {
      width: 700px;
    }
  }
}

.cjwg-left-3 {
  margin-top: 130px;

  &-content {
    margin-top: 30px;
    width: 1700px;
    height: 400px;
  }

  .cjwg-tab-wrapper {
    top: 0;
    right: 180px;
    .cjwg-tab-item {
      cursor: pointer;
      margin-right: 15px;
      width: 150px;
      height: 45px;
      background: rgba(48, 153, 242, 0.09);
      border: 2px solid rgba(48, 153, 242, 0.28);
      border-radius: 21px;
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
    .cjwg-tab-item.active {
      background: rgba(80, 171, 255, 0.16);
      border: 2px solid #50abff;
    }
  }
}
</style>