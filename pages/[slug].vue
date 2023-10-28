<template>
     <article v-if="post">
          <Intro :post="post" />
          <Content :content="post.Content" />
     </article>
</template>

<script lang="ts" setup>
     const { findOne } = useStrapi();
     const { slug } = useRoute().params;

     const { data: post } = await useAsyncData('post',() => 
     findOne('posts', { 
          filters: {
               Slug: { $eq: slug}
          } }), 
     {
          transform: (data: any) => {
               if (data.data[0]) {
                    return data.data[0].attributes;
               } else {
                    return null;
               }
          }, 
     });
</script>

<style lang="scss" scoped></style>