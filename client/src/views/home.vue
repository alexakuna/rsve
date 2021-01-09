<template>
  <div class="container">
    <div class="modal">
      <Section @closeModal="hideModal"/>
    </div>
    <div class="page-title">
      <h3>Главная</h3>
      <button
        class="btn waves-effect waves-light btn-small"
        @click="addSection()"
      >
        <i class="material-icons">add</i>
      </button>
    </div>
    <div class="section">
      <h1 style="color: gold">{{HOME_DATA.title}} <span style="color: #512da8">{{ HOME_DATA.subtitle }}</span></h1>
      <blockquote
          style="border-left: 8px solid gold !important;">
        <h5 style="color: #777777">{{HOME_DATA.description}}</h5>
      </blockquote>
    </div>
    <div
      style="position: relative"
      class="row"
      v-for="(i, index) in HOME_DATA.sections"
      :key="index">
      <h3
        style="color: #512da8"
        class="header"
      >
        {{i.title}}
        <button
          class="red right btn waves-effect waves-light btn-small"
          @click="deleteSection(index)"
        >
        <i class="material-icons">delete</i>
        </button>
      </h3>
      <div class="divider"></div>
      <div class="card">
        <div class="card-image card-content no-pad-lr col s12 m6 l7 xl8">
          <img :src="i.images[0]">
        </div>
        <div class="card-stacked col s12 m6 l5 xl4">
          <div class="card-content no-pad-lr">
            <h5 style="margin-top: 0;color: gold">{{HOME_DATA.title}}</h5>
            <div style="margin-bottom: 8px" class="divider"></div>
            <div style="font-size: 16px;line-height: 1.55">{{ i.description[0] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import Section from "@/components/Section";
import Preloader from "@/components/preloader";
export default {
  name: 'home',
  data: () => ({
    modal: '',
    win: ''
  }),
  components: {
    Preloader,
    Section
  },
  computed: {
    ...mapGetters([
        'HOME_DATA', 'MODAL'
    ]),
    // closeMod: {
    //   get: function () {
    //     return this.$store.state.isVisible
    //   },
    //   set: function (value) {
    //     return this.$store.state.isVisible = value
    //   }
    // }
  },
  methods: {
    ...mapActions([
        'getHomeData',
        'removeSection'
    ]),
    hideModal() {
      this.win.close()
    },
    async deleteSection(index) {
      //this.closeMod = false
      try {
        const data = await this.removeSection({index})
        this.$store.state.home = data.data
        this.$done('Секция удалена!')
          //this.closeMod = true
      } catch (e) {
        //this.closeMod = true
        this.$error(e.response.data.message)
      }
    },
    async addSection() {
      this.modal = this.$popup()
      this.win = this.modal.init(this.$el.querySelector('.modal'))
      this.win.open()
    }
  },
  mounted() {
    this.getHomeData()
  }
}
</script>
<style scoped>

</style>
