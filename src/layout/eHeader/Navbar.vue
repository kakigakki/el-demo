<template>
  <el-menu
    :default-active="activeIndex"
    class="menu"
    mode="horizontal"
    unique-opened
    active-text-color="#114cb8"
    @select="handleSelect"
  >
    <el-submenu index="1">
      <template #title>申請・問い合わせ</template>
      <el-menu-item index="1-1">申請一覧</el-menu-item>
      <el-menu-item index="1-2">問い合わせ一覧</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>承認者・申請者</template>
      <el-menu-item index="2-1">承認者</el-menu-item>
      <el-menu-item index="2-2">申請者</el-menu-item>
      <el-menu-item index="2-3">会社マスタ</el-menu-item>
      <el-menu-item index="2-4">会社グループマスタ</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template #title>設定変更</template>
      <el-menu-item index="3-1">個人設定</el-menu-item>
      <el-menu-item index="3-2">ファイル設定</el-menu-item>
      <el-menu-item index="3-3">メンテ設定</el-menu-item>
      <el-menu-item index="3-4">承認コメント補助設定</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template #title>マスタメンテ</template>
      <el-menu-item index="4-1">業種分類マスタ</el-menu-item>
      <el-menu-item index="4-2">申請分類マスタ</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "navbar",
  setup() {
    const activeIndex = ref("1-1");
    const handleSelect = (key: string, keyPath: string) => {
      console.log(key);
    };
    return {
      activeIndex,
      handleSelect,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
