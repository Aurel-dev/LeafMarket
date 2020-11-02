<template>
    <shop-products-list :products="products" class="p-3 bg-white"></shop-products-list>
</template>

<script>
import ShopProductsList from './ShopProductsList';

export default {
    props: ['products'],
    components: {
        ShopProductsList
    }
}

</script>

<style>

</style>