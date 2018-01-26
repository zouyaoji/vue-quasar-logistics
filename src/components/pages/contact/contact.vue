<template>
  <div class="contact">
    <div class="justify-center row">
      <div class="contact-header relative-position non-selectable">
        <img src="~assets/imgs/header-bg-default-left.svg" class="absolute-left responsive">
        <img src="~assets/imgs/header-bg-default-right.svg" class="absolute-right responsive">
        <h1 style="text-align: center">Let's make something great together</h1>
      </div>
      <h4 class="text-center">成都送福物流有限公司</h4>
    </div>
    <div class="contact-content row container">
      <div class="col-xs-12 col-sm-6">
        <q-card>
          <q-card-title>
            公司地址：
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-icon name="fa-home" />
            成都市新都区南丰大道40号（皇花泰来仓库内）
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card>
          <q-card-title>
            联系方式：
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-icon name="local phone" />
            13550052259 (乔先生)
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card>
          <q-card-title>
            送福邮箱：
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-icon name="mail" />
            123456.qq.com
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card>
          <q-card-title>
            联系微信：
          </q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-icon name="fa-weixin" />
            123456.qq.com
          </q-card-main>
        </q-card>
      </div>
    </div>
    <div class="map container">
      <baidu-map class="bm-view" :dragging="false" :center="center" :zoom="zoom" @ready="ready" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom">
        <bm-marker :position="{lng: 104.063207, lat: 30.760804}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE" @click="infoWindowOpen">
          <bm-info-window :position="center" title="成都送福物流有限公司" :offset="{ width: 0, height: 0 }" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
            <p v-html="infoWindow.contents"></p>
          </bm-info-window>
        </bm-marker>
        <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{ width: 80, height: 22 }"/>
        <bm-control anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{ width: 10, height: 60 }">
          <q-btn @click="locate" class="back-map">
            <q-icon name="ion-android-locate" />
          </q-btn>
          <q-btn @click="addZoom(1)">
            <q-icon name="ion-android-add-circle" />
          </q-btn>
          <q-btn @click="addZoom(-1)">
            <q-icon name="ion-android-remove-circle" />
          </q-btn>
        </bm-control>
      </baidu-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      map: null,
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 1,
      infoWindow: {
        show: true,
        contents: '地址：成都市新都区南丰大道40号（皇花泰来仓库内）<br/>联系电话：13550052259 (乔先生)'
      }
    }
  },
  methods: {
    ready ({ BMap, map }) {
      this.center.lng = 104.063207
      this.center.lat = 30.760804
      this.zoom = 18
    },
    infoWindowClose () {
      this.infoWindow.show = false
    },
    infoWindowOpen () {
      this.infoWindow.show = true
    },
    locate () {
      this.center.lng = 104.063207
      this.center.lat = 30.760804
      this.zoom = 18
      this.infoWindow.show = true
    },
    addZoom (level) {
      this.zoom = this.zoom + level
    },
    syncCenterAndZoom (e) {
      const { lng, lat } = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    }
  }

}
</script>

<style>
.contact-header {
  padding-top: 6rem;
  padding-bottom: 6rem;
  background-color: #f0efec;
  width: 100%;
}

.bm-view {
    /* width: 100%; */
    height: 400px;
  }

.bm-view .q-btn {
  display: block;
  width: 24px;
  height: 24px;
}

</style>
