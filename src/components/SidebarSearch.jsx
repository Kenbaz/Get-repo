import { useState } from "react";

function SidebarSearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  }

  return (
    <div className="w-full rounded-md border-2 border-secondary hover:border-cyan-700 h-full">
      <input
        className="w-full h-full rounded-md placeholder-gray-800 bg-tinWhite text-gray-800 relative font-medium focus:outline-none lg:text-md md:pl-4"
        type="text"
        placeholder="Search repository..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default SidebarSearchBar;
