import React, { Component, Fragment } from "react";
import KursusComponent from "../../component/KursusComponent/KursusComponent";
import Product from "../Product/Product";
import Blog from "../Blog/Blog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <KursusComponent nama="SEO" harga="200000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
          <KursusComponent nama="Fb Ads" harga="150000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
          <KursusComponent nama="Google Ads" harga="100000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
          <KursusComponent nama="Google Adsense" harga="80000" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic." />
          <KursusComponent />

          <div>
            <Product />
          </div>
          <div>
            <h2 className="text-center">Blogs</h2>
            <hr></hr>
            <Blog />
          </div>
        </div> */}

        <Fragment>
          <div className="backg">
            <nav>
              <ul>
                <li className="link">
                  <Link to="/" className="ahref">
                    Home
                  </Link>
                </li>
                <li className="link">
                  <Link to="/product" className="ahref">
                    Product
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
