import { createRouter, createWebHistory } from "vue-router";
import fhCatalog from "../components/fhCatalog.vue";
import fhProduct from '../components/fhProduct.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: fhCatalog,
    },
    {
      path: "/product",
      component: fhProduct,
    },
  ],
});

export default router;
