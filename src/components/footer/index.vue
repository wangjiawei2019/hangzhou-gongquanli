<!--
 * @Date: 2021-05-29 02:33:01
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 10:49:00
 * @FilePath: /hangzhou-gongquanli/src/components/footer/index.vue
-->
<template>
  <ul class="footer-bar absolute flex" v-if="!showBar">
    <li class="footer-bar-item flex flex-col items-center justify-center relative">
      <div class="number">{{ store.yjzs.yjzs }}</div>
      <div class="desc">预警总数</div>
      <img class="arrow-down" src="../../assets/images/arrow-down.png" />
    </li>
    <li
      class="footer-bar-item flex flex-col items-center justify-center relative"
      v-for="(item, index) in store.dsyjs"
      :key="index"
    >
      <div class="number">{{ item.num }}</div>
      <div class="desc">{{ item.city }}</div>
      <img class="arrow-down" src="../../assets/images/arrow-down.png" />
    </li>
  </ul>
  <template v-else>
    <div class="yujing-wrapper absolute">
      <sign title="全省预警情况"></sign>
    </div>
    <div ref="barRef" class="footer-bar-echart absolute"></div>
  </template>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'
import HomeApi from '@/api'

import * as echarts from 'echarts'
import Sign from '../section/sign.vue'

export default defineComponent({
  components: { Sign },
  name: 'footer-bar',
  setup() {
    const getYjzs = async () => {
      const { data } = await HomeApi.getYjzs()
      store.yjzs = data
    }
    const getDsyjs = async () => {
      const { data } = await HomeApi.getDsyjs()
      store.dsyjs = data
    }
    onMounted(() => {
      const update = () => {
        getYjzs()
        getDsyjs()
      }
      update()
      watch(
        () => store.year,
        () => {
          update()
        }
      )
    })

    const route = useRoute()
    const showBar = ref(route.params.tabName && route.params.tabName !== '首页')
    const barRef = ref<HTMLDivElement>()
    const initBar = (barEchart) => {
      const data = ['150', '15', '60', '67', '150', '15', '60', '67']
      const option = {
        grid: {
          left: '80',
          right: '5%',
        },
        xAxis: {
          data: [
            '公开招标',
            '直接发包',
            '邀请招标',
            '其他形式',
            '公开招标',
            '直接发包',
            '邀请招标',
            '其他形式',
          ],
          axisLabel: {
            show: true,
            color: '#fff',
            fontSize: 30,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.33)',
            },
          },
          axisTick: {
            show: false, //不显示刻度
          },
          boundaryGap: true,
          splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
              type: 'solid',
              color: '#03202E',
            },
          },
        },
        yAxis: [
          {
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.12)',
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(255,255,255,.33)',
              },
            },
            axisLabel: {
              color: '#fff',
              fontSize: 24,
            },
          },
        ],
        series: [
          //柱体
          {
            name: '',
            type: 'bar',
            silent: true,
            barWidth: 30,
            barGap: '0%',
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                  {
                    //第一节下面
                    offset: 0,
                    color: '#3099F2',
                  },
                  {
                    offset: 1,
                    color: '#1B5A8F',
                  },
                ],
              },
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 30,
              color: '#fff',
            },
            data,
          },
        ],
      }
      barEchart.setOption(option)
    }
    watch(
      () => route.params.tabName,
      (newVal) => {
        if (!(newVal === '首页' || !showBar)) {
          showBar.value = true
          nextTick(() => {
            const barEchart = echarts.init(barRef.value)
            initBar(barEchart)
          })
        } else {
          showBar.value = false
        }
      }
    )

    onMounted(() => {
      if (route.params.tabName && route.params.tabName !== '首页') {
        const barEchart = echarts.init(barRef.value)
        initBar(barEchart)
      }
    })

    return {
      store,
      showBar,
      barRef,
    }
  },
})
</script>

<style lang="scss">
.footer-bar {
  top: -130px;
  left: 50%;
  transform: translateX(-50%);
  .number {
    font-family: yjsz;
    font-size: 42px;
    color: #ffffff;
    line-height: 44px;
    background: linear-gradient(0deg, #3099f2 0%, #c3e3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .desc {
    font-size: 38px;
    font-weight: bold;
    color: #ffffff;
  }
  .arrow-down {
    width: 59px;
    height: 27px;
    margin-top: 30px;
  }
  &-item {
    min-width: 200px;
    margin-right: 40px;
    &::after {
      position: absolute;
      right: -21px;
      top: 50%;
      transform: translateY(-50%);
      content: ' ';
      width: 2px;
      height: 50px;
      background-image: linear-gradient(
        180deg,
        transparent 0%,
        #35a2ff 50%,
        transparent 100%
      );
    }
    &:last-child {
      margin-right: 0;
      &::after {
        display: none;
      }
    }
  }
}
.footer-bar-echart {
  width: 1600px;
  height: 250px;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
}
.yujing-wrapper {
  top: -300px;
  left: calc(50% + 500px);
  transform: translateX(-50%);
  z-index: 99999;
}
</style>
