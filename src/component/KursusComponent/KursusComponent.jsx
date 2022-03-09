import React from "react";
import "./KursusComponent.css";

const KursusComponent = (props) => {
  return (
    <div className="pwrapper">
      <div className="wrapper">
        <div className="gambar">
          <img src="https://images2.imgbox.com/d4/02/Lp7VlYem_o.jpg" alt="" border="0" className="gambarpaket" />
        </div>
        <p className="harga">{props.nama}</p>
        <p className="harga">Rp. {props.harga}</p>
        <p className="deskripsi">{props.desc}</p>
      </div>
    </div>
  );
};

KursusComponent.defaultProps = {
  nama: "IG",
  harga: "100000",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, hic.",
};

export default KursusComponent;
