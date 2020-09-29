<template>
  <div>
    <error-banner
      :errorMsg="errorMessage"
      @clearError="errorMessage = $event"
    ></error-banner>
    <success-banner
      :successMsg="successMessage"
      @clearSuccessMsg="successMessage = $event"
    ></success-banner>
    <user-profile
      :errorMsg="errorMessage"
      @setErrorMessage="errorMessage = $event"
      :successMsg="successMessage"
      @setSuccessMessage="successMessage = $event"
    ></user-profile>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: "",
      successMessage: "",
    };
  },
  components: {
    userProfile: () => import("../components/Profile/Profile.vue"),
    errorBanner: () => import("../components/shared/ErrorBanner.vue"),
    successBanner: () => import("../components/shared/SuccessBanner.vue"),
  },
};
</script>
