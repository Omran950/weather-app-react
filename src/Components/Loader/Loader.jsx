import React from "react";
import { LineWave } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      <div className="text-center mt-4 d-flex justify-content-center">
        <LineWave
          visible={true}
          height="200"
          width="200"
          color="#FCD53F"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    </>
  );
}
