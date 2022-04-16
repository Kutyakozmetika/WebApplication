<template>
  
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

</style>