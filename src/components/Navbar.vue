<template>
  <div class="navbar">
    <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" class="logo" @click="$router.push('/')"/>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.logo {
  max-width: 40px;
  cursor: pointer;
}
</style>