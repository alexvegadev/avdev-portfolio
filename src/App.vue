<template>
  <div id="app">
    <Bar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Bar from './components/Bar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Bar,
    Footer
  },
  beforeCreate(){
    let lang = localStorage.getItem('lang');
    if(!lang){
      localStorage.setItem('lang', 'es');
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 150px;
  text-align: center;
  color: #2c3e50;
}
</style>
