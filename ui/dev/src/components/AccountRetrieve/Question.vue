<template>
  <div class="main">
    <q-form>
      <div class="text-h6">Answer your security question</div>
      <!-- Question -->
      <div class="question-answer">
        <q-select filled v-model="question" :options="options" label="Security Question" />
      </div>
      <!-- Answer -->
      <div class="question-answer">
        <q-input filled outlined clearable v-model="answer" label="Your answer"></q-input>
      </div>
      <div class="btns">
        <q-btn
          label="Confirm"
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
      options: ["Question 1", "Question 2", "Question 3"],
      answer: "",
      question: "",
    };
  },
  methods: {
    submitForm() {
      console.log(question, answer);
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
.question-answer {
  width: 100%;
}
</style>
