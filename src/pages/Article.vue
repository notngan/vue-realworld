<template>

  <div v-if="article" class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href=""><img :src="article.author.image" /></a>
          <div class="info">
            <router-link :to="`/profile/${article.author.username}`" class="author" exact>{{ article.author.username }}</router-link>
            <span class="date">{{ formatDate(article.createdAt) }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button
            @click="onAddFavorite"
            class="btn btn-sm"
            :class="{
              'btn-primary': article.favorited,
              'btn-outline-primary': !article.favorited}">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.description }}</p>
          <h2 id="introducing-ionic">{{ article.title }}</h2>
          <p>{{ article.body }}</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <router-link :to="'profile/' + article.author.username">
            <img :src="article.author.image"/>
          </router-link>

          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ formatDate(article.createdAt) }}</span>
          </div>

          <!-- follow -->
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;
          <!-- favorite -->
          <button
            @click="onAddFavorite"
            class="btn btn-sm"
            :class="{
              'btn-primary': article.favorited,
              'btn-outline-primary': !article.favorited}">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img v-if="user" :src="user.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
              Post Comment
              </button>
            </div>
          </form>

          <div v-for="comment in commentList" :key="comment.id" class="card">
            <div class="card-block">
              <p class="card-text">{{ comment.body }}</p>
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

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('article', ['commentList', 'article']),
    ...mapState('auth', ['user', 'token'])
  },

  methods: {
    ...mapActions('article', ['loadComments', 'loadArticle']),
    ...mapActions('articles', ['addFavorite', 'removeFavorite']),

    onAddFavorite () {
      if (this.article.favorited) {
        this.removeFavorite({
          token: this.token,
          slug: this.article.slug
        })
      } else {
        this.addFavorite({
          token: this.token,
          slug: this.article.slug
        })
      }
      console.log(this.article.favorited)
    }
  },

  created () {
    this.loadArticle(this.$route.params.id)
    this.loadComments(this.$route.params.id)
  },
}
</script>

