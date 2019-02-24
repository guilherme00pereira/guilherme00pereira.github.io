<template>
  <v-layout
    column
    wrap>
    <v-flex d-flex>
      <v-card>
        <v-card-title class="display-1 cardtitle">{{ $t('categories') }}</v-card-title>
        <v-divider />
        <v-card-text>
          <v-list 
            v-for="(category, index) in categories"
            :key="index"
            subheader
            dense>
            <v-list-tile
              :to="localePath({name:'blog-category-categoryId', params: {categoryId: category.slug}})"
              href>
              <v-list-tile-content class="title">
                {{ category.name }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex>
      <v-card>
        <v-card-title class="display-1 cardtitle">Tags</v-card-title>
        <v-divider />
        <v-card-text>
          <v-list 
            v-for="(tag, index) in tags_with_no_i18n"
            :key="index"
            subheader
            dense
            class="vlist-tags">
            <v-list-tile
              :to="localePath({name:'blog-tag-tagId', params: {tagId: tag.slug}})"
              href>
              <v-list-tile-content
                class="subheading">
                {{ tag.name }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tags_with_no_i18n: function() {
      return this.tags.filter(function(tag){
        if (tag.name != 'en' && tag.name != 'br'){
          return tag;
        }
      })
    }
  }
}
</script>

<style scoped>
.v-card {
    margin-top: 1.5em;
}
.cardtitle {
  border-left: 7px solid #42A5F5;
  margin: 20px 0 10px 20px;
  padding: 0 0 0 10px !important;
  color: #616161;
}
.vlist-tags{
  float: left;
  margin: 0px;
}
</style>
