import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { config } from "../config";

function VerifyOTP() {
  let handleResend = () => {};
  let params = useParams();
  let formik = useFormik({
    initialValues: {
      otp: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.otp) {
        errors.otp = "Please enter otp";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const res = await axios.post(`${config.api}/api/users/verifyOtp`, values);
    },
  });

  return (
    <>
      <h2 className="text-center mt-5">Authentication</h2>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 bg-white p-5 ">
            <h3 className="pb-3">Verify OTP</h3>
            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group pb-3">
                  <input
                    type="text"
                    name="userid"
                    className="form-control"
                    value={params.userid}
                    disabled
                  />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="form-control"
                    id="otp"
                    name="otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="pb-2">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Verify OTP
                  </button>
                  <button
                    className="btn btn-secondary w-100 font-weight-bold mt-2"
                    onClick={() => handleResend()}
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerifyOTP;
