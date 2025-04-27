
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  // Smartphones - Samsung
  {
    id: "sm1",
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    category: "smartphone",
    price: 124999,
    image: "/placeholder.svg",
    description: "The ultimate smartphone with S Pen, powerful camera and long-lasting battery.",
    rating: 4.8,
    stock: 20,
    features: ["200MP Camera", "S Pen", "8K Video", "5000mAh Battery", "Snapdragon 8 Gen 2"],
    colors: ["Phantom Black", "Green", "Cream", "Lavender"]
  },
  {
    id: "sm2",
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    category: "smartphone",
    price: 74999,
    image: "/placeholder.svg",
    description: "Compact flagship with premium features and Snapdragon processor.",
    rating: 4.7,
    stock: 30,
    features: ["50MP Camera", "8K Video", "Dynamic AMOLED", "IP68 Water Resistant"],
    colors: ["Phantom Black", "Green", "Cream", "Lavender"]
  },
  {
    id: "sm3",
    name: "Samsung Galaxy Z Flip5",
    brand: "Samsung",
    category: "smartphone",
    price: 99999,
    image: "/placeholder.svg",
    description: "Revolutionary foldable phone with unique Flex mode and cover display.",
    rating: 4.6,
    stock: 15,
    features: ["Foldable Display", "Flex Mode", "Cover Screen", "IPX8 Water Resistant"],
    colors: ["Mint", "Lavender", "Graphite", "Cream"]
  },
  
  // Smartphones - Realme
  {
    id: "sm4",
    name: "Realme GT 5",
    brand: "Realme",
    category: "smartphone",
    price: 32999,
    image: "/placeholder.svg",
    description: "High-performance smartphone with Snapdragon 8 Gen 2 and fast charging.",
    rating: 4.5,
    stock: 25,
    features: ["Snapdragon 8 Gen 2", "240W Fast Charging", "144Hz Display", "50MP Sony IMX890"],
    colors: ["Orange", "Black", "White"]
  },
  {
    id: "sm5",
    name: "Realme 11 Pro+",
    brand: "Realme",
    category: "smartphone",
    price: 27999,
    image: "/placeholder.svg",
    description: "Premium mid-range phone with flagship camera and curved display.",
    rating: 4.4,
    stock: 35,
    features: ["200MP Camera", "67W Fast Charging", "Curved AMOLED", "8GB+256GB"],
    colors: ["Sunrise Beige", "Oasis Green", "Astral Black"]
  },
  {
    id: "sm6",
    name: "Realme Narzo 60 Pro",
    brand: "Realme",
    category: "smartphone",
    price: 23999,
    image: "/placeholder.svg",
    description: "Gaming-focused smartphone with premium design and powerful processor.",
    rating: 4.3,
    stock: 40,
    features: ["Dimensity 7050", "5000mAh Battery", "120Hz AMOLED", "67W Fast Charging"],
    colors: ["Mars Orange", "Cosmic Black"]
  },
  
  // Smartphones - OPPO
  {
    id: "sm7",
    name: "OPPO Find X6 Pro",
    brand: "OPPO",
    category: "smartphone",
    price: 69999,
    image: "/placeholder.svg",
    description: "Premium flagship with Hasselblad camera system and waterproof design.",
    rating: 4.7,
    stock: 20,
    features: ["50MP Hasselblad Camera", "Snapdragon 8 Gen 2", "IP68 Rating", "5000mAh Battery"],
    colors: ["Black", "Brown", "Green"]
  },
  {
    id: "sm8",
    name: "OPPO Reno 10 Pro+",
    brand: "OPPO",
    category: "smartphone",
    price: 44999,
    image: "/placeholder.svg",
    description: "Slim profile smartphone with powerful periscope camera and fast charging.",
    rating: 4.5,
    stock: 25,
    features: ["Periscope Telephoto", "80W SuperVOOC", "120Hz AMOLED", "Snapdragon 8+ Gen 1"],
    colors: ["Silvery Grey", "Glossy Purple", "Midnight Black"]
  },
  {
    id: "sm9",
    name: "OPPO F23",
    brand: "OPPO",
    category: "smartphone",
    price: 19999,
    image: "/placeholder.svg",
    description: "Stylish mid-range phone with great camera capabilities and large battery.",
    rating: 4.3,
    stock: 45,
    features: ["64MP Camera", "5000mAh Battery", "33W Fast Charging", "8GB RAM"],
    colors: ["Bold Gold", "Awesome Black"]
  },
  
  // Smartphones - Tecno
  {
    id: "sm10",
    name: "Tecno Phantom X2 Pro",
    brand: "Tecno",
    category: "smartphone",
    price: 49999,
    image: "/placeholder.svg",
    description: "Flagship with retractable portrait camera and premium design.",
    rating: 4.4,
    stock: 15,
    features: ["Retractable Portrait Lens", "Dimensity 9000", "5160mAh Battery", "45W Charging"],
    colors: ["Mars Orange", "Stardust Grey"]
  },
  {
    id: "sm11",
    name: "Tecno Camon 20 Pro",
    brand: "Tecno",
    category: "smartphone",
    price: 19999,
    image: "/placeholder.svg",
    description: "Photography-focused phone with RGBW sensor and stylish design.",
    rating: 4.2,
    stock: 30,
    features: ["64MP RGBW Sensor", "Helio G99", "5000mAh Battery", "33W Fast Charging"],
    colors: ["Serenity Blue", "Predawn Black"]
  },
  {
    id: "sm12",
    name: "Tecno Pova 5 Pro",
    brand: "Tecno",
    category: "smartphone",
    price: 14999,
    image: "/placeholder.svg",
    description: "Gaming smartphone with large battery and RGB light design.",
    rating: 4.1,
    stock: 35,
    features: ["Dimensity 6080", "68W Fast Charging", "6000mAh Battery", "RGB Light Design"],
    colors: ["Silver Fantasy", "Dark Illusion"]
  },
  
  // Smartphones - ASUS ROG
  {
    id: "sm13",
    name: "ASUS ROG Phone 7 Ultimate",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 99999,
    image: "/placeholder.svg",
    description: "Ultimate gaming phone with cooling system, triggers and high refresh rate.",
    rating: 4.9,
    stock: 10,
    features: ["Snapdragon 8 Gen 2", "AirTrigger 3", "165Hz Display", "6000mAh Battery", "ROG Vision"],
    colors: ["Storm White"]
  },
  {
    id: "sm14",
    name: "ASUS ROG Phone 7",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 74999,
    image: "/placeholder.svg",
    description: "Powerful gaming phone with immersive audio and Snapdragon processor.",
    rating: 4.8,
    stock: 15,
    features: ["Snapdragon 8 Gen 2", "AirTrigger 3", "165Hz Display", "6000mAh Battery"],
    colors: ["Phantom Black", "Storm White"]
  },
  {
    id: "sm15",
    name: "ASUS ROG Phone 6",
    brand: "ASUS ROG",
    category: "smartphone",
    price: 59999,
    image: "/placeholder.svg",
    description: "Previous-gen gaming powerhouse with AeroActive Cooler and RGB lighting.",
    rating: 4.7,
    stock: 20,
    features: ["Snapdragon 8+ Gen 1", "AirTrigger 3", "165Hz Display", "6000mAh Battery"],
    colors: ["Phantom Black", "Storm White", "Blue"]
  },
  
  // Earbuds - JBL
  {
    id: "eb1",
    name: "JBL Tour Pro 2",
    brand: "JBL",
    category: "earbuds",
    price: 16999,
    image: "/placeholder.svg",
    description: "Premium earbuds with smart charging case featuring a touchscreen display.",
    rating: 4.7,
    stock: 25,
    features: ["Touchscreen Case", "Adaptive Noise Cancellation", "40H Battery", "10mm Drivers"],
    colors: ["Black"]
  },
  {
    id: "eb2",
    name: "JBL Live Pro 2",
    brand: "JBL",
    category: "earbuds",
    price: 11999,
    image: "/placeholder.svg",
    description: "Stick design earbuds with True Adaptive Noise Cancelling and clear voice calls.",
    rating: 4.5,
    stock: 30,
    features: ["True Adaptive NC", "40H Battery", "6 Microphones", "Wireless Charging"],
    colors: ["Black", "Blue", "Pink"]
  },
  {
    id: "eb3",
    name: "JBL Tune Flex",
    brand: "JBL",
    category: "earbuds",
    price: 7999,
    image: "/placeholder.svg",
    description: "Versatile earbuds with open and sealed ear tips for different listening modes.",
    rating: 4.3,
    stock: 40,
    features: ["Open & Sealed Modes", "32H Battery", "Active Noise Cancellation", "JBL App"],
    colors: ["Black", "White", "Blue", "Purple"]
  },
  
  // Earbuds - boAt
  {
    id: "eb4",
    name: "boAt Airdopes 500 ANC",
    brand: "boAt",
    category: "earbuds",
    price: 4999,
    image: "/placeholder.svg",
    description: "Feature-packed ANC earbuds with 50H playtime and BEAST Mode for gaming.",
    rating: 4.4,
    stock: 50,
    features: ["32dB ANC", "50H Playtime", "BEAST Mode", "10mm Drivers", "IPX4 Rating"],
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "eb5",
    name: "boAt Airdopes 600",
    brand: "boAt",
    category: "earbuds",
    price: 3999,
    image: "/placeholder.svg",
    description: "Premium earbuds with quad mic ENC and ASAP quick charge.",
    rating: 4.3,
    stock: 60,
    features: ["Quad Mic ENC", "40H Playtime", "ENx Technology", "10mm Drivers", "IPX5 Rating"],
    colors: ["Black", "White", "Navy Blue"]
  },
  {
    id: "eb6",
    name: "boAt Airdopes 200",
    brand: "boAt",
    category: "earbuds",
    price: 1499,
    image: "/placeholder.svg",
    description: "Budget-friendly earbuds with good sound quality and battery life.",
    rating: 4.1,
    stock: 100,
    features: ["8mm Drivers", "20H Playtime", "IWP Technology", "Bluetooth 5.3", "IPX4 Rating"],
    colors: ["Active Black", "Bold Blue", "Carbon Black", "Steel Blue"]
  },
  
  // Earbuds - Realme
  {
    id: "eb7",
    name: "Realme Buds Air 5 Pro",
    brand: "Realme",
    category: "earbuds",
    price: 4999,
    image: "/placeholder.svg",
    description: "Hi-Res certified earbuds with dual drivers and strong noise cancellation.",
    rating: 4.5,
    stock: 35,
    features: ["Dual Drivers", "50dB ANC", "43H Battery", "Spatial Audio", "Hi-Res Audio"],
    colors: ["Celebration Green", "Stylish Black"]
  },
  {
    id: "eb8",
    name: "Realme Buds Air 5",
    brand: "Realme",
    category: "earbuds",
    price: 3699,
    image: "/placeholder.svg",
    description: "Feature-rich earbuds with strong ANC and premium sound quality.",
    rating: 4.3,
    stock: 45,
    features: ["12.4mm Drivers", "49dB ANC", "38H Battery", "Bluetooth 5.3", "IP55 Rating"],
    colors: ["Arctic White", "Resonance Green"]
  },
  {
    id: "eb9",
    name: "Realme Buds T100",
    brand: "Realme",
    category: "earbuds",
    price: 1499,
    image: "/placeholder.svg",
    description: "Entry-level earbuds with AI ENC for clear calls and good battery life.",
    rating: 4.0,
    stock: 70,
    features: ["10mm Drivers", "AI ENC", "28H Battery", "Game Mode", "IPX5 Rating"],
    colors: ["Black", "White", "Jazz Blue"]
  },
  
  // Earbuds - Apple
  {
    id: "eb10",
    name: "Apple AirPods Pro 2",
    brand: "Apple",
    category: "earbuds",
    price: 24900,
    image: "/placeholder.svg",
    description: "Premium earbuds with top-tier ANC, Spatial Audio, and seamless Apple integration.",
    rating: 4.8,
    stock: 20,
    features: ["Adaptive Transparency", "Personalized Spatial Audio", "H2 Chip", "MagSafe Case"],
    colors: ["White"]
  },
  {
    id: "eb11",
    name: "Apple AirPods (3rd Gen)",
    brand: "Apple",
    category: "earbuds",
    price: 19900,
    image: "/placeholder.svg",
    description: "Open-ear design with Spatial Audio and sweat resistance.",
    rating: 4.6,
    stock: 25,
    features: ["Spatial Audio", "Adaptive EQ", "Force Sensor", "MagSafe Charging"],
    colors: ["White"]
  },
  {
    id: "eb12",
    name: "Apple AirPods (2nd Gen)",
    brand: "Apple",
    category: "earbuds",
    price: 12900,
    image: "/placeholder.svg",
    description: "Classic AirPods with reliable connection and good battery life.",
    rating: 4.5,
    stock: 30,
    features: ["H1 Chip", "Hey Siri", "24H Battery with Case", "Quick Pairing"],
    colors: ["White"]
  },
  
  // More smartphones
  {
    id: "sm16",
    name: "Samsung Galaxy A54 5G",
    brand: "Samsung",
    category: "smartphone",
    price: 32999,
    image: "/placeholder.svg",
    description: "Mid-range smartphone with great display and camera capabilities.",
    rating: 4.4,
    stock: 40,
    features: ["50MP Camera", "120Hz Super AMOLED", "5000mAh Battery", "IP67 Rating"],
    colors: ["Awesome Graphite", "Awesome White", "Awesome Lime"]
  },
  {
    id: "sm17",
    name: "Realme 11X",
    brand: "Realme",
    category: "smartphone",
    price: 14999,
    image: "/placeholder.svg",
    description: "Budget smartphone with good performance and camera.",
    rating: 4.2,
    stock: 50,
    features: ["50MP Camera", "120Hz Display", "5000mAh Battery", "33W Fast Charging"],
    colors: ["Purple Dawn", "Midnight Black"]
  },
  {
    id: "sm18",
    name: "OPPO A78",
    brand: "OPPO",
    category: "smartphone",
    price: 17999,
    image: "/placeholder.svg",
    description: "Stylish mid-range phone with AMOLED display and fast charging.",
    rating: 4.2,
    stock: 45,
    features: ["50MP Camera", "67W Fast Charging", "AMOLED Display", "IP54 Rating"],
    colors: ["Glowing Black", "Aqua Green"]
  },
  
  // More earbuds
  {
    id: "eb13",
    name: "JBL Tune 230NC",
    brand: "JBL",
    category: "earbuds",
    price: 5499,
    image: "/placeholder.svg",
    description: "Affordable noise-cancelling earbuds with powerful bass.",
    rating: 4.2,
    stock: 55,
    features: ["Active Noise Cancellation", "40H Battery", "4 Microphones", "IPX4 Rating"],
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "eb14",
    name: "boAt Rockerz 330 Pro",
    brand: "boAt",
    category: "earbuds",
    price: 1699,
    image: "/placeholder.svg",
    description: "Neckband earphones with long battery life and deep bass.",
    rating: 4.1,
    stock: 75,
    features: ["10mm Drivers", "60H Playtime", "ASAP Charge", "Bluetooth 5.2"],
    colors: ["Active Black", "Blazing Yellow", "Teal Green"]
  },
  {
    id: "eb15",
    name: "Realme Buds Wireless 3",
    brand: "Realme",
    category: "earbuds",
    price: 1799,
    image: "/placeholder.svg",
    description: "Neckband earphones with ANC and Hi-Res audio certification.",
    rating: 4.0,
    stock: 60,
    features: ["13.6mm Drivers", "30dB ANC", "40H Battery", "Fast Charging"],
    colors: ["Vitality White", "Bass Black"]
  },
  
  // Additional smartphones
  {
    id: "sm19",
    name: "Samsung Galaxy Z Fold5",
    brand: "Samsung",
    category: "smartphone",
    price: 154999,
    image: "/placeholder.svg",
    description: "Premium foldable phone with large inner display and S Pen support.",
    rating: 4.8,
    stock: 12,
    features: ["7.6-inch Main Display", "S Pen Compatible", "IPX8 Rating", "50MP Camera"],
    colors: ["Icy Blue", "Phantom Black", "Cream"]
  },
  {
    id: "sm20",
    name: "Tecno Spark 10 Pro",
    brand: "Tecno",
    category: "smartphone",
    price: 12999,
    image: "/placeholder.svg",
    description: "Budget smartphone with good camera and large battery.",
    rating: 4.0,
    stock: 55,
    features: ["50MP Camera", "32MP Selfie", "5000mAh Battery", "6.8-inch Display"],
    colors: ["Starry Black", "Pearl White", "Magic Skin"]
  },
  
  // Additional earbuds
  {
    id: "eb16",
    name: "Apple AirPods Max",
    brand: "Apple",
    category: "earbuds",
    price: 59900,
    image: "/placeholder.svg",
    description: "High-end over-ear headphones with computational audio and ANC.",
    rating: 4.7,
    stock: 15,
    features: ["Active Noise Cancellation", "Spatial Audio", "H1 Chip", "20H Battery"],
    colors: ["Space Gray", "Silver", "Green", "Sky Blue", "Pink"]
  },
  {
    id: "eb17",
    name: "JBL Reflect Flow Pro",
    brand: "JBL",
    category: "earbuds",
    price: 10999,
    image: "/placeholder.svg",
    description: "Sports earbuds with robust build and noise cancellation.",
    rating: 4.4,
    stock: 30,
    features: ["Adaptive Noise Cancelling", "30H Battery", "IP68 Rating", "POWERFINS Design"],
    colors: ["Black", "Blue", "White", "Pink"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'smartphone' | 'earbuds'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand === brand);
};

export const getFeaturedProducts = (count = 6): Product[] => {
  // Get a mix of highest-rated products
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};

export const getRelatedProducts = (product: Product, count = 4): Product[] => {
  // Get products in same category excluding the given product
  const categoryProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  );
  
  // Sort by brand (prioritize same brand) and then by rating
  return [...categoryProducts]
    .sort((a, b) => {
      // Prioritize same brand
      if (a.brand === product.brand && b.brand !== product.brand) return -1;
      if (a.brand !== product.brand && b.brand === product.brand) return 1;
      // Then sort by rating
      return b.rating - a.rating;
    })
    .slice(0, count);
};

export const getBrands = (): string[] => {
  return Array.from(new Set(products.map(product => product.brand)));
};

export const getPriceRange = (): { min: number, max: number } => {
  const prices = products.map(product => product.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
  });
};
