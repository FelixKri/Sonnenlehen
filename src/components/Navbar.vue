<template>
   <nav>
        <div style="width: 80%; margin: 0 auto;">
            <a href="/" class="logo-wrapper">
                <h1 style="margin: 16px 0;"> Haus Sonnenlehen </h1>
            </a>
            <ul class="nav-list">
                <li><a href="/house">Das Haus</a></li>
                <li><a href="/pricing">Preise & Buchung</a></li>
                <li><a href="/sights">Lokale Sehenswürdigkeiten</a></li>
                <li><a href="/contact">Kontakt</a></li>
                <li><a href="/availiability">Verfügbarkeit</a></li>
                <li><a href="/gallery">Fotogalerie</a></li>
            </ul>

            <div class="hamburger" @click="expandNav()">
                <div class="line" id="p1"></div>
                <div class="line" id="p2"></div>
                <div class="line" id="p3"></div>
            </div>
        </div>
        <div class="nav-overlay" id="overlay">
            <span class="x-icon" @click="minimizeNav()">X</span>
            <ul class="overlay-list">
                <li><a href="/house">Das Haus</a></li>
                <li><a href="/pricing">Preise & Buchung</a></li>
                <li><a href="/sights">Lokale Sehenswürdigkeiten</a></li>
                <li><a href="/contact">Kontakt</a></li>
                <li><a href="/availiability">Verfügbarkeit</a></li>
                <li><a href="/gallery">Fotogalerie</a></li>
            </ul>
        </div>
    </nav>

    
</template>

<style>
    nav{
        color: white;
        background-color: rgba(0,0,0,0);
        font-family: 'Open Sans', sans-serif;
        height: 100px;
    }

    nav::after{
        content: '';
        display: table;
        clear: both;
    }

    a{
        color: black;
        text-decoration: none;
        font-weight: 800;
    }
    .nav-overlay{
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: #2B2D2F;
        display: none;

        transform: translateX(-100vw);
    }

    .overlay-list{
        list-style-type: none;
        font-size: 1.5em;
        margin-top: 20vh;
    }

    .overlay-list li{
        margin: 1em 0;
    }

    .x-icon{
        color: #ff8c00;
        font-size: 2em;
        position: absolute;
        top: 35px;
        right: 50px;
        cursor: pointer;
    }

    .hamburger{
        display: none;
        position: absolute;
        right: 50px;
        top: 15px;
    }
    .line{
        margin: 8px 0;
        height: 2px;
        width: 30px;
        background-color: black;
    }

    .logo-wrapper{
        text-decoration: none;
        color: black;
        float: left;
    }

    .nav-list{
        float: right;
    }

    .nav-list li{
        color: black;
        display: inline-block;
        list-style: none;
        line-height: 2.5em;
        margin: 0 1em;
    }

    @media only screen and (max-width: 1300px){
        .nav-list li{
            margin: 0 0.4em;
        }
    }

    @media only screen and (max-width: 1200px){
        .hamburger{
            display: block;
            cursor: pointer;
        }

        .nav-list{
            display: none;
        }
    }
</style>

<script>
export default {
    methods: {
        expandNav: function () {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("overlay").style.transform = "translateX(0)";

            
        },

        minimizeNav: function(){
            document.getElementById("overlay").style.display = "none";
            document.getElementById("overlay").style.transform = "translateX(-100vw)";
        }
    }
}
</script>