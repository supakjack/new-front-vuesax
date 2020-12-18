<template>
  <div>
    <Navbar />
    <!-- <Breadcrumb /> -->
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="11">
        <vs-card>
          <Nuxt />
        </vs-card>
      </vs-col>
    </vs-row>
    <Sidebar />
  </div>
</template>
<script>
import Sidebar from '@/layouts/Moderns/Sidebar'
import Navbar from '@/layouts/Moderns/Navbar'
// import Breadcrumb from '@/layouts/Moderns/Breadcrumb'
export default {
  components: {
    Sidebar,
    Navbar,
    // Breadcrumb
  }
}
</script>
