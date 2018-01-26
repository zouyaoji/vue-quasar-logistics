<template>
  <q-scroll-area style="width: 100%; height: 100%;" :delay="1500" :thumb-style="{
    right: '2px',
    borderRadius: '5px',
    background: scrollAreaBackground,
    width: '5px',
    opacity: 0.8
  }">
    <q-list no-border link inset-separator highlight>
      <q-list-header>导航菜单
        <img src="~assets/imgs/logo2.png" style="height: 24px" class="float-right vertical-middle">
      </q-list-header>
      
      <template v-for="(item, index) in $router.options.routes[1].children" v-if="item.show">
        <q-side-link :key="index" item :to="item.path" v-if="item.children == null">
          <q-item-side :icon="item.faIcon" />
          <q-item-main :label="item.name" :sublabel="item.sublabel" />
        </q-side-link>
        <q-collapsible :key="index" :icon="item.faIcon" :label="item.name" :sublabel="item.sublabel" v-else>
          <template v-for="(subItem, subIndex) in item.children" v-if="subItem.show">
            <q-side-link :key="subIndex" item :to="subItem.path">
              <q-item-side :icon="subItem.faIcon" />
              <q-item-main :label="subItem.name" :sublabel="subItem.sublabel" />
            </q-side-link>
          </template>
        </q-collapsible>
      </template>
    </q-list>
  </q-scroll-area>
  
</template>

<script>
  export default {
    name: 'drawer',
    data () {
      return {
        scrollAreaBackground: '#4e8ca8'
      }
    }
  }
</script>