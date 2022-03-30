<template>
  <div>
    <form  class="form" @submit.prevent>
      <div class="em_btn">
        <my-input
            :model-value="comment.email"
            @input="comment.email = $event"
            style="margin-right: 1vw"
            type="text"
            placeholder="Email..."
        />
        <my-button
            @click.native="createComment"
        >Добавить</my-button>
      </div>
      <my-input
          :model-value="comment.body"
          @input="comment.body = $event"
          style="margin-top: 2vh"
          type="text"
          placeholder="Комментарий..."
      />
    </form>
    <h4 style="margin-top: 2vh">Комментарии:</h4>
  </div>

</template>

<script>
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import axios from "axios";
export default {
  components: {
    MyInput,
    MyButton
  },
  props: {
    postid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: {
        email: '',
        body: ''
      }
    }
  },
  methods: {
    async createComment() {
      this.comment.id = Date.now()
      this.$emit('create', this.comment)
      try {
        await axios.post('https://jsonplaceholder.typicode.com/comments',
            JSON.stringify({
              email: this.comment.email,
              body: this.comment.body,
              postId: this.postid
            }))
      } catch (e) {
        alert("Ошибка отправки поста на сервер")
      }
      this.comment = {
        email: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.em_btn {
  display: flex;
  flex-direction: row;
}
</style>