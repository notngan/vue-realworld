<template>
  <div v-if="user" class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <router-link
              v-if="currentUser && currentUser.username == user.username"
              to="/settings"
              class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-gear-a"></i> Edit Profile Settings
            </router-link>
            <button
              v-else
              class="btn btn-sm action-btn"
              :class="{
              'btn-secondary': user.following,
              'btn-outline-secondary': !user.following}"
              @click="onFollowUser">
              <i class="ion-plus-round"></i>
              &nbsp;
              <span v-if="user.following">Unfollow</span>
              <span v-else>Follow</span>
              {{ user.username }}
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
                <router-link
                  class="nav-link active"
                  :to="`/profile/${user.username}`">My Articles</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="`${user.username}/favorites`"
                >Favorited Articles</router-link>
              </li>
            </ul>
          </div>
          <article-item
            v-for="article in articleList"
            :key="article.slug"
            :article="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import ArticleItem from '../components/ArticleItem'

export default {
  components: {
    ArticleItem
  },
  computed: {
    ...mapState('auth', ['currentUser', 'user']),
    ...mapState('articles', ['articleList'])
  },

  methods: {
    ...mapActions('auth', ['fetchUser']),
    ...mapActions('articles', ['loadArticlesByAuthor']),
    ...mapActions('article', ['followAuthor', 'unfollowAuthor']),
    ...mapMutations('message', ['ADD_MESSAGE', 'CLEAR_MESSAGE']),

    onFollowUser () {
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
        this.ADD_MESSAGE(['You need to login to continue.'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 3000);
        return
      }

      if (this.currentUser.username === this.user.username) return

      if (this.user.following) {
        this.unfollowAuthor({
          username: this.user.username,
          route: this.$route.name
        })
      } else {
        this.followAuthor({
          username: this.user.username,
          route: this.$route.name
        })
      }
    }
  },

  created () {
    this.fetchUser(this.$route.params.id)
    this.loadArticlesByAuthor(this.$route.params.id)
  },

  watch: {
    $route (prev, next) {
      if (prev.params.id !== next.params.id) {
        this.fetchUser(this.$route.params.id)
        this.loadArticlesByAuthor(this.$route.params.id)
      }
    }
  },
}
</script>



