import React from 'react'

const CourseSection = () => {
  const courseModules = [
    {
      title: "COMPLETE CHINA IMPORTATION GUIDE",
      items: [
        "How to source for goods on 1688 and Alibaba",
        "How to link your alipay account to your 1688 account",
        "How to identify reliable suppliers",
        "Over 150+ reliable suppliers contact of different products, shipping companies, money exchangers",
        "How to track your goods and request a refund",
        "How to check the quality and weight of a product",
        "List of fast moving products",
        "Sea shipping and air shipping calculation",
        "Contacts of Shipping Companies",
        "Contacts of currency exchange brokers"
      ]
    },
    {
      title: "HAIR IMPORTATION BUSINESS",
      items: [
        "Basic knowledge of different types of hairs, wigs, attachments and hair products",
        "How to import hairs from China, Vietnam, Cambodia, and India",
        "20+ Contacts of human hair supplier",
        "20+ Contact of packet hair suppliers",
        "20+ Contacts of shipping companies and money exchangers for different countries",
        "Contacts of hair blend suppliers"
      ]
    },
    {
      title: "OKRIKA (THRIFT) BUSINESS",
      items: [
        "100+ Contacts of bale wholesalers in Nigeria",
        "Contacts of manufacturers both in China and Nigeria",
        "How to make payment to Chinese suppliers",
        "Basic knowledge of different grade of bales"
      ]
    },
    {
      title: "VIETNAM KIDDIES IMPORTATION",
      items: [
        "Basic knowledge of Vietnam importation",
        "Basic knowledge of importable items from Vietnam",
        "Vietnam currency conversion rate",
        "20+ Contacts of shipping agents",
        "100+ Contacts of suppliers from Vietnam",
        "How to verify quality items and products",
        "How to calculate shipping and landing fee"
      ]
    },
    {
      title: "DUBAI AND TURKEY IMPORTATION",
      items: [
        "Benefits of Dubai and Turkey business",
        "100+ Contacts of suppliers of various products",
        "Direct contacts of manufacturers and chat with them",
        "20+ Contacts of money exchangers",
        "10+ Contacts of shipping agents"
      ]
    },
    {
      title: "BANGLADESH IMPORTATION",
      items: [
        "Introduction to Bangladesh importation",
        "Basic knowledge of different products importable from Bangladesh",
        "Basic knowledge of currency conversion",
        "10+ Contacts of manufacturer and suppliers",
        "10+ Shipping companies contact",
        "How to negotiate for the payment on the delivery method (FOMO) strategy",
        "Instant connection to suppliers channel and community"
      ]
    },
    {
      title: "SHEIN AND PAT PAT IMPORTATION",
      items: [
        "Introduction to Shein importation",
        "Basic knowledge of different products importable from Bangladesh",
        "Basic knowledge of currency conversion",
        "10+ Contacts of manufacturer and suppliers",
        "10+ Shipping companies contact",
        "How to ship directly to your country (Nigeria, Ghana, Cameroon)"
      ]
    }
  ]

  return (
    <div className="p-5 md:p-12 lg:p-16 text-center">
     
      <div className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 text-left">
        <div className="space-y-6">
          {courseModules.map((module, index) => (
            <div key={index}>
              <h3 className="font-bold text-sm mb-2 text-amber-600 underline decoration-orange-500">{module.title.charAt(0).toUpperCase() + module.title.slice(1).toLowerCase()}</h3>
              <ul className="list-none space-y-2 text-sm">
                {module.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-black text-lg px-1 py-1">•</span>
                    <span className="text-indigo-950 font-normal px-2 ">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;