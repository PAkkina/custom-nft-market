<template>
  <v-app id="inspire" style="background: white">
    <v-app-bar app color="white" flat>
      <v-img
        class="mx-10"
        :src="require('../assets/pbitals.png')"
        max-height="100"
        max-width="120"
        contain
      ></v-img>

      <v-spacer></v-spacer>

      <v-btn text> About </v-btn>
      <v-btn text> Collections </v-btn>
      <v-btn text> Fan Drop </v-btn>
      <v-btn class="mr-5" text> NFT Hunt </v-btn>
      <v-avatar class="mr-5" color="grey darken-1" size="32">
        <img alt="Avatar" :src="require('../assets/Male_avatar.png')" />
      </v-avatar>
      <v-btn dark> Connect Wallet </v-btn>
    </v-app-bar>

    <v-main class="white">
      <div class="mt-15">
        <v-sheet color="white" fluid>
          <v-row>
            <v-col cols="8">
              <div class="front-message-1 pl-15">
                Collect and port your favorite PB Designs to the metaverse
              </div>
              <div class="front-message-2 pl-15">
                Launching the digital and phygital NFT Collections
              </div>
              <v-btn x-large class="mt-10 ml-15" dark>Explore</v-btn>
            </v-col>
            <v-col cols="4">
              <v-img
                :src="require('../assets/NFT_Man.png')"
                class="mx-2"
                max-height="500"
                contain
              ></v-img>
            </v-col> </v-row
        ></v-sheet>
      </div>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column mx-15">
          <div class="text-gallery-header-section-l">Trending NFTs</div>

          <v-btn-toggle class="mt-2" v-model="toggle_one" rounded mandatory>
            <v-btn> Auctions </v-btn>

            <v-btn> Fixed Price </v-btn>
          </v-btn-toggle>
        </div>

        <v-spacer></v-spacer>
        <div class="d-flex flex-row mx-15 text-gallery-header-section-r">
          Explore All
        </div>
      </div>
      <div class="d-flex flex-row mx-15" style="overflow-x: scroll">
        <NFTCard
          class="mr-5"
          v-for="(nft, index) in nfts"
          :key="index"
          :nftData="nft"
        />
      </div>
    </v-main>
  </v-app>
</template>
<style scoped>
.front-message-1 {
  font-size: 70px;
  font-family: inherit;
  font-weight: bold;
}
.front-message-2 {
  font-size: 50px;
  font-family: fangsong;
}
.text-gallery-header-section-l {
  font-size: 30px;
  font-weight: bold;
}
.text-gallery-header-section-r {
  font-size: 25px;
  font-weight: bold;
}
</style>

<script>
import NFTCard from "./NFTCard.vue";
import { sampleNFTJson } from "../sample-data/sample-nfts";
export default {
  name: "MarketPlace",
  components: {
    NFTCard,
  },
  data: () => ({
    nfts: sampleNFTJson,
    links: ["About", "Collections", "Fan Drop", "NFT Hunt"],
  }),
};
</script>