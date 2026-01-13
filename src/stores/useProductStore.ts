import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Product, SelectionType } from "@/types";
import { productApi } from "@/api";
import { MAX_SELECTED_PRODUCTS } from "@/contstants";

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  const selectedProducts = ref<Product[]>([]);
  const currentProduct = ref<Product | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Getters
  const getProductsByCategory = (category: string) => {
    return products.value.filter(product => product.category === category);
  };

  const selectedProductsIds = computed(() => selectedProducts.value.map(p => p.id));

  //Actions
  const fetchProducts = async () => {
    try {
      isLoading.value = true;
      error.value = null;

      products.value = await productApi.getAll();
    } catch (e) {
      error.value = (e as Error).message;
      console.log("Error useProductStore/fetchProducts:", e);
    } finally {
      isLoading.value = false;
    }
  };

  const toggleProduct = (product: Product, type: SelectionType) => {
    switch (type) {
      case "single": {
        currentProduct.value = currentProduct.value?.id === product.id ? null : product;
        break;
      }
      case "multiple": {
        const isAlreadySelected = selectedProducts.value.some(p => p.id === product.id);

        if (isAlreadySelected) {
          selectedProducts.value = selectedProducts.value.filter(p => p.id !== product.id);
        } else if (selectedProducts.value.length < MAX_SELECTED_PRODUCTS) {
          selectedProducts.value = [...selectedProducts.value, product];
        }

        break;
      }
    }
  };

  return {
    // State
    products,
    selectedProducts,
    currentProduct,
    isLoading,
    error,

    // Getters
    selectedProductsIds,
    getProductsByCategory,

    // Actions
    fetchProducts,
    toggleProduct,
  };
});

export type ProductStore = ReturnType<typeof useProductStore>;
