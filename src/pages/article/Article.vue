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
          <template v-if="article.author.username !== username">
            <!-- follow -->
            <button
              @click="onFollowAuthor"
              class="btn btn-sm"
              :class="{
                'disabled': article.author.username === username,
                'btn-secondary': article.author.following,
                'btn-outline-secondary': !article.author.following}">
              <i class="ion-plus-round"></i>
              &nbsp;
              <span v-if="article.author.following">Unfollow</span>
              <span v-else>Follow</span>
              {{ article.author.username }}
            </button>
            &nbsp;&nbsp;
            <button
              @click="onAddFavorite"
              class="btn btn-sm"
              :class="{
                'disabled': article.author.username === username,
                'btn-primary': article.favorited,
                'btn-outline-primary': !article.favorited}">
              <i class="ion-heart"></i>
              &nbsp;
              <span v-if="article.favorited">Unfavorite</span>
              <span v-else>Favorite</span>&nbsp;
              <span class="counter">({{ article.favoritesCount }})</span>
            </button>
          </template>

          <template v-else>
            <router-link
              :to="`/editor/${article.slug}`"
              class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i>
              <span>&nbsp;Edit Article</span>
            </router-link>
            &nbsp;&nbsp;
            <button @click="onDeleteArticle" class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>
              <span>&nbsp;Delete Article</span>
            </button>
          </template>
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
            <router-link  :to="`/profile/${article.author.username}`" class="author">{{ article.author.username }}</router-link>
            <span class="date">{{ formatDate(article.createdAt) }}</span>
          </div>

          <template v-if="article.author.username !== username">
            <!-- follow -->
            <button
              @click="onFollowAuthor"
              class="btn btn-sm"
              :class="{
                'disabled': article.author.username === username,
                'btn-secondary': article.author.following,
                'btn-outline-secondary': !article.author.following}">
              <i class="ion-plus-round"></i>
              &nbsp;
              <span v-if="article.author.following">Unfollow</span>
              <span v-else>Follow</span>
              {{ article.author.username }}
            </button>
            &nbsp;
            <!-- favorite -->
            <button
              @click="onAddFavorite"
              class="btn btn-sm"
              :class="{
                'disabled': article.author.username === username,
                'btn-primary': article.favorited,
                'btn-outline-primary': !article.favorited}">
              <i class="ion-heart"></i>
              &nbsp;
              <span v-if="article.favorited">Unfavorite</span>
              <span v-else>Favorite</span>&nbsp;
              <span class="counter">({{ article.favoritesCount }})</span>
            </button>
          </template>

          <template v-else>
            <router-link
              :to="`/editor/${article.slug}`"
              class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i>
              <span>&nbsp;Edit Article</span>
            </router-link>
            &nbsp;&nbsp;
            <button @click="onDeleteArticle" class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>
              <span>&nbsp;Delete Article</span>
            </button>
          </template>

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
              &nbsp;
              <router-link v-if="user" :to="`/profile/${user.username}`">{{ user.username }}</router-link>
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
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('article', ['commentList', 'article']),
    ...mapState('auth', ['user', 'username', 'token']),
    ...mapState('message', ['messages'])
  },

  methods: {
    ...mapActions('article', ['loadComments', 'loadArticle', 'followAuthor', 'unfollowAuthor']),
    ...mapActions('articles', ['addFavorite', 'removeFavorite', 'deleteArticle']),
    ...mapActions('auth', ['fetchUser']),
    ...mapMutations('message', ['ADD_MESSAGE', 'CLEAR_MESSAGE']),

    onAddFavorite () {
      if (this.username === this.article.author.username) return

      if (!localStorage.getItem('token')) {
        this.ADD_MESSAGE(['You need to login to continue.'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 3000);
        return
      }

      if (this.article.favorited) {
        this.removeFavorite(this.article.slug)
      } else {
        this.addFavorite(this.article.slug)
      }
    },

    onFollowAuthor () {
      if (this.username === this.article.author.username) return

      if (!localStorage.getItem('token')) {
        this.ADD_MESSAGE(['You need to login to continue.'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 3000);
        return
      }

      if (this.article.author.following) {
        this.unfollowAuthor({
          username: this.article.author.username,
          route: this.$route.name
        })
      } else {
        this.followAuthor({
          username: this.article.author.username,
          route: this.$route.name
        })
      }
    },

    onDeleteArticle () {
      this.deleteArticle({
        slug: this.article.slug,
        username: this.article.author.username
      })
    }
  },

  created () {
    this.loadArticle(this.$route.params.id)
    this.loadComments(this.$route.params.id)
    if (this.username) {
      this.fetchUser(this.username)
    }
  },
}
</script>

