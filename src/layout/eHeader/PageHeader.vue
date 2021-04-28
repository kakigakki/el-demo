<template>
  <div class="page-header">
    <div class="page-header__left" @click="handleClick">
      <div class="page-header__icon">
        <slot name="icon">
          <i class="el-icon-arrow-left"></i>
        </slot>
      </div>
      <el-divider direction="vertical"></el-divider>
    </div>
    <div class="page-header__content">
      {{ content }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  emits: ["back"],
  setup(props, { emit }) {
    function handleClick() {
      emit("back");
    }
    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.page-header {
  line-height: 45px;
  background-color: $headerBgColor;
  display: flex;

  .page-header__left {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 20px;
    .page-header__icon,
    .el-icon-arrow-left {
      font-size: $icon-size-l;
    }
  }
  .page-header__content {
    font-size: 16px;
    color: $text-color;
  }
}
</style>
