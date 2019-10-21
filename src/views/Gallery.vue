<template>
  <main class="container">
    <h1 class="center">Sonnenlehen - Fotos</h1>
    <div class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src="@/assets/gallery/IMG_5964.jpg" class="gallery__img img" alt="Image 1" id="IMG_5964" @click="expandModal('IMG_5964')"/>
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src="@/assets/gallery/IMG_5966.jpg" class="gallery__img img" alt="Image 2" id="IMG_5966" @click="expandModal('IMG_5966')"/>
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src="@/assets/gallery/IMG_5969.jpg" class="gallery__img img" alt="Image 3" id="IMG_5969" @click="expandModal('IMG_5969')"/>
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src="@/assets/gallery/IMG_5971.jpg" class="gallery__img img" alt="Image 4" id="IMG_5971" @click="expandModal('IMG_5971')"/>
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src="@/assets/gallery/IMG_5972.jpg" class="gallery__img img" alt="Image 5" id="IMG_5972" @click="expandModal('IMG_5972')"/>
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img src="@/assets/gallery/IMG_5976.jpg" class="gallery__img img" alt="Image 6" id="IMG_5976" @click="expandModal('IMG_5976')"/>
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src="@/assets/gallery/IMG_5979.jpg" class="gallery__img img" alt="Image 1" id="IMG_5979" @click="expandModal('IMG_5979')"/>
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src="@/assets/gallery/IMG_5980.jpg" class="gallery__img img" alt="Image 2" id="IMG_5980" @click="expandModal('IMG_5980')"/>
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src="@/assets/gallery/IMG_5981.jpg" class="gallery__img img" alt="Image 3" id="IMG_5981" @click="expandModal('IMG_5981')"/>
      </figure>
      <figure class="gallery__item gallery__item--10">
        <img src="@/assets/gallery/IMG_5986.jpg" class="gallery__img img" alt="Image 4" id="IMG_5986" @click="expandModal('IMG_5986')"/>
      </figure>
      <figure class="gallery__item gallery__item--11">
        <img src="@/assets/gallery/IMG_5989.jpg" class="gallery__img img" alt="Image 5" id="IMG_5989" @click="expandModal('IMG_5989')"/>
      </figure>
      <figure class="gallery__item gallery__item--12">
        <img src="@/assets/gallery/IMG_5990.jpg" class="gallery__img img" alt="Image 6" id="IMG_5990" @click="expandModal('IMG_5990')"/>
      </figure>
      <figure class="gallery__item gallery__item--15">
        <img src="@/assets/gallery/IMG_5998.jpg" class="gallery__img img" alt="Image 3" id="IMG_5998" @click="expandModal('IMG_5998')"/>
      </figure>
      <figure class="gallery__item gallery__item--16">
        <img src="@/assets/gallery/IMG_6011.jpg" class="gallery__img img" alt="Image 4" id="IMG_6011" @click="expandModal('IMG_6011')"/>
      </figure>
      <figure class="gallery__item gallery__item--17">
        <img src="@/assets/gallery/IMG_6013.jpg" class="gallery__img img" alt="Image 5" id="IMG_6013" @click="expandModal('IMG_6013')"/>
      </figure>
    </div>
    <div class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src="@/assets/gallery/IMG_6024.jpg" class="gallery__img img" alt="Image 1" id="IMG_6024" @click="expandModal('IMG_6024')" />
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src="@/assets/gallery/IMG_6029.jpg" class="gallery__img img" alt="Image 2" id="IMG_6029" @click="expandModal('IMG_6029')" />
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src="@/assets/gallery/IMG_6034.jpg" class="gallery__img img" alt="Image 3" id="IMG_6034" @click="expandModal('IMG_6034')" />
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src="@/assets/gallery/IMG_6040.jpg" class="gallery__img img" alt="Image 4" id="IMG_6040" @click="expandModal('IMG_6040')" />
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src="@/assets/gallery/IMG_6853.jpg" class="gallery__img img" alt="Image 5" id="IMG_6853" @click="expandModal('IMG_6853')" />
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img src="@/assets/gallery/IMG_6855.jpg" class="gallery__img img" alt="Image 6" id="IMG_6855" @click="expandModal('IMG_6855')" />
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src="@/assets/gallery/IMG_6857.jpg" class="gallery__img img" alt="Image 1" id="IMG_6857" @click="expandModal('IMG_6857')" />
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src="@/assets/gallery/IMG_6880.jpg" class="gallery__img img" alt="Image 2" id="IMG_6880" @click="expandModal('IMG_6880')" />
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src="@/assets/gallery/IMG_7109.jpg" class="gallery__img img" alt="Image 3" id="IMG_7109" @click="expandModal('IMG_7109')" />
      </figure>
      <figure class="gallery__item gallery__item--10">
        <img src="@/assets/gallery/IMG_7791.jpg" class="gallery__img img" alt="Image 4" id="IMG_7791" @click="expandModal('IMG_7791')" />
      </figure>
      <figure class="gallery__item gallery__item--11">
        <img src="@/assets/gallery/IMG_7795.jpg" class="gallery__img img" alt="Image 5" id="IMG_7795" @click="expandModal('IMG_7795')" />
      </figure>
      <figure class="gallery__item gallery__item--12">
        <img src="@/assets/gallery/IMG_7796.jpg" class="gallery__img img" alt="Image 6" id="IMG_7796" @click="expandModal('IMG_7796')" />
      </figure>
      <figure class="gallery__item gallery__item--15">
        <img src="@/assets/gallery/IMG_7832.jpg" class="gallery__img img" alt="Image 3" id="IMG_7832" @click="expandModal('IMG_7832')" />
      </figure>
      <figure class="gallery__item gallery__item--16">
        <img src="@/assets/gallery/IMG_6898.jpg" class="gallery__img img" alt="Image 4" id="IMG_6898" @click="expandModal('IMG_6898')" />
      </figure>
      <figure class="gallery__item gallery__item--17">
        <img src="@/assets/gallery/IMG_6884.jpg" class="gallery__img img" alt="Image 5" id="IMG_6884" @click="expandModal('IMG_6884')" />
      </figure>
    </div>
    <div>
        <!-- The Modal -->
        <div id="modal" class="modal">
        <!-- The Close Button -->
        <span class="close" @click="closeModal">&times;</span>

        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="modalimg" />

        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
    </div>
  </div>
  </main>
</template> 

<script>
export default {
  name: "home",
  components: {},
  methods: {
    expandModal: function(id) {
      // Get the modal
      var modal = document.getElementById("modal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(id);
      var modalImg = document.getElementById("modalimg");
      var captionText = document.getElementById("caption");

      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      };
    },
    closeModal: function() {
      var modal = document.getElementByid("modal");

      modal.style.display = "none";
    }
  }
};
</script>

<style>
nav .logo-wrapper {
  color: black;
}

.text {
  color: black;
}

nav a {
  color: black;
}

nav .line {
  background-color: black;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans", sans-serif;
  color: black;
}

.overlay-list li a {
  color: white !important;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(24, 5vw);
  grid-gap: 15px;
  margin-top: 15px;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery__item--1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.gallery__item--2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
}

.gallery__item--3 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
}

.gallery__item--4 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 6;
}

.gallery__item--5 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 9;
}
.gallery__item--6 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
}
.gallery__item--7 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 14;
}
.gallery__item--8 {
  grid-column-start: 3;
  grid-column-end: 9;
  grid-row-start: 9;
  grid-row-end: 18;
}
.gallery__item--9 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 14;
  grid-row-end: 16;
}
.gallery__item--10 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 16;
  grid-row-end: 18;
}
.gallery__item--11 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 18;
  grid-row-end: 22;
}
.gallery__item--12 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 18;
  grid-row-end: 20;
}
.gallery__item--13 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 20;
  grid-row-end: 22;
}
.gallery__item--14 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 20;
  grid-row-end: 22;
}
.gallery__item--15 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 20;
  grid-row-end: 26;
}
.gallery__item--16 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 22;
  grid-row-end: 24;
}
.gallery__item--17 {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 24;
  grid-row-end: 26;
}
</style>