<template>
<div>
    <div v-for="category in categories" v-bind:key="category.id">
        <q-item v-bind:to=category.get_absolute_url active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="production_quantity_limits"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{category.name}}</q-item-label>
          </q-item-section>
        </q-item>
    </div>
</div>
     


</template>


<script>
import axios from 'axios'
export default {
    name: 'Parentcategory',
    props: {category: Object},
  data() {
    return {
      categories: []
    };
  },
  mounted(){
      this.getCategories()
  },
  methods: {
        getCategories() {
       axios
        .get('/api/v1/parentcategories/')
        .then(response => {
          this.categories = response.data
          console.log(this.categories)
        })
        .catch(error => {
          console.log(error)
        })
          }
  },

}
</script>