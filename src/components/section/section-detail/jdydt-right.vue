<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: chenjing
 * @LastEditTime: 2021-06-08 10:32:19
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jgztw-left.vue
-->

<template>
  <div class="jdydt-right w-full">
    <sign title="监督一点通"></sign>
    <ul class="jdydt-right-1 w-full flex">
      <li>
        <div class="img"></div>
        <p>监察联络站<span>23</span>个</p>
      </li>
      <li>
        <div class="img"></div>
        <p>监察联络员<span>384</span>个</p>
      </li>
    </ul>
    <div class="jdydt-right-2 w-full h-full">
      <div class="jdydt-right-2-content">
        <p class="total">投诉总量<span>43233</span></p>
        <div class="item">
          <div class="color"></div>
          <div>
            <p class="text">纪委处理</p>
            <p class="num">3424</p>
          </div>
        </div>
        <div class="item">
          <div class="color"></div>
          <div>
            <p class="text">纪委处理</p>
            <p class="num">3424</p>
          </div>
        </div>
      </div>
      <div class="jdydt-right-3">
        <div class="green" :style="{ width: greenWidth }">12.8%</div>
        <div class="blue">87.2%</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'

export default defineComponent({
  name: 'jdydt-right',
  components: { Sign },
  setup() {
    const greenWidth = '12.8%'

    return {
      greenWidth,
    }
  },
})
</script>

<style lang="scss" scoped>
.jdydt-right-1 {
  width: 425px;
  height: 65px;
  margin: 18px 19px 19px 25px;
  border-bottom: 1px solid #708089;
  li {
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    .img {
      width: 47px;
      height: 47px;
    }
    p {
      color: #acb4ba;
      font-size: 14px;
      margin-left: 10px;
      line-height: 47px;
      span {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin: 0 6px 0 10px;
      }
    }
  }
  li:first-child .img {
    background: url(@/assets/images/lianluozhan.png) no-repeat center/100% 100%;
  }
  li:nth-child(2) .img {
    background: url(@/assets/images/lianluoyuan.png) no-repeat center/100% 100%;
  }
}
.jdydt-right-2 {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  &-content {
    display: flex;
    flex-direction: row;
    .total {
      color: #acb4ba;
      font-size: 14px;
      margin-right: 88px;
      span {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin-left: 12px;
      }
    }
    .item {
      display: flex;
      flex-direction: row;
      margin-right: 29px;
      .color {
        width: 11px;
        height: 11px;
        padding: 2px;
        border: 1px solid #677179;
        margin-right: 2px;
      }

      .text {
        color: #acb4ba;
        font-size: 12px;
      }
      .num {
        color: #fff;
        font-size: 14px;
        margin-top: 6px;
      }
      &:first-child .color {
        background-color: #17e69a;
      }
      &:nth-child(2) .color {
        background-color: #1793e6;
      }
    }
  }
}
.jdydt-right-3 {
  width: 425px;
  height: 28px;
  border: 1px solid #405d7b;
  margin-top: 13px;
  padding: 7px 6px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #fff;
  .green {
    background-color: #17e69a;
    text-align: right;
    padding-right: 6px;
  }
  .blue {
    flex: 1;
    background-color: #1793e6;
    padding-left: 6px;
  }
}
</style>