<template>
  <section class="left-item-1">
    <section class="item-1-1">
      <sign title="工程数量情况">
        <template #money>
          <div class="item-1-1-title">总涉及金额：{{ store.sjzje.xmzje }}万元</div>
        </template>
      </sign>
      <section class="item-1-img">
        <section class="bgImg1 bg-center bg-cover">
          <section class="number-all">{{ store.gcslqk.xmzs }}</section>
          <section class="description">总计</section>
        </section>
        <section class="item-1-imgList">
          <div class="w-full flex flex-wrap">
            <div class="img-wrapper flex flex-col items-end bg-item-1 bg-no-repeat">
              <section class="imgList-number">{{ store.gcslqk.gkztb }}</section>
              <section class="imgList-word">公开招标</section>
            </div>
            <div class="img-wrapper flex flex-col items-end bg-item-2 bg-no-repeat">
              <section class="imgList-number">{{ store.gcslqk.yqzb }}</section>
              <section class="imgList-word">邀请招标</section>
            </div>
            <div class="img-wrapper flex flex-col items-end bg-item-3 bg-no-repeat">
              <section class="imgList-number">{{ store.gcslqk.zjfb }}</section>
              <section class="imgList-word">直接发包</section>
            </div>
            <div class="img-wrapper flex flex-col items-end bg-item-4 bg-no-repeat">
              <section class="imgList-number">{{ store.gcslqk.qtxs }}</section>
              <section class="imgList-word">其他形式</section>
            </div>
          </div>
        </section>
      </section>
    </section>
    <section class="item-1-2">
      <sign title="资源资产情况" style="margin-left: 20px">
        <template #money>
          <div class="item-1-1-title">总涉及金额：{{ store.sjzje.zczje }}万元</div>
        </template>
      </sign>
      <div ref="chart1" style="width: 500px; height: 380px; margin-top: 40px;margin-left: 20px"></div>
    </section>
  </section>
  <section class="left-item-2">
    <div class="item-chart">
      <sign title="村级采购">
        <template #money>
          <div class="item-1-1-title">总涉及金额：{{ store.sjzje.cjcgzje }}万元</div>
        </template>
      </sign>
      <div ref="chart2" style="width: 800px; height: 350px"></div>
    </div>
    <div class="item-chart relative">
      <sign title="务工情况">
        <template #money>
          <div class="item-1-1-title">总涉及金额：{{ store.sjzje.wgzje }}万元</div>
        </template>
      </sign>
      <div class="absolute top-28 right-8 text-3xl text-white">人</div>
      <div ref="chart3" style="width: 750px; height: 350px"></div>
    </div>
  </section>
  <section class="left-item-3">
    <section class="ver-item">
      <sign title="网上公开" style="margin: 0"></sign>
      <section class="ver-item-1">
        <img src="~@/assets/images/1.png" />
        <section class="ver-item-1-1">
          <section class="title">公开次数</section>
          <section class="number">{{ store.wsgk.gkcs || 0 }}次</section>
        </section>
      </section>
      <section class="ver-item-1">
        <img src="~@/assets/images/2.png" />
        <section class="ver-item-1-1">
          <section class="title">点击量</section>
          <section class="number">{{ store.wsgk.gkdjl || 0 }}次</section>
        </section>
      </section>
    </section>
    <section class="ver-item">
      <sign title="群众诉求" style="margin: 0"></sign>
      <section class="ver-item-1">
        <img src="~@/assets/images/3.png" />
        <section class="ver-item-1-1">
          <section class="title">反映次数</section>
          <section class="number">{{ store.qzsq.qzfysc || 0 }}次</section>
        </section>
      </section>
      <section class="ver-item-1">
        <img src="~@/assets/images/4.png" />
        <section class="ver-item-1-1">
          <section class="title">满意率</section>
          <section class="number">{{ store.qzsq.qzmyl || 0 }}</section>
        </section>
      </section>
    </section>
    <section class="ver-item">
      <sign title="救助总览" style="margin: 0"></sign>
      <section class="ver-item-1">
        <img src="~@/assets/images/item6.png" />
        <section class="ver-item-1-1">
          <section class="title">涉及人员</section>
          <section class="number">{{ store.jzzl.sjrs || 0 }}人</section>
        </section>
      </section>
      <section class="ver-item-1">
        <img src="~@/assets/images/item7.png" />
        <section class="ver-item-1-1">
          <section class="title">涉及金额</section>
          <section class="number">{{ store.jzzl.sjje || 0 }}万元</section>
        </section>
      </section>
    </section>
    <section class="ver-item">
      <sign title="印章管理" style="margin: 0"></sign>
      <section class="ver-item-1">
        <img src="~@/assets/images/5.png" />
        <section class="ver-item-1-1">
          <section class="title">平均审批时间</section>
          <section class="number">{{ store.yzgl.pjspsj || 0 }}小时</section>
        </section>
      </section>
      <section class="ver-item-1">
        <img src="~@/assets/images/6.png" />
        <section class="ver-item-1-1">
          <section class="title">使用次数</section>
          <section class="number">{{ store.yzgl.sycs || 0 }}次</section>
        </section>
      </section>
    </section>
  </section>
</template>
  
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import Sign from './sign.vue'
import * as echarts from 'echarts'
import { useThrottleFn } from '@vueuse/core'
import store from '@/store'
import HomeApi from '@/api'

export default defineComponent({
  name: 'section-left',
  components: { Sign },
  setup() {
    const chart1 = ref<HTMLDivElement>(null)
    const chart2 = ref<HTMLDivElement>(null)
    const chart3 = ref<HTMLDivElement>(null)
    const initEchart1 = (echart1) => {
      let yAxisData = []
      let seriesD = []
      let seriesData = []

      store.zyzczk.forEach((i) => {
        yAxisData.push(i.zczt)
        seriesD.push(i.num)
      })
      let max = Math.max(...seriesD)
      let maxArr = []
      for (let i = 0; i < store.zyzczk.length; i++) {
        maxArr.push(max)
      }
      seriesData.push(
        {
          type: 'bar',
          xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
          yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
          data: seriesD,
          barWidth: 15,
          itemStyle: {
            color: 'rgba(68, 180, 255, 1)',
          },
          z: 2,
        },
        {
          name: '背景',
          type: 'bar',
          barWidth: 20,
          barGap: '-100%',
          data: maxArr,
          itemStyle: {
            color: 'rgba(255, 255, 255, 0.15)',
          },
          z: 0,
        }
      )
      const options = {
        backgroundColor: 'transparent',
        grid: [
          {
            //左侧的柱状图grid
            left: '20%',
            top: '0',
            right: '25%',
            bottom: '0',
          },
        ],
        xAxis: [
          {
            //左侧柱状图的X轴
            gridIndex: 0, //x 轴所在的 grid 的索引
            show: false,
          },
        ],
        yAxis: [
          {
            //左侧柱状图的Y轴
            type: 'category',
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              // verticalAlign: 'bottom',
              // align: 'left',
              // padding: [0, 0, 15, 15],
              show: true,
              color: '#FFFFFF',
              fontSize: '26',
            },
            data: yAxisData,
            inverse: true,
          },
          {
            //左侧柱状图的Y轴
            type: 'category',
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: seriesD,
            inverse: true,
            axisLabel: {
              show: true,
              color: 'rgba(73, 167, 255, 1)',
              fontSize: '22',
              formatter: function (value) {
                return value + '万元'
              },
              rich: {
                y: {
                  color: '#befbff',
                  fontSize: 16,
                },
                x: {
                  color: '#f6cf42',
                  fontSize: 16,
                },
              },
            },
          },
          {
            //左侧柱状图的Y轴
            gridIndex: 0, //y轴所在的 grid 的索引
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: [],
          },
        ],
        series: seriesData,
      }
      echart1.setOption(options)
    }
    const initEchart2 = (echart2) => {
      const data = []
      store.cjcg.forEach((i) => {
        data.push({ name: i.cgfs, value: i.num })
      })
      const options = {
        tooltip: {
          trigger: 'item',
        },
        grid: {
          right: '20%',
        },
        legend: {
          top: '10%',
          right: 0,
          orient: 'vertical',
          textStyle: {
            color: '#fff',
            fontSize: 30,
          },
          itemGap: 25,
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '50%'],
            left: '-25%',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
            label: {
              fontSize: 30,
              color: '#fff',
              formatter: (params) => {
                return params.value + '项'
              },
            },
            data,
          },
        ],
      }
      echart2.setOption(options)
    }
    const initEchart3 = (echart3) => {
      let xAxisData = []
      let data = []
      store.wgqk.forEach((i) => {
        xAxisData.push(i.wglx)
        data.push(i.num)
      })
      const options = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '15%',
          right: '7%',
          left: '18%',
          bottom: '20%',
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisData,
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
            axisLabel: {
              interval: 0,
              rotate: -45,
              color: '#e2e9ff',
              fontSize: 18,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
              fontSize: 16,
            },
            nameTextStyle: {
              fontSize: 30,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,1)',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data,
            barWidth: '20px',
            itemStyle: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                //数值样式
                color: 'rgba(48, 152, 241, 1)',
                fontSize: 22,
              },
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(0,244,255,1)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(0,77,167,1)', // 100% 处的颜色
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0,160,221,1)',
              shadowBlur: 4,
            },
          },
        ],
      }
      echart3.setOption(options)
    }

    const getProjectdata = async () => {
      const { data } = await HomeApi.getProjectdata()
      store.gcslqk = data
    }
    const getSjzje = async () => {
      const { data } = await HomeApi.getSjzje()
      store.sjzje = data
    }
    const getWsgk = async () => {
      const { data } = await HomeApi.getWsgk()
      store.wsgk = data
    }
    const getQzsq = async () => {
      const { data } = await HomeApi.getQzsq()
      store.qzsq = data
    }
    const getJzzl = async () => {
      const { data } = await HomeApi.getJzzl()
      store.jzzl = data
    }
    const getYzgl = async () => {
      const { data } = await HomeApi.getYzgl()
      store.yzgl = data
    }
    const getAssetmanagement = async (echart1) => {
      const { data } = await HomeApi.getAssetmanagement()
      store.zyzczk = data
      initEchart1(echart1)
    }
    const getVillagepur = async (echart2) => {
      const { data } = await HomeApi.getVillagepur()
      store.cjcg = data
      initEchart2(echart2)
    }
    const getWorkers = async (echart3) => {
      const { data } = await HomeApi.getWorkers()
      store.wgqk = data
      initEchart3(echart3)
    }

    onMounted(() => {
      const echart1 = echarts.init(chart1.value)
      const echart2 = echarts.init(chart2.value)
      const echart3 = echarts.init(chart3.value)

      const update = () => {
        getProjectdata()
        getSjzje()
        getWsgk()
        getQzsq()
        getJzzl()
        getYzgl()
        getAssetmanagement(echart1)
        getVillagepur(echart2)
        getWorkers(echart3)
      }
      update()
      watch(
        () => store.year,
        () => {
          update()
        }
      )
      const throttledResize = useThrottleFn(() => {
        echart1.resize()
        echart2.resize()
        echart3.resize()
      }, 1000)

      window.addEventListener('resize', throttledResize)
    })

    return {
      chart1,
      chart2,
      chart3,
      store,
    }
  },
})
</script>

<style lang="scss">
.left-item-1 {
  display: flex;

  .item-1-1 {
    /*width: 100%;*/

    .item-1-img {
      display: flex;

      .bgImg1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 37px;
        width: 330px;
        height: 366px;
        background: url('@/assets/images/img1.png');

        .number-all {
          text-align: center;
          font-family: yjsz;
          color: #ffffff;
          line-height: 74px;
          font-size: 60px;
          font-weight: bold;
          background: linear-gradient(0deg, #3099f2 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          text-align: center;
          font-family: pf;
          font-weight: bold;
          color: #ffffff;
          line-height: 74px;
          font-size: 42px;
        }
      }
    }

    .item-1-imgList {
      width: 650px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      .img-wrapper {
        width: 273px;
        height: 200px;
        margin-right: 30px;
        padding-top: 20px;
        padding-right: 30px;
        box-sizing: border-box;
      }
      .imgList-number {
        font-size: 39px;
        font-family: yjsz;
        font-weight: 400;
        color: #ffffff;
        line-height: 54px;
      }

      .imgList-word {
        font-size: 28px;
        font-family: pf;
        font-weight: bold;
        color: #ffffff;
        line-height: 54px;
      }
    }
  }
}
.item-1-1-title {
  margin-left: 20px;
  font-size: 30px;
  font-family: pfBlod;
  color: #ffffff;
}
.left-item-2 {
  display: flex;
  margin-top: 30px;
}

.left-item-3 {
  display: flex;
  margin: 150px 0 0 60px;
  box-sizing: border-box;
  padding-right: 210px;

  .ver-item {
    flex: 1;

    .ver-item-1 {
      display: flex;
      margin-top: 50px;

      .ver-item-1-1 {
        .title {
          font-family: pfBlod;
          color: #ffffff;
          line-height: 54px;
          font-size: 34px;
        }

        .number {
          font-size: 33px;
          font-family: number;
          font-weight: bold;
          color: #4ed3ff;
          line-height: 54px;
        }
      }
    }
  }
}
</style>
