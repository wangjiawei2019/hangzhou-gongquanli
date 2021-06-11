<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 10:11:20
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/qlyxjd-right.vue
-->

<template>
  <div class="qlyxjd-right w-full h-full">
    <sign title="权力运行监督"></sign>
    <div class="progressbar box-border" ref="barRef"></div>
    <div class="sheji-items w-full">
      <div class="sheji-item">
        <img src="~@/assets/images/shenpi.png" alt />
        <div class="right">
          <p>涉及审批</p>
          <p>
            <span class="pangmen">8567</span>次
          </p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/qunzhong.png" alt />
        <div class="right">
          <p>涉及群众</p>
          <p>
            <span class="pangmen">8567</span>人
          </p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/company.png" alt />
        <div class="right">
          <p>涉及企业</p>
          <p>
            <span class="pangmen">345</span>家
          </p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/xiangmu.png" alt />
        <div class="right">
          <p>涉及项目</p>
          <p>
            <span class="pangmen">537</span>个
          </p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/wuzi.png" alt />
        <div class="right">
          <p>涉及物资</p>
          <p>
            <span class="pangmen">43566</span>个
          </p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/zijin.png" alt />
        <div class="right">
          <p>涉及资金</p>
          <p>
            <span class="pangmen">2,245,24</span>元
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'qlyxjd-right',
  components: { Sign },
  setup() {
    const barRef = ref<HTMLDivElement>()
    const initBar = (barEchart) => {
      const color = [
        'rgba(24, 86, 128',
        'rgba(14, 42, 146',
        'rgba(143, 157, 161',
        'rgba(35, 143, 147',
        'rgba(20, 135, 93',
        'rgba(134, 113, 15',
      ]

      // 按顺序排列从大到小
      const top10CityList = [
        '公章使用',
        '务工分配',
        '村级采购',
        '工程建设',
        '三资管理',
        '补贴发放',
      ]
      const top10CityData = [23, 23, 45, 67, 11, 12]
      let lineY = []
      for (let i = 0; i < top10CityList.length; i++) {
        var x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        let data = {
          name: top10CityList[i],
          color: color[x] + ')',
          value: top10CityData[i],
          itemStyle: {
            show: true,
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              1,
              0,
              [
                {
                  offset: 0,
                  color: color[x] + ', 0.3)',
                },
                {
                  offset: 1,
                  color: color[x] + ', 1)',
                },
              ],
              false
            ),
          },
          emphasis: {
            shadowBlur: 15,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
        }
        lineY.push(data)
      }

      const option = {
        grid: {
          top: '3%',
          left: '1%',
          right: '10%',
          bottom: '3%',
        },
        color,
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
              inside: false,
            },
            data: top10CityList,
          },
          {
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              inside: false,
              color: '#fff',
              fontSize: '18',
              fontFamily: 'pangmen',
              formatter: function (val) {
                return `${val}k`
              },
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: top10CityData,
          },
        ],
        xAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            animationDuration: 1500,
            label: {
              color: '#95CFFF',
              show: true,
              position: [0, '-24px'],
              fontSize: 14,
              formatter: function (a) {
                return a.name
              },
            },
          },
        ],
        animationEasing: 'cubicOut',
      }

      barEchart.setOption(option)
    }
    onMounted(() => {
      const barEchart = echarts.init(barRef.value)
      initBar(barEchart)
    })
    return {
      barRef,
    }
  },
})
</script>

<style lang="scss" scoped>
.qlyxjd-right {
  border: 1px solid;
  border-image: linear-gradient(0deg, #225d73, #2c86a8) 10 10;
  background: linear-gradient(
    180deg,
    rgba(12, 62, 84, 0.6) 0%,
    rgba(12, 62, 84, 0) 100%
  );
  .progressbar {
    width: 470px;
    height: 318px;
    border-bottom: 1px solid #225d73;
    padding: 30px 24px 24px;
  }
  .sheji-items {
    height: 242px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 28px 20px;
    .sheji-item {
      display: flex;
      flex-direction: row;
      width: 50%;
      height: 44px;
      margin-bottom: 20px;
      img {
        width: 44px;
        height: 44px;
        margin-right: 13px;
      }
      p {
        font-size: 14px;
        color: #acb4ba;
        span {
          font-size: 22px;
          color: #fff;
          margin-right: 8px;
        }
      }
    }
  }
}
</style>