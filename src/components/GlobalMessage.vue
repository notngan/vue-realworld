<template>
  <div class="bottom">
    <ul>
      <li v-for="(mess, index) in messages" :key="index">{{ mess }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('message', ['messages'])
  }
}
</script>

<style scope>
.bottom {
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: #f9715e;
  padding: 6px 0;
  color: #fff;
  z-index: 1000;
}
</style>
