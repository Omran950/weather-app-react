import { useState } from "react";
import style from "./SearchBar.module.css";
export default function SearchBar({ setCity }) {
  const [inputValue, setInputValue] = useState("");
  function submitForm(e) {
    e.preventDefault();
    setCity(inputValue);
  }

  return (
    <form
      onSubmit={submitForm}
      className="d-flex align-items-center justify-content-center gap-4"
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className={`p-3 w-75 text-white d-block ${style.searchBar}`}
        placeholder="Search here"
      />
      <button
        type="submit"
        className={`btn py-2 px-4 rounded-4  ${style.button}`}
      >
        Search
      </button>
    </form>
  );
}
