import React from "react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header>
        <h1 className="fs-4">Dark Weather</h1>
        <h2 className="text-center my-5 fs-3">
          Seeing the weather of the whole world <br />
          with <span className={style.spanColor}>Dark Weather!</span>
        </h2>
      </header>
    </>
  );
}
