<template>
  <div>
    <error-banner :errorMsg="errorMessage" @clearError="errorMessage=$event"></error-banner>
    <transition enter-active-class="animate__animated animate__slideInRight">
      <login-form
        :errorMsg="errorMessage"
        @setErrorMessage="errorMessage=$event"
        @changeActiveForm="active=$event"
      ></login-form>
    </transition>

  </div>
</template>


<script>
import loginForm from "components/Forms/LoginForm.vue";
export default {
  data() {
    return { errorMessage: "" };
  },
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue"),
    loginForm,
  },
};
</script>

