<template>
  <v-layout
    class="top_banner"
    justify-center
    row
    wrap>
    <v-flex
      xs12
      sm6
      offset-sm-3>
      <v-card
        :color="toolbar_color"
        flat>
        <v-layout 
          row
          wrap>
          <v-flex xs5>
            <v-img 
              src="/testoutput.d6eb574d.png"
              max-height="260" />
          </v-flex>
          <v-flex xs7>
            <v-card-title class="display-1">{{ title }}</v-card-title>
            <v-card-text class="subheading">{{ short_description }}</v-card-text>
            <v-card-actions>
              <v-btn
                :to="localePath({name:'blog'})"
                primary
                nuxt
              >Blog</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props:  {
      title: {
          type: '',
          default: ''
      },
      short_description: {
          type: '',
          default: ''
      },
  },
  data () {
    return {
      toolbar_color: 'blue-grey lighten-4'
    }
  }
}
</script>

<style scoped>
.top_banner {
  background-color: #CFD8DC; 
  padding-top:80px;
  height: 360px;
}
</style>

