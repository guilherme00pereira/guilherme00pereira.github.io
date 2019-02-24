<template>
  <v-toolbar
    :clipped-right="clipped"
    :color="toolbar_color"
    fixed
    app
    flat
    dense
  >
    <v-toolbar-items class="hidden-xs-only font-wight-bold">
      <v-btn
        :to="localePath({name:'index'})"
        flat
        nuxt
        exact
      >
        <v-icon
          class="icon_spacer" 
          small>fas fa-home</v-icon> 
        {{ $t('home') }}
      </v-btn>
      <v-btn
        :to="localePath({name:'blog'})"
        flat
        nuxt
      >
        <v-icon
          class="icon_spacer" 
          small>fas fa-blog</v-icon>
        Blog
      </v-btn>
      <v-btn
        :to="localePath({name:'projects'})"
        flat
        nuxt
        exact
      >
        <v-icon
          class="icon_spacer" 
          small>fas fa-project-diagram</v-icon>
        {{ $t('projects') }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <nuxt-link 
      :to="localePath({name: 'index'}, 'en')"
      class="language-links">EN</nuxt-link>
    <nuxt-link 
      :to="localePath({name: 'index'}, 'br')"
      class="language-links">PT</nuxt-link>
    <v-btn 
      class="hidden-sm-and-up"
      icon
      @click="openRightPanel">
      <v-icon>fas fa-bars</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        fixed: false,
        title: 'Guilherme Pereira',
        avatarSize: 36,
        tile: false,
        toolbar_color: 'blue-grey lighten-4'
      }
    },
    methods: {
      openRightPanel(){
        this.$nuxt.$emit('rightDrawer', true);
      }
    }
  }
</script>

<style scoped>
.language-links{
  padding: 0 10px;
  text-decoration: none;
  color: rgba(0,0,0,0.87);
}
.icon_spacer {
  margin-right: 10px;
}
</style>
