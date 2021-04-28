<template>
  <el-container class="app-wrapper">
    <!-- header -->
    <el-header height="" class="app-header">
      <eHeader></eHeader>
    </el-header>
    <!-- mainPage -->
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- Footer -->
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import EHeader from "./eHeader/index.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    EHeader,
  },
});
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.app-wrapper {
  height: 100%;

  .app-header {
    padding: 0;
    text-align: center;
    background-color: $headerBgColor;
  }

  .el-container {
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }

  .el-footer {
    padding: 0;
    text-align: center;
    line-height: 60px;
  }
}
</style>
