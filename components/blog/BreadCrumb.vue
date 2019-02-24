<template>
  <v-card>
    <v-card-text>
      <v-breadcrumbs 
        :items="crumbs"
        divider=">">
        <template 
          slot="item"
          slot-scope="props">
          <a 
            v-if="props.item.href" 
            :href="props.item.href">
            {{ props.item.name }}
          </a>
          <span v-else>{{ props.item.name }}</span>
        </template>
      </v-breadcrumbs>
    </v-card-text>
  </v-card>  
</template>

<script>
const breadcrumbs = {}
export default {
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.v-card__text, .v-breadcrumbs {
  padding: 5px !important;
}
</style>
