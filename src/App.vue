<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Crimson+Pro&display=swap');

  html, body{
    margin: 0;
    padding: 0;
  }

  .container{
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .button{
    color:  #ff8c00;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    border: 2px #ff8c00 solid;
    padding: 1em 2em;
  }
  hr{
    margin-top: 3em;
    border: 1px solid #ff8c00;
  }

  .center{
    text-align: center;
  }

  .black{
    color: black;
  }

  @media only screen and (max-width: 800px){
    p{
      font-size: 1.4em !important;
      line-height: 1.2em !important;
    }
    .container{
        width: 90% !important;
    }
  }
</style>
