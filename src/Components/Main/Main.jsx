import React, { useEffect, useState } from "react";
import Header from "./../Header/Header";
import Weather from "../Weather/Weather";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Main.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";

export default function Main() {
  const [city, setCity] = useState("cairo");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function getWeatherData() {
    setisLoading(true);
    setErrorMsg("");
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=979e237b0f5e09e3c71616ac4781af58&units=metric`
      );

      console.log(res.data.weather[0].main);
      setWeatherData(res.data);
      setisLoading(false);
    } catch (err) {
      console.log(err.message);
      setErrorMsg("Not Found");
    }
    setisLoading(false);
  }

  useEffect(() => {
    getWeatherData();
  }, [city]);

  return (
    <>
      <div className={`${style.main} p-5 text-white vh-100`}>
        <Header />
        <SearchBar setCity={setCity} />
        {!weatherData ? (
          ""
        ) : isLoading ? (
          <Loader />
        ) : (
          <Weather weatherData={weatherData} errorMsg={errorMsg} />
        )}
      </div>
    </>
  );
}
