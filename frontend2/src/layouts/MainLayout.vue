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

      <q-btn class="q-mr-md" to="/cart" dense round flat icon="shopping_cart">
        <q-badge color="red" class="text-bold" floating transparent>
            {{ cartTotalLength }}
        </q-badge>
      </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      bordered
      content-class="bg-white-1"
    >
      <q-list>
        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>home</q-item-label>
          </q-item-section>
        </q-item>
        <template v-if="$store.state.isAuthenticated">
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
        </template>
        <template v-else>



        <q-item to="/login" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="login"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/register" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="login"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
          </q-item-section>
        </q-item>
        </template>
          <div class="q-pl-md bg-white q-pt-sm">
            <span class="text-grey-9 text-h6 text-center text-weight-bold">Categories</span>
          </div>
      <Parentcategory />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center">Test</q-footer>
  </q-layout>
</template>

<script>
import Parentcategory from '../pages/categories/components/Parentcategory'

export default {
  name: 'MainLayout',
  components: {Parentcategory},
  data () {
    return {
      leftDrawerOpen: false,
      cart: {
        items: []
      }
    }
  },
  mounted() {
    this.cart = this.$store.state.cart
  
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
