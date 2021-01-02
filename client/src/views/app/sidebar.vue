<template>
  <div class="sidenav app-sidenav" :class="{open: !value}">
    <ul class="pages-titles">
      <li>
        <a class='dropdown-trigger' href='#' data-target='dropdown1'>Страницы</a>
      </li>
    </ul>

    <ul id="dropdown1" class="dropdown-content">
      <router-link
          :to="item.url"
          tag="li"
          active-class="active"
          :exact="index === 0 ? true : ''"
          v-for="(item, index) in NAME_TITLES.pages"
          :key="item.url"
      >
        <a href="#" class="waves-effect waves-orange pointer">{{item.title}}</a>
      </router-link>
    </ul>
    <ul>
      <router-link to="/navigations" tag="li"><a href="#">Навигация</a></router-link>
      <router-link to="/footer-section" tag="li"><a href="#">Подвал</a></router-link>
    </ul>
  </div>
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
    ]),
    initDropDownMenu() {
      const menu = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(menu);
    }
  },
  mounted() {
    this.GET_TITLES_PAGE()
    this.initDropDownMenu()
  }
}
</script>

<style scoped>
  ul {
    margin: 0;
  }
  .app-sidenav {
    background: rgba(255, 255, 255, 0.9);
  }
</style>
