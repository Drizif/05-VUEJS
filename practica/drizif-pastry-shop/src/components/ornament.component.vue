<template>
  <div class="container py-3">
    <h2><span>Adornos</span></h2>

    <br />
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_822176-MLM42068323653_062020-O.jpg"
            class="card-img-top"
            width="100rem"
            height="225rem"
            alt="..."
          />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-title">Globos</h4>
              <h4 class="card-title pricing-card-title">
                <small>$19.99 MXN</small>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src="https://m.media-amazon.com/images/I/51wwWTHb2TL._AC_SX466_.jpg"
            class="card-img-top"
            width="100rem"
            height="225rem"
            alt="..."
          />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-title">Aniversario</h4>
              <h4 class="card-title pricing-card-title">
                <small>$9.99 MXN</small>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img
            src="https://m.media-amazon.com/images/I/81wUD+igp1L._AC_SX679_.jpg"
            class="card-img-top"
            width="100rem"
            height="225rem"
            alt="..."
          />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="card-title">Cumpleaños</h4>
              <h4 class="card-title pricing-card-title">
                <small>$9.99 MXN</small>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cake",
};
</script>