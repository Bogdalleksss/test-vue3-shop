<template>
  <div class="selected-preview">
    <BaseItem
      v-if="props.item"
      :img="props.item.image"
      :label="props.item.name"
      mode="big"
    />
    <p
      v-else
      class="selected-preview__placeholder"
    >
      Not selected
    </p>
  </div>
</template>

<script lang="ts" setup>
import BaseItem from "@/components/UI/BaseItem";
import { Product } from "@/types";

interface Props {
  item: Product | null;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.selected-preview {
  width: 100%;
  height: 100%;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  padding: 10px;
}
</style>
