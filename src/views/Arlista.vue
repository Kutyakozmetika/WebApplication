

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