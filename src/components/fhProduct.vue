<template>
  <div class="relative my-10">
    <div
      class="transition-all md:w-1/2 md:translate-x-6/12 ml-auto mr-0 sm:pl-5 md:pl-20"
    >
      <h1
        class="product-title text-2xl font-bold my-0 mb-6 text-center md:text-left"
        @sendTitleProduct="sendToProduct"
      >
        Мультикарта Fitness House
      </h1>
      <div
        class="mb-6 md:mb-0 shadow-lg rounded-md overflow-hidden md:absolute md:top-0 md:left-0 md:w-1/2"
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/01/09/11/22/fitness-594143_960_720.jpg"
          alt="гантели в ряд"
          class="w-full object-cover"
          width="300"
          height="200"
        />
      </div>
      <p class="mb-6 md:pb-6 lg:w-3/4">
        Абонемент на посещение любого спортивного клуба сети Fitness House в
        течении 1 года но не более 100 занятий в свбодное время.
      </p>
      <ul class="mb-6 md:pb-6">
        <li>Количество занятий -<b>100 занятий</b></li>
        <li>Срок действия -<b>1 год</b></li>
      </ul>
      <div class="grid grid-cols-2 gap-2 align-center lg:w-3/4">
        <span class="text-3xl font-bold leading-normal text-brand">5000 руб.</span>
        <button
          class="h-10 w-auto px-5 m-2 xl:w-1/2 mr-0 ml-auto text-white transition-colors duration-150 bg-brand rounded-lg focus:shadow-outline hover:bg-brandDark"
          type="button"
        >
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fhProduct",
  service_data: {
    type: Object,
    default() {
      return {};
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    sendToProduct(data) {
      return data;
    },
  },
};
</script>
