<template>
  <div class="d-flex flex-rox justify-content-between px-5 p-2">
    <span style="width:200px;">{{ item.title }}</span>
     <span><strong>{{ item.price }} €</strong></span>
     <button @click="removeItemFromCart" class="close">
      <span>&times;</span>
     </button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: ['item'],
  methods: {
    removeItemFromCart() {
      eventBus.removeItemFromCart({
        ...this.item
      });
    }
  }
}
</script>

<style>

</style>