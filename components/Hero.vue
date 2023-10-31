<template>
  <section id="hero">
    <h1>Hero</h1>
    <img :src="heroImage" alt="Hero Image"/>
  </section>
</template>

<script setup>
import {onBeforeMount, ref} from 'vue'
import {useRoute} from 'vue-router'

const heroImage = ref('')

function getHeroImage(path) {
  switch (path) {
    case '/development':
      return '/hero/dev.jpg'
    case '/photography':
      return '/hero/photo.jpg'
    case '/it':
      return '/hero/it.jpg'
    default:
      return '/hero/default.jpg'
  }
}

onBeforeMount(() => {
  const currentRoute = useRoute()
  heroImage.value = getHeroImage(currentRoute.path)
})
</script>

<style lang="scss">
#hero {
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
