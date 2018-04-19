<template>
  <div id="map-table-wrapper">
    <table id="map-table">
      <tr v-for="(row, index) in rows" :row="row" :key="index">
        <td v-for="(seat, index) in row" :key="index" @click="click(seat)">{{ seat === 0? '': seat }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExtensionMap',
  props: {
    rows: {type: Array}
  },
  methods: {
    click: function (seat) {
      if (seat !== 0) {
        this.$emit('extensionApply', seat)
      }
    }
  }
}
</script>

<style scoped>
#map-table-wrapper {
  margin-top: 100px;
  max-width: 70%;
  max-height: 65%;
  justify-self: center;
  align-self: center;
  overflow-x: auto;
  overflow-y: auto;
}

#map-table {
  text-align: center;
  font-size: 20px;
  border-spacing: 15px;
  table-layout: fixed;
}

#map-table td {
  width: 70px;
  min-width: 70px;
  height: 70px;
  background-color: gray;
  color: white;
  border-radius: 80px;
  cursor: pointer;
}

#map-table td:empty {
  background-color: rgba(0,0,0,0);
  cursor: default;
}

@media screen and (max-height: 800px) {
  #map-table td {
    height: 50px;
    min-width: 50px;
    width: 50px;
  }
}
</style>
