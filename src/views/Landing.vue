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
            <p class="text-white"><b>{{ $t('app.welcome1') }}</b></p>

            <p>
              <base-button class="mb-sm-0 d-block btn-block mt-2"
                           @click="beforeEnter()"
                           type="danger"
                           icon="fa fa-heartbeat">
                {{ $t('acopio.register') }}
              </base-button>
            </p>
            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block mt-2"
                           @click="$router.replace({ name: 'acopio' })"
                           type="success"
                           icon="fa fa-map">
                {{ $t('acopio.button') }}
              </base-button>
            </p>
            <p class="text-white"><b>{{ $t('app.welcome2') }}</b></p>

            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block mt-2"
                           @click="$router.replace({ name: 'report' })"
                           type="dark"
                           icon="fa fa-send">
                {{ $t('report.button') }}
              </base-button>
            </p>
            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block mt-2"
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
        name: "faq",
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
