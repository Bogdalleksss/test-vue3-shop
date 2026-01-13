<template>
  <div class="products-grid">
    <BaseItem
      v-for="item in props.items"
      :key="item.id"
      :label="item.name"
      :img="item.image"
      :active="props.selectedIds.includes(item.id)"
      @click="emit('toggle', item)"
    />
  </div>
</template>

<script setup lang="ts">
import BaseItem from "@/components/UI/BaseItem";
import { Product } from "@/types";

interface Props {
  items: Product[];
  selectedIds: number[];
}

interface Emit {
  (event: "toggle", product: Product): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emit>();
</script>

<style scoped lang="scss">
.products-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  align-items: flex-start;
  gap: 10px;
  padding: 15px;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
}
</style>
