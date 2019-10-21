<template>
  <div class="contact" style="width: 60%; margin: 0 auto;">
    <h1 class="center"> Kontakt & Reservieren </h1>
    <p>
      Bitte kontaktieren Sie uns mit Ihrem Reservierungswunsch. Kommentare oder Fragen sind auch willkommen.
    </p>
    <p>
      Telefon: +1 954 457-0308 oder +1 754 244-3552 <br>
      E-Mail: <a href="mailto:contact@sonnenlehen.com">contact@sonnenlehen.com</a><br> <br>
      Adresse: <br>
      Haus Sonnenlehen <br>
      Wolfschwangweg 44 <br>
      A-5084 Großgmain <br>
      Österreich
    </p>

    <p> Wir sprechen Deutsch, Englisch, Französisch, Spanisch, Niederländisch, Portugiesisch. </p>
  </div>
</template> 

<script>
export default {
  name: 'home',
  components: {
  },
}
</script>

<style>
    nav .logo-wrapper{
        color: black;
    }

    .overlay-list li a{
        color: white !important;
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

    .contact p{
      color: gray;
      font-family: 'Crimson Pro', serif;
      font-size: 1.6em;
      line-height: 1.4em;
      text-align: center;
    }

    .contact form{
      width: 40%;
      margin: 0 auto;
    }

    .contact label{
      display: block;
      color: gray;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.6em;
      line-height: 1.4em;
      text-align: center;
    }

    .contact input, textarea{
      width: 100%;
      text-align: left;
      
      font-size: 1.3em;
      font-family: 'Open Sans', sans-serif;
      line-height: 2em;
      color: #2B2D2F !important;

      font-weight: 700;

      margin: 0.5em 0;
      padding: 0.5em 0;
      padding-left: 1em;
      
      border: none;
      border-bottom: 2px solid #2B2D2F;
    }

    .contact input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #2B2D2F;
      opacity: 1; /* Firefox */
    }

    .contact textarea{
      height: 150px;
    }

    .form-group{
      width: 100%;
    }

    .button-submit{
      width: 50% !important;

      border: 2px solid #2B2D2F !important;
      background-color: white;
      text-align: center !important;

      padding-left: 0 !important;

      color: #ff8c00 !important;
      font-family: 'Open Sans', sans-serif !important;
      font-weight: 700;
      font-size: 1.5em !important;

      margin: 0 auto !important;

      cursor: pointer;

    }
    @media only screen and (max-width: 1100px){
      .contact form{
        width: 80%;
      }

      .button-submit{
        width: 100% !important;  
      }
    }
</style>