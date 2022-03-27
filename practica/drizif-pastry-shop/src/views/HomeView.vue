<template>
  <div class="home">
    <Info />
    <div class="album py-5">
      <Cake />
      <br />
      <Ornament />
    </div>
  </div>
</template>

<script>
import Info from "@/components/info.component.vue";
import Cake from "@/components/cake.component.vue";
import Ornament from "@/components/ornament.component.vue";

export default {
  name: "HomeView",
  components: {
    Info,
    Cake,
    Ornament,
  },
};
</script>
