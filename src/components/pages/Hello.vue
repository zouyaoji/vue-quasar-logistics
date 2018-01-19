<template>
  <div class="no">
    <q-card>
  <q-card-title>
    {{count}}
  </q-card-title>
  <q-card-separator />
  <q-card-main>
    Card Content
  </q-card-main>
</q-card>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.mobileMode
    }
  }
}
</script>

<style>
  .no {
    height: 100px;
  }
</style>
