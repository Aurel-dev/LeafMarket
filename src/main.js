import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue ({
  data: {
    products: [ {
      id: '1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
      title: 'MacBook',
      description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
      price: '1500,00 €'
    },
    {
      id: '2',
      img: 'https://www.notebookcheck.biz/uploads/tx_nbc2/2-103-e1587727512700.jpg',
      title: 'Asus Vivobook',
      description: 'Léger, simple d\'utilisation, double écran qui rendra votre méthode de travail très fonctionnelle',
      price: '950,00 €',
    },
    {
      id: '3',
      img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
      title: 'PC Gamer Portable MSI',
      description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
      price: '1250,00 €',
    },
    {
      id: '4',
      img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
      title: 'PC Gamer Portable MSI2',
      description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
      price: '1250,00 €',
    },
    {
      id: '5',
      img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
      title: 'PC Gamer Portable MSI3',
      description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
      price: '1250,00 €',
    },
    {
      id: '6',
      img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
      title: 'PC Gamer Portable MSI4',
      description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
      price: '1250,00 €',
    },
    {
      id: '7',
      img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
      title: 'PC Gamer Portable MSI5',
      description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
      price: '1250,00 €',
    },
  ],
    cart: [
      
    ]
  },
  methods: {
    addProductToCart(product) {
      if(!this.cart.map( i => i.id).includes(product.id) ) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id );
      this.$emit('update:cart', this.cart.slice());
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
