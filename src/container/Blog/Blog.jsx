import React, { Component, Fragment } from "react";
import "./Blog.css";
import BlogComponent from "../../component/BlogComponent/BlogComponent";
import axios from "axios";

export default class Blog extends Component {
  state = {
    post: [],
  };

  // ketika page refresh maka data akan mengambil dari fungsi ini
  getPostApi = () => {
    // json-server --watch db.json --port 3004 : untuk menjalankan server API
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };
  // fungsi AXIOS untuk menghapus data
  handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostApi();
    });
  };
  // componentDidMount : untuk memanggil data dari JSON dari situs API jsonplaceholder
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // fungsi AXIOS untuk menangkap data
    // axios.get("http://localhost:3004/posts").then((result) => {
    //   this.setState({
    //     post: result.data,
    //   }); // json-server --watch db.json --port 3004 : untuk menjalankan server API
    // });
    this.getPostApi();
  }
  render() {
    return (
      // Fragment berfungsi sebagai parents dari beberapa div
      <Fragment>
        <h2 className="title">Selamat datang di blog saya</h2>
        {/* <BlogComponent title="title" desc="desc" /> */}
        <div className="content">
          {this.state.post.map((post) => {
            return <BlogComponent key={post.id} data={post} delete={this.handleDelete} />;
          })}
        </div>
      </Fragment>
    );
  }
}
