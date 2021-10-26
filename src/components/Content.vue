
<template>
<div class="container">
            <div class="row">
                <!-- Blog entries-->
                <div class="col-lg-8">
                    <!-- Nested row for non-featured blog posts-->
                    <div class="row">
                        <div class="col-lg-6">
                            <Card></Card>
                            <Card></Card>
                        </div>
                        <div class="col-lg-6">
                            <Card></Card>
                            <Card></Card>
                        </div>

                    </div>
                    <!-- Pagination-->
                    <nav aria-label="Pagination">
                        <hr class="my-0">
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget-->
                    <div class="card mb-4">
                        <searchbox></searchbox>               
                    </div>
                    <!-- Categories widget-->
                        <Categories></Categories>
                    <!-- Side widget-->
                    <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>


import searchbox from "./searchbox.vue";
import Card from "./Card.vue";
import Categories from "./Categories.vue";

import axios from "axios";

export default {
    components:{
    searchbox,
    Card,
    Categories
},
    data(){
        return{
            article:[]
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => {

           let Article = Object.entries(data).map(([key, value]) =>{
               
        }) 
        })
        .catch(err => console.log(err))
    },


    methods:{

    }
}
</script>

