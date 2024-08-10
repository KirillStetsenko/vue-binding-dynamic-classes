<template>
  <h1>Combining Classes</h1>
  <h1 :class="['test', 'a', { b: class2, c: 'class3' }]">Test text</h1>
</template>

<script>
export default {
  data() {
    return {
      styles: {
        class2: "b",
        class3: true,
      },
    };
  },
};
</script>

<style scoped>
.test {
  margin: 50px;
}
</style>
