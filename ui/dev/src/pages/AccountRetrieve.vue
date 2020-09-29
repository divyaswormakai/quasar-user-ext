<template>
  <div class="account-retrieve">
    <q-card class="card">
      <q-card-section class="bg-primary text-white title">
        <div>
          <!-- Logo -->

          <img :src="logoUrl" alt="logo" />
        </div>
        <div class="text-h6">Retrieve your password</div>
      </q-card-section>

      <q-card-section vertical align="center" class="content">
        <retrieve-email v-if="mode == 'email'"></retrieve-email>
        <retrieve-question v-else></retrieve-question>
        <a href="#" @click.prevent="changeMethods">Try another way?</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import logo from "../assets/rasello.png";

export default {
  data() {
    return {
      mode: "email",
      logoUrl: logo,
    };
  },
  methods: {
    changeMethods() {
      this.mode = this.mode == "email" ? "security" : "email";
    },
  },
  components: {
    RetrieveEmail: () => import("../components/AccountRetrieve/Email.vue"),
    RetrieveQuestion: () =>
      import("../components/AccountRetrieve/Question.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "../css/quasar.mixin.scss";

.account-retrieve {
  @include flexCenter(center, center);

  height: 90vh;
  padding: 20px 50px;
  max-width: 100%;
  .card {
    display: flex;
    min-width: 50%;
    .title {
      @include flexCenter(center, center);
      flex-direction: column;
      img {
        height: 50px;
        width: 50px;
      }
    }
  }
  .content {
    @include flexCenter(center, center);
    flex-direction: column;
    height: 60vh;
    width: 30vw;
  }
}
</style>
