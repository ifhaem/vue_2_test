<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
      type="text"
  />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: String
  },
  methods: {
    updateInput($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>