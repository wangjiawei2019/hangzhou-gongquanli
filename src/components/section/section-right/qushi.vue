<!--
 * @Date: 2021-06-04 10:46:05
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 20:07:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-right/qushi.vue
-->
<template>
  <div class="w-full h-full" ref="lineRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { useThrottleFn } from '@vueuse/core'

export default defineComponent({
  name: 'Qushi',
  props: ['data'],
  setup({ data }) {
    const lineRef = ref<HTMLDivElement>()
    const initLine = (lineEchart) => {
      const series = []
      const colors = ['#1990FF', '#38FCBE', '#FEDB48', '#FE8263', '#7D44FF']

      data.forEach((i, index) => {
        series.push({
          name: i.name,
          type: 'line',
          smooth: true, //是否平滑
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbol: 'none',
          symbolSize: 10,
          label: {
            show: false,
            position: 'top',
            color: '#fff',
            fontSize: 14,
          },
          itemStyle: {
            color: colors[index],
            borderColor: colors[index],
            borderWidth: 0,
            shadowColor: 'rgba(0, 0, 0, 0)',
            shadowBlur: 0,
            shadowOffsetY: 0,
            shadowOffsetX: 0,
          },
          tooltip: {
            show: true,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colors[index],
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ],
              global: false, // 缺省为 false
            },
          },
          data: i.num.split(','),
        })
      })
      lineEchart.setOption({
        title: {
          show: false,
          text: '多线图',
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
          },
          top: '5%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 255, 233,0)',
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255,1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 255, 233,0)',
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          containLabel: true,
        },
        legend: {
          icon: 'rect',
          textStyle: {
            color: '#fff',
            fontSize: 26,
          },
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: '#f00',
              lineStyle: {
                color: '#f00',
              },
            },
            axisLabel: {
              color: '#fff',
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月',
            ],
          },
        ],

        yAxis: [
          {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#fff'],
                opacity: 0.06,
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              margin: 20,
              fontSize: 20,
              color: 'rgba(255,255,255,0.5)',
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series,
      })
    }

    onMounted(() => {
      const lineEchart = echarts.init(lineRef.value)
      initLine(lineEchart)
      const throttledResize = useThrottleFn(() => {
        lineEchart.resize()
      }, 1000)

      window.addEventListener('resize', throttledResize)
    })

    return {
      lineRef,
    }
  },
})
</script>
