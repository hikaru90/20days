<template>
  <div class="block w-full appear w-full">

    <input class="w-full border border-light-blue px-05 py-03 rounded"
    v-model="message"
    @keyup="update" 
    :placeholder="placeholder"
    >
    
  </div>
</template>

<script>
export default{
  data(){
    return {
      message: ''
    }
  },
  props:{
    placeholder:{
      type: String,
      default: '',
      required: true,
    }
  },
  methods:{
    update(){
      this.$emit('text-updated', this.message);
    }
  }
}
</script>

<style>

</style>
