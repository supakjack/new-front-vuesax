<template>
  <div>
    <Navbar />
    <Breadcrumb />
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="11">
        <div>
          <Nuxt />
        </div>
      </vs-col>
    </vs-row>
    <Sidebar />
    <Footer />
  </div>
</template>
<script>
import Sidebar from '@/layouts/Moderns/Sidebar'
import Navbar from '@/layouts/Moderns/Navbar'
import Breadcrumb from '@/layouts/Moderns/Breadcrumb'
import Footer from '@/layouts/Moderns/Footer'
export default {
  components: {
    Sidebar,
    Navbar,
    Breadcrumb,
    Footer
  }
}
</script>
