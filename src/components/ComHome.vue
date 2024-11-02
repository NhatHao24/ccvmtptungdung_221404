<template>
  <div>
    <Products v-for="item in products" :key="item.id" :product="item"/>
  </div>
</template>

<script>
import items from '../data/items'
import Products from './ComProduct.vue'
export default {
    name:'ComHeader',
    components:{
      Products,
    },
    data(){
      return{
        products:items
      }
    }
}
</script>

<style>

</style>