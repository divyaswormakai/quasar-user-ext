<template>
  <div class="login-form">
    <error-banner :errorMsg="errorMessage" @clearError="errorMessage=$event"></error-banner>
    <q-card bordered class="form">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Sign In to the portal</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form class="q-gutter-md" ref="loginForm">
          <!-- Email -->
          <q-input
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
              <q-icon name="email" />
            </template>
          </q-input>

          <!-- Password -->
          <q-input
            :type="isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="password"
            label="Password *"
            lazy-rules
            :rules="[passwordRule]"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPassword = !isPassword"
              />
            </template>
          </q-input>

          <a href="/account-retrieve">Forgot Password?</a>
          <!-- Buttons -->
          <div class="btns">
            <q-btn
              rounded
              label="Sign In"
              type="submit"
              color="primary"
              icon-right="login"
              size="18px"
              @click.native.prevent="submitForm"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              size="16px"
              icon-right="clear_all"
              @click="resetDetails"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { emailRule, emptyRule, passwordRule } from "./../utils/rules";
import userService from "../services/userService";
export default {
  data() {
    return {
      email: "",
      password: "",
      isPassword: true,
      emailRule,
      emptyRule,
      passwordRule,

      errorMessage: "",
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
    resetDetails() {
      console.log("ASDFASD");
      this.email = "";
      this.password = "";
      this.isPassword = true;
    },
  },
  components: {
    errorBanner: () => import("../components/shared/ErrorBanner.vue"),
  },
};
</script>

<style lang="scss">
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin: auto;
  .form {
    min-width: 30%;
  }
}
.btns {
  display: flex;
  justify-content: center;
  q-btn {
    min-width: 300px;
  }
}
</style>
