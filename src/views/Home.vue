<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://oroscafe.hu/wp-content/uploads/2021/03/210318_Kutyakozmetika.jpg",
        "https://www.pet4you.hu/img/big/820.jpg",
        "https://www.pet4you.hu/img/big/452_1.jpg",
        "https://adatlistazo.hu/wp-content/uploads/2022/03/miert-fontos-a-kutyakozmetika-1.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

}
</script>
