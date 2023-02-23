import React, { useState } from "react";
import searchicon from "../images/icon-search.svg";
import "./SearchBar.css";

export default function SearchBar({ fetchUser, userFound }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchUser = (event) => {
    event.preventDefault();
    fetchUser(searchTerm);
    console.log("test");
  };

  return (
    <form className="search-bar" onSubmit={(e) => searchUser(e)}>
      <img className="search-icon" src={searchicon} alt="search" />
      <div className="search-bar-input">
        <input
          placeholder="Search Github username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {!userFound ? <span className="not-found">Not Found</span> : ""}
      </div>

      <button className="search-btn">Search</button>
    </form>
  );
}
