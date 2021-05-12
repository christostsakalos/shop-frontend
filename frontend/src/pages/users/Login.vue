<template>
  <q-page class="flex flex-center">
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <q-form @submit="handleSubmit(onSubmit)" @reset="onReset" class="q-gutter-md">
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
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </ValidationObserver>
  </q-page>
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
    subject: "",
    choices: [],
    options: ["", "Subject 1", "Subject 2"]
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
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>

<style>
</style>