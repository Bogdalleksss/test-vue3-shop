<template>
  <div
    class="base-item"
    :class="[{ 'base-item--active': props.active }, `base-item--${props.mode}`]"
  >
    <div
      :style="{
        backgroundImage: `url('${props.img}')`,
      }"
      class="img"
    />
    <h3>{{ props.label }}</h3>
  </div>
</template>

<script setup lang="ts">
import type { ProductMode } from "@/types";

interface Props {
  label: string;
  img: string;
  active?: boolean;
  mode?: ProductMode;
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  mode: "default",
});
</script>

<style scoped lang="scss">
.base-item {
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  cursor: pointer;
  min-width: 20px;
  min-height: 100px;
  transition: 0.5s;
  padding: 10px;

  .img {
    min-height: 150px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Ограничиваем 2 строками */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: #ababab;
    color: #000;
  }

  &--active {
    background: #7f93ff;
    color: #fff;

    &:hover {
      background: #a2b1ff;
      color: #fff;
    }
  }

  &--small {
    min-height: 40px;

    .img {
      min-height: 100%;
    }

    h3 {
      display: none;
    }
  }

  &--big {
    width: 100%;
    height: 100%;
    min-height: 100%;

    .img {
      height: 100%;
    }

    h3 {
      display: none;
    }
  }
}
</style>
