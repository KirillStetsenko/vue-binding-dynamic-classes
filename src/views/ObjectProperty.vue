<template>
  <h1>Object Property</h1>
  <h1 class="test" :class="obj.color">Test Text</h1>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        color: "red",
      },
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

.red {
  color: red;
}
</style>
