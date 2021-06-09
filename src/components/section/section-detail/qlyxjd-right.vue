<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 10:32:19
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jgztw-left.vue
-->

<template>
  <div class="qlyxjd-right w-full">
    <sign title="权力运行监督"></sign>
    <div class="progressbar">
      <progress-bar
        v-for="item in bars"
        :key="item.title"
        :title="item.title"
        :num="item.num"
        :percentage="item.percentage"
        :color="item.color"
      ></progress-bar>
    </div>
    <div class="sheji-items w-full">
      <div class="sheji-item">
        <img src="~@/assets/images/shenpi.png" alt="" />
        <div class="right flex-col">
          <p>涉及审批</p>
          <p><span>8567</span>次</p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/qunzhong.png" alt="" />
        <div class="right flex-col">
          <p>涉及群众</p>
          <p><span>8567</span>人</p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/company.png" alt="" />
        <div class="right flex-col">
          <p>涉及企业</p>
          <p><span>345</span>家</p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/xiangmu.png" alt="" />
        <div class="right flex-col">
          <p>涉及项目</p>
          <p><span>537</span>个</p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/wuzi.png" alt="" />
        <div class="right flex-col">
          <p>涉及物资</p>
          <p><span>43566</span>个</p>
        </div>
      </div>
      <div class="sheji-item">
        <img src="~@/assets/images/zijin.png" alt="" />
        <div class="right flex-col">
          <p>涉及资金</p>
          <p><span>2,245,245</span>元</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import ProgressBar from '@/components/section/progress-bar.vue'

export default defineComponent({
  name: 'qlyxjd-right',
  components: { Sign, ProgressBar },
  setup() {
    const bars = [
      {
        title: '公章使用',
        num: '318',
        percentage: '30',
      },
      {
        title: '务工分配',
        num: '199',
        percentage: '40',
      },
      {
        title: '村级采购',
        num: '231',
        percentage: '44',
      },
      {
        title: '工程建设',
        num: '368',
        percentage: '66',
      },
      {
        title: '三资管理',
        num: '151',
        percentage: '88',
      },
      {
        title: '补贴发放',
        num: '318',
        percentage: '38',
      },
    ]
    return {
      bars,
    }
  },
})
</script>

<style lang="scss" scoped>
.progressbar {
  width: 100%;
  height: 318px;
  border-bottom: 1px solid #225d73;
  padding: 24px;
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
</style>