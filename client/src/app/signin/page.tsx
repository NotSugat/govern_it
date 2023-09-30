"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
const SignIn = () => {
    const router = useRouter();

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        return router.push("live");
    };

    return (
        <main className="flex h-screen w-full flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm text-gray-600">
                <div className="text-center">
                    <img src="/assets/nepalGov.png" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                            Log in to your account
                        </h3>
                        <p className="">
                            Don't have an account?{" "}
                            <Link href="signin" className="text-blue-700">
                                {" "}
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
                <form onSubmit={handleOnSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className="font-medium">Email</label>
                        <input
                            type="email"
                            required
                            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Password</label>
                        <input
                            type="password"
                            required
                            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                        />
                    </div>
                    <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-600 active:bg-blue-700">
                        Sign in
                    </button>
                    <div className="text-center">
                        <a href="" className="hover:text-indigo-600">
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default SignIn;
