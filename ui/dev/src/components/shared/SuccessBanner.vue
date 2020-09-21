<template>
  <div class="successBanner">
    <transition
      enter-active-class="animate__animated animate__slideInDown animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      mode="in-out"
    >
      <q-banner inline-actions class="text-white bg-red" v-show="successMsg.length>0">
        {{successMsg}}
        <template v-slot:action>
          <q-btn flat color="white" icon="clear" @click="deleteMsg" />
        </template>
      </q-banner>
    </transition>
  </div>
</template>

<script>
export default {
  props: { successMsg: { type: String } },

  methods: {
    deleteMsg() {
      this.$emit("clearSuccessMsg", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.successBanner {
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  top: 20px;
  z-index: 10;
}
</style>
