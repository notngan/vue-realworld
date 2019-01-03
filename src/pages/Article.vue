<template>

  <div v-if="article" class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href=""><img :src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{formatDate(article.createdAt)}}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
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
            <a href="" class="author">Eric Simons</a>
            <span class="date">{{ formatDate(article.createdAt) }}</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
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
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
              Post Comment
              </button>
            </div>
          </form>

          <div v-for="item in commentList" :key="item.id" class="card">
            <div class="card-block">
              <p class="card-text">{{ item.body }}</p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img :src="item.author.image" class="comment-author-img"/>
              </a>
              &nbsp;
              <router-link class="comment-author" :to="'/profile/' + item.author.username">{{ item.author.username }}</router-link>
              <span class="date-posted">{{ formatDate(item.createdAt) }}</span>
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
  data() {
    return {
      slug: null,
    }
  },

  computed: {
    ...mapState('article', ['commentList', 'article']),
  },

  mounted() {
    this.slug = this.$route.params.id
    this.loadArticle(this.slug)
    this.loadComments(this.slug)
  },

  methods: {
    ...mapActions('article', ['loadComments', 'loadArticle']),
  },
}
</script>

