<template>
                <div class="todoList">
                <div class="container">
                    <div class="d-flex flex-column align-items-center">
                        <nav class="mb-3 col-6">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active font-weight-bold" id="nav-home-tab">undone <span class="badge badge-secondary">9</span></a>
                                <a class="nav-item nav-link font-weight-bold" id="nav-profile-tab">done <span class="badge badge-success">9</span></a>
                            </div>
                        </nav>
 
                        <div class="mb-2 col-6" v-for="todo in todos" :key="todo.id">
                            <div class="p-3 border rounded d-flex justify-content-between align-items-center">
                                <div>
                                    {{ todo.Content }}
                                </div>
                                <div>
                                    <button class="btn btn-info btn-sm">edit</button>
                                    <button class="ml-1 btn btn-danger btn-sm">delete</button>
                                </div>
                            </div>
                        </div>
 
                    </div>
                </div>
            </div>

            
</template>


<script>

    export default {
        props:[
            'todos'
        ],
    }

</script>