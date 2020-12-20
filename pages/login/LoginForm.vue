<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card>
        <div slot="header">
          <h3>Login !</h3>
        </div>
        <div>
          <div class="centerx labelx">
            <vs-input
              label="Username"
              placeholder="Placeholder"
              v-model="username"
            />
            <vs-input
              type="password"
              label="Password"
              placeholder="Disabled"
              v-model="password"
            />
          </div>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button
              type="gradient"
              color="danger"
              icon="favorite"
              @click="login"
              >Login</vs-button
            >
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(e) {
      console.log(this.$auth)
      e.preventDefault()
      const payload = {
        username: this.username,
        password: this.password
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload
        })
        console.log(this.$auth.strategy.token.get())
        console.log(this.$auth)
        console.log(this.$axios)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style></style>
