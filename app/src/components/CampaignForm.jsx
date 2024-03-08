import React from "react";
import usePost from "../hooks/usePost";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CampaignForm = () => {
  const { formik } = usePost();

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const { values, handleChange, setFieldValue, errors, handleSubmit, isSubmitting } = formik;

  return (
    <Paper className="container main-section-wrapper" elevation={24}>
      <div className="section-form">
        <form id="form" onSubmit={handleSubmit}>
          <h1 className="header-text">Start a Campaign !</h1>
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            helperText="Incorrect entry."
            value={values.description}
            onChange={handleChange}
            variant="standard"
          />
          {errors?.description && <p style={{ color: 'red' }}>{errors?.description}</p>}
          <TextField
            id="fromDate"
            label="From Date(optional)"
            name="fromDate"
            type="date"
            value={values.fromDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="toDate"
            label="To Date(optional)"
            name="toDate"
            type="date"
            value={values.toDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <div>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
              />
            </Button>


      
          </div>
          <div>
          <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
              Post
            </button>
          </div>
          <p className="slogn-text">
            "We Are In A Mission To Help The HelpLess <br /> Join Our
            Action!""
          </p>
        </form>
      </div>
    </Paper>
  );
};

export default CampaignForm;
