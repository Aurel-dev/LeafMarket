<template>
  <div class="d-flex flex-column p-5">
  <img src="https://static.vecteezy.com/system/resources/previews/000/583/276/non_2x/online-basket-icon-vector.jpg" height="380">
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
import { mapGetters } from 'vuex';

export default {
    components: {
        CartProductItem
    },
    props: [ 'cart' ],
    computed: {
      ...mapGetters('cart', ['total'])
    },
}
</script>

<style>
img {
  border-radius: 200px;
}
</style>