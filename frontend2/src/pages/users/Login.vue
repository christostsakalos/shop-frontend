<template>
 <q-page-container>
  <q-page class="flex bg-image flex-center">
            <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>

      <Form @submit="onSubmit" :validation-schema="schema" class="q-gutter-md">

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
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          color="orange-7"
        />

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>



        <div>
          <q-btn label="Login" type="submit"  color="red-6"/>
          <q-btn label="Check" type="submit" @click="check"  color="red-6"/>
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
import * as yup from "yup";
import QInputWithValidation from "../../components/forms/QInputWithValidation";
import axios from 'axios';


export default {
  name: 'Login',
  components:{Field,
    Form,
    QInputWithValidation,},
  data: () => ({
    errors: []
  }),
    setup() {
    const schema = yup.object({
      email: yup.string().required().email().label("Email address"),
      password: yup.string().required().min(8).label("Password"),
        
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
  methods: {
            async onSubmit(values) {

                axios.defaults.headers.common['Authorization'] = ''
                localStorage.removeItem('token')

                await axios
                    .post('/api/v1/token/login/', values)
                    .then(response => {
                        const token = response.data.auth_token
                        this.$store.commit('setToken', token)
                        axios.defaults.headers.common['Authorization'] = 'Token ' + token
                        localStorage.setItem('token', token)
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again!')
                        }
                    })
                await axios
                    .get('/api/v1/users/me')
                    .then(response => {
                        this.$store.commit('setUser', {'id': response.data.id, 'email': response.data.email, 'role': response.data.roles})
                        localStorage.setItem('email', response.data.email)
                        localStorage.setItem('userid', response.data.id)
                        localStorage.setItem('role', response.data.roles)
                    })
                    .catch(error => {
                        console.log(error)
                })
// Require page refresh to see user as admin ---- to fix later
                
 
            this.$router.push('/profile')
            },
                        check(){
              console.log(axios.defaults.headers.common)
              console.log(this.$store)
              console.log(this.$store.state)
              console.log(this.$store.state.isAuthenticated)
              console.log(this.$store.state.user.role)
            },
                    Redirect(){
            if (this.$store.state.isAuthenticated === true && this.$store.state.user.role === 'Staff')
            this.$router.push('/profile')
            else if (this.$store.state.isAuthenticated === true)
            this.$router.push('/admin')
        },
    
        },
    mounted(){
    this.Redirect()
  }
};
</script>

<style>
</style>