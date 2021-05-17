<template>
  <router-view />
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

    beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    },
})

</script>
