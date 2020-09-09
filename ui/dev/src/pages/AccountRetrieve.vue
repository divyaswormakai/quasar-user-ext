<template>
  <div class="account-retrieve">
    <q-card class="card">
      <q-card-section class="bg-primary text-white title">
        <div class="text-h6">Retrieve your password</div>
      </q-card-section>

      <q-card-section vertical align="center" class="content">
        <retrieve-email v-if="mode=='email'"></retrieve-email>
        <retrieve-question v-else></retrieve-question>
        <a href="#" @click.prevent="changeMethods">Try another way?</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "email",
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
.account-retrieve {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 20px 50px;
  max-width: 100%;
  .card {
    display: flex;
    min-width: 50%;
    .title {
      display: flex;
      align-items: center;
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    width: 30vw;
  }
}
</style>
