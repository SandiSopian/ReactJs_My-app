import React from "react"; // untuk statelesscomponent seperti ini untuk importnya

const BlogComponent = (props) => {
  return (
    <div className="post">
      <div className="img">
        <img src="https://images2.imgbox.com/10/f9/wLGDqnB5_o.jpg" alt="" className="img-s" />
      </div>
      <div className="article">
        <p className="title">{props.data.title}</p>
        <p className="title">{props.data.body}</p>
        <button className="delete" onClick={() => props.delete(props.data.id)}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default BlogComponent;
