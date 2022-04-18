<template>

<h1 id="title">Doggo Session</h1>
<h1>Miért érdemes a Doggo Session-t választani?</h1>


  <p>Nagy türelemmel és szeretettel vagyok kutyád felé, úgy viszonyulok hozzá, mintha a sajátom lenne.</p>
  <p>Kizárólag magas szakmai színvonalú kutyakozmetikai szolgáltatásokat nyújtok, így kedvenced a legjobb kezekben van.</p>
  <p>Minden esetben a fajtajelleget, valamint a gazdi igényeit együttesen figyelembe véve alakítom ki a végleges fazont és formát.</p>
  <p>A félénk vagy nehezen kezelhető kutyusokkal is könnyen megtalálom a közös hangot.</p>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
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
   mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 2000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


<style>

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:450px;
  width:50%
}

#title{
  font-size: 80px;
  margin-bottom: 30px;
}
p{
  text-align: center;
  font-size: 20px;
}

h1{
  margin-bottom: 30px !important;
}
</style>