<!--
 * @Date: 2021-06-04 10:09:22
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 09:59:06
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-right/yjclqk.vue
-->
<template>
  <div ref="pieRef" class="pie"></div>
  <div class="xiangqing flex">
    <div class="xiangqing-title flex flex-col items-center justify-center">
      <div class="xiangqing-title-number">{{ store.yjcls.yjzs }}</div>
      <div class="xiangqing-title-desc">预警总数</div>
    </div>
    <div class="xiangqing-title xiangqing-title-nobg flex flex-col items-center justify-center">
      <div class="xiangqing-title-number">{{ store.yjcls.yjwcl }}</div>
      <div class="xiangqing-title-desc">未处理</div>
    </div>
    <div class="xiangqing-title xiangqing-title-nobg flex flex-col items-center justify-center">
      <div class="xiangqing-title-number">{{ store.yjcls.yjclz }}</div>
      <div class="xiangqing-title-desc">处理中</div>
    </div>
    <div class="xiangqing-title xiangqing-title-nobg flex flex-col items-center justify-center">
      <div class="xiangqing-title-number">{{ store.yjcls.yjycl }}</div>
      <div class="xiangqing-title-desc">已处理</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { useThrottleFn } from '@vueuse/core'
import store from '@/store'
import HomeApi from '@/api'

export default defineComponent({
  name: 'Yjclqk',
  setup() {
    const pieRef = ref<HTMLDivElement>()

    const initPie = (pieEchart) => {
      let total = 0
      store.yjclqk.forEach((i) => {
        total += Number(i.num)
      })

      const data = []
      const colors = ['#1990FF', '#38FCBE', '#FEDB48', '#FE8263', '#7D44FF']
      store.yjclqk.forEach((i, index) => {
        data.push({
          value: Number(i.num),
          name: i.ylmc,
          precent: Math.round((Number(i.num) / total) * 100),
          color: colors[index],
        })
      })

      const pieOptions = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          right: 0,
          itemHeight: 9,
          itemWidth: 25,
          borderRadius: 3,
          textStyle: {
            color: '#fff',
            rich: {
              name: {
                verticalAlign: 'right',
                align: 'left',
                width: 100,
                fontSize: 30,
              },
              value: {
                align: 'right',
                width: 120,
                fontSize: 30,
              },
              precent: {
                align: 'right',
                width: 100,
                fontSize: 30,
              },
            },
          },
          data: data.map((item) => item.name),
          formatter: (name) => {
            if (data && data.length) {
              for (let i = 0; i < data.length; i++) {
                if (name === data[i].name) {
                  return (
                    '{name| ' +
                    name +
                    '}  ' +
                    '{value| ' +
                    data[i].value +
                    '}' +
                    '{precent| ' +
                    data[i].precent +
                    '%}'
                  )
                }
              }
            }
          },
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            left: -250,
            top: -50,
            data,
            label: {
              show: false,
            },
            emphasis: {
              scaleSize: 20,
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      pieEchart.setOption(pieOptions)
      pieEchart.dispatchAction({ type: 'highlight', dataIndex: 4 })
    }

    const getYjclqk = async (pieEchart) => {
      const { data } = await HomeApi.getYjclqk()
      store.yjclqk = data
      initPie(pieEchart)
    }

    const getYjcls = async () => {
      const { data } = await HomeApi.getYjcls()
      store.yjcls = data
    }

    onMounted(() => {
      const pieEchart = echarts.init(pieRef.value)

      const update = () => {
        getYjclqk(pieEchart)
        getYjcls()
      }
      update()
      watch(
        () => store.year,
        () => {
          update()
        }
      )
      const throttledResize = useThrottleFn(() => {
        pieEchart.resize()
      }, 1000)

      window.addEventListener('resize', throttledResize)
    })

    return {
      pieRef,
      store,
    }
  },
})
</script>

<style lang="scss" scoped>
.pie {
  width: 800px;
  height: 380px;
  margin-top: 40px;
}
.xiangqing {
  &-title {
    margin-left: 40px;
    margin-top: 30px;
    width: 280px;
    height: 280px;
    background-color: rgba(78, 211, 255, 0.2);
    border-radius: 10px;
    &-number {
      font-size: 44px;
      color: #fff;
    }
    &-desc {
      margin-top: 30px;
      font-size: 40px;
      background: linear-gradient(0deg, #3099f2 0%, #c3e3ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &-title-nobg {
    width: 120px;
    background-color: transparent;
  }
}
</style>