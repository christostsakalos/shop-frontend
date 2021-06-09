<template>
<q-page class="q-ma-md">
<div class="row">
<div class="col-lg-5 col-md-2 col-sm-12 col-xs-12">
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <h1 class="text-h5">Cart</h1>
            </div>

                      <q-markup-table 
      title="Cart Items" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                 </q-markup-table>

                <p v-else>You don't have any products in your cart...</p>
</div>
<div class="col-lg-2 q-pl-md q-ml-md"><br>
                <h2 class="text-h5">Summary</h2>

                <strong>{{ cartTotalPrice.toFixed(2) }}$</strong>, {{ cartTotalLength }} items

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Proceed to checkout</router-link>
</div>
</div>
</q-page>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
    name: 'Cart',
    components: { 
        CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    },

}
</script>