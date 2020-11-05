<template>
  <div>
    <div class="page-title">
      <h3>Положение</h3>
    </div>
    <router-link
        :to="'/'"
        tag="div"
        v-for="item in ['1','2', '3','4','5','6']"
        :key="item"
    >
      <div class="col s12 m6 l4 xl3">
        <div class="card-panel white">
          <img width="100%" src="https://st.depositphotos.com/2288675/3169/i/450/depositphotos_31695491-stock-photo-vintage-microphone-on-stage.jpg" alt="Rising star">
          <h5>{{item}}</h5>
          <div style="margin-bottom: 0" class="btn-wrapper row">
            <a href="#" style="background-color: #4a148c" class="waves-effect waves-light btn btn-small">Читать</a>
            <a href="#" style="background-color: #4a148c" class="right waves-effect waves-light btn btn-small">Скачать</a>
          </div>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "regulations",
  methods: {}
}
</script>

<style scoped>

</style>
