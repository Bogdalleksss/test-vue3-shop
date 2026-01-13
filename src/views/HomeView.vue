<template>
  <div class="home">
    <h1>Hi, this is a test assignment.</h1>
    <p>You can view the implementation of the task on the products page.</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.home {
  &_buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    button {
      padding: 5px 25px;
      cursor: pointer;
    }
  }
}
</style>
