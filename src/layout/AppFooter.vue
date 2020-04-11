<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <p>{{ $t(`app.footer.lookingOtherCountry`) }}</p>
        </div>
        <div class="col-lg-6 justify-content-end">
          <span v-for="country of countries" :key="country.code">
            <span v-if="country.url !== activeCountry">
              <span v-if="country.code !== countries[0].code">|</span>
              <a :href="country.url" class="country">
                <img :src="`https://www.countryflags.io/${country.code}/flat/64.png`"
                     :alt="`${country.code} flag`"
                     target="_blank"
                     class="flag ml-1"/>
                {{ $t(`app.footer.${country.code}`) }}
              </a>
            </span>
          </span>
        </div>
      </div>
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">{{ $t('app.footer.support') }}
          </h3>
        </div>
      </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-12">
          <div class="copyright">
            &copy; {{year}}
            {{ $t('app.title') }} (v{{ version }}) | Built with the awesome theme of
            <a href="https://www.creative-tim.com/product/vue-argon-design-system">Creative Tim</a>
          </div>

          <div class="copyright">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  const countries = require('@/assets/sites.json');
  export default {
    name: 'app-footer',
    data() {
      return {
        year: new Date().getFullYear(),
        version: process.env.VERSION,
        countries: countries,
        activeCountry: window.location.origin,
      }
    },
  };
</script>

<style scoped>

  .flag {
    height: 32px;
  }

  .country {
    white-space: nowrap;
  }
  
  .btn-whatsapp {
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)
  }

  .btn-whatsapp,
  .btn-whatsapp:hover {
    color: #fff;
    background-color: #25D366;
    border-color: #25D366;
  }

  .btn-whatsapp.focus,
  .btn-whatsapp:focus {
    -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 #075E54;
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08), 0 0 0 0 #075E54;
  }

  .btn-whatsapp.disabled,
  .btn-whatsapp:disabled {
    color: #fff;
    background-color: #25D366;
    border-color: #25D366;
  }

  .btn-whatsapp:not(:disabled):not(.disabled).active,
  .btn-whatsapp:not(:disabled):not(.disabled):active,
  .show > .btn-whatsapp.dropdown-toggle {
    color: #fff;
    background-color: #25D366;
    border-color: #25D366;
  }

  .btn-whatsapp:not(:disabled):not(.disabled).active:focus,
  .btn-whatsapp:not(:disabled):not(.disabled):active:focus,
  .show > .btn-whatsapp.dropdown-toggle:focus {
    -webkit-box-shadow: none, 0 0 0 0 #075E54;
    box-shadow: none, 0 0 0 0 #075E54;
  }
</style>
