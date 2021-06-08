<template>
  <dialog-container>
    <nav class="nav">
      <div class="left">
        <img src="@/assets/images/position-icon.png" class="img" />
        <p class="position">当前定位：全省</p>
      </div>
      <h1 class="title font-semibold text-white absolute">资产资源详情</h1>
    </nav>
    <div class="content">
      <div class="top">
        <div class="topItem item1">
          <sign title="各地市资产、资源情况" style="margin-left: 30px"></sign>
          <div ref="bar" class="chart1"></div>
        </div>
        <div class="topItem">
          <sign title="资产资源走势图" style="margin-left: 30px"></sign>
          <div ref="line" class="chart2"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <sign title="我是文案" style="margin: 0 0 0 30px"></sign>
          <div class="button">查看详情</div>
        </div>
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="{ 'text-align': 'center', 'background': 'rgb(24, 49, 98) !important', 'font-size': '26px' }"
          :cell-style="{ 'text-align': 'center' }"
          :row-style="{ height: '70px' }"
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            v-for="item in tableHeader"
            :prop="item.key"
            :label="item.label"
            :key="item.key"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </dialog-container>
</template>

<script>
import DialogContainer from './dialogContainer.vue'
import Sign from '@/components/section/sign.vue'
import * as echarts from 'echarts'

export default {
  name: 'zcDetailDialog',
  components: { DialogContainer, Sign },
  mounted() {
    this.initEchart()
  },
  data() {
    return {
      tableHeader: [
        { key: 'csmc', label: '城市名称' },
        { key: 'gkly', label: '公开领域' },
        { key: 'gksl', label: '公开总量' },
        { key: 'gkny', label: '公开年月' },
        { key: 'qzdjl', label: '群众点击量' },
      ],
      tableData: [
        {
          csmc: '建德市',
          gkly: '困难补助',
          gksl: '2084078',
          gkny: '2021-05-10',
          qzdjl: '2592047',
        },
        {
          csmc: '建德市',
          gkly: '村级工程',
          gksl: '483',
          gkny: '2021-05-29',
          qzdjl: '560',
        },
        {
          csmc: '建德市',
          gkly: '劳务用工',
          gksl: '11034',
          gkny: '2021-05-29',
          qzdjl: '19533',
        },
        {
          csmc: '建德市',
          gkly: '劳务用工',
          gksl: '11034',
          gkny: '2021-05-29',
          qzdjl: '19533',
        },
        {
          csmc: '建德市',
          gkly: '劳务用工',
          gksl: '11034',
          gkny: '2021-05-29',
          qzdjl: '19533',
        },
      ],
      tableRowClassName: 'a',
    }
  },
  methods: {
    initEchart() {
      this.initEchart1()
      this.initEchart2()
    },
    initEchart1() {
      let myChart = echarts.init(this.$refs['bar'])
      myChart.setOption({
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '0%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
          formatter: function (params) {
            return (
              params[0].name +
              '<br/>' +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              ' : ' +
              Number(
                (params[0].value.toFixed(4) / 10000).toFixed(2)
              ).toLocaleString() +
              ' 万元<br/>'
            )
          },
        },
        backgroundColor: 'transparent',
        xAxis: {
          show: false,
          type: 'value',
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              color: '#fff',
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果'],
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              color: '#ffffff',
              fontSize: '12',
              formatter: function (value) {
                if (value >= 10000) {
                  return (value / 10000).toLocaleString() + '万'
                } else {
                  return value.toLocaleString()
                }
              },
            },
            data: [50000000, 22000000, 10000000, 5000000, 10000],
          },
        ],
        series: [
          {
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              barBorderRadius: 8,
              color: 'rgba(94,191,255,1)',
            },
            barWidth: 20,
            data: [50000000, 22000000, 10000000, 5000000, 10000],
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [50000000, 50000000, 50000000, 50000000, 50000000],
            itemStyle: {
              barBorderRadius: 8,
              color: 'rgba(24,31,68,1)',
            },
          },
        ],
      })
    },
    initEchart2() {
      let myChart = echarts.init(this.$refs['line'])
      myChart.setOption({
        backgroundColor: 'transparent',
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
            data: ['8：00', '9:00', '10:00', '11:00', '12:00', '13:00'],
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
        series: [
          {
            name: '昨日',
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
              color: '#3098f1',
              borderColor: 'rgb(0,115,100)',
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
                    color: '#3098f1',
                  },
                  {
                    offset: 1,
                    color: 'transparent',
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
          },
          {
            name: '今日',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'none',
            symbolSize: 10,
            label: {
              show: true,
              position: 'top',
              color: '#FFF',
              fontSize: 14,
            },
            itemStyle: {
              color: '#FFBC0D',
              borderColor: 'rgb(108,78,0)',
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
                    color: 'rgba(255,188,13, 0.4)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,188,13, 0)',
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
          },
        ],
      })
    },
  },
}
</script>

<style scoped lang="scss">
.nav {
  position: relative;

  .left {
    display: flex;
    align-items: center;
    margin-top: 93px;

    .position {
      margin-left: 20px;
      font-size: 40px;
      font-family: pfBlod;
      color: #ffffff;
      line-height: 67px;
    }
  }

  .title {
    top: 0;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    font-size: 64px;
    margin-left: 30px;
    margin-bottom: 30px;
    background: linear-gradient(0deg, #3099f2 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.content {
  .top {
    display: flex;

    .topItem {
      .chart1 {
        width: 800px;
        height: 580px;
      }

      .chart2 {
        width: 1100px;
        height: 540px;
      }
    }
  }

  .item1 {
    width: 1440px;
  }

  .bottom {
    .title {
      display: flex;
      align-items: center;

      .button {
        width: 188px;
        height: 69px;
        background: rgba(48, 153, 242, 0.28);
        border: 2px solid #3099f2;
        border-radius: 5px;
        font-size: 33px;
        font-family: pf;
        font-weight: bold;
        color: #ffffff;
        line-height: 69px;
        text-align: center;
        margin-left: 84px;
        cursor: pointer;
      }
    }
  }
}

.a {
  background-color: rgba(113, 205, 249, 1) !important;
}
</style>
