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

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-center">Test</q-footer>
  </q-layout>
</template>

<script>




export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
}
</script>
