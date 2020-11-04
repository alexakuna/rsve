<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
        :to="item.url"
        tag="li"
        active-class="active"
        :exact="item.exact"
        v-for="item in NAME_TITLES.pages"
        :key="item.url"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{item.title}}</a>
    </router-link>
  </ul>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  props: ['value'],
  name: "sidebar",
  computed: {
    ...mapGetters([
        'NAME_TITLES'
    ])
  },
  methods: {
    ...mapActions([
        'GET_TITLES_PAGE'
    ])
  },
  mounted() {
    this.GET_TITLES_PAGE()
  }
}
</script>

<style scoped>

</style>
