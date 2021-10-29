<template>
    <nav aria-label="Pagination">
        <hr class="my-0">
        <ul class="my-4 pagination justify-content-center">
            <li class="page-item " :class="{'disabled' : isPageFirst}">
                <button class="page-link" href="#" tabindex="-1" aria-disabled="true" @click="ActivePagination(1)">Newer</button>
            </li>
            
            <li class="page-item " aria-current="page" v-for="page in pages" :key="page.name" :class="{'active' : page.isActive}">
                <button class="page-link" href="#!" @click="ActivePagination(page.name)"  >{{ page.name }}</button>
            </li>
    
            <li class="page-item" :class="{'disabled' :  isPageLast}">
                <button class="page-link" href="#!" @click="ActivePagination(totalPage)">Older</button>
            </li>
        </ul>
    </nav>
</template>


<script>
export default {
    props:{
        totalPage:{
            type: Number,
            required: true,
        },
        currentPage:{
            type:Number,
            required: true,
        }
    },
    data(){
        return {
            
        }
    },
    computed:{

       
        pages(){
            let range = [];
                for (let i = 1; i < this.totalPage; i++) {
                    range.push({
                        name: i,
                        isActive: i == this.currentPage
                    })
                }
                return range;
        },         
        isPageFirst(){
          return this.currentPage == 1
        },
        isPageLast(){
           return this.totalPage == this.totalPage    
        }
        
    },
    methods:{
        ActivePagination(page){
            this.$emit('ActivePagination' , page)
        }
    }
}
</script>