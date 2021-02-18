import { uid } from 'uid';

export async function fetchProducts() {

  const products = await import("./menu.json")
  return new Promise((resolve, reject) => {
    if (products) {
      setTimeout(() => {

        resolve(products.menu);
      }, (Math.random() + 0.1) * 1000);
    } else {
      reject('no products found')
    }

  })

}

export async function registerUser(name, email) {
  // Resolve a random generated ID after a random timer
  // Persist user in localStorage
  const id = uid()
  const user = { name, email, id, orderHistory: [] }
  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  } else {
    let users = []
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  }

  return new Promise((resolve) => {
    setTimeout(() => {

      resolve(user);
    }, (Math.random() + 0.1) * 1000);
  })
}

export function userExists() {
  let users = JSON.parse(localStorage.getItem('users'))
  if (users) {
    return users[0]
  }else{
    return null
  }
}

export async function makeOrder(userId, currentOrder) {
  // Resolve with a orderId, order total price and ETA after a random timer
  // Persist order coupled userId in an array in localStorage

  const orderId = uid()
  let totalPrice = 0;
  let estimatedTime = Math.floor((Math.random() + 1) * 10)
  let orderArray = [...Object.values(currentOrder)];

  for (let product of orderArray) {
    totalPrice += +product.price * product.amount
  }

  const response = {
    orderId,
    totalPrice,
    estimatedTime
  }

  if (userId) {
    const users = JSON.parse(localStorage.getItem('users'))
    let currentUser

    for (let user of users) {
      if (user.id == userId) {
        currentUser = user
      }
    }

    const order = {
      orderId,
      totalPrice,
      order: currentOrder,
      date: `${new Date().getYear() - 100}/${new Date().getMonth() + 1}/${new Date().getDate()}`
    }

    currentUser.orderHistory.push(order)
    localStorage.setItem('users', JSON.stringify(users))
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response)
    }, (Math.random() + 1) * 1000);
  })
}

export async function fetchOrderHistory() {
  const users = JSON.parse(localStorage.getItem('users'))
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users[0].orderHistory)
    }, (Math.random() + 1) * 1000);
  })
}