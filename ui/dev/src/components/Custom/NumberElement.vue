<template>
  <div :class="'element' + ind">
    <div class="element">
      {{ ind + 1 }}
      <q-input
        filled
        outlined
        clearable
        type="number"
        v-model="numberData"
        label="Number Field"
        color="primary"
        hint="Enter number only"
        class="input"
        @blur="changeInput"
        lazy-rules
        :rules="[emptyRule]"
      />
    </div>
  </div>
</template>

<script>
import { emptyRule } from "../../utils/rules";
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
      numberData: 0,
      emptyRule,
    };
  },
  methods: {
    changeInput() {
      this.$emit("setValues", {
        data: { numberData: this.numberData },
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
    width: 90%;
  }
}
</style>
