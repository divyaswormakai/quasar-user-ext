<template>
  <div>
    <error-banner :errorMsg="errorMessage" @clearError="errorMessage=$event"></error-banner>
    <transition enter-active-class="animate__animated animate__slideInRight">
      <login-form
        :errorMsg="errorMessage"
        @setErrorMessage="errorMessage=$event"
        @changeActiveForm="active=$event"
        v-if="active=='login'"
      ></login-form>
    </transition>
    <transition enter-active-class="animate__animated animate__slideInLeft">
      <registration-form
        :errorMsg="errorMessage"
        @setErrorMessage="errorMessage=$event"
        @changeActiveForm="active=$event"
        v-if="active=='register'"
      ></registration-form>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return { errorMessage: "", active: "login" };
  },
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue"),
    loginForm: () => import("components/Forms/LoginForm.vue"),
    registrationForm: () => import("components/Forms/RegistrationForm.vue"),
  },
};
</script>

