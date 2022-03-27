<template>
  <div class="squared">
    {{ $store.state.counter }} <sup>2</sup>= {{ $store.getters.squared }}
  </div>
</template>

<script>
export default {
  name: "Squared",
};
</script>
