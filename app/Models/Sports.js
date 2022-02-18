import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Sports {
  constructor({ name, imgUrl, price }) {
    this.id = generateId()
    this.name = name
    this.imgUrl = imgUrl
    this.price = price
    this.quantity = 5
  }

  get Template() {
    return `
<div class="col-3 bg-light p-3 m-3 rounded shadow text-center  ">
          <h4>${this.name}</h4>
          <img class="img-fluid"
            src="${this.imgUrl}"
            alt="badminton">
          <h6>$${this.price}</h6>
          <h6>In Stock: ${this.quantity}</h6>
          <button class="btn btn-danger" onclick="app.sportsController.buySport('${this.id}')">Purchase</button>
        </div>
`



  }



}