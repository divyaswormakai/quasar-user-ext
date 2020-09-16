<template>
  <div :class="'element'+ind">
    <div class="element">
      <q-input outlined v-model="name" label="Name" @blur="changeInput" class="input" />
      <q-input
        outlined
        v-model="contact"
        label="Contact nummber"
        @blur="changeInput"
        class="input"
      />
      <q-btn color="negative" flat label="Delete this" @click="deleteElem" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("Created");
  },
  props: {
    dataField: { type: Object },
    ind: { type: Number },
  },
  data() {
    return {
      name: "",
      contact: "",
    };
  },

  methods: {
    changeInput() {
      this.$emit("setValues", {
        data: { name: this.name, contact: this.contact },
      });
    },
    deleteElem() {
      console.log("Delet this");
      this.$emit("deleteElem", true);
      this.$el.remove(this.$el);
    },
  },
};
</script>

<style lang="scss" scoped>
.element {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
  .input {
    width: 40%;
  }
}
</style>
