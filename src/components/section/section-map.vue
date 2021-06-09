<template>
  <div class="w-full h-full relative">
    <div id="map" ref="mapRef" class="w-full h-full"></div>
    <template v-if="showBall">
      <div class="total-item total-item1 flex flex-col items-center justify-center">
        <div class="number">
          {{ store.gcslqk.xmzs || 0 }}
          <span>项</span>
        </div>
        <div class="desc">工程总数</div>
      </div>
      <div class="total-item total-item2 flex flex-col items-center justify-center">
        <div class="number">
          {{ store.sjzje.xmzje || 0 }}
          <span>万</span>
        </div>
        <div class="desc">总金额</div>
      </div>
      <div class="total-item total-item3 flex flex-col items-center justify-center">
        <div class="number">
          {{ store.yjcls.yjzs || 0 }}
          <span>个</span>
        </div>
        <div class="desc">预警总数</div>
      </div>
    </template>

    <button
      @click="addNumber"
      class="button-text absolute z-50 text-white"
      style="left: 150px;"
    >返回省级</button>
    <!--  <button
      @click="setHotColor"
      class="button-text absolute z-50 text-white"
      style="left:280px;"
    >热力图</button>-->
  </div>
</template>
<script lang="ts">
import ZjMap from 'zjmap_sjw'
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store'
// import * as echarts from 'echarts'
// // @ts-ignore
// import mapJson from '@/assets/json/zhejiang.json'
export default defineComponent({
  //   setup() {
  //     const mapRef = ref<HTMLDivElement>()
  //     onMounted(() => {
  //       const mapEchart = echarts.init(mapRef.value)
  //       const option = {
  //         tooltip: {
  //           show: false,
  //         },

  //         series: [
  //           {
  //             name: 'ZheJiang',
  //             type: 'map',
  //             map: 'ZheJiang',
  //             label: {
  //               show: true,
  //               fontSize: 34,
  //               color: '#fff',
  //             },
  //             itemStyle: {
  //               areaColor: {
  //                 borderWidth: 0,
  //                 borderColor: 'transparent',
  //               },
  //             },
  //             data: [
  //               {
  //                 name: '杭州市',
  //                 itemStyle: {
  //                   areaColor: '#4727d9',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '宁波市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '温州市',
  //                 itemStyle: {
  //                   areaColor: '#3963d3',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '嘉兴市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '湖州市',
  //                 itemStyle: {
  //                   areaColor: '#7dc4f2',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '绍兴市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '金华市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '衢州市',
  //                 itemStyle: {
  //                   areaColor: '#7dc4f2',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '舟山市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '台州市',
  //                 itemStyle: {
  //                   areaColor: '#5ec5df',
  //                   opacity: 1,
  //                 },
  //               },
  //               {
  //                 name: '丽水市',
  //                 itemStyle: {
  //                   areaColor: '#7dc4f2',
  //                   opacity: 1,
  //                 },
  //               },
  //             ],
  //             silent: true,
  //           },
  //         ],
  //       }
  //       echarts.registerMap('ZheJiang', mapJson)
  //       mapEchart.setOption(option)

  //       window.addEventListener('resize', () => {
  //         mapEchart.resize()
  //       })
  //     })

  //     return {
  //       mapRef,
  //       store,
  //     }
  //   },
  // })
  setup() {
    const addNumber = () => {
      ZjMap.setLevel('cit')
    }
    const setHotColor = () => {
      const areaColor = [
        {
          code: '330100000',
          color: '#4727da',
        },
        {
          code: '330200000',
          color: '#5ec5df',
        },
        {
          code: '330300000',
          color: '#3963d3',
        },
        {
          code: '330400000',
          color: '#5ec5df',
        },
        {
          code: '330500000',
          color: '#7dc4f2',
        },
        {
          code: '330600000',
          color: '#5ec5df',
        },
        {
          code: '330700000',
          color: '#5ec5df',
        },
        {
          code: '330800000',
          color: '#7dc4f2',
        },
        {
          code: '330900000',
          color: '#5ec5df',
        },
        {
          code: '331000000',
          color: '#5ec5df',
        },
        {
          code: '331100000',
          color: '#7dc4f2',
        },
      ]
      areaColor.forEach((i) => {
        ZjMap.changeAreaColor({ code: i.code, color: i.color })
      })
      // ZjMap.changeAreaColor({ code: 330100000, color: '#FFFFFF' }, true) // 保持初始化的颜色状态
    }

    const initMap = () => {
      if (!sessionStorage.getItem('code')) {
        sessionStorage.setItem('code', '330000000')
      }
      ZjMap.init(
        'map',
        {
          extend: {
            center: [119.956, 29.439],
            padding: 30,
            // zoom: 6.5,
            // maxZoom: 7.5,
            // minZoom: 5.8,
          },
          url: 'https://yt.zjasm.net/api/vectortileserver/zjdistrict_20201204/resources/styles/root.json',
          style: {
            highlight: '#ADAAAA', //高亮颜色
            generalcolor: '#008ED5', // 普通区块颜色
            fontsize: {
              cit: 16,
              cou: 16,
              tow: 16,
            },
            fontcolor: {
              cit: '#FF0000',
              cou: '#000000',
              tow: '#000000',
            },
          },
          mouseMoveHighlight: true,
          mouseClickEnter: true,
          // mouseControl: true
        },
        () => {
          ZjMap.setMouseEnter((aaa, el, ddd) => {
            el.innerHTML =
              '<div style="width:100px;height:100px;background:red;">adsafds</div>'
          })
          ZjMap.setMouseClick((code, level) => {})
        }
      )
    }

    const route = useRoute()
    const showBall = computed(
      () => route.params.tabName !== '首页' && route.params.tabName
    )
    onMounted(() => {
      initMap()
    })

    return {
      addNumber,
      setHotColor,
      store,
      showBall,
    }
  },
})
</script>

<style lang="scss">
.button-text {
  top: 20px;
  font-size: 24px;
}
#map {
  box-sizing: border-box;
  margin-top: 100px;
  height: calc(100% - 200px);
}
.total-item {
  z-index: 520;
  position: absolute;
  width: 286px;
  height: 286px;

  background-size: 100% 100%;
  left: 100px;
  top: 250px;
  .desc {
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
    line-height: 50px;
  }
  .number {
    max-width: 80%;
    font-size: 44px;
    font-weight: bold;
    color: #ffffff;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
    background: linear-gradient(0deg, #30f2e2 0%, #ffffff 88.0859375%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    & > span {
      font-size: 24px;
    }
  }
}
.total-item2 {
  left: 60px;
  top: 700px;
}
.total-item3 {
  left: 1400px;
  top: 600px;

  .number {
    background: linear-gradient(0deg, #f2dd30 0%, #ffffff 88.0859375%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>