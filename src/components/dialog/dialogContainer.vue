<!-- 弹窗盒子， 不包含弹窗内容 -->
<template>
  <div class="dialog-container">
    <div class="img-border-container" :style="{height}">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dialog-container',
    props: {
      height: {
        type: String,
        default: '1570px'
      }
    },
  }
</script>

<style scoped lang="scss">
  .dialog-container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    .img-border-container {
      padding-left: 180px;
      padding-right: 303px;
      width: 3066px;
      background: url("@/assets/images/border-img.png") no-repeat 100% 100%;
    }
  }
</style>
