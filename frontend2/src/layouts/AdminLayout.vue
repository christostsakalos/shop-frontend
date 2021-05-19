<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated class="bg-orange-12">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
         
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Shop
        </q-toolbar-title>

        <div class="q-pa-sm q-gutter-sm">Cart</div>
      </q-toolbar>
    </q-header>


    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary text-white"
    >
      <q-list>
        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="shop"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Back to shop</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/admin" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/profile" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="person"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/logout" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="logout"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Log out</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    import EssentialLink from 'components/EssentialLink'
    export default {
        name: 'MainLayout',
        components: {

            EssentialLink
        },
        data() {
            return {
                leftDrawerOpen: false,
            }
        },
methods:{
  
},
/*         beforeMount(){
          if (this.$store.state.user.role ==='Staff')
this.$router.push('/')

        } */
    }
</script>