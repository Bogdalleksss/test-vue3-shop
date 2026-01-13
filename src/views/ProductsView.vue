<template>
  <div class="products">
    <div class="products__header">
      <SelectedList
        :items="selectedItems"
        @toggle="item => selectItem(item, SelectionTypeEnum.multiple)"
      />
      <h1>Product page</h1>
      <SelectedPreview
        :item="selectedItem"
        @toggle="item => selectItem(item, SelectionTypeEnum.single)"
      />
    </div>

    <div class="products__main">
      <ProductsGrid
        v-for="section in sections"
        :key="section.type"
        :items="section.items"
        :selected-ids="section.selectedIds"
        @toggle="item => selectItem(item, section.type)"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ProductsGrid from "@/components/Products/ProductsGrid";
import SelectedList from "@/components/Selected/SelectedList";
import SelectedPreview from "@/components/Selected/SelectedPreview";
import { onMounted, computed } from "vue";
import { useProductStore, ProductStore } from "@/stores";
import { Product, SelectionType, SelectionTypeEnum } from "@/types";

const leftCategories = ["electronics", "men's clothing"];
const rightCategories = ["jewelery", "women's clothing"];

const productStore: ProductStore = useProductStore();

const selectedItems = computed(() => productStore.selectedProducts);
const selectedItem = computed(() => productStore.currentProduct);

const singleSelectedIds = computed(() => {
  const id = selectedItem.value?.id;
  return !id ? [] : [id];
});

const sections = computed(() => [
  {
    type: SelectionTypeEnum.multiple as SelectionType,
    items: leftCategories.flatMap(i => productStore.getProductsByCategory(i)),
    selectedIds: productStore.selectedProductsIds,
  },
  {
    type: SelectionTypeEnum.single as SelectionType,
    items: rightCategories.flatMap(i => productStore.getProductsByCategory(i)),
    selectedIds: singleSelectedIds.value,
  },
]);

const selectItem = (item: Product, type: SelectionType) => productStore.toggleProduct(item, type);

onMounted(() => {
  if (!productStore.hasProducts) {
    productStore.fetchProducts();
  }
});
</script>

<style lang="scss">
.products {
  height: 100%;
  display: grid;
  grid-template-rows: 25% 1fr;
  gap: 15px;

  &__header {
    display: grid;
    grid-template-columns: 25% 1fr 25%;
    justify-content: space-between;
    align-items: center;
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}
</style>
