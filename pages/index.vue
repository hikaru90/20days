<template>
  <div class="appear max-container">
    <div class="flex justify-around items-center flex-wrap laptop:flex-no-wrap">
      
      <div class="">
        <h1 class="font-heading text-5xl font-bold">
          20 Day Challenge
        </h1>

        <form action="javascript:void(0);">
          <Input :placeholder="title" @text-updated="updateText" />

          <PrintButton />
        </form>


      </div>

      <div class="w-12 h-16 shadow-xl bg-white mt-2 laptop:mt-0">
        <div id="a4-canvas" class="relative">

          <div class="w-2/3 block mx-auto mt-1/5">

            <div class="inner-container">
              <div class="heading font-heading font-bold ">
                {{ text }}
              </div>

              <div>
                <span class="label">
                  Start 
                </span>
                <span class="line text-light-blue">
                  {{ $moment().format('L') }}
                </span>
              </div>
              <div>
                <span class="label">
                  End
                </span>
                <span class="line">
                  {{ $moment().add(30, 'days').format('L') }}
                </span>
              </div>
            </div>




            <div class="checkbox-container relative w-full flex flex-wrap justify-center items-center">

                <template v-for="i in 20">
                    <div class="checkbox" :key="i">
                        
                    </div>
                </template>

            </div>



          </div>



        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {

data(){
  return{
    title: 'Which task do you need a little motivation with?',
    text: 'Task',
  }
},
methods:{
  updateText(params){
    this.text = params
  }
}

}
</script>

<style lang="scss">

*{
  //box-shadow: inset 0 0 0 1px grey;
}

body {
  -webkit-print-color-adjust: exact !important;
  @apply text-black;
}

.max-container {
  margin: 0 auto;
  @apply px-1;
  width:100%;
  max-width: 1280px;
  @media screen and (min-width: theme('screens.ipad')){
    @apply px-2;
  }
}

@media screen{
  #a4-canvas {
    font-size: 12px;
  }
}

@media print {
  body * {
    visibility: hidden;
  }
  #a4-canvas, #a4-canvas * {
    visibility: visible;
  }
  #a4-canvas {
    position: absolute;
    left: 0;
    top: 0;
    @apply w-full;
    @apply h-full;
    font-size: 30px;
  }
}

.heading{
  font-size: 2em;
  margin-bottom: 0.5em;
}

.label{
  @apply inline-block;
  width: 2.4em;
}

.line{
  @apply relative;
  @apply font-date;
  @apply underline;
}

.inner-container{
  margin-bottom: 1em;
}

$width: 20%;
$margin: 0.5em;

.checkbox-container{
  margin-left: - $margin;
  margin-right: - $margin;
}
.checkbox{
  @apply block;
  padding: $margin;
  width: $width;
}
.checkbox:after {
  content: "";
  display: block;
  padding-bottom: 100%;
  @apply bg-light-blue;
  @apply rounded;
}











.appear {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

</style>
