<template xmlns="">
  <div class="all-page">
    <div class="card-container">
      <!--较大卡片-->
      <div class="bigger-card" :class="{active:!isLogin}">
        <!--登录-->
        <div class="bigger-card-login" v-if="isLogin">
          <div class="bigger-card-login__title">欢迎回来</div>
          <div class="bigger-card-login__form">
            <el-form label-width="auto">
              <el-form-item label="用户名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="bigger-card-login__operation">
            <button class="bigger-card-login__btn" @click="toggle">登录</button>
          </div>
        </div>
        <!--注册-->
        <div class="bigger-card-register" v-else>
          <div class="bigger-card-register__title">欢迎加入</div>
          <div class="bigger-card-register__form">
            <el-form label-width="auto">
              <el-form-item label="用户名">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label="再次确认">
                <el-input></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="bigger-card-register__operation">
            <button class="bigger-card-register__btn" @click="toggle">注册</button>
          </div>
        </div>
      </div>
      <!--较小卡片-->
      <div class="smaller-card" :class="{active: !isLogin}">
        <!--注册-->
        <div class="smaller-card-register" v-if="isLogin">
          <div class="smaller-card-register__title">你好</div>
          <div class="smaller-card-register__desc">欢迎加入我们，成为我们的一员</div>
          <div class="smaller-card-register__operation">
            <button class="smaller-card-register__btn" @click="toggle">注册</button>
          </div>
        </div>
        <!--登录-->
        <div class="smaller-card-login" v-else>
          <div class="smaller-card-login__title">你好</div>
          <div class="smaller-card-login__desc">欢迎回来，立即登录</div>
          <div class="smaller-card-login__operation">
            <button class="smaller-card-login__btn" @click="toggle">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const isLogin = ref(true);
// 登录&注册 切换
const toggle = () => {
  isLogin.value = !isLogin.value;
}
</script>

<style scoped lang="scss">
.all-page {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/Furina.jpg") no-repeat fixed;
  background-size: cover;

  .card-container {
    width: 50%;
    height: 50%;
    // 居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // flex布局
    display: flex;
    // 模糊
    backdrop-filter: blur(10px);
    // 阴影
    box-shadow: 0 0 3px #102f62, 0 0 6px #f0f0f0;

    .bigger-card {
      width: 60%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(0%);
      transition: all 0.5s;
      .bigger-card-login {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 14px;

        .bigger-card-login__title {
          font-size: 28px;
          font-weight: bold;
        }

        .bigger-card-login__form {

        }

        .bigger-card-login__operation {
          .bigger-card-login__btn {
            width: 100px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }

      .bigger-card-register {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(230, 230, 230, 0.5);
        gap: 14px;

        .bigger-card-register__title {
          font-size: 28px;
          font-weight: bold;
        }

        .bigger-card-register__form {

        }

        .bigger-card-register__operation {
          .bigger-card-register__btn {
            width: 100px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }
    }

    .bigger-card.active {
      left: 40%;
      transition: all 0.5s;
    }

    .smaller-card {
      width: 40%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 60%;
      transform: translateX(0%);
      transition: all 0.5s;
      .smaller-card-register {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(230, 230, 230, 0.5);
        gap: 14px;

        .smaller-card-register__title {
          font-size: 28px;
          font-weight: bold;
        }

        .smaller-card-register__desc {
          width: 70%;
          font-size: 16px;
        }

        .smaller-card-register__operation {
          .smaller-card-register__btn {
            width: 100px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }

      .smaller-card-login {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 14px;

        .smaller-card-login__title {
          font-size: 28px;
          font-weight: bold;
        }

        .smaller-card-login__desc {
          width: 70%;
          font-size: 16px;
        }

        .smaller-card-login__operation {
          .smaller-card-login__btn {
            width: 100px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }
    }

    .smaller-card.active {
      left: 0;
      transform: translateX(0%);
      transition: all 0.5s;
    }
  }
}
</style>