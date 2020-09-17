<template>
  <div :class="'element'+ind">
    <div class="element">
      <q-select
        filled
        outlined
        clearable
        v-model="selectedValue"
        color="primary"
        hint="Select any option"
        class="input"
        @blur="changeInput"
        lazy-rules
        :rules="[emptyRule]"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
import { emptyRule } from "src/utils/rules";
export default {
  created() {
    console.log("Created");
  },
  props: {
    options: { type: Array },
    dataField: { type: Object },
    ind: { type: Number },
  },
  data() {
    return {
      selectedValue: "",
      emptyRule,
    };
  },
  methods: {
    changeInput() {
      this.$emit("setValues", {
        data: { selected: this.selectedValue },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.element {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
  .input {
    width: 40%;
  }
}
</style>
