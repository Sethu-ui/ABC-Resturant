import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import { useFormik } from "formik";
import { resetPassword } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';

const ResetPassword = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      verificationCode: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.verificationCode) {
        errors.verificationCode = "Required";
      }
      if (!values.newPassword) {
        errors.newPassword = "Required";
      } else if (values.newPassword.length < 8) {
        errors.newPassword = "Password must be at least 8 characters";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.newPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await resetPassword(params.email, values.verificationCode, values.newPassword);
        if (response.ok) {
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 3000);
        } else {
          setValue("AlertType", "danger");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
        }
      } catch (error) {
        setValue("AlertType", "danger");
        setValue("AlertMessage", error.data.message);
        setValue("AlertVisibility", true);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="authentication-bg d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Alert />
      <div className="account-pages position-relative w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm rounded p-4 bg-light">
                <div className="text-center mb-4">
                  <Link to="/" className="d-block mb-3">
                    <img src={logo} alt="logo" height="56" />
                    <img src={logoDark} alt="dark logo" height="56" className="d-none" />
                  </Link>
                  <h4 className="fs-20 fw-bold">Reset Password</h4>
                  <p className="text-muted">
                    Enter your verification code and new password to reset your password.
                  </p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="verificationCode" className="form-label">
                      Verification Code
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="verificationCode"
                      required
                      {...formik.getFieldProps('verificationCode')}
                      placeholder="Enter verification code"
                    />
                    {formik.errors.verificationCode ? (
                      <div className="text-danger">{formik.errors.verificationCode}</div>
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="newPassword"
                      required
                      {...formik.getFieldProps('newPassword')}
                      placeholder="Enter new password"
                    />
                    {formik.errors.newPassword ? (
                      <div className="text-danger">{formik.errors.newPassword}</div>
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="confirmPassword"
                      required
                      {...formik.getFieldProps('confirmPassword')}
                      placeholder="Enter confirm password"
                    />
                    {formik.errors.confirmPassword ? (
                      <div className="text-danger">{formik.errors.confirmPassword}</div>
                    ) : null}
                  </div>

                  <div className="mb-0 d-grid text-center">
                    <button
                      className="btn btn-primary fw-semibold rounded-pill"
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-dark-emphasis">
                Back to{" "}
                <Link
                  to="/login"
                  className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
                >
                  <b>Log In</b>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
