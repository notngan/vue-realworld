<template>
  <div v-if="user" class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ user.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <article-item
            v-for="article in articleList" :key="article.slug"
            :article="article"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArticleItem from '../components/ArticleItem'

export default {
  components: {
    ArticleItem
  },
  computed: {
    ...mapState('auth', ['user', 'username']),
    ...mapState('articles', ['articleList'])
  },

  methods: {
    ...mapActions('auth', ['fetchUser']),
    ...mapActions('articles', ['loadArticlesByAuthor'])
  },

  created () {
    this.fetchUser()
    this.loadArticlesByAuthor(this.username)
  }
}
</script>



