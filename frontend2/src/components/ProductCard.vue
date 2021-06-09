<template>
  <q-card class="">
    <q-img :src="product.get_thumbnail" height="250px">
       
    </q-img>

    <q-card-section>
      <q-btn
        fab
        color="teal-7"
        icon="add_shopping_cart" padding="sm"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
      />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">
        {{ product.title }}
      </div>
      <div class="text-subtitle1 text-justify q-mt-sm">
        {{ product.description }}
      </div>
      <div>

      </div>
    </q-card-section>
    <q-card-section>
      <div class="col-12">
        <span class="text-h6">{{ product.price }} $</span>
        <span class="text-h6 float-right">
          <q-btn label="See Details" to="product.get_absolute_url" @click="addToCart()"  rounded color="secondary" outline></q-btn>
        </span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardProduct",
    props: ['product'],
    methods:{
                addToCart() {
            if (isNaN(this.quantity) || this.quantity < 1) {
                this.quantity = 1
            }
            const item = {
                product: this.product,
                quantity: this.quantity
            }
            this.$store.commit('addToCart', item)
           this.$q.notify({
          message: 'Item Added',
          color: 'positive'
        })
        },
    }
}

</script>

<style scoped>
</style>