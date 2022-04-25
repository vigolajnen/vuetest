<template>
  <div
    class="shadow-lg hover:shadow-xl rounded-md overflow-hidden transition-all"
  >
    <div class="bg-blue-100">
      <router-link :to="'/product'" :key="value" @click="sendToProductPage">
        <img
          :src="service_data.image" 
          :alt="service_data.title"
        />
      </router-link>
    </div>

    <div class="p-4">
      <h3 class="text-lg font-bold mb-4">{{service_data.title}}</h3>
      <p>
        {{ service_data.description.substr(0, 100) + "..." }}
      </p>

      <ul class="flex flex-wrap m-0 my-4 transition-all p-0">
        <li class="px-2 m-0 mr-2 mb-2 w-auto rounded-xl bg-brandLight text-center align-center">#100 занятий</li>
        <li class="px-2 m-0 mr-2 mb-2 w-auto rounded-xl bg-brandLight text-center align-center">#100 занятий</li>
        <li class="px-2 m-0 mr-2 mb-2 w-auto rounded-xl bg-brandLight text-center align-center">#100 занятий</li>
        <li class="px-2 m-0 mb-2 w-auto rounded-xl bg-brandLight text-center align-center">#1 год</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "fhCatalogItem",
  props: {
    service_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    sendToProductPage() {
      this.$emit('sendTitleProduct', this.service_data.title)
    }
  },
};
</script>
