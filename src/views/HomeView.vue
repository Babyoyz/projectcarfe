<script>
import Carousel from '../components/componenthome/Carousel.vue'
import Menuhome from '../components/componenthome/Menuhome.vue'
export default {
    components: {
        Carousel,
        Menuhome
    }
}
</script>

<template>
    <div>
        <div class="div-logo text-center">
            <img
                src="https://cdn.discordapp.com/attachments/888780422736138280/949585963787624499/logo.png"
                class="img-logo"
            />
            <h1>Levy Cafe</h1>
          
            <div class="div-social">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-telegram" aria-hidden="true"></i>
            </div>
             <div>
            <Menuhome />
        </div>
        </div>
        <div class="container-fluid Carousel-benner mt-3 mb-3">
            <Carousel />
        </div>
       
    </div>
</template>

<style scoped>
.div-logo img {
    width: 6rem;
}
.div-social {
    display: flex;
    gap: 10px;
    justify-content: center;
    font-size: 20px;
}

</style>