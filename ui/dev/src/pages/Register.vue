<template>
  <div>
    <transition enter-active-class="animate__animated animate__slideInLeft">
      <registration-form
        :errorMsg="errorMessage"
        @setErrorMessage="errorMessage=$event"
        @changeActiveForm="active=$event"
      ></registration-form>
    </transition>
  </div>
</template>


<script>
import RegistrationForm from "components/Forms/RegistrationForm.vue"
export default {
  data() {
    return { errorMessage: ""};
  },
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue"),
    RegistrationForm,
  },
};
</script>

