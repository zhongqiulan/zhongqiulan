<template>
  <div id="app">
    
    <!-- <div id="hello">
    
    </div> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // console.log(this.$store);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#hello {
  height: 20px;
  width: 100%;
  background-color: gainsboro;
}
</style>
