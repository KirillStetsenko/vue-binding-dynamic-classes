<template>
  <h1>Computed Property</h1>
  <h1 class="test" :class="!computedClass ? '' : 'red'">Test Text</h1>
</template>

<script>
export default {
  computed: {
    computedClass() {
      return true;
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
