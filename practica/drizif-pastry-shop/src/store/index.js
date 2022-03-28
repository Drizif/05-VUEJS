import { createStore } from 'vuex'

export default createStore({
  state: {
    pastelero: {
      user: 'pastelero',
      pass: '1234',
      session: false,
    },
    products: [
      {
        id: 'Cheesecake',
        name: 'Cheesecake',
        lbl: 'CheesecakeLbl',
        price: 199.99,
        remaining: 100
      },
      {
        id: 'Tiramisu',
        name: 'Tiramisú',
        lbl: 'TiramisuLbl',
        price: 249.99,
        remaining: 100
      },
      {
        id: 'TresLeches',
        name: 'Tres Leches',
        lbl: 'TresLechesLbl',
        price: 299.99,
        remaining: 100
      },
      {
        id: 'ChocoFlan',
        name: 'Choco Flan',
        lbl: 'ChocoFlanLbl',
        price: 149.99,
        remaining: 100
      },
      {
        id: 'Opera',
        name: 'Ópera',
        lbl: 'OperaLbl',
        price: 349.99,
        remaining: 100
      },
      {
        id: 'TartaSantiago',
        name: 'Tarta de Santiago',
        lbl: 'TartaSantiagoLbl',
        price: 249.99,
        remaining: 100
      },
      {
        id: 'Globos',
        name: 'Globos',
        lbl: 'GlobosLbl',
        price: 19.99,
        remaining: 100
      },
      {
        id: 'Aniversario',
        name: 'Aniversario',
        lbl: 'AniversarioLbl',
        price: 9.99,
        remaining: 100
      },
      {
        id: 'Cumpleaños',
        name: 'Cumpleaños',
        lbl: 'CumpleañosLbl',
        price: 9.99,
        remaining: 100
      },
    ],
    cart: null,
    orders: []
  },
  getters: {
    checkSession(state) {
      return state.pastelero.session;
    },
    getProducts(state) {
      return state.products;
    },
    getCart(state){
      return state.cart;
    },
    getOrders(state){
      return state.orders;
    }
  },
  mutations: {
    checkLogin(state, { user, pass }) {
      if (user === state.pastelero.user && pass === state.pastelero.pass) state.pastelero.session = true;
    },
    changeUrl(state, { url }) {
      this.$router.replace(url)
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    updateOrders(state, orders){
      state.orders.push(orders);
    },
    updateProducts(state, products){
      state.products = products;
    }
  },
  actions: {
  },
  modules: {
  }
})
