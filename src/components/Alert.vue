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
export default {
    data() {
        return {
            title : 'hi hesam'
        }
    },
    mounted() {
        console.log(this.$slots)
    }
}
</script>