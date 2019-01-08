<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="article.author.username">
        <img :src="article.author.image">
      </router-link>
      <div class="info">
        <router-link :to="article.author.username" class="author">{{ article.author.username }}</router-link>
        <span class="date">{{ formatDate(article.createdAt) }}</span>
      </div>
      <button
        @click="onAddFavorite"
        class="btn btn-sm pull-xs-right"
        :class="{
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited}">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <router-link :to="`article/${article.slug}`" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['article'],

  methods: {
    ...mapActions('articles', ['addFavorite', 'removeFavorite']),

    onAddFavorite () {
      if (this.article.favorited) {
        this.removeFavorite(this.article.slug)
      } else {
        this.addFavorite(this.article.slug)
      }
      console.log(this.article.favorited)
    }
  }
}
</script>

