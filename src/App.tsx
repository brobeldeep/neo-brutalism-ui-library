import { useReducer } from "react";

export type COPY_ACTION_TYPE = { type: "copied" } | { type: "done" };
export type WINDOW_HEIGHT_ACTION_TYPE = { type: boolean };



function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#A5B4FB]">
      <div className="flex flex-col space-y-6 p-6 bg-white rounded-lg shadow-md">
        <input
          className="w-full max-w-md border-black border-2 p-2.5 placeholder-gray-500 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          type="email"
          placeholder="you@example.com"
        />
        <input
          className="w-full max-w-md border-black border-2 p-2.5 placeholder-gray-500 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full max-w-md border-black border-2 p-2.5 placeholder-gray-500 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
          type="tel"
          placeholder="Mobile Number"
        />
<div className="w-full max-w-md">
  <label htmlFor="file-upload" className="block text-black mb-1">
    Upload Bill
  </label>
  <input
    id="file-upload"
    className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
    type="file"
  />
</div>
        <button
          className="h-12 w-full max-w-md border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]"
        >
          Simple Button
        </button>
      </div>
    </div>
  );
}

export default App;
