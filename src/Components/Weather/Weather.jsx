import React from "react";
import Day from "../Day/Day";

export default function Weather({ weatherData, errorMsg }) {
  return (
    <>
      <div className="py-5 mt-4 m-auto">
        <Day weatherData={weatherData} errorMsg={errorMsg} />
      </div>
    </>
  );
}
