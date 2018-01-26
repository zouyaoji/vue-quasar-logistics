<template>
  <div class="row justify-center">
    <q-gallery-carousel v-touch-pan.horizontal="panHandler" v-touch-swipe.horizontal="swipeHandler" ref="carousel" fullscreen infinite :animation="animateDuration"
      :autoplay="autoplayTime" dots :horizontal-quick-view="false" :src="gallery" @slide="slide" />
    <div class="banner row justify-center">
      <!-- Example with wrapping only one DOM element / component -->
      <q-transition apear :duration="animateDuration" :enter="enterTransition" :leave="leaveTransition">
        <div ref="banner" v-show="isBannerShow" v-html="bannerMessage" :style="bannerStyle"></div>
      </q-transition>
    </div>

    <div class="container">
      <q-card>
        <q-card-title>
          Card Title
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <p v-html="bannerMessage"></p>
        </q-card-main>
      </q-card>
      <div class="row">
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  // import { animate } from 'quasar'

  export default {
    name: 'home',
    data () {
      return {
        clearTimeoutID: -1,
        gallery: [],
        isBannerShow: false,
        autoplayTime: 4000,
        animateDuration: 500,
        bannerMessage: ``,
        enterTransition: 'zoomInDown',
        leaveTransition: 'bounceOutLeft',
        lastSlideIndex: '-1',
        bannerStyle: {
          position: 'absolute',
          float: 'left',
          top: '10%',
          left: '10%',
          color: 'white'
        }
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
          'statics/imgs/desktop/物流1.jpg',
          'statics/imgs/desktop/物流2.jpg',
          'statics/imgs/desktop/物流3.jpg',
          'statics/imgs/desktop/物流4.jpg',
          'statics/imgs/desktop/物流5.jpg',
          'statics/imgs/desktop/物流6.jpg',
          'statics/imgs/desktop/物流7.jpg',
          'statics/imgs/desktop/物流8.jpg'
        ]
      }
      else if (this.$q.platform.is.mobile) {
        this.gallery = [
          'statics/imgs/mobile/物流1.jpg',
          'statics/imgs/mobile/物流2.jpg',
          'statics/imgs/mobile/物流3.jpg',
          'statics/imgs/mobile/物流4.jpg',
          'statics/imgs/mobile/物流5.jpg',
          'statics/imgs/mobile/物流6.jpg',
          'statics/imgs/mobile/物流7.jpg',
          'statics/imgs/mobile/物流8.jpg'
        ]
      }
    },
    watch: {
      isMobile (state) {
        console.log(state)
      },
      'this.$q.platform.ismobile' (state) {
        console.log(state)
      }
    },
    methods: {
      swipeEasing (value) {
        // console.log(value)
      },
      slide (index) {
        var vm = this
        if (index === this.lastSlideIndex) {
          this.clearTimeoutID = setTimeout(function () {
            vm.isBannerShow = false
          }, this.autoplayTime)
          return
        }
        this.isBannerShow = true
        this.clearTimeoutID = setTimeout(function () {
          vm.isBannerShow = false
        }, this.autoplayTime)
        this.lastSlideIndex = index
        switch (index) {
          case 0: {
            this.enterTransition = 'zoomInDown'
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">高效、安全、优质、便捷”</h4>`
            this.bannerStyle.top = '15%'
            this.bannerStyle.left = '20%'
            break
          }
          case 1: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">每天传递惊喜”</h4>`
            break
          }
          case 2: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">专注综合物流服务”</h4>`
            break
          }
          case 3: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">诚信进取 、一诺千金”</h4>`
            break
          }
          case 4: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">快捷货运、行李托运、仓储服务”</h4>`
            break
          }
          case 5: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">用最初的心，做永远的事</h4>`
            break
          }
          case 6: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">每天传递惊喜”</h4>`
            break
          }
          case 7: {
            this.bannerMessage = `<h2 style="font-family:Simsun;">"送福物流</h2>
            <h4 style="font-family:Simsun;font-weight:bold;">每天传递惊喜”</h4>`
          }
        }
        if (this.$q.platform.is.desktop) {
  
        }
        else {
          this.bannerStyle.top = '5%'
          this.bannerStyle.left = '10%'
        }
      },
      panHandler (obj) {
        if (obj.isFirst) {
          clearTimeout(this.clearTimeoutID)
        }
      },
      swipeHandler (obj) {
        if (obj.distance.x < 100) {
          return
        }
        if (obj.direction === 'left') {
          this.leaveTransition = 'bounceOutLeft'
          this.isBannerShow = false
        }
        else {
          this.leaveTransition = 'bounceOutRight'
          this.isBannerShow = false
        }
      }
    }
  }
</script>

<style>
  .q-gallery-carousel img {
    min-height: 180px;
    max-width: 100%;
    height: auto;
  }

  .q-carousel-track>div {
    min-height: 180px;
  }

</style>
