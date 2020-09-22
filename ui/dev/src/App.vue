<template>
  <div id="q-app">
    <transition :enter-active-class="transitionName" v-if="true">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },

  beforeUpdate() {
    // console.log(this.$route);
  },

  computed: {
    transitionName() {
      if (this.$route.meta.transitionName) {
        return this.$route.meta.transitionName;
      }
    },
  },
};
</script>

<style lang="scss">
.label {
  color: rgb(70, 66, 66);
  font-weight: 500;
}
</style>
