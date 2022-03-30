<template>
  <div class="post" @click="$router.push(`/${post.id}`)">
    <div>
      <h4>{{ post.name }}: {{ post.title }}</h4>
      <div>{{ post.body }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  border: 2px solid teal;
  margin-top: 1vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h4 {
  margin-bottom: 1vh;
}
.post:hover {
  cursor: pointer;
}
</style>