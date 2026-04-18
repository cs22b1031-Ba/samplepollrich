import {
  BadgeCheck,
  Factory,
  Globe,
  HardHat,
  Settings,
  ShieldCheck,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" }
];

export const searchIndex = [
  { label: "Home", href: "/", keywords: "home hero overview" },
  { label: "About", href: "/about", keywords: "about company pollrich india" },
  {
    label: "Solutions",
    href: "/solutions",
    keywords: "solutions fans engineering retrofit packages"
  },
  {
    label: "Industries",
    href: "/industries",
    keywords: "industries cement power chemical petrochemical steel mining"
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    keywords: "case studies projects performance results"
  },
  {
    label: "Services",
    href: "/services",
    keywords: "services support installation manufacturing after sales"
  },
  {
    label: "Contact",
    href: "/contact",
    keywords: "contact quote request form"
  },
  {
    label: "Cement Industry",
    href: "/industries",
    keywords: "cement airflow kiln cooler material handling"
  },
  {
    label: "Power Plants",
    href: "/industries",
    keywords: "power plant boilers turbines cooling"
  },
  {
    label: "Petrochemical Industry",
    href: "/industries",
    keywords: "petrochemical refinery process units"
  }
];

export const trustedBrands = [
  "UltraTech Cement",
  "TATA Steel",
  "Aditya Birla",
  "JSW",
  "NTPC",
  "Vedanta"
];

export const metrics = [
  {
    title: "120 +",
    text: "Years of engineering legacy",
    icon: <ShieldCheck size={20} />
  },
  {
    title: "100,000 +",
    text: "Installations worldwide",
    icon: <Globe size={20} />
  },
  {
    title: "German Technology",
    text: "Design standard and process discipline",
    icon: <BadgeCheck size={20} />
  }
];

export const services = [
  {
    title: "Custom Engineering",
    description:
      "Tailored airflow systems designed to meet specific plant and process requirements.",
    icon: <Settings size={48} strokeWidth={1.7} />
  },
  {
    title: "Manufacturing",
    description:
      "Precision-built centrifugal fans using advanced engineering and strict quality standards.",
    icon: <Factory size={48} strokeWidth={1.7} />
  },
  {
    title: "Installation",
    description:
      "Seamless on-site integration ensuring optimal system performance and reliability.",
    icon: <HardHat size={48} strokeWidth={1.7} />
  },
  {
    title: "After Sales Support",
    description:
      "Reliable maintenance, servicing, and spare parts for long-term operational efficiency.",
    icon: <Wrench size={48} strokeWidth={1.7} />
  }
];

export const industries = [
  {
    title: "Cement",
    description: "Airflow systems for kilns, coolers, and material handling processes.",
    image: "/images/industry-cement.jpg"
  },
  {
    title: "Power Plants",
    description: "Efficient airflow systems for boilers, turbines, and cooling operations.",
    image: "/images/industry-power.jpg"
  },
  {
    title: "Chemical",
    description: "Corrosion-resistant airflow solutions for demanding chemical environments.",
    image: "/images/industry-chemical.jpg"
  },
  {
    title: "Petrochemical",
    description: "Reliable airflow systems for refineries and petrochemical processing units.",
    image: "/images/industry-petrochemical.jpg"
  },
  {
    title: "Steel",
    description: "High-temperature airflow solutions for blast furnaces and processing units.",
    image: "/images/industry-steel.jpg"
  },
  {
    title: "Mining",
    description: "Heavy-duty ventilation systems for underground and surface mining operations.",
    image: "/images/industry-mining.jpg"
  }
];

export const caseStudies = [
  {
    title: "Cement",
    image: "/images/case-cement.jpg"
  },
  {
    title: "Power Plant",
    image: "/images/case-power.jpg"
  },
  {
    title: "Petrochemical",
    image: "/images/case-petrochemical.jpg"
  }
];

export const solutions = [
  {
    title: "Centrifugal Process Fans",
    description:
      "High-efficiency fans tailored to pressure, flow, and operating-temperature demands."
  },
  {
    title: "Gas Handling Systems",
    description:
      "Robust units designed for dusty, corrosive, and high-moisture process streams."
  },
  {
    title: "Booster & ID Fan Packages",
    description:
      "Application-tuned packages for power, cement, steel, and captive energy systems."
  },
  {
    title: "Retrofit & Upgrade Programs",
    description:
      "Capacity improvements and energy optimization for existing industrial installations."
  }
];

export const aboutHighlights = [
  "Application-led engineering for complex industrial airflow challenges.",
  "Strong focus on uptime, process stability, and lifecycle maintainability.",
  "Integrated support from system selection to commissioning and service."
];

export const detailSections = {
  about: {
    image: "/images/about-plant.jpg",
    cards: [
      {
        title: "Engineering Approach",
        text: "We begin with process conditions, operating duty, and site realities to build practical systems that perform in the field."
      },
      {
        title: "Manufacturing Discipline",
        text: "Fabrication, balancing, and inspection processes are aligned to industrial-grade quality expectations."
      },
      {
        title: "Lifecycle Value",
        text: "Our teams support long-term performance through maintenance planning, replacements, and performance upgrades."
      }
    ]
  },
  solutions: {
    image: "/images/solutions-hero.jpg",
    cards: [
      {
        title: "High-Efficiency Fans",
        text: "Designed to reduce power consumption while maintaining steady airflow under variable loads."
      },
      {
        title: "Severe Duty Materials",
        text: "Material choices and coatings are matched to abrasion, corrosion, and temperature exposure."
      },
      {
        title: "Plant Integration",
        text: "Our packages account for ducts, dampers, access, vibration, and real commissioning needs."
      }
    ]
  },
  industries: {
    image: "/images/industries-hero.jpg",
    cards: industries.map((industry) => ({
      title: industry.title,
      text: industry.description
    }))
  },
  caseStudies: {
    image: "/images/case-hero.jpg",
    cards: [
      {
        title: "Kiln Exhaust Optimization",
        text: "Delivered improved flow balance and reduced maintenance events for a high-throughput cement line."
      },
      {
        title: "Boiler Draft Stability",
        text: "Re-engineered fan duty for a power plant to support more stable combustion performance."
      },
      {
        title: "Process Reliability Upgrade",
        text: "Enhanced performance in a petrochemical environment with materials and geometry tailored to site conditions."
      }
    ]
  },
  services: {
    image: "/images/services-hero.jpg",
    cards: services.map((service) => ({
      title: service.title,
      text: service.description
    }))
  }
};
