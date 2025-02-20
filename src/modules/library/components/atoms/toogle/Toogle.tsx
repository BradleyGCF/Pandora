
export const ToogleSmall = () => {
  return (
    <div className="flex flex-col m-2">
      <label className="inline-flex peer items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-9 h-5 outline-none bg-[#BFDBFE] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-900 dark:peer-checked:bg-blue-900"></div>
      </label>
    </div>
  );
};

export const ToogleMedium = () => {
  return (
    <div>
  <label className="inline-flex peer items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="relative w-11 h-6 outline-none bg-[#BFDBFE] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900 dark:peer-checked:bg-blue-900"></div>
  </label>
    </div>
  )
};

export const ToogleLarge = () => {
  return (
  <label className="inline-flex peer items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer" />
    <div className="relative w-12 h-6 outline-none bg-[#BFDBFE] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:top-[2px] after:start-[4px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900 dark:peer-checked:bg-blue-900"></div>
  </label>
  )
};
