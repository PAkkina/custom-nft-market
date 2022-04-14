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
          <div class="d-flex flex-row">
            <v-card :loading="loading" class="mx-auto my-12" max-width="350">

              <v-img
                rounded
                height="300"
                src="https://lh3.googleusercontent.com/Fc9MM6INy2LvI_9kgvD_I03EXk_jo2sdcZn4EpX5PsmYCMm3QQYs7rlkt_Yim5CDMf_n0C_cFAmyDeCEB59w_yf_59kcucB0sAAJTZM=w600"
              ></v-img>
              <div class="d-flex flex-row mt-3 ml-3">
                <v-avatar size="56">
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <div class="d-flex flex-column">
                  <div class="ml-3 pa-0 text-lg-h6">Metaverse</div>
                  <div class="ml-3 pa-0 text-md-body-2">Created By:</div>
                </div>
              </div>

              <v-card-text>
                <div class="d-flex flex-row">
                  <v-spacer></v-spacer>
                  <div>/100</div>
                  <v-spacer></v-spacer>
                  <div>ETH</div>
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn height="60" dark @click="reserve">
                  <v-icon>mdi-alarm-check</v-icon>12d 13h 56m
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn height="60" dark @click="reserve">
                  <v-icon>mdi-crown</v-icon>Place Bid
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="d-flex flex-row mx-15 text-gallery-header-section-r">
          Explore All
        </div>
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
  font-size: 20px;
  font-weight: bold;
}
</style>

<script>
export default {
  name: "MarketPlace",
  data: () => ({
    links: ["About", "Collections", "Fan Drop", "NFT Hunt"],
  }),
};
</script>