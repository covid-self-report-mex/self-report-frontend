<template>
  <header class="header-global">
    <base-nav class="navbar-main mt-lg-0 mt-3" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/logo_alpha.png" alt="logo"> {{ $t('app.title') }}
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-8 collapse-brand">
          <img src="img/brand/logo_white_app.png" alt="logo"> {{ $t('app.title') }}
        </div>
        <div class="col-4 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center" >
        <li class="nav-item" >
          <router-link class="nav-link" to="/report">
            <button type="button" class="btn btn-dark btn-sm d-none d-lg-inline">
              <i class="fa fa-send"></i> 
              {{ $t('report.title') }}
            </button>
            <span class="d-md-inline d-lg-none">
              {{ $t('report.title') }}
            </span>
          </router-link>
        </li>

        <li class="nav-item" >
          <router-link class="nav-link text-nowrap" to="/">
              {{ $t('visualize.title') }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/faq">
            {{ $t('faq.title') }}
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-nowrap" to="/about">
            {{ $t('about.title') }}
          </router-link>
        </li>

        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link text-nowrap" data-toggle="dropdown" role="button">
            <i class="ni ni-bold-down"></i>
            <span class="nav-link-inner--text">
              <i class="fa fa-language"></i>Idioma
            </span>
          </a>
          <a href="" class="dropdown-item" @click.prevent="setLocale('es')">Español</a>
          <a href="" class="dropdown-item" @click.prevent="setLocale('en')">English</a>
        </base-dropdown>

        <li v-if="socialLinkWhatsapp" class="nav-item">
          <a class="nav-link nav-link-icon"
             :href="`https://wa.me/?text=${$t('app.footer.whatsappshare')} ${socialLinkWhatsapp}`"
             target="_blank" rel="noopener"
             data-toggle="tooltip" title="Share on WhatsApp">
            <i class="fa fa-whatsapp"></i>
            <span class="nav-link-inner--text d-lg-none">WhatsApp</span>
          </a>
        </li>

        <li v-if="socialLinkInstagram" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkInstagram" target="_blank"
             rel="noopener"
             data-toggle="tooltip" title="Follow us on Instagram">
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>

        <li v-if="socialLinkFacebook" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkFacebook"
             target="_blank"
             rel="noopener"
             data-toggle="tooltip" title="Like us on Facebook">
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>

        <li v-if="socialLinkGithub" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkGithub"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Get the data on Github">
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
      </ul>
    </base-nav>
    <div class="container mt-0 mb-0" style="z-index: 9999;position: relative; top:-.2rem" >
      <div class="row row-grid">
        <div class="col text-center">
          <span v-for="country of countries" :key="country.code">
              <span v-if="country.code !== countries[0].code" class="country">|</span>
              <a :href="country.url" class="country">
                <img :src="`https://www.countryflags.io/${country.code}/flat/64.png`"
                     :alt="`${country.code} flag`"
                     target="_blank"
                     class="flag ml-1"/>
                {{ $t(`app.footer.${country.code}`) }}
              </a>
            </span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import BaseNav from "@/components/BaseNav";
  import BaseDropdown from "@/components/BaseDropdown";
  import CloseButton from "@/components/CloseButton";
  const countries = require('@/assets/sites.json');
  export default {
    components: {
      BaseNav,
      CloseButton,
      BaseDropdown
    },
    data() {
      return {
        countries: countries,
        activeCountry: window.location.origin,
      }
    },
    methods: {
      setLocale: function (locale) {
        this.$i18n.locale = locale;
        localStorage.setItem('locale', locale);
      }
    }
  };
</script>
<style>
  .flag {
    height: .8rem;
  }

  .country {
    white-space: nowrap;
    font-size: .6rem;
  }

  .header-global {
    z-index: 1000;
  }

  .collapse-brand img {
    height: 24px !important;
    width: 24px !important;
  }
</style>

