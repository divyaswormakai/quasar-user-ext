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
        @input='$v.newPassword.password.$touch()'

        lazy-rules
        :rules="[val=>$v.newPassword.password.minLength || 'Should not be less than 8 chars']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" color="primary" />
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
        @input='$v.confirmNewPassword.password.$touch()'

        lazy-rules
        :rules="[val=>$v.confirmNewPassword.password.minLength || 'Should not be less than 8 chars',
                val=>$v.confirmNewPassword.password.sameAsPassword||'Doesnt match the previous']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" color="primary" />
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
import { passwordRule } from "../../utils/rules";
import {minLength,sameAs} from 'vuelidate/lib/validators';
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
      // rules
      passwordRule,
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
      this.$emit("getPassword", this.newPassword.password);
      console.log(this.newPassword.password)
      return toShow;
    },
  },
  validations:{
    newPassword:{
      password:{
        minLength: minLength(8)
      }
    },
    confirmNewPassword:{
      password:{
        minLength: minLength(8),
        sameAsPassword: sameAs(function(){return this.newPassword.password})
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 20px;
}
</style>
