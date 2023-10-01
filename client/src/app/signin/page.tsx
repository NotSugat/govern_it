"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

import { useState, useEffect } from "react";
import { toggleEdit } from "@/redux/features/toggleslice";
import { store, useAppDispatch, useAppSelector } from "../../redux/store";
import axios from 'axios';
import en from "../locales/signin/en";
import ne from "../locales/signin/ne";

const SignIn = () => {
  const [ctzNum, setctzNum] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { locale } = router;
  const [t, setT] = useState({});
  
  const isEnglish = useAppSelector((state) => state.isEnglish);
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
  
  const authUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = { ctzNum: ctzNum, password: password };
      let response;
      await axios.post('http://localhost:5000/api/users/auth', data).then((r) => {
        response = r
      }).catch((e) => {
        console.log(e)
      })
      // router.push('/home')
      if(response === undefined){
        alert('Incorrect Password! Try Again');
      }
      else {
        router.push('/home')
      }
    }
    catch (error) {
      throw error; // Handle errors in the calling function
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center px-4">
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
      <div className="w-full max-w-sm text-gray-600">
        <div className="text-center">
          <img src="/assets/nepalGov.png" width={150} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              {t.login}
            </h3>
            <p className="">
              {t.donthaveaccount}{" "}
              <Link
                href="signup"
                className="text-blue-700"
                onClick={() => router.push("/signup")}
              >
                {" "}
                {t.signup}
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={authUser} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">{t.ctzn}</label>
            <input
              value={ctzNum}
              onChange={(e) => { setctzNum(e.target.value) }}
              type="number"
              required
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
            />
          </div>
          <div>
            <label className="font-medium">{t.password}</label>
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              required
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
            />
          </div>
          <button className="w-full rounded-lg bg-blue-500 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-600 active:bg-blue-700">
            {t.signin}
          </button>
          <div className="text-center">
            <a href="" className="hover:text-indigo-600">
              {t.forgetpassword}
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
