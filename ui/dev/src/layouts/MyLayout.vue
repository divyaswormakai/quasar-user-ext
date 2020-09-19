<template>
  <q-layout view="lHh Lpr lFf">
    <router-view />
  </q-layout>
</template>

<script>
import { version } from "ui"; // "ui" is aliased in quasar.conf.js

export default {
  name: "MyLayout",

  data() {
    return {
      version,
    };
  },
};
</script>
