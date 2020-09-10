<template>
  <div>
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
        v-show="checkStatus && showWarning"
      >Your password don't match</q-banner>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: { type: Boolean },
    showWarning: { type: Boolean },
  },
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
  computed: {
    checkStatus() {
      console.log("checking status");
      let toShow =
        this.newPassword.password == this.confirmNewPassword.password
          ? false
          : true;
      this.$emit("changeStatus", toShow);
      return toShow;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 20px;
}
</style>
