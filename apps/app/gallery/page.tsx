"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getImagesOfUser, uploadImages } from "@/services/user";
import ImageItem from "@/components/ImageItem";

export default function Page() {
  const router = useRouter();
  const param = useSearchParams();
  const username = param.get("username");
  const user_id = parseInt(param.get("userid") || '0', 10);
  const [images, setImages] = useState<string[]>([]);

  const onUpload = async (e: any) => {
    try {
      const imageFiles = e.target.files;
      const uploadedRes = await uploadImages(imageFiles as Array<File>, user_id);
      if (!uploadedRes?.success) {
        throw new Error('Error when try to uploading images');
      }
      setImages([...images, ...uploadedRes.data]);
    } catch (err) {
      console.log('Error:', err);
      window.alert((err as Error).message);
    }
  };

  const onRequestUserData = useCallback(async () => {
    try {
      if (isNaN(user_id) || user_id <= 0) {
        router.back();
        return;
      }
      const imagesOfUserRes = await getImagesOfUser(user_id);
      if (!imagesOfUserRes?.success) {
        throw new Error('Error when trying to upload images')
      }
      setImages(imagesOfUserRes.data);
    } catch (err) {
      console.log('Error:', err);
      window.alert((err as Error).message);
    }
  }, [router, user_id]);

  useEffect(() => {
    onRequestUserData();
  }, [onRequestUserData]);

  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-8">
      <div className="text-center">
        <h2 className="m-0 text-xl">Gallery Page</h2>
        <p className="m-0 text-sm">Username: {username}</p>
      </div>
      <div className="container">
        <div className="mb-6">
          <input
            id="upload-input"
            onChange={onUpload}
            type="file"
            accept="image/*" 
            multiple
            
          />
          <label
            htmlFor="upload-input"
            role="button"
            className="cursor-pointer focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            UPLOAD
          </label>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {images.map((imageUrl, index) => (
            <ImageItem key={index} url={imageUrl} />
          ))}
        </div>
      </div>
    </main>
  );
}
