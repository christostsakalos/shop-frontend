<template>
    <q-page padding>
        <div class="row q-col-gutter-sm">
            
            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-8" v-for="category in categories" v-bind:key="category.id">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <q-item v-bind:to=category.get_absolute_url> {{category.name}}</q-item>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ category.description }}
      </q-card-section>
    </q-card>

            </div>

        </div>
    </q-page>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Parentcategory',
    data(){
        return{
            parentcategory : {},
            categories : [],

        }
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Parentcategory') {
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
            axios
                .get(`/api/v1/parentcategories/${categorySlug}/`)
                .then(response => {
                    this.parentcategory = response.data
                    this.categories = response.data.categories
                    document.title = this.parentcategory.name + ' | Store'
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