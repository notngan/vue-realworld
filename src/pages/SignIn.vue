<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/signup">Don't have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form>
            <fieldset @submit.prevent="onSignin" class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
    ...mapGetters('auth', ['user'])
  },

  methods: {
    ...mapActions('auth', ['login']),
    onSignin() {
      this.login(this.userData)
      // .then(() => this.$router.push('/'))
    }
  },

  created() {

  },

  watch: {
    user (val) {
     console.log(val)
    }
  }

}
</script>

