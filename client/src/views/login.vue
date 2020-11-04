<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Авторизация</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small
            class="helper-text invalid"
            v-if="($v.email.$dirty && !$v.email.required)"
        >Поле email обязательно для заполнения
        </small>
        <small
            class="helper-text invalid"
            v-else-if="($v.email.$dirty && !$v.email.email)"
        >Введите корректный Email
        </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Пароль</label>
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >Поле Password не должно быть пустым
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >Пароль должен иметь не менее символов. Сейчас {{ password.length }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div style="margin-bottom: 20px;">
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
        </button>
      </div>

<!--      <p class="center">-->
<!--        Нет аккаунта?-->
<!--        <router-link to="/register" href="/">Зарегистрироваться</router-link>-->
<!--      </p>-->
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
const {email, required, minLength } = require('vuelidate/lib/validators')
import messages from "@/utils/messages"
export default {
  name: "login",
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email:{email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    ...mapActions(['GET_USER']),
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const response = await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })

      if(response.data.email) this.GET_USER(response.data.email)

      if(response.data.token) {
        localStorage.setItem('auth-token', response.data.token)
        this.$router.push('/')
      }
    }
  },
  mounted() {
    if(messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>

<style scoped>
.auth-card {
  width: 320px !important;
}
</style>
