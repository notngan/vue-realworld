<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">
      <div v-if="article" class="col-md-10 offset-md-1 col-xs-12">
        <edit-form
          :article="article"/>
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

  computed: {
    ...mapState('article', ['article'])
  },

  methods: {
    ...mapActions('article', ['loadArticle'])
  },

  created() {
    this.loadArticle(this.$route.params.id)
    if (this.article) {
      this.article.tag = ''
    }
  }
}
</script>
