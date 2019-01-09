<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-xs-12">
        <edit-form
          :article="article"
        :tag="tag"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import EditForm from '../../components/ArticleForm'

export default {
  components: {
    EditForm
  },

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      tag: ''
    }
  },

}
</script>
