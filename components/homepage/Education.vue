<template>
  <v-flex>
    <v-card 
      color="teal lighten-3">
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm8>
          <v-card-title 
            primary
            class="title">{{ $t('education') }}</v-card-title>
          <v-card-text 
            class="subheading"
            v-html="education" />
        </v-flex>
        <v-flex
          align-self-center
          hidden-xs-only>
          <v-img
            class="image_op"
            max-height="200"
            contain
            src="/education.png" />
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>


<script>
export default {
    props: {
        education: {
          type: '',
          default: ''
      }
    }
}
</script>

<style scoped>
.v-card {
  border-radius: 30px;
  padding: 0.4em;
  margin-bottom: 60px;
}
.image_op  {
  opacity: 0.3;
}
</style>
