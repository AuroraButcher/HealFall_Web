<template>
  <div>
    <el-popover placement="bottom" :trigger="hover">
      <template #reference>
        <img src="@/assets/common/language.png" alt="language" />
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const switchLanguage = (lang) => {
  locale.value = lang;
};
</script>

<style scoped lang="scss">

</style>