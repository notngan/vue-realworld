<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Global Feed</router-link>
              </li>

              <li class="nav-item" v-if="$route.query.tag">
                <router-link class="nav-link active" to="">
                  Articles by Tag
                </router-link>
              </li>

              <li class="nav-item" v-if="$route.query.author">
                <router-link
                  class="nav-link active"
                  :to="{ path: 'articles', query: {author: username} }">
                  Your Feed
                </router-link>
              </li>
            </ul>
          </div>

          <template v-if="$route.query.tag">
            <article-item
              v-for="article in articleList" :key="article.slug"
              :article="article"/>
          </template>

          <template v-if="$route.query.author">
            <article-item
              v-for="article in articleList" :key="article.slug"
              :article="article"/>
          </template>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <router-link
                class="tag-pill tag-default"
                v-for="(tag, index) in tagList" :key="index"
                :to="{ path: 'articles', query: {tag: tag} }"
                :class="{ active: query === tag}">
                {{ tag }}
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ArticleItem from '../components/ArticleItem'

export default {
  components: {
    ArticleItem
  },

  computed: {
    ...mapState('articles', ['articleList', 'tagList']),
    ...mapState('auth', ['username']),

    query () {
      return this.$route.query.tag
    }
  },

  methods: {
    ...mapActions('articles', ['loadArticlesByTag', 'loadArticlesByAuthor', 'loadTags'])
  },

  created() {
    if (this.$route.query.tag) {
      this.loadArticlesByTag(this.$route.query.tag)
      this.loadTags()
    }

    if (this.$route.query.author) {
      this.loadArticlesByAuthor(this.username)
    }
  },

  watch: {
    $route (prev, next) {
      if (prev.query.tag !== next.query.tag) {
        this.loadArticlesByTag(this.$route.query.tag)
      }
    }
  },
}
</script>

<style scoped>
.active {
  background-color: #4c4c4c;
}
</style>

