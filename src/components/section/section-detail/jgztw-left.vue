<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 14:57:59
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jgztw-left.vue
-->

<template>
  <div class="jgztw-left w-full">
    <sign title="监督主体网"></sign>
    <div class="jgztw-left-1">
      <bar title="预警模型情况"></bar>
      <div class="jgztw-left-1-content flex">
        <p class="flex items-center">
          已梳理模型
          <span>213</span>个
        </p>
        <p class="flex items-center">
          已使用模型
          <span>132</span>个
        </p>
      </div>
      <p>高质量模型</p>
      <el-table
        :data="tableData"
        :header-cell-style="{
          'text-align': 'center',
          'font-size': '14px',
          backgroundColor: '#15394C',
          color: '#ACB4BA',
        }"
        :cell-style="{ 'text-align': 'center', 'font-size': '14px' }"
        :row-style="{ height: '14px' }"
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
    <div class="jgztw-left-2">
      <bar title="监督单位和部门"></bar>
      <ul class="jgztw-left-2-content w-full">
        <li v-for="item in departs" :key="item.name" class="item flex-row">
          <dot color="#17E69A"></dot>
          <div>
            <p class="name">{{ item.name }}</p>
            <p>
              <span>{{ item.num }}</span>个
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="jgztw-left-2 jgztw-left-3">
      <bar title="监督对象"></bar>
      <ul class="jgztw-left-2-content w-full">
        <li v-for="item in objects" :key="item.name" class="item flex-row">
          <dot color="#7ABCFE"></dot>
          <div>
            <p class="name">{{ item.name }}</p>
            <p>
              <span>{{ item.num }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="jgztw-left-4">
      <bar title="监督权力项（重点领域）"></bar>
      <div ref="pieRef1" class="pie w-full h-full"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import Bar from '@/components/section/bar.vue'
import Dot from '@/components/section/dot.vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'jgztw-left',
  components: { Sign, Bar, Dot },
  setup() {
    const tableHeader = [
      { key: 'xh', label: '序号' },
      { key: 'mxdw', label: '模型单位' },
      { key: 'mxmc', label: '模型名称' },
      { key: 'zhl', label: '转化率' },
    ]
    const tableData = [
      {
        xh: '1',
        mxdw: '建德市',
        mxmc: '村干部参与务工',
        zhl: '87%',
      },
      {
        xh: '2',
        mxdw: '富阳市',
        mxmc: '村干部与采购单位关系预警',
        zhl: '86%',
      },
      {
        xh: '3',
        mxdw: '萧山区',
        mxmc: '低保户经商违规发放补贴',
        zhl: '84%',
      },
    ]

    const departs = [
      {
        name: '村(社)党组织',
        num: 1218,
      },
      {
        name: '村(社)民委员会',
        num: 2245,
      },
      {
        name: '村(股份)经济合作社',
        num: 1382,
      },
    ]

    const objects = [
      {
        name: '总人数',
        num: 13548,
      },
      {
        name: '村主职干部',
        num: 2245,
      },
      {
        name: '村干部',
        num: 1382,
      },
    ]
    const pieRef1 = ref<HTMLDivElement>()

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

    onMounted(() => {
      const pieEchart1 = echarts.init(pieRef1.value)

      //   initPie(pieEchart1)
    })

    const tableRowClassName = () => {}

    return {
      tableHeader,
      tableData,
      departs,
      objects,
      pieRef1,
      tableRowClassName,
    }
  },
})
</script>

<style lang="scss">
.jgztw-left-1 {
  padding: 17px 31px 0 27px;
  &-content {
    width: 100%;
    p {
      height: 22px;
      font-size: 14px;
      color: #acb4ba;
      margin: 16px 32px 14px 0;
      span {
        font-size: 22px;
        font-weight: bold;
        margin: 0 11px;
        color: #fff;
      }
    }
  }
  p {
    height: 22px;
    font-size: 14px;
    color: #acb4ba;
  }
  .el-table,
  .el-table__expanded-cell {
    margin-top: 7px;
  }
  .el-table {
    border: 1px solid #214d64;
  }
  .el-table td,
  .el-table th {
    padding: 2px 0;
  }
}
.jgztw-left-2 {
  height: 100px;
  padding: 17px 31px 0 27px;
  &-content {
    display: flex;
    flex-direction: row;
    margin-top: 11px;
    .item {
      display: flex;
      flex-direction: row;
      height: 46px;
      margin-right: 14px;
      justify-content: flex-start;
      p {
        color: #acb4ba;
        font-size: 14px;
        span {
          font-size: 22px;
          color: #fff;
          font-weight: bold;
          margin-right: 7px;
        }
      }
      .name {
        margin-bottom: 6px;
      }
    }
  }
}
.jgztw-left-3 {
  .jgztw-left-2-content {
    justify-content: space-between;
    .item {
      flex: 1;
      border-right: 1px solid #4b5257;
      &:last-child {
        border: none;
      }
    }
  }
}
.jgztw-left-4 {
  padding: 17px 31px 0 27px;
  .pie {
    width: 470px;
    height: 153px;
  }
}
</style>