<template>
  <fhFilters />
  <section
    class="my-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 transition-all"
  >
    <fhCatalogItem
      v-for="item in services"
      :key="item.alias"
      :services_data="item"
    >
      {{ item.title }}</fhCatalogItem
    >
  </section>
</template>

<script>
import axios from "axios";
import fhFilters from "./fhFilters.vue";
import fhCatalogItem from "./fhCatalogItem.vue";
export default {
  name: "fhCatalog",
  data() {
    return {
      title: "Catalog",
      services: [],
    };
  },
  components: {
    fhFilters,
    fhCatalogItem,
  },
  mounted() {
    axios
      .get("https://vigolajnen.github.io/jsonapi/data.json")
      .then((response) => {
        this.response = response.data.services;
        console.log(response.data.services);
      });
  },
};
</script>
