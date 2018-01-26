<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}" :style="{ backgroundColor: backgroundColor}">
    <v-header slot="header"></v-header>
    <drawer slot="left"></drawer>
    <q-transition enter="fadeIn" leave="fadeOut" mode="out-in" :duration="300">
      <router-view />
    </q-transition>
    <q-ajax-bar ref="bar" color="red" size="5px" :delay="0" />
    <v-footer slot="footer"></v-footer>
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn
        v-back-to-top
        round
        color="primary"
        icon="keyboard_arrow_up"
      />
    </q-fixed-position>
  </q-layout>
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
      scrollHandler (scroll) {
        console.log(scroll)
      }
    }
  }
</script>

<style>
.aa {
  background-color: #4e8ca8
}
</style>
