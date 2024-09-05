import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";
import { useFormik } from "formik";
import { login } from "../api/userApi";
import Alert from "../components/Alert";
import { UniversalContext } from '../context/UniversalContext';
import { barrier } from "../middleware/securityMiddleware";

const Login = () => {
  const { setValue } = useContext(UniversalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await login(values.email, values.password);
        if (response.ok) {
          setValue("AlertType", "primary");
          setValue("AlertMessage", response.message);
          setValue("AlertVisibility", true);
          barrier(setValue, navigate);
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
                  <h4 className="fs-20 fw-bold">Sign In</h4>
                  <p className="text-muted">Enter your credentials to access your account</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="emailaddress"
                      required
                      {...formik.getFieldProps('email')}
                      placeholder="Enter your email"
                    />
                    {formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-muted">
                        <small>Forgot your password?</small>
                      </Link>
                    </div>
                    <input
                      className="form-control"
                      type="password"
                      required
                      {...formik.getFieldProps('password')}
                      placeholder="Enter your password"
                    />
                    {formik.errors.password ? (
                      <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="mb-0 d-grid text-center">
                    <button
                      className="btn btn-primary fw-semibold rounded-pill"
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <p className="text-dark-emphasis">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline"
                >
                  <b>Sign up</b>
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

export default Login;
