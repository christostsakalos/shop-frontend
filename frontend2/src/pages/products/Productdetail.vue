<template>
<q-page>
    <div q-row class="q-pa-xl">

 

  <div class="left-column">
    <div class="product-description">
      <span>{{$route.params.subcategory_slug}}</span>
      <h1>{{product.name}}</h1>
      <p>{{product.description}}</p>
    </div>
 

 

    <div class="product-price">
      <span>{{product.price}}$</span>
     <q-btn color="green-5" @click="addToCart()" label="Add to car" />
    </div>
  </div>
 
    </div>


</q-page>
</template>

<script>
import axios from 'axios'
  export default {
    name: "Productdetail",
data(){
    return{
         product: {},
        quantity: 1
    }
},
mounted(){
    this.getProduct()
},
    methods: {
        async getProduct() {
            const category_slug = this.$route.params.category_slug
            const subcategory_slug = this.$route.params.subcategory_slug
            const product_slug = this.$route.params.product_slug
            await axios
                .get(`/api/v1/parentcategories/${category_slug}/${subcategory_slug}/${product_slug}/`)
                .then(response => {
                    this.product = response.data
                    document.title = this.product.name + ' | Store'
                })
                .catch(error => {
                    console.log(error)
                })
            

        },
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

<style  scoped>
.left-column {
  width: 65%;
  position: relative;
}
 
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}
.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
.product-description h1 {
  font-weight: 300;
  font-size: 52px;
  color: #43484D;
  letter-spacing: -2px;
}
.product-description p {
  font-size: 16px;
  font-weight: 300;
  color: #86939E;
  line-height: 24px;
}
.product-price {
  display: flex;
  align-items: center;
}
.product-price span {
  font-size: 26px;
  font-weight: 300;
  color: #43474D;
  margin-right: 20px;
}
.cart-btn {
  display: inline-block;
  background-color: #7DC855;
  border-radius: 6px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  transition: all .5s;
}
.cart-btn:hover {
  background-color: #64af3d;
}
</style>