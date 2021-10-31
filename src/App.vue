<template>
  <div class="container mt-5">
    <ul class="mb-3 nav nav-pills" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab.id" > 
    <button class="nav-link " :class="{'active' : CurrentTab == tab.name }" @click="CurrentTab = tab.name"  type="button" >{{ tab.name }}</button>
  </li>

</ul>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" v-for="tab in tabs" :key="tab.id" v-show="tab.name == CurrentTab">{{ tab.content }}</div>
</div>
  </div>
</template>



<script>

export default {
  data(){
    return { 
      CurrentTab:'Home',
      tabs:[
        {id:1, name:'Home', content:'lorem ipsum dolor sit amet'},
        {id:2, name:'About', content:'lorem ipsum dolor sit am' },
        {id:3, name:'Contact', content:'lotrem ipsum dolor sit'}
      ],
      
    }
  },
  
}

</script>


