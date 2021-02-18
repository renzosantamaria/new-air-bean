import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock.js'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderHistory: [],
    products: [],
    user: null,
    isLoggedIn: false,
    currentOrder: [],
    orderDetails: null,

    navBarIsActive:false,
    cartIsActive:false
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [Mutations.SET_USER](state, payload) {
      state.user = payload
    },
    [Mutations.SET_LOGGED_IN](state) {
      state.isLoggedIn = true
    },

    [Mutations.ADD_TO_CART](state, payload) {
      // if (state.currentOrder[payload.title]) {
      //   state.currentOrder[payload.title].amount++;
      // } else {
      //   payload.amount = 1;
      //   state.currentOrder[payload.title] = payload
      // } -------- ORIGINAL KODEN --------------
  
      if (!state.currentOrder.find(product => product.id == payload.id)) {
        state.currentOrder.push({
          id: payload.id,
          title: payload.title,
          desc: payload.desc,
          price: payload.price,
          amount: 1 
        })
      }else{
        const foundProduct = state.currentOrder.find(product => product.id == payload.id)
        foundProduct.amount++
      }
        
     
    },
    [Mutations.SET_ORDER_DETAILS](state, payload) {
      state.orderDetails = payload
    },
    [Mutations.SET_ORDER_HISTORY](state, payload) {
      state.orderHistory = payload
    },

    [Mutations.TOGGLE_NAVBAR](state){
      state.navBarIsActive = !state.navBarIsActive
    },

    [Mutations.TOGGLE_CART](state){
      state.cartIsActive = !state.cartIsActive
    },
    [Mutations.INCREASE_PRODUCT_AMOUNT](state, payload){
      const foundProduct = state.currentOrder.find(product => product.id == payload.id)
      foundProduct.amount++
    },
    [Mutations.DECREASE_PRODUCT_AMOUNT](state, payload){
      const foundProduct = state.currentOrder.find(product => product.id == payload.id)
      foundProduct.amount--
    },
    [Mutations.REMOVE_PRODUCT](state, payload){
      const foundProduct = state.currentOrder.find(product => product.id == payload.id)
      state.currentOrder.splice(state.currentOrder.indexOf(foundProduct), 1);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await API.fetchProducts()
      commit(Mutations.SET_PRODUCTS, products)
    },
    async fetchOrderHistory({ commit }) {
      const orderHistory = await API.fetchOrderHistory()

      commit(Mutations.SET_ORDER_HISTORY, orderHistory)
    },
    async registerUser({ commit }, payload) {
      const user = await API.registerUser(payload.name, payload.email)
      commit(Mutations.SET_USER, user)
      commit(Mutations.SET_LOGGED_IN)
    },
    checkUserExists({ commit }) {
      const user = API.userExists()

      if (user) {
        commit(Mutations.SET_USER, user)
        commit(Mutations.SET_LOGGED_IN)
      }

    },
    addToCart({ commit }, payload) {
      
      commit(Mutations.ADD_TO_CART, payload)
    },
    increaseAmount({ commit }, payload) {
      commit(Mutations.INCREASE_PRODUCT_AMOUNT, payload)
    },
    decreaseAmount({ commit }, payload) {
      commit(Mutations.DECREASE_PRODUCT_AMOUNT, payload)
    },
    removeProduct({ commit }, payload) {
      commit(Mutations.REMOVE_PRODUCT, payload)
    },
    async makeOrder({ commit, state }) {
      let userId = state.user.id

      const orderDetails = await API.makeOrder(userId, state.currentOrder)
      commit(Mutations.SET_ORDER_DETAILS, orderDetails)
    },

    toggleNavBar({commit}){
      commit(Mutations.TOGGLE_NAVBAR)
    },
    toggleCart({commit}){
      commit(Mutations.TOGGLE_CART)
    },

  },
  getters: {
    getProducts: state => state.products,
    getCurrentOrderLength: state => state.currentOrder.length,
    getCurrentOrder: state => state.currentOrder,
    getNavBarIsActive: state => state.navBarIsActive,
    getCartIsActive: state => state.cartIsActive,
  }
})
