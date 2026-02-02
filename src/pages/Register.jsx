import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const {
        register: loginRegister,
        handleSubmit: handleLogin,
    } = useForm();

    const onLogin = async (data) => {
        console.log("Login:", data);
    };

    const onSubmit = async (data) => {
        try {
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                date: data.date,
                imgUser: data.imgUser?.[0]?.name || "", // store filename only
            };

            const res = await axios.post('http://localhost:3000/users', userData, {
                headers: { 'Content-Type': 'application/json' },
            });

            console.log('Register success:', res.data);
            alert('User registered successfully!');
            reset(); // clear the form
        } catch (error) {
            console.error('Error submitting form:', error.response || error);
            alert('Error registering user. Check console.');
        }
    };

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("http://localhost:3000/users");
                console.log("Users:", res.data);
            } catch (error) {
                console.error("Get users error:", error);
            }
        };

        getUsers();
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

            <form
                onSubmit={handleLogin(onLogin)}
                className="rounded-2xl p-8 border border-white/10 backdrop-blur"
            >
                <h2 className="text-xl font-semibold mb-6">Login</h2>

                <input
                    {...register("loginEmail", { required: true })}
                    placeholder="Email..."
                    className="w-full mb-4 px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                />

                <input
                    type="password"
                    {...register("loginPassword", { required: true })}
                    placeholder="Password..."
                    className="w-full mb-4 px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                />

                <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold hover:scale-105 transition"
                >
                    Login
                </button>
            </form>

            {/* REGISTER */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl p-8 border border-white/10 backdrop-blur"
            >
                <h2 className="text-xl font-semibold mb-6">Register (New Users)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        {...register('firstName', { required: true })}
                        placeholder="First Name"
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        {...register('lastName', { required: true })}
                        placeholder="Last Name"
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="file"
                        {...register('imgUser')}
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="date"
                        {...register('date')}
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        placeholder="Password"
                        className="input px-4 py-3 rounded-full bg-transparent border border-white/20 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold hover:scale-105 transition"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register