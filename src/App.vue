<template>
  <div class="wrapper">
    <h1>Dynamic Classes</h1>
    <nav>
      <router-link to="simpleString">Simple String</router-link>
      <router-link to="arrayClasses">Array of Classes</router-link>
      <router-link to="objectSyntax">Object Syntax</router-link>
      <router-link to="combiningClasses">Combining Classes</router-link>
      <router-link to="methodSyntax">Methods</router-link>
      <router-link to="objectProperty">Object Property</router-link>
      <router-link to="computedProperties">Computed Properties</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
:root {
  text-align: center;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  font-size: 20px;

  a {
    text-decoration: none;

    &:nth-child(1) {
      color: red;
    }

    &:nth-child(2) {
      color: orange;
    }

    &:nth-child(3) {
      color: yellow;
    }

    &:nth-child(4) {
      color: green;
    }

    &:nth-child(5) {
      color: skyblue;
    }

    &:nth-child(6) {
      color: blue;
    }

    &:nth-child(7) {
      color: violet;
    }
  }
}
</style>
