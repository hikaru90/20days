<template>
  <button class="inline-block cursor-pointer bg-green rounded-md shadow px-07 py-05 mt-1" 
  @click="print">
    Print motivational Poster
  </button>
</template>

<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  props:{
  },
  methods:{
    print(){
      window.print();
    }
  }
}
</script>

<style>

</style>
