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
  display: inline-block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 60%;
  transform: translate(-50%, -50%);
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
}

#map-table td:empty {
  background-color: rgba(0,0,0,0);
}
</style>
