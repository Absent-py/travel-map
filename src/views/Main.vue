<template>
    <div style="width: 100vw; height: 100vh;">
        {{ coordinates }}
        <l-map ref="map" v-model:zoom="zoom" v-model:center="coordinates" :useGlobalLeaflet="false">
            <l-tile-layer 
                url="http://tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
            ></l-tile-layer>
        </l-map>
    </div>
    
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "DemoComponent",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 10,
      coordinates: [0, 0]
    };
  },
  mounted() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
        this.coordinates = coordinates
      })
  },
  
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

/* main {
  height: 100vh;
  width: 100vw;
} */
</style>