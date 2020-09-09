<template>
  <div class="set-password">
    <q-card class="card">
      <q-card-section class="bg-primary text-white title">
        <div class="text-h6">Set your new password</div>
      </q-card-section>

      <q-card-section class="content">
        <!-- Set new password -->
        <div>
          <q-input
            :type="newPassword.isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="newPassword.password"
            label="Password *"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="newPassword.isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="newPassword.isPassword = !newPassword.isPassword"
              />
            </template>
          </q-input>
        </div>

        <!-- Confirm password -->
        <div>
          <q-input
            :type="confirmNewPassword.isPassword ? 'password' : 'text'"
            filled
            outlined
            v-model="confirmNewPassword.password"
            label="Confirm Password *"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="confirmNewPassword.isPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="confirmNewPassword.isPassword = !confirmNewPassword.isPassword"
              />
            </template>
          </q-input>
        </div>

        <!-- Warning -->
        <div>
          <q-banner
            inline-actions
            class="text-white bg-red"
            v-show="newPassword.password!=confirmNewPassword.password"
          >Your password don't match</q-banner>
        </div>
        <!-- Buttons -->
        <div class="btns">
          <q-btn
            label="Save"
            type="submit"
            color="primary"
            size="18px"
            @click.native.prevent="submitForm"
          />
        </div>

        <a href="/account-retrieve">Try recovering via other ways?</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPassword: {
        password: "",
        isPassword: true,
      },
      confirmNewPassword: {
        password: "",
        isPassword: true,
      },
    };
  },
  methods: {
    savePassword() {
      console.log("saving new password");
    },
  },
};
</script>

<style lang="scss" scoped>
.set-password {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 20px 50px;
  max-width: 100%;
  .card {
    display: flex;
    min-width: 60%;
    .title {
      display: flex;
      align-items: center;
      width: 50%;
    }
    .content {
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 60vh;
      width: 100%;
      div {
        padding: 5px 0px;
        width: 80%;
      }
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
  }
}
</style>


