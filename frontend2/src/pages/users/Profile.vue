<template>
    <q-page class="flex flex-center">

        This is the Profile page!

        <q-btn @click="logout" label="logout"></q-btn>
        <q-btn @click="check" label="check axios"></q-btn>
    </q-page>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Profile',

  mounted(){
    console.log(this.$store.state.isAuthenticated)
  },
          methods: {
            async logout() {
                await axios
                    .post('/api/v1/token/logout/')
                    .then(response => {
                        console.log('Logged out')
                    })
                    .catch(error => {
                        console.log(JSON.stringify(error))
                    })
                
                axios.defaults.headers.common['Authorization'] = ''
                localStorage.removeItem('token')
                localStorage.removeItem('email')
                localStorage.removeItem('userid')
                localStorage.removeItem('role')
                this.$store.commit('removeToken')
                this.$router.push('/')
            },

            check(){
       
                           console.log(this.$store.state.isAuthenticated)
              console.log(this.$store.state.user.role)
            }
        },

}
</script>