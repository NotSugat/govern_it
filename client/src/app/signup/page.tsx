"use client";

import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEventHandler,
} from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import en from "../locales/signup/en";
import ne from "../locales/signup/ne";
import { toggleEdit } from "@/redux/features/toggleslice";
import { store, useAppDispatch, useAppSelector } from "../../redux/store";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();

  const [ctzNum, setctzNum] = useState<string>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const [t, setT] = useState<any>({});

  const isEnglish = useAppSelector((state) => state.isEnglish);

  const registerUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const data = {
          ctzNum: ctzNum,
          email: email,
          name: name,
          password: password,
        };
        let response: any;
        axios
          .post("http://localhost:5000/api/users", data)
          .then((r) => {
            response = r;
          })
          .catch((e) => {
            console.log(e);
          });

        router.push("/home");
        // console.log(response);
        return response;
      }
    } catch (error) {
      throw error; // Handle errors in the calling function
    }
  };

  useEffect(() => {
    if (!isEnglish) {
      setT(ne);
    } else {
      setT(en);
    }
  }, [isEnglish]);
  const dispatch = useAppDispatch();
  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    dispatch(toggleEdit(true));
  };

  return (
    <div className=" flex h-[100vh] flex-col items-center justify-center ">
      <select
        onChange={changeLanguage}
        defaultValue="en"
        className="text-shadow-sm absolute top-8 bg-transparent text-lg tracking-wide text-black"
        style={{
          display: "inline-block",
          border: "none",
          padding: "0px",
          margin: "60px",
        }}
      >
        <option className="text-black" value="en">
          EN
        </option>
        <option className="text-black" value="ne">
          NE
        </option>
      </select>
      <h1 className="py-3 text-4xl font-semibold ">{t.register}</h1>
      <form className="min-w-[500px] text-2xl" onSubmit={registerUser}>
        <div className="group relative z-0 mb-6 w-full">
          <input
            value={ctzNum}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setctzNum(e.target.value);
            }}
            type="number"
            name="floating_company"
            id="floating_company"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_company"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            {t.nagaritka_num}
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_first_name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            {t.f_name}
          </label>
        </div>

        <div className="group relative z-0 mb-6 w-full ">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            {t.email}
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            {t.password}
          </label>
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <input
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            {t.conf_password}
          </label>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-[100%]  rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            {t.submit}
          </button>
        </div>
        <div className="w-full">
          <button
            type="button"
            className="my-2  w-[100%] rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={() => router.push("/landing")}
          >
            {t.go_back}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
