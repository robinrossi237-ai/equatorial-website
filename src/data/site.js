// =====================================================================
//  CONTENU DU SITE : modifiez les textes ici, ils se mettent à jour partout.
//  Les images se trouvent dans /public/images.
// =====================================================================

const I = (name) => `/images/${name}`;

export const img = {
  logo: I("2022-05-EQOS-Flow-assurance-solution.webp"),
  heroRig: I("2023-02-offshore-oil-rig-platform-in-the-gulf-from-aerial-view.webp"),
  heroPlatform: I("2023-02-offshore-production-platform-in-the-sea-for-oil-and-gas-production.webp"),
  heroSunset: I("2023-02-offshore-the-sunset-industry-oil-and-gas-production-petroleum-pipeline-background.webp"),
  heroYellow: I("2023-02-offshore-drill-yellow-oil-and-gas-wave-sea-production-petroleum-pipeline-1.webp"),
  factory: I("2023-02-aerial-view-cement-factory-with-high-concrete-plant-structure-tower-crane-industrial-production-area-manufacture-global-industry-concept.webp"),
  steel: I("2022-08-ant-rozetsky-_qWeqqmpBpU-unsplash.webp"),
  map: I("2022-09-map.webp"),
  tools: I("2022-05-tete-wireline.webp"),
  worker: I("2022-05-shutterstock_1413841523-scaled-e1677744968647.webp"),
  teamBg: I("2022-08-10_team_single.webp"),
  jackup: I("2022-05-Jack-up-installation-2.webp"),
  jackup2: I("2022-05-Jack-up-instal.webp"),
  piping: I("2022-05-Conception-de-tuyauterie.webp"),
  flow: I("2022-05-process_and_flow_assurance_BIG.webp"),
  generator: I("2022-05-Groupe-electrogene.webp"),
  clientsBg: I("2022-12-clients-page-title-bg.webp"),
  pipes: I("2022-07-cover-bg.webp"),
  workshop: I("2022-06-process-building-space-rocket-engine-1.webp"),
  engineer: I("2022-06-young-male-handyman-with-safety-earphones.webp"),
  welding: I("2022-08-christopher-burns-8KfCR12oeUM-unsplash.webp"),
  plant: I("2022-04-anton-shakirov-k6pXI12U9ek-unsplash.webp"),
  pipelineSite: I("2023-02-Burcoplus-SCDP.webp"),
};

export const company = {
  name: "Equatorial Oilfield Services",
  short: "Equatorial OS",
  tagline: "Customized Engineering for the Future",
  motto: "Quality · Integrity · People",
  founded: 2011,
  address: ["Bali, Douala", "Cameroon"],
  phones: ["+237 696 609 970", "+237 33 42 44 02"],
  email: "info@equatorial-os.com",
  linkedin: "https://www.linkedin.com/company/equatorial-oilfield-services/",
  video: "Ybgl_8n8wdU",
  mapQuery: "Bali, Douala, Cameroon",
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services & Products",
    href: "/our-services/",
    children: [
      { label: "Our Services", href: "/our-services/", desc: "Engineering services" },
      { label: "Trading & Supply", href: "/trading/", desc: "Crude oil, refined products, logistics" },
      { label: "Our Products", href: "/products/", desc: "Flow assurance & downhole tools" },
    ],
  },
  {
    label: "About Us",
    href: "/about/",
    children: [
      { label: "Who we are", href: "/about/", desc: "Our story since 2011" },
      { label: "Our Team", href: "/our-team/", desc: "The people behind EQOS" },
      { label: "Clients & Partners", href: "/clients/", desc: "Who trusts us" },
    ],
  },
  { label: "Projects", href: "/projects/" },
];

export const stats = [
  { value: 120, suffix: "+", label: "Wells drilled & completed" },
  { value: 100, suffix: "+", label: "Completed projects" },
  { value: 200, suffix: "+", label: "Happy clients" },
  { value: 30, suffix: "+", label: "Years of experience" },
];

export const heroSlides = [
  {
    image: img.heroRig,
    kicker: "Since 2011 · Douala, Cameroon",
    title: "Customized Engineering for the Future",
    text: "Equatorial Oilfield Services provides top-notch services in engineering, procurement, construction and management of oil and gas assets.",
    cta: { label: "Explore our services", href: "/our-services/" },
  },
  {
    image: img.heroSunset,
    kicker: "Our motto: Quality · Integrity · People",
    title: "Growing our footprint in West & Central Africa",
    text: "Our vision is to increase our footprint in West and Central Africa with lean designs that address today's energy challenges.",
    cta: { label: "Discover who we are", href: "/about/" },
  },
  {
    image: img.heroYellow,
    kicker: "Petroleum products trading & supply",
    title: "From the wellhead to the market",
    text: "Crude oil, refined products, diesel, Jet A-1, LPG, storage, transport and trade finance — one trusted partner for your energy needs.",
    cta: { label: "See trading & supply", href: "/trading/" },
  },
];

// ---------------------------------------------------------------------
//  SERVICES D'INGÉNIERIE
// ---------------------------------------------------------------------
export const engineeringServices = [
  {
    slug: "drilling-engineering",
    icon: "drilling",
    title: "Drilling Engineering",
    excerpt: "Since 2011, we have managed the drilling and completion of 120+ wells across multiple unconventional resource plays.",
    image: img.jackup,
    intro: "Well-known for our reliable services in the Gulf of Guinea, we have become an industry leader in directional drilling through our extensive drilling operations.",
    list: ["Rig installation", "MWD", "LWD", "Well construction design", "Wireline", "Slickline", "Mud Engineering"],
    body: [
      "Since 2011, we have managed the drilling and completion of 120+ wells across multiple unconventional resource plays. The highly predictable nature of our drilling inventory provides us with a great deal of precision, as we can quickly and effectively adjust our activity in response to changes in commodity prices.",
      "We have acquired expertise through experience and partnership to deliver Drilling Procurement Solutions.",
    ],
    blocks: [
      { title: "Rig Supply", text: "Are you in need of a rig supplier? You can rely on us to help overcome the varying challenges associated with the supply of land rigs, swamp rigs, shallow and Jack-Up rigs. Our expert team works together with operators and suppliers to keep costs down and mitigate risk through all aspects of the supply chain." },
      { title: "Downhole tool supply & rentals", text: "High torque & drag resulting from spiral well patterns is a severe problem in drilling and completion operations. EQOS deploys cutting-edge reamers, shoes and centralizers for a smooth RIH. Our downhole tools permit better hole quality, less torque, less tripping, quicker time to bottom, longer runs, more power to the BHA, and reduce or eliminate difficulties to run casings in hole." },
    ],
  },
  {
    slug: "facilities-engineering",
    icon: "facilities",
    title: "Facilities Engineering",
    excerpt: "A comprehensive line of project services, from basic planning to design, procurement, construction and commissioning under a system of total responsibility.",
    image: img.piping,
    intro: "We deploy a comprehensive line of project services, from basic planning to design, materials and equipment procurement, construction, and commissioning under a system of total responsibility.",
    list: ["Diesel generator rentals and sales", "Sales of PPEs", "Lifting equipment", "Industrial supply"],
    body: [
      "Over the years, the group has become a reference in the design, procurement, and construction of pipelines and tank farms. Our facilities are designed according to the highest quality standards to ensure they operate efficiently while safeguarding the life of their operators and the environment.",
    ],
    blocks: [
      { title: "Facilities Procurement", text: "From diesel generators to lifting equipment and personal protective equipment, we source and deliver certified industrial supplies to keep your facilities running safely and on schedule." },
      { title: "Pipelines & tank farms", text: "Front-end and detailed engineering design, procurement and construction of pipelines and storage facilities — including the LPG pipeline engineering delivered for SCDP." },
    ],
  },
  {
    slug: "flow-assurance",
    icon: "flow",
    title: "Flow Assurance",
    excerpt: "The most efficient flow assurance solutions to identify, quantify and mitigate flow risks in your production systems.",
    image: img.flow,
    intro: "One of the most challenging tasks in the oil and gas industry is to assure fluid flow.",
    list: ["Wax removal", "Scale treatment", "Skin damage removal", "Pipeline & tubing cleaning", "Crude oil tank desludging"],
    body: [
      "Equatorial Oilfield Services deploys the most efficient flow assurance solutions to identify, quantify and mitigate flow risks such as solid deposition (wax, scale, skin effects, etc.) in tubing, risers, pipelines and other surface facilities. Our unique thermochemical systems boost production to 100%.",
    ],
    blocks: [
      { title: "Thermochemical systems", text: "B-EXO and B-CLENZ treatments dissolve organic and inorganic deposits without heating or mechanical agitation — restoring tubing and pipelines close to their design flow rate." },
      { title: "Man-less tank cleaning", text: "In-line jet mixing cleans crude oil storage tanks without taking them out of service, recovering usable hydrocarbons from sludge." },
    ],
  },
  {
    slug: "project-management",
    icon: "project",
    title: "Project Management",
    excerpt: "Our project managers have proven prowess in delivering Drilling and Facilities Engineering projects, with over 30 years of experience.",
  },
  {
    slug: "qhse",
    icon: "qhse",
    title: "QHSE",
    excerpt: "Excellent HSE records and competitive prices — safety of people and the environment comes first in everything we do.",
  },
  {
    slug: "manpower",
    icon: "manpower",
    title: "Manpower Support Services",
    excerpt: "We train and manage qualified personnel to generate results that meet local and international standards for our clients.",
  },
];

// ---------------------------------------------------------------------
//  TRADING & SUPPLY (produits pétroliers)
// ---------------------------------------------------------------------
// Les produits raffinés (gasoil, essence, Jet A-1, fioul, GPL) sont regroupés
// sous "Refined Products". Chaque activité a sa page : /trading/<slug>/
const T = (name) => `/images/trading-${name}.webp`;

export const refinedProducts = [
  { slug: "gasoil-diesel", icon: "diesel", title: "Gasoil / Diesel", image: T("diesel"),
    text: "Diesel supply for industrial sites, mining, transport fleets and generator operations, delivered on time and on spec.",
    uses: ["Industrial sites & mining", "Transport fleets", "Power generators", "Construction & agriculture"] },
  { slug: "gasoline", icon: "gasoline", title: "Gasoline", image: T("gasoline"),
    text: "Gasoline supply for distributors and service-station networks, backed by secure logistics.",
    uses: ["Fuel distributors", "Service-station networks", "Corporate fleets"] },
  { slug: "kerosene-jet-a1", icon: "jet", title: "Kerosene / Jet A-1", image: T("jet"),
    text: "Jet A-1 and kerosene supply that complies with aviation quality standards, for airlines, airports and distributors.",
    uses: ["Airlines & airports", "Aviation fuel distributors", "Domestic & industrial kerosene"] },
  { slug: "fuel-oil", icon: "fuel", title: "Fuel Oil", image: T("fuel-oil"),
    text: "Reliable supply of fuel oil for power plants, industries and marine operators, with flexible volumes and delivery schedules.",
    uses: ["Power plants", "Heavy industry", "Marine bunkering"] },
  { slug: "lpg", icon: "lpg", title: "LPG (Liquefied Petroleum Gas)", image: T("lpg"), image2: T("lpg-cylinders"),
    text: "Liquefied petroleum gas supply for domestic, commercial and industrial use, handled under strict safety standards.",
    uses: ["Bottling & distribution centres", "Hotels, restaurants & commercial users", "Industrial heating"] },
];

export const trading = [
  {
    slug: "crude-oil", icon: "crude", title: "Crude Oil & Petroleum Products", image: T("crude"),
    excerpt: "We source and supply crude oil and petroleum products through a trusted network of producers and traders across Africa and beyond.",
    intro: "Through long-standing relationships with producers, traders and logistics partners, we source crude oil and petroleum products that match your specifications, volumes and delivery windows.",
    points: ["Sourcing from a trusted network of producers and traders", "Quality and quantity inspection at loading and discharge", "Flexible volumes, spot or term contracts", "Full documentation and traceability"],
  },
  {
    slug: "refined-products", icon: "refined", title: "Refined Products", image: T("refined"),
    excerpt: "Gasoil / Diesel, Gasoline, Kerosene / Jet A-1, Fuel Oil and LPG — refined products that meet international quality standards.",
    intro: "We deliver refined products that meet international quality standards, with full documentation and traceability — from a single truckload to large cargoes.",
    points: ["Products certified to international specifications", "Supply by road, sea and storage depots", "Delivered on time and on spec", "Dedicated follow-up for each order"],
    products: refinedProducts,
  },
  {
    slug: "other-energy-products", icon: "energy", title: "Other Energy Products", image: img.heroSunset,
    excerpt: "A wide range of energy products tailored to your operational needs. Contact us for your specific requirements.",
    intro: "Beyond our core range, we help you source the energy products your operations depend on — lubricants, bitumen, additives and other specialised products on request.",
    points: ["Products sourced to your specifications", "Advice on the right product for your operations", "Competitive pricing through our network", "Delivery to your site"],
  },
  {
    slug: "storage-transport", icon: "storage", title: "Storage & Transport", image: T("storage"),
    excerpt: "Secure storage and transport solutions by road and sea, so your products arrive safely, on time and on spec.",
    intro: "Our logistics partners and depots keep your products moving safely — from storage tanks to tanker trucks and vessels — with strict HSE standards at every step.",
    points: ["Storage in secure depots and tank farms", "Road transport by certified tanker trucks", "Sea transport and coastal delivery", "Product quality preserved from loading to delivery"],
  },
  {
    slug: "import-export-distribution", icon: "import", title: "Import, Export & Distribution", image: T("import"),
    excerpt: "End-to-end handling of import, export and distribution operations, including customs and regulatory compliance.",
    intro: "We manage the whole chain of import, export and distribution operations, so your products cross borders and reach their destination without delays.",
    points: ["Customs clearance and regulatory compliance", "Shipping and port coordination", "Distribution to depots, stations and end users", "Local knowledge of Cameroon and the CEMAC region"],
  },
  {
    slug: "trade-finance", icon: "finance", title: "Trade Finance", image: T("finance"),
    excerpt: "We help structure the financing of commercial transactions, giving our partners the security and flexibility they need.",
    intro: "Energy transactions require secure and flexible financing. We work with financial partners to structure solutions adapted to each deal.",
    points: ["Structuring of commercial transactions", "Payment security for buyers and sellers", "Work with banks and financial partners", "Flexible terms adapted to each deal"],
  },
];

// ---------------------------------------------------------------------
//  PRODUITS
// ---------------------------------------------------------------------
export const productCategories = [
  {
    id: "flow-assurance",
    title: "Flow Assurance Products",
    text: "Equatorial Oilfield Services deploys the most efficient production enhancement solutions to identify, quantify and mitigate flow risks such as solid deposition (wax, scale, skin effects, etc.) in tubing, risers, pipelines and other surface facilities.",
  },
  {
    id: "downhole-tools",
    title: "Downhole Tool Supply & Rentals",
    text: "High torque & drag resulting from spiral well patterns is a severe problem in drilling and completion operations. EQOS deploys cutting-edge reamers, shoes and centralizers for a smooth RIH & POOH.",
  },
];

export const products = [
  {
    slug: "b-exo-dual-pack-wax", category: "flow-assurance", title: "B-EXO Dual Pack Wax",
    image: I("2023-03-B-EXO.webp"),
    excerpt: "A unique thermochemical system of two chemical pills injected simultaneously into the targeted location (well, pipeline, heat exchangers…).",
    description: ["B-EXO is a unique thermochemical system consisting of two chemical pills which are injected simultaneously into the targeted location (i.e. well, pipeline, heat exchangers, etc.). The reaction generates heat in situ that melts and disperses wax deposits where they form."],
    features: ["Two-pill thermochemical reaction", "In-situ heat generation", "Targets wells, pipelines and heat exchangers"],
    advantages: ["Removes paraffin & wax deposits", "Restores flow without mechanical intervention", "Increase production"],
  },
  {
    slug: "b-clenz-solution", category: "flow-assurance", title: "B-CLENZ Solution",
    image: I("2023-03-b-clenz.webp"), gallery: [I("2023-03-b-clenz-illustration-e1677849742643.webp")],
    excerpt: "A single-pack treatment that disperses and dissolves organic and inorganic deposits in tubing and pipelines — no heating, no agitation.",
    description: ["A specially formulated single-pack treatment to disperse and dissolve deposits in production tubing & pipeline. It reacts with both organic and inorganic deposits without any heating or mechanical agitation."],
    features: ["Deeper penetration into organic and non-organic deposition compared to conventional solvents", "Immediate reaction with wax and scale", "Needs no additional treatment on surface and is 100% compatible with crude", "Restores the tubing/pipeline close to design flow rate by removing all scale and deposits"],
    advantages: ["Increase production", "Reactivate non-producing wells", "Improve matrix stimulation", "Improve production rate", "Removes formation damage (skin) — hydrates, scale, wax, asphaltene and naphthenates", "Up to 5 ft penetration depth, deeper than conventional stimulation acids", "Save time, save money, increase revenue"],
  },
  {
    slug: "b-clenz-barium-sulphate-solution", category: "flow-assurance", title: "B-CLENZ Barium Sulphate Solution",
    image: I("2023-03-b-clenz-sulphate.webp"), gallery: [I("2023-03-b-clenz-suphate-illustration-rotated.webp")],
    excerpt: "By selecting the right chelating agent, Barium Sulphate scale can be effectively cleaned.",
    description: ["Barium Sulphate (BaSO₄) is the scale that precipitates in production tubing due to a disturbance in system pressures, temperatures, and the mixing of incompatible waters.", "B-CLENZ Barium Sulphate is a specially formulated solution: by selecting the right chelating agent, Barium Sulphate scale can be effectively cleaned."],
    features: ["Deeper penetration into organic and non-organic deposition compared to conventional solvents", "Immediate reaction with wax and scale", "100% compatible with crude, no surface treatment needed", "Restores tubing/pipeline close to design flow rate"],
    advantages: ["Increase production", "Dissolve barite", "Reactivate non-producing wells", "Save time, save money, increase revenue"],
  },
  {
    slug: "automated-man-less-entry-cleaning-of-crude-oil-tank", category: "flow-assurance", title: "Automated Man-Less Tank Cleaning",
    image: I("2023-03-tank-cleaning-e1678037824577.webp"), gallery: [I("2023-03-jet-mixer.webp")],
    excerpt: "In-line jet mixing cleans crude oil storage tanks without removing them from service.",
    description: ["In-line Jet Mixing facilitates man-less cleaning of the storage tank with the introduction of high-velocity fluid jets into the crude oil tank for the purpose of shearing the paraffin and resuspending the accumulated sludge.", "Permanent installation of an in-line Jet Mixer in the tank's manway allows for desludging and cleaning of the crude oil storage tank without removing the tank from service. The Jet Mixer produces a high-velocity stream of a specialized chemical blend that shears, dissolves, and resuspends accumulated tank bottoms or sludge."],
    features: ["In-line jet mixing nozzle permanently installed", "Nozzles jet a high-velocity stream", "Periodic activation of the in-line jet mixer", "The tank remains in service during jetting", "Chemical blend compatible with the crude — no separation required"],
    advantages: ["Recover usable hydrocarbons from previously unusable sludge", "Increase your usable storage capacity", "Reduce the time needed for future tank cleaning"],
  },
  {
    slug: "geo-glider-xtreme-low-friction-centralizer", category: "downhole-tools", title: "GeoGLIDER™ XTREME Low Friction Centralizer",
    image: I("2023-03-800_608cf8eed5620-2-e1678036378581.webp"), gallery: [I("2023-03-centralizer.webp")],
    excerpt: "A low-friction centralizer available in aluminum or zinc alloy, steel, or composite.",
    description: ["The GeoGLIDER™ XTREME centralizer is a low-friction centralizer irrespective of the material it is made of. It can be manufactured out of aluminum or zinc alloy, steel, or composite. Metal variants are made by casting and can be coated with PTFE to further reduce initial frictional losses during deployment."],
    features: ["Offset touch contact points", "Smaller hydraulic diameter", "Total contact area < 5 in²", "No sharp edges on blades or leading edge"],
    advantages: ["Easier to work through tight spots or borehole restrictions", "Lower ECDs when displacing fluids", "Much lower frictional losses", "Available in sizes up to 20\" casing on request"],
  },
  {
    slug: "geopro-hydra-ngx-high-speed-reamer-shoe-system", category: "downhole-tools", title: "GeoproHYDRA nGX High-Speed Reamer Shoe",
    image: I("2023-03-GeoproHYDRA-nGX.webp"),
    excerpt: "A high-speed reamer shoe that makes casing, liner and completion string deployment a lot easier.",
    description: ["The GeoproHYDRA is a high-speed reamer shoe solution for tubular deployment. It makes the deployment of the casing, liner and completion strings a lot easier and reduces the risk of losing the string or the well.", "With a near-perfect 100% deployment record, the GeoproHYDRA is a proven and tested solution, successfully deployed on land, swamp, shallow offshore, and deepwater operations."],
    features: ["High-speed reaming capability", "Low flow activation", "Low–medium torque capabilities", "Multi-chamber drive system", "Direct jet drive", "Active cutting structure on the nose and stabilized blades", "The whole tool rotates"],
    advantages: ["Configurable for a wide range of surface and downhole parameters", "Loss circulation material tolerant", "Zero stall pressure", "Perfect for delicate, pressure-sensitive completion strings", "High axial load and flow-rate tolerance", "Zero to no additional drag when functioning"],
  },
  {
    slug: "reactv-sub-drilling-assurance-solution", category: "downhole-tools", title: "REACTv Sub Drilling Assurance Solution",
    image: I("2023-03-reactvsub-e1678032383950.webp"), gallery: [I("2023-03-ACTv-Sleeve.webp")],
    excerpt: "An in-situ hydraulically actuated stabilized reamer for overpulls, tight spots, swelling shales and unstable formations.",
    description: ["If you have ever been faced with trying to pull your drill string out of a hole due to overpulls, tight spots, swelling shales, unstable formations, gumbo, or wellbore instability, the REACTv Sub is the solution.", "The REACTv Sub is an in-situ hydraulically actuated stabilized reamer with force-balanced cutters and torque reduction features, powered by a 1.5 – 2.2 stage inverted motor power section with seal assemblies that ensure no fluid discharge into the annulus."],
    features: ["Smooth leading edge for smoother transfer of energy", "Energy-balanced cutter placement", "Depth of cut control", "Hydraulically powered inverted motor power section", "Nozzled rotor for better transmission of telemetry data"],
    advantages: ["Improved hole cleaning & better hole quality", "Reduction in back reaming, wiper trips and check trips", "Better weight transfer to bit and BHA", "Reduction in drilling torque", "Reduction/elimination of stuck pipe incidents and destructive vibrations"],
  },
  {
    slug: "hydratm-multipurpose-shoe", category: "downhole-tools", title: "HYDRA™ Multipurpose Shoe",
    image: I("2023-03-multipurpose-shoe.webp"), gallery: [I("2023-03-multipurpose-shoe2.webp")],
    excerpt: "With rotary speeds above 1500 RPM, the ideal candidate for casing and liner cementing operations.",
    description: ["The HYDRA family of tools provides a variety of functions in the life of a well. This high-speed system can be configured and run as a high-speed reaming solution for casing or tubular deployment, used as a casing scraper with an integrated wire brush, or as a jetting tool for wellbore clean-up operations.", "With rotary speeds in excess of 1500 RPM, the fluid pattern created at the shoe ensures better mud conditioning and minimizes cement/mud contamination during cementing."],
    features: ["High rotational speeds achieved with fluid circulation down the string", "Low and uniform pressure drop — ideal for completion strings", "Fluid activated, multiple interchangeable jets", "High-speed bearings capable of > 3000 RPM for > 500 hours", "Customisable nose profiles"],
    advantages: ["Better hole cleaning and mud conditioning prior to cementing", "Improved cementing in high-angle and horizontal wells", "Alternative jetting tool for clean-up and stimulation", "Full rotating tool up to 9 5/8\"; nose-only option for 13 3/8\" and 20\""],
  },
];

export const supplyBlocks = [
  { title: "Rig Supply", text: "Land rigs, swamp rigs, shallow and Jack-Up rigs. Our expert team works with operators and suppliers to keep costs down and mitigate risk across the supply chain.", images: [img.jackup2, img.jackup] },
  { title: "Diesel Generator Rentals & Sales", text: "Reliable power for your sites — CAT generator rentals and sales, delivered, installed and maintained by our team.", images: [img.generator, I("2023-03-Offre-Groupe-Electrogene-Techno-Plus-2.webp")] },
];

// ---------------------------------------------------------------------
//  PROJETS
// ---------------------------------------------------------------------
export const projects = [
  {
    slug: "front-end-detailed-engineering-design", title: "LPG Pipeline — Front-End & Detailed Engineering", category: "Facilities Engineering",
    client: "BURCOPLUS for SCDP", year: "2022", location: "Cameroon", place: "douala", contact: "Eliane FACHEUX, CEO",
    image: I("2023-02-Burcoplus-SCDP.webp"),
    text: "Front-End & Detailed Engineering Design for the construction of the LPG pipeline of SCDP, for our client BURCOPLUS. Our qualified manpower supported the client's team through FEED and detailed design, to the highest standards.",
  },
  {
    slug: "cat3516-60-hz-generator-rentals", title: "CAT3516 60 Hz Generator Rentals", category: "Facilities Procurement",
    client: "Groupe Camship-CLGG", year: "2021", location: "Cameroon", place: "douala",
    image: I("2023-03-Offre-Groupe-Electrogene-Techno-Plus.webp"),
    gallery: ["2023-03-Offre-Groupe-Electrogene-Techno-Plus-1.webp", "2023-03-Offre-Groupe-Electrogene-Techno-Plus-2.webp", "2023-03-Offre-Groupe-Electrogene-Techno-Plus-3.webp", "2023-03-Offre-Groupe-Electrogene-Techno-Plus-4.webp", "2023-03-Offre-Groupe-Electrogene-Techno-Plus-5.webp"].map(I),
    text: "Rental of CAT3516 60 Hz power generators for Groupe Camship-CLGG, including delivery, installation and support.",
  },
  {
    slug: "surface-equipment-material-supply-manpower-supply", title: "Surface Equipment, Material Supply & Manpower", category: "Facilities Procurement",
    client: "PETROFOR", year: "2016 – 2019", location: "Cameroon", place: "douala", contact: "Marc GUENIN, Africa Logistics & Supply Chain Manager",
    image: I("2023-02-Petrofor-EQOS-e1678040626694.webp"),
    text: "Surface equipment & material supply and manpower support for PETROFOR over four years of operations.",
  },
  {
    slug: "manpower-support", title: "Manpower Support", category: "Manpower Support",
    client: "SCHLUMBERGER", year: "2016", location: "Cameroon", place: "douala", contact: "Yves TCHIEJI, Country Manager",
    image: img.engineer,
    text: "Manpower support for project management and directional drilling consultancy for SCHLUMBERGER.",
  },
  {
    slug: "drilling-engineering", title: "Drilling Engineering", category: "Drilling Engineering",
    client: "ADDAX PETROLEUM", year: "2013 & 2019", location: "Cameroon", place: "riodelrey", contact: "Christophe COUDYSER, Drilling Manager",
    image: img.heroPlatform,
    text: "Drilling engineering services for ADDAX PETROLEUM across two campaigns.",
  },
  {
    slug: "directional-drilling-consultancy", title: "Directional Drilling Consultancy", category: "Drilling Engineering",
    client: "PERENCO", year: "2017", location: "Cameroon", place: "riodelrey", contact: "Thierry Batot, Sr Drilling & Completion Superintendent",
    image: img.heroRig,
    text: "Directional drilling consultancy for PERENCO's operations in Cameroon.",
  },
  {
    slug: "consultancy-for-rig-management", title: "Consultancy for Rig Management", category: "Rig Supply",
    client: "Savannah Oil & Gas", year: "2017", location: "Cameroon", place: "douala", contact: "Jean Claude TCHAGOU TIEGUE, CEO",
    image: img.jackup2,
    text: "Rig management consultancy for Savannah Oil & Gas.",
  },
  {
    slug: "facility-installation-bomono-project-manpower-supply-completion-engineering-drilling-rig-supply", title: "Bomono Project — Facility Installation, Rig Supply & Manpower", category: "Rig Supply",
    client: "Euroil", year: "2013", location: "Cameroon", place: "bomono", contact: "Denis KHRAN, Drilling Manager",
    image: img.heroYellow,
    text: "Facility installation (Bomono project), manpower supply, completion engineering and drilling rig supply for Euroil.",
  },
];

// ---------------------------------------------------------------------
//  LIEUX DES PROJETS (carte interactive de la page Projets)
//  Chaque projet a un champ `place` qui renvoie à un lieu ci-dessous.
//  Positions à confirmer par la direction : modifiez lat / lng si besoin.
// ---------------------------------------------------------------------
export const places = {
  douala: { name: "Douala", area: "Littoral Region", lat: 4.05, lng: 9.7, hq: true },
  bomono: { name: "Bomono", area: "Littoral Region", lat: 4.17, lng: 9.53 },
  riodelrey: { name: "Rio del Rey", area: "Offshore basin", lat: 4.55, lng: 8.7, offshore: true },
};

// ---------------------------------------------------------------------
//  ÉQUIPE
// ---------------------------------------------------------------------
export const team = [
  {
    slug: "cyriaque-tchassem-nounamo", name: "Cyriaque Tchassem Nounamo", role: "Managing Director", photo: I("2022-05-Tchassem.webp"),
    short: "Mechanical Engineer with over 30 years of experience in the oil & gas industry. Former Schlumberger, founder of Equatorial Oilfield Services in 2011.",
    bio: [
      "Cyriaque is a renowned Mechanical Engineer in the Gulf of Guinea, with over 30 years of experience in Drilling Engineering and the Construction of Metallic Structures in the oil & gas industry.",
      "He began his international career with Schlumberger in the UK as a Field Engineer, then moved to North Africa where he was involved in many drilling projects. He went on to work across all the oil-producing countries in Africa as Field Services Manager, Project Manager, Country Manager and Central Africa Commercial Manager.",
      "In 2011 he founded Equatorial Oilfield Services, now a leading service provider in the engineering, procurement and construction of complex oil & gas facilities. With the aim of making Cameroon a leading oil & gas producer, he trains and provides manpower support services, and has defended the voice of the people in several national panels geared towards improving the local content of Cameroon's oil & gas industry.",
    ],
    skills: ["Drilling Engineering", "Metallic structures", "Project leadership", "Local content development"],
  },
  {
    slug: "douanla-tiwa-jean-luther", name: "Douanla Tiwa Jean Luther", role: "Financial Advisor", photo: I("2022-05-Luther-Tiwa.webp"),
    short: "Trained banker with a Master's in Banking and Finance. Joined EQOS in 2021 as CFO to expand the group's activities in West and Central Africa.",
    bio: [
      "Luther is a trained banker. He obtained a degree in Monetary and Banking Economics from the University of Douala and a Master's degree in Banking and Finance from the University of Dschang.",
      "After several years of experience as an accountant at Nguepi Sarl and as Operations Officer at AFRILAND FIRST BANK and ECOBANK, he joined Equatorial Oilfield Services in 2021 as CFO, with the main goal of expanding the group's activities in West and Central Africa.",
      "Alongside this, Luther runs JULIENNE Hotels and is the co-founder of SPRING Solution SARL.",
    ],
    skills: ["Corporate finance", "Banking", "Trade finance", "Business development"],
  },
  {
    slug: "fotso-jean-blaise", name: "Fotso Jean Blaise", role: "Facilities & HSE Advisor", photo: I("2022-05-Fotso-jb.webp"),
    short: "Lead HSE with 18+ years of experience across Cameroon, the DRC and Congo Brazzaville. Joined EQOS in 2021.",
    bio: [
      "Fotso is a Lead HSE with over 18 years of experience working with several companies at home and abroad, especially in the Democratic Republic of Congo (DRC) and Congo Brazzaville.",
      "He joined Equatorial Oilfield Services in 2021 as Facilities & HSE Advisor, with the main goal of making EQOS a leader in Facilities Integrity assurance & management.",
      "Formerly, he was Head of the Environment Department at SOGEA-SATOM (DRC) for a road construction project, independent HSE consultant at the R. Louvet design office in Douala, and HSE Manager for SOCOFRAN CDE Congo Brazzaville.",
      "He holds a diploma in Environmental Project Management from Hydro-Québec (Canada), and is certified OHSAS 18001:2007, SMI-QSE internal auditor (ISO 19011, ISO 9001, ISO 14001, OHSAS 18001), with HSE & Petroleum risk induction modules M07 and M08 from Bureau Veritas Congo.",
    ],
    skills: ["HSE management", "Facilities integrity", "ISO 9001 / 14001 / 45001", "Environmental management"],
  },
];

// ---------------------------------------------------------------------
//  TÉMOIGNAGES, CLIENTS, PARTENAIRES, FAQ
// ---------------------------------------------------------------------
export const testimonials = [
  {
    quote: "We worked with Equatorial Oilfield Services for over a decade and we are very satisfied with their services. They have delivered high-quality tools for our oil and gas projects in the Gulf of Guinea. They have a professional and experienced team that always meets our expectations and deadlines.",
    name: "Marc Guenin", role: "Logistics & Supply Chain Manager", company: "PETROFOR",
  },
  {
    quote: "Equatorial Oilfield Services provided us with highly qualified manpower who accompanied our team for the successful completion of the front-end and detailed engineering design of a liquefied petroleum gas pipeline for our client SCDP. The pipeline was designed to the highest standards.",
    name: "E. Facheux", role: "Managing Director", company: "BURCOPLUS",
  },
];

export const clients = [
  { name: "SCDP", logo: I("2022-05-SCDP.webp") },
  { name: "Addax Petroleum", logo: I("2022-05-addax.webp") },
  { name: "Petrofor", logo: I("2022-05-PETROFOR.webp") },
  { name: "Bowleven", logo: I("2022-05-bowleven.webp") },
  { name: "Perenco", logo: I("2022-05-perenco.webp") },
  { name: "Schlumberger", logo: I("2022-05-Schlumberger.webp") },
];

export const partners = [
  { name: "FT Services", logo: I("2022-05-FT-SERVICE.webp") },
  { name: "SafEchaf", logo: I("2022-05-SAFEECHAF.webp") },
  { name: "MA-ES", logo: I("2022-05-MA-ES-3.webp") },
  { name: "Afrigaz", logo: I("2022-05-AFRIGAS.webp") },
  { name: "2Power Construction Services", logo: I("2022-05-2pOWER.webp") },
  { name: "Geopro", logo: I("2023-02-Geopro.webp") },
  { name: "Calvante", logo: I("2023-02-Calvante.webp") },
  { name: "Olive Energy", logo: I("partner-olive-energy.webp") },
];

export const faqs = [
  { q: "Where can I find the company?", a: "Equatorial Oilfield Services is located in Bali, a district of Douala, the economic capital of Cameroon." },
  { q: "How do I work with Equatorial OS?", a: "Send us your request through the contact form, by email at info@equatorial-os.com or by phone. Our team will review your needs and get back to you promptly with a tailored proposal or quotation." },
  { q: "Which countries do you operate in?", a: "We are based in Cameroon and operate across the Gulf of Guinea, West and Central Africa, with the ambition to extend our services to the rest of Africa." },
  { q: "Can you supply petroleum products in large volumes?", a: "Yes. Through our network of producers, traders and logistics partners, we supply crude oil, refined products, diesel, Jet A-1, LPG and more, with storage, transport and trade finance solutions." },
];

export const skills = [
  { label: "Drilling Engineering", value: 92 },
  { label: "Facilities Engineering", value: 93 },
  { label: "Project Management", value: 87 },
  { label: "Flow Assurance", value: 82 },
];
