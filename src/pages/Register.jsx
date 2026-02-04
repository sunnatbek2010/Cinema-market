import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const {
        register: loginRegister,
        handleSubmit: handleLogin
    } = useForm();

    const onLogin = async (data) => {
        try {
            const res = await axios.get(`http://localhost:3000/users?email=${data.loginEmail}&password=${data.loginPassword}`);

            if (res.data.length > 0) {
                localStorage.setItem("user", JSON.stringify(res.data[0]));
                navigate("/");
            } else {
                alert("Email or password is incorrect");
            }
        } catch (error) {
            console.error(error);
            alert("Login error");
        }
    };


    const onSubmit = async (data) => {
        try {
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                date: data.date,
                imgUser: data.imgUser?.[0]?.name || "",
            };

            await axios.post("http://localhost:3000/users", userData, {
                headers: { "Content-Type": "application/json" },
            });

            alert("User registered successfully!");
            reset();
        } catch (error) {
            console.error(error);
            alert("Register error");
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

    
            <form
                onSubmit={handleLogin(onLogin)}
                className="rounded-2xl p-8 border border-white/10 backdrop-blur"
            >
                <h2 className="text-xl font-semibold mb-6">Login</h2>

                <input
                    {...loginRegister("loginEmail", { required: true })}
                    placeholder="Email..."
                    className="w-full mb-4 px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                />

                <input
                    type="password"
                    {...loginRegister("loginPassword", { required: true })}
                    placeholder="Password..."
                    className="w-full mb-4 px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                />

                <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold"
                >
                    Login
                </button>
            </form>


            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl p-8 border border-white/10 backdrop-blur"
            >
                <h2 className="text-xl font-semibold mb-6">Register</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        {...register("firstName", { required: true })}
                        placeholder="First Name"
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        {...register("lastName", { required: true })}
                        placeholder="Last Name"
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        {...register("email", { required: true })}
                        placeholder="Email"
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="file"
                        {...register("imgUser")}
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="date"
                        {...register("date")}
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                        className="px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
