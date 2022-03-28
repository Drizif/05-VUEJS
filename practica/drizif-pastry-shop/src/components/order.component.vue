<template>
  <section class="py-4 text-center container table-responsive">
    <table class="table table-striped" id="table">
      <tr>
        <th>#Pedido</th>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Telefono</th>
        <th>Productos</th>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "Order",
  mounted() {
    if (this.$store.getters.checkSession) {
      const orders = this.$store.getters.getOrders;
      const table = document.getElementById("table");
      if (orders.length > 0) {
        const content = orders
          .map((ord, i) =>
            this.tableTemplate(
              i,
              ord.firstName + " " + ord.lastName,
              ord.email,
              ord.tel,
              ord.products.data,
              ord.products.total
            )
          )
          .join("\n");
        table.innerHTML += content;
      }
    }
  },
  methods: {
    tableTemplate(id, name, email, tel, products, total) {
      const clientInfo = `
    <tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${tel}</td>
    <td>
      <ul class="list-group list-group ">
  `;

      const clientProducts =
        products
          .map(
            (
              e
            ) => `\t\t<li class="list-group-item d-flex justify-content-between align-items-start pedidos pedidos">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${e.name}</div>
          </div>
          <span class="badge  rounded-pill">${e.quantity}</span>
        </li>
  `
          )
          .join("\n") +
        `\t\t<li class="list-group-item d-flex justify-content-between align-items-start pedidos pedidos">
          <div class="ms-2">
            <div class="row">
              <div class="col">
                <div class="fw-bold">Total:</div>
              </div>
              <div class="col total">
              $${total.toFixed("2")} MXN
              </div>
            </div>            
          </div>
        </li>
  ` +
        "\t  </ul>\n\t</td>";

      return clientInfo + clientProducts;
    },
  },
};
</script>