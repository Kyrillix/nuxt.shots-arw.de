<template>
  <section id="app">
    <div class="fixed">
      <Fixed/>
    </div>
    <NuxtPage class="dynamic"/>
  </section>
</template>

<style lang="scss" scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  color: var(--text);
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left right";

  .fixed {
    grid-area: left;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .dynamic {
    grid-area: right;
  }
}
</style>
<script lang="ts" setup>
import Fixed from "~/components/Fixed.vue";
</script>