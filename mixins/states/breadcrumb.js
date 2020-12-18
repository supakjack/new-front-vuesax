export default {
  computed: {
    breadcrumb: {
      get() {
        return this.$store.state.breadcrumb
      },
      set(value) {
        this.$store.commit('SET_BREADCRUMB', value)
      }
    }
  }
}
