import React, { Component, Fragment } from "react";
import "./product.css";

export default class Product extends Component {
  // state : sebuah component yang tersedia dalam component dan tidak bisa diakses oleh component lain dan bisa merubah nilainya sendiri
  state = {
    product: 6,
  };
  handlePlus = () => {
    // alert("cek button plus");
    this.setState({
      // ketika di klik (+) maka product bertambah 1
      product: this.state.product + 1,
    });
  };
  handleMinus = () => {
    // alert("cek button minus");
    // kondisi ketika jumlah product 0 maka fungsi ini tidak akan berfungsi
    if (this.state.product > 0) {
      this.setState({
        // ketika di klik (+) maka product berkurang 1
        product: this.state.product - 1,
      });
    }
  };
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
              <div className="jumlah">{this.state.product}</div>
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
            <button className="mplus" onClick={this.handleMinus}>
              -
            </button>
            <input className="input" type="text" value={this.state.product} />
            <button className="mplus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
