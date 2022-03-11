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

    data() {
        return {
            result: [],
            datadefault: [],
            filterArray: ''
        }
    },
    created() {
        axios
            .get('src/assets/data.json', {})
            .then(({ data }) => {
                let randomArray = this.shuffle(data.result)

                this.result = randomArray
                this.datadefault = randomArray
            })
            .catch(err => {
                console.error(err)
            })
    },
    methods: {
        shuffle(array) {
            let currentIndex = array.length,
                randomIndex

            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex--
                ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
            }

            return array
        },
        filtermnu(e) {
            this.$refs.rowdata.classList.add('fade-in')
            setTimeout(() => {
                this.$refs.rowdata.classList.remove('fade-in')
            }, 500)
            if (e == 99) {
                this.result = this.datadefault
            } else {
                let result = this.datadefault.filter(el => {
                    if (el.type == e) {
                        return el
                    }
                })

                this.result = result
            }
        }
    }
}
</script>

<template>
    <div>
        <div class>
            <div class="div-logo">
                <img
                    src="https://cdn.discordapp.com/attachments/888780422736138280/949585963787624499/logo.png"
                    class="img-logo"
                />
            </div>
            <ComponentSocial />
        </div>

        <div class="main-header text-center">
            <p>Search Dessert</p>
            <p>and Drink</p>
        </div>
        <ComponenttFiltermenu @customcomponent="filtermnu" />

        <div class="container">
            <div class="row mt-4" ref="rowdata">
                <div class="col-md-3 mb-3 d-flex justify-content-center" v-for="(item,index) in result" :key="index">
                    <ComponentCardVue :img="item.parthimg" :bgcolor="item.bgcolor" :nameproduct="item.name" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-logo {
    width: 6rem;
}

.main-header p {
    font-size: 2rem;
    font-weight: 600;
}
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>