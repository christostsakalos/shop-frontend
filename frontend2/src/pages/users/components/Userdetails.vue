<template>
    <Form @submit="onSubmit" :initial-values="initialValues" :validation-schema="schema">
        <Field name="email" v-slot="{ errorMessage, value, field }">
          <q-input
            label="Email"
            :model-value="value"
            v-bind="field"
            :error-message="errorMessage"
            :error="!!errorMessage"
            color="orange-7"
          />
        </Field>

              <QInputWithValidation
          name="address"
          label="Address"
          placeholder="Enter your address"
          color="orange-7"
        />
            <QInputWithValidation
          name="city"
          label="City"
          placeholder="Enter your city"
          color="orange-7"
        />
            <QInputWithValidation
          name="postcode"
          label="Postcode"
          placeholder="Enter your postcode"
          color="orange-7"
        />
            <QInputWithValidation
          name="phone"
          label="Phone"
          placeholder="Enter your phone"
          color="orange-7"
        />

            <div>
                <q-btn label="Update" type="submit" color="orange-7"/>
            </div>
    </Form>
</template>





<script>
import axios from 'axios'
import {onMounted, ref} from 'vue'
import { Form, Field} from "vee-validate";
import * as yup from "yup";
import QInputWithValidation from "../../../components/forms/QInputWithValidation";
export default {
    name: 'Userdetails',
    components: {
    Field,
    Form,
    QInputWithValidation,
  },
  data: () => ({
    errors: []
  }),

      methods:{
        onSubmit(values){
            axios.patch(`api/v1/users/me/`, values).then (response =>{ this.$q.notify({
          message: 'Details updated!',
          clolor: 'success'
        })
        }).catch(error => {if (error.response) {
      for (const property in error.response.data) {
      this.errors.push(this.$q.notify({
          message: 'Email address is already in use, Please try another',
          clolor: 'success'
        }))
        }
        } else if (error.message) {
            this.errors.push('Something went wrong. Please try again!')
              }
                        })
        }
    },
    setup() {
      // To check:
        // https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
    const schema = yup.object({
      email: yup.string().required().email().label("Email address"),
      address: yup.string().required().min(3).max(20).label("Address"),
      city: yup.string().required().min(2).max(15).label("City"),
      postcode : yup.string().required().min(4).max(6).label("Postcode"),
      phone: yup.string().required().min(10).max(13).label('Phone number is not valid')
        
    });
    
      const initialValues = ref({})
    const load = async () => {
      const response = await axios.get(`api/v1/users/me`);
      initialValues.value = response.data;}

         onMounted(load);
       
    return {

      schema,
      initialValues,
      load
    };
  },


}
</script>