<template>
  <div class="flex flex-wrap">
    <div>
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
          <vs-card :actionable="true">
            <div slot="header">
              <h3>Hello world !</h3>
            </div>
            <div>
              <ButtonTestAuth />
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</span
              >
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  type="gradient"
                  color="danger"
                  icon="favorite"
                ></vs-button>
                <vs-button color="primary" icon="turned_in_not"></vs-button>
                <vs-button
                  color="rgb(230,230,230)"
                  color-text="rgb(50,50,50)"
                  icon="settings"
                ></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <div>
      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
          <vs-card class="cardx" :actionable="true">
            <div slot="header">
              <h3>Hello world !</h3>
            </div>
            <div slot="media">
              <img src="https://lusaxweb.github.io/vuesax/card.png" />
            </div>
            <div>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</span
              >
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button
                  type="gradient"
                  color="danger"
                  icon="favorite"
                ></vs-button>
                <vs-button color="primary" icon="turned_in_not"></vs-button>
                <vs-button
                  color="rgb(230,230,230)"
                  color-text="rgb(50,50,50)"
                  icon="settings"
                ></vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <div></div>
  </div>
</template>

<script>
import breadcrumb from '@/mixins/states/breadcrumb'
import ButtonTestAuth from '@/components/ButtonTestAuth'

export default {
  layout: 'modern',
  mixins: [breadcrumb],
  components: {
    ButtonTestAuth
  },
  mounted() {
    console.log(this.$auth)
    console.log(this.$axios)
  }
}
</script>

<style></style>
