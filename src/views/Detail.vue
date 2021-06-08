<!--
 * @Date: 2021-06-01 16:31:52
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-04 22:04:47
 * @FilePath: /hangzhou-gongquanli/src/views/Detail.vue
-->
<template>
  <header class="header w-full box-border">
    <nav-header></nav-header>
  </header>
  <section class="section detail-bg w-full flex flex-col bg-detail-bg bg-no-repeat bg-cover">
    <h5 class="title relative">工程数量详情</h5>
    <div class="flex-1 flex">
      <div class="detail-left-box flex h-full flex-col">
        <div class="detail-left-box-top flex h-1/2">
          <div class="detail-left-box-top-left h-full">
            <sign title="招标方式占比"></sign>
            <div ref="pieRef" class="pie w-full"></div>
          </div>
          <div class="detail-left-box-top-right h-full">
            <sign title="项目数量"></sign>
            <div ref="barRef" class="bar w-full"></div>
          </div>
        </div>
        <div class="detail-left-box-bottom flex h-1/2">
          <div class="detail-left-box-bottom-left h-full">
            <sign title="招标方式金额"></sign>
            <div ref="fooRef" class="foo w-full"></div>
          </div>
          <div class="detail-left-box-bottom-right h-full">
            <sign title="投入资金"></sign>
            <div class="table w-full relative">
              <el-table
                :data="tableDataCity"
                :header-cell-style="headerCellStyle"
                :cell-style="{ 'text-align': 'center' }"
                :row-style="{ height: '60px' }"
              >
                <el-table-column label="城市名称">
                  <template #default="{ row }">
                    <div class="name flex items-center justify-center transform -skew-x-12">
                      <span class="transform skew-x-12">{{ row.name }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="投入资金（万元）" prop="money"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-right-box h-full flex flex-col">
        <sign title="项目列表"></sign>
        <el-table
          class="detail-right-box-table w-full"
          :data="tableDataProject"
          :header-cell-style="headerCellStyle"
          :cell-style="{ 'text-align': 'center' }"
          :row-style="{ height: '60px' }"
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            v-for="(item, index) in tableHeaderProject"
            :label="item.label"
            :prop="item.key"
            :key="index"
          ></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
        <el-pagination
          class="detail-right-box-pagination w-full flex items-center justify-center"
          background
          layout="total, prev, pager, next"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </section>
  <zc-detail-dialog></zc-detail-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import NavHeader from '@/components/header/index.vue'
import Sign from '@/components/section/sign.vue'
import ZcDetailDialog from '@/components/dialog/zcDetailDialog.vue'

import * as echarts from 'echarts'
export default defineComponent({
  name: 'Detail',
  components: { NavHeader, Sign, ZcDetailDialog },
  setup() {
    const pieRef = ref<HTMLDivElement>()
    const initPie = (pieEchart) => {
      const img =
        'data:image/png;base64,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'
      const trafficWay = [
        {
          name: '公开招标',
          value: 48,
        },
        {
          name: '直接发包',
          value: 22,
        },
        {
          name: '邀请招标',
          value: 25,
        },
        {
          name: '其他形式',
          value: 5,
        },
      ]

      var data = []
      var color = ['#E44216', '#28F2E6', '#FFE032', '#0096FF']
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              borderWidth: 5,
              borderColor: color[i],
              shadowColor: color[i],
            },
          },
          {
            value: 2,
            name: '',
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              color: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 0,
            },
          }
        )
      }
      const seriesOption = [
        {
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [155, 165],
          center: ['20%', '50%'],
          itemStyle: {
            label: {
              show: false,
            },
          },
          data,
        },
      ]
      const options = {
        color,
        title: {
          text: '招标方式',
          top: '47%',
          left: '13%',
          textStyle: {
            color: '#fff',
            fontSize: 42,
            fontWeight: '400',
            fontFamily: 'yjsz',
          },
        },
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: img,
                width: 260,
                height: 260,
              },
              left: '9%',
              top: 'center',
              position: [100, 100],
            },
          ],
        },
        tooltip: {
          show: false,
        },

        legend: {
          // selectedMode: false, // 取消图例上的点击事件
          type: 'plain',
          icon: 'circle',
          orient: 'vertical',
          left: '50%',
          top: '32%',
          align: 'left',
          itemGap: 30,
          itemWidth: 24, // 设置宽度
          itemHeight: 24, // 设置高度
          symbolKeepAspect: false,
          textStyle: {
            color: '#fff',
            rich: {
              name: {
                verticalAlign: 'right',
                align: 'left',
                width: 200,
                fontSize: 34,
              },
              value: {
                align: 'right',
                width: 110,
                fontSize: 40,
                fontFamily: 'yjsz',
              },
            },
          },
          data: trafficWay.map((item) => item.name),
          formatter: function (name) {
            if (data && data.length) {
              for (let i = 0; i < data.length; i++) {
                if (name === data[i].name) {
                  return (
                    '{name| ' + name + '}  ' + '{value| ' + data[i].value + '%}'
                  )
                }
              }
            }
          },
        },
        toolbox: {
          show: false,
        },
        series: seriesOption,
      }
      pieEchart.setOption(options)
    }

    const barRef = ref<HTMLDivElement>()
    const initBar = (barEchart) => {
      const data = ['150', '15', '60', '67']
      const option = {
        grid: {
          left: '80',
          top: '10%',
          right: '5%',
          bottom: '10%',
        },
        xAxis: [
          {
            data: ['公开招标', '直接发包', '邀请招标', '其他形式'],
            axisLabel: {
              color: '#fff',
              fontSize: 24,
              margin: 30, //刻度标签与轴线之间的距离。
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
        ],
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
          {
            //柱底圆片
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
              color: '#008ED7',
            },
            data,
          },
          //柱体
          {
            name: '',
            type: 'bar',
            silent: true,
            barWidth: 60,
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
                    color: '#00D8FF',
                  },
                  {
                    offset: 0.8,
                    color: '#00A8FF',
                  },
                  {
                    offset: 1,
                    color: '#2A76FF',
                  },
                ],
              },
            },

            data,
          },
          //柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
              color: '#008ED7',
            },
            data,
          },
        ],
      }
      barEchart.setOption(option)
    }

    const fooRef = ref<HTMLDivElement>()
    const initFoo = (fooEchart) => {
      const salvProName = ['公开招标', '直接发包', '邀请招标', '其他形式']
      const salvProValue = [960.0, 1200.0, 12344.0, 900.0]
      const salvProMax = [15000, 15000, 15000, 15000] //背景按最大值
      const option = {
        grid: {
          left: '60',
          right: '2%',
          bottom: '2%',
          top: '2%',
          containLabel: true,
        },
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
              margin: 50,
              fontSize: 30,
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
            data: salvProName,
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              margin: 50,
              color: '#ffffff',
              fontSize: '30',
              formatter: (params) => {
                return params + '.00万元'
              },
            },
            data: salvProValue,
          },
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,

            itemStyle: {
              color: 'rgba(93, 203, 255, 1)',
            },
            barWidth: 20,
            data: salvProValue,
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
              color: 'rgba(93, 203, 255, .24)',
              barBorderRadius: 4,
            },
          },
        ],
      }
      fooEchart.setOption(option)
    }

    onMounted(() => {
      const pieEchart = echarts.init(pieRef.value)
      const barEchart = echarts.init(barRef.value)
      const fooEchart = echarts.init(fooRef.value)
      initPie(pieEchart)
      initBar(barEchart)
      initFoo(fooEchart)
    })

    const headerCellStyle = {
      'text-align': 'center',
      background: 'rgb(24, 49, 98) !important',
      'font-size': '26px',
    }
    const tableRowClassName = ({ rowIndex }) => {
      return rowIndex % 2 !== 0 ? 'blue-row' : ''
    }
    const tableDataCity = [
      {
        name: '杭州市',
        money: 27381,
      },
      {
        name: '舟山市',
        money: 27381,
      },
      {
        name: '丽水市',
        money: 27381,
      },
      {
        name: '金华市',
        money: 27381,
      },
      {
        name: '金华市',
        money: 27381,
      },
      {
        name: '金华市',
        money: 27381,
      },
      {
        name: '金华市',
        money: 27381,
      },
    ]
    const tableHeaderProject = [
      {
        key: 'projectName',
        label: '项目名称',
      },
      {
        key: 'township',
        label: '所属乡市',
      },
      {
        key: 'counties',
        label: '所属区县',
      },
      {
        key: 'villages',
        label: '所属乡镇',
      },
      {
        key: 'projectInvestment',
        label: '项目投资额（万元）',
      },
      {
        key: 'projectPrice',
        label: '项目中标价（万元）',
      },
      {
        key: 'unit',
        label: '中标单位',
      },
    ]
    const tableDataProject = [
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
      {
        projectName: '项目1',
        township: '杭州市',
        counties: '建德市',
        villages: '杨村桥',
        projectInvestment: 12,
        projectPrice: 12,
        unit: '同城建筑',
      },
    ]

    return {
      pieRef,
      barRef,
      fooRef,
      headerCellStyle,
      tableRowClassName,
      tableDataCity,
      tableHeaderProject,
      tableDataProject,
    }
  },
})
</script>

<style lang="scss" scoped>
.detail-bg {
  background-position: 0 300px;
}
.title {
  font-size: 37px;
  font-weight: bold;
  color: #ffffff;
  line-height: 37px;
  box-sizing: border-box;
  padding-left: 490px;
  padding-top: 28px;
  &::after {
    position: absolute;
    content: ' ';
    background-image: url('../assets/images/title-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 5009px;
    height: 1618px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.detail-left-box {
  margin-right: 38px;
  flex: 0 0 2200px;
  box-sizing: border-box;
  padding-left: 160px;
  &-top-left,
  &-bottom-left {
    width: 1180px;
    margin-right: 30px;
    .pie {
      height: 650px;
    }
    .foo {
      height: 650px;
    }
  }
  &-top-right,
  &-bottom-right {
    width: 990px;
    .bar,
    .table {
      height: 650px;
    }
    .table {
      padding-left: 60px;
      box-sizing: border-box;
      .name {
        width: 133px;
        height: 47px;
        background: #093755;
        border: 1px solid #18deea;
        margin: 0 auto;
      }
      &::after {
        position: absolute;
        left: 45px;
        top: 100px;
        width: 32px;
        height: 450px;
        content: ' ';
        background-image: url('../assets/images/zhuzhuang.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
}
.detail-right-box {
  flex: 0 0 2750px;
  box-sizing: border-box;
  padding-right: 360px;
  padding-left: 60px;
  overflow: hidden;
  &-table {
    width: 100%;
    padding-left: 60px;
    height: 1260px;
  }
  &-pagination {
    padding-top: 60px;
    padding-bottom: 90px;
    height: 65px;
  }
}
</style>
