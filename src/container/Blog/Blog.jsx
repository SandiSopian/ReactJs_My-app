import React, { Component, Fragment } from "react";
import "./Blog.css";
import BlogComponent from "../../component/BlogComponent/BlogComponent";
import axios from "axios";

export default class Blog extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdated: false,
  };

  // ketika page refresh maka data akan mengambil dari fungsi ini
  getPostApi = () => {
    // json-server --watch db.json --port 3004 : untuk menjalankan server API
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };
  // fungsi untuk menambahkan data ke db json api
  postDataToApi = () => {
    axios.post("http://localhost:3004/posts/", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostApi();
        this.setState({
          isUpdated: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      },
      (err) => {
        console.log("error :", err);
      }
    );
  };
  // fungsi AXIOS untuk mengupdate data
  putDataToApi = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
      console.log(res);
      this.getPostApi();
      this.setState({
        isUpdated: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };
  // fungsi AXIOS untuk menghapus data
  handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((response) => {
      this.getPostApi();
    });
  };
  // fungsi untuk menghandle update data
  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdated: true,
    });
  };
  handleFormInput = (event) => {
    // console.log("handleFormInput", event.target);
    // let title = event.target.value;
    let formBlogPostData = { ...this.state.formBlogPost };
    // fungsi untuk mengambil data tanggal saat form input
    let timenow = new Date().getTime();
    // console.log(timenow);
    if (!this.state.isUpdated) {
      formBlogPostData["id"] = timenow;
    }
    formBlogPostData[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostData,
      // },
      // () => {
      //   console.log("value", this.state.formBlogPost);
    });
  };
  // componentDidMount : untuk memanggil data dari JSON dari situs API jsonplaceholder
  handleSubmit = () => {
    if (this.state.isUpdated) {
      this.putDataToApi();
    } else {
      this.postDataToApi();
    }
    // console.log(this.state.formBlogPost);
  };
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
          <div className="formdata">
            <label htmlFor="title" className="judul">
              Title Blog
            </label>
            <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" className="title-blog" onChange={this.handleFormInput} />
            <label htmlFor="body" className="judul">
              Blog Content
            </label>
            <textarea name="body" id="body" cols="40" rows="15" placeholder="add blog content" className="title-blog" value={this.state.formBlogPost.body} onChange={this.handleFormInput}></textarea>
            <button className="btn-submit" onClick={this.handleSubmit}>
              Simpan data
            </button>
          </div>
          {this.state.post.map((post) => {
            return <BlogComponent key={post.id} data={post} delete={this.handleDelete} update={this.handleUpdate} />;
          })}
        </div>
      </Fragment>
    );
  }
}
