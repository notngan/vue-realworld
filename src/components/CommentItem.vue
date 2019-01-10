<template>
  <div class="card">
    <div class="comment-body card-block">
      <p class="card-text">{{ comment.body }}</p>
      <button
        @click="onDeleteComment"
        class="btn-delete btn btn-outline-danger btn-sm"
        v-if="username === comment.author.username"
      >
        <i class="ion-trash-a"></i>
      </button>
    </div>
    <div class="card-footer">
      <router-link class="comment-author" :to="`/profile/${comment.author.username}`">
        <img :src="comment.author.image" class="comment-author-img"/>
      </router-link>
      &nbsp;
      <router-link class="comment-author" :to="`/profile/${comment.author.username}`">{{ comment.author.username }}</router-link>
      <span class="date-posted">{{ formatDate(comment.createdAt) }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['comment'],

  computed: {
    ...mapState('auth', ['username'])
  },

  methods: {
    onDeleteComment () {
      this.$emit('delete')
    }
  },
}
</script>

<style scoped>
.btn-delete {
  float: right;
  position: absolute;
  right: 6px;
  top: 6px;
}
.comment-body {
  position: relative;
}
</style>


