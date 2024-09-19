"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
const farmData = [
  {
    name: "Wheat",
    crop: "Durum Wheat",
    location: {
      address: "44 Kisan Marg",
      district: "Hisar",
      city: "Hisar",
    },
  },
  {
    name: "Rice",
    crop: "Basmati Rice",
    location: {
      address: "11 Paddy Fields",
      district: "Karnal",
      city: "Karnal",
    },
  },
  {
    name: "Sugarcane",
    crop: "Co 237",
    location: {
      address: "22 Ganna Road",
      district: "Meerut",
      city: "Meerut",
    },
  },
  {
    name: "Cotton",
    crop: "Bt Cotton",
    location: {
      address: "122 Cotton Lane",
      district: "Akola",
      city: "Akola",
    },
  },
  {
    name: "Millets",
    crop: "Pearl Millet",
    location: {
      address: "33 Bajra Chowk",
      district: "Nagaur",
      city: "Nagaur",
    },
  },
  {
    name: "Pulses",
    crop: "Moong Dal",
    location: {
      address: "6 Pulse Street",
      district: "Indore",
      city: "Indore",
    },
  },
  {
    name: "Maize",
    crop: "Sweet Corn",
    location: {
      address: "100 Maize Ave",
      district: "Guntur",
      city: "Guntur",
    },
  },
  {
    name: "Groundnut",
    crop: "Kharif Groundnut",
    location: {
      address: "77 Nut Street",
      district: "Junagadh",
      city: "Junagadh",
    },
  },
  {
    name: "Tea",
    crop: "Assam Tea",
    location: {
      address: "455 Plantation Road",
      district: "Dibrugarh",
      city: "Dibrugarh",
    },
  },
  {
    name: "Coffee",
    crop: "Arabica Coffee",
    location: {
      address: "97 Coffee Estate",
      district: "Chikmagalur",
      city: "Chikmagalur",
    },
  },
  {
    name: "Mustard",
    crop: "Yellow Mustard",
    location: {
      address: "64 Oilseed Lane",
      district: "Bharatpur",
      city: "Bharatpur",
    },
  },
  {
    name: "Banana",
    crop: "Robusta Banana",
    location: {
      address: "233 Banana Road",
      district: "Tiruchirappalli",
      city: "Tiruchirappalli",
    },
  },
  {
    name: "Grapes",
    crop: "Thompson Seedless",
    location: {
      address: "11 Vineyard St",
      district: "Nashik",
      city: "Nashik",
    },
  },
  {
    name: "Mango",
    crop: "Alphonso Mango",
    location: {
      address: "55 Orchard Road",
      district: "Ratnagiri",
      city: "Ratnagiri",
    },
  },
  {
    name: "Papaya",
    crop: "Red Lady Papaya",
    location: {
      address: "88 Tropical St",
      district: "Coimbatore",
      city: "Coimbatore",
    },
  },
  {
    name: "Onion",
    crop: "Red Onion",
    location: {
      address: "77 Bulb Road",
      district: "Nashik",
      city: "Nashik",
    },
  },
  {
    name: "Potato",
    crop: "Kufri Jyoti",
    location: {
      address: "21 Tuber Lane",
      district: "Agra",
      city: "Agra",
    },
  },
  {
    name: "Chillies",
    crop: "Guntur Chilli",
    location: {
      address: "100 Spice Avenue",
      district: "Guntur",
      city: "Guntur",
    },
  },
  {
    name: "Tomato",
    crop: "Roma Tomato",
    location: {
      address: "44 Veg Street",
      district: "Kolar",
      city: "Kolar",
    },
  },
  {
    name: "Carrot",
    crop: "Red Carrot",
    location: {
      address: "32 Root Road",
      district: "Nilgiris",
      city: "Ooty",
    },
  },
];
const buyData = [
  {
    company: "AgroTech Solutions",
    buyer: "GreenValley Farms",
    description:
      "Growing demand for organic pesticides to protect crops without harming the soil.",
    location: {
      address: "Plot 102, Green Valley",
      district: "Nashik",
      city: "Nashik",
    },
  },
  {
    company: "TractorCo",
    buyer: "Punjab Agriculture Corp",
    description:
      "High demand for modern, fuel-efficient tractors for large-scale farming.",
    location: {
      address: "Sector 8, Industrial Area",
      district: "Ludhiana",
      city: "Ludhiana",
    },
  },
  {
    company: "IrrigatePro",
    buyer: "WaterWorks Farmers",
    description:
      "Need for high-quality irrigation pipes for efficient water usage in agriculture.",
    location: {
      address: "45 Farmer Street",
      district: "Coimbatore",
      city: "Coimbatore",
    },
  },
  {
    company: "ColdChain Systems",
    buyer: "FreshProduce Ltd.",
    description:
      "Rising demand for cold storage to preserve fresh produce for longer durations.",
    location: {
      address: "12 Warehousing Complex",
      district: "Ahmedabad",
      city: "Ahmedabad",
    },
  },
  {
    company: "HybridSeed Corp",
    buyer: "Guntur Agri Supply",
    description:
      "Demand for hybrid seeds to improve crop yields and increase resistance to diseases.",
    location: {
      address: "Plot 34, Seed Hub",
      district: "Guntur",
      city: "Guntur",
    },
  },
  {
    company: "FertilizerX",
    buyer: "Kanpur Agri Depot",
    description:
      "Increased demand for organic and chemical fertilizers to boost crop productivity.",
    location: {
      address: "Plant 67, Fertilizer Market",
      district: "Kanpur",
      city: "Kanpur",
    },
  },
  {
    company: "Greenhouse Technologies",
    buyer: "Pune Horticulture Farms",
    description:
      "Growing need for greenhouses to protect crops from adverse weather conditions.",
    location: {
      address: "78 Green Estate",
      district: "Pune",
      city: "Pune",
    },
  },
  {
    company: "SolarFlow Inc.",
    buyer: "Nagpur Sustainable Farms",
    description:
      "Increasing demand for solar-powered water pumps to support sustainable irrigation.",
    location: {
      address: "Plot 56, Renewable Energy Park",
      district: "Nagpur",
      city: "Nagpur",
    },
  },
  {
    company: "MicroIrrigation Tech",
    buyer: "Rajkot Drylands Association",
    description:
      "Rising demand for micro-irrigation systems to optimize water use in dry regions.",
    location: {
      address: "89 Agri Tools Market",
      district: "Rajkot",
      city: "Rajkot",
    },
  },
  {
    company: "AgriDrones Inc.",
    buyer: "Hyderabad Agro Monitor",
    description:
      "Need for drones to monitor crop health, manage irrigation, and apply fertilizers.",
    location: {
      address: "12 Drone Lane",
      district: "Hyderabad",
      city: "Hyderabad",
    },
  },
  {
    company: "Silo Solutions",
    buyer: "Bhopal Agri Storage",
    description:
      "Growing demand for storage silos to store grains and other agricultural products.",
    location: {
      address: "Plot 45, Agro Industrial Area",
      district: "Bhopal",
      city: "Bhopal",
    },
  },
  {
    company: "SoilTech Innovations",
    buyer: "Jaipur Farming Co-op",
    description:
      "Increased need for soil testing kits to monitor soil health and optimize fertilizers.",
    location: {
      address: "23 Soil Science Avenue",
      district: "Jaipur",
      city: "Jaipur",
    },
  },
  {
    company: "EcoPack Solutions",
    buyer: "Kochi Organic Markets",
    description:
      "Demand for eco-friendly, biodegradable packaging for agricultural produce.",
    location: {
      address: "Plot 11, Eco-Friendly Hub",
      district: "Kochi",
      city: "Kochi",
    },
  },
  {
    company: "AgriFinance Ltd.",
    buyer: "Patna Small Farmers Co-op",
    description:
      "Growing need for financial services and farm loans to support small farmers.",
    location: {
      address: "Plot 10, Finance Sector",
      district: "Patna",
      city: "Patna",
    },
  },
  {
    company: "Precision Farming Solutions",
    buyer: "Bengaluru High-Tech Farms",
    description:
      "Need for tools that support precision farming for more efficient use of resources.",
    location: {
      address: "57 Innovation Park",
      district: "Bengaluru",
      city: "Bengaluru",
    },
  },
  {
    company: "AgriShield Insurance",
    buyer: "Chandigarh Crop Protection",
    description:
      "Rising demand for crop insurance to protect farmers from unpredictable weather.",
    location: {
      address: "Block C, Insurance Plaza",
      district: "Chandigarh",
      city: "Chandigarh",
    },
  },
  {
    company: "AgriProcess Tech",
    buyer: "Surat Agri-Processing Co.",
    description:
      "Increased need for processing units to add value to raw agricultural products.",
    location: {
      address: "Plant 12, Agri-Processing Zone",
      district: "Surat",
      city: "Surat",
    },
  },
  {
    company: "Livestock Nutrition",
    buyer: "Amritsar Feed Suppliers",
    description:
      "Growing demand for high-quality livestock feed to support dairy and poultry farming.",
    location: {
      address: "34 Feed Market",
      district: "Amritsar",
      city: "Amritsar",
    },
  },
  {
    company: "AquaTech Equipments",
    buyer: "Visakhapatnam Fish Farmers",
    description:
      "Rising need for advanced aquaculture equipment to support fish farming.",
    location: {
      address: "Plot 19, Coastal Zone",
      district: "Visakhapatnam",
      city: "Visakhapatnam",
    },
  },
  {
    company: "BioFert Solutions",
    buyer: "Thrissur Organic Farms",
    description:
      "Demand for organic manure to improve soil fertility and promote sustainable farming.",
    location: {
      address: "88 Manure Depot",
      district: "Thrissur",
      city: "Thrissur",
    },
  },
];
export function MarketDisplay() {
  const [farmerCrops, setFarmerCrops] = useState(farmData);
  const [buyerCrops, setBuyerCrops] = useState(buyData);
  const [type, setType] = useState("farmer");
  const [text, setText] = useState("");
  function handleChange(value: string) {
    setType(value);
  }
  function setDashboardValues() {
    if (type === "farmer") {
      setFarmerCrops(
        farmData.filter((value) =>
          value.location.city.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setBuyerCrops(
        buyData.filter((value) =>
          value.location.city.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    }
  }
  useEffect(() => {
    setDashboardValues();
  }, [text, type]);
  function changeText(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }
  return (
    <Tabs
      onValueChange={(value) => {
        handleChange(value);
      }}
      defaultValue="farmer"
      className=""
    >
      <div className="flex">
        <TabsList className="mr-2 bg-amber-200/40 border border-solid border-amber-400/40">
          <TabsTrigger value="farmer">Farmer</TabsTrigger>
          <TabsTrigger value="buyer">Buyer</TabsTrigger>
        </TabsList>
        <Input
          type="text"
          onChange={(event) => {
            changeText(event);
          }}
          placeholder="city?"
          className="w-96"
        />
      </div>
      <TabsContent value="farmer" className="gap-2 flex flex-wrap">
        {farmerCrops.map((value) => (
          <Card className="w-96 bg-orange-100" key={value.name}>
            <CardHeader>
              <h2 className="text-lg font-medium">{value.name}</h2>
              <CardDescription>Crop: {value.crop}</CardDescription>
            </CardHeader>
            <CardContent>
              <h3>Location</h3>
              <div className="text-muted-foreground text-sm">
                <p>Address: {value.location.address}</p>
                <p>District: {value.location.district}</p>
                <p>City: {value.location.city}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="buyer" className="gap-2 flex flex-wrap">
        {buyerCrops.map((value) => (
          <Card
            className="w-96 bg-orange-100"
            key={value.buyer + value.company}
          >
            <CardHeader>
              <h2 className="text-lg font-medium">
                {value.buyer} - {value.company}
              </h2>
              <CardDescription>
                Description: {value.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3>Location</h3>
              <div className="text-muted-foreground text-sm">
                <p>Address: {value.location.address}</p>
                <p>District: {value.location.district}</p>
                <p>City: {value.location.city}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
