
import { ProxyState } from "../AppState.js"


class SportsService {
  buySport(id) {
    const sport = ProxyState.sports.find(s => s.id == id)
    if (sport.quantity > 0) {
      sport.quantity--
      ProxyState.sports = ProxyState.sports
    } else {
      alert("No More Sport")
    }
  }


}


export const sportsService = new SportsService()