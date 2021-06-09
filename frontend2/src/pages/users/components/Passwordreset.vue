<template>
    <Form @submit="onSubmit" :validation-schema="schema">
        <Field name="current_password" v-slot="{ errorMessage, value, field }">
          <q-input
            label="Current Password"
            :model-value="value"
            v-bind="field"
            :error-message="errorMessage"
            :error="!!errorMessage"
            color="orange-7"
            type="password"
            laceholder="Password"

          />
        </Field>

        <QInputWithValidation
          label="New password"
          name="new_password"
          type="password"
          placeholder="New password"
          color="orange-7"
        />
        <QInputWithValidation
          label="Confirm new password"
          name="re_new_password"
          type="password"
          placeholder="Confirm New password"
          color="orange-7"
        />

              <div>
                 <q-btn label="Update" type="submit" color="orange-7"/>
              </div>
    </Form>
</template>




<script>
import axios from 'axios'
import {onMounted} from 'vue'
import { Form, Field} from "vee-validate";
import * as yup from "yup";
import QInputWithValidation from "../../../components/forms/QInputWithValidation";
export default {
    name: 'Passwordreset',
    components: {
    Field,
    Form,
    QInputWithValidation,},
  data: () => ({
    errors: []
  }),
      methods:{

        onSubmit(values){
          console.log(values)
            axios.post(`api/v1/users/set_password/`, values).then (response =>{ this.$q.notify({
          message: 'Details updated!',
          color: 'positive'
        })
        }).catch(error => {if (error.response) {
      for (const property in error.response.data) {
      this.errors.push(this.$q.notify({
          message: ` ${error.response.data[property]}`,
          color: 'negative'
        }))
        }
        } else if (error.message) {
            this.errors.push('Something went wrong. Please try again!')
              }
                        }).then(console.log(this.errors))
        }
    },

  setup() {
    const schema = yup.object({
      current_password: yup.string().required().min(8).label("Password"),
      new_password: yup.string().required().min(8).label("Password"),
      re_new_password: yup.string()
        .required()
        .oneOf([yup.ref("new_password")], "Passwords do not match"),
    });


    return {

      schema,
    };
  },

}
</script>