<template>
  <user-profile></user-profile>
</template>

<script>
export default {
  components: {
    userProfile: () => import("../components/Profile/Profile.vue"),
  },
};
</script>
