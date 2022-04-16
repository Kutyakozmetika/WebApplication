<template>
<div class="container">
  <div class="row">
    
      <div class="card col-lg-12 col-md-6 col-sm-12 p-1" v-for="szolgaltatas in szolgaltatasok" :key="szolgaltatas.szolgaltatasNev">
        
        <div class="card-header">

          <h4>{{szolgaltatas.szolgaltatasID}} </h4>
          <h1>{{szolgaltatas.szolgaltatasNev}}</h1>
         

        </div>
        
        <div class="card-body" >

          
        <img id="img" src="../assets/dog.png"> 

        </div>

        <div class="card-footer">
          
          <h3>Időtartam: {{szolgaltatas.idotartam}} perc</h3>

    
        </div>

      
  
   
      </div>
    
  </div>
</div>

  
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      szolgaltatasok: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5000/api/szolgaltatas")
      .then(response => {
         this.szolgaltatasok = response.data
      })
      
  }
};

</script>

<style>

.card-header{
  background-color: lightblue !important;
}



.card-footer{
  background-color: lightblue !important;
  
}

.card{
  margin-bottom: 50px !important;
}

#img{
  float:left;
}



</style>