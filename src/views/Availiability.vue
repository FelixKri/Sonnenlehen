<template>
  <div class="container">
    <h1 class="center"> Verfügbarkeit </h1>
    <iframe src="https://sonnenlehen.com/embedable-calendar/" style="width:100%;min-height:750px !important;border:0px"></iframe>
  </div>
</template> 

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Sight from '@/components/Sight.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Sight
  },
}
</script>

<style>
    nav .logo-wrapper{
        color: black;
    }

    nav a{
        color: black;
    }

    nav .line{
        background-color: black;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Open Sans', sans-serif;
        color: black;
    }
</style>