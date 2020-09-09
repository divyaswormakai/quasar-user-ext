<template>
  <div class="login-form">
    <q-card bordered>
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
            :rules="[ val => val && val.length > 0 || 'Email can\'t be empty ']"
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
            :rules="[
          val => val !== null && val !== '' || 'Please type your password',
        ]"
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
export default {
  data() {
    return {
      email: "",
      password: "",
      isPassword: true,
    };
  },
  methods: {
    submitForm() {
      console.log("submit form");
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
  background: red;
  width: 60%;
}
.btns {
  display: flex;
  justify-content: center;
  q-btn {
    min-width: 300px;
  }
}
</style>
