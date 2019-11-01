<template>
    <div class="box">
      <div class="angle"></div>
      <div class="angle"></div>
      <div class="angle"></div>
      <div class="angle"></div>
      <slot></slot>
    </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
  }),
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.box {
  width: 25%;
  position: relative;
  margin-bottom: 20px;
  background-color: #04294b;
}
.box .angle {
  width: 8px;
  height: 8px;
  border-left: 2px solid #0b61b2;
  border-top: 2px solid #0b61b2;
  position: absolute;
}
.box .angle:nth-of-type(1) {
  top: 0px;
  left: 0px;
}
.box .angle:nth-of-type(2) {
  top: 0px;
  right: 0px;
  transform: rotate(90deg);
}
.box .angle:nth-of-type(3) {
  bottom: 0px;
  left: 0px;
  transform: rotate(-90deg);
}
.box .angle:nth-of-type(4) {
  bottom: 0px;
  right: 0px;
  transform: rotate(180deg);
}
</style>