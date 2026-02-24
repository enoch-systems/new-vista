import React from 'react'

const BenefitsSection = () => {
  return (
    <div className="p-5 md:p-12 lg:p-16 text-center">
      <h2 className="block mt-1 text-xs md:text-2xl lg:text-3xl leading-tight font-extrabold text-amber-600 uppercase mb-6">
        BENEFITS OF MINI-IMPORTATION BUSINESS
      </h2>
      <div className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-left">
        <ul className="list-none space-y-4">
          <li className="flex items-start">
            <span className="mr-2 text-black text-lg px-1 py-1">•</span>
            <span className="text-indigo-950 font-semibold px-2 py-1">Importation is one of the fastest paths to profit if you know how: buying cheap internationally + selling locally.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-black text-lg px-1 py-1">•</span>
            <span className="text-indigo-950 font-semibold px-2 py-1">Being an importer can serve as a side hustle for you while you maintain your full time job.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-black text-lg px-1 py-1">•</span>
            <span className="text-indigo-950 font-semibold px-2 py-1">You will start making money right from your first order within 2 weeks.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-black text-lg px-1 py-1">•</span>
            <span className="text-indigo-950 font-semibold px-2 py-1">You will have no need to buy at higher rates from wholesalers here in Nigeria.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-black text-lg px-1 py-1">•</span>
            <span className="text-indigo-950 font-semibold px-2 py-1">This gives you multiple streams of income.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenefitsSection;
