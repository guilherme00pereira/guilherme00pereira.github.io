<template>
  <v-footer
    height="auto"
    color="blue-grey darken-4"
    dark
  >
    <v-container 
      grid-list-md>
      <v-layout
        row
        wrap>
        <v-flex
          xs12>
          <v-layout
            row
            wrap>     
            <v-flex
              xs12
              sm5
              class="text-sm-right  text-xs-center">
              {{ $t('contact') }}: 
            </v-flex>
            <v-flex
              xs12
              sm7
              class="text-sm-left  text-xs-center">
              <v-btn 
                class="media-icons"
                icon
                href="https://wa.me/5531998220669"
                target="_blank">
                <v-icon>fab fa-whatsapp</v-icon>
              </v-btn>
              <v-btn 
                class="media-icons"
                icon
                href="mailto:guilherme00pereira@gmail.com"
                target="_blank">
                <v-icon>fas fa-envelope</v-icon>
              </v-btn>
              <v-btn 
                class="media-icons"
                icon
                href="https://twitter.com/guilherme00per1"
                target="_blank">
                <v-icon>fab fa-twitter</v-icon>
              </v-btn>
              <v-btn 
                class="media-icons"
                icon
                href="https://www.linkedin.com/in/guilhermepereirasalves/"
                target="_blank">
                <v-icon>fab fa-linkedin-in</v-icon>
              </v-btn>
              <v-btn 
                class="media-icons"
                icon
                href="https://github.com/guilherme00pereira"
                target="_blank">
                <v-icon>fab fa-github</v-icon>
              </v-btn>
              <v-btn 
                class="media-icons"
                icon>
                <v-icon>fab fa-stack-overflow</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          xs12
          sm6
          class="text-sm-left  text-xs-center copyright">
          &copy;2019 Guilherme Pereira
        </v-flex>
        <v-flex 
          class="text-sm-right text-xs-center"
          xs12
          sm6>
          <div class="white--text ml-3">
            Made with
            <a 
              class="white--text" 
              href="https://nuxtjs.org/" 
              target="_blank"
            >Nuxt</a>,
            <a 
              class="white--text" 
              href="https://vuetifyjs.com" 
              target="_blank"
            >Vuetify</a>
            and 
            <a 
              class="white--text" 
              href="https://buttercms.com/"
              target="_blank"
            ><img
              src="@/static/butter-w.png"
              alt="Butter CMS" 
              width="120">
            </a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
a img {
    margin-bottom:-10px;
}
.media-icons {
  margin-top: -10px;
  width:1.5em;
}
</style>