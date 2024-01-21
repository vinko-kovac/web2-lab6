<template>
  <form>
    <div class="form-group row">
      <label for="kilograms" class="col-sm-4 col-form-label">Kilograms</label>
      <div class="col-4">
        <input
          type="number"
          id="kilograms"
          class="form-control"
          placeholder="kg"
          v-model.number="weightKilograms"
          @keyup="kg2lbs"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="pounds" class="col-4 col-form-label">Pounds</label>
      <div class="col-4">
        <input
          type="number"
          id="pounds"
          class="form-control"
          placeholder="lbs"
          v-model.number="weightPounds"
          @keyup="lbs2kg"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      weightKilograms: 0,
      weightPounds: 0,
    };
  },
  methods: {
    kg2lbs() {
      this.weightPounds = Math.round(this.weightKilograms * 2.205);
    },
    lbs2kg() {
      this.weightKilograms = Math.round(this.weightPounds * 0.454);
    },
  },
};
</script>
