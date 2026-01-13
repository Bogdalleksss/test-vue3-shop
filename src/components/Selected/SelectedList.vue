<template>
  <div class="selected-list">
    <div class="selected-list__wrapper">
      <BaseItem
        v-for="item in props.items"
        :key="item.id"
        :img="item.image"
        :label="item.name"
        mode="small"
      />
    </div>
    <div class="selected-list__count">
      <h3>Selected {{ props.items.length }}/{{ MAX_SELECTED_PRODUCTS }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseItem from "@/components/UI/BaseItem";
import { Product } from "@/types";
import { MAX_SELECTED_PRODUCTS } from "@/contstants";

interface Props {
  items: Product[];
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.selected-list {
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  padding: 10px;

  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }

  h3 {
    margin: 10px 0 0;
  }
}
</style>
