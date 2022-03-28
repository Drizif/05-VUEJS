<template>
  <div class="container checkout py-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-md-8 col-lg-12">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text">Carrito</span>
        </h4>
        <ul class="list-group mb-3">
          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="CheesecakeLbl" for="Cheesecake">Cheesecake</label>
              </div>
              <div class="col">
                <p id="description0" align="justify">
                  Un pastel de queso o tarta de queso es un postre muy popular
                  desde el siglo XX hecho a base de ricota, requesón, queso
                  quark, azúcar y algunas veces otros ingredientes, tales como:
                  huevos, crema de leche o nata, harina, patata, almendras o
                  frutas.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 1"
                  id="Cheesecake"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="TiramisuLbl" for="Tiramisu">Tiramisú</label>
              </div>
              <div class="col">
                <p id="description1" align="justify">
                  El tiramisú es un pastel frío que se monta en capas. No existe
                  una receta única de elaboración, sino variantes a partir de
                  una serie de ingredientes base que pueden ser representados
                  por distintos productos.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 2"
                  id="Tiramisu"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="TresLechesLbl" for="TresLeches">Tres leches</label>
              </div>
              <div class="col">
                <p id="description2" align="justify">
                  El pastel, tarta, o torta de tres leches es un postre
                  tradicional americano.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 3"
                  id="TresLeches"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="ChocoFlanLbl" for="ChocoFlan">Choco flan</label>
              </div>
              <div class="col">
                <p id="description3" align="justify">
                  El chocoflan es una combinacion de pastel de chocolate con
                  flan napolitano.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 4"
                  id="ChocoFlan"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="OperaLbl" for="Opera">Ópera</label>
              </div>
              <div class="col">
                <p id="description4" align="justify">
                  Es una tarta un poco elaborada pero deliciosa y que encaja en
                  cualquier celebración.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 5"
                  id="Opera"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="TartaSantiagoLbl" for="TartaSantiago"
                  >Tarta de Santiago</label
                >
              </div>
              <div class="col">
                <p id="description5" align="justify">
                  La tarta de Santiago es una tarta tradicional de la cocina
                  gallega con indicación geográfica protegida.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 6"
                  id="TartaSantiago"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="GlobosLbl" for="Globos">Globos</label>
              </div>
              <div class="col">
                <p id="description6" align="justify">
                  Adorno con una variedad de hermosos globos.
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 6"
                  id="Globos"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="AniversarioLbl" for="Aniversario">Aniversario</label>
              </div>
              <div class="col">
                <p id="description7" align="justify">
                  Adorno para eventos de aniversario
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 6"
                  id="Aniversario"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <li
            class="
              list-group-item
              d-block
              justify-content-between
              lh-sm
              pedidos
            "
          >
            <div class="row">
              <div class="col">
                <label id="CumpleañosLbl" for="Cumpleaños">Cumpleaños</label>
              </div>
              <div class="col">
                <p id="description8" align="justify">
                  Adorno para eventos de cumpleaños
                </p>
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control cant 6"
                  id="Cumpleaños"
                  placeholder=""
                  min="0"
                  value="0"
                />
              </div>
            </div>
          </li>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @Click="setTotal()"
          >
            Proceder al pago
          </button>
          <div id="Modal">
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Total a pagar
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h2
                      class="card-title pricing-card-title text-center"
                      id="price"
                    >
                      <small>$0.00 MXN</small>
                    </h2>
                    <div class="row form-check">
                      <CombineFlavor />
                      <CombineOrnament />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click="checkCart()"
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CombineFlavor from "./combine-flavor.component.vue";
import CombineOrnament from "./combine-ornament.component.vue";
export default {
  name: "ShopingCart",
  components: {
    CombineFlavor,
    CombineOrnament,
  },
  mounted() {
    this.clearForm();
    this.setRestantes();
  },
  methods: {
    setTotal() {
      let total = 0;
      const descriptions = {
        data: [],
      };

      this.$store.getters.getProducts.forEach((product, i) => {
        const value = document.getElementById(`${product.id}`).value;
        total += product.price * parseInt(value);

        if (value > 0) {
          const desc = document.getElementById(`description${i}`);
          descriptions.data.push({
            name: product.name,
            description: desc.innerText,
            quantity: parseInt(value),
          });
        }
      });
      descriptions.total = total;
      if (total > 0) {
        const modal = document.getElementById("price");
        modal.textContent = `$${total.toFixed(2)} MXN`;
      }
      this.$store.commit("setCart", descriptions);
    },
    checkCart() {
      if (this.$store.getters.getCart.data.length > 0) {
        document.querySelector(".btn-close").click();
        this.$router.push("form");
      }
    },
    setRestantes() {
      this.$store.getters.getProducts.forEach((product) => {
        const productElement = document.getElementById(`${product.lbl}`);
        if (productElement) {
          const message =
            productElement.textContent.split(" ")[0] +
            ` restantes: ${product.remaining}`;
          productElement.textContent = message;
        }
      });
    },
    clearForm() {
      const inputs = document.querySelectorAll(".form-control");
      inputs.forEach((element) => (element.value = 0));
    },
  },
};
</script>