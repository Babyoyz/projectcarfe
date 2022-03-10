<script>
import ComponentSocial from '../components/componentpageshipping/ComponentSocial.vue'
import ComponenttFiltermenu from '../components/componentpageshipping/ComponentFiltermenu.vue'
import ComponentCardVue from '../components/componentpageshipping/ComponentCard.vue'

import axios from 'axios'
export default {
  components: {
    ComponentSocial,
    ComponenttFiltermenu,
    ComponentCardVue
  },

  data (){
      return{
          result :[]
      }
  },
  created(){

      axios.get('src/assets/data.json',{})
      .then(({ data}) => {

          console.log(data)
          this.result = data.result
      })
      .catch((err)=> {

          console.error(err)
      })
     
  }
}

</script>

<template>
<div>
    <div class="">
        <div class="div-logo">
            <img src="https://cdn.discordapp.com/attachments/888780422736138280/949585963787624499/logo.png" class="img-logo">

        </div>
        <ComponentSocial />
      
    </div>

    <div class="main-header text-center">
        <p>Search Dessert</p>
        <p>and Drink</p>
    </div>
        <ComponenttFiltermenu />

        <div class="container">

            <div class="row mt-4">
                <div class="col-md-3 mb-3 d-flex justify-content-center" v-for="(item,index) in result" :key="index">
                        <ComponentCardVue
                        :img="item.parthimg" :bgcolor="item.bgcolor"
                         />
                </div>
                
            </div>
             
            
        </div>
</div>

</template>

<style scoped>
.img-logo{
    width: 6rem;
}

.main-header p{
    font-size: 2rem;
    font-weight: 600;
}
</style>