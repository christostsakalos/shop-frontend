<template>
  <q-page class="q-mt-sm">

  </q-page>
</template>

<script>
import axios from 'axios'
import {ref} from 'vue'
import Parentcategory from '../pages/categories/components/Parentcategory'
export default {
components:{Parentcategory},

  data() {
    return {
      slide: "first",
      trending_slide: 1,
      latest_slide: 1,

    };
  },
  mounted(){

  },
  methods: {
  },
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 8px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>