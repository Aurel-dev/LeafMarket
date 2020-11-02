import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const product = {
    state: {
        datas: []
    }
}

const cart = {
    state: {
        datas: []
    }
}

const store = Vuex.Store({
    modules: {
        product,
        cart
    }
})