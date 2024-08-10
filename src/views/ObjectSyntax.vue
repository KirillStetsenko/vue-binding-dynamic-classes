<template>
  <h1>Object Syntax</h1>
  <h1 class="test" :class="{ a: class1, b: class2, c: class3 }">Test Text</h1>
</template>

<script>
export default {
  data() {
    return {
      class1: true,
      class2: true,
      class3: true,
    };
  },
};
</script>

<style>
.test {
  margin: 50px;
}

.a {
  color: red;
}

.b {
  font-size: 20px;
}

.c {
  text-transform: uppercase;
}
</style>
