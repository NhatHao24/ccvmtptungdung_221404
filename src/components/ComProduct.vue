<template>
  <div class="col mb-4">
        <div class="card">
            <img :src="product.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">
               ${{product.price}}
                <br/>
                <small>
                {{product.description}}
                </small>
            </p>
            <button class="btn btn-primary btn-block" >Add To Cart</button>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name:"ComProduct",
    props:['product'],//  1object
}
</script>

<style>

</style>