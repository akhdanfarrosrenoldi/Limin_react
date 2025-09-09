function App() {
  return (
    <>
      <div class="ml-32 w-full">
        <div class="p-12 ">
          <div class="h-28 mb-4 flex items-center justify-between px-3 py-5 bg-[#29a1ff]">
            <div>
              <p class="text-xs font-semibold text-white">OCEAN STAR</p>
              <p class="text-2xl font-semibold text-white">SEPT2020/DD1</p>
              <p class="text-sm text-[#cce9ff]">DD Required change BWT</p>
            </div>
            <div>
              <button class="bg-white hover:bg-gray-200 text-[#29a1ff] text-sm py-2 px-4 rounded">
                Start Dry Dock
              </button>
            </div>
          </div>

          <div class="grid grid-cols-3">
            <div class="flex flex-col justify-center h-12 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Dry Docks No</p>
              <p class="px-3">SEPT2020/DD1</p>
            </div>
            <div class="flex flex-col justify-center h-12 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Description</p>
              <p class="px-3">DD Required to change BWT</p>
            </div>
            <div class="flex flex-col justify-center h-12 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Company</p>
              <p class="px-3">UHC Pvt. Ltd.</p>
            </div>
            <div class="flex flex-col justify-center h-24 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Account Code</p>
              <p class="px-3">ABC-123</p>
            </div>
            <div class="flex flex-col justify-center h-24 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Responsible Rank</p>
              <p class="px-3">Roshan Ahluwalia/CE</p>
            </div>
            <div class="flex flex-col justify-center h-24 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Budget</p>
              <p class="px-3">200,000$</p>
            </div>
            <div class="flex flex-col justify-center h-12 bg-[#fafafa]">
              <p class="text-gray-500 px-3">Budget</p>
              <p class="px-3">200,000$</p>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-3">
            <div class="flex flex-col justify-center h-12 bg-white">
              <p class="text-gray-500 px-3">Planned Start Date</p>
              <p class="px-3">01/01/2020</p>
            </div>
            <div class="flex flex-col justify-center h-12 bg-white">
              <p class="text-gray-500 px-3">Planned End Date</p>
              <p class="px-3">01/01/2020</p>
            </div>
            <div class="flex flex-col justify-center h-12 bg-white">
              <p class="text-gray-500 px-3">Actual Start Date</p>
              <p class="px-3">01/01/2020</p>
            </div>
            <div class="flex flex-col justify-center h-24 bg-white">
              <p class="text-gray-500 px-3">Actual End Date</p>
              <p class="px-3">01/01/2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
