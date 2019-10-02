<template>
  <div class="about">
    <div class="container">
    <h4 style="margin: 0; font-size: 1.5em;">Das</h4>
    <h1 style="margin: 0; font-size: 3em;">Haus Sonnenlehen</h1>
    <hr>
    <div class="left-block">
      <h2> Wohnzimmer </h2>
      <p>
        Das Haus verfügt über mehrere Wohnzimmer in unterschiedlicher Größe. Sowohl für große Gesellschaften oder kleine Gruppen lässt sich ein Ort zum zusammenkommen finden. Außerdem gibt es im ganzen Haus viele kleine private Ecken für mehr Privatsphäre 
      </p>
      <h3> SALON / HAUPTWONZIMMER </h3>
      <p>
        Es gibt viele Möglichkeiten im Haus für Geselligkeit in größeren und kleineren Runden. Außerdem gibt es auch viele stille Ecken für Privatsphäre. Im Haus befinden sich mehrere kleine Salons und ein großes Wohnzimmer. Die Wohnzimmer sind mit modernen Flat-Screen TVs ausgestattet. 
      </p>
      <div class="img" id="living"></div>
      <h2> Küchen </h2>
      <p> 
        Das Haus Sonnenlehen biete zwei voll ausgestattete Küchen. Die eine befindet sich im Erdgeschoss, die andere im zweiten Obergeschoss. Beide sind ideal geeignet um Mahlzeiten für viele Gäste zuzubereiten.
      </p>
      <h3> ERDGESCHOSSKÜCHE </h3>
      <p>
        Die Küche im Erdgeschoss ist die Hauptküche für das Haus Sonnenlehen. Sie besitzt eine Kochinsel, Geschirrspüler, Waschmaschine, Kühlschränke,  Kochutensilien und alles was man sonst noch benötigt um die perfekten Mahlzeiten zu kreieren. Durch ihre Größe ist auch das zubereiten für große Gruppen kein Problem.
      </p>
      <h3> KÜCHE IM OBERGESCHOSS </h3>
      <p>
        Die Küche im Obergeschoss ist komplett neu, mit Esstisch und Bürofläche. Zur Ausstattung gehören auch ein Herd mit Ceran-Kochfeld, neuer Kühlschrank, Gefrierschrank, Backofen und Mikrowelle. 
      </p>
      <div class="img" id="kitchen"></div>
    </div>
    <div class="right-block">
      <h2> Badezimmer & WC's </h2>
      <p>
        Von Toiletten bis hin zu Wasserhähnen kann ich das richtige Mobiliar für Ihr Bad oder Ihre Küche installieren. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra cursus quam eu eleifend. Duis volutpat accumsan odio volutpat congue.
      </p>
      <div class="img" id="bath"></div>
      <h2> Schlafzimmer </h2>
      <p>
        Von Toiletten bis hin zu Wasserhähnen kann ich das richtige Mobiliar für Ihr Bad oder Ihre Küche installieren. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra cursus quam eu eleifend. Duis volutpat accumsan odio volutpat congue.
      </p>
      <p>
        Eine detaillierte Beschreibung zu allen Schlafzimmern mit Bildern können Sie sich hier ansehen.
      </p>
      <div class="img" id="bed"></div>
      <h2> Bar </h2>
      <p>
        Neben dem Wohnzimmer befindet sich auch eine kleine gemütliche Bar, in der allerlei Spiritousen und Getränke zum freien Genuss vorhanden sind!
      </p>
      <div class="img" id="bar"></div><br>
      <div class="img" id="bar2"></div>
    </div>
    
    </div>
  </div>
</template>
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
  .overlay-list li a{
        color: white !important;
    }
  p{
    color: black;
    font-size: 1.6em;
    color: gray;
    line-height: 1.4em;
    font-family: 'Crimson Pro', serif;
  }
  h2{
    font-weight: 400;
    font-size: 3em;
  }

  .left-block{
    float: left;
    width: 40%;
  }

  .right-block{
    float: right;
    width: 40%;
  }

  .img{
    width: 100%;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  #living{
    background-image: url("../assets/livingroom.jpg");
  }

  #bath{
    background-image: url("../assets/bathroom.jpg");
  }

  #bed{
    background-image: url("../assets/bedroom.jpg");
  }

  #bar{
    background-image: url("../assets/bar.jpg");
  }
  #bar2{
    background-image: url("../assets/bar2.jpg");
  }

  #kitchen{
    background-image: url("../assets/kitchen.jpg");
  }

  .container::after{
    content: '';
    display: table;
    clear: both;
  }

  @media only screen and (max-width: 1300px){
    .left-block{
      float: none;
      width: 100%;
    }

    .right-block{
      float: none;
      width: 100%;
    }
  }
</style>
<script>
  export default {
    name: 'house',
  }
</script>
