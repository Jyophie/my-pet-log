"use server";

import instance from "@/app/_api/axios";

export const getMe = async () => {
  try {
    const response = await instance.get("/users/me");

    if (response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.error(error.response.data);
    return null;
  }
};

export const postCheckNickname = async (nickname: string) => {
  try {
    const response = await instance.post("/users/check/nickname", {
      nickname,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    return false;
  }
};

export interface postUserProfilePropType {
  nickname: string;
  profileImage?: string;
}

export const postUserProfile = async ({ nickname, profileImage }: postUserProfilePropType) => {
  try {
    const response = await instance.post("/users/profile", {
      profileImage,
      nickname,
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error: any) {
    return false;
  }
};
