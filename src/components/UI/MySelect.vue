<template>
  <div>
    <select
        @change="changeOption"
    >
      <option value="0" selected>Все пользователи</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('select', event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  padding: 1vh;
}
</style>