import React from "react";

function features() {
  return (
    <>
      <div className="bg-gradient-to-bl from-yellow-200 via-red-200 to-white p-2 sm:p-16 md:p-28 lg:p-36 lg:pt-1 md:pt-1 sm:pt-1 sm:pb-1 font-mono">
        <div>
          <p className="pt-3 pb-2 text-5xl font-bold">About the model :-</p>
           <div className="p-1 sm:p-2 sm:pt-2 md:p-3 md:pt-2 border border-pink-600">
          <p>
            <span className="text-xl font-semibold">Model Type: </span>{" "}
            Artificial Neural Network (ANN)
          </p>

          <p>
            <span className="text-xl font-semibold">Purpose: </span> The model
            predicts solar power generation based on various input features.
          </p>
          <p>
            <span className="text-xl font-semibold">Evaluation: </span> The
            model is evaluated using:
            <ul className="list-disc list-inside">
              <li>
                <span className="text-xl font-semibold">
                  Mean Squared Error (MSE):{" "}
                </span>{" "}
                Measures the average squared difference between predicted and
                actual values.
              </li>
              <li>
                <span className="text-xl font-semibold">
                  Root Mean Squared Error (RMSE):{" "}
                </span>{" "}
                Square root of MSE, representing the average magnitude of the
                error in the same units as the target variable.
              </li>
            </ul>
          </p>
          <p>
            <span className="text-xl font-semibold">Training Details: </span>
            <ul className="list-disc list-inside">
              <li>
                The model is trained on 75% of the data (training set) and
                evaluated on the remaining 25% (test set).
              </li>
              <li>
                A random seed (42) is used to ensure reproducible results.
              </li>
              <li>
                Feature scaling (standardization) is applied to both input
                features and the target variable.
              </li>
              <li>
                <span className="">The model has: </span>
                <ol className="list-decimal list-inside ps-2">
                  <li>
                    Two hidden layers with 32 and 64 neurons, respectively.
                  </li>
                  <li>ReLU activation function in both hidden layers.</li>
                  <li>Trained for 150 epochs.</li>
                </ol>
              </li>
            </ul>
          </p>
          </div>
        </div>

        <div>
        <p className="pt-3 pb-2 text-5xl font-bold">Model Input Parameters :-</p>
        <table className=" w-full border-collapse border border-pink-600 table-auto">
  <thead>
    <tr>
      <th  className="text-2xl font-semibold border border-pink-600">Parameter</th>
      <th  className="text-2xl font-semibold border border-pink-600">Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">Temperature at 2 meters above the ground </td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-pink-600">celsius</td>
    </tr>
    <tr>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-pink-600">Relative humidity at 2 meters above the ground</td>
      <td className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">Percentage</td>
     
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
        Mean sea level pressure</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      hectopascals (hPa) or millibars (mb)</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Total precipitation at the surface </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      millimeters or liters per square meter</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Snowfall amount at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      millimeters or liters per square meter</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Total cloud cover at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      "" </td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      High-level cloud cover in the high cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      percentage</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Medium-level cloud cover in the mid-level cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      percentage</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Low-level cloud cover in the low cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      percentage</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Shortwave radiation at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      watts per square meter</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind speed at 10 meters above the ground</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      meters per second</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind direction at 10 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind speed at 80 meters above the ground</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      meters per second</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind direction at 80 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind speed at 900 millibars (mb) pressure level</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      meters per second</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind direction at 900 millibars (mb) pressure level </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Wind gust at 10 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      meters per second</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Angle of incidence (specific to solar radiation) </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Solar zenith angle (specific to solar radiation) </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Solar azimuth angle (specific to solar radiation)</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      degrees</td>
    </tr>
    <tr>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      Generated solar power</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-pink-600">
      kilowatts</td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </>
  );
}

export default features;
