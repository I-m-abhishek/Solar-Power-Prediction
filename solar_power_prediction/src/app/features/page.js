'use client';
import {React, useEffect }from "react";
import AOS from 'aos';
function features() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])  

    const feature_imp = {"Temperature at 2 meters above the ground":-0.0831202095,"Relative humidity at 2 meters above the ground":-0.1060344323,"Mean sea level pressure":0.1176043104,"Total precipitation at the surface":-0.0019499833,"Snowfall amount at the surface":0.0122035206,"Total cloud cover at the surface":-0.0853682636,"High-level cloud cover in the high cloud layer":-0.0275538812,"Medium-level cloud cover in the mid-level cloud layer":-0.0449632463,"Low-level cloud cover in the low cloud layer":-0.0450913885,"Shortwave radiation at the surface":0.3800936371,"Wind speed at 10 meters above the ground":0.0,"Wind direction at 10 meters above the ground":0.0105151165,"Wind speed at 80 meters above the ground":0.0538507705,"Wind direction at 80 meters above the ground":0.0150801662,"Wind speed at 900 millibars (mb) pressure level":-0.106695277,"Wind direction at 900 millibars (mb) pressure level":0.0,"Wind gust at 10 meters above the ground ":-0.01625386,"Angle of incidence":-0.4405263372,"Solar zenith angle":-0.1431061976,"Solar azimuth angle":-0.4310704873};
  return (
    <>
     <div data-aos="fade-right"
      className="bg-cover p-2 sm:p-24 sm:pt-1 sm:pb-1 flex items-center w-full justify-center "
        style={{
          // linear-gradient(rgba(135, 80, 156, 0.7), rgba(135, 80, 156, 0.7)),
          backgroundImage:
            ' url("../bg.jpg")',
        }}>
          <div className="p-1 sm:p-4 sm:pb-2 md:p-4">
            <img
              className="h-10 w-10 sm:h-24 sm:w-24 animate-spin"
              src="../sun-hd.png"
              alt="Sun"
            />
          </div>
          <p className="font-extrabold text-3xl sm:text-5xl md:text-7xl md:text-left lg:text-center  p-1 sm:p-4 text-transparent bg-clip-text bg-gradient-to-tl from-white to-amber-300/90">
            Solar Power Predictor
          </p>
        </div>
      <div  className="bg-[#ebf2fc]  sm:p-16 md:p-28 lg:p-36 lg:pt-1 md:pt-1 sm:pt-1 sm:pb-3 md:pb-5 lg:pb-10 font-mono">
          <p data-aos="fade-left"
      className="sm:p-2 sm:mt-2 rounded-md   text-4xl font-bold text-center text-white bg-[#25335b]">About the Model </p>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-[#cddcf661] p-1 sm:p-3 sm:pt-0 rounded-md">
        <div className="p-1 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16">
        
           <div className="p-1 sm:p-2 sm:pt-2 md:p-3 md:pt-2">
          <div>
            <span className="text-xl font-semibold">Model Type: </span>{" "}
            Artificial Neural Network (ANN) - <span className="text-xl font-semibold">Neural Network Architecture</span>
            <ul className="list-disc list-inside">
                <li><span className="text-xl font-semibold">Input Layer:</span> 32 neurons with ReLU activation function.</li>
                <li><span className="text-xl font-semibold">Hidden Layer:</span> 64 neurons with ReLU activation function.</li>
                <li><span className="text-xl font-semibold">Output Layer:</span> 1 neuron for regression.</li>
                <li className="sm:pt-4  list-none flex items-center justify-center">
                    <img className="p-1 self-center mix-blend-multiply" src="./Network-architecture.png" alt="Model Architecture"  />
                </li>
            </ul>
          </div>

          <p>
            <span className="text-xl font-semibold">Purpose: </span> The model
            predicts solar power generation based on various input features.
          </p>
          <div>
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
          </div>
          <div>
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
          </div>
          </div>
          </div>
        </div>

        <div >
        <p data-aos="fade-up" className="sm:p-2 sm:mt-3 rounded-md  text-4xl font-bold text-center text-white bg-[#25335b]">Model Input Parameters </p>
        <table data-aos="fade-up" className="w-full border-collapse border border-[#413b3b] table-auto">
  <thead >
    <tr className="bg-[#4d51da]">
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Parameter</th>
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">Temperature at 2 meters above the ground </td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">Celsius</td>
    </tr>
    <tr  className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">Relative humidity at 2 meters above the ground</td>
      <td className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">Percentage</td>
     
    </tr>
    <tr  className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
        Mean sea level pressure</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Hectopascals (hPa) or millibars (mb)</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Total precipitation at the surface </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Millimeters or liters per square meter</td>
    </tr>
    <tr  className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Snowfall amount at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Centimeters</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Total cloud cover at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Percentage</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      High-level cloud cover in the high cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Percentage</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Medium-level cloud cover in the mid-level cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Percentage</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Low-level cloud cover in the low cloud layer</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Percentage</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Shortwave radiation at the surface</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Watts per square meter</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind speed at 10 meters above the ground</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Meters per second</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind direction at 10 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees(0-360)</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind speed at 80 meters above the ground</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Meters per second</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind direction at 80 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees(0-360)</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind speed at 900 millibars (mb) pressure level</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Meters per second</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind direction at 900 millibars (mb) pressure level </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees(0-360)</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Wind gust at 10 meters above the ground </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Meters per second</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Angle of incidence (specific to solar radiation) </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Solar zenith angle (specific to solar radiation) </td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Solar azimuth angle (specific to solar radiation)</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Degrees</td>
    </tr>
    <tr className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Generated solar power</td>
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">
      Watts</td>
    </tr>
  </tbody>
        </table>

        </div>

        <div data-aos="fade-up" >
            <p className="sm:p-2 sm:mt-3  rounded-md   text-4xl font-bold text-center text-white bg-[#25335b]">Model Results</p>
            <div data-aos="fade-up" className="">
              <div className="pt-1 md:pt-3 bg-[#cddcf661] rounded-md">
              <p className="text-3xl font-bold text-center">Comparison between Predicted and Real Generated Power.</p>
              <img className="mix-blend-multiply" src="./generated_power_comparison_plot_new.png" alt="Comparison between Predicted and Real Generated Power." />
              </div>
            </div>
            <div data-aos="fade-up" className="sm:pt-2   md:pt-3 ">
              <div className="pt-1 md:pt-3 bg-[#cddcf661] rounded-md">
              <p className="text-3xl font-bold text-center">Comparison of Solar Azimuth with Predicted and Real Generated Power.</p>
              <img className="mix-blend-multiply" src="./generated_power_comparison_vs_solar_azimuth_plot.png" alt="Solar Azimuth vs. Predicted and Real Generated Power" />
              </div>
            </div>
            <div data-aos="fade-up" className="sm:pt-2   md:pt-3 ">
              <div className="pt-1 md:pt-3 bg-[#cddcf661] rounded-md">
              <p className="text-3xl font-bold text-center">Correlation Heatmap: Understanding Relationships in the Dataset</p>
              <p className="p-1 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16">
A heatmap is a graphical representation of data where individual values contained in a matrix are represented as colors. It is a way of visualizing data in a 2D space, where the values of each matrix element are represented as colors. Heatmaps are particularly useful for showing the correlation or distribution of values across two dimensions</p>
              <img className="mix-blend-multiply" src="./heatmap_plot.png" alt="Correlation Heatmap: Understanding Relationships in the Dataset" />
              </div>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p className="sm:p-2 sm:mt-3  rounded-md   text-4xl font-bold text-center text-white bg-[#25335b]">Model statistics</p>
            
            <div className="pt-1 md:pt-3 bg-[#cddcf661] rounded-md">
            <div data-aos="fade-up" className="p-1 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16">
              <p><span className="font-semibold text-2xl">R-squared (R2) score : </span>The R-squared (R2) score is a metric used in regression analysis to assess how well a model's predictions align with the observed data. Ranging from 0 to 1, a higher R2 indicates a better fit, with 1 representing a perfect fit and 0 indicating no improvement over a mean-based model. The score quantifies the proportion of variance in the dependent variable explained by the independent variables. It is valuable for comparing models and assessing their predictive power. However, limitations exist, and complementary metrics should be considered for a comprehensive evaluation of regression models.</p>
              <p className="font-semibold text-2xl pt-1 sm:pt-2 md:pt-3">Mean of Test Set:</p>
              <ul>
                <li><span className="font-semibold">Definition: </span>The average (arithmetic mean) of the predicted values or target variable in the test set.
                </li>
                <li><span className="font-semibold">Use: </span>Provides a central measure of the model's predicted values on the test data.
                </li>
              </ul>


<p className="font-semibold text-2xl pt-1 sm:pt-2 md:pt-3" >Standard Deviation of Test Set:</p>
<ul>
    <li>
    <span className="font-semibold">Definition: </span>A measure of the amount of variation or dispersion of the predicted values around the mean.
    </li>
    <li>
    <span className="font-semibold">Use: </span>Indicates how spread out the predictions are, helping to assess the model's consistency.
    </li>
</ul>
<p className="font-semibold text-2xl pt-1 sm:pt-2 md:pt-3" >Relative Standard Deviation (Coefficient of Variation):</p>
<ul>
    <li>
    <span className="font-semibold">Definition: </span>The ratio of the standard deviation to the mean, expressed as a percentage.
    </li>
    <li>
    <span className="font-semibold">Use: </span>Provides a normalized measure of variability, allowing comparison of variability relative to the mean. Useful for comparing models with different scales.
    </li>
</ul>

              </div>
        <div data-aos="fade-up" className="pt-1 pb-1 sm:pt-2 sm:pb-2 md:pt-5 md:pb-3 sm:pl-10 sm:pr-20 md:pl-16 md:pr-32">      
              <table className=" w-full border-collapse border border-[#413b3b] table-auto">
  <thead >
    <tr className="bg-[#4d51da]">
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Statistic</th>
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">R2 Score of Whole Data Frame</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">0.867086</td>
    </tr>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">R2 Score of Training Set</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">0.913460</td>
    </tr>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">R2 Score of Test Set</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">0.761501</td>
    </tr>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">Mean of Test Set</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">1092.545532</td>
    </tr>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">Standard Deviation of Test Set</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">896.916748</td>
    </tr>
    <tr   className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
      <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">Relative Standard Deviation</td>
      <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">0.820942</td>
    </tr>
    </tbody>
    </table>
    </div>
    <div data-aos="fade-up" className="p-1 sm:pl-10 sm:pr-10 md:pl-16 md:pr-16">

    <p>
    <span className="font-bold text-2xl">Feature importance : </span>Feature importance is a concept in machine learning that quantifies the contribution of each input variable (feature) to the model's predictive performance. It helps identify the most influential features in making accurate predictions. Techniques such as tree-based models (e.g., decision trees, random forests) and algorithms like permutation importance are commonly used to assess feature importance. High importance values suggest that a feature has a significant impact on the model's ability to make accurate predictions, aiding in understanding the key drivers behind the model's decision-making process. Feature importance is valuable for feature selection, model interpretation, and enhancing overall model understanding.
    </p>
    <div data-aos="fade-up" className="md:pr-16 sm:pr-10 pt-1 sm:pt-2 md:pt-4 pb-1 sm:pb-2 md:pb-4">
    <table className=" w-full border-collapse border border-[#413b3b] table-auto">
  <thead >
    <tr className="bg-[#4d51da]">
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Feature Importance</th>
      <th  className="text-2xl font-semibold border border-[#413b3b] text-white">Value</th>
    </tr>
  </thead>
  <tbody>{
       Object.entries(feature_imp).map(([key, value]) => {
    return  <tr  key={key} className="odd:bg-[#b5cfff61] even:bg-[#cddcf661]">
    <td  className="text-center pl-1 sm:pl-2 md:pl-3  border border-[#413b3b]">{key}</td>
    <td  className="text-center  pl-1 sm:pl-2 md:pl-3 border border-[#413b3b]">{value}</td>
  </tr>
})
}

    </tbody>
    </table>
    </div>
    </div>
    </div>
        </div>
      </div>
    </>
  );
}

export default features;
