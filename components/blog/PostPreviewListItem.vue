<template>
  <v-layout
    row>
    <v-flex
      class="post_preview"
      xs12>
      <v-card
        :to="'/blog/' + slug"
        nuxt>
        <v-card-title class="display-1">{{ title }}</v-card-title>
        <v-card-text class="subheading">{{ excerpt }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.post_preview{
  margin:1.5em 0;
}
.v-card__title, .v-card__text {
  text-align: center;
}
</style>

