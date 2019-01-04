<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
<<<<<<< HEAD
=======
          <!-- Add "active" class when you're on that page" -->
>>>>>>> eb1a395... sth
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <template v-if="!user">
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/profile/${user.username}`">{{ user.username }}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
<<<<<<< HEAD
export default {
  computed: {
    ...mapState('auth', ['user'])
  }
=======

export default {
  computed: {
    ...mapState('auth', ['user'])
  },
>>>>>>> eb1a395... sth
}
</script>

