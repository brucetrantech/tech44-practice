/* eslint-disable @next/next/no-img-element */
"use client";

import { saveAs } from "file-saver";

interface ImageItemProps {
  url: string;
}

const ImageItem = ({ url }: ImageItemProps) => {
  const downloadImage = () => {
    const split = url.split("/");
    const fileName = split?.at ? split.at(-1) : split[split.length - 1];
    saveAs(url, fileName);
  };
  return (
    <div>
      <img
        src={url}
        alt="Image"
        style={{ width: 800 }}
        className="w-full h-auto"
      />
      <button
        className="cursor-pointer mt-1 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={downloadImage}
      >
        Download
      </button>
    </div>
  );
};

export default ImageItem;
