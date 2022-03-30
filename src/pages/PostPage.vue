<template>
  <div>
    <h1>Страница с постами</h1>
    <div class="select">
      <my-select
          @select="selectingUser"
          :options="usersForSort"
      />
    </div>
    <post-list
        :posts="fullPosts"
        v-if="!isPostLoading"
    />
    <div v-else>Загрузка</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    MySelect,
    MyButton,
    PostList,
  },
  data() {
    return {
      users: [],
      posts: [],
      isPostLoading: false,
      selectedUser: '0',
      searchQuery: '',
    }
  },
  methods: {
    selectingUser(value) {
      this.selectedUser = value
      this.fetchPosts()
    },
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.users = response.data;
      } catch (e) {
        alert('Ошибка загрузки пользователей')
      }
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts${ this.selectedUser == 0 ? '' : `?userId=${ this.selectedUser }` }`);
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка загрузки постов')
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchPosts();
  },
  computed: {
    usersForSort() {
      return this.users.map(function (user) {
        return {
          value: user.id,
          name: user.username
        }
      })
    },
    fullPosts() {
      let postWithUsername = []

      for(let i=0; i<this.posts.length; i++) {
        postWithUsername.push({
          ...this.posts[i],
          ...(this.usersForSort.find((user) => user.value === this.posts[i].userId))}
        );
      }
      return postWithUsername
    }
  },
}
</script>

<style>
.select {
  display: flex;
  justify-content: flex-end;
}
</style>