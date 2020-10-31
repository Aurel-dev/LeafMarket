<template>
  <div class="d-flex flex-column p-5">
  <h3 class="border-bottom pb-3 text-center">Mon Panier</h3>
    <template v-if="cart.length">
      <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
      <hr class="w-100">
      <h4 class="d-flex justify-content-center">Total : {{ total }} € </h4>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem';

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