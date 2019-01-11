<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="`/profile/${article.author.username}`">
        <img :src="article.author.image">
      </router-link>
      <div class="info">
        <router-link :to="`/profile/${article.author.username}`" class="author">{{ article.author.username }}</router-link>
        <span class="date">{{ formatDate(article.createdAt) }}</span>
      </div>
      <button
        v-if="currentUser"
        @click="onAddFavorite"
        class="btn btn-sm pull-xs-right"
        :class="{
          'disabled': article.author.username === currentUser.username,
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited
        }">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
      <button
        v-else
        @click="onAddFavorite"
        class="btn btn-sm pull-xs-right"
        :class="{
          'btn-primary': article.favorited,
          'btn-outline-primary': !article.favorited
        }">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <router-link :to="`/article/${article.slug}`" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </router-link>
    <ul class="article-tags">
      <li v-for="(tag, index) in article.tagList" :key="index">
        <router-link :to="{ path: '/articles', query: { tag: tag } }">{{ tag }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import mixin from '../mixin'

export default {
  props: {
    article: Object
  },

  mixins: [mixin],

  computed: {
    ...mapState('auth', ['currentUser'])
  },

  methods: {
    ...mapActions('articles', ['addFavorite', 'removeFavorite']),
    ...mapMutations('message', ['ADD_MESSAGE', 'CLEAR_MESSAGE']),

    onAddFavorite () {
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
        this.ADD_MESSAGE(['You need to login to continue.'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 3000);
        return
      }

      if (this.currentUser.username === this.article.author.username) return

      if (this.article.favorited) {
        this.removeFavorite({
          slug: this.article.slug,
          route: this.$route.name
        })
      } else {
        this.addFavorite({
          slug: this.article.slug,
          route: this.$route.name
        })
      }
    }
  }
}
</script>

<style scoped>
.article-tags {
  text-align: right;
  margin: 0;
}

.article-tags li {
  list-style: none;
  display: inline;
  margin: 0 4px;
  font-size: 11px;
  padding: 2px 4px;
  background: #f2f2f2;
  border-radius: 4px;
}

.article-tags a {
  color: #666;
}
</style>


