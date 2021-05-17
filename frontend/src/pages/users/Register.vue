<template>
<q-page-container>
  <q-page class="flex bg-image flex-center">
      <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
        <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Register
              </div>
            </div>
        </q-card-section>
        <q-card-section>
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form @submit="handleSubmit(onSubmit)"  class="q-gutter-sm">
        <ValidationProvider rules="required|email" v-slot="{ errors, invalid, validated }">
          <q-input
            filled
            v-model="email"
            color="orange-7"
            type="email"
            label="Your email *"
            hint="Email address"
            :error="invalid && validated"
            :error-message="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:confirmation"
          v-slot="{ errors, invalid, validated }"
        >
          <q-input
            filled
            v-model="password"
            color="orange-7"
            type="password"
            label="Your Password"
            hint="Enter a strong password"
            :error="invalid && validated"
            :error-message="errors[0]"
          />
        </ValidationProvider>

        <ValidationProvider
          name="confirmation"
          rules="required"
          v-slot="{ errors, invalid, validated }"
        >
          <q-input
            filled
            v-model="confirmation"
            color="orange-7"
            type="password"
            label="Password Confirmation"
            hint="Confirm your passsword"
            :error="invalid && validated"
            :error-message="errors[0]"
          />
        </ValidationProvider>



        <div>
          <q-btn label="Register" type="submit"  color="red-6"/>
        </div>
      </q-form>
    </ValidationObserver>
         </q-card-section>
      </q-card>
    
  </q-page>
</q-page-container>
</template>

<style>
</style>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: "",
    password: "",
    confirmation: "",
  }),
  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("Form submitted yay!");
    },
    onReset() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
    }
  }
};
</script>

<style>
</style>