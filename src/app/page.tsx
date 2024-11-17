"use client";
import React, { useState } from "react";
import { MdDriveFolderUpload, MdOutlineMenuOpen } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import ShimmerButton from "@/components/ui/shimmer-button";
import { UploadButton } from "@/utils/uploadthing";
import { LuUpload } from "react-icons/lu";

export default function GridPatternDemo() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [fileUrl, setFileUrl] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleToggle = () => {
    setIsSearchMode((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((item) => item !== category) // Deselect if already selected
          : [...prev, category] // Select if not already selected
    );
  };

  const handleSubmit = async () => {
    if (!title || !videoUrl || !fileUrl || !comments) {
      alert("Please fill out all fields!");
      return;
    }

    // Do something with the form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("videoUrl", videoUrl);
    formData.append("comments", comments);

    // attach the file to the form data
    const file = await fetch(fileUrl).then((res) => res.blob());
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
      style={{
        backgroundImage: "url('img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <p className="z-10 mt-[100px] text-9xl font-bold tracking-tighter text-black">
        AeroDocs
      </p>

      <p className="text-black font-bold">------------------------------</p>

      <p className="z-10 mt-4 whitespace-pre-wrap text-2xl font-medium text-center text-black dark:text-white px-4 py-2">
        AI-Powered Assembly Training and Documentation System
      </p>
          <div className="flex gap-4 mt-8 justify-center ">
            {/* Upload Documents Button */}
            <ShimmerButton
              className="w-60 h-16 flex flex-col items-center justify-center rounded-xl shadow-2xl bg-black"
              onClick={() => setIsSearchMode(false)}
            >
              <p className="text-lg font-semibold py-14 text-white">
                Upload Documents
              </p>
            </ShimmerButton>

            {/* Search Resources Button */}
            <ShimmerButton
              className="w-60 h-16 flex flex-col items-center justify-center rounded-xl shadow-2xl bg-black"
              onClick={handleToggle}
            >
              <span className="text-lg font-semibold text-white">
                Search Resources
              </span>
            </ShimmerButton>
          </div>

      {!isSearchMode ? (
        <>
          <div className="mt-12 mb-14 max-w-3xl bg-gray-200 opacity-80 border-solid text-black p-6 rounded-xl shadow-lg">
            {/* Title Input */}
            <div className="mb-6">
              <label htmlFor="title" className="text-lg font-bold mb-1 block">
                Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-2 bg-white rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-zinc-400"
                placeholder="Enter the title here"
              />
            </div>

            {/* File Intake Section */}
            <div className="mb-6">
              <label
                htmlFor="file-upload"
                className="text-lg font-bold mb-2 text-black "
              >
                Upload video
              </label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-600 p-4 rounded-md bg-black">
                <LuUpload className="text-3xl text-gray-400 mr-2" />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res[0].url);
                    setVideoUrl(res[0].url);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
                <input
                  type="file"
                  id="file-upload"
                  accept=".pdf"
                  placeholder="Upload video"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFileUrl(URL.createObjectURL(file));
                    }
                  }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-300">Upload video</p>
            </div>

            {/* Comments/Description Section */}
            <div className="mb-2">
              <label
                htmlFor="comments"
                className="text-lg font-bold mb-2 block"
              >
                Comments/Description
              </label>
              <textarea
                id="comments"
                className="w-full text-black p-3 bg-white rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-zinc-400"
                placeholder="Add any additional comments or description here"
                rows={4}
              />
            </div>
            {/* file input, like a normal html file input */}

            <button type="submit" onClick={async () => await handleSubmit()}>
              Submitt
            </button>
          </div>
        </>
      ) : (
       <>
            <div className="mb-6">
             
            </div>

            <div className="mt-4 mb-10 py-6 w-3/5 max-w-3xl bg-gray-200 opacity-80 border-solid border-black text-black p-6 rounded-xl shadow-lg">
            <div className="flex items-center border border-gray-600 rounded-lg p-3 w-full max-w-2xl mx-auto transition-all duration-300 ease-in-out hover:shadow-lg">
                {/* Custom Icon for Menu */}
                <MdOutlineMenuOpen
                  onClick={handleDropdownToggle}
                  className="text-2xl text-gray-600 cursor-pointer mr-2"
                />
                <input
                  id="search"
                  type="text"
                  className="w-full text-gray-700 focus:outline-none placeholder-gray-500"
                  placeholder="Search for resources"
                />
                <IoMdSend className="text-2xl text-gray-600 cursor-pointer ml-2" />
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute mt-2 bg-zinc-800 shadow-lg rounded-md w-68 max-w-xl mx-auto z-20 border border-gray-300">
                  <ul className="text-zinc-200 p-2">
                    <li className="cursor-pointer p-2 hover:bg-gray-500 hover:rounded-lg">
                      Scan a Barcode
                    </li>
                    <li className="cursor-pointer p-2 hover:bg-gray-500 hover:rounded-lg">
                      Upload an Image
                    </li>
                    <li className="cursor-pointer p-2 hover:bg-gray-500 hover:rounded-lg">
                      Input a Part Number
                    </li>
                  </ul>
                </div>
              )}
              <p className="mb-4 text-lg text-center font-semibold text-gray-800">
                CATEGORIES
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  "Component Details",
                  "Assembly Procedures",
                  "System Integrations",
                  "Troubleshooting & Maintenance",
                  "Quality Assurance",
                ].map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2 p-2 bg-white border-[1px] border-black rounded-lg hover:shadow-md transition duration-200"
                  >
                    <input
                      type="checkbox"
                      id={category}
                      checked={selectedCategories.includes(category as Category)}
                      onChange={() => handleCategoryChange(category as Category)}
                      className="w-5 h-5 border-2 border-black rounded-md cursor-pointer focus:ring-2 focus:ring-black transition duration-200"
                    />
                    <label
                      htmlFor={category}
                      className="text-lg font-semibold text-gray-800 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </>
      )}
    </div>
  );
}
