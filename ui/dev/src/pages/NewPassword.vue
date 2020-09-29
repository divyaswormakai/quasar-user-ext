<template>
  <set-password></set-password>
</template>
<script>
export default {
  components: {
    setPassword: () =>
      import("../components/AccountRetrieve/SetNewPassword.vue"),
  },
};
</script>
<style lang="scss" scoped>
</style>
