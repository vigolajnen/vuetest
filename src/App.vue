<template>
  <fhNavBarVue />

  <main class="container px-4 mx-auto">
    <router-view />
  </main>
</template>

<script>
import fhNavBarVue from "./components/fhNavBar";
export default {
  name: "App",
  components: {
    fhNavBarVue,
  },
};
</script>
