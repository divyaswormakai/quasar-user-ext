<template>
  <div class="main">
    <q-form>
      <div class="text-h6">We will send you the recovery link</div>
      <!-- Email -->
      <q-input filled outlined clearable type="email" v-model="email" label="Enter your email">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <div class="btns">
        <q-btn
          label="Send"
          type="submit"
          color="primary"
          size="18px"
          @click.native.prevent="submitForm"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Send Form");
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  padding: 0px 20px;
  display: flex;
  justify-content: center;
}
.btns {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
}
</style>
