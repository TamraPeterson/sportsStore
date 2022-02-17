import { ProxyState } from "../AppState.js"
import { sportsService } from "../Services/SportsService.js"
import { Sports } from "../Models/Sports.js"


function _draw() {
  let template = ''
  ProxyState.sports.forEach(s => template += s.Template)
  document.getElementById("sports").innerHTML = template
}
_draw()



function buySport() {
  // decrease quantity
  // add sport to cart
  // add price to cart total

  function drawCart() {
    let startTotal = 0
    let template = ''
    cart.forEach(item => {
      startTotal += item.price
      template += `
      <div class="col-12 d-flex">
      </div>
    </div>
    <div>
      <h5>1 ${sport.name}</h5>
      <p>$${sport.price}</p>
    </div>
      `
    })
    document.getElementById('cart').innerHTML = template
    document.getElementById('total').innerText = total.toFixed(2)
  }
}
export class SportsController {
  // constructor()
}

