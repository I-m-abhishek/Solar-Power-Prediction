'use client';
import React from 'react';

function Page() {
  return (
    <>
      <div className="bg-cover p-2 sm:p-24 sm:pt-1 sm:pb-1 " style={{ backgroundImage: 'linear-gradient(rgba(135, 80, 156, 0.7), rgba(135, 80, 156, 0.7)), url("../bg.jpg")' }}>
        <div className='flex items-center justify-center'>
        <div className='p-1 sm:p-4 sm:pb-2 md:p-4'>
<img className="h-10 w-10 sm:h-24 sm:w-24" src="https://freepngimg.com/thumb/sun/23634-1-sun-hd.png" alt="Sun" />
        </div>
  <p className='font-extrabold text-3xl sm:text-5xl md:text-7xl md:text-left lg:text-center  p-1 sm:p-4 text-transparent bg-clip-text bg-gradient-to-tl from-white to-amber-300/90'>Solar Power Predictor</p>
        </div>
  <p className='text-white sm:font-bold text-center text-xl md:p-32 md:pb-8 p-2 sm:pt-2 sm:p-8 md:pt-3 '>Elevate your energy efficiency with our Solar Power Predictor – harnessing advanced technology to forecast solar energy generation. Empower your decisions, optimize renewable energy usage, and embrace a sustainable future.</p>

  <div className='flex-col sm:flex sm:flex-row sm:p-10 sm:pt-1 sm:pb-2'>
    <div className='bg-[#e1cd64] p-1 sm:p-3  m-1 md:p-5 rounded-md'>
      <p className='text-red-600 font-bold'>
  At Solar Power Predictor, we recognize the critical role that solar power forecasting plays in the seamless operation and control of solar power plants. The efficiency of energy generation from solar panels is intricately linked to the doping level, PV array design, and crucial environmental factors. The primary influencers are the solar radiation incident on the panels, atmospheric conditions such as temperature and humidity, and the presence of dust on the panels. Given the inherent variability of these factors, the output of solar cells directly hinges on their dynamic interplay.
      </p>
    </div>

 <div className='p-1 sm:p-3 md:p-5 m-1 bg-white/60 rounded-md'>
  <p className='text-black font-bold '>
Solar irradiance, alongside the aforementioned environmental variables, undergoes continuous fluctuations throughout the day. It is this variability that necessitates a nuanced approach to forecasting for solar power plants. To achieve precision in our predictions, we focus on measuring the hourly averages or averages at specific intervals of time for these critical parameters. This meticulous data collection and analysis form the cornerstone of our forecasting methodology, ensuring a comprehensive understanding of a PV module's output and, consequently, the performance of the entire solar power plant.
The essence of effective solar power forecasting lies in the granularity of data acquisition. A lower sampling rate allows for a more refined prediction, enabling solar power plant operators to make informed decisions that optimize energy efficiency and plant performance.
  </p>
 </div>
 </div>

<div className='p-2 sm:p-10 sm:pt-2 sm:pb-2'>
<button className='p-2 m-1  bg-blue-600 hover:bg-blue-900 rounded-md font-extrabold text-white'> Get Solar Power Prediction Here </button>
</div>

<div className='p-2 sm:p-10 sm:pt-2 sm:pb-2 m-1 bg-slate-500'>

<p className=''>
Why Choose Solar Power Predictor?
</p>
  

Precision and Reliability:
Trust in our precise and reliable solar forecasts, crafted through advanced algorithms and meticulous data analysis.

Cost-Effective Decision-Making:
Maximize cost savings by aligning energy consumption with our accurate solar predictions, enabling strategic and cost-effective decisions.

Environmental Stewardship:
Contribute to environmental sustainability by optimizing solar energy usage, reducing your carbon footprint, and championing clean energy practices.
</div>

</div>




      
    </>
  );
}

export default Page;
