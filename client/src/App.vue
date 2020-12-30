<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import emptyLayout from '@/layouts/emptyLayout'
import mainLayout from '@/layouts/mainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData: function () {
      console.log('test')
    }
  },
  components: {
    emptyLayout, mainLayout
  }
}
</script >
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
.app-page {
  padding: 10px 10px !important;
}
</style>
