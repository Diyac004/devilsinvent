import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuUpload } from "react-icons/lu";

export default function GridPatternDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-background md:shadow-xl" style={{ backgroundImage: "url('/img.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(0, 0, 0, 0)' }}>

      <p className="z-10 mt-[100px] whitespace-pre-wrap text-9xl font-medium tracking-tighter text-white bg-clip-text text-transparent">
      AeroDocs
      </p>

      <p className="z-10 mt-4 whitespace-pre-wrap text-2xl font-medium text-center text-white dark:text-white    px-4 py-2 shadow-lg bg-gradient-to-r from-zinc-500 via-zinc-700 to-black bg-clip-text text-transparent">
      AI-Powered Assembly Training and Documentation System
      </p>

      <div className="flex gap-4 mt-8">
      {/* First Button with Upload Icon and Description */}
      <button className="w-80 h-30 flex flex-col items-center justify-center rounded-xl bg-black text-white border text-lg border-silver-300 py-4 px-7 shadow-lg hover:bg-gray-800 transition duration-300">
        <MdDriveFolderUpload className="text-3xl mb-2" />
        <span className="text-lg font-semibold">Upload Documents</span>
      </button>

      {/* Second Button with Search Icon and Description */}
      <button className="w-80 h-30 flex flex-col items-center justify-center rounded-xl bg-black text-white border text-lg border-silver-300 py-4 px-7 shadow-lg hover:bg-gray-800 transition duration-300">
        <FaSearch className="text-3xl mb-2" />
        <span className="text-lg font-semibold">Search Resources</span>
      </button>
      </div>

      {/* Form Section Below Buttons */}
      <div className="mt-8 w-3/5 max-w-3xl bg-transparent text-white p-6 rounded-xl shadow-lg">
      {/* Title Input */}
      <div className="mb-6">
        <label htmlFor="title" className="text-lg font-bold mb-2 block">Title</label>
        <input
        id="title"
        type="text"
        className="w-full bg-black text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
        placeholder="Enter the title here"
        />
      </div>

      {/* File Intake Section */}
      <div className="mb-6">
        <label htmlFor="file-upload" className="text-lg font-bold mb-2 bg-white text-black inline-block">Upload File</label>
        <div className="flex items-center justify-center border-2 border-dashed border-gray-700 p-4 rounded-md bg-black">
        <LuUpload className="text-3xl text-gray-400 mr-2" />
        <input
          id="file-upload"
          type="file"
          className="w-full text-white bg-black focus:outline-none"
        />
        </div>
        <p className="mt-2 text-sm text-gray-400">Upload .pdf, .docx, .mp4, .png, .jpeg</p>
      </div>

      {/* Comments/Description Section */}
      <div className="mb-6">
        <label htmlFor="comments" className="text-lg font-bold mb-2 block">Comments/Description</label>
        <textarea
        id="comments"
        className="w-full bg-black text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-zinc-300"
        placeholder="Add any additional comments or description here"
        rows={4}
        />
      </div>
      </div>

      
    </div>
  );
}
