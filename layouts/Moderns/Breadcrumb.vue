<template>
  <vs-row vs-justify="center" class="mt-3">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="11">
      <vs-card>
        <h3>
          <vs-breadcrumb
            align="left"
            :items="breadcrumb"
            separator="chevron_right"
          ></vs-breadcrumb>
        </h3>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import breadcrumb from '@/mixins/states/breadcrumb'

export default {
  mixins: [breadcrumb]
}
</script>

<style></style>
