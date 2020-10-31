<template>
    <form class="d-flex flex-column">
        <h4>Ajouter un produit</h4>
        <hr class="w-100">
        <div class="form-group">
            <label>Image</label>
            <input v-model="form.img" type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label>Titre</label>
            <input v-model="form.title" type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea v-model="form.description" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label>Prix</label>
            <input v-model.number="form.price" type="number" class="form-control" />
        </div>
        <button class="btn btn-success">Ajouter</button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            form: {
                img: '',
                title: '',
                description: '',
                price: ''        
            },
            errors: []
        }
    }
}
</script>

<style>

</style>