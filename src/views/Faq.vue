<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex" style="top: -5rem">

          <div class="col text-white">        

            <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1cTOL4bChRmErkI5pxtj6nKuQ9soc7Ckb" width="100%" height="480"></iframe>

            <base-button class="mb-3 mb-sm-0 d-block btn-block"
                           @click="openAirTable()"
                           type="warning"
                           icon="fa fa-send">
                {{ $t('faq.register') }}
            </base-button>

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
