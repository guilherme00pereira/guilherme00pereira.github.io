<template>
  <v-flex>
    <v-card 
      color="orange lighten-3">
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm8>
          <v-card-title 
            primary
            class="title">{{ $t('skills') }}</v-card-title>
          <v-card-text class="subheading">
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="90">
              .NET
            </v-progress-circular>
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="90">
              <v-icon>fab fa-python</v-icon>
            </v-progress-circular>
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="80">
              <v-icon>fab fa-node-js</v-icon>
            </v-progress-circular>
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="85">
              <v-icon>fab fa-vuejs</v-icon>
            </v-progress-circular>
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="75">
              <v-icon>fab fa-php</v-icon>
            </v-progress-circular>
            <v-progress-circular
              :rotate="360"
              :size="75"
              :width="7"
              :value="95">
              <v-icon>fab fa-html5</v-icon>
            </v-progress-circular>
          </v-card-text>
        </v-flex>
        <v-flex
          align-self-center
          hidden-xs-only>
          <v-img
            class="image_op"
            max-height="160"
            contain
            src="/skills.png" />
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>


<script>
export default {

}
</script>

<style scoped>
.v-card {
  border-radius: 30px;
  padding: 0.4em;
  margin-bottom: 60px;
}
.v-progress-circular{
    margin: 0.4rem;
}
.image_op  {
  opacity: 0.3;
}
</style>
