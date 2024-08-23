import React from "react";
import style from "./Day.module.css";
export default function Day({ weatherData, errorMsg }) {
  const day = new Date();
  const dayName = day.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <div className={`py-2  w-25 m-auto ${style.card}`}>
        {errorMsg ? (
          <h4 className="py-2  text-center">{errorMsg}</h4>
        ) : (
          <div className="ps-4">
            <div className=" position-relative">
              {weatherData.weather[0].main === "Clear" ? (
                <img
                  src={require("../../Images/sun.png")}
                  alt=""
                  className={style.image}
                />
              ) : weatherData.weather[0].main === "Clouds" ? (
                <img
                  src={require("../../Images/pcloudy.png")}
                  alt=""
                  className={style.image}
                />
              ) : (
                <img
                  src={require("../../Images/Tshower.png")}
                  alt=""
                  className={style.image}
                />
              )}
            </div>
            <h4 className="py-2 mt-5 pt-5">
              {weatherData.name}
              <span className="ms-1 fw-light opacity-75">
                {weatherData.main.temp.toFixed()}°C
              </span>
            </h4>
            <p>
              wind speed :
              <span className="ms-1 fw-light opacity-75">
                {weatherData.wind.speed} km{" "}
              </span>
            </p>
            <p>{dayName}</p>
            <p>{weatherData.weather[0].main}</p>{" "}
          </div>
        )}
      </div>
    </>
  );
}
