<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onUpdateUser" v-if="currentUser">
            <fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control" type="text"
                    placeholder="URL of profile picture"
                    v-model="currentUser.image">
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg" type="text"
                    placeholder="Your Name"
                    v-model="currentUser.username">
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    v-model="currentUser.bio"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    v-model="currentUser.email">
                </fieldset>
                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    v-model="password">
                </fieldset>
                <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
                  Update Settings
                </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      password: ''
    }
  },

  computed: {
    ...mapState('auth', ['currentUser'])
  },

  methods: {
    ...mapActions('auth', ['getCurrentUser', 'updateUser']),
    ...mapMutations('message', ['ADD_MESSAGE', 'CLEAR_MESSAGE']),

    onUpdateUser () {
      this.updateUser({
        email: this.currentUser.email,
        username: this.currentUser.username,
        password: this.password,
        image: this.currentUser.image,
        bio: this.currentUser.bio
      })
    }
  },

  created () {
    this.getCurrentUser()
  },

  watch: {
    currentUser (val) {
      if (!val) {
        this.$router.push('/login')
        this.ADD_MESSAGE(['You need to login to continue!'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 5000);
      }
    }
  }
}
</script>

