<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
var Mock = require('mockjs')
const axios = require('axios');
export default {
  name: 'App',
  data(){
    return{

    }
  },
  created(){
    var base_url = 'http://localhost:8081/'
    console.log(process.env.NODE_ENV)
    Mock.mock(base_url+'user', 'get', function(options) {
      return Mock.mock({
        'list': [{
            'id|+1': 1
        }]
      })
    })
    
    axios.get(base_url+'user')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
