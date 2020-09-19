<template>
  <div id="q-app">
        <error-banner :errorMsg="errorMessage" @clearError="errorMessage=$event"></error-banner>

      <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  // take transition from meta object
  components: {
    errorBanner: () => import("components/shared/ErrorBanner.vue")
  }
};
</script>

<style lang="scss">
.label {
  color: rgb(70, 66, 66);
  font-weight: 500;
}
</style>
