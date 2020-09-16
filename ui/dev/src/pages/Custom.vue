<template>
  <div class="content">
    <element-comp
      v-for="(dataField,indx) in dataFields"
      :key="'comp'+indx"
      :ind="indx"
      @setValues="placeValue($event,indx)"
      @deleteElem="deleteElem(indx)"
    ></element-comp>

    <q-btn label="add" color="primary" @click="addNewComp" />

    <q-btn label="Submit" color="secondary" @click="showResult" />
    <p v-for="(value,ind) in finalResults" :key="'final'+ind">{{value}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFields: [{}],
      finalResults: [],
    };
  },
  components: {
    elementComp: () => import("components/Custom/Element.vue"),
  },
  methods: {
    addNewComp() {
      this.dataFields.push({});
    },

    showResult() {
      let nonEmptyValues = this.dataFields.filter((dataField) => {
        if (dataField.data !== undefined) {
          return dataField.data;
        }
      });
      this.finalResults = nonEmptyValues;
      console.log(nonEmptyValues);
    },

    placeValue(data, id) {
      this.dataFields[id] = { ...data };
    },

    deleteElem(id) {
      console.log(id);
      this.dataFields.splice(id, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0px 5%;
}
</style>
