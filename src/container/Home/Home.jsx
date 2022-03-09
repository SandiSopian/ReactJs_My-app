import React, { Component } from "react";
import KursusComponent from "../../component/KursusComponent/KursusComponent";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      //   <div>
      //     <KursusComponent nama="SEO" harga="200000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
      //     <KursusComponent nama="Fb Ads" harga="150000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
      //     <KursusComponent nama="Google Ads" harga="100000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
      //     <KursusComponent nama="Google Adsense" harga="80000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
      //     <KursusComponent />
      //   </div>

      <div>
        <Product />
      </div>
    );
  }
}

export default Home;
