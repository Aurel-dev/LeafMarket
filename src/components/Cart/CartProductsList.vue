<template>
  <div class="d-flex flex-column p-5">
  <h5 class="border-bottom pb-3 text-center">Mon panier</h5>
    <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
    <hr class="w-100">
  </div>
</template>

<script>
import CartProductItem from './CartProductItem.vue';

export default {
    components: {
        CartProductItem
    },
    props: [ 'cart' ]
}
</script>

<style>

</style>