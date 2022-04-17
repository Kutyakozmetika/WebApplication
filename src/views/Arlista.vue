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
    axios.get("http://localhost:5000/api/szolgaltatas%22")
      .then(response => {
         this.szolgaltatasok = response.data
      })

  }
};

</script>