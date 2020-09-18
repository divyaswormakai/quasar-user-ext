<template>
  <div class="content">
    <div v-for="(dataField,indx) in dataFields" :key="'comp'+indx">
      <element-comp
        v-if="type[indx]==1"
        :ind="indx"
        @setValues="placeValue($event,indx)"
        @deleteElem="deleteElem($event)"
      ></element-comp>
      <second-comp
        v-if="type[indx]==2"
        :ind="indx"
        @setValues="placeValue($event,indx)"
        @deleteElem="deleteElem($event)"
      ></second-comp>
      <drop-comp
        v-if="type[indx]==3"
        :ind="indx"
        :options="options"
        @setValues="placeValue($event,indx)"
        @deleteElem="deleteElem($event)"
      ></drop-comp>
    </div>

    <q-btn label="add name contact" color="primary" @click="addNewComp(1)" />
    <q-btn label="add number" color="primary" @click="addNewComp(2)" />
    <q-btn label="add dropdown" color="primary" @click="addNewComp(3)" />

    <q-btn label="Submit" color="secondary" @click="showResult" />
    <q-btn color="negative" flat label="Delete last" @click="deleteElem" />

    <p v-for="(value,ind) in finalResults" :key="'final'+ind">{{value}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["A", "B", "C"],
      dataFields: [{}],
      finalResults: [],
      type: [1],
    };
  },
  components: {
    elementComp: () => import("components/Custom/Element.vue"),
    secondComp: () => import("components/Custom/NumberElement.vue"),
    dropComp: () => import("components/Custom/DropdownElem.vue"),
  },
  methods: {
    addNewComp(type) {
      this.type.push(type);
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
      console.log(data);
      this.dataFields[id] = { ...data };
    },

    deleteElem(id) {
      console.log(id);

      let data = this.dataFields.splice(this.dataFields.length - 1, 1);
      console.log(data);
      console.log(this.dataFields);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0px 5%;
}
</style>
