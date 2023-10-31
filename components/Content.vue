<template>
  <section v-html="$markdown.render(content)"/>
</template>

<script lang="ts" setup>
defineProps<{
  content: String;
}>();
</script>

<style lang="scss" scoped></style>