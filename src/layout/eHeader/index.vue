<template>
  <el-affix>
    <!-- メニュー -->
    <el-row class="header-nav">
      <el-col :span="20"> <navbar></navbar> </el-col>
      <el-col :span="4" class="nav-right">
        <i class="el-icon-message icon-img"></i>
        <el-avatar
          class="icon-img"
          icon="el-icon-user-solid "
          size="medium"
        ></el-avatar>
      </el-col>
    </el-row>
    <!-- ページ名表示バー -->
    <pageHeader :content="'申請一覧'">
      <template #icon>
        <i class="el-icon-arrow-left"></i>
      </template>
    </pageHeader>
  </el-affix>
</template>

<script lang="ts">
import Navbar from "./Navbar.vue";
import PageHeader from "./PageHeader.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "EHeader",
  components: {
    Navbar,
    PageHeader,
  },
});
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.header-nav {
  border-bottom: solid 1px #e6e6e6;
  background-color: $headerBgColor;
  .nav-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: $headerBgColor;
    .icon-img {
      margin-right: 20px;

      &.el-icon-message {
        font-size: $icon-size;
      }
    }
  }
}
.header-tag {
  margin-left: 20px;
  line-height: 40px;
  background-color: $headerBgColor;
  border-bottom: solid 1px #e6e6e6;
}
</style>
