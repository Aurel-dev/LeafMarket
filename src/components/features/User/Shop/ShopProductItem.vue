<template>
  <div class="w-25 product-container d-flex flex-column bg-white">
    <div class="d-flex flex-row justify-content-center">
        <img style="height: 150px" :src="product.img" />
    </div>
    <div>
        <h3>{{ product.title }}</h3>
        <hr>
    </div>
    <div>
        <p>{{ product.description }}</p>
    </div>
    <div>
        <span>{{ product.price | price }}</span>
        <button @click="addOne(product)" class="btn btn-success btn-sm float-right">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: ['product'],
    methods: {
      ...mapMutations('cart', ['addOne'])
    }
}
</script>

<style>
.product-container {
    height: 500px;
    padding: 20px;
    margin: 10px;
    margin-bottom: 20px;
}
p {
    font-size: 12px;
}
h3 {
    margin-top: 20px;
}
</style>