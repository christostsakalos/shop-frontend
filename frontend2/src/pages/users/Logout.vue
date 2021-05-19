<template>
    
</template>


<script>
import axios from 'axios'
export default {
    name: 'Logout',

    mounted(){
        this.logout()
    },          methods: {
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
}
}
</script>