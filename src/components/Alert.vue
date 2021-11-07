<template>
  <div class="alert alert-success" role="alert">
    <slot name="title">
      <h2>My Name Is Ali</h2>
    </slot>
    <slot></slot>

    <slot name="description" :item="name"></slot>
  </div>
</template>



<script>

    export default {
        data(){
            return {
                name: "davood khany",    
            }
        }
    }

</script>