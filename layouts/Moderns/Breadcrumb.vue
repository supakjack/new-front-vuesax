<template>
  <vs-row vs-justify="center" class="mt-3">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="11">
      <vs-card :actionable="true">
        <h3>
          <vs-breadcrumb align="left" separator="chevron_right">
            <ol class="breadcrumb">
              <li
                v-for="item in breadcrumb"
                :key="item.title"
                class="breadcrumb-item"
              >
                <nuxt-link :to="item.url" active-class="active">
                  / {{ item.title }} 
                </nuxt-link>
              </li>
            </ol>
          </vs-breadcrumb>
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

<style lang="css" scoped>
ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
}

li a {
  display: block;
  text-decoration: none;
}
</style>
