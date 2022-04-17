<template>

<table>
<tr>
    <th class="nev">Szolgáltatások</th>
    <th class="ar">Ár</th>

  </tr>

</table>
<table  v-for="szolgaltatas in szolgaltatasok" :key="szolgaltatas.szolgaltatasNev">

<td class="nev">{{szolgaltatas.szolgaltatasNev}}</td>
<td class="ar"> 4500 Ft</td>
</table>

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

table{
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  border:1px solid #000;;
}

td, th, tr{
  border: 1px solid #dddddd;
  padding: 8px;
  font-size: 30px;
}

.nev {
  text-align: left;
}

.ar {
  text-align: right;

}

tr:nth-child(even) {
  background-color: #dddddd;
}

</style>
