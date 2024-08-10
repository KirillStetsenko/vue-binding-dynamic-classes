<template>
  <h1>Array Classes</h1>
  <h1 class="test" :class="[class1, class2, class3]">Test Text</h1>
</template>

<script>
export default {
  data() {
    return {
      class1: "a",
      class2: "b",
      class3: "c",
    };
  },
};
</script>

<style scoped>
.test {
  margin: 50px;
}

.a {
  color: red;
}

.b {
  font-size: 10px;
}

.c {
  text-transform: uppercase;
}
</style>
