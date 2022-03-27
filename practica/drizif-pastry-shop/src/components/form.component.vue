<template>
  <div class="container checkout py-3">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-md-8 col-lg-12">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text">Facturacion</span>
        </h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Apellido</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
                required=""
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Dirección</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="tel" class="form-label">Telefono</label>
              <input
                type="number"
                class="form-control"
                id="tel"
                max="9999999999"
                required=""
              />
              <div class="invalid-feedback">
                Please enter your telephone number.
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address" />
            <label class="form-check-label primary" for="same-address"
              >La dirección de envío es la misma que la de facturación</label
            >
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info"
              >Guardar esta información para la próxima vez</label
            >
          </div>

          <hr class="my-4" />

          <h4 class="mb-3">Metodo de pago</h4>

          <div class="my-3">
            <div class="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                checked=""
                required=""
              />
              <label class="form-check-label" for="credit"
                >Tarjeta de credito/debito</label
              >
            </div>

            <div class="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="form-check-input"
                required=""
              />
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label"
                >Nombre en la tarjeta</label
              >
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-muted"
                >Nombre completo que aparece en la tarjeta</small
              >
              <div class="invalid-feedback">Name on card is required</div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label"
                >Número de tarjeta</label
              >
              <input
                type="number"
                class="form-control"
                id="cc-number"
                placeholder="1111-2222-3333-4444"
                required=""
                minlength="16"
                maxlength="16"
                max="9999999999999999"
              />
              <div class="invalid-feedback">Card number is required</div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiración</label>
              <input
                type="month"
                class="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input
                type="password"
                class="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
                maxlength="3"
                max="999"
              />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Pagar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>