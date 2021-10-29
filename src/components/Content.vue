
<template>
<div class="container">
            <div class="row">
                <!-- Blog entries-->
                <div class="col-lg-8">
                    <!-- Nested row for non-featured blog posts-->
               <div class="col-lg-12">
                    <Card  :post="articles[0]" ></Card>
                </div>
                    <div class="row">
                        <div class="col-lg-6" v-for="(Groupby ,index) in articles.slice(1)" :key="index">
                            <Card v-for="(article ,index ) in Groupby" :key="index" :post="article"></Card>
                        </div>
                    </div>
                    <!-- Pagination-->
                    <Pagination :totalPage="page.totalPage"  :currentPage="page.currentPage" @ActivePagination="activePage" ></Pagination>
                </div>
                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget-->
                    <div class="mb-4 card">
                        <searchbox></searchbox>               
                    </div>
                    <!-- Categories widget-->
                        <Categories></Categories>
                    <!-- Side widget-->
                    <div class="mb-4 card">
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
import Pagination from "./Pagination.vue";

import axios from "axios";
import _ from "underscore";

export default {
    components:{
    searchbox,
    Card,
    Categories,
    Pagination
},
    data(){
        return{
            articles:[],
            page:{
                currentPage:1,
                totalPage :0,
            }

        }
    },
    created(){
        this.getData(1);
    },


    methods:{

        
        activePage(page){
            this.getData(page)            
        },
        
        getData(page = 1){
                    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&?_limit=9`)
        .then(res => {
            let articles = res.data;
            let main = articles.shift();
           
            this.articles = [main, ... _.chunk(articles,2)]
            console.log(res)
            this.page.currentPage = page
            this.page.totalPage = parseInt(parseInt(res.headers['x-total-count'] / 9))
        
            

        }) 
    
        .catch(err => console.log(err))
        }
    }
}
</script>

