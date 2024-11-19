<template>
  <div class="no-data">
    <img src="@/assets/platform-one/暂无数据.png" alt="no-data" />
    <p>暂无数据</p>
    <slot name="operation"></slot>
  </div>
</template>

<script setup="">

</script>

<style scoped lang="scss">
.no-data {
  // 填充
  width: 100%;
  height: 100%;
  // 居中
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>