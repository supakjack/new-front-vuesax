export default {
  methods: {
    async testConnection() {
      try {
        const result = await this.$axios.get('/test')
        console.log(this.$auth.strategy.token.status())
        console.log(result)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
