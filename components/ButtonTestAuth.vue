<template>
  <vs-button color="primary" type="filled" @click="testConnection"
    >Test Auth Connection</vs-button
  >
</template>

<script>
import auth from '@/mixins/apis/tests/auth'
export default {
  mixins: [auth]
}
</script>
