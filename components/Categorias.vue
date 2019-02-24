<template>
  <v-card>
    <v-card-title class="headline">Categorias</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-tile
          v-for="categoria in categorias"
          :key="categoria.term_id">
          <v-list-tile-content>
            <v-list-tile-title>{{ categoria.name }}: {{ categoria.term_id }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  props:  {
      categorias: {
          type: Array,
          default: () => []
      }
  }   
}
</script>

