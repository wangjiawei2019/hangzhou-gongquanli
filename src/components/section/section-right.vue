<!--
 * @Date: 2021-05-28 23:05:41
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-08 10:23:25
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-right.vue
-->
<template>
  <div class="flex justify-end">
    <div class="qingkuang relative">
      <sign title="预警处理情况"></sign>
      <div
        class="renshu absolute flex items-center justify-center"
        @click="yjclqk = yjclqk === 'list' ? 'chart': 'list'"
      >
        <img class="img" src="../../assets/images/renshu.png" />
        切换为{{ yjclqk === 'list' ? '走势' : '数据' }}图
      </div>
      <div class="qingkuang-1 flex items-center">
        <keep-alive>
          <yjclqk v-if="yjclqk === 'list'"></yjclqk>
          <qushi v-else :data="store.yjclqkzst"></qushi>
        </keep-alive>
      </div>
    </div>
  </div>

  <div class="flex items-end flex-col">
    <div class="fenxi flex relative">
      <sign title="疑似问题情况" style="width: 650px;margin-right: 30px;" v-if="yswtclqk === 'list'"></sign>
      <sign
        title="疑似问题处理情况"
        style="width: 800px;"
        :style="{ width: yswtclqk !== 'list' ? '1430px' : '800px' }"
      ></sign>
      <div
        class="renshu absolute flex items-center justify-center"
        @click="yswtclqk = yswtclqk === 'list' ? 'chart': 'list'"
      >
        <img class="img" src="../../assets/images/renshu.png" />
        切换为{{ yswtclqk === 'list' ? '走势' : '数据' }}图
      </div>
    </div>
    <div class="yisiwenti flex items-center">
      <keep-alive>
        <yswtclqk v-if="yswtclqk === 'list'"></yswtclqk>
        <qushi v-else :data="store.yswtqkzst"></qushi>
      </keep-alive>
    </div>
  </div>

  <div class="flex justify-end">
    <div class="chuli relative">
      <sign title="预警模型情况"></sign>
      <div
        class="renshu absolute flex items-center justify-center"
        style="right: 60px;"
        @click="yjmxqk = yjmxqk === 'list' ? 'chart': 'list'"
      >
        <img class="img" src="~@/assets/images/renshu.png" />
        切换为{{ yjmxqk === 'list' ? '走势' : '数据' }}图
      </div>
      <keep-alive>
        <ul
          v-if="yjmxqk === 'list'"
          class="w-full flex items-center"
          style="margin-left: -80px; margin-top: 40px;"
        >
          <li class="chuli-item flex" v-for="(item, index) in yjmxqkList" :key="index">
            <div class="icon" />
            <div>
              <div class="desc title">{{ item.name }}</div>
              <div class="desc">模型数</div>
              <div class="number">{{ item.model }}</div>
              <div class="desc">预警数</div>
              <div class="number">{{ item.warn }}</div>
            </div>
          </li>
        </ul>
        <qushi v-else :data="store.yjmxzst"></qushi>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import Sign from './sign.vue'
import Yjclqk from '@/components/section/section-right/yjclqk.vue'
import Yswtclqk from '@/components/section/section-right/yswtclqk.vue'
import Qushi from './section-right/qushi.vue'
import store from '@/store'
import HomeApi from '@/api'

export default defineComponent({
  name: 'section-right',
  components: { Sign, Yjclqk, Yswtclqk, Qushi },
  setup() {
    const yjmxqkList = ref([
      {
        name: '村级工程',
        model: 123,
        warn: 123,
      },
      {
        name: '劳务用工',
        model: 123,
        warn: 123,
      },
      {
        name: '村级采购',
        model: 123,
        warn: 123,
      },
      {
        name: '困难救助',
        model: 123,
        warn: 123,
      },
      {
        name: '资产资源',
        model: 123,
        warn: 123,
      },
    ])
    const yjclqk = ref('list')
    const yswtclqk = ref('list')
    const yjmxqk = ref('list')

    const getYjmxqk = async () => {
      const { data } = await HomeApi.getYjmxqk()
      yjmxqkList.value[0].model = data.cjgcmxs
      yjmxqkList.value[0].warn = data.cjgcyjs
      yjmxqkList.value[1].model = data.cjwgmxs
      yjmxqkList.value[1].warn = data.cjwgyjs
      yjmxqkList.value[2].model = data.knjzmxs
      yjmxqkList.value[2].warn = data.knjzyjs
      yjmxqkList.value[3].model = data.cjcgmxs
      yjmxqkList.value[3].warn = data.cjcgyjs
      yjmxqkList.value[4].model = data.zczymxs
      yjmxqkList.value[4].warn = data.zczyyjs
    }
    const getYjclqkzst = async () => {
      const { data } = await HomeApi.getYjclqkzst()
      store.yjclqkzst = data
    }
    const getYswtqkzst = async () => {
      const { data } = await HomeApi.getYswtqkzst()
      store.yswtqkzst = data
    }
    const getYjmxzst = async () => {
      const { data } = await HomeApi.getYjmxzst()
      store.yjmxzst = data
    }
    onMounted(() => {
      const update = () => {
        getYjmxqk()
        getYjclqkzst()
        getYswtqkzst()
        getYjmxzst()
      }
      update()
      watch(
        () => store.year,
        () => {
          update()
        }
      )
    })
    return {
      yjmxqkList,
      yjclqk,
      yswtclqk,
      yjmxqk,
      store,
    }
  },
})
</script>

<style lang="scss" scoped>
.qingkuang,
.fenxi {
  margin-right: 40px;
}
.qingkuang-1 {
  width: 1600px;
  height: 430px;
}
.renshu {
  cursor: pointer;
  right: 0;
  top: 69px;
  width: 228px;
  height: 41px;
  background: rgba(48, 153, 242, 0.09);
  border: 2px solid #3099f2;
  border-radius: 21px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  .img {
    width: 37px;
    height: 37px;
    margin-right: 13px;
  }
}
.fenxi,
.yisiwenti {
  margin-top: 30px;
  .radar {
    width: 565px;
    height: 350px;
    margin-right: 100px;
  }
  .bar {
    width: 800px;
    height: 350px;
    margin-top: 40px;
  }
  &-wrapper {
    width: 800px;
    height: 350px;
    .yisiwenti-item {
      height: 150px;
      padding: 0 30px;
      margin-bottom: 20px;
      background-color: rgba(78, 211, 255, 0.1);
    }
    .yisiwenti-item:nth-child(1) {
      margin-top: 30px;
    }
  }
  &-_number {
    font-size: 30px;
    color: #fff;
  }
}
.sign {
  margin-left: 0;
}
.yisiwenti {
  width: 1430px;
  height: 350px;
}
.xiangqing,
.yisiwenti {
  margin-right: 60px;
  &-title {
    margin-left: 40px;
    margin-top: 30px;
    width: 300px;
    height: 300px;
    background-color: rgba(78, 211, 255, 0.2);
    border-radius: 10px;
    &-number {
      font-size: 40px;
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
    width: 150px;
    background-color: transparent;
  }
}

.chuli {
  margin-top: 40px;
  width: 1560px;
  height: 380px;
  &-item {
    margin-top: 50px;
    margin-right: 50px;
    display: flex;
    .title {
      font-size: 30px;
      font-weight: bold;
    }
    .icon {
      width: 104px;
      height: 104px;
      margin-right: 30px;
      background-image: url('../../assets/images/wenti1.png');
      background-size: 100% 100%;
    }
    .number {
      font-family: yjsz;
      font-size: 39px;
      color: #8550ff;
    }
    .desc {
      font-size: 36px;
      white-space: nowrap;
      color: #d5e1e1;
    }
    &:last-child {
      margin-right: 0;
    }
    &:nth-child(2) {
      .number {
        color: #ff9b30;
      }
      .icon {
        background-image: url('../../assets/images/wenti2.png');
        background-size: 100% 100%;
      }
    }
    &:nth-child(3) {
      .number {
        color: #40a7fe;
      }
      .icon {
        background-image: url('../../assets/images/wenti3.png');
        background-size: 100% 100%;
      }
    }
    &:nth-child(4) {
      .number {
        color: #00ac7d;
      }
      .icon {
        background-image: url('../../assets/images/wenti4.png');
        background-size: 100% 100%;
      }
    }
    &:nth-child(5) {
      .number {
        color: #b91236;
      }
      .icon {
        background-image: url('../../assets/images/wenti1.png');
        background-size: 100% 100%;
      }
    }
  }
  .radar-pie {
    margin-top: 20px;
    margin-left: -100px;
    width: 560px;
    height: 240px;
  }
  .wentichuli-item {
    padding: 0 10px;
    height: 56px;
    margin-left: 40px;
    .dot {
      width: 32px;
      height: 32px;
      margin-right: 26px;
    }
    .wentichuli-desc {
      font-size: 24px;
    }
    &:nth-child(2n) {
      background-color: rgba(255, 255, 255, 0.15);
    }
    &:nth-child(1) {
      .wentichuli-desc {
        color: #ff9b30;
      }
    }
    &:nth-child(2) {
      .wentichuli-desc {
        color: #40a7fe;
      }
    }
    &:nth-child(3) {
      .wentichuli-desc {
        color: #00ac7d;
      }
    }
    &:nth-child(4) {
      .wentichuli-desc {
        color: #8550ff;
      }
    }
  }
}
</style>
