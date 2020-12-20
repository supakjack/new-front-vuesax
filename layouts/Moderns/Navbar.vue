<template>
  <div>
    <vs-navbar v-model="activeSidebar" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <vs-button
            @click="activeSidebar = !activeSidebar"
            color="dark"
            type="flat"
            icon="menu"
          ></vs-button>
        </vs-navbar-title>
      </div>

      <div class="flex flex-col">
        <p class="text-gray-600">OBAMA</p>
        <p class="text-gray-600">60160022</p>
      </div>
      <vs-dropdown>
        <vs-avatar
          size="large"
          src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
        />

        <vs-dropdown-menu>
          <vs-dropdown-item> My Profile </vs-dropdown-item>
          <vs-dropdown-group>
            <vs-dropdown-item> option 1 </vs-dropdown-item>
            <vs-dropdown-item> option 2 </vs-dropdown-item>
          </vs-dropdown-group>
          <vs-dropdown-item divider>
            <div class="flex flex-row" @click="logout">
              <div><vs-icon icon="exit_to_app" color="#BC1254"></vs-icon></div>
              <div><span> Logout </span></div>
            </div>
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </vs-navbar>
  </div>
</template>
<script>
import layout from '@/mixins/states/layout'
export default {
  mixins: [layout],
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style lang="css" scoped>
.dropdown-content {
  width: auto;
}
</style>
