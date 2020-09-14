<template>
  <div class="login-form">
    <error-banner :errorMsg="errorMessage" @clearError="errorMessage=$event"></error-banner>
    <div class="qr-code-content" v-show="showCode">
      <div class="qr-code">
        <img :src="qr" alt="qr-code" />
        <q-btn flat color="primary" label="Cancel" @click="showCode=false" />
      </div>
    </div>
    <div class="left-content">
      <img :src="background" alt="Bg Img" id="bg" />
      <img :src="logo" alt="logo" id="logo" />
    </div>
    <div class="right-content">
      <div class="form">
        <q-card-section>
          <div class="text-h4 text-bold">Welcome to RasXp</div>
        </q-card-section>

        <q-card-section>
          <q-form class="q-gutter-md form-content" ref="loginForm">
            <div>
              <!-- Email -->
              <label class="label">Username</label>
              <q-input
                class="input-field"
                filled
                outlined
                clearable
                type="email"
                v-model="email"
                label="Email *"
                hint="For example: johndoe@gmail.com"
                lazy-rules
                :rules="[emptyRule,emailRule]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" class="icon" />
                </template>
              </q-input>
            </div>

            <div>
              <!-- Password -->
              <label class="label">Password</label>
              <q-input
                class="input-field"
                :type="isPassword ? 'password' : 'text'"
                filled
                outlined
                v-model="password"
                label="Password *"
                lazy-rules
                :rules="[passwordRule]"
              >
                <template v-slot:prepend>
                  <q-icon name="vpn_key" class="icon" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPassword ? 'visibility_off' : 'visibility'"
                    class="icon"
                    @click="isPassword = !isPassword"
                  />
                </template>
              </q-input>
            </div>

            <div class="row">
              <q-checkbox v-model="rememberMe" :color="primary" id="checkbox">Remember Me</q-checkbox>
              <a href="/account-retrieve">Forgot Password?</a>
            </div>

            <!-- Buttons -->
            <div class="btns">
              <q-btn
                label="Sign In"
                type="submit"
                color="primary"
                size="18px"
                @click.native.prevent="submitForm"
              />
            </div>
          </q-form>
        </q-card-section>
      </div>
      <div class="scan">
        <div>
          <q-btn flat round color="primary" icon="qr_code_scanner" id="btn" @click="showCode=true" />
          <p>SCAN</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emailRule, emptyRule, passwordRule } from "src/utils/rules";
import userService from "src/services/userService";
import logo from "assets/rasello.png";
import background from "assets/login-bg.png";
import qr from "assets/qrcode.png";

export default {
  data() {
    return {
      email: "",
      password: "",
      isPassword: true,
      rememberMe: false,

      emailRule,
      emptyRule,
      passwordRule,

      errorMessage: "",
      showCode: false,

      background,
      logo,
      qr,
    };
  },
  methods: {
    async submitForm() {
      let validation = await this.$refs.loginForm.validate();
      if (validation) {
        let user = await userService.userLogin(this.email, this.password);
        if (user.error) {
          console.log(user.error);
          this.errorMessage = user.error;
        } else {
          //save data to localStorage
          localStorage.setItem("user-ext-user-id", user.id);
          //redirecto to new page
          this.$router.push("/profile");
        }
      }
    },
  },
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue"),
  },
};
</script>

<style lang="scss" scoped>
.icon {
  color: $primary;
}

.qr-code-content {
  position: fixed;
  background: rgba(53, 32, 32, 0.425);
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .qr-code {
    display: flex;
    flex-direction: column;
    background: white;
  }
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  .left-content {
    width: 50%;
    height: 100%;
    #bg {
      height: 100%;
    }
    #logo {
      position: fixed;
      top: 10px;
      left: 10px;
      height: 30px;
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    width: 50%;
    .form {
      width: 80%;
      .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        #checkbox {
          color: gray;
        }
        a {
          text-decoration: none;
          color: $primary;
        }
      }
      .btns {
        display: flex;
        flex-direction: column;
        font-size: 12px;
      }
    }

    .scan {
      position: absolute;
      height: 100px;
      width: 100px;
      right: 0px;
      bottom: 0px;
      background: $primaryFaded;
      border-radius: 100% 0 0 0;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px 0px 0px 10px;
      }
    }
  }
}
</style>


