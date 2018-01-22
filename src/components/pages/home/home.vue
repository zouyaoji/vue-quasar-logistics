<template>
  <div class="row justify-center">
    <q-gallery-carousel ref="carousel" fullscreen infinite :animation="500" :autoplay="autoplayTime" dots :horizontal-quick-view="false" :src="gallery" @slide="slide" />
    <div class="banner row justify-center">
      <!-- Example with wrapping only one DOM element / component -->
      <q-transition
        appear
        enter="zoomInDown"
        leave="fadeOut"
      >
      <h4 v-show="isBannerShow">{{ bannerMessage }}</h4>
      </q-transition>
    </div>
    <div class="container">
     
      <q-card>
        <q-card-title>
          Card Title
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          Card Content
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { animate } from 'quasar'

export default {
  name: 'home',
  data () {
    return {
      gallery: [],
      isBannerShow: false,
      autoplayTime: 5000,
      bannerMessage: '专业快捷 诚信至上 安全到达'
    }
  },
  computed: {
    ...mapGetters({
      isMobile: 'getIsMobileMode'
    })
  },
  mounted () {
    this.visible = false
    if (this.$q.platform.is.desktop) {
      this.gallery = [
        'statics/images/物流1.jpg',
        'statics/images/物流2.jpg',
        'statics/images/物流3.jpg',
        'statics/images/物流4.jpg',
        'statics/images/物流5.jpg',
        'statics/images/物流6.jpg',
        'statics/images/物流7.jpg',
        'statics/images/物流8.jpg'
      ]
    }
    else if (this.$q.platform.is.mobile) {
      this.gallery = [
        'statics/images/物流m1.jpg',
        'statics/images/物流m2.jpg',
        'statics/images/物流m3.jpg',
        'statics/images/物流m4.jpg',
        'statics/images/物流m5.jpg',
        'statics/images/物流m6.jpg',
        'statics/images/物流m7.jpg',
        'statics/images/物流m8.jpg'
      ]
    }
  },
  watch: {
    isMobile (state) {
      console.log(state)
    },
    'this.$q.platform.is.mobile' (state) {
      console.log(state)
    }
  },
  methods: {
    slide (index) {
      console.log(this.$refs.carousel)
      var vm = this
      animate.start({
        from: 0,
        to: 100,
        duration: vm.autoplayTime,
        apply (pos) {
          vm.isBannerShow = true
        },
        done () {
          vm.isBannerShow = false
        }
      })
    }
  }
}
</script>

<style>
.banner {
    position: absolute;
    float: left;
    top: 200px;
    left: 500px;
}
.q-gallery-carousel img {
  min-height: 180px;
  max-width: 100%;
  height: auto;
}
.q-carousel-track > div {
  min-height: 180px;
}
</style>
