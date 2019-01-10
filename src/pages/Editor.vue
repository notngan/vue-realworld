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
import { mapActions } from 'vuex'
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

  methods: {
    ...mapActions('articles', ['createArticle']),

    onCreateArticle () {
      this.createArticle(this.article).then(() => {
        this.article = {
          title: '',
          description: '',
          body: '',
          tagList: [],
        }
      })
    }
  }
}
</script>

<style scoped>
.error {
  color: #d65042;
  font-size: 12px;
}
</style>




