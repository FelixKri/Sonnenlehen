<template>
    <main class="container">
        <h1 class="center"> Sonnenlehen - Fotos </h1>
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img :src="require('@/assets/gallery/IMG_5964.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img :src="require('@/assets/gallery/IMG_5966.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img :src="require('@/assets/gallery/IMG_5969.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img :src="require('@/assets/gallery/IMG_5971.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img :src="require('@/assets/gallery/IMG_5972.jpg')" class="gallery__img" alt="Image 5">
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img :src="require('@/assets/gallery/IMG_5976.jpg')" class="gallery__img" alt="Image 6">
            </figure>
            <figure class="gallery__item gallery__item--7">
                <img :src="require('@/assets/gallery/IMG_5979.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--8" >
                <img :src="require('@/assets/gallery/IMG_5980.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--9">
                <img :src="require('@/assets/gallery/IMG_5981.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--10">
                <img :src="require('@/assets/gallery/IMG_5986.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--11">
                <img :src="require('@/assets/gallery/IMG_5989.jpg')" class="gallery__img" alt="Image 5">
            </figure>
            <figure class="gallery__item gallery__item--12">
                <img :src="require('@/assets/gallery/IMG_5990.jpg')" class="gallery__img" alt="Image 6">
            </figure>
             <figure class="gallery__item gallery__item--13">
                <img :src="require('@/assets/gallery/IMG_5991.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--14">
                <img :src="require('@/assets/gallery/IMG_5997.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--15">
                <img :src="require('@/assets/gallery/IMG_5998.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--16">
                <img :src="require('@/assets/gallery/IMG_6011.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--17">
                <img :src="require('@/assets/gallery/IMG_6013.jpg')" class="gallery__img" alt="Image 5">
            </figure>
        </div>
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img :src="require('@/assets/gallery/IMG_6024.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img :src="require('@/assets/gallery/IMG_6029.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img :src="require('@/assets/gallery/IMG_6034.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img :src="require('@/assets/gallery/IMG_6040.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img :src="require('@/assets/gallery/IMG_6853.jpg')" class="gallery__img" alt="Image 5">
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img :src="require('@/assets/gallery/IMG_6855.jpg')" class="gallery__img" alt="Image 6">
            </figure>
            <figure class="gallery__item gallery__item--7">
                <img :src="require('@/assets/gallery/IMG_6857.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--8">
                <img :src="require('@/assets/gallery/IMG_6880.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--9">
                <img :src="require('@/assets/gallery/IMG_7109.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--10">
                <img :src="require('@/assets/gallery/IMG_7791.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--11">
                <img :src="require('@/assets/gallery/IMG_7795.jpg')" class="gallery__img" alt="Image 5">
            </figure>
            <figure class="gallery__item gallery__item--12">
                <img :src="require('@/assets/gallery/IMG_7796.jpg')" class="gallery__img" alt="Image 6">
            </figure>
             <figure class="gallery__item gallery__item--13">
                <img :src="require('@/assets/gallery/IMG_7800.jpg')" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--14">
                <img :src="require('@/assets/gallery/IMG_7831.jpg')" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--15">
                <img :src="require('@/assets/gallery/IMG_7832.jpg')" class="gallery__img" alt="Image 3">
            </figure>
            <figure class="gallery__item gallery__item--16">
                <img :src="require('@/assets/gallery/IMG_6898.jpg')" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--17">
                <img :src="require('@/assets/gallery/IMG_6884.jpg')" class="gallery__img" alt="Image 5">
            </figure>
        </div>
    </main>
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

    .text{
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

    figure{
        margin-block-start: 0;
        margin-block-end: 0em;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    .gallery{
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
        grid-row-end: 20;
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