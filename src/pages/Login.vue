<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Log in</h1>
          <p class="text-xs-center">
            <router-link to="/signup">Don't have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
          </ul>

          <form @submit.prevent="onLogin" >
            <fieldset class="form-group">
              <input v-model="userData.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="userData.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
              Log in
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      userData: {
        email: null,
        password: null
      }
    }
  },

  computed: {
    ...mapState('message', ['messages'])
  },

  methods: {
    ...mapActions('auth', ['login']),

    onLogin () {
      this.login(this.userData)
    }
  }
}
</script>

