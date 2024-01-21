<template>
  <div>
    {{ id }}
    <ul class="properties">
      <li>Name: {{ name }}</li>
      <li>Weight: {{ weight }} kg</li>
      <li>Category: {{ calculateCategory(weight) }}</li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "weight"],
  computed: {
    calculateCategory: function () {
      return (weight) => {
        if (weight <= 80) {
          return "Lightweight";
        } else if (weight >= 95) {
          return "Heavyweight";
        } else {
          return "Middleweight";
        }
      };
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
hr {
  border-top: 3px solid;
}
.properties {
  font-size: 15px;
}
</style>
