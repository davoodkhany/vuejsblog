<template>
    <section class="jumbotron">
        <div class="container d-flex flex-column align-items-center">
            <h1 class="jumbotron-heading">Welcome!</h1>
            <p class="lead text-muted">To get started, add some items to your list:</p>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="I want to do ..." v-model="todo">
                    <button class="btn btn-primary" @click="todoadd" >add</button>
                </div>
            </div>
    </section>
</template>


<script>

    export default {
        
        data(){
            return{
                todo :'',
            }
        },
        methods: {
               todoadd(){
                this.$emit('todoadd', this.todo)
                this.todo = ""
               } 
        }
    }


</script>