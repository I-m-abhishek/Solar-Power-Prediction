"use client";
import React, { useRef, useState } from 'react';
function Page() {
 
  const dataform = useRef();
  const [generated_visibility, setGenerated_visibility] = useState("hidden")
  const [predicted_power, setPredicted_power] = useState(null);
  const [formData, setFormData] = useState({
    temperature_2_m_above_gnd :" ",
    relative_humidity_2_m_above_gnd :" ",
    mean_sea_level_pressure_MSL:" " ,
    total_precipitation_sfc:" ",
    snowfall_amount_sfc:" ",
    total_cloud_cover_sfc:" ",
    high_cloud_cover_high_cld_lay:" ",
    medium_cloud_cover_mid_cld_lay:" ",
    low_cloud_cover_low_cld_lay:" ",
    shortwave_radiation_backwards_sfc:" ",
    wind_speed_10_m_above_gnd:" ",
    wind_direction_10_m_above_gnd:" ",
    wind_speed_80_m_above_gnd:" ",
    wind_direction_80_m_above_gnd:" ",
    wind_speed_900_mb:" ",
    wind_direction_900_mb:" ",
    wind_gust_10_m_above_gnd:" ",
    angle_of_incidence:" ",
    zenith:" ",
    azimuth:" ",
    
  });
  
  const reset_generation = (e) =>{
    e.preventDefault();
    setGenerated_visibility(" hidden ")

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGenerated_visibility(" ");
    try {
      const formDataArray = Object.values(formData);
      const requestBody = {
        input_data: formDataArray
      };
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      const prediction_data = data.prediction[0][0];
      setPredicted_power(prediction_data);
      console.log(prediction_data);
      if (response.ok) {
        const form = dataform.current;
        if (form) {
          form.reset();
    setFormData({
    temperature_2_m_above_gnd :" ",
    relative_humidity_2_m_above_gnd :" ",
    mean_sea_level_pressure_MSL:" " ,
    total_precipitation_sfc:" ",
    snowfall_amount_sfc:" ",
    total_cloud_cover_sfc:" ",
    high_cloud_cover_high_cld_lay:" ",
    medium_cloud_cover_mid_cld_lay:" ",
    low_cloud_cover_low_cld_lay:" ",
    shortwave_radiation_backwards_sfc:" ",
    wind_speed_10_m_above_gnd:" ",
    wind_direction_10_m_above_gnd:" ",
    wind_speed_80_m_above_gnd:" ",
    wind_direction_80_m_above_gnd:" ",
    wind_speed_900_mb:" ",
    wind_direction_900_mb:" ",
    wind_gust_10_m_above_gnd:" ",
    angle_of_incidence:" ",
    zenith:" ",
    azimuth:" ",
          });
          console.log('Form Reset');
        } else {
          console.error('Form Element Not Found');
        }
        console.log('Blog Created Successfully');
      } else {
        console.log('Blog Creation Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="bg-cover p-2 sm:p-24 sm:pt-1 sm:pb-1 "
        style={{
          // linear-gradient(rgba(135, 80, 156, 0.7), rgba(135, 80, 156, 0.7)),
          backgroundImage:
            ' url("../bg.jpg")',
        }}
      >
        <div className="flex items-center justify-center">
          <div className="p-1 sm:p-4 sm:pb-2 md:p-4">
            <img
              className="h-10 w-10 sm:h-24 sm:w-24"
              src="../sun-hd.png"
              alt="Sun"
            />
          </div>
          <p className="font-extrabold text-3xl sm:text-5xl md:text-7xl md:text-left lg:text-center  p-1 sm:p-4 text-transparent bg-clip-text bg-gradient-to-tl from-white to-amber-300/90">
            Solar Power Predictor
          </p>
        </div>
        <p className="text-[#3B3131] sm:font-bold text-center text-xl md:p-32 md:pb-8 p-2 sm:pt-2 sm:p-8 md:pt-3 font-mono ">
          Elevate your energy efficiency with our Solar Power Predictor –
          harnessing advanced technology to forecast solar energy generation.
          Empower your decisions, optimize renewable energy usage, and embrace a
          sustainable future.
        </p>

        <div className="flex-col sm:flex sm:flex-row sm:p-10 sm:pt-1 sm:pb-2">
          <div className="bg-[#e1cd64] p-1 sm:p-3  m-1 md:p-5 rounded-md">
            <p className="text-red-600 font-bold font-mono">
              At Solar Power Predictor, we recognize the critical role that
              solar power forecasting plays in the seamless operation and
              control of solar power plants. The efficiency of energy generation
              from solar panels is intricately linked to the doping level, PV
              array design, and crucial environmental factors. The primary
              influencers are the solar radiation incident on the panels,
              atmospheric conditions such as temperature and humidity, and the
              presence of dust on the panels. Given the inherent variability of
              these factors, the output of solar cells directly hinges on their
              dynamic interplay.
            </p>
          </div>

          <div className="p-1 sm:p-3 md:p-5 m-1 bg-white/60 rounded-md">
            <p className="text-black font-bold font-mono ">
              Solar irradiance, alongside the aforementioned environmental
              variables, undergoes continuous fluctuations throughout the day.
              It is this variability that necessitates a nuanced approach to
              forecasting for solar power plants. To achieve precision in our
              predictions, we focus on measuring the hourly averages or averages
              at specific intervals of time for these critical parameters. This
              meticulous data collection and analysis form the cornerstone of
              our forecasting methodology, ensuring a comprehensive
              understanding of a PV module's output and, consequently, the
              performance of the entire solar power plant. The essence of
              effective solar power forecasting lies in the granularity of data
              acquisition. A lower sampling rate allows for a more refined
              prediction, enabling solar power plant operators to make informed
              decisions that optimize energy efficiency and plant performance.
            </p>
          </div>
        </div>

        <div className="p-2 sm:p-10 sm:pt-2 sm:pb-2">
          <button className="p-2 m-1 font-mono bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white">
            {" "}
            <a href="#dataformcontainer">
            Get Solar Power Prediction Here{" "}
            </a>
          </button>
        </div>
       
          <div className="sm:p-5 sm:ml-10 sm:mr-10  sm:mb-5 rounded-md bg-[#a8ddf3]">
          <p className="font-extrabold font-mono text-2xl">Why Choose Solar Power Predictor?</p>
          <p className="font-mono p-2">    
          <span className="font-bold">Precision and Reliability:</span> Trust in our precise and reliable solar
          forecasts, crafted through advanced algorithms and meticulous data
          analysis. 
          </p>
          <p className="font-mono p-2">
          <span className="font-bold">Cost-Effective Decision-Making:</span> Maximize cost savings by
          aligning energy consumption with our accurate solar predictions,
          enabling strategic and cost-effective decisions. </p>
          <p className="font-mono p-2">
          <span className="font-bold">Environmental
          Stewardship:</span> Contribute to environmental sustainability by optimizing
          solar energy usage, reducing your carbon footprint, and championing
          clean energy practices.
          </p>
        </div>
        </div>  


        <div id='dataformcontainer' className="md:p-36 md:pt-5 bg-gradient-to-bl from-yellow-200 via-red-200 to-white">
        <p className="font-extrabold text-5xl text-transparent bg-clip-text bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoonwIpLUSSsQqs4uPRjGcrwTbIbZemS33Mw&usqp=CAU')]">
          Try Solar Power Predictor !!!!!!!!!
        </p>
        <form ref={dataform} id="dataform" onSubmit={handleSubmit}>    
        
        <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-4">
        <div className="">
          <label htmlFor="temperature_2_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">Temperature 2 meter above ground</label>
          <div className="mt-2">
            <input value={formData.temperature_2_m_above_gnd} onChange={handleChange} type="number" name="temperature_2_m_above_gnd" id="temperature_2_m_above_gnd" className="w-full  p-1  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="relative_humidity_2_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">Relative Humidity 2 meter above ground</label>
          <div className="mt-2">
            <input value={formData.relative_humidity_2_m_above_gnd} onChange={handleChange} type="number" name="relative_humidity_2_m_above_gnd" id="relative_humidity_2_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="mean_sea_level_pressure_MSL" className=" text-sm font-medium leading-6 text-gray-900">mean_sea_level_pressure_MSL</label>
          <div className="mt-2">
            <input value={formData.mean_sea_level_pressure_MSL} onChange={handleChange} type="number" name="mean_sea_level_pressure_MSL" id="mean_sea_level_pressure_MSL" className="w-full   p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="total_precipitation_sfc" className=" text-sm font-medium leading-6 text-gray-900">total_precipitation_sfc</label>
          <div className="mt-2">
            <input value={formData.total_precipitation_sfc} onChange={handleChange} type="number" name="total_precipitation_sfc" id="total_precipitation_sfc" className="w-full   p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="snowfall_amount_sfc" className=" text-sm font-medium leading-6 text-gray-900">snowfall_amount_sfc</label>
          <div className="mt-2">
            <input value={formData.snowfall_amount_sfc} onChange={handleChange} type="number" name="snowfall_amount_sfc" id="snowfall_amount_sfc" className="w-full rounded-md border-0 py-1.5 p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="total_cloud_cover_sfc" className=" text-sm font-medium leading-6 text-gray-900">total_cloud_cover_sfc</label>
          <div className="mt-2">
            <input value={formData.total_cloud_cover_sfc} onChange={handleChange} type="number" name="total_cloud_cover_sfc" id="total_cloud_cover_sfc" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="high_cloud_cover_high_cld_lay" className=" text-sm font-medium leading-6 text-gray-900">high_cloud_cover_high_cld_lay</label>
          <div className="mt-2">
            <input value={formData.high_cloud_cover_high_cld_lay} onChange={handleChange} type="number" name="high_cloud_cover_high_cld_lay" id="high_cloud_cover_high_cld_lay" className="w-full rounded-md border-0 py-1.5 text-gray-900 p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="medium_cloud_cover_mid_cld_lay" className=" text-sm font-medium leading-6 text-gray-900">medium_cloud_cover_mid_cld_lay</label>
          <div className="mt-2">
            <input value={formData.medium_cloud_cover_mid_cld_lay} onChange={handleChange} type="number" name="medium_cloud_cover_mid_cld_lay" id="medium_cloud_cover_mid_cld_lay" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="low_cloud_cover_low_cld_lay" className=" text-sm font-medium leading-6 text-gray-900">low_cloud_cover_low_cld_lay</label>
          <div className="mt-2">
            <input value={formData.low_cloud_cover_low_cld_lay} onChange={handleChange} type="number" name="low_cloud_cover_low_cld_lay" id="low_cloud_cover_low_cld_lay" className="w-full  p-1  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="shortwave_radiation_backwards_sfc" className=" text-sm font-medium leading-6 text-gray-900">shortwave_radiation_backwards_sfc</label>
          <div className="mt-2">
            <input value={formData.shortwave_radiation_backwards_sfc} onChange={handleChange} type="number" name="shortwave_radiation_backwards_sfc" id="shortwave_radiation_backwards_sfc" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_speed_10_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">wind_speed_10_m_above_gnd</label>
          <div className="mt-2">
            <input value={formData.titleimgurl} onChange={handleChange} type="number" name="wind_speed_10_m_above_gnd" id="wind_speed_10_m_above_gnd" className="w-full rounded-md border-0  p-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_direction_10_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">wind_direction_10_m_above_gnd</label>
          <div className="mt-2">
            <input value={formData.wind_direction_10_m_above_gnd} onChange={handleChange} type="number" name="wind_direction_10_m_above_gnd" id="wind_direction_10_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_speed_80_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">wind_speed_80_m_above_gnd</label>
          <div className="mt-2">
            <input value={formData.titleimgurl} onChange={handleChange} type="number" name="wind_speed_80_m_above_gnd" id="wind_speed_80_m_above_gnd" className="w-full rounded-md border-0  p-1  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_direction_80_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">wind_direction_80_m_above_gnd</label>
          <div className="mt-2">
            <input value={formData.wind_direction_80_m_above_gnd} onChange={handleChange} type="number" name="wind_direction_80_m_above_gnd" id="wind_direction_80_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_speed_900_mb" className=" text-sm font-medium leading-6 text-gray-900">wind_speed_900_mb</label>
          <div className="mt-2">
            <input value={formData.wind_speed_900_mb} onChange={handleChange} type="number" name="wind_speed_900_mb" id="wind_speed_900_mb" className="w-full rounded-md border-0  p-1  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_direction_900_mb" className=" text-sm font-medium leading-6 text-gray-900">wind_direction_900_mb</label>
          <div className="mt-2">
            <input value={formData.wind_direction_900_mb} onChange={handleChange} type="number" name="wind_direction_900_mb" id="wind_direction_900_mb" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='janesmith' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_gust_10_m_above_gnd" className=" text-sm font-medium leading-6 text-gray-900">wind_gust_10_m_above_gnd</label>
          <div className="mt-2">
            <input value={formData.wind_gust_10_m_above_gnd} onChange={handleChange} type="number" name="wind_gust_10_m_above_gnd" id="wind_gust_10_m_above_gnd" className="  p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="angle_of_incidence" className=" text-sm font-medium leading-6 text-gray-900">angle_of_incidence</label>
          <div className="mt-2">
            <input value={formData.angle_of_incidence} onChange={handleChange} type="number" name="angle_of_incidence" id="angle_of_incidence" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="zenith" className=" text-sm font-medium leading-6 text-gray-900">zenith</label>
          <div className="mt-2">
            <input value={formData.zenith} onChange={handleChange} type="number" name="zenith" id="zenith" className=" p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="azimuth" className=" text-sm font-medium leading-6 text-gray-900">azimuth</label>
          <div className="mt-2">
            <input value={formData.azimuth} onChange={handleChange} type="number" name="azimuth" id="azimuth" className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='janesmith'/>
          </div> 
        </div>

        </div>
          


        <button type='submit' className="p-1 mt-4 font-mono bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white">Generated Power</button>
          </form>
        
        <p className={ `${generated_visibility} `+ 'p-1 pl-0 sm:p-5 sm:pl-0 font-semibold text-4xl font-mono' }> { !predicted_power ? "Generating..." : `The Generated Power is : ${predicted_power}`}</p>
        <button type='submit' onClick={reset_generation} className={`${generated_visibility} `+  " p-1 mt-4 font-mono bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white"}>Reset</button>
        

        </div>
        
    </>
  );
}

export default Page;
