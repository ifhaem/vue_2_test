<template>
  <div class="comment">
    <h4>{{ comment.email }}</h4>
    <div style="padding-top: 1vh">Comment: {{ comment.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'comment-item',
  props: {
    comment: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>
.comment {
  padding: 2vh 1vw;
  display: flex;
  flex-direction: column;
}
.comment:nth-child(odd) {
  background-color: lightgray;
}
</style>