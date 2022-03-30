<template>
  <div class="comments">
    <comment-item
        v-for="comment in comments"
        :comment="comment"
        :key="comment.id"
    />
  </div>
</template>

<script>
import CommentItem from "./CommentItem";

export default {
  components: {CommentItem},
  name: 'comment-list',
  props: {
    comments: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>
.comments {
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
}
</style>