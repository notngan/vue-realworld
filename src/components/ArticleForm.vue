<template>
  <form @submit.prevent="onSubmit" @keydown.enter.prevent="!onSubmit">
    <fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          name="title"
          v-model="article.title"
          v-validate="'required|min:3'"
          class="form-control form-control-lg"
          placeholder="Article Title">
        <span class="error">{{ errors.first('title')}}</span>
      </fieldset>
      <fieldset class="form-group">
        <input
          v-model="article.description"
          name="description"
          v-validate="'required|min:3'"
          type="text"
          class="form-control"
          placeholder="What's this article about?">
        <span class="error">{{ errors.first('description')}}</span>
      </fieldset>
      <fieldset class="form-group">
        <textarea
          v-model="article.body"
          name="body"
          v-validate="'required|min:3'"
          class="form-control"
          rows="8"
          placeholder="Write your article (in markdown)">
        </textarea>
        <span class="error">{{ errors.first('body')}}</span>
      </fieldset>
      <ul class="tag-list">
        <li v-for="(tag, index) in article.tagList" :key="index">{{ tag }}</li>
      </ul>
      <fieldset class="form-group">
        <input
          v-model="theTag"
          @keydown.enter="onAddTag"
          type="text"
          class="form-control"
          placeholder="Enter tags">
      </fieldset>
      <button
        class="btn btn-lg pull-xs-right btn-primary"
        type="submit">
        <span v-if="isEditing">Update</span>
        <span v-else>Publish</span> Article
      </button>
    </fieldset>
  </form>
</template>

<script>

export default {
  props: ['article', 'tag', 'isEditing'],

  data() {
    return {
      theTag: this.tag
    }
  },

  methods: {
    onSubmit () {
      this.$validator.validateAll().then(res => {
        if (!res) return
        this.$emit('submit', this.article)
      })
    },

    onAddTag () {
      this.article.tagList.push(this.theTag)
      this.theTag = ''
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
