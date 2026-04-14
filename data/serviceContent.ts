export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  commonIssues: string[];
  benefits: {
    title: string;
    icon: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  areas: string;
  emergency: string;
  features: string[];
}

export const serviceContentData: ServiceContent[] = [
  {
    id: "plumbing",
    title: "Plumbing",
    description: "Professional plumbing services for Edmonton homeowners including repairs, installations, and emergency solutions.",
    longDescription: "Our certified plumbers provide comprehensive plumbing services throughout Edmonton and surrounding areas. From minor repairs to major installations, we handle all your plumbing needs with expertise and professionalism. We understand Alberta's unique plumbing challenges, including frozen pipes in winter and high water pressure issues.",
    image: "/plumbing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Frozen pipes during Edmonton winters",
      "Leaky faucets and fixtures",
      "Clogged drains and sewer lines",
      "Water heater malfunctions",
      "Low water pressure problems",
      "Bathroom plumbing renovations"
    ],
    benefits: [
      {
        title: "24/7 Emergency",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Round-the-clock emergency plumbing services for burst pipes and major leaks"
      },
      {
        title: "Licensed Professionals",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Fully licensed and insured plumbers compliant with Alberta building codes"
      },
      {
        title: "Upfront Pricing",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Transparent pricing with no hidden fees or surprise charges"
      },
      {
        title: "Quality Materials",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Premium materials and parts with manufacturer warranties"
      }
    ],
    faqs: [
      {
        question: "Do you offer emergency plumbing services in Edmonton?",
        answer: "Yes, we provide 24/7 emergency plumbing services throughout Edmonton. Whether you have a burst pipe, major leak, or sewer backup, our licensed plumbers are ready to help immediately."
      },
      {
        question: "Are your plumbers licensed and insured?",
        answer: "Absolutely! All our plumbers are fully licensed, insured, and certified to work in Alberta. We comply with all local building codes and safety regulations, and carry comprehensive liability insurance."
      },
      {
        question: "What areas do you service for plumbing work?",
        answer: "We serve Edmonton, St. Albert, Sherwood Park, Spruce Grove, Beaumont, Leduc, and surrounding communities in the greater Edmonton area."
      },
      {
        question: "Do you provide free estimates for plumbing services?",
        answer: "Yes, we offer free, no-obligation estimates for all plumbing services. We'll assess your needs and provide a detailed quote before any work begins."
      },
      {
        question: "How do you handle frozen pipes in Edmonton winters?",
        answer: "We specialize in winter plumbing issues! We use professional thawing equipment, pipe insulation solutions, and preventive measures to protect your plumbing from Edmonton's extreme cold."
      }
    ],
    process: [
      {
        step: 1,
        title: "Inspection & Diagnosis",
        description: "Thorough assessment of your plumbing system to identify issues and root causes"
      },
      {
        step: 2,
        title: "Detailed Quote",
        description: "Transparent pricing with detailed breakdown of required repairs and materials"
      },
      {
        step: 3,
        title: "Professional Repair",
        description: "Expert plumbing work using quality materials and industry best practices"
      },
      {
        step: 4,
        title: "Testing & Quality Check",
        description: "Comprehensive testing to ensure everything works perfectly"
      },
      {
        step: 5,
        title: "Cleanup & Warranty",
        description: "Site cleanup and documentation of warranty coverage"
      }
    ],
    areas: "Edmonton, St. Albert, Sherwood Park, Spruce Grove, Beaumont, Leduc, and surrounding communities",
    emergency: "24/7 emergency plumbing services available for burst pipes, major leaks, sewer backups, and other urgent plumbing issues. Call (780) 802-6830 for immediate assistance.",
    features: [
      "Pipe repairs and replacements",
      "Faucet and fixture installations", 
      "Drain cleaning and unclogging",
      "Water heater installation and repair",
      "Bathroom plumbing renovations",
      "Emergency plumbing services",
      "Sump pump installation",
      "Garbage disposal repair",
      "Pipe insulation for winter",
      "Sewer line inspection and repair"
    ]
  },
  {
    id: "painting",
    title: "Painting",
    description: "Expert painting services for Edmonton homes with premium paints and professional finishes.",
    longDescription: "Transform your Edmonton home with our professional painting services. We specialize in interior and exterior painting using high-quality, weather-resistant paints specifically formulated for Alberta's extreme climate. Our team understands how to paint in Edmonton's conditions, ensuring beautiful, lasting results.",
    image: "/painting.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Paint peeling due to temperature changes",
      "Fading from UV exposure",
      "Moisture damage and mold growth",
      "Poor color selection for lighting",
      "Inadequate surface preparation",
      "Weather-related paint failure"
    ],
    benefits: [
      {
        title: "Weather-Resistant Paints",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Premium paints formulated for Alberta's -40°C to +30°C temperature ranges"
      },
      {
        title: "Professional Preparation",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Thorough surface preparation ensuring long-lasting paint adhesion"
      },
      {
        title: "Color Consultation",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Expert color selection considering Edmonton's natural lighting conditions"
      },
      {
        title: "Clean Finish",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Meticulous cleanup and professional finish every time"
      }
    ],
    faqs: [
      {
        question: "What type of paint do you use for Edmonton's climate?",
        answer: "We use high-quality, weather-resistant paints specifically formulated for Alberta's extreme temperature variations. Our paints can withstand -40°C winters and +30°C summers while maintaining color and durability."
      },
      {
        question: "How long does a typical painting project take?",
        answer: "Project timelines vary based on size and complexity. A typical room takes 1-2 days, while whole home exteriors may take 3-5 days. We provide detailed timelines in our estimates and work efficiently to minimize disruption."
      },
      {
        question: "Do you provide color consultation services?",
        answer: "Yes, we offer professional color consultation to help you choose perfect colors that complement your home, Edmonton's natural lighting conditions, and your personal style."
      },
      {
        question: "Are you insured for painting projects?",
        answer: "Yes, we carry comprehensive liability insurance and WCB coverage. All our work is fully insured for your peace of mind, and we stand behind our workmanship."
      },
      {
        question: "How do you paint in Edmonton's weather conditions?",
        answer: "We monitor weather conditions carefully and use appropriate techniques for each season. We have temperature-controlled painting solutions and flexible scheduling to work around Edmonton's unpredictable weather."
      }
    ],
    process: [
      {
        step: 1,
        title: "Color Consultation",
        description: "Professional color selection and design consultation for your space"
      },
      {
        step: 2,
        title: "Surface Preparation",
        description: "Thorough cleaning, sanding, and priming for optimal paint adhesion"
      },
      {
        step: 3,
        title: "Professional Painting",
        description: "Expert application using proper techniques and quality materials"
      },
      {
        step: 4,
        title: "Quality Inspection",
        description: "Detailed inspection for even coverage and proper finish"
      },
      {
        step: 5,
        title: "Final Touches",
        description: "Cleanup, touch-ups, and final walkthrough with client"
      }
    ],
    areas: "Edmonton and surrounding areas including St. Albert, Spruce Grove, and Leduc",
    emergency: "Emergency painting services available for water damage restoration, urgent touch-ups, and time-sensitive painting needs in Edmonton.",
    features: [
      "Interior painting and wall preparation",
      "Exterior house painting",
      "Cabinet and furniture painting",
      "Drywall repair and finishing",
      "Deck and fence staining",
      "Commercial painting services",
      "Eco-friendly paint options",
      "Color consultation services",
      "Texture and faux finishes",
      "Weatherproofing applications"
    ]
  },
  {
    id: "carpentry",
    title: "Carpentry",
    description: "Skilled carpentry services for Edmonton homes with custom woodwork and professional craftsmanship.",
    longDescription: "Our expert carpenters bring craftsmanship and attention to detail to every project. From custom furniture to structural carpentry, we create beautiful, functional woodwork that enhances your Edmonton home. We understand wood behavior in Alberta's climate and use appropriate materials and techniques.",
    image: "/carpentry.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Wood warping from humidity changes",
      "Structural damage over time",
      "Outdated carpentry styles",
      "Poor quality materials",
      "Inadequate weather protection",
      "Custom fit and finish issues"
    ],
    benefits: [
      {
        title: "Custom Woodwork",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Bespoke carpentry solutions tailored to your specific needs and space"
      },
      {
        title: "Quality Materials",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Premium woods and materials selected for Edmonton's climate conditions"
      },
      {
        title: "Expert Craftsmanship",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Professional carpentry with attention to detail and finish quality"
      },
      {
        title: "Durable Results",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Long-lasting carpentry built to withstand Alberta's weather extremes"
      }
    ],
    faqs: [
      {
        question: "What types of carpentry services do you offer?",
        answer: "We provide custom furniture building, kitchen and bathroom remodeling, deck construction, fence building, trim work, cabinet installation, and all types of woodworking projects for Edmonton homes."
      },
      {
        question: "Do you work with both indoor and outdoor carpentry?",
        answer: "Yes, we handle both interior and exterior carpentry projects. From custom indoor shelving to outdoor decks and pergolas built to withstand Edmonton's weather conditions."
      },
      {
        question: "Can you help with custom carpentry designs?",
        answer: "Absolutely! We specialize in custom carpentry and can work with your designs or help create custom solutions tailored to your specific needs, space requirements, and Edmonton home characteristics."
      },
      {
        question: "What materials do you work with?",
        answer: "We work with all types of wood including pine, oak, maple, cedar, and composite materials. We can help you choose the best material for your project, budget, and Edmonton's climate."
      },
      {
        question: "How do you protect woodwork from Edmonton's weather?",
        answer: "We use weather-resistant finishes, proper sealing techniques, and appropriate wood selection for exterior projects. For interior work, we consider humidity control and seasonal wood movement."
      }
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description: "Detailed discussion of your carpentry needs and design preferences"
      },
      {
        step: 2,
        title: "Material Selection",
        description: "Professional guidance on wood selection and material procurement"
      },
      {
        step: 3,
        title: "Custom Construction",
        description: "Precision carpentry work with attention to detail and craftsmanship"
      },
      {
        step: 4,
        title: "Finishing & Treatment",
        description: "Professional finishing, staining, or painting as required"
      },
      {
        step: 5,
        title: "Installation & Cleanup",
        description: "Professional installation and thorough site cleanup"
      }
    ],
    areas: "Greater Edmonton area including St. Albert, Sherwood Park, Beaumont, and surrounding communities",
    emergency: "Emergency carpentry repairs for structural issues, broken doors, damaged furniture, or other urgent woodwork needs in Edmonton homes.",
    features: [
      "Custom furniture building",
      "Kitchen and bathroom remodeling",
      "Deck and fence construction",
      "Trim and molding installation",
      "Cabinet installation and repair",
      "Window and door framing",
      "Custom shelving solutions",
      "Wood floor installation",
      "Outdoor structure building",
      "Furniture repair and restoration"
    ]
  },
  {
    id: "fences",
    title: "Fences",
    description: "Professional fence installation and repair services for Edmonton properties with durable materials.",
    longDescription: "Protect and enhance your Edmonton property with our professional fencing services. We install all types of fences designed to withstand Alberta's harsh weather conditions while providing security, privacy, and aesthetic appeal. Our experienced team ensures proper installation for long-lasting performance.",
    image: "/fencing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Fence damage from winter snow load",
      "Wood rot and insect damage",
      "Gate failure and misalignment",
      "Privacy and security concerns",
      "Weather-related material degradation",
      "Poor installation and stability issues"
    ],
    benefits: [
      {
        title: "Weather-Resistant Materials",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Fencing materials selected and treated for Alberta's extreme weather conditions"
      },
      {
        title: "Professional Installation",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Expert installation ensuring stability, proper alignment, and longevity"
      },
      {
        title: "Security Focused",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Fencing solutions designed for maximum security and privacy protection"
      },
      {
        title: "Custom Designs",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Custom fence designs tailored to your property and aesthetic preferences"
      }
    ],
    faqs: [
      {
        question: "What types of fences do you install in Edmonton?",
        answer: "We install wood fences, vinyl fencing, composite materials, chain link fences, and custom designs. All materials are selected for durability in Alberta's climate and installed to withstand heavy snow loads and wind."
      },
      {
        question: "How do you handle fence installation in winter?",
        answer: "We install fences year-round in Edmonton using specialized techniques for frozen ground conditions. We also provide temporary solutions during extreme weather and complete permanent installation as conditions permit."
      },
      {
        question: "Do you provide fence repair services?",
        answer: "Yes, we offer comprehensive fence repair including post replacement, board repair, gate fixing, and weather damage restoration. We can extend the life of your existing fence or recommend replacement when needed."
      },
      {
        question: "Are your fences built for Edmonton's snow loads?",
        answer: "Absolutely! We engineer all our fences to handle Edmonton's heavy snow loads. We use proper post depth, reinforced materials, and appropriate spacing to prevent snow damage."
      },
      {
        question: "Do you handle permit requirements for fences?",
        answer: "Yes, we're familiar with Edmonton's fence permit requirements and can assist with the permit process. We ensure all installations comply with local bylaws and regulations."
      }
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "Property evaluation and fence planning with utility location checks"
      },
      {
        step: 2,
        title: "Design & Permit",
        description: "Custom fence design and permit assistance if required"
      },
      {
        step: 3,
        title: "Material Preparation",
        description: "Quality material selection and preparation for installation"
      },
      {
        step: 4,
        title: "Professional Installation",
        description: "Expert fence installation with proper techniques and equipment"
      },
      {
        step: 5,
        title: "Final Inspection",
        description: "Quality check, cleanup, and client walkthrough"
      }
    ],
    areas: "Edmonton and surrounding communities including St. Albert, Sherwood Park, Spruce Grove",
    emergency: "Emergency fence repairs for storm damage, security breaches, fallen sections, or other urgent fencing needs in Edmonton.",
    features: [
      "Wood fence installation",
      "Vinyl and composite fencing",
      "Chain link fence installation",
      "Gate installation and automation",
      "Fence repair and maintenance",
      "Privacy fence construction",
      "Pool fence installation",
      "Custom fence design",
      "Snow load reinforcement",
      "Utility line coordination"
    ]
  },
  {
    id: "decks",
    title: "Decks",
    description: "Quality deck construction and repair services for Edmonton outdoor living spaces.",
    longDescription: "Create the perfect outdoor living space with our professional deck services. We design and build custom decks that maximize Edmonton's short summer season while withstanding our harsh winters. Our decks are engineered for snow loads, proper drainage, and year-round durability.",
    image: "/deck.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Wood rot from moisture exposure",
      "Structural failure and instability",
      "Winter snow and ice damage",
      "Poor drainage and water pooling",
      "Inadequate railings and safety",
      "Fading and surface degradation"
    ],
    benefits: [
      {
        title: "Weather Engineered",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Decks designed and built for Alberta's climate extremes and snow loads"
      },
      {
        title: "Custom Designs",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Bespoke deck designs tailored to your space and lifestyle needs"
      },
      {
        title: "Quality Materials",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Premium materials selected for durability and performance in Edmonton conditions"
      },
      {
        title: "Safety Focused",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Proper railings, non-slip surfaces, and structural safety features"
      }
    ],
    faqs: [
      {
        question: "How do you build decks for Edmonton's climate?",
        answer: "We engineer decks specifically for Alberta's conditions using pressure-treated materials, proper foundation techniques, snow load considerations, and excellent drainage systems. Our decks handle -40°C winters and +30°C summers."
      },
      {
        question: "What materials do you use for decks?",
        answer: "We use pressure-treated wood, cedar, composite materials, and PVC decking. Each material is selected based on your budget, maintenance preferences, and Edmonton's weather requirements."
      },
      {
        question: "Do you handle deck permits in Edmonton?",
        answer: "Yes, we're familiar with Edmonton's deck permit requirements and handle all necessary permits. We ensure compliance with local building codes and safety regulations."
      },
      {
        question: "How long does deck installation take?",
        answer: "Typical deck installations take 3-7 days depending on size and complexity. We work efficiently to maximize Edmonton's short construction season and minimize disruption to your property."
      },
      {
        question: "Do you provide deck repair services?",
        answer: "Yes, we offer comprehensive deck repair including board replacement, structural reinforcement, railing repair, and stair replacement. We can extend your deck's life or recommend replacement when needed."
      }
    ],
    process: [
      {
        step: 1,
        title: "Design Consultation",
        description: "Custom deck design planning with site evaluation and needs assessment"
      },
      {
        step: 2,
        title: "Permit & Preparation",
        description: "Permit assistance and site preparation including foundation work"
      },
      {
        step: 3,
        title: "Construction",
        description: "Professional deck construction with quality materials and techniques"
      },
      {
        step: 4,
        title: "Finishing",
        description: "Railing installation, stairs, and final surface treatment"
      },
      {
        step: 5,
        title: "Inspection & Handover",
        description: "Quality inspection, cleanup, and client walkthrough"
      }
    ],
    areas: "Edmonton metro area including St. Albert, Sherwood Park, Beaumont, and surrounding communities",
    emergency: "Emergency deck repairs for structural failures, safety hazards, storm damage, or other urgent decking issues in Edmonton.",
    features: [
      "Custom deck design and construction",
      "Deck repair and restoration",
      "Composite and wood decking",
      "Railing and stair installation",
      "Deck staining and sealing",
      "Patio and deck integration",
      "Multi-level deck construction",
      "Deck lighting installation",
      "Foundation and support work",
      "Snow load engineering"
    ]
  },
  {
    id: "drywall",
    title: "Drywall",
    description: "Expert drywall installation and repair services for Edmonton homes with flawless finishes.",
    longDescription: "Achieve perfect walls with our professional drywall services. We specialize in installation, repair, and finishing of drywall systems that perform well in Edmonton's climate. Our team ensures seamless joints, smooth finishes, and proper insulation integration.",
    image: "/drywall.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Cracks from temperature changes",
      "Water damage and mold growth",
      "Poor joint finishing",
      "Nail pops and surface imperfections",
      "Insulation and vapor barrier issues",
      "Texture inconsistencies"
    ],
    benefits: [
      {
        title: "Seamless Finishing",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Professional joint finishing and smooth surface preparation"
      },
      {
        title: "Moisture Resistant",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Proper vapor barriers and moisture control for Edmonton's conditions"
      },
      {
        title: "Quick Installation",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Efficient drywall installation with minimal disruption to your home"
      },
      {
        title: "Quality Materials",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Premium drywall materials with proper insulation properties"
      }
    ],
    faqs: [
      {
        question: "How do you handle drywall in Edmonton's humidity?",
        answer: "We use proper vapor barriers, moisture-resistant drywall in high-humidity areas, and appropriate joint compounds. Our techniques prevent mold growth and handle Edmonton's seasonal humidity changes."
      },
      {
        question: "Do you provide drywall repair for water damage?",
        answer: "Yes, we specialize in water damage restoration including complete drywall replacement, mold prevention, and proper drying techniques. We address the source of moisture and prevent future issues."
      },
      {
        question: "What types of drywall finishes do you offer?",
        answer: "We provide smooth finishes, texture applications, knockdown textures, and custom finishes. We can match existing textures or create new ones to update your space."
      },
      {
        question: "How long does drywall installation take?",
        answer: "Typical room installations take 1-3 days depending on size and complexity. Whole home projects may take 1-2 weeks. We work efficiently and maintain clean work areas."
      },
      {
        question: "Do you handle insulation with drywall?",
        answer: "Yes, we install proper insulation systems with drywall, including batt insulation, spray foam, and vapor barriers. We ensure your walls meet Edmonton's energy efficiency standards."
      }
    ],
    process: [
      {
        step: 1,
        title: "Wall Preparation",
        description: "Existing wall assessment and preparation for new drywall"
      },
      {
        step: 2,
        title: "Installation",
        description: "Professional drywall hanging with proper techniques and support"
      },
      {
        step: 3,
        title: "Taping & Mudding",
        description: "Expert joint finishing with quality compounds and techniques"
      },
      {
        step: 4,
        title: "Sanding & Finishing",
        description: "Smooth surface preparation and final finish application"
      },
      {
        step: 5,
        title: "Prime & Paint Ready",
        description: "Final surface preparation and priming for painting"
      }
    ],
    areas: "Edmonton and surrounding areas including St. Albert, Spruce Grove, and Leduc",
    emergency: "Emergency drywall repairs for water damage, holes, cracks, or other urgent wall issues in Edmonton homes.",
    features: [
      "Drywall installation",
      "Patch and repair services",
      "Texture finishing",
      "Taping and mudding",
      "Basement finishing",
      "Water damage restoration",
      "Soundproofing installation",
      "Popcorn ceiling removal",
      "Insulation integration",
      "Painting preparation"
    ]
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "Professional flooring installation and repair services for Edmonton homes with quality materials.",
    longDescription: "Transform your Edmonton home with our comprehensive flooring services. We install all types of flooring including hardwood, laminate, tile, and carpet. Our team understands Edmonton's climate challenges and recommends flooring that performs well in our conditions while enhancing your home's beauty and value.",
    image: "/flooring.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Floor damage from winter salt and moisture",
      "Improper installation and gaps",
      "Wear patterns in high-traffic areas",
      "Subfloor moisture issues",
      "Temperature-related expansion/contraction",
      "Outdated flooring styles"
    ],
    benefits: [
      {
        title: "Climate Appropriate",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Flooring materials selected for Edmonton's temperature and humidity conditions"
      },
      {
        title: "Professional Installation",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Expert installation ensuring proper fit, finish, and longevity"
      },
      {
        title: "Variety of Options",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Wide range of flooring materials and styles to suit any budget"
      },
      {
        title: "Durable Results",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Long-lasting flooring built to withstand Edmonton's lifestyle and weather"
      }
    ],
    faqs: [
      {
        question: "What flooring works best in Edmonton's climate?",
        answer: "We recommend engineered hardwood, luxury vinyl plank, and porcelain tile for Edmonton. These materials handle temperature changes well, are moisture-resistant, and provide good insulation properties."
      },
      {
        question: "How do you handle flooring transitions between rooms?",
        answer: "We create seamless transitions using appropriate moldings, thresholds, and transition pieces. We ensure smooth, safe transitions between different flooring types and levels."
      },
      {
        question: "Do you provide subfloor preparation?",
        answer: "Yes, we handle complete subfloor preparation including leveling, moisture barriers, and underlayment installation. Proper subfloor preparation is crucial for Edmonton's climate conditions."
      },
      {
        question: "How long does flooring installation take?",
        answer: "Typical room installations take 1-3 days. Whole home projects may take 1-2 weeks depending on material choice and square footage. We work efficiently to minimize disruption."
      },
      {
        question: "Do you offer flooring repair services?",
        answer: "Yes, we repair all types of flooring including board replacement, scratch removal, water damage restoration, and re-finishing. We can often repair rather than replace, saving you money."
      }
    ],
    process: [
      {
        step: 1,
        title: "Floor Assessment",
        description: "Existing floor evaluation and subfloor condition check"
      },
      {
        step: 2,
        title: "Material Selection",
        description: "Professional guidance on flooring material selection and procurement"
      },
      {
        step: 3,
        title: "Subfloor Prep",
        description: "Subfloor leveling, moisture barriers, and preparation work"
      },
      {
        step: 4,
        title: "Installation",
        description: "Professional flooring installation with proper techniques and tools"
      },
      {
        step: 5,
        title: "Finishing & Cleanup",
        description: "Baseboard installation, final touches, and thorough cleanup"
      }
    ],
    areas: "Greater Edmonton area including St. Albert, Sherwood Park, Spruce Grove, and Beaumont",
    emergency: "Emergency flooring repairs for water damage, broken tiles, safety hazards, or other urgent floor issues in Edmonton homes.",
    features: [
      "Hardwood flooring installation",
      "Laminate and vinyl flooring",
      "Tile installation",
      "Carpet installation",
      "Floor repair and refinishing",
      "Baseboard installation",
      "Subfloor preparation",
      "Floor leveling services",
      "Heated flooring systems",
      "Transition and molding work"
    ]
  },
  {
    id: "electrical",
    title: "Electrical",
    description: "Licensed electrical services for Edmonton homes ensuring safety and code compliance.",
    longDescription: "Keep your Edmonton home safe and powered with our professional electrical services. Our licensed electricians handle everything from minor repairs to complete electrical installations. We're thoroughly familiar with Alberta Electrical Code and Edmonton's specific requirements, ensuring safe, compliant work.",
    image: "/electrical.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Outdated electrical systems",
      "Circuit breaker issues",
      "Insufficient power for modern appliances",
      "Faulty wiring and safety hazards",
      "Lighting and outlet problems",
      "Code compliance issues"
    ],
    benefits: [
      {
        title: "Licensed Electricians",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Fully licensed electricians compliant with Alberta Electrical Code and safety standards"
      },
      {
        title: "Safety Focused",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Priority on safety with proper testing, grounding, and hazard prevention"
      },
      {
        title: "Code Compliant",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "All work meets or exceeds Edmonton building code requirements"
      },
      {
        title: "Modern Solutions",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Up-to-date electrical solutions for modern home requirements and efficiency"
      }
    ],
    faqs: [
      {
        question: "Are your electricians licensed in Alberta?",
        answer: "Yes, all our electricians are fully licensed, insured, and certified to work in Alberta. We maintain current licensing and stay updated on code changes and safety requirements."
      },
      {
        question: "Do you handle electrical panel upgrades?",
        answer: "Absolutely! We specialize in electrical panel upgrades to handle modern appliance loads and improve safety. We assess your current system and recommend appropriate upgrades."
      },
      {
        question: "What electrical services do you offer for Edmonton homes?",
        answer: "We provide complete electrical services including wiring, panel upgrades, lighting installation, outlet and switch installation, home automation, and emergency repairs."
      },
      {
        question: "Do you provide emergency electrical services?",
        answer: "Yes, we offer 24/7 emergency electrical services for power outages, electrical fires, burning smells, and other urgent safety issues. Call (780) 802-6830 for immediate assistance."
      },
      {
        question: "How do you ensure electrical safety in Edmonton homes?",
        answer: "We follow strict safety protocols including proper grounding, GFCI protection, surge protection, and thorough testing. All work is inspected and meets Alberta Electrical Code standards."
      }
    ],
    process: [
      {
        step: 1,
        title: "Electrical Assessment",
        description: "Comprehensive electrical system evaluation and safety inspection"
      },
      {
        step: 2,
        title: "Planning & Permits",
        description: "Detailed work plan and permit acquisition if required"
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Licensed electrical work following safety protocols and code requirements"
      },
      {
        step: 4,
        title: "Testing & Inspection",
        description: "Thorough testing and safety inspection of all electrical work"
      },
      {
        step: 5,
        title: "Documentation",
        description: "Final documentation, warranty information, and client education"
      }
    ],
    areas: "Edmonton and surrounding communities including St. Albert, Sherwood Park, Spruce Grove, and Leduc",
    emergency: "24/7 emergency electrical services for power outages, electrical fires, shock hazards, or other urgent electrical safety issues in Edmonton.",
    features: [
      "Electrical repairs and troubleshooting",
      "Lighting installation",
      "Outlet and switch installation",
      "Panel upgrades and installation",
      "Ceiling fan installation",
      "Home automation systems",
      "Electrical inspections",
      "Generator installation",
      "Surge protection",
      "Code compliance updates"
    ]
  },
  {
    id: "elderly-speciality",
    title: "Elderly Speciality",
    description: "Specialized home modification services for Edmonton seniors to improve accessibility and safety.",
    longDescription: "Make Edmonton homes safer and more accessible for elderly residents with our specialized services. We understand the unique needs of seniors and provide modifications that enhance independence while maintaining comfort and dignity. Our solutions are designed for Alberta's climate and senior lifestyle requirements.",
    image: "/plumbing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Limited mobility and accessibility",
      "Bathroom safety hazards",
      "Difficulty with daily living tasks",
      "Fall risks and home safety",
      "Inadequate support systems",
      "Weather-related access challenges"
    ],
    benefits: [
      {
        title: "Accessibility Focus",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Modifications designed specifically for senior mobility and accessibility needs"
      },
      {
        title: "Safety Enhanced",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Safety improvements reducing fall risks and home hazards"
      },
      {
        title: "Independence Promoting",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Modifications that help seniors maintain independence and quality of life"
      },
      {
        title: "Climate Considerate",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Solutions that work with Edmonton's climate and senior lifestyle needs"
      }
    ],
    faqs: [
      {
        question: "What accessibility modifications do you offer for Edmonton seniors?",
        answer: "We provide wheelchair ramps, grab bars, accessible bathrooms, stair lifts, doorway widening, lever handles, non-slip flooring, and other modifications to improve home accessibility."
      },
      {
        question: "How do you ensure modifications work with Edmonton winters?",
        answer: "We consider winter accessibility in all modifications, including covered ramp approaches, heated pathways, and easy-to-use fixtures that work with gloves and winter clothing."
      },
      {
        question: "Do you work with occupational therapists?",
        answer: "Yes, we collaborate with occupational therapists and healthcare professionals to ensure modifications meet specific medical needs and provide the most beneficial solutions for each senior."
      },
      {
        question: "Are modifications reversible if needed?",
        answer: "Many of our modifications are designed to be minimally invasive and can be adjusted or removed if needs change. We discuss permanence and flexibility during planning."
      },
      {
        question: "Do you provide funding assistance information?",
        answer: "Yes, we're familiar with senior modification grants and funding programs in Alberta. We can provide information and documentation to help access available financial assistance."
      }
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Comprehensive evaluation of senior accessibility and safety requirements"
      },
      {
        step: 2,
        title: "Solution Planning",
        description: "Custom modification planning with healthcare professional input if needed"
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Expert installation with attention to senior comfort and safety"
      },
      {
        step: 4,
        title: "Training & Support",
        description: "Senior and family training on new modifications and safety features"
      },
      {
        step: 5,
        title: "Follow-up Support",
        description: "Ongoing support and adjustments as needs evolve over time"
      }
    ],
    areas: "Edmonton and surrounding areas with focus on senior communities and accessibility needs",
    emergency: "Urgent accessibility modifications for emergency situations, sudden mobility changes, or critical safety hazards in Edmonton senior homes.",
    features: [
      "Wheelchair ramp installation",
      "Grab bar installation",
      "Bathroom accessibility modifications",
      "Stair lift installation",
      "Doorway widening",
      "Non-slip flooring installation",
      "Lowered countertop installation",
      "Lever handle installation",
      "Home safety assessments",
      "Accessibility consulting"
    ]
  },
  {
    id: "emergency-services",
    title: "Emergency Services",
    description: "24/7 emergency handyman services for Edmonton residents when you need immediate help.",
    longDescription: "When you need immediate handyman assistance in Edmonton, we're here 24/7. Our emergency services cover urgent repairs, safety hazards, and time-sensitive issues that can't wait. We respond quickly to prevent further damage and restore your home's safety and functionality.",
    image: "/plumbing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Burst pipes and water damage",
      "Electrical emergencies and power loss",
      "Structural damage and safety hazards",
      "Heating system failures in winter",
      "Storm damage and immediate repairs",
      "Security breaches and lockouts"
    ],
    benefits: [
      {
        title: "24/7 Availability",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Round-the-clock emergency service for all urgent handyman needs"
      },
      {
        title: "Rapid Response",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Quick dispatch and arrival to prevent further damage and ensure safety"
      },
      {
        title: "Emergency Expertise",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Specialized training and equipment for emergency situations and urgent repairs"
      },
      {
        title: "Damage Prevention",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Immediate action to prevent further damage and protect your property"
      }
    ],
    faqs: [
      {
        question: "What constitutes a handyman emergency?",
        answer: "Emergencies include water leaks, electrical hazards, structural damage, heating failures, gas leaks, security issues, and any situation that poses immediate risk to your safety or property."
      },
      {
        question: "How quickly do you respond to emergency calls in Edmonton?",
        answer: "We aim to respond within 60-90 minutes for emergency calls in Edmonton. Response times may vary based on traffic and weather conditions, but we prioritize all emergencies."
      },
      {
        question: "Do you charge extra for emergency services?",
        answer: "Yes, emergency services have higher rates due to after-hours response and immediate service requirements. We provide transparent pricing before beginning any emergency work."
      },
      {
        question: "What should I do while waiting for emergency service?",
        answer: "Ensure safety first - turn off water main for leaks, evacuate for electrical issues, turn off gas for suspected leaks, and document damage with photos. We'll guide you through immediate safety steps."
      },
      {
        question: "Are you available on holidays and weekends?",
        answer: "Yes, we're available 24/7 including holidays and weekends. Emergencies don't wait, and neither do we - we're always here to help Edmonton residents."
      }
    ],
    process: [
      {
        step: 1,
        title: "Emergency Dispatch",
        description: "Immediate response team dispatch with appropriate equipment and materials"
      },
      {
        step: 2,
        title: "Safety Assessment",
        description: "Rapid safety evaluation and immediate hazard mitigation"
      },
      {
        step: 3,
        title: "Emergency Repairs",
        description: "Urgent repairs to stabilize situation and prevent further damage"
      },
      {
        step: 4,
        title: "Damage Documentation",
        description: "Documentation for insurance and permanent repair planning"
      },
      {
        step: 5,
        title: "Follow-up Solutions",
        description: "Permanent repair planning and scheduling if needed"
      }
    ],
    areas: "Edmonton and immediate surrounding areas with priority response for emergency situations",
    emergency: "Available 24/7 for all emergency handyman needs in Edmonton. Call (780) 802-6830 for immediate assistance with any urgent home repair or safety issue.",
    features: [
      "Emergency plumbing repairs",
      "Urgent electrical fixes",
      "Storm damage repairs",
      "Lockout assistance",
      "Emergency board-up services",
      "Water damage mitigation",
      "Heating system emergencies",
      "Structural emergency repairs",
      "Gas leak response",
      "Safety hazard mitigation"
    ]
  },
  {
    id: "realtor-services",
    title: "Realtor Services",
    description: "Specialized handyman services for Edmonton real estate agents and homeowners preparing properties for sale.",
    longDescription: "Maximize your property's appeal and value with our realtor-focused handyman services. We understand Edmonton's real estate market and provide the quick, professional services needed to prepare homes for sale. From pre-sale inspections to final touch-ups, we help properties show their best.",
    image: "/plumbing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Property condition concerns",
      "Timeline constraints for sales",
      "Buyer inspection issues",
      "Cosmetic imperfections affecting value",
      "Last-minute repair needs",
      "Staging and presentation challenges"
    ],
    benefits: [
      {
        title: "Quick Turnaround",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Efficient service designed to meet real estate timelines and closing dates"
      },
      {
        title: "Market Knowledge",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Understanding of Edmonton real estate requirements and buyer expectations"
      },
      {
        title: "Value Enhancement",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Strategic improvements that increase property value and marketability"
      },
      {
        title: "Professional Coordination",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Seamless coordination with real estate agents and other service providers"
      }
    ],
    faqs: [
      {
        question: "How far in advance should I schedule realtor services?",
        answer: "We recommend scheduling 2-3 weeks before listing for major work, but we can often accommodate rush jobs within 48-72 hours for urgent pre-sale preparations."
      },
      {
        question: "Do you work with buyer's inspection requirements?",
        answer: "Yes, we're experienced with Edmonton's buyer inspection requirements and can address common issues before they become deal-breakers. We provide documentation for all repairs."
      },
      {
        question: "What realtor services do you offer in Edmonton?",
        answer: "We provide pre-sale inspections, priority repairs, cosmetic updates, deep cleaning coordination, staging preparation, and final walkthrough touch-ups before possession."
      },
      {
        question: "How do you prioritize realtor service requests?",
        answer: "Realtor clients receive priority scheduling and rapid response times. We understand time-sensitive nature of real estate transactions and work around your schedule and deadlines."
      },
      {
        question: "Can you work within specific budgets for property preparation?",
        answer: "Yes, we can work within various budget levels and prioritize repairs based on impact on sale value. We provide options and ROI considerations for all improvements."
      }
    ],
    process: [
      {
        step: 1,
        title: "Property Assessment",
        description: "Comprehensive evaluation of property condition and sale preparation needs"
      },
      {
        step: 2,
        title: "Priority Planning",
        description: "Strategic planning focused on high-impact improvements within timeline"
      },
      {
        step: 3,
        title: "Efficient Execution",
        description: "Quick, professional repairs and improvements with minimal disruption"
      },
      {
        step: 4,
        title: "Quality Inspection",
        description: "Thorough inspection to ensure all work meets real estate standards"
      },
      {
        step: 5,
        title: "Documentation",
        description: "Complete documentation for real estate transactions and buyer assurance"
      }
    ],
    areas: "Edmonton and surrounding areas with flexible scheduling for real estate timelines",
    emergency: "Priority service for urgent pre-sale repairs, time-sensitive real estate needs, or critical property preparation issues in Edmonton.",
    features: [
      "Pre-sale home inspections",
      "Quick repairs and touch-ups",
      "Cosmetic improvements",
      "Staging preparation",
      "Landscaping enhancements",
      "Deep cleaning coordination",
      "Minor renovations",
      "Final walkthrough preparations",
      "Repair documentation",
      "Timeline coordination"
    ]
  },
  {
    id: "general-repairs",
    title: "General Repairs",
    description: "Comprehensive handyman services for Edmonton homeowners covering all types of household repairs.",
    longDescription: "Handle all your home repair needs with our comprehensive general handyman services. From small fixes to complete maintenance solutions, we're your one-call solution for Edmonton homeowners. Our experienced team handles diverse repair needs efficiently and professionally.",
    image: "/plumbing.jpg",
    heroImage: "https://fixityhtml.websitelayout.net/img/services/service-details-01.jpg",
    commonIssues: [
      "Minor plumbing and electrical issues",
      "Door and window repairs",
      "Cabinet and fixture problems",
      "General wear and tear",
      "Seasonal maintenance needs",
      "Small assembly and installation tasks"
    ],
    benefits: [
      {
        title: "One-Call Solution",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-01.png",
        description: "Single point of contact for diverse home repair and maintenance needs"
      },
      {
        title: "Versatile Expertise",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-02.png",
        description: "Wide-ranging skills covering multiple home repair disciplines"
      },
      {
        title: "Efficient Service",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-03.png",
        description: "Quick diagnosis and repair of various household issues"
      },
      {
        title: "Cost Effective",
        icon: "https://fixityhtml.websitelayout.net/img/icons/service-benifits-04.png",
        description: "Affordable solutions for multiple repair needs in single service calls"
      }
    ],
    faqs: [
      {
        question: "What types of general repairs do you handle in Edmonton?",
        answer: "We handle minor plumbing, electrical repairs, door/window fixes, cabinet repairs, fixture installation, assembly services, seasonal maintenance, and various other household repair needs."
      },
      {
        question: "Do you charge by the hour or by project?",
        answer: "We offer both hourly rates and project pricing. For larger jobs, we provide fixed quotes. For smaller repairs, hourly rates may be more economical."
      },
      {
        question: "How quickly can you respond to general repair requests?",
        answer: "We typically respond within 24-48 hours for non-emergency repairs in Edmonton. Emergency situations receive immediate priority response."
      },
      {
        question: "Do you provide maintenance plans?",
        answer: "Yes, we offer ongoing maintenance plans for regular home upkeep, seasonal preparations, and preventive maintenance to avoid costly repairs."
      },
      {
        question: "Are you equipped for diverse repair needs?",
        answer: "Absolutely! Our team carries diverse tools and equipment for various repair types. We can often handle multiple issues in a single visit, saving you time and money."
      }
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Comprehensive evaluation of all repair and maintenance requirements"
      },
      {
        step: 2,
        title: "Solution Planning",
        description: "Efficient planning to address multiple issues in optimal order"
      },
      {
        step: 3,
        title: "Multi-Task Execution",
        description: "Handling various repair needs efficiently in single visits when possible"
      },
      {
        step: 4,
        title: "Quality Verification",
        description: "Testing and verification of all completed repairs and installations"
      },
      {
        step: 5,
        title: "Preventive Recommendations",
        description: "Recommendations for ongoing maintenance and future prevention"
      }
    ],
    areas: "All Edmonton neighborhoods with flexible scheduling for various repair needs",
    emergency: "Emergency repair services for urgent household issues, safety hazards, or situations requiring immediate handyman attention in Edmonton homes.",
    features: [
      "Minor home repairs",
      "Maintenance services",
      "Assembly services",
      "Odd jobs and tasks",
      "Seasonal preparations",
      "Home safety inspections",
      "Gutter cleaning and repair",
      "Window and door repairs",
      "Fixture installations",
      "Preventive maintenance"
    ]
  }
];

export const getServiceContent = (serviceId: string): ServiceContent | undefined => {
  return serviceContentData.find(service => service.id === serviceId);
};
