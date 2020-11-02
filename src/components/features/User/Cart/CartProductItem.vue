<template>
  <div class="d-flex flex-rox justify-content-between px-5 p-2">
    <span style="width:200px;">{{ item.title }}</span>
     <span><strong>{{ item.price | price }}</strong></span>
     <button @click="deleteOne(item.id)" class="close">
      <span>&times;</span>
     </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['item'],
  methods: {
    ...mapMutations('cart', ['deleteOne'])
  }
}
</script>

<style>

</style>