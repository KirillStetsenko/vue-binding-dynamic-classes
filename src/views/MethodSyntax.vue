<template>
  <h1>Methods</h1>
  <h1 class="test" @click="toggleColor()" :class="{ color: color }">
    Test Text
  </h1>
</template>

<script>
export default {
  data() {
    return {
      color: true,
    };
  },

  methods: {
    toggleColor() {
      this.color = !this.color;
    },
  },
};
</script>

<style>
.test {
  margin: 50px;
}

.color {
  color: red;
}
</style>
