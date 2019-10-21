<template>

   <div class="sight">
        <img v-bind:src="imagePath" v-bind:alt="imagePath">
        <h1> {{title}} </h1>
        <div class="text">
            <p v-html="content"></p>
            <hr>
        </div>
    </div>
</template>

<style>
    .sight{
        width: 100%;
        margin: 1em 0;
        position: relative;
        min-height: 500px;
        margin-bottom: 100px;
    }

    .sight img{
        height: 80%;
        max-height: 450px;
        min-height: 400px;
        width: 55%;
        float: left;
        object-fit: cover;
    }

    .sight p{
        margin: 0;
    }

    .sight h1{
        Position: absolute;
        background-color: white;
        padding: 0.3em;
        font-size: 2.5em;
        margin: 0;
        top: 10px;
        left: 40%;
    }
    .text{
        padding-top: 90px;
        float: right;
        width: 40%;
    }

    .sight hr{
        display: none;
    }

    @media only screen and (max-width: 1200px){
      .sight{
          width: 90%;
          margin: 0 auto;
          height: auto;
      }

      .sight h1{
          position: static;
          color: black;
          text-align: center;
      }

      .sight img{
          float: none;
          width: 100%;
          height: auto;
      }

      .sight .text{
          float: none;
          width: 100%;
          padding: 0;
          margin: 3em 0;
      }

      .sight hr{
          display: block;
          width: 70%;
      }
    }
</style>

<script>
 
    export default {
        name: 'sight',
        components: {
           
        },
        props: {
            title: String,
            content: String,
            imagePath: String
        }
    }
</script>