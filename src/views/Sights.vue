<template>
    <main class="container">
        <h1 class="center"> Lokale Sehenswürdigkeiten </h1>
        <hr>
        <p class="center"> 
            Hier im Umkreis von Großgmain gibt es immer mehr zu sehen als man Zeit hat. Sogar als Einheimischer entdeckt man hier immer neue Plätze, Wanderwege, Aussichten oder Cafes. Wir haben hier ein paar unserer Lieblings-Sehenswürdigkeiten 
            und "Must-Sees" aufgeführt, die definitiv einen Besuch Wert sind!
        </p>

        <Sight title="Salzburg Stadt & Umfeld" 
                content="Die Stadt Salzburg ist natürlich die wichtigste Attraktion in unserer Gegend. Die Stadt ist ein lebendiges kulturelles Zentrum in Europa. <a href='http://salzburg.at/'>Die offizielle Website</a> der Stadt Salzburg & dem Salzburgerlandes ist ein sehr guter Ausgangspunkt – dort finden Sie auch eine Menge Links zu anderen wichtigen regionalen Attraktionen." 
                v-bind:imagePath="require('@/assets/salzburg.jpg')"></Sight>
        <Sight title="Berchtesgaden" 
                content="Die attraktionsreiche Region auf der bayerischen Seite unsere Grenze ist das Berchtesgadener Land. <a href='https://www.berchtesgadener-land.com/home'>Die offizielle Website</a> für die Region enthält auch Informationen über die Hauptattraktionen – den Königssee und das Kehlsteinhaus (historisches Teehaus, ein Dokument nationalsozialistischer Architektur, wird heute als Berggaststätte geführt), das Salzbergwerk, den Märchenpfad Bischofswiesen – und vieles mehr." 
                v-bind:imagePath="require('@/assets/berchtesgaden.jpg')"></Sight>
        <Sight title="Bad Reichenhall" 
                content="Die Kurstadt Bad Reichenhall wird von den Menschen, die unser Haus besuchen, oft übersehen. Es gibt eine regelmäßige Busverbindung nach Bad Reichenhall von den gleichen Bushaltestellen, die Sie nach Salzburg bringen. Bad Reichenhall hat ein erstklassiges, von Gästen sehr geschätztes Kurbad, ein Casino, eine Bierstube und eine gute Fußgängerzone mit ausgezeichneten Geschäften." 
                v-bind:imagePath="require('@/assets/reichenhall.jpg')"></Sight>
        <Sight title="Groß- und Bayerisch Gmain" 
                content="Haus Sonnenlehen ist in Großgmain. Großgmain ist der größere Teil des alten Dorfes Gmain. Gmain wurde entlang des Weißbachs in Großgmain (österreichischer Teil) und ­Bayerisch Gmain (der deutsche/bayerische Teil) aufgeteilt. Seit dem Jahr 2000 ist die Grenze nur noch durch das Ortsschild zu bemerken, und Gmain und Großgmain werden mehr und mehr ein Dorf, ohne künstliche Grenzen." 
                v-bind:imagePath="require('@/assets/grossgmain.jpg')"></Sight>
        <Sight title="Der Thumsee" 
                content="Der Thumsee ist der beliebteste See in der Region von Bad Reichenhall. Er ist etwa einen Kilometer lang und 20 Meter tief – also auch tief genug zum Tauchen. Der Thumsee liegt westlich von Bad Reichenhall, etwa 12 Minuten Autofahrt von Haus Sonnenlehen. 
                Seewirt-Restaurant am Thumsee. Gutes Mittagessen, Nachmittagskaffee mit guten Kuchen, Abendessen" 
                v-bind:imagePath="require('@/assets/thumsee.jpg')"></Sight>
        <Sight title="Der Chiemsee" 
                content="Der Chiemsee liegt eine halbe bis dreiviertel Stunde entfernt von Haus Sonnenlehen. Hier findet man das Schloss Herrenchiemsee, das letzte Bauprojekt von Ludwig II. Die Fähre, die dorthin fährt, hält auch an anderen, landschaftlich sehr schönen Inseln." 
                v-bind:imagePath="require('@/assets/chiemsee.jpg')"></Sight>
    </main>
</template> 

<script>
import Sight from '@/components/Sight.vue'
export default {
  name: 'home',
  components: {
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
  
    .overlay-list li a{
        color: white !important;
    }
</style>