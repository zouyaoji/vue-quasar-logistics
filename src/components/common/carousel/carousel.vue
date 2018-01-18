<template>
  <div class="carousel">
    <q-gallery-carousel infinite autoplay dots :src="gallery"/>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      gallery: [],
      arrows: false
    }
  },
  created () {
    if (this.$q.platform.is.desktop) {
      this.gallery = [
        'statics/images/1.jpg',
        'statics/images/2.jpg',
        'statics/images/3.jpg']
    }
    else if (this.$q.platform.is.mobile) {
      this.gallery = [
        'statics/images/8.jpg',
        'statics/images/8.jpg',
        'statics/images/8.jpg']
    }
  },
  methods: {
    test () {
      console.log('1')
    }
  }
}
</script>

<style>
 .q-gallery-carousel img {
   min-height: 180px;
   max-height: 650px;
 }
 .q-carousel-track > div {
   min-height: 180px;
 }
</style>
