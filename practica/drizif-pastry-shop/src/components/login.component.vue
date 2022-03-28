<template>
  <div class="text-center">
    <br />
    <main class="form-signin" id="main">
      <form>
        <img
          class="mb-4"
          src="../assets/icon.png"
          alt=""
          width="100"
          height="100"
        />

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="user"
            placeholder="pastelero"
          />
          <label for="user">Usuario</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="pass"
            placeholder="Password"
          />
          <label for="pass">Contraseña</label>
        </div>

        <div class="checkbox mb-3">
          <br />
        </div>
        <button
          class="w-100 btn btn-lg btn-primary"
          type="button"
          @click="checkLogin()"
        >
          Ingresar
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    checkLogin() {
      const user = document.getElementById("user").value;
      const pass = document.getElementById("pass").value;
      this.$store.commit("checkLogin", { user, pass });
      if (this.$store.getters.checkSession) this.$router.push("order");
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>