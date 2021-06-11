<!--
 * @Date: 2021-06-07 10:41:45
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-11 21:05:12
 * @FilePath: /hangzhou-gongquanli/src/components/section/section-detail/dsjjddt-left.vue
-->

<template>
  <div class="dsjjddt-left w-full h-full flex flex-col">
    <sign title="大数据监督动态"></sign>
    <div class="dsjjddt-left-content w-full flex-1 flex">
      <sign-col title="预警分析情况"></sign-col>
      <ul style="margin-right: 30px; width: 300px">
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">总预警数</label>
          <div class="desc pangmen">23546</div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">单位预警排行</label>
          <div class="desc chinese">白云村</div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">监督对象预警排行</label>
          <div class="desc chinese">张一家</div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">权力项预警排行</label>
          <div class="desc chinese">补贴审批</div>
        </li>
      </ul>
      <sign-col title="发现疑似问题"></sign-col>
      <ul style="margin-right: 30px; width: 320px; margin-top: -20px">
        <li class="dsjjddt-left-content-item flex items-center">
          <img src="../../../assets/images/data.png" style="margin-right: 5px" />
          <div>
            <label class="label">总预警数</label>
            <div class="desc">
              <span class="pangmen">12312</span>
              <span class="label">
                条（占总数据
                <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">0.2%</span>
                ）
              </span>
            </div>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center">
          <img src="../../../assets/images/money.png" style="margin-right: 5px" />
          <div>
            <label class="label">涉及金额</label>
            <div class="desc">
              <span class="pangmen">5678</span>
              <span class="label">
                万元（占总金额
                <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">30%</span>
                ）
              </span>
            </div>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center">
          <img src="../../../assets/images/person.png" style="margin-right: 5px" />
          <div>
            <label class="label">涉及人员</label>
            <div class="desc">
              <span class="pangmen">527</span>
              <span class="label">
                个（占总人数
                <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">13%</span>
                ）
              </span>
            </div>
          </div>
        </li>
      </ul>
      <sign-col title="疑似问题处置"></sign-col>
      <ul style="margin-right: 30px; width: 320px">
        <li class="dsjjddt-left-content-item flex items-center">
          <div class="dot"></div>
          <label class="label" style="width: 70px">下发数</label>
          <div class="desc">
            <span class="pangmen">611</span>
            <span class="label">
              条（下发率
              <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">95%</span>
              ）
            </span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center">
          <div class="dot"></div>
          <label class="label" style="width: 70px">转化数</label>
          <div class="desc">
            <span class="pangmen">1639</span>
            <span class="label">
              条（转化率
              <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">65%</span>
              ）
            </span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center">
          <div class="dot"></div>
          <label class="label" style="width: 70px">反馈数</label>
          <div class="desc">
            <span class="pangmen">771</span>
            <span class="label">
              条（反馈率
              <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">51%</span>
              ）
            </span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center">
          <div class="dot"></div>
          <label class="label" style="width: 70px">查实数</label>
          <div class="desc">
            <span class="pangmen">145</span>
            <span class="label">
              条（查实率
              <span class="desc pangmen" style="color: #45f2f8; font-size: 18px">76%</span>
              ）
            </span>
          </div>
        </li>
      </ul>
      <sign-col title="问题核实成效"></sign-col>
      <ul style="margin-right: 30px; width: 200px">
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">查处人员</label>
          <div class="desc">
            <span class="pangmen">169</span>&nbsp;
            <span class="label">人</span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">挽回损失</label>
          <div class="desc">
            <span class="pangmen">3590</span>&nbsp;
            <span class="label">元</span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">问题整改</label>
          <div class="desc">
            <span class="pangmen">1411</span>&nbsp;
            <span class="label">项</span>
          </div>
        </li>
        <li class="dsjjddt-left-content-item flex items-center justify-between">
          <label class="label">避免损失</label>
          <div class="desc">
            <span class="pangmen">1137</span>&nbsp;
            <span class="label">元</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sign from '@/components/section/sign.vue'
import SignCol from '@/components/section/sign-col.vue'

export default defineComponent({
  name: 'dsjjddt-left',
  components: { Sign, SignCol },
  setup() {},
})
</script>

<style lang="scss">
.dsjjddt-left {
  border: 1px solid;
  border-image: linear-gradient(0deg, #225d73, #2c86a8) 10 10;
  background: linear-gradient(
    180deg,
    rgba(12, 62, 84, 0.6) 0%,
    rgba(12, 62, 84, 0) 100%
  );
  &-content {
    box-sizing: border-box;
    padding: 15px 30px;
    display: flex;

    &-item {
      margin-bottom: 10px;

      .label {
        font-size: 14px;
        font-weight: 500;
        color: #acb4ba;
      }
      .desc {
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        color: #ffffff;
      }
      .chinese {
        font-size: 16px;
        font-weight: bold;
      }
      .dot {
        width: 12px;
        height: 12px;
        border: 1px solid #393f45;
        border-radius: 50%;
        margin-right: 5px;
        position: relative;
        &::after {
          position: absolute;
          content: ' ';
          width: 6px;
          height: 6px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #2c86a8;
          border-radius: 50%;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>