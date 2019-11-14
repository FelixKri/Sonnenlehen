<template>
  <div>
    <!-- Slideshow container -->
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <div class="numbertext">1 / 19</div>
        <img src="@/assets/slideshow/0.png" style="width:100%" />
        <div class="text">Eine Tradition der Gastfreundschaft</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">2 / 19</div>
        <img src="@/assets/slideshow/1.png" style="width:100%" />
        <div class="text">Willkommen im magischen Haus Sonnenlehen</div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">3 / 19</div>
        <img src="@/assets/slideshow/2.png" style="width:100%" />
        <div class="text">Eine 800 Jahre alte Villa in der Umgebung von Salzburg</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">4 / 19</div>
        <img src="@/assets/slideshow/3.png" style="width:100%" />
        <div class="text">Für Sie geöffnet</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">5 / 19</div>
        <img src="@/assets/slideshow/4.png" style="width:100%" />
        <div class="text">Vor 800 Jahren; ein Haus für Pilger. Heute für ihre 800 Years Ago – A House for Pilgrims; Heute für Ihre Feste & Feiern verfügbar</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">6 / 19</div>
        <img src="@/assets/slideshow/5.png" style="width:100%" />
        <div class="text">20 Kilometer von Salzburg und 11 Kilometer vom Flughafen entfernt</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">7 / 19</div>
        <img src="@/assets/slideshow/6.png" style="width:100%" />
        <div class="text">Erleben Sie das Leben in den Bergen von Großgmain</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">8 / 19</div>
        <img src="@/assets/slideshow/7.png" style="width:100%" />
        <div class="text">Haus Sonnenlehen verfügt über mehrere Balkone und Terrassen. Um Luft zu holen oder den Sonnenuntergang zu genießen.</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">9 / 19</div>
        <img src="@/assets/slideshow/8.png" style="width:100%" />
        <div class="text">12 Schlafzimmer für bis zu 24 Personen</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">10 / 19</div>
        <img src="@/assets/slideshow/9.png" style="width:100%" />
        <div class="text">Zwei vollausgestattete Küchen</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">11 / 19</div>
        <img src="@/assets/slideshow/10.png" style="width:100%" />
        <div class="text">Ein Großer Salon für Feste und eine Bar zum Anstoßen</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">12 / 19</div>
        <img src="@/assets/slideshow/11.png" style="width:100%" />
        <div class="text">Genießen Sie den Garten</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">13 / 19</div>
        <img src="@/assets/slideshow/12.png" style="width:100%" />
        <div class="text">Machen Sie einen Spaziergang durch Großgmain oder gehen Sie in den Bergen wandern</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">14 / 19</div>
        <img src="@/assets/slideshow/13.png" style="width:100%" />
        <div class="text">Erleben Sie das wunderschöne Salzburg!</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">15 / 19</div>
        <img src="@/assets/slideshow/14.png" style="width:100%" />
        <div class="text">Nehmen Sie die Seilbahn, besuchen Sie die Festung, erleben Sie die Schlösser, Gärten, und genießen Sie die Geschichte Salzburgs!</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">16 / 19</div>
        <img src="@/assets/slideshow/15.png" style="width:100%" />
        <div class="text">Gehen Sie in der Getreidegasse oder in der Altstadt einkaufen!</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">17 / 19</div>
        <img src="@/assets/slideshow/16.png" style="width:100%" />
        <div class="text">Spazieren Sie die Salzach entlang, gehen Sie durch die Stadt und sehen Sie sich die Kirchen und den Dom an.</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">18 / 19</div>
        <img src="@/assets/slideshow/17.png" style="width:100%" />
        <div class="text">Besuchen Sie Salzburg bei Nachts und gehen Sie in alten Restaurants und bei klassischen Wirten essen.</div>
      </div>
      <div class="mySlides fade">
        <div class="numbertext">19 / 19</div>
        <img src="@/assets/slideshow/18.png" style="width:100%" />
        <div class="text">Come for the Experience of Haus Sonnenlehen</div>
      </div>
      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>  
  </div>
</template>
‚
<script>
export default {
  data: function(){
    return{
      slideIndex: 1
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    // Next/previous controls
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
    },

    // Thumbnail image controls
    currentSlide: function(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides: function(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
