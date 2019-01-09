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
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <article-item
            v-for="article in articleList" :key="article.slug"
            :article="article"/>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <router-link
                class="tag-pill tag-default"
                v-for="(tag, index) in tagList" :key="index"
                :to="{ path: 'articles', query: {tag: tag} }">{{ tag }}
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
  },

  methods: {
    ...mapActions('articles', ['loadArticlesByTag', 'loadTags'])
  },

  created() {
    this.loadArticlesByTag(this.$route.query.tag)
    this.loadTags()
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
