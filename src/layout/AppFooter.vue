<template>
  <footer class="footer has-cards">
    <div class="container">
      <p style="clear: both;">
      <div class="row row-grid align-items-center my-2">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">{{ $t('app.footer.partner') }}
          </h3>
        </div>
      </div>
      <a href="https://www.unam.mx/" target="_blank">
        <img src="img/partners/unam-large.png" alt="UNAM" style="float:left" width="300rem">
      </a>
      <p style="clear: both;">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">{{ $t('app.footer.support') }}
          </h3>
        </div>
      </div>      
      <div class="copyright">
            {{ $t('app.footer.comments') }}
            <a href="mailto:info@covid-me-reporto.mx" target="_blank">{{ $t('app.footer.here') }}</a>
          </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-12">
          <div class="copyright">
            Part of the project
            <a href="http://covid-self-report.org" target="_blank">Covid Self Report</a>
          </div>
          <div class="copyright">
            &copy; {{year}}
            {{ $t('app.title') }} (v{{ version }}) | Built with the awesome theme of
            <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank">Creative Tim</a>
          </div>

          <div class="copyright">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'app-footer',
    data() {
      return {
        year: new Date().getFullYear(),
        version: process.env.VERSION
      }
    },
  };
</script>

<style scoped>
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
