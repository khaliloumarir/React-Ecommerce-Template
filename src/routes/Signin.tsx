import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, redirect, useNavigate } from "react-router-dom";
import logo from "../assets/images/site-logo.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { mainData } from "../data/mainData";
import { UserAuth } from "../auth/AuthContext";
import Alert from "@mui/material/Alert";
export default function SignIn() {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authUser, setAuthUser]: any = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const signInForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await signIn(email, password);
      setError("");
      window.location.reload();
    } catch (error: any) {
      console.log(error.code);
      if (error.code == "auth/user-not-found") {
        setError(
          "You do not have an account with us, please BUY A PDF and wait up to 24 hours"
        );
      } else if (error.code == "auth/wrong-password") {
        setError(
          "Password is wrong, please use your first name and last name as password or contact us for help"
        );
      }
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link className="py-4" to="/">
          <img
            loading="lazy"
            alt={`${mainData.companyName} Logo Header`}
            width="200px"
            height="200px"
            className="logo-icon me-2 "
            src={logo}
          />
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {error.length ? <Alert severity="error">{error}</Alert> : null}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form onSubmit={signInForm} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Email associated to your paypal"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-greenColor hover:bg-greenColor focus:ring-4 focus:outline-none focus:ring-greenColor font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/"
                  className="font-medium text-greenColor hover:underline "
                >
                  Buy PDF And Join automatically!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
