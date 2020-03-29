# COVID Self report

This repository hosts the frontend code of the covid-self-report project.

This project is based on [Vue.js](https://github.com/vuejs/) and vue-cli, using [Argon design template from Creative Tim](https://www.creative-tim.com/product/argon-design-system).

## Getting started

For front-end developers, please check the [develop section](#develop) section.

### Pre-requisite

The following things are needed:

- A domain name (e.g. covid-self-report.ch)
- A hosting server (we are using firebase, but it's not mandatory)
- An instance of [self-report-backend](https://github.com/ch-covid-19/self-report-backend) running
- A reCAPTCHA API configuration
- A reports data source
- A geocoding data source
- URLs of the social platforms that have to be linked (share buttons)
- A development environment to build the front-end

#### Settings up reCAPTCHA

1. Go to https://www.google.com/recaptcha/admin/create
2. Fill th form :
    - Use reCAPTCHA version 3
    - Add your domain name (also add 'localhost' if used for development)
    - Send
3. Copy the site key, it will be useful for the frontend configuration

#### Report data source

The reports data source is an online CSV file containing a summary of the reports by location, summed by status.

You can check the format [here](https://github.com/ch-covid-19/datasets).

A second file containing the last update time of the data source has also to be provided (last_update.txt). It's an ASCII text file containing the date in ISO format.

The report data source is generated by consolidation scripts in the [backend](https://github.com/ch-covid-19/self-report-backend).

This file must available online with a very high uptime and huge load capacity. It is used for the visualization and will be downloaded by each user.

#### Geocoding data source

The geocoding data source is an online CSV file containing, for each location, the name of the location and the geographical coordinates.

You can check the format [here](https://github.com/ch-covid-19/geo-locations).

The geocoding data source has to be set up for each country.

This file must available online with a very high uptime and huge load capacity. It is used for the visualization and will be downloaded by each user.

#### Local development environment

The frontend uses vue-cli. Please refer to the [official documentation](https://cli.vuejs.org/) for setup instructions.

### Setup

  1. Clone this repository
  2. Create a `.env` file based on the `.env.example` file and fill it with your configuration. See below to learn more about the configuration.
  4. Run `npm run serve` to test locally and `npm run build` to build application

#### Configuration

1. Setup the data source and geocoding data URLs
2. Set the recaptcha key (not the secret) with the value from the reCAPTCHA console.
3. Set the github repository of your fork for the issues reporting
4. Set the social links for the desired platforms
5. Configure the URL for the backend endpoint to your backend instance.

## Develop

If you want to develop on the front-end, you can set-up the configuration with existing data sources from an already running instance.

For example, to point to the Swiss data source, put this in your .env file:
```
VUE_APP_VISU_DATA_SOURCE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master
VUE_APP_VISU_GEOCODE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master/geocoding.csv
VUE_APP_VISU_LAST_UPDATE_URL=https://raw.githubusercontent.com/ch-covid-19/datasets/master/last_update.txt

```

## Contribute

Contributions are welcome through merge requests.

This section will be updated soon...
