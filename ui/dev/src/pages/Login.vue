<template>
  <div class="login-form">
    <q-card bordered class="form">
      <q-card-section class="bg-primary text-white">
        <div class="text-h5">Sign In to the portal</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <q-form class="q-gutter-md">
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
export default {
  data() {
    return {
      email: "",
      password: "",
      isPassword: true,
      emailRule,
      emptyRule,
      passwordRule,
    };
  },
  methods: {
    submitForm() {
      console.log("submit form");
      // Redirect to a mockup route
      // json server for testing purposes
      // return string and save in local storage
    },
    resetDetails() {
      console.log("ASDFASD");
      this.email = "";
      this.password = "";
      this.isPassword = true;
    },
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
