import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const notify = () => toast("Wow so easy!");


  let navigate=useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = async(data:any) => {
    try {
      let response=await axios.post("https://dummyjson.com/auth/login",data)
      console.log(response);
      // toast.success("haga helwaaaaa")
      toast.success("Login successfully", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/dashboard")
     
    } catch (error) {
      toast("haga wehshaaaaa")
      console.log(error);
    }

  };
  return (
    <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
  </div>
  //   <>
  //  <ToastContainer/>
  //     <div
  //       id="login"
  //       className="login-container vh-100 d-flex justify-content-center align-items-center"
  //     >
  //       <div className="bg-white rounded p-5 py-5">
  //         <div className="login-h1 ">
  //           <h2>User Management System</h2>
  //         </div>
  //         <div className=" text-center py-3">
  //           <h4>Sign In</h4>
  //           <span>Enter your credentials to access your account</span>
  //         </div>
  //         <form onSubmit={handleSubmit(onSubmit)}>
  //           <div className="mb-1">
  //             <label className="form-label">Username</label>
  //             <input
  //               // value="emilys"
  //               type="text"
  //               className="form-control"
  //               id="exampleFormControlInput1"
  //               placeholder="Enter your username"
  //               {...register("username",{required:"user name is required"})}
  //             />
  //             {/* <small style={{}}>use this username : " emilys "</small> */}
  //           </div>
  //           {errors?.username && <span className="text-danger">{errors?.username?.message}</span>}
  //           <div className="my-1">
  //             <label className="form-label">Password</label>
  //             <input
  //               // value="emilyspass"
  //               type="text"
  //               className="form-control"
  //               id="exampleFormControlInput1"
  //               placeholder="Enter your password"
  //               {...register("password",{required:"password is required"})}
  //             />
  //           </div>
  //           {errors?.password && <span className="text-danger">{errors?.password?.message}</span>}
  //           <button className="btn btn-warning sign-btn w-100 text-white mt-3">
  //             SIGN IN
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </>
  );
}
