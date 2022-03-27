<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <Squared />
    <Buttons />
  </div>
</template>

<script>
import Counter from "../components/counter.vue";
import Squared from "../components/squared.vue";
import Buttons from "../components/buttons.vue";

export default {
  name: "HomeView",
  components: {
    Counter,
    Squared,
    Buttons,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

.squared {
  font-size: 25px;
}
</style>