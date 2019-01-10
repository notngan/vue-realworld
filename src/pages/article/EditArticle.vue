<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">
      <div v-if="article" class="col-md-10 offset-md-1 col-xs-12">
        <edit-form
          :article="article"
          :tag="tag"
          :isEditing="true"
          @submit="onUpdateArticle"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import EditForm from '../../components/ArticleForm'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    EditForm
  },

  data() {
    return {
      tag: ''
    }
  },

  computed: {
    ...mapState('article', ['article'])
  },

  methods: {
    ...mapActions('article', ['loadArticle']),
    ...mapActions('articles', ['updateArticle']),

    onUpdateArticle () {
      this.updateArticle({
        slug: this.article.slug,
        article: {
          title: this.article.title,
          description: this.article.description,
          body: this.article.body,
          tagList: this.article.tagList
        }
      })
    }
  },

  created() {
    this.loadArticle(this.$route.params.id)
  }
}
</script>
