<template>
  <div id="app">
    <ItemContainer/>
  </div>
</template>

<script>
import ItemContainer from './containers/itemContainer.vue'

export default {
  name: 'App',
  components: {
    ItemContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
