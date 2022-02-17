import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Sports } from "./Models/Sports.js"



const sport1 = new Sports(
  {
    name: 'Badminton',
    imgUrl: 'https://hips.hearstapps.com/toc.h-cdn.co/assets/16/30/1469562775-gettyimages-452846870.jpg',
    price: 2500
  }
)
const sport2 = new Sports(
  {
    name: 'Croquet',
    imgUrl: 'https://cdn.palmbeachillustrated.com/wp-content/uploads/sites/78/2019/06/FOR-WEB_CroquetBestSportAction-057.jpg',
    price: 70
  }
)
const sport3 = new Sports(
  {
    name: 'Curling',
    imgUrl: 'https://www.ocregister.com/wp-content/uploads/2021/08/OCR-L-CURLING-0825-JG-01.jpg',
    price: 7301
  }
)

class AppState extends EventEmitter {
  /** @type {import('./Models/Sports').Sports[]} */

  sports = [sport1, sport2, sport3]
  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
