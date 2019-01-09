<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <global-message v-show="messages.length > 0"/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
import { mapActions, mapState } from 'vuex'
import GlobalMessage from '@/components/GlobalMessage'

export default {
  components: {
    AppHeader,
    AppFooter,
    GlobalMessage
  },

  computed: {
    ...mapState('message', ['messages'])
  },

  methods: {
    ...mapActions('auth', ['autoLogin'])
  },

  created () {
    this.autoLogin()
  }
}
</script>
