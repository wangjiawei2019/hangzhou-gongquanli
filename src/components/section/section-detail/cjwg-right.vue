<!--
 * @Date: 2021-06-07 15:43:43
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-07 15:43:43
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/cjwg-right.vue
-->
<template>
  <div>
    <div class="cjwg-right-1 w-full relative">
      <sign title="预警情况"></sign>
      <ul class="cjwg-tab-wrapper flex absolute">
        <li
          class="cjwg-tab-item flex items-center justify-center"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ active: item === tab }"
          @click="tabClick(item)"
        >{{ item }}</li>
      </ul>
      <div class="cjwg-right-1-content flex">
        <div style="width: 700px;height: 420px;margin-top: 30px;">
          <list-item :data="cityList"></list-item>
        </div>
        <div ref="pieRef2" class="pie h-full" style="margin-left: 30px;"></div>
      </div>
    </div>

    <div class="cjwg-right-2">
      <sign title="问题线索情况" style="margin-left: -30px;"></sign>
      <div class="cjwg-right-2-content flex">
        <div style="width: 700px;height: 420px;margin-top: 30px;">
          <list-item :data="cityList"></list-item>
        </div>
        <div ref="pieRef1" class="pie h-full" style="margin-left: 30px;"></div>
      </div>
    </div>
    <div class="cjwg-right-3 flex items-center">
      <div class="cjwg-right-3-content">
        <sign title="模型情况"></sign>
        <div style="width: 700px;height: 420px;margin-top: 30px;">
          <list-item :data="cityList"></list-item>
        </div>
      </div>
      <div class="cjwg-right-3-content" style="width: 900px;margin-left: 30px;">
        <sign title="务工预警趋势"></sign>
        <div style="width: 900px;height: 420px;margin-top: 30px;">
          <qushi :data="qushiData"></qushi>
        </div>
      </div>
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
  name: 'cjzc-right',
  components: { Sign, ListItem, Qushi },
  setup() {
    const cityList = [
      {
        city: '杭州市',
        before: '涉及',
        num: '233',
        after: '个',
      },
      {
        city: '杭州市',
        before: '涉及',
        num: '233',
        after: '个',
      },
      {
        city: '杭州市',
        before: '涉及',
        num: '233',
        after: '个',
      },
      {
        city: '杭州市',
        before: '涉及',
        num: '233',
        after: '个',
      },
    ]

    const pieRef1 = ref<HTMLDivElement>()
    const pieRef2 = ref<HTMLDivElement>()

    const initPie = (pieEchart) => {
      const echartData = [
        {
          value: 21,
          name: '已处理',
        },
        {
          value: 38,
          name: '未处理',
        },
        {
          value: 35,
          name: '处理中',
        }
      ]
      const colors = ['#46EED4', '#DC2878', '#EEA946']
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
          top: '20%',
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
      { num: '12,12,0,90,23,31,22,5,4,40,6,9', name: '预警数' },
      { num: '10,12,0,90,23,31,22,50,4,4,6,89', name: '疑似问题数' },
    ])
    const tab = ref('事件模型')
    const tabList = ['事件模型', '人员模型']
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
.cjwg-right-1 {
  box-sizing: border-box;
  padding: 0 60px 30px 250px;
  &-content {
    width: 100%;
    height: 420px;
  }
  .pie {
    width: 800px;
  }
  .cjwg-tab-wrapper {
    top: 0;
    right: 0;
    .cjwg-tab-item {
      cursor: pointer;
      margin-right: 30px;
      width: 150px;
      height: 45px;
      background: rgba(255, 198, 44, 0.09);
      border: 2px solid rgba(255, 198, 44, 0.28);
      border-radius: 21px;
      font-size: 24px;
      font-weight: bold;
      color: #ffffff;
    }
    .cjwg-tab-item.active {
      background: rgba(255, 198, 44, 0.16);
      border: 2px solid #ffc62c;
    }
  }
}

.cjwg-right-2 {
  box-sizing: border-box;
  padding: 0 60px 30px 350px;
  &-content {
    width: 100%;
    height: 350px;
  }
  .pie {
    width: 800px;
  }
}

.cjwg-right-3 {
  // margin-top: 30px;
  box-sizing: border-box;
  padding-left: 250px;

  &-content {
    width: 700px;
    height: 400px;
    margin-top: 30px;
  }
}
</style>
