"use client";

import { register } from "@/services/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onRegister = async (e: any) => {
    e.preventDefault();
    try {
      if (!username || username.trim() === '') {
        throw new Error('Error when undefined username');
      }
      setLoading(true);
      const registeredRes = await register(username);
      setLoading(false);
      if (!registeredRes?.success) {
        throw new Error('Error when registering with username');
      }
      const uname = registeredRes.data.username;
      const uid = registeredRes.data.id;
      router.push(`/gallery?username=${uname}&userid=${uid}`);
    } catch (err) {
      console.log('Error:', err);
      window.alert((err as Error).message)
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="m-0 text-lg">
        You have to register a username to upload and download gallery images
      </h2>
      <form onSubmit={onRegister} className="container mx-auto max-w-screen-sm">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Please input username..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            disabled={loading}
            type="submit"
            className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go to Gallery
          </button>
        </div>
      </form>
    </main>
  );
}
