<template>
    <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col-auto mb-2">
                <button :class="activemenu == '99' ? 'btn-filter-ac':'btn-filter'" @click="filtermenu(99)">All</button>
            </div>
            <div class="col-auto mb-2">
                <button :class="activemenu == '1' ? 'btn-filter-ac':'btn-filter'" @click="filtermenu(1)">Cake</button>
            </div>
            <div class="col-auto mb-2">
                <button :class="activemenu == '2' ? 'btn-filter-ac':'btn-filter'" @click="filtermenu(2)">Daifuku</button>
            </div>
            <div class="col-auto mb-2">
                <button :class="activemenu == '3' ? 'btn-filter-ac':'btn-filter'"  @click="filtermenu(3)">IceCream</button>
            </div>
            <div class="col-auto mb-2">
                <button :class="activemenu == '4' ? 'btn-filter-ac':'btn-filter'"   @click="filtermenu(4)">Drink</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

data(){
    return{
        activemenu:99
    }
},

methods:{
    filtermenu(params){

        this.activemenu = params
        
        this.$emit('customcomponent',params)
    }
}
}
</script>

<style scoped>
.btn-filter-ac {
    width: 100px;
    color: #fff8ba;
    background: #ff33ff;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}
.btn-filter {
    width: 100px;
    color: #ff33ff;
    background: #fff8ba;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}
.btn-filter:hover {
    width: 100px;
    color: #fff8ba;
    background: #eb07df;
    font-weight: 600;
    border: none;
    height: 2rem;
    border-radius: 10px;
}

.btn-filter-ac:active,
.btn-filter:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>