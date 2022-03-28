<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/navbar.component.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
li a {
  text-decoration: none;
}

.container {
  background-color: #ffc5ed !important;
  border-radius: 1rem;
}

.navbar {
  background-color: #ffc5ed !important;
}

body {
  background-color: #89b6ff !important;
}

.card {
  background-size: cover;
  border-radius: 1rem;
}

.pedidos {
  background-color: #ffc5ed !important;
}

.badge {
  background-color: #89b6ff !important;
}

.card {
  background-color: #89b6ff !important;
}

.card-img-top {
  border-radius: 1rem;
}

.total {
  position: absolute;
  text-align: right;
  right: 10px;
}

.modal-content {
  border-radius: 1rem;
}

.navbar-collapse {
  justify-content: end;
}
</style>
