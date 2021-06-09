<template>
  <router-view />
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue';

export default {
  name: 'App',
  mounted() {
    this.cart = this.$store.state.cart
  },
    beforeCreate() {
      this.$store.commit('initializeStore')
      const token = this.$store.state.token
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
      this.$q.loadingBar.setDefaults({
  color: 'red',
  size: '15px',
  position: 'top'
})
    },
    computed: {
      cartTotalLength() {
          let totalLength = 0
          for (let i = 0; i < this.cart.items.length; i++) {
              totalLength += this.cart.items[i].quantity
          }
          return totalLength
      }
    }

}

</script>
