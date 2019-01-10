<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <create-form
            :article="article"
            :tag="tag"
            :isEditing="false"
            @submit="onCreateArticle"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import CreateForm from '../components/ArticleForm'

export default {
  components: {
    CreateForm
  },

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      tag: ''
    }
  },

  computed: {
    ...mapState('auth', ['currentUser'])
  },

  methods: {
    ...mapActions('articles', ['createArticle']),
    ...mapActions('auth', ['getCurrentUser']),
    ...mapMutations('message', ['ADD_MESSAGE', 'CLEAR_MESSAGE']),

    onCreateArticle () {
      this.createArticle(this.article)
      this.getCurrentUser()
    }
  },

  watch: {
    currentUser (val) {
      if (!val) {
        this.$router.push('/login')
        this.ADD_MESSAGE(['You need to login to continue!'])
        setTimeout(() => {
          this.CLEAR_MESSAGE()
        }, 5000);
      }
    }
  },
}
</script>

<style scoped>
.error {
  color: #d65042;
  font-size: 12px;
}
</style>




