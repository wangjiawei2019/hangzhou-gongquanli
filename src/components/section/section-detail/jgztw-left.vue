<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 17:32:43
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jgztw-left.vue
-->

<template>
  <div class="jgztw-left w-full h-full">
    <sign title="监督主体网"></sign>
    <div class="jgztw-left-1">
      <bar title="预警模型情况"></bar>
      <div class="jgztw-left-1-content flex">
        <p class="flex items-center">
          已梳理模型
          <span class="pangmen">213</span>个
        </p>
        <p class="flex items-center">
          已使用模型
          <span class="pangmen">132</span>个
        </p>
      </div>
      <p>高质量模型</p>
      <el-table
        :data="tableData"
        :header-cell-style="{
          'font-size': '14px',
          color: '#ACB4BA',
        }"
        :cell-style="{ 'font-size': '14px' }"
        :row-style="{ height: '14px' }"
        :row-class-name="tableRowClassName"
      >
        <!-- <el-table-column
          v-for="item in tableHeader"
          :prop="item.key"
          :label="item.label"
          :key="item.key"
          show-overflow-tooltip
        ></el-table-column> -->
        <el-table-column prop="xh" label="序号" width="59"></el-table-column>
        <el-table-column
          prop="mxdw"
          label="模型单位"
          width="80"
        ></el-table-column>
        <el-table-column prop="mxmc" label="模型名称"></el-table-column>
        <el-table-column prop="zhl" label="转化率" width="70"></el-table-column>
      </el-table>
    </div>
    <div class="jgztw-left-2">
      <bar title="监督单位和部门"></bar>
      <ul class="jgztw-left-2-content w-full flex flex-row">
        <li v-for="item in departs" :key="item.name" class="item flex flex-row">
          <div class="dot"></div>
          <div>
            <p class="name">{{ item.name }}</p>
            <p>
              <span class="pangmen">{{ item.num }}</span
              >个
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="jgztw-left-2 jgztw-left-3">
      <bar title="监督对象"></bar>
      <ul class="jgztw-left-2-content w-full flex flex-row">
        <li v-for="item in objects" :key="item.name" class="item flex flex-row">
          <div class="dot dot-1"></div>
          <div>
            <p class="name">{{ item.name }}</p>
            <p>
              <span class="pangmen">{{ item.num }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="jgztw-left-4">
      <bar title="监督权力项（重点领域）"></bar>
      <div ref="pieRef" class="pie w-full h-full" style="margintop: 5px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import Bar from '@/components/section/bar.vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'jgztw-left',
  components: { Sign, Bar },
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
        num: 1218,
      },
      {
        name: '村干部',
        num: 3245,
      },
    ]
    const pieRef = ref<HTMLDivElement>()

    const initPie = (pieEchart) => {
      let title = '许可类'
      let color = [
        '#ECF8FC',
        '#1793E6',
        '#163FD7',
        '#E6C117',
        '#17E69A',
        '#45F2F8',
      ]
      let echartData = [
        {
          name: '公章审批',
          value: 3,
        },
        {
          name: '工程审批',
          value: 3,
        },
        {
          name: '务工审批',
          value: 12,
        },
        {
          name: '三资审批',
          value: 5,
        },
        {
          name: '采购审批',
          value: 32,
        },
        {
          name: '补贴审批',
          value: 31,
        },
      ]

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g
        return num.toString().replace(reg, ',')
      }
      let total = echartData.reduce((a, b) => {
        return a + b.value
      }, 0)
      const options = {
        title: [
          {
            text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
            top: 'center',
            left: '21%',
            textAlign: 'center',
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#ACB4BA',
                  padding: [5, 0],
                },
                val: {
                  fontSize: 22,
                  fontWeight: 'bold',
                  fontFamily: 'pangmen',
                  color: '#fff',
                },
              },
            },
          },
        ],
        color,
        legend: [
          {
            x: '50%',
            y: '20%',
            itemWidth: 14,
            itemHeight: 14,
            align: 'left',
            textStyle: {
              fontSize: 14,
              color: '#ACB4BA',
            },
            data: ['公章审批', '三资审批'],
          },
          {
            x: '50%',
            y: '40%',
            itemWidth: 14,
            itemHeight: 14,
            align: 'left',
            textStyle: {
              fontSize: 14,
              color: '#ACB4BA',
            },
            data: ['工程审批', '采购审批'],
          },
          {
            x: '50%',
            y: '60%',
            itemWidth: 14,
            itemHeight: 14,
            align: 'left',
            textStyle: {
              fontSize: 14,
              color: '#ACB4BA',
            },
            data: ['务工审批', '补贴审批'],
          },
        ],
        series: [
          {
            type: 'pie',
            left: '-20%',
            radius: ['80%', '90%'],
            center: ['35%', '50%'],
            silent: true,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: echartData,
          },
        ],
      }
      pieEchart.setOption(options)
    }

    onMounted(() => {
      const pieEchart1 = echarts.init(pieRef.value)

      initPie(pieEchart1)
    })

    const tableRowClassName = () => {}

    return {
      tableHeader,
      tableData,
      departs,
      objects,
      pieRef,
      tableRowClassName,
    }
  },
})
</script>

<style lang="scss">
.jgztw-left {
  border: 1px solid;
  border-image: linear-gradient(0deg, #225d73, #2c86a8) 10 10;
  background: linear-gradient(
    180deg,
    rgba(12, 62, 84, 0.6) 0%,
    rgba(12, 62, 84, 0) 100%
  );
  .jgztw-left-1 {
    padding: 10px 30px 5px;
    &-content {
      width: 100%;
      p {
        height: 22px;
        font-size: 14px;
        color: #acb4ba;
        margin: 6px 32px 6px 0;
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
    .el-table thead {
      background-color: #15394c;
    }
    .el-table td,
    .el-table th {
      padding: 2px 0;
    }
  }
  .jgztw-left-2 {
    height: 100px;
    padding: 10px 30px;
    &-content {
      margin-top: 11px;
      justify-content: space-between;
      .dot {
        width: 12px;
        height: 12px;
        border: 1px solid #393f45;
        border-radius: 50%;
        margin-right: 6px;
        position: relative;
        &::after {
          position: absolute;
          content: ' ';
          width: 6px;
          height: 6px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #17e69a;
          border-radius: 50%;
        }
      }
      .dot-1::after {
        background-color: #7abcfe;
      }
      .item {
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
    height: 110px;
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
    width: 100%;
    height: 100px;
    padding: 10px 30px 0 30px;
  }
}
</style>