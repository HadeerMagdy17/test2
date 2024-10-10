// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//   let navigate = useNavigate();

//   let {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   let onSubmit = async (data: any) => {
//     try {
//       let response = await axios.post("https://dummyjson.com/auth/login", data);
//       console.log(response);
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 1000);
//       // navigate("/dashboard");
//       toast("Login successfully");
//     } catch (error) {
//       toast("haga wehshaaaaa");
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div
//         id="login"
//         className="login-container vh-100 d-flex justify-content-center align-items-center"
//       >
//         <div className="bg-white rounded p-5 py-5">
//           <div className="login-h1 ">
//             <h2>User Management System</h2>
//           </div>
//           <div className=" text-center py-3">
//             <h4>Sign In</h4>
//             <span>Enter your credentials to access your account</span>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-1">
//               <label className="form-label">Username</label>
//               <input
//                 // value="emilys"
//                 type="text"
//                 className="form-control"
//                 id="exampleFormControlInput1"
//                 placeholder="Enter your username"
//                 {...register("username", { required: "user name is required" })}
//               />
//             </div>
//             {errors?.username && (
//               <span className="text-danger">{errors?.username?.message}</span>
//             )}
//             <div className="my-1">
//               <label className="form-label">Password</label>
//               <input
//                 // value="emilyspass"
//                 type="text"
//                 className="form-control"
//                 id="exampleFormControlInput1"
//                 placeholder="Enter your password"
//                 {...register("password", { required: "password is required" })}
//               />
//             </div>
//             {errors?.password && (
//               <span className="text-danger">{errors?.password?.message}</span>
//             )}
//             <button className="btn btn-warning sign-btn w-100 text-white mt-3">
//               SIGN IN
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormInputs {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", data);
      console.log(response);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
      toast("Login successfully");
    } catch (error) {
      toast("Login failed");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        id="login"
        className="login-container vh-100 d-flex justify-content-center align-items-center"
      >
        <div className="bg-white rounded p-5 py-5">
          <div className="login-h1 ">
            <h2>User Management System</h2>
          </div>
          <div className="text-center py-3">
            <h4>Sign In</h4>
            <span>Enter your credentials to access your account</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
              />
            </div>
            {errors.username && (
              <span className="text-danger">{errors.username.message}</span>
            )}
            <div className="my-1">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
            </div>
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
            <button className="btn btn-warning sign-btn w-100 text-white mt-3">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

