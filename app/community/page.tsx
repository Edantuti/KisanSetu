"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FarmerType } from "@/utils/types";
import { User } from "lucide-react";
import Link from "next/link";





// export default function Page() {
//   return (
//     <section className="h-full px-28 bg-[#f4d8bf]">
//       <div
//         style={{
//           // backgroundPosition: 'start 0px -60px',
//           // backgroundRepeat: 'no-repeat',
//           filter: 'brightness(70%)',
//         }}
//       >
//         <h1 className="text-3xl mb-8 text-center rounded-sm p-3 font-sans font-semibold">
//           Communities
//         </h1>
//         <div>
//           <button className="bg-[#de914e] p-2 rounded-md  ml-7 font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
//             Create Community +
//           </button>
//         </div>
//         <div className="flex flex-wrap gap-8 ml-7 mt-5 ">
//           {/* Card 1 */}
//           {cardData.map((data, index) => (
// <Card key={index} className="outline w-96 mb-8 py-10 bg-[#cb8f56] bg-opacity-35 backdrop-blur-md rounded-lg shadow-lg shadow-[#cb8f56] transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#c08854] hover:bg-opacity-30">
//   <Link href="/community/National Farmers Union">
//     <CardHeader>
//       <h2 id="small-cards-title">
//         <p className="text-center text-xl font-bold font-sans">
//           {/* The National Farmers Union (NFU) */}
//           {data.title}
//         </p>
//       </h2>
//       <CardDescription className="text-center text-black font-semibold">
//         {/* The National Farmers Union advocates for family farmers, promoting sustainable agriculture, fair markets, and rural community well-being. */}
//       {data.description}
//       </CardDescription>
//     </CardHeader>
//     <CardContent>
//       <div className="flex flex-col justify-center items-center text-center font-bold">
//         <div className="border-t border-gray-700 w-full my-2"></div>
//         <h3 className="text-lg font-semibold text-[#c37833]">Location</h3>
//         <div className="border-t border-gray-700 w-full my-2"></div>
//         <p>
//           District:
//           <span className="text-sm text-[#c37833]"> {data.district}</span>
//         </p>
//         <p>
//           State: <span className="text-sm text-[#c37833]">{data.state}</span>
//         </p>
//         <p>
//           Pincode:
//           <span className="text-sm text-[#c37833]">{data.pincode}</span>
//         </p>
//       </div>
//       <div className="flex justify-center items-center text-center mt-6 space-x-4">
//         <button className="bg-[#de914e] p-2 rounded-md font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
//           Join Community
//         </button>
//       </div>
//     </CardContent>
//   </Link>
// </Card>
//           ))}



//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
// import Link from "next/link";
// import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const cardData = [
  {
    "title": "The National Farmers Union (NFU)",
    "description": "The National Farmers Union advocates for family farmers, promoting sustainable agriculture, fair markets, and rural community well-being.",
    "district": "Varanasi",
    "state": "Uttar Pradesh",
    "pincode": "221010",
    "link": "/community/National Farmers Union"
  },
  {
    "title": "Organic Farmers Alliance (OFA)",
    "description": "A network of farmers promoting organic farming techniques and ensuring the sustainability of agriculture across rural regions.",
    "district": "Rampur",
    "state": "Bihar",
    "pincode": "845401",
    "link": "/community/Organic Farmers Alliance"
  },
  {
    "title": "AgriTech Innovators",
    "description": "Empowering farmers through cutting-edge technology solutions for improved crop management and sustainable farming practices.",
    "district": "Jabalpur",
    "state": "Madhya Pradesh",
    "pincode": "482001",
    "link": "/community/AgriTech Innovators"
  },
  {
    "title": "Farmers Cooperative Network",
    "description": "A collective of smallholder farmers working together to enhance production, share resources, and access better markets.",
    "district": "Kota",
    "state": "Rajasthan",
    "pincode": "324001",
    "link": "/community/Farmers Cooperative Network"
  },
  {
    "title": "Sustainable Agriculture Coalition",
    "description": "Promoting eco-friendly farming practices and helping farmers transition to sustainable methods to preserve the environment.",
    "district": "Nagpur",
    "state": "Maharashtra",
    "pincode": "440001",
    "link": "/community/Sustainable Agriculture Coalition"
  },
  {
    "title": "Women in Agriculture Network",
    "description": "Empowering women farmers with resources, training, and support to foster their growth and contribution to agriculture.",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "pincode": "226001",
    "link": "/community/Women in Agriculture Network"
  },
  {
    "title": "Young Farmers Alliance",
    "description": "Connecting young and aspiring farmers to share knowledge, innovations, and opportunities to drive the future of agriculture.",
    "district": "Patna",
    "state": "Bihar",
    "pincode": "800001",
    "link": "/community/Young Farmers Alliance"
  },
  {
    "title": "Agroecology Farmers Network",
    "description": "A community promoting agroecology principles, emphasizing biodiversity, soil health, and sustainable farming techniques.",
    "district": "Kolkata",
    "state": "West Bengal",
    "pincode": "700001",
    "link": "/community/Agroecology Farmers Network"
  },
  {
    "title": "Smart Farming Consortium",
    "description": "Helping farmers adopt modern smart farming tools and technologies to increase efficiency and productivity.",
    "district": "Hyderabad",
    "state": "Telangana",
    "pincode": "500001",
    "link": "/community/Smart Farming Consortium"
  },
  {
    "title": "Farmers for Climate Action",
    "description": "Uniting farmers in their efforts to address climate change through mitigation and adaptation strategies in agriculture.",
    "district": "Chandigarh",
    "state": "Punjab",
    "pincode": "160001",
    "link": "/community/Farmers for Climate Action"
  },
  {
    "title": "Green Fields Collective",
    "description": "Fostering organic farming and sustainable agriculture through collective efforts to reduce environmental impact.",
    "district": "Chennai",
    "state": "Tamil Nadu",
    "pincode": "600001",
    "link": "/community/Green Fields Collective"
  },
  {
    "title": "Biodiversity Farming Network",
    "description": "Promoting farming practices that support biodiversity, sustainable ecosystems, and resilient agricultural landscapes.",
    "district": "Pune",
    "state": "Maharashtra",
    "pincode": "411001",
    "link": "/community/Biodiversity Farming Network"
  },
  {
    "title": "Farmers Empowerment Initiative",
    "description": "Providing farmers with access to resources, training, and advocacy to empower them in sustainable farming practices.",
    "district": "Guwahati",
    "state": "Assam",
    "pincode": "781001",
    "link": "/community/Farmers Empowerment Initiative"
  },
  {
    "title": "Rural Development Collective",
    "description": "A group of farmers and organizations focused on improving rural communities through sustainable agriculture and social development.",
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "pincode": "462001",
    "link": "/community/Rural Development Collective"
  },
  {
    "title": "Farmers Research Association",
    "description": "Supporting research-driven farming techniques and innovations to improve productivity and sustainability.",
    "district": "Thiruvananthapuram",
    "state": "Kerala",
    "pincode": "695001",
    "link": "/community/Farmers Research Association"
  },
  {
    "title": "Agricultural Education Forum",
    "description": "Providing educational resources and training to farmers on modern farming techniques and sustainable agriculture.",
    "district": "Ahmedabad",
    "state": "Gujarat",
    "pincode": "380001",
    "link": "/community/Agricultural Education Forum"
  },
  {
    "title": "Urban Farming Cooperative",
    "description": "Supporting urban farmers with resources and networks to foster local food production in urban environments.",
    "district": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001",
    "link": "/community/Urban Farming Cooperative"
  },
  {
    "title": "Organic Food Producers Network",
    "description": "Bringing together organic food producers to share knowledge, techniques, and markets for sustainable food systems.",
    "district": "Jaipur",
    "state": "Rajasthan",
    "pincode": "302001",
    "link": "/community/Organic Food Producers Network"
  },
  {
    "title": "Family Farmers Association",
    "description": "A network of family-owned farms working together to share resources and enhance sustainable family farming practices.",
    "district": "Bengaluru",
    "state": "Karnataka",
    "pincode": "560001",
    "link": "/community/Family Farmers Association"
  },
  {
    "title": "Farmers Market Federation",
    "description": "Supporting local farmers markets by providing resources and advocacy for smallholder farmers to sell their produce directly to consumers.",
    "district": "Surat",
    "state": "Gujarat",
    "pincode": "395001",
    "link": "/community/Farmers Market Federation"
  },
  {
    "title": "Sustainable Livelihoods Network",
    "description": "Helping farmers achieve sustainable livelihoods through diversified farming practices and market access.",
    "district": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "pincode": "530001",
    "link": "/community/Sustainable Livelihoods Network"
  },
  {
    "title": "Punjab Organic Farmers Association",
    "description": "A collective of organic farmers in Punjab focused on promoting sustainable farming practices and organic agriculture.",
    "district": "Ludhiana",
    "state": "Punjab",
    "pincode": "141001",
    "link": "/community/Punjab Organic Farmers Association"
  },
  {
    "title": "Punjab Farmers Cooperative",
    "description": "A cooperative network in Punjab that helps farmers pool resources, share knowledge, and gain better access to markets.",
    "district": "Amritsar",
    "state": "Punjab",
    "pincode": "143001",
    "link": "/community/Punjab Farmers Cooperative"
  },
  {
    "title": "Sustainable Punjab Farmers Network",
    "description": "Supporting sustainable agriculture practices in Punjab to preserve the environment while increasing productivity.",
    "district": "Jalandhar",
    "state": "Punjab",
    "pincode": "144001",
    "link": "/community/Sustainable Punjab Farmers Network"
  },
  {
    "title": "Punjab Agricultural Research Group",
    "description": "A research-oriented group focusing on innovative farming techniques and improving agricultural output in Punjab.",
    "district": "Patiala",
    "state": "Punjab",
    "pincode": "147001",
    "link": "/community/Punjab Agricultural Research Group"
  },
  {
    "title": "Farmers for Climate Action Punjab",
    "description": "A network of farmers in Punjab working on strategies to mitigate the impact of climate change on agriculture.",
    "district": "Chandigarh",
    "state": "Punjab",
    "pincode": "160001",
    "link": "/community/Farmers for Climate Action Punjab"
  },
  {
    "title": "Uttar Pradesh Farmers Union",
    "description": "Advocating for the rights of farmers across Uttar Pradesh, providing resources and support to improve livelihoods.",
    "district": "Varanasi",
    "state": "Uttar Pradesh",
    "pincode": "221001",
    "link": "/community/Uttar Pradesh Farmers Union"
  },
  {
    "title": "Organic Farming Association UP",
    "description": "Promoting organic farming practices throughout Uttar Pradesh for healthier crops and sustainable farming.",
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "pincode": "226001",
    "link": "/community/Organic Farming Association UP"
  },
  {
    "title": "UP Agricultural Cooperative",
    "description": "A cooperative network for farmers in Uttar Pradesh to share resources, techniques, and market access.",
    "district": "Agra",
    "state": "Uttar Pradesh",
    "pincode": "282001",
    "link": "/community/UP Agricultural Cooperative"
  },
  {
    "title": "Green UP Farming Network",
    "description": "Supporting sustainable farming practices and eco-friendly techniques to improve agricultural output in Uttar Pradesh.",
    "district": "Kanpur",
    "state": "Uttar Pradesh",
    "pincode": "208001",
    "link": "/community/Green UP Farming Network"
  },
  {
    "title": "UP Farmers Empowerment Society",
    "description": "Providing education, resources, and advocacy to empower farmers throughout Uttar Pradesh.",
    "district": "Meerut",
    "state": "Uttar Pradesh",
    "pincode": "250001",
    "link": "/community/UP Farmers Empowerment Society"
  }
]


const states = [
  ...new Set(cardData.map((data) => data.state)) // Get unique states
];

export default function Page() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredData = cardData.filter((data) => {
    return (
      (!selectedState || data.state === selectedState) &&
      (!selectedCity || data.district === selectedCity)
    );
  });

  const cities = [
    ...new Set(cardData.filter((data) => data.state === selectedState).map((data) => data.district))
  ];

  return (
    <section className="h-full min-h-[90vh] px-28 bg-[#f4d8bf] pt-[5vw]">
      <h1 className="text-3xl mb-8 text-center rounded-sm p-3 font-sans font-semibold">
        Communities
      </h1>
      <div className="flex gap-5 h-10">
        <button className="bg-[#de914e] p-2 rounded-md  ml-7 font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Create Community +
        </button>

        <div className="flex gap-4 mb-4 h-full">
        <select
          className="bg-[#de914e] font-semibold text-l p-2 h-full rounded-md"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>

        {selectedState && (
          <select
            className="bg-[#de914e] font-semibold text-l p-2 h-full rounded-md"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        )}
      </div>
      </div>

      

      <div className="flex flex-wrap gap-8 ml-7 mt-5">
        {filteredData.map((data, index) => (
          <Card key={index} className=" w-96 mb-8 py-10 bg-[#cb8f56] bg-opacity-35 backdrop-blur-md rounded-lg shadow-lg shadow-[#cb8f56] transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#c08854] hover:bg-opacity-30">
            <Link href="/community/National Farmers Union">
              <CardHeader>
                <h2 id="small-cards-title">
                  <p className="text-center text-xl font-bold font-sans">
                    {/* The National Farmers Union (NFU) */}
                    {data.title}
                  </p>
                </h2>
                <CardDescription className="text-center text-black font-semibold">
                  {/* The National Farmers Union advocates for family farmers, promoting sustainable agriculture, fair markets, and rural community well-being. */}
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-center items-center text-center font-bold">
                  <div className="border-t border-gray-700 w-full my-2"></div>
                  <h3 className="text-lg font-semibold text-[#c37833]">Location</h3>
                  <div className="border-t border-gray-700 w-full my-2"></div>
                  <p>
                    District:
                    <span className="text-sm text-[#c37833]"> {data.district}</span>
                  </p>
                  <p>
                    State: <span className="text-sm text-[#c37833]">{data.state}</span>
                  </p>
                  <p>
                    Pincode:
                    <span className="text-sm text-[#c37833]">{data.pincode}</span>
                  </p>
                </div>
                <div className="flex justify-center items-center text-center mt-6 space-x-4">
                  <button className="bg-[#de914e] p-2 rounded-md font-semibold text-l hover:translate-y-1 hover:bg-[#cb8f56] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                    Join Community
                  </button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
