<template>
  <main>
    <button aria-label="Color Mode"
      @click="onClick">
      <ColorScheme placeholder="...">
        <i class="fa-solid fa-moon" v-if="colorMode.value === 'dark'" />
        <i class="fa-solid fa-lightbulb" v-else />
      </ColorScheme>
    </button>
  </main>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

console.log(colorMode.preference)
</script>

<style lang="scss">
body {
  --body-brighter: #ffffff;
  --body: #f8f8f8;
  --body-darker: #f1f1f1;
  --h: #2fb5c7;
  --h2: #ff6e48;
  --text: #13161b;
  --red: #ff3e55;
  --cyan: #2FB5C7FF;
  --green: #4FC679FF;

  --cf-orange-red: linear-gradient(90deg, rgba(255, 110, 72, 1) 0%, rgb(255, 75, 62) 100%);
  --cf-green-blue: linear-gradient(90deg, rgb(79, 198, 121) 0%, rgb(78, 186, 170) 100%);
  --cf-blue: linear-gradient(90deg, rgba(47, 181, 199, 1) 0%, rgba(139, 232, 215, 1) 100%);

  --hover-orange: 0 0 5px #ff6e48, 0 0 15px #ff6e48, 0 0 25px #ff6e48, 0 0 35px #ff6e48, 2px 2px 2px rgba(206, 89, 22, 0);
  --hover-green: 0 0 5px #4FC679FF, 0 0 15px #4FC679FF, 0 0 25px #4FC679FF, 0 0 35px #4FC679FF, 2px 2px 2px rgba(79, 198, 121, 0);
  --hover-cyan: 0 0 5px #2FB5C7FF, 0 0 15px #2FB5C7FF, 0 0 25px #2FB5C7FF, 0 0 35px #2FB5C7FF, 2px 2px 2px rgba(47, 181, 199, 0);
}
.dark-mode body {
  --body-brighter: #1a1e25;
  --body: #13161b;
  --body-darker: #101318;
  --h: #2fb5c7;
  --h2: #ff6e48;
  --text: #f8f8f8;
  --red: #ff3e55;
  --cyan: #2FB5C7FF;
  --green: #4FC679FF;

  --cf-orange-red: linear-gradient(90deg, rgba(255, 110, 72, 1) 0%, rgb(255, 75, 62) 100%);
  --cf-green-blue: linear-gradient(90deg, rgb(79, 198, 121) 0%, rgb(78, 186, 170) 100%);
  --cf-blue: linear-gradient(90deg, rgba(47, 181, 199, 1) 0%, rgba(139, 232, 215, 1) 100%);

  --hover: 0 0 5px #ff6e48, 0 0 15px #ff6e48, 0 0 25px #ff6e48, 0 0 35px #ff6e48, 2px 2px 2px rgba(206, 89, 22, 0);
}
</style>