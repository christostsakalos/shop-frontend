<template>
  <q-page>
    <div class="row q-col-gutter-sm q-ma-xs">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="text-left q-pt-sm">
                <div class="text-h6 ellipsis">
          Welcome
                </div>
            </div>
        <q-card class="my-card" flat bordered>
            
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">{{$store.state.user.name}}</div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">

                An export button for the orders+an order again choice
            </q-card-section>
          </q-card-section>

          <q-separator/>

          <q-card-section>
            <Userorders />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-left q-pt-sm">
                <div class="text-h6 ellipsis">
          Update Your Details
                </div>
                      </div>
        <q-card>
          <q-card-section>
              <Userdetails />
          </q-card-section>
        </q-card>
      </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div class="text-left q-pt-sm">
                <div class="text-h6 ellipsis">
          Update Your Password
                </div>
                      </div>
        <q-card>
          <q-card-section>
              <Passwordreset />
          </q-card-section>
        </q-card>
      </div>

    </div>
  </q-page>
</template>


<script>
import Passwordreset from './components/Passwordreset';
import Userdetails from './components/Userdetails';
import Userorders from './components/Userorders';
export default {
    name: 'Profile',
    components: {
    Userdetails,
    Passwordreset,
    Userorders
  },



}
</script>