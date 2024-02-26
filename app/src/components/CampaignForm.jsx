import React from "react";
import usePost from "../hooks/usePost";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";

const CampaignForm = () => {

  const { formik } = usePost()

  const { values, handleChange, setFieldValue, errors, handleSubmit, isSubmitting } = formik

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <h1>Start a Campaign !</h1>
        <div className="section-form">

          <form style={{
            backgroundColor: '#FFFFFF',
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)"
          }} id="form">

            <div className="">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              {errors?.description && <text style={{ color: 'red' }}>{errors?.description}</text>}
            </div>
            <div>
              <label htmlFor="accNumber">Upload Image</label>

              <div>
                <label htmlFor="updateImage" style={{
                  cursor: 'pointer',
                  backgroundColor: '#F2796E',
                  padding: "0.5rem 0.5rem",
                  width: "fit-content",
                  borderRadius: "0.25rem"
                }}>
                  <div style={{
                    margin: "auto",
                    color: "white"
                  }}>Select new</div>


                  <input
                    id="updateImage"
                    style={{ display: "none" }}
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
                  />
                </label>
              </div>

              {/* <input
                type="file"
                name="image"
                onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
              /> */}
              {errors?.image && <text style={{ color: 'red' }}>{errors.image}</text>}
            </div>
            <div>
              <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignForm;
