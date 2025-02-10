import React from "react";

function Login() {
  console.log("Login Card");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmitFunction = (data) => {
    console.log("login data" + data);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
        {errors.email && <p>Email is required</p>}
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your password"
        />
        {errors.password && <p>Password is required</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
