<template>
  <h1>Simple string</h1>
  <h1 class="test" :class="testClass">Test Text</h1>
</template>

<script>
export default {
  data() {
    return {
      testClass: "red",
    };
  },
};
</script>

<style scoped>
.test {
  margin: 50px;
}

.red {
  color: red;
}
</style>
