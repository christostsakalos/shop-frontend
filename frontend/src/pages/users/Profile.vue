<template>
    <q-page class="flex flex-center">

        This is the Profile page!
    </q-page>
</template>


<script>
export default {
    name: 'Profile',

  mounted(){
    console.log(this.$store.state.isAuthenticated)
  }
}
</script>