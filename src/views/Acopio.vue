<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex" style="top: -6rem">
          <div class="col text-white">



            <p>
              <base-button class="mb-sm-0 d-block btn-block  mt-2"
                           @click="beforeEnter()"
                           type="danger"
                           icon="fa fa-heartbeat">
                {{ $t('acopio.register') }}
              </base-button>
            </p>

            <p>
              <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1cTOL4bChRmErkI5pxtj6nKuQ9soc7Ckb" width="100%" height="480"></iframe>
            </p>
            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block mt-2"
                           @click="$router.replace({ name: 'report' })"
                           type="dark"
                           icon="fa fa-send">
                {{ $t('report.button') }}
              </base-button>
            </p>
            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block  mt-2"
                           @click="$router.replace({ name: 'visualize' })"
                           type="warning"
                           icon="fa fa-map">
                {{ $t('visualize.button') }}
              </base-button>
            </p>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>

    export default {
        name: "acopio",
        components: {},
        data() {
            return {}
        },
        methods: {
            beforeEnter() {
                location.href = process.env.VUE_APP_AT
            },
        },
    };

</script>

<style scoped>

</style>
