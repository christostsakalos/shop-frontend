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
      <Form @submit="onSubmit" :initial-values="initialValues" :validation-schema="schema" class="q-gutter-sm">
        <Field name="email" v-slot="{ errorMessage, value, field }">
          <q-input
            label="Email"
            placeholder="user@example.com"
            color="orange-7"
            :model-value="value"
            v-bind="field"
            :error-message="errorMessage"
            :error="!!errorMessage"
          />
        </Field>

              <QInputWithValidation
          name="first_name"
          label="First name"
          placeholder="Enter your first name"
          color="orange-7"
        />
            <QInputWithValidation
          name="last_name"
          label="Last Name"
          placeholder="Enter your last name"
          color="orange-7"
        />
        <QInputWithValidation
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          color="orange-7"
        />
        <QInputWithValidation
          label="Confirm password"
          name="re_password"
          type="password"
          placeholder="Confirm password"
          color="orange-7"
        />
          <Field
            name="terms"
            type="checkbox"
            :value="true"
            :unchecked-value="false"
            v-slot="{ errorMessage, value, field }"
          >
            <q-field
              :borderless="true"
              :error="!!errorMessage"
              :error-message="errorMessage"
            >
              <q-checkbox
                label="Agree to "
                :model-value="value"
                v-bind="field"
              ><a  href="">terms and conditions </a></q-checkbox>
            </q-field>
          </Field>
                    <div class="notification is-danger" v-if="errors.length">
                        <p color='red' v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

        <div>
          <q-btn label="Register" type="submit"  color="red-6"/>
        </div>
      </Form>
         </q-card-section>
      </q-card>
    
  </q-page>
</q-page-container>
</template>

<style>
</style>

<script>
import { Form, Field} from "vee-validate";
import { Notify } from 'quasar'
import * as yup from "yup";
import QInputWithValidation from "../../components/forms/QInputWithValidation";
import QCheckboxWithValidation from "../../components/forms/QInputWithValidation";
import axios from 'axios';


export default {
  
  name: 'Register',
    components: {
    Field,
    Form,
    QInputWithValidation,
    QCheckboxWithValidation,
  },
  data(){
    return{
      errors: []
    }
  },
methods:{
  async onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
     await axios.post('/api/v1/users/', values).then(response =>{
        this.$q.notify({
          message: 'User created!',
          clolor: 'success'
        })
        this.$router.push('/login')
      }).catch(error => {if (error.response) {
      for (const property in error.response.data) {
      this.errors.push(`${property}: ${error.response.data[property]}`)
        }
        } else if (error.message) {
            this.errors.push('Something went wrong. Please try again!')
              }
                        })

    }

/*     onSubmit(values){
       console.log(JSON.stringify(values, null, 2));
               this.$q.notify({
          message: 'User created!',
          clolor: 'green'
        })
    } */
},
  setup() {
    const schema = yup.object({
      email: yup.string().required().email().label("Email address"),
      first_name: yup.string().required().min(3).label("First Name"),
      last_name: yup.string().required().min(4).label("Last Name"),
      password: yup.string().required().min(8).label("Password"),
      re_password: yup.string()
        .required()
        .oneOf([yup.ref("password")], "Passwords do not match"),
      terms: yup
        .boolean()
        .required()
        .isTrue("You must agree to terms and conditions")
        .label("terms agreement")
        
    });

    // Providing initial values for the `terms` and `subscribed` fields
    // because q-checkbox has 3 states, in which undefined means undetermined
    // providing an explict false initial value avoids this
    const initialValues = {
      terms: false,
    };

/*     function onSubmit(values, actions) {
      console.log(JSON.stringify(values, null, 2));
      actions.resetForm();
    } */

    return {

      schema,
      initialValues,
    };
  },

};
</script>

<style>
</style>