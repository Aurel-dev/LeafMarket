<template>
  <div class="d-flex flex-column p-5">
  <h5 class="border-bottom pb-3 text-center text-success">Mon Panier</h5>
    <template v-if="cart.length">
      <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
      <hr class="w-100">
      <h4 class="d-flex justify-content-center">Total : {{ total }} € </h4>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem.vue';

export default {
    components: {
        CartProductItem
    },
    props: [ 'cart' ],
    computed: {
    total() {
    return this.cart.reduce((acc, v) => acc += v.price, 0);
    }
},
}
</script>

<style>

</style>