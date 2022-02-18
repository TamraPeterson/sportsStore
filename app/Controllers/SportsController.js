import { ProxyState } from "../AppState.js"
import { sportsService } from "../Services/SportsService.js"



function _draw() {
  let template = ''
  ProxyState.sports.forEach(s => template += s.Template)
  document.getElementById("sports").innerHTML = template

}
_draw()





export class SportsController {
  constructor() {
    ProxyState.on('sports', _draw)

  }
  buySport(id) {
    sportsService.buySport(id)
  }

}

