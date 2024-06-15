import { BaseResponse } from "@/types/common";
import axiosInstance from "./httpClient";
import { User } from "@/types/user";

export const register = async (
  username: string
): Promise<BaseResponse<User>> => {
  return axiosInstance.post("/user", { username });
};

export const getImagesOfUser = async (
  user_id: number
): Promise<BaseResponse<Array<string>>> => {
  return axiosInstance.get(`/user/${user_id}/images`);
};

export const uploadImages = (
  imageFiles: Array<File> = [],
  user_id: number,
): Promise<BaseResponse<Array<string>>> => {
  if (isNaN(user_id)) {
    throw new Error('Undefined user id');
  }
  if (imageFiles.length <= 0) {
    throw new Error('No image is uploaded');
  }
  const formData = new FormData();
  for (const image of imageFiles) {
    formData.append("files", image);
  }
  formData.append("user_id", `${user_id}`);
  return axiosInstance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const downloadImage = (imageName: string) => {
  if (!imageName) {
    throw new Error('Undefined image');
  }
  return axiosInstance.get(`/download/${imageName}`);
}