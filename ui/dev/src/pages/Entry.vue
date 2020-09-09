<template>
  <div class="user-entry">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h3">Welcome to User Portal.</div>
      </q-card-section>

      <q-tabs class="text-teal">
        <q-tab label="Login" @click="showLogin=true" />
        <q-tab label="Register" @click="showLogin=false" />
      </q-tabs>
    </q-card>

    <div class="forms">
      <transition
        enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__zoomOutDown"
        mode="out-in"
      >
        <login-form v-if="showLogin"></login-form>
        <registration-form v-else></registration-form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
    };
  },
  components: {
    loginForm: () => import("../components/Forms/Login.vue"),
    registrationForm: () => import("../components/Forms/Registration.vue"),
  },
};
</script>

<style lang="scss">
@mixin flexCenter($direction) {
  display: flex;
  align-items: center;
  flex-direction: $direction;
}

h1 {
  font-size: 36px;
}
.user-entry {
  @include flexCenter(column);
  width: 100%;
  height: 90vh;
  .forms {
    @include flexCenter(column);
    padding-top: 20px;
    width: 100%;
  }
}
</style>
