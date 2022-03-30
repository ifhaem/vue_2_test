<template>
  <div>
    <div class="author-post">
      <div class="author-block">
        <h1>{{ this.user.username }}</h1>
        <h3>{{ this.user.email }}</h3>
        <h3>{{ this.user.website }}</h3>
      </div>
      <div class="post-block">
        <h1 class="title">{{ this.post.title }}</h1>
        <h2 class="body">{{ this.post.body }}</h2>
      </div>
    </div>
    <comment-form
        :postid="this.$route.params.id"
        @create="createComment"
    />
    <comment-list
        :comments="comments"
    />
  </div>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import axios from "axios";

export default {
  components: {
    CommentList,
    CommentForm
  },
  data() {
    return {
      post: {
        type: Object,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      },
      comments: []
    }
  },
  methods: {
    async fetch() {
      try {
        const responsePost = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${ this.$route.params.id }`);
        this.post = responsePost.data[0];
        const responseUser = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${ this.post.userId }`);
        this.user = responseUser.data[0];
        const responseComments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ this.post.id }`);
        this.comments = responseComments.data;
      } catch (e) {
        alert('Ошибка загрузки')
      }
    },
    createComment(comment) {
      this.comments.push(comment)
    }
  },
  mounted() {
    this.fetch();
  }
}
</script>

<style scoped>
.author-post {
  display: flex;
  margin-bottom: 10vh;
}
.post-block {
  padding: 10px;
}
.author-block {
  background-color: lightgray;
  border: 1px solid gray;
  padding: 10px;
}
.author-block>h1 {
  padding-bottom: 1vh;
}
</style>