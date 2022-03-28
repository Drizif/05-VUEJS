<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link to="/">
          <a class="navbar-brand">
            <img
              src="../assets/icon.png"
              alt=""
              :style="{ width: '4rem', height: '4rem' }"
            />
          </a>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <h5>
                <router-link to="/shopping-cart">
                  <a class="nav-link">Generar pedido</a>
                </router-link>
              </h5>
            </li>
            <li class="nav-item">
              <h5>
                <router-link v-if="!$store.getters.checkSession" to="/login">
                  <a class="nav-link">Iniciar sesion</a>
                </router-link>
                <router-link v-if="$store.getters.checkSession" to="/order">
                  <a class="nav-link">Pedidos</a>
                </router-link>
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
