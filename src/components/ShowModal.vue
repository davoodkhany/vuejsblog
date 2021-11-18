<template>
    <div class="modal" tabindex="-1" :class="{'show' : !active }" :style = " active ? 'display:block' : 'display:none' ">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('CloseModal')"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('CloseModal')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {reactive,toRefs} from 'vue'
export default {
    
    props:{
        active :{
            type: Boolean,
            required:true,
        }
    },


  setup(props){
    
      var {active} = toRefs(props);
     
      return {
        active
      }
  }
}

</script>