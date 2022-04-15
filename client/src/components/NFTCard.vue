<template>
  <v-card class="mx-auto my-12" max-width="350">
    <v-img rounded height="300" width="350" :src="nftData.nftImageUrl"></v-img>
    <div class="d-flex flex-row mt-3 ml-3">
      <v-avatar size="56">
        <img alt="user" :src="nftData.createdByAvatarUrl" />
      </v-avatar>
      <div class="d-flex flex-column" style="width: 100%">
        <div class="ml-3 pa-0 text-lg-h6">{{ nftData.title }}</div>
        <div class="d-flex flex-column">
          <div class="ml-3 pa-0 text-md-body-2">
            Created By: {{ nftData.createdBy }}
          </div>
          <!-- <v-spacer></v-spacer> -->
          <div class="d-flex justify-end">
            <div class="mr-3 mt-2 flex-reverse text-md-body-2">
              Type: {{ nftData.type }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-card-text>
      <div class="d-flex justify-center">
        <div class="mx-15 flex-column text-center">
          <div >
            <v-icon>mdi-cards-heart</v-icon>
          </div>
          <div>0</div>
        </div>
        <div class="mx-15 flex-column">
          <div class="text-center">
            <v-icon>mdi-crown</v-icon>
          </div>
          <div>1/100</div>
        </div>
        <div class="mx-15 d-flex flex-column">
          <div class="text-center">
            <v-icon>mdi-ethereum</v-icon>
          </div>
          <div>{{ nftData.price }}</div>
        </div>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn height="60" dark @click="reserve">
        <v-icon>mdi-alarm-check</v-icon>{{nftData.offerTime}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn height="60" dark @click="reserve">
        <v-icon>mdi-crown</v-icon>Place Bid
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NFTCard",
  props: {
    nftData: Object,
  },
  data: () => ({}),
};
</script>
