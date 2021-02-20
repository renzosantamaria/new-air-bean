import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock.js'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderHistory: [],
    products: [],
    users: null,
    isLoggedIn: false,
    currentOrder: [],
    orderDetails: null,

    navBarIsActive: false,
    cartIsActive: false,
    confirmationBoxActive: false,
    countDown: {min:0, sec: 0},
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [Mutations.SET_USER](state, payload) {
      state.users = payload
    },
    [Mutations.SET_LOGGED_IN](state) {
      state.isLoggedIn = true
    },

    [Mutations.ADD_TO_CART](state, payload) {

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
    },
    [Mutations.TOGGLE_CONFIRMATION_BOX](state){
      state.confirmationBoxActive = !state.confirmationBoxActive
    },
    [Mutations.CLEAR_CURRENT_ORDER](state){
      state.currentOrder = []
    },
    [Mutations.SET_COUNTDOWN](state, payload){
      state.countDown = payload
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
      const users = await API.registerUser(payload)
      commit(Mutations.SET_USER, users)
      commit(Mutations.SET_LOGGED_IN)
      
    },
    checkUserExists({ commit }) {
      const users = API.userExists()
      if (users) {
        commit(Mutations.SET_USER, users)
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
    //-------------------------------------------------------
    async makeOrder({ commit, state }) {
      let timeLeft = 0
      let seconds = 0 
      let userId

      if (state.isLoggedIn) {
        userId = state.users[0].id
      }else{
        userId = null
      }
      
      const orderDetails = await API.makeOrder(userId, state.currentOrder)
      commit(Mutations.SET_ORDER_DETAILS, orderDetails)
      commit(Mutations.SET_COUNTDOWN, null)
      
      const users = API.userExists()
      if (users) {
        commit(Mutations.SET_USER, users)
        commit(Mutations.SET_LOGGED_IN)
      }

      timeLeft = orderDetails.estimatedTime -1
      seconds = 60 
      function countDown() {
        state.newOrder == false
        //start
          if(seconds > 0) {
            setTimeout(() => {
              seconds--
              if (seconds < 10) {
                seconds = '0'+seconds
              }
              if (seconds == 0) {
                timeLeft--
                if (timeLeft > 0) {
                  seconds = 59
                }
              }
              let remainingTime = {min: timeLeft, sec: seconds}    
              commit(Mutations.SET_COUNTDOWN, remainingTime)
              countDown()
            }, 1000);
          }
        //slut
      }

      countDown() 
    },
    //-------------------------------------------------------
    toggleNavBar({commit}){
      commit(Mutations.TOGGLE_NAVBAR)
    },
    toggleCart({commit}){
      commit(Mutations.TOGGLE_CART)
    },
    toggleConfirmationBox({commit}){
      commit(Mutations.TOGGLE_CONFIRMATION_BOX)
    },
    clearCurrentOrder({commit}){
      commit(Mutations.CLEAR_CURRENT_ORDER)
    },

  },
  getters: {
    getProducts: state => state.products,
    getCurrentOrderLength: state => state.currentOrder.length,
    getCurrentOrder: state => state.currentOrder,
    getNavBarIsActive: state => state.navBarIsActive,
    getCartIsActive: state => state.cartIsActive,
    getConfirmationBoxActive: state => state.confirmationBoxActive,
    getIsloggedIn: state => state.isLoggedIn,
    getUser: state => state.users,
    getOrderDetails: state => state.orderDetails,
    getCountDown: state => state.countDown,
  }
})
