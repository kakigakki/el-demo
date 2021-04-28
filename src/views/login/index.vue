<template>
  <el-container class="login-wrapper">
    <el-main>
      <div class="login-form">
        <img class="logo-pic" src="@/assets/shinsei_logo2.gif" alt="logo" />
        <el-form :model="ruleForm.form" :rules="rules" ref="loginForm">
          <el-form-item prop="email">
            <el-input
              type="email"
              v-model="ruleForm.form.email"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="ruleForm.form.password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>

          <el-button
            type="primary"
            :loading="loading"
            @click.prevent="handleLogin"
            class="login-button"
          >
            ログイン</el-button
          >
        </el-form>
      </div>
    </el-main>
    <el-footer>
      <p class="copyright">©2021 NIHON ULTMARC INC. ALL RIGHTS RESERVED.</p>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from "vue";
import * as checkMsg from "@/constants/checkMsg.constant";
import { ElFormItemContext } from "node_modules/element-plus/lib/el-form";
import { IloginModel } from "#/user.interface";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(false);
    const ruleForm = reactive({
      form: {
        email: "",
        password: "",
      } as IloginModel,
    });
    const loginForm = ref<ElFormItemContext>();
    const rules = {
      email: [
        {
          type: "email",
          required: true,
          message: checkMsg.ERR_MISS_MAIL,
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: checkMsg.ERR_MISS_PWD, trigger: "blur" },
      ],
    };
    watchEffect(() => {
      console.log(ruleForm.form.email, ruleForm.form.password);
    });

    const handleLogin = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      loginForm.value?.validate(async (valid) => {
        if (valid) {
          loading.value = true;
          try {
            await store.dispatch("login", ruleForm.form);
            console.log(ruleForm);
            router.push({ path: "/" });
            loading.value = false;
          } catch (error) {
            loading.value = false;
          }
        } else {
          return false;
        }
      });
    };
    return {
      loading,
      ruleForm,
      loginForm,
      rules,
      handleLogin,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.login-wrapper {
  box-sizing: border-box;
  position: relative;
  min-height: 500px;
  height: 100%;
  background: $loginBackground;

  .logo-pic {
    display: inline-flex;
    padding: 40px 0;
  }
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 0 35px;

    .login-button {
      width: 100%;
      margin: 20px 0;
    }
  }
  .copyright {
    font-size: 13px;
  }
}
</style>
