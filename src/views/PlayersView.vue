<template>
  <div>
    <h2>Boxers on {{ date }}:</h2>
    <hr />
    <div class="container-fluid p-2 d-flex flex-wrap">
      <ul>
        <player-card
          v-for="player in getPlayers"
          v-bind="player"
          class="id"
        >
        </player-card>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePlayerStore } from "../stores/players";
export default {
  data() {
    return {
      date: new Date().toLocaleDateString("hr-HR"),
    };
  },
  computed: {
    ...mapState(usePlayerStore, ["getPlayers"]),
  },
  methods: {
    ...mapActions(usePlayerStore, ["refreshPlayers"]),
  },
  async mounted() {
    await this.refreshPlayers();
  },
};
</script>

<style scoped>
.id {
  font-size: 20px;
}
h2 {
  font-size: 30px;
}
</style>
