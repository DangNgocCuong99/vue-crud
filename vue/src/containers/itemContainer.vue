<template>
  <div class="studentContainer">
    <Item :listItem="listItem" />
  </div>
</template>

<script>
import Item from "../components/Table";
import * as types from "../store/itemModule/types";
import { mapState, mapActions } from "vuex";
export default {
  setup() {},
  components: {
    Item
  },
  computed: {
    ...mapState({
      listItem: state => state.item.listItem,
    })
  },
  mounted() {
    this.getListItem();
  },
  methods: {
    ...mapActions({
      getListItem: "item/" + types.GET_ITEM_REQUEST,
    }),
  }
};
</script>

<style scoped>

</style>