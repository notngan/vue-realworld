<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <create-form
            :article="article"/>
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
        tagList: []
      },
      tag: ''
    }
  },
}
</script>

<style scoped>
.tag-list li {
  list-style: none;
  display: inline;
  margin-right: 4px;
  padding: 2px 8px;
  background: #f2f2f2;
  border-radius: 4px;
}

.error {
  color: #d65042;
  font-size: 12px;
}
</style>




