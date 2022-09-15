import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPost } from "../Redux/actions/actionCreator";

function AddPost() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);
  let formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(addPost(values));
      window.location.reload(false);
      dispatch(getPost());
    },
  });
  return (
    <div className="container" style={{ margin: "4rem auto" }}>
      <h5 className="blue-text center-align"> PaviBlog - Redux</h5>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-field ">
          <label htmlFor="post_title ">Title</label>
          <input
            type="text"
            name="title"
            className="white-text "
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="input-field">
          <label htmlFor="post_content">Content</label>
          <textarea
            name="content"
            className="materialize-textarea white-text"
            onChange={formik.handleChange}
            value={formik.values.content}
          >
            {" "}
          </textarea>
        </div>
        <div className="input-field">
          <button className="btn blue" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
