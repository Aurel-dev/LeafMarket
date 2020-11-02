import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios;

Object.keys(Filters).forEach( (f) => {
  Vue.filter(f, Filters[f]);
})

export const eventBus = new Vue ({
  data: {
    products: [],
    cart: [
      
    ],
    page: 'User'
  },
  methods: {
    addProductToCart(product) {
      if(!this.cart.map( i => i.id).includes(product.id)) {
        this.cart = [ ...this.cart, product ];
        this.$emit('update:cart', this.cart.slice());
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id );
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page) {
      this.page = page;
      this.$emit('update:page', this.page);
    } ,
    addProduct(product) {
      this.products = [ ...this.products, { ...product, id: this.products.length + 1 + '' }],
      this.$emit('update:products', this.products);
    }
  },
  created() {
    [ 
      {
        id: '1',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7ekQ3gBH4qgpA_rFjIi5BRHelutd--Q0xhf76XENxHC_gpsIZA',
        title: 'MacBook',
        description: 'Quand nous avons créé le MacBook, nous avons tout simplement tenté l\'impossible. C\'est le plus fin et le plus léger de nos ordinateurs portables',
        price: 1500.00
      },
      {
        id: '2',
        img: 'https://www.notebookcheck.biz/uploads/tx_nbc2/2-103-e1587727512700.jpg',
        title: 'Asus Vivobook',
        description: 'Léger, simple d\'utilisation, double écran qui rendra votre méthode de travail très fonctionnelle',
        price: 950.00
      },
      {
        id: '3',
        img: 'https://www.stealth-gamer.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/c/pc_portable_msi_gl65_9sd-216xfr_1.png',
        title: 'PC Gamer Portable MSI',
        description: 'Dominez le jeu avec le PC Portable MSI GL65 - Ecran 120Hz - Processeur i7 10eme génération - GTX 1660Ti',
        price: 1250.00
      },
      {
        id: '4',
        img: 'data:image/jpeg;base64,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',
        title: 'Asus ROG G703',
        description: 'Graphics are handled by an overclockable Nvidia GeForce GTX 1080 graphics card with 8GB GDDR5X that, according to the company.',
        price: 1800.00
      },
      {
        id: '5',
        img: 'https://static.fnac-static.com/multimedia/Images/FR/MDM/e2/0e/1a/1707746/1540-0/tsp20180327114010/PC-Portable-Gaming-Acer-Predator-21-X-GX21-71-76VC-21-Incurve.jpg',
        title: 'Predator',
        description: 'The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.',
        price: 2300.00
      }
    ].forEach( p => {
      this.$http.post('https://boutiquevue-48471.firebaseio.com/products.json', p);
    })
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
