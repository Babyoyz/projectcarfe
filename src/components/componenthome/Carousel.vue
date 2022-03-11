<template>
  <Splide :options="options">
    <SplideSlide>
      <img class="img-Carousel" src="https://media.istockphoto.com/photos/sweet-desserts-on-wood-background-traditional-italian-sweet-food-picture-id1343986924?k=20&m=1343986924&s=612x612&w=0&h=R7L_RkaRmH4gJfJ3GEEtYvWC8iu7PQMzzv9Eoej08Zc=" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img class="img-Carousel" src="https://media.istockphoto.com/photos/dates-cake-with-crumb-picture-id509297320?k=20&m=509297320&s=612x612&w=0&h=nLHOjlDz2VgAJ0KOJ0krfN_GpO-5OcSC3AriyST1a-8=" alt="Sample 2">
    </SplideSlide>
      <SplideSlide>
      <img class="img-Carousel" src="https://media.istockphoto.com/photos/oatmeals-cookies-and-biscotti-for-warm-winter-evening-picture-id877385678?k=20&m=877385678&s=612x612&w=0&h=xqWugm7OJhkASU_gmIz-5yRabRHDa0V0ZPVwhdDoxW8=" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';


export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
      autoplay    : true,
        pauseOnHover: false,
      arrows      : 'slider',
    };
    return { options };
  },
} );
</script>

<style scoped>
.splide {
    height: 20rem;
}
.img-Carousel{
    height: 20rem;
    width: 100%;
}
</style>