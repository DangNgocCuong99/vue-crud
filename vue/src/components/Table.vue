<template>
  <div class="table"  style="text-align:left" >
    <input/>
    <button>Search</button> <br/><br/>
    <input/>
    <button>ADD</button>
    <button>Update</button> <br/><br/>
    <table>
      <thead>
        <tr>
          <th>STT  &emsp;</th>
          <th >Tên</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listItem" :key="index" style="text-align: left">
          <td>{{ index+1 }}</td>
          <td >{{ item.name }}</td>
          <td>
            <button>SELECT</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    listItem: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClg(){
      console.log(this.listItem)
    }
  }
};
</script>

<style scoped lang='scss'>
</style>