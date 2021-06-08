<!--
 * @Date: 2021-06-04 10:31:36
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 10:17:17
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-right/yswtclqk.vue
-->
<template>
  <div ref="radarRef" class="radar"></div>
  <ul class="yisiwenti-wrapper flex flex-col">
    <li class="yisiwenti-item flex items-center" v-for="(item, index) in yswtclqkList" :key="index">
      <i class="el-icon-caret-left" style="font-size: 40px;color: #40a7fe;"></i>
      <span class="yisiwenti-_number flex-1">{{ item.name }}</span>
      <span class="yisiwenti-_number">{{ item.number }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { useThrottleFn } from '@vueuse/core'
import store from '@/store'
import HomeApi from '@/api'

export default defineComponent({
  name: 'Yswtclqk',
  setup() {
    const radarRef = ref<HTMLDivElement>()
    const initRadar = (radarEchart) => {
      const valueList = []
      store.yswtqk.forEach((i) => valueList.push(Number(i.num)))
      const max = Math.max(...valueList)
      const indicator = []
      store.yswtqk.forEach((i) => indicator.push({ name: i.wtlx, max }))
      const radarOptions = {
        radar: {
          indicator,
          splitLine: {
            lineStyle: {
              color: '#177677',
              width: 2,
            },
          },
          axisName: {
            fontSize: 28,
            color: '#C2CDCD',
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: 'transparent',
            },
          },
          axisLine: {
            show: false,
          },
        },
        // grid: {
        //   right: '1%'
        // },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            lineStyle: {
              width: 2,
              color: '#30FDFF',
            },
            areaStyle: {
              color: 'rgba(46, 244, 247, 0.24)',
            },
            data: [
              {
                value: valueList,
                name: 'radar',
              },
            ],
          },
        ],
      }
      radarEchart.setOption(radarOptions)
    }

    const getYswtqk = async (radarEchart) => {
      const { data } = await HomeApi.getYswtqk()
      store.yswtqk = data
      initRadar(radarEchart)
    }
    const yswtclqkList = ref([
      { name: '发现疑似问题数', number: 0 },
      { name: '转办疑似问题数', number: 0 },
      { name: '未处理疑似问题数', number: 0 },
      { name: '处理中疑似问题数', number: 0 },
    ])
    const keyList = ['fxyswts', 'zbyswts', 'wclyswts', 'clzyswts']
    const getYswtcls = async () => {
      const { data } = await HomeApi.getYswtcls()
      store.yswtcls = data
      yswtclqkList.value.map((i, index) => {
        i.number = data[keyList[index]]
      })
    }

    onMounted(() => {
      const radarEchart = echarts.init(radarRef.value)

      const update = () => {
        getYswtqk(radarEchart)
        getYswtcls()
      }
      update()
      watch(
        () => store.year,
        () => {
          update()
        }
      )
      const throttledResize = useThrottleFn(() => {
        radarEchart.resize()
      }, 1000)

      window.addEventListener('resize', throttledResize)
    })

    return {
      radarRef,
      yswtclqkList,
    }
  },
})
</script>

<style lang="scss" scoped>
.yisiwenti {
  margin-top: 30px;

  .radar {
    width: 650px;
    height: 350px;
    // margin-right: 100px;
  }

  &-wrapper {
    width: 800px;
    height: 350px;
    .yisiwenti-item {
      height: 150px;
      padding: 0 30px;
      margin-bottom: 20px;
      background-color: rgba(78, 211, 255, 0.1);
    }
    .yisiwenti-item:nth-child(1) {
      margin-top: 30px;
    }
  }
  &-_number {
    font-size: 30px;
    color: #fff;
  }
}
</style>
