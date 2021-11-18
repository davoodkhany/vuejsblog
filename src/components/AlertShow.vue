<template>
    <div class="alert alert-success" role="alert">
        <div v-if="$slots.title">
            <slot name="title" :item="title"></slot>
            <span>this is title</span>
        </div>
       
        <slot></slot>  
        <hr>
        <slot name="temp"></slot>  
    </div>
</template>


<script>

import {onMounted}  from 'vue';

export default {

    setup(){
       const  title = 'hi davood'
        
        function  onMounted(){
            console.log('davood');
        }
        
        return { 
        title
            
        }
    }
    
}
</script>