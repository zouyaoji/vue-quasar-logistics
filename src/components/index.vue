<template>
  <div class="wrapper">
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" :style="{ backgroundColor: backgroundColor}">
      <vHeader slot="header"></vHeader>
      <drawer slot="left"></drawer>
      <q-transition enter="fadeIn" leave="fadeOut" mode="out-in" :duration="300">
        <router-view />
      </q-transition>
      <q-ajax-bar ref="bar" color="red" size="5px" :delay="0" />
      <h1>{{isLoadingRoute}}</h1>
      <vFooter slot="footer"></vFooter>
    </q-layout>
  </div>
</template>

<script>
  import vHeader from '@/common/header/header'
  import drawer from '@/common/drawer/drawer'
  import vFooter from '@/common/footer/footer'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        backgroundColor: 'whitesmoke'
      }
    },
    components: {
      vHeader,
      vFooter,
      drawer
    },
    computed: {
      ...mapGetters({
        isLoadingRoute: 'getIsLoadingRoute'
      })
    },
    watch: {
      isLoadingRoute (state) {
        if (state) {
          this.$refs.bar.start()
        }
        else {
          this.$refs.bar.stop()
        }
      }
    },
    methods: {
    }
  }
</script>

<style>


</style>
