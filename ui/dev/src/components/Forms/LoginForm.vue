<template>
  <div class="login-form">
    <div class="qr-code-content" v-show="showCode">
      <div class="qr-code">
        <img :src="qr" alt="qr-code" />
        <q-btn flat color="primary" label="Cancel" @click="showCode=false" />
      </div>
    </div>
    <div class="register-link">
      <q-btn flat color="primary" label="Sign Up" @click="changeForm" icon-right="arrow_forward" />
    </div>
    <div class="left-content">
      <img :src="background" alt="Bg Img" id="bg" />
      <img :src="logo" alt="logo" id="logo" />
    </div>
    <div class="right-content">
      <div class="form">
        <q-card-section>
          <div class="text-h4 text-bold">{{loginTitle}}</div>
        </q-card-section>

        <q-card-section>
          <q-form class="q-gutter-md form-content" ref="loginForm">
            <div>
              <!-- Email -->
              <label class="label">Username</label>
              <q-input
                class="input-field"
                outlined
                clearable
                type="email"
                v-model="form.email"
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
                :type="form.isPassword ? 'password' : 'text'"
                outlined
                v-model="form.password"
                lazy-rules
                :rules="[passwordRule]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" class="icon" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="form.isPassword ? 'visibility_off' : 'visibility'"
                    class="icon"
                    @click="form.isPassword = !form.isPassword"
                  />
                </template>
              </q-input>
            </div>

            <div class="row">
              <q-checkbox v-model="form.rememberMe" color="primary" id="checkbox">Remember Me</q-checkbox>
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
import userService from "src/services/userService";
import { assetsMixin, loginMixin } from "src/utils/mixin";
import { loginTitle } from "src/utils/constant";

export default {
  mixins: [assetsMixin, loginMixin],

  props: {
    errorMessage: { type: String },
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        isPassword: true,
        rememberMe: false,
      },

      showCode: false,
      loginTitle,
    };
  },
  methods: {
    async submitForm() {
      let validation = await this.$refs.loginForm.validate();
      if (validation) {
        let user = await userService.userLogin(
          this.form.email,
          this.form.password
        );
        if (user.error) {
          console.log(user.error);
          this.$emit("setErrorMessage", user.error);
        } else {
          let now = new Date();
          let userItem = {
            value: JSON.stringify(user),
            expiry: now.getTime() + user.expires_in,
          };
          localStorage.setItem(
            "userExtAccessDetails",
            JSON.stringify(userItem)
          );

          this.$router.push("/profile");
        }
      }
    },
    changeForm() {
      this.$emit("changeActiveForm", "register");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/quasar.mixin.scss";

.icon {
  color: $primary;
}

.input-field {
  margin-top: 10px;
}

.qr-code-content {
  position: fixed;
  background: rgba(53, 32, 32, 0.425);
  height: 100%;
  width: 100%;
  z-index: 10;

  @include flexCenter(center, center);
  .qr-code {
    display: flex;
    flex-direction: column;
    background: white;
  }
}

.register-link {
  position: absolute;
  top: 10px;
  right: 10px;
}

.login-form {
  @include flexCenter(center, center);
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
      width: 70%;
      .row {
        @include flexCenter(space-between, center);
        flex-direction: row;
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
        @include flexCenter(space-between, center);
        flex-direction: column;
        padding: 20px 0px 0px 10px;
      }
    }
  }
}
</style>
