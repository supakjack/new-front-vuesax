<template lang="html">
  <div id="parentx">
    <vs-sidebar
      parent="body"
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="activeSidebar"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" :src="headerSidebarPicture" />

        <h4>Learn Programming Platform</h4>
      </div>

      <div
        v-for="item in require('@/layouts/Moderns/sidebarList')"
        :key="item.index"
      >
        <vs-sidebar-group v-if="item.group" :title="item.group">
          <vs-sidebar-item
            v-for="item in item.list"
            :key="item.index"
            :index="uniqId"
            :icon="item.icon"
          >
            {{ item.title }}
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item v-else :index="uniqId" :icon="item.icon">
          {{ item.title }}
        </vs-sidebar-item>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import layout from '@/mixins/states/layout'
import { nanoid } from 'nanoid'
export default {
  mixins: [layout],
  data() {
    return {
      headerSidebarPicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlcPHWk3qc3xi9HpHsEkke_4hQEt2XohzMg&usqp=CAU'
    }
  },
  computed: {
    uniqId() {
      return nanoid(4)
    }
  }
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
