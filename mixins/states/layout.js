export default {
  computed: {
    activeSidebar: {
      get() {
        return this.$store.state.activeSidebar
      },
      set(value) {
        this.$store.commit('SET_ACTIIVE_SIDEBAR', value)
      }
    }
  }
}
