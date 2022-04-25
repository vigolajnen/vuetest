<template>
  <fhNavBarVue />

  <main class="container px-4 mx-auto">
    <router-view />
  </main>
<!-- 
  <main class="container px-4 mx-auto">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main> -->
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

<style>
.fade-enter-form,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
