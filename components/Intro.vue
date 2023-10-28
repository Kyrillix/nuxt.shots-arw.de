<template>
     <div class="intro">
          <h1>{{ post.Title }}</h1>
          <p class="intro-meta">
               <span>{{ post.Category }}</span>
               <span class="date">veröffentlicht am {{ published }}</span>
          </p>
          <p class="intro-text"> {{ post.Intro }}</p>
          <img :src="post.CoverURL" alt="cover">
     </div>
</template>

<script lang="ts" setup>
     const props = defineProps<{
          post: Post;
     }>();

     const published = new Date(props.post.publishedAt).toLocaleDateString(
          'de-DE'
     );
</script>