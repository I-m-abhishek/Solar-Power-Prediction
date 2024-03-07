"use client";
import React, { useRef, useState , useEffect} from 'react';
import {XMarkIcon} from '@heroicons/react/24/outline'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Page() {
  
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  const dataform = useRef();
  // const [generated_visibility, setGenerated_visibility] = useState("hidden")
  const [predicted_power, setPredicted_power] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [geterror , setGeterror] = useState(false)
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
  
  // const reset_generation = (e) =>{
  //   e.preventDefault();
  //   setGenerated_visibility("hidden")

  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseFloat(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlipped(true);
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
      console.log(Math.round(prediction_data*100)/100);
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
        setGeterror(true);
        console.log('Blog Creation Failed');
      }
    } catch (error) {
      console.error(error);
      setGeterror(true);
    }
  };

  return (
    <>
  
      <div
        data-aos="fade-down"
        className="bg-cover p-2 sm:p-24 sm:pt-1 sm:pb-1 "
        style={{
          // linear-gradient(rgba(135, 80, 156, 0.7), rgba(135, 80, 156, 0.7)),
          backgroundImage:
            ' url("../bg.jpg")',
        }}
      >
        <div className="flex items-center justify-center">
          <div className=" min-w-10 sm:min-w-24">
            {/* rotation of image 360 */}
            <img
              className=" h-10 w-10 sm:h-24 sm:w-24 animate-spin"
              src="../sun-hd.png"
              alt="Sun"
            />
          </div>
          <p className="animate-pulse font-extrabold text-3xl sm:text-5xl md:text-7xl md:text-left lg:text-center  p-1 sm:p-4 text-transparent bg-clip-text bg-gradient-to-tl from-white to-amber-300/90">
            Solar Power Predictor
          </p>
        </div>
        <p className="text-[#3B3131] sm:font-bold text-center text-xl md:p-32 md:pb-8 p-2 sm:pt-2 sm:p-8 md:pt-3 font-mono ">
          Elevate your energy efficiency with our Solar Power Predictor –
          harnessing advanced technology to forecast solar energy generation.
          Empower your decisions, optimize renewable energy usage, and embrace a
          sustainable future.
        </p>

        <div  className="flex-col sm:flex sm:flex-row sm:p-10 sm:pt-1 sm:pb-2">
          <div data-aos="fade-right" className="backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] bg-[#e1cd64] p-1 sm:p-3  m-1 md:p-5 rounded-md">
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

          <div data-aos="fade-left" className="backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] bg-white/60 p-1 sm:p-3 md:p-5 m-1 rounded-md">
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

        <div className="p-2 sm:p-10 sm:pt-2 sm:pb-2 animate-bounce">
          <button className="p-2 m-1 font-mono bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white">
            {" "}
            <a href="#dataformcontainer">
            Get Solar Power Prediction Here{" "}
            </a>
          </button>
        </div>
       
          <div data-aos="fade-up" className="backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] m-1 sm:p-5 sm:ml-11 sm:mr-11  sm:mb-5 rounded-md bg-[#2e2ccc]/20 text-white">
          <p className="font-extrabold font-mono text-2xl pl-1">Why Choose Solar Power Predictor?</p>
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


        <div data-aos="fade-up" id='dataformcontainer' className="  p-2 md:p-36 md:pt-5  bg-[url('https://images.unsplash.com/photo-1625301840055-7c1b7198cfc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D')]">
        
          <p className=" pl-2  font-extrabold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-[#e6dddd] leading-[10rem]  " style={{ lineHeight: '1.5' }}>
        {/* bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoonwIpLUSSsQqs4uPRjGcrwTbIbZemS33Mw&usqp=CAU')] */}
          Try Solar Power Predictor !!!!!!!!!
        </p>
        
        <div  className='group grid perspective-800   transform-style-3d'>
        <div  className={`mt-1 sm:mt-3 md:mt-5 backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] p-1 sm:p-3 sm:pt-1  bg-white/20 bg-auto rounded-lg row-start-1 row-end-1 col-start-1 col-end-1 backface-hidden transform transition duration-[1.2s]    ${flipped ? 'rotate-y-180' : " " }`}>
        <form ref={dataform} id="dataform" onSubmit={handleSubmit}>    
        
        <div className="p-1 pl-2 pr-2 mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="temperature_2_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Temperature 2 meter above ground</label>
          <div className="mt-2">
            <input value={formData.temperature_2_m_above_gnd} onChange={handleChange} type="number" name="temperature_2_m_above_gnd" id="temperature_2_m_above_gnd" className="w-full  p-1  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder ="in °C (eg: 20) "/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="relative_humidity_2_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Relative Humidity 2 meter above ground</label>
          <div className="mt-2">
            <input value={formData.relative_humidity_2_m_above_gnd} onChange={handleChange} type="number" name="relative_humidity_2_m_above_gnd" id="relative_humidity_2_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in percentage (eg: 50)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="mean_sea_level_pressure_MSL" className=" text-sm font-medium leading-6 text-white">Mean sea level pressure</label>
          <div className="mt-2">
            <input value={formData.mean_sea_level_pressure_MSL} onChange={handleChange} type="number" name="mean_sea_level_pressure_MSL" id="mean_sea_level_pressure_MSL" className="w-full   p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in hPa or mb (eg: 1015)'/>
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="total_precipitation_sfc" className=" text-sm font-medium leading-6 text-white">Total precipitation at the surface</label>
          <div className="mt-2">
            <input value={formData.total_precipitation_sfc} onChange={handleChange} type="number" name="total_precipitation_sfc" id="total_precipitation_sfc" className="w-full   p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in mm (eg: 0)'/>
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="snowfall_amount_sfc" className=" text-sm font-medium leading-6 text-white">Snowfall amount at the surface</label>
          <div className="mt-2">
            <input value={formData.snowfall_amount_sfc} onChange={handleChange} type="number" name="snowfall_amount_sfc" id="snowfall_amount_sfc" className="w-full rounded-md border-0 py-1.5 p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in cm (eg: 0)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="total_cloud_cover_sfc" className=" text-sm font-medium leading-6 text-white">Total cloud cover at the surface</label>
          <div className="mt-2">
            <input value={formData.total_cloud_cover_sfc} onChange={handleChange} type="number" name="total_cloud_cover_sfc" id="total_cloud_cover_sfc" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in percentage (eg: 10)' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="high_cloud_cover_high_cld_lay" className=" text-sm font-medium leading-6 text-white">High-level cloud cover in the high cloud layer</label>
          <div className="mt-2">
            <input value={formData.high_cloud_cover_high_cld_lay} onChange={handleChange} type="number" name="high_cloud_cover_high_cld_lay" id="high_cloud_cover_high_cld_lay" className="w-full rounded-md border-0 py-1.5 text-gray-900 p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in percentage (eg: 10)'/>
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="medium_cloud_cover_mid_cld_lay" className=" text-sm font-medium leading-6 text-white">Medium-level cloud cover in the mid-level cloud layer</label>
          <div className="mt-2">
            <input value={formData.medium_cloud_cover_mid_cld_lay} onChange={handleChange} type="number" name="medium_cloud_cover_mid_cld_lay" id="medium_cloud_cover_mid_cld_lay" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in percentage (eg: 10)' />
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="low_cloud_cover_low_cld_lay" className=" text-sm font-medium leading-6 text-white">Low-level cloud cover in the low cloud layer</label>
          <div className="mt-2">
            <input value={formData.low_cloud_cover_low_cld_lay} onChange={handleChange} type="number" name="low_cloud_cover_low_cld_lay" id="low_cloud_cover_low_cld_lay" className="w-full  p-1  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in percentage (eg: 10)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="shortwave_radiation_backwards_sfc" className=" text-sm font-medium leading-6 text-white">Shortwave radiation at the surface</label>
          <div className="mt-2">
            <input value={formData.shortwave_radiation_backwards_sfc} onChange={handleChange} type="number" name="shortwave_radiation_backwards_sfc" id="shortwave_radiation_backwards_sfc" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in W/m² (eg: 400)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_speed_10_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Wind speed at 10 meters above the ground</label>
          <div className="mt-2">
            <input value={formData.titleimgurl} onChange={handleChange} type="number" name="wind_speed_10_m_above_gnd" id="wind_speed_10_m_above_gnd" className="w-full rounded-md border-0  p-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in m/s (eg: 10)'/>
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="wind_direction_10_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Wind direction at 10 meters above the ground</label>
          <div className="mt-2">
            <input value={formData.wind_direction_10_m_above_gnd} onChange={handleChange} type="number" name="wind_direction_10_m_above_gnd" id="wind_direction_10_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in Degrees (eg: 100)' />
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="wind_speed_80_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Wind speed at 80 meters above the ground</label>
          <div className="mt-2">
            <input value={formData.titleimgurl} onChange={handleChange} type="number" name="wind_speed_80_m_above_gnd" id="wind_speed_80_m_above_gnd" className="w-full rounded-md border-0  p-1  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in m/s (eg: 10)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_direction_80_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Wind direction at 80 meters above the ground</label>
          <div className="mt-2">
            <input value={formData.wind_direction_80_m_above_gnd} onChange={handleChange} type="number" name="wind_direction_80_m_above_gnd" id="wind_direction_80_m_above_gnd" className="w-full rounded-md border-0 py-1.5 text-gray-900  p-1  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in Degrees (eg: 100)' />
          </div> 
        </div>
        <div className="">
          <label htmlFor="wind_speed_900_mb" className=" text-sm font-medium leading-6 text-white">Wind speed at 900 millibars (mb) pressure level</label>
          <div className="mt-2">
            <input value={formData.wind_speed_900_mb} onChange={handleChange} type="number" name="wind_speed_900_mb" id="wind_speed_900_mb" className="w-full rounded-md border-0  p-1  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in m/s (eg: 10)' />
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="wind_direction_900_mb" className=" text-sm font-medium leading-6 text-white">Wind direction at 900 millibars (mb) pressure level</label>
          <div className="mt-2">
            <input value={formData.wind_direction_900_mb} onChange={handleChange} type="number" name="wind_direction_900_mb" id="wind_direction_900_mb" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " placeholder='in Degrees (eg: 100)' />
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="wind_gust_10_m_above_gnd" className=" text-sm font-medium leading-6 text-white">Wind gust at 10 meters above the ground</label>
          <div className="mt-2">
            <input value={formData.wind_gust_10_m_above_gnd} onChange={handleChange} type="number" name="wind_gust_10_m_above_gnd" id="wind_gust_10_m_above_gnd" className="  p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in m/s (eg: 15)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="angle_of_incidence" className=" text-sm font-medium leading-6 text-white">Angle of incidence</label>
          <div className="mt-2">
            <input value={formData.angle_of_incidence} onChange={handleChange} type="number" name="angle_of_incidence" id="angle_of_incidence" className="w-full rounded-md border-0 py-1.5  p-1  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in Degrees (eg: 100)'/>
          </div> 
        </div>
        <div className="">
          <label htmlFor="zenith" className=" text-sm font-medium leading-6 text-white">Solar zenith angle</label>
          <div className="mt-2">
            <input value={formData.zenith} onChange={handleChange} type="number" name="zenith" id="zenith" className=" p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in Degrees (eg: 100)'/>
          </div> 
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="azimuth" className=" text-sm font-medium leading-6 text-white">Solar azimuth angle</label>
          <div className="mt-2">
            <input value={formData.azimuth} onChange={handleChange} type="number" name="azimuth" id="azimuth" className="p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  " placeholder='in Degrees (eg: 100)'/>
          </div> 
        </div>

        </div>
          


        <button type='submit' className="p-1 pl-2 pr-2 m-2 font-mono bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white">Generated Power</button>
          </form>
          </div>
          <div className={`mt-1 sm:mt-3 md:mt-5 backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] p-1 sm:p-3 sm:pt-1  bg-white/20 bg-auto rounded-lg row-start-1 row-end-1 col-start-1 col-end-1 backface-hidden transform transition duration-[1.2s]    ${flipped ? ' rotate-y-0 ' : " -rotate-y-180 " } `}>
          <button 
              
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setFlipped(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            { !geterror ? (
                  <div className='h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
                  <div className='flex flex-col justify-center items-center'> 
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 ">
        <path fillRule="evenodd" d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z" clipRule="evenodd" />
      </svg>
      <p className='font-bold text-center pt-6 text-2xl md:text-3xl'> { !predicted_power ? "Generating..." : `The Generated Power is : ${Math.round(((isNaN(predicted_power) || (predicted_power < 0 ))? 0 : predicted_power)*100)/100} Watts per day`}
      </p>
      </div>
      </div>            
            ):(
              <div className=' h-full p-1 pb-16 md:pb-20 flex justify-center items-center'>
              <div className='flex flex-col justify-center items-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="red" className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
    <path fillRule="evenodd" d="M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
  </svg>
  
  <p className='font-bold text-center text-red-500 pt-6 text-2xl md:text-3xl'>
   Oops! It seems there is an error. Please try again later.
  </p>
  </div>
  </div>
            )  
            } 
            

        
        </div>
        </div>
        </div>
        
        
    </>
  );
}

export default Page;
