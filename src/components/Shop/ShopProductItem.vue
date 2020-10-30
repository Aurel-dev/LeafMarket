<template>
  <div class="w-25 product-container d-flex flex-column">
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
        <span>{{ product.price }}</span>
        <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            product: {
                img: 'https://www.notebookcheck.biz/uploads/tx_nbc2/2-103-e1587727512700.jpg',
                title: 'Asus Vivobook',
                description: 'Léger, simple d\'utilisation, double écran qui rendra votre méthode de travail très fonctionnelle',
                price: '950,00 €',
            }
        }
    }
}
</script>

<style>
.product-container {
    height: 400px;
    padding: 20px;
}
p {
    font-size: 12px;
}
</style>