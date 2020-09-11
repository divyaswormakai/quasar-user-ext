<template>
  <div class="errorBanner">
    <transition
      enter-active-class="animate__animated animate__slideInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="in-out"
    >
      <q-banner inline-actions class="text-white bg-red" v-show="errorMsg.length>0">
        {{errorMsg}}
        <template v-slot:action>
          <q-btn flat color="white" icon="clear" @click="deleteMsg" />
        </template>
      </q-banner>
    </transition>
  </div>
</template>

<script>
export default {
  props: { errorMsg: { type: String } },

  methods: {
    deleteMsg() {
      this.$emit("clearError", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.errorBanner {
  display: flex;
  position: fixed;
  top: 50px;
  z-index: 10;
}
</style>
