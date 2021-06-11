<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 19:23:18
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/jdydt-right.vue
-->

<template>
  <div class="jdydt-right w-full h-full">
    <sign title="监督一点通"></sign>
    <ul class="jdydt-right-1 w-full flex justify-between">
      <li class="flex flex-row">
        <div class="img bg-lianluozhan bg-no-repeat"></div>
        <p>
          监察联络站
          <span class="pangmen">23</span>个
        </p>
      </li>
      <li class="flex flex-row">
        <div class="img bg-lianluoyuan bg-no-repeat"></div>
        <p>
          监察联络员
          <span class="pangmen">384</span>个
        </p>
      </li>
    </ul>
    <div class="jdydt-right-2 w-full h-full flex flex-col">
      <div class="jdydt-right-2-content">
        <p class="total">
          投诉总量
          <span class="pangmen">43233</span>
        </p>
        <div class="item">
          <div class="color"></div>
          <div class="var">
            <p class="text">纪委处理</p>
            <p class="num pangmen">3424</p>
          </div>
        </div>
        <div class="item">
          <div class="color" style="backgroundColor: #1793e6"></div>
          <div class="var">
            <p class="text">业务部门处理</p>
            <p class="num pangmen">40120</p>
          </div>
        </div>
      </div>
      <div class="jdydt-right-3 flex flex-row items-center">
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
.jdydt-right {
  border: 1px solid;
  border-image: linear-gradient(0deg, #225d73, #2c86a8) 10 10;
  background: linear-gradient(
    180deg,
    rgba(12, 62, 84, 0.6) 0%,
    rgba(12, 62, 84, 0) 100%
  );
  .jdydt-right-1 {
    width: 425px;
    height: 65px;
    margin: 18px 19px 19px 25px;
    border-bottom: 1px solid #708089;
    li {
      margin-right: 10px;
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
  }
  .jdydt-right-2 {
    padding-left: 25px;
    &-content {
      display: flex;
      flex-direction: row;
      .total {
        color: #acb4ba;
        font-size: 14px;
        margin-right: 60px;
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
          margin-right: 6px;
          background-color: #17e69a;
          margin-top: 3px;
        }

        .text {
          color: #acb4ba;
          font-size: 12px;
        }
        .num {
          color: #fff;
          font-size: 14px;
          margin-top: 6px;
          font-weight: bold;
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
    font-size: 12px;
    font-weight: 500;
    font-family: 'pangmen';
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
}
</style>