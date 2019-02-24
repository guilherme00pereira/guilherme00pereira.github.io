<template>
  <v-navigation-drawer
    :right="right"
    v-model="rightDrawer"
    temporary
    fixed
    mini-variant
    mini-variant-width="100"
    dark
    color="blue darken-2"
  >
    <v-list>
      <v-list-tile-action>
        <v-btn
          flat
          to="/blog"
        >Blog</v-btn>
        <v-btn
          flat
          to="/projects"
        >Projects</v-btn>
        <v-btn
          flat
          to="/"
        >Home</v-btn>
      </v-list-tile-action>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  data () {
    return {
      avatarSize: 72,
      tile: false,
      right: true,
      rightDrawer: false
    }
  },
  created () {
    this.$nuxt.$on('rightDrawer', data => {
      this.rightDrawer = data;
    })
  }
}
</script>
