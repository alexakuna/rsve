<template>
  <div>
    <div class="page-title">
      <h3>Главная</h3>
      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">add</i>
      </button>
    </div>
    <h1>{{HOME_DATA.title}}</h1>
    <p>{{ HOME_DATA.subtitle }}</p>
    <p>{{HOME_DATA.description}}</p>
    <ul>
      <li
          v-for="(i, index) in HOME_DATA.news"
          :key="index"
      >
        {{i}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
        'HOME_DATA'
    ])
  },
  methods: {
    ...mapActions([
        'getHomeData'
    ])
  },
  mounted() {
    this.getHomeData()
  }
}
</script>
