<template>
  <div class="set-password">
    <q-card class="card">
      <q-card-section class="bg-primary text-white title">
        <div>
          <!-- Logo -->

          <img :src="logoUrl" alt="logo" />
        </div>
        <div class="text-h6">Set your new password</div>
      </q-card-section>

      <q-card-section class="content">
        <confirm-password-comp
          :status="isOk"
          :showWarning="showWarning"
          @changeStatus="isOk = $event"
        ></confirm-password-comp>
        <!-- Buttons -->
        <div class="btns">
          <q-btn
            label="Save"
            type="submit"
            color="primary"
            size="18px"
            :disable="isOk"
            @click.native.prevent="submitForm"
          />
        </div>

        <a href="/account-retrieve">Try recovering via other ways?</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import logo from "../../assets/rasello.png";

export default {
  data() {
    return {
      isOk: false,
      showWarning: true,
      logoUrl: logo,
    };
  },
  methods: {
    savePassword() {
      console.log("saving new password");
    },
  },
  components: {
    confirmPasswordComp: () => import("../shared/ConfirmPasswordComponent.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "../../css/quasar.mixin.scss";

.set-password {
  @include flexCenter(center, center);
  height: 90vh;
  padding: 20px 50px;
  max-width: 100%;
  .card {
    display: flex;
    min-width: 60%;
    .title {
      @include flexCenter(center, center);
      flex-direction: column;
      width: 60%;
      img {
        height: 50px;
        width: 50px;
      }
    }
    .content {
      padding: 0px;
      @include flexCenter(center, center);
      flex-direction: column;
      height: 60vh;
      width: 100%;
      div {
        padding: 5px 0px;
        width: 80%;
      }
    }
  }
  .btns {
    display: flex;
    flex-direction: column;
  }
}
</style>


