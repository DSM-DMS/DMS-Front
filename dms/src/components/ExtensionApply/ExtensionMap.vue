<template>
  <div id="map-table-wrapper">
    <table id="map-table">
      <tr v-for="(row, index) in rows" :row="row" :key="index">
        <td v-for="(seat, index) in row" :key="index" @click="$emit('extensionApply', seat)">{{ seat === 0? '': seat }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExtensionMap',
  props: {
    rows: {type: Array}
  }
}
</script>

<style scoped>
#map-table-wrapper {
  margin-top: 100px;
  width: 80%;
  height: 60%;
  overflow-x: auto;
  overflow-y: auto;
}

#map-table {
  text-align: center;
  font-size: 20px;
  border-spacing: 15px;
  margin: 0 auto;
  table-layout: fixed;
}

#map-table td {
  width: 70px;
  height: 70px;
  background-color: gray;
  color: white;
  border-radius: 80px;
  cursor: pointer;
}

#map-table td:empty {
  background-color: rgba(0,0,0,0);
}
</style>
