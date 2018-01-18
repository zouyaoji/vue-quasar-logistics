<template>
  <div class="wrapper">
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" :style="{ backgroundColor: backgroundColor}">
    <vHeader slot="header"></vHeader>
    <drawer slot="left"></drawer>
    <q-transition enter="fadeIn" leave="fadeOut" mode="out-in" :duration="300">
      <router-view />
    </q-transition>
    <q-ajax-bar ref="bar" :delay="0" :position="position" :size="computedSize" color="red"/>
    <vFooter slot="footer"></vFooter>
  </q-layout>
  </div>
</template>

<script>
  import vHeader from '@/common/header/header'
  import drawer from '@/common/drawer/drawer'
  import vFooter from '@/common/footer/footer'

  export default {
    name: 'home',
    data () {
      return {
        backgroundColor: 'whitesmoke',
        position: 'top',
        size: 4,
        delay: 10
      }
    },
    components: {
      vHeader,
      vFooter,
      drawer
    },
    created () {
  
    },
    mounted () {
      this.$q.events.$on('loadingRoute')
      this.$q.events.$on('barStop', this.barStop)
    },
    beforeDestroy () {
      this.$q.events.$off('barStart', this.barStart)
      this.$q.events.$off('barStop', this.barStop)
    },
    computed: {
      computedSize () {
        return this.size + 'px'
      }
    },
    watch: {
      loadingRoute (status) {
        console.log('a')
        if (status) {
          this.$refs.bar.start()
        }
        else {
          this.$refs.bar.stop()
        }
      }
    },
    methods: {
  
      barStop () {
        this.$refs.bar.stop()
      }
    }
  }
</script>

<style>


</style>
