<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model.trim="$v.title.$model"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title">
                <div class="error" v-if="!$v.title.required">Title is required.</div>
                <div class="error" v-if="!$v.title.minLength">Title must have at least {{ $v.title.$params.minLength.min }} letters.</div>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model.trim="$v.description.$model">
                <div class="error" v-if="!$v.description.required">Description is required.</div>
                <div class="error" v-if="!$v.description.minLength">Description must have at least {{ $v.description.$params.minLength.min }} letters.</div>
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="$v.body.$model"></textarea>
                <div class="error" v-if="!$v.description.required">Body is required.</div>
                <div class="error" v-if="!$v.description.minLength">Body must have at least {{ $v.body.$params.minLength.min }} letters.</div>
              </fieldset>
              <fieldset v-if="tagList.length > 0" class="form-group">
                <ul class="tag-list">
                  <li v-for="(tag, index) in tagList" :key="index">{{ tag }}</li>
                </ul>
              </fieldset>
              <fieldset class="form-group">
                <input @keydown.enter="addTag" v-model="tag" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button @click="onCreateArticle" class="btn btn-lg pull-xs-right btn-primary" type="button">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      tag: '',
      title: '',
      description: '',
      body: '',
      tagList: []
    }
  },

  validations: {
    title: {
      required,
      minLength: minLength(1)
    },

    description: {
      required,
      minLength: minLength(1)
    },

    body: {
      required,
      minLength: minLength(1)
    }
  },

  methods: {
    ...mapActions('articles', ['createArticle']),

    addTag () {
      if (this.tag == '') return
      this.tagList.push(this.tag)
      this.tag = ''
    },

    onCreateArticle () {
      if (this.$v.$invalid) {
        return
      }
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList
      }
      this.createArticle(article).then(() => {
        this.title = ''
        this.description = ''
        this.tagList = []
        this.body = ''
      })
    }
  }
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




