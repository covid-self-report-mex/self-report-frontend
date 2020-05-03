<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex" style="top: -8rem">

          <div class="col text-white">
            <p>
              <base-button class="mb-3 mb-sm-0 d-block btn-block"
                           @click="openAirTable()"
                           type="warning"
                           icon="fa fa-ambulance">
                {{ $t('faq.register') }}

              </base-button>
            </p>
            <p>
              <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1cTOL4bChRmErkI5pxtj6nKuQ9soc7Ckb" width="100%" height="480">
              </iframe>
            </p>
            <p>
              <iframe class="airtable-embed" src="https://airtable.com/embed/shru7dSwjEWxq2GB9?backgroundColor=blue&viewControls=on"
                      frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;">
              </iframe>
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
        methods:{
            openAirTable: function () {
                window.open("https://airtable.com/shroRQ6P9z3gLxo0h/", "_blank");
            }
        }
    };

</script>

<style scoped>

</style>
