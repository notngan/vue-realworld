<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <template v-if="!currentUser">
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </template>
        <template v-else>
           <li class="nav-item">
            <router-link class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Post
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/settings" class="nav-link">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/profile/${currentUser.username}`">{{ currentUser.username }}</router-link>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-secondary btn-sm" @click="onLogout" style="margin-top: 6px;">Logout</button>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['currentUser'])
  },

  methods: {
    ...mapActions('auth', ['logout', 'getCurrentUser']),

    onLogout () {
      this.logout()
    }
  },

  created() {
    this.getCurrentUser()
  }
}
</script>

