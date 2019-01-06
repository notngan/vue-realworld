<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import { mapActions } from 'vuex'

export default {
  components: {
    AppHeader,
    AppFooter
  },

  methods: {
    ...mapActions('auth', ['autoLogin'])
  },

  created () {
    this.autoLogin()
  }
}
</script>
