export const SearchAnimal = () => {
  return (
    <div className="mt-20 flex items-end flex-wrap gap-x-6">
      <div className="flex flex-col items-start max-w-[150px] w-full">
        <label
          htmlFor="email"
          className="text-sm mb-1 font-medium leading-6 text-gray-900 dark:text-white"
        >
          Select animal
        </label>
        <select
          title="Select animal"
          id="selectAnimal"
          name="selectAnimal"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Dog"
        >
          <option>Dog</option>
          <option>Cat</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col items-start w-full max-w-[250px]">
        <label
          htmlFor="email"
          className="text-sm mb-2 font-medium leading-6 text-gray-900 dark:text-white"
        >
          Animal
        </label>
        <input
          type="text"
          name="animal"
          id="animal"
          className="block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search animal..."
        />
      </div>
      <button className="rounded-md max-w-[120px] w-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Search
      </button>
    </div>
  );
};
