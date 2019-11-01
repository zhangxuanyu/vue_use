<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import services from "@/services";
import store from "@/store";
import navBar from "@/components/navBar";

export default {
  name: "app",
  components: { navBar },
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style>
#inspire {
  background-color: #032442;
}
a:link {
  text-decoration: none;
  color: black;
}

a:active {
  text-decoration: blink;
}

a:hover {
  text-decoration: none;
  color: red;
}

a:visited {
  text-decoration: none;
  color: green;
}
</style>