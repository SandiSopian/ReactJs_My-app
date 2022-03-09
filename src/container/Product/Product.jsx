import React, { Component, Fragment } from "react";
import "./product.css";

export default class Product extends Component {
  render() {
    return (
      <Fragment>
        {/* Fragment adalah component untuk menggantikan div atau span */}
        <div className="pwrapper">
          <div className="nav">
            <div className="logo">
              <h2>My app</h2>
            </div>
            <div className="keranjang">
              <img src="https://images2.imgbox.com/a8/03/G2jUCUYL_o.png" alt="" />
              <div className="jumlah">2</div>
            </div>
          </div>
          <div className="product">
            <div className="gambar-product">
              <img src="https://images2.imgbox.com/10/f9/wLGDqnB5_o.jpg" alt="" className="gambarpaket" />
            </div>
            <p className="nama">Tas Slempang</p>
            <p className="harga">Rp. 81.800</p>
          </div>
          <div className="counter">
            <button className="mplus">-</button>
            <input className="input" type="text" value={2} />
            <button className="mplus">+</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
