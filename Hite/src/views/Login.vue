<template>
  <div class="ht-login">
    <div class="ht-login-area">
      <div class="ht-header">
        <div class="ht-header-text">Hite Web APP</div>
        <div class="ht-header-desc">
          Hite just for develop
        </div>
      </div>
      <div class="ht-form">
        <div class="ht-form-main">
          <a-form ref="userFormRef" :rules="rules"  :model="user">
            <a-form-item required name="name" :wrapper-col="{ span: 24 }">
                <a-input placeholder="账户:Username" v-model:value="user.name"  size="large">
                  <template #prefix>
                    <user-outlined type="user" style="color: #5fb2ff" />
                  </template>
                </a-input>
            </a-form-item>
            <a-form-item required name="password" :wrapper-col="{ span: 24 }">
                <a-input-password v-model:value="user.password" placeholder="input password"  size="large">
                  <template #prefix>
                    <lock-outlined style="color: #5fb2ff"></lock-outlined>
                  </template>
                </a-input-password>
            </a-form-item>

            <div class="ht-form-item">
              <div id="hd-remember-password">
                <a-checkbox v-model:checked="rememberPassword">Remember</a-checkbox>
              </div>
            </div>
            <div class="ht-form-item">
              <a-button type="primary" size="large" block :loading="loadingShow" @click="login">
                <template #icon>
                  <smile-outlined></smile-outlined>
                </template>
                登录
              </a-button>
            </div>
          </a-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue"
import {
  UserOutlined,
  LockOutlined, SmileOutlined
} from '@ant-design/icons-vue';
import { getRulesByProp } from "../utils/rule/index.js"
import Footer from "./Footer.vue";
import { message } from "ant-design-vue"
import { useRouter } from "vue-router"

export default {
  name: "Login",
  components: {
    UserOutlined,
    LockOutlined,
    SmileOutlined,
    Footer
  },
   setup() {

     const router = useRouter();

     const userFormRef = ref();
     const rules = ref({});
     const loadingShow = ref(false);
     const rememberPassword = ref(false);


     const user = reactive({
       name: "",
       password: ""
     });

     /**
      * @note getRules
      */
     const getRules = async () => {
       rules.value = await getRulesByProp(['login.name', 'password']);
     }

     getRules();

     const login = () => {
       loadingShow.value = true;
       // todo: login
       setTimeout(() => {
         loadingShow.value = false;
         message.success("登录成功，跳转页面");
         setTimeout(() => {
          router.push("/console")
         }, 1000)
       }, 1000)
     }

     return {
       user,
       rememberPassword,
       userFormRef,
       rules,
       loadingShow,
       login
    }
  }
}
</script>

<style scoped>
.ht-login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://store.antdv.com/pro/preview/img/background.5825f033.svg");
  flex-wrap: wrap;
  position: relative;
}
.ht-login-area {
  width: 500px;
  height: 60vh;
  transition: all 0.3s linear;
  text-align: center;
}
.ht-header-text {
  font-size: 32px;
  font-weight: bolder;
}
.ht-header-desc {
  padding: 10px;
  color: rgba(0,0,0,.45);
}
@media screen and (max-width:400px) {
  .ht-login-area {
    width: 95vw;
    transition: all 0.8s linear;
  }
  .ht-form-main {
    width: 100%;
  }
}
.ht-form {
  padding: 30px 20px;
  display: flex;
  justify-content: center;
}
.ht-form-main {
  width: 80%;
  text-align: left;
}
.ht-form-item {
  margin-bottom: 20px;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
#hd-remember-password {
  width: 50%;
  text-align: left;
}
</style>