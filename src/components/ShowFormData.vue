<template>
  <div>{{ name }}</div>

  <div>{{ family }}</div>

  <button @click="reset()" class="btn btn-primary">Click</button>
</template>

<script>
import { computed } from "vue";

export default {
  emits: ["reset"],
  props: {
    name: {
      type: String,
      require: true,
    },
    family: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    
    
    const name = computed(() => "title : " + props.name);
    const family = computed(() => "family: " + props.family);

    function reset(){
        context.emit('reset')
    }
    return {
      name,
      family,
      reset
    };
  },
};
</script>