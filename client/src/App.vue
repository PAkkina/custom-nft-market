<template>
  <v-app>
      <MarketPlace/>
  </v-app>
</template>

<script>
import MarketPlace from './components/MarketPlace';

export default {
  name: 'App',

  components: {
    MarketPlace,
  },

  data: () => ({
    //
  }),
};
</script>
