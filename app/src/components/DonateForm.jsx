import React from "react";
import useTransaction from "../hooks/useTransaction";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";
import { useLocation } from "react-router-dom";

const DonateForm = () => {

  const { state } = useLocation()

  const formik = useTransaction(state)

  const { values, errors, isSubmitting, handleSubmit, handleChange, setFieldValue } = formik

  return (
    <Layout>
      <div className="container main-section-wrapper">
        <div className="maincontainer">
          <div className="slogan">
            <div className="headerpaymentname">
              <h1>Card payment</h1>
            </div>

            <div className="card">


              <div className="payment-chooser field">
                <div className="option payment-option radio-indent">
                  <span className="payment-option__radio radio">
                    <input type="radio" className="radio__input" id="credit" name="payment-type" value="false" />
                    <span className="radio__check"></span>
                  </span>
                  <label className="payment-option__label" htmlFor="credit">
                    <span className="payment-option__label-text">Credit Card</span>
                    <img className="payment-option__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26265/cclogos.png" alt="Credit Card" />
                  </label>
                </div>
                <div className="option payment-option radio-indent">
                  <span className="payment-option__radio radio">
                    <input type="radio" className="radio__input" id="pay-pal" name="payment-type" value="true" />
                    <span className="radio__check"></span>
                  </span>
                  <label className="payment-option__label" htmlFor="pay-pal">
                    <img className="payment-option__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26265/cclogos.png" alt="PayPal" />
                  </label>
                </div>
                <p className="payment-chooser__copy supporting-text radio-indent">Safe payment online using your credit card of choice or use PayPal.</p>
              </div>





            </div>

            <div className="cardPayment">

              <div className="mainSection">

                <div className="keyCss"> Amount</div>

                <div className="inputFiled">
                  <input type="amount"></input>

                </div>



                <div className="keyCss"> CVV</div>

                <div className="inputFiled">
                  <input type="amount"></input>

                </div>



                <div className="keyCss"> Card Number</div>

                <div className="inputFiled">
                  <input type="amount"></input>

                </div>

              


              </div>
        



            </div>
            <div>
                  <button type="button" id="test"  disabled={isSubmitting}>
                    Donate
                  </button>
                </div>

          </div>


          <div className="formHeader">

            <h1>Inter bank fund Transfer</h1>

            <div className="section-form">
              <form id="form">
                <div className="">
                  <label htmlFor="accountName"> Account Name</label>
                  <input
                    type="text"
                    name="accountName"
                    value={values.accountName}
                    onChange={handleChange}
                  />
                  {errors?.accountName && <text style={{ color: 'red', marginTop: 2 }}>{errors?.accountName}</text>}
                </div>
                <div className="">
                  <label htmlFor="toAccountNumber"> Account Number</label>
                  <input
                    type="text"
                    name="toAccountNumber"
                    value={values.toAccountNumber}
                    onChange={handleChange}
                  />
                  {errors?.toAccountNumber && <text style={{ color: 'red', marginTop: 2 }}>{errors?.toAccountNumber}</text>}
                </div>
                <div className="">
                  <label htmlFor="amount">Amount</label>
                  <input
                    type="text"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                  />
                  {errors?.amount && <text style={{ color: 'red', marginTop: 2 }}>{errors?.amount}</text>}
                </div>
                <div className="">
                  <label htmlFor="remarks">Remarks</label>
                  <input
                    type="text"
                    name="remarks"
                    value={values.remarks}
                    onChange={handleChange}
                  />
                  {errors?.remarks && <text style={{ color: 'red', marginTop: 2 }}>{errors?.remarks}</text>}
                </div>
                <div>
                  <button type="button" id="btn" onClick={handleSubmit} disabled={isSubmitting}>
                    Donate
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonateForm;
