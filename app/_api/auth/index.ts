"use server";
import instance from "@/app/_api/axios";
import { cookies } from "next/headers";

interface FormData {
  email: string;
  password: string;
}

export const postLogin = async ({ email, password }: FormData) => {
  try {
    const res = await instance.post("/auth/signin", {
      email,
      password,
    });

    if (res.status === 200) {
      cookies().set("accessToken", res.data.access_token);
      return "signin success";
    }
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};