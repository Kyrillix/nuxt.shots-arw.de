<template>
     <section v-html="$markdown.render(content)" />
</template>

<script setup lang="ts">
defineProps<{
     content: String;
}>();
</script>

<style scoped lang="scss"></style>