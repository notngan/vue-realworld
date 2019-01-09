<template>
  <form>
    <fieldset>
      <fieldset class="form-group">
        <input
          type="text"
          v-model="article.title"
          class="form-control form-control-lg"
          placeholder="Article Title">
      </fieldset>
      <fieldset class="form-group">
        <input
          v-model="article.description"
          type="text"
          class="form-control"
          placeholder="What's this article about?">
      </fieldset>
      <fieldset class="form-group">
        <textarea
          v-model="article.body"
          class="form-control"
          rows="8"
          placeholder="Write your article (in markdown)">
        </textarea>
      </fieldset>
      <fieldset class="form-group">
        <ul class="tag-list">
          <li v-for="(tag, index) in article.tagList" :key="index">{{ tag }}</li>
        </ul>
      </fieldset>
      <fieldset class="form-group">
        <input @keydown.enter="addTag" v-model="tag" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
      </fieldset>
      <button
        @click="onSubmit"
        class="btn btn-lg pull-xs-right btn-primary"
        type="button">
        Publish Article
      </button>
    </fieldset>
  </form>
</template>

<script>

export default {
  props: ['article', 'tag'],
  methods: {
    onSubmit () {
      this.$emit('submit')
    },
    addTag () {
      this.$emit('add-tag')
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
