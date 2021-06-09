<template>
     <q-page class="q-pa-md">

    <div class="row q-col-gutter-xs">
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 col-xl-3" v-for="product, product_index in products" >
<ProductCard 
:product="product"
 />

      </div>
    </div>
    </q-page>
</template>

<script>
import axios from 'axios'
import ProductCard from '../../components/ProductCard'
export default {
name:'Subcategory',
components: {ProductCard},

data(){
    return{
        category:'',
        products:[],
    }
},
    watch: {
        $route(to, from) {
            if (to.name === 'Subcategory') {
                this.getCategory()
            }
        }
    },
    mounted(){
        this.getCategory()
    },
    methods:{
             getCategory() {
            const categorySlug = this.$route.params.category_slug
            const subcategorySlug = this.$route.params.subcategory_slug
            axios
                .get(`/api/v1/parentcategories/${categorySlug}/${subcategorySlug}`)
                .then(response => {
                    this.category = response.data.name
                    this.products = response.data.products
                    document.title = this.category.name + ' | Store'
                })
                .catch(error => {
                    console.log(error)
                    this.$q.notify({
          message: 'Something went wrong!',
          color: 'negative'
        })
                })
        }
    }
}
</script>