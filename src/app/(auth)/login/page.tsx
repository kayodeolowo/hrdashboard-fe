"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/services/loginService";
import { toast } from "react-hot-toast";
import { InputComponent } from "@/components/styles/InputComponent";
import { YellowBtn } from "@/components/styles/YellowBtn";
import { LoginFormInputs } from "@/Interface/auth";
import { useRouter } from "next/navigation";


interface LoginFormData {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Perform login mutation
      const response = await login(data).unwrap();


      localStorage.setItem("hrToken", response.data.accessToken);

      toast.success(response.message || "Login successful!");
      router.push("/dashboard")
    } catch (error: any) {
      // Check if the error contains the expected structure
      if (error?.data?.message) {
        toast.error(error.data.message || "Login failed. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark">
      <div className="w-full mx-4  max-w-md p-8 bg-darkgray text-whiteshade rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-orange-500 text-4xl font-bold">
            <i className="fas fa-horse"></i>
          </div>
          <h1 className="ml-3 text-2xl text-whiteshade font-bold">HR SEARCH</h1>
        </div>

        {/* Welcome Message */}
        <h2 className="text-xl text-whiteshade font-semibold mb-2">Welcome</h2>
        <p className="mb-6 text-graysecondary">Please login here</p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-8">
            <label
              className="block text-whiteshade text-sm mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <InputComponent
              type="email"
              id="email"
              placeholder="Enter your email"
              className="text-white focus:border-yellow"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-whiteshade text-sm  mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <InputComponent
              type="password"
              id="password"
              placeholder="Enter your password"
              className="text-white focus:border-yellow"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-whiteshade">Remember Me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-yellow hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <YellowBtn type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </YellowBtn>
        </form>
      </div>
    </div>
  );
};

export default Login;
