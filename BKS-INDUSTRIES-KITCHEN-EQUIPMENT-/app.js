// BKS Industries - Modern Commercial Kitchen & SS Fabrication Application Logic

// Complete Official BKS Industries Equipment Data Catalog (71 Items across 8 Categories)
const equipmentData = [
  // =========================================================================
  // 1. PREPARATION EQUIPMENT
  // =========================================================================
  {
    id: 'eq-101',
    name: 'SS Plain Work Table',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['16 Gauge SS 304 Food Grade Sheet', 'Heavy Duty Tubular Pipe Legs', 'Adjustable SS Bullet Feet', 'Sound Deadened Board Under Top'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Heavy-duty plain stainless steel preparation work table for commercial kitchens.'
  },
  {
    id: 'eq-102',
    name: 'SS Work Table with Undershelf',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Food Grade SS 304 Top Sheet', '1 / 2 Tier SS Storage Undershelves', 'Heavy Load Capacity Legs', 'Satin Finish Stainless Steel'],
    priceEstimate: '₹18,200',
    priceValue: 18200,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Commercial stainless steel prep work table with integrated lower storage shelf.'
  },
  {
    id: 'eq-103',
    name: 'SS Work Table with Sink (1-Bowl / 2-Bowl)',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Integrated Single or Double Deep Sink Bowl', 'Full Prep Table Work Area', 'Rear Wall Splashback Guard', 'Includes Swivel Water Tap'],
    priceEstimate: '₹21,000',
    priceValue: 21000,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Multipurpose preparation table featuring an integrated washing sink bowl.'
  },
  {
    id: 'eq-104',
    name: 'SS Work Table with Splashback',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['150mm High Rear Wall Splash Guard', 'Heavy 16 Gauge SS 304 Top', 'Cross Reinforced Understructure', 'Adjustable Levelling Feet'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Food prep table equipped with rear wall splashback to prevent spills.'
  },
  {
    id: 'eq-105',
    name: 'SS Table with Cross Bracing',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3-Side Tubular SS Cross Bracing', 'Heavy Duty Work Surface', 'Ideal for Mobile Undercounter Units', 'SS 304 Food Grade Material'],
    priceEstimate: '₹13,800',
    priceValue: 13800,
    dimensions: '48" L x 28" W x 34" H',
    desc: 'Sturdy open-base stainless steel table with 3-sided tubular cross bracing.'
  },
  {
    id: 'eq-107',
    name: 'SS Dough Kneading Machine',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V / 415V',
    powerKw: 2.2,
    exhaustCfm: 0,
    specs: ['Capacity: 10kg / 25kg Batter', 'Food Grade SS 304 Mixing Bowl', 'Heavy Duty Gear Box Drive', 'Safety Mesh Cover Guard'],
    priceEstimate: '₹34,500',
    priceValue: 34500,
    dimensions: '28" L x 20" W x 36" H',
    desc: 'Electric flour dough kneader machine for bulk chapatis, rotis, and bakery items.'
  },
  {
    id: 'eq-108',
    name: 'Commercial Wet Grinder (Tilting / Conventional)',
    category: 'prep',
    categoryLabel: 'Preparation Equipment',
    image: 'images/real-gallery/prod_biriyani_bain_marie.jpg',
    fuel: 'Electric 220V / 415V',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['High Quality Natural Black Granite Stones', 'Capacity: 5L / 10L / 20L', 'Manual Tilting Mechanism for Easy Emptying', 'Heavy SS 304 Outer Drum'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '30" L x 22" W x 42" H',
    desc: 'Heavy-duty commercial wet grinder for high volume idly and dosa batter.'
  },

  // =========================================================================
  // 2. WASHING & CLEANING EQUIPMENT
  // =========================================================================
  {
    id: 'eq-201',
    name: 'Single Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Single Deep Drawn 18"x18" SS Bowl', '16 Gauge SS 304 Construction', 'Rear 150mm Wall Splash Guard', 'Swivel Spout Faucet Included'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '30" L x 28" W x 34" H',
    desc: 'Commercial single bowl stainless steel pot washing sink unit.'
  },
  {
    id: 'eq-202',
    name: 'Double Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Dual 18"x18" Deep SS Sink Bowls', 'Heavy Duty Tubular Legs', 'Swivel Faucet Water Connections', 'Corner Waste Strainers'],
    priceEstimate: '₹22,800',
    priceValue: 22800,
    dimensions: '60" L x 28" W x 34" H',
    desc: 'Double bowl stainless steel kitchen wash and rinse sink.'
  },
  {
    id: 'eq-203',
    name: 'Triple Sink Unit',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['3 Separate Bowls for Wash, Rinse, Sanitize', 'Health Dept Compliance Standard', 'Integrated Drainboard Section', 'Heavy Duty SS Frame'],
    priceEstimate: '₹31,000',
    priceValue: 31000,
    dimensions: '84" L x 28" W x 34" H',
    desc: 'Triple bowl commercial dishwashing sink unit for strict sanitation protocols.'
  },
  {
    id: 'eq-204',
    name: 'Pot Wash Sink (Heavy Duty)',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Extra-Deep 24"x24" x 16" Deep Bowl', 'Heavy 14-16 Gauge SS 304 Sheet', 'Designed for Heavy Kadais & Degs', 'Reinforced Leg Supports'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '36" L x 30" W x 34" H',
    desc: 'Heavy duty deep pot washing sink specifically for large hotel cookware.'
  },
  {
    id: 'eq-205',
    name: 'Dish Landing Table (Soiled)',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Includes Rubber Rim Waste Scrap Hole', 'Overhead Rack Storage Rail', 'Raised Overflow Edges', 'Connects to Dishwasher Inlet'],
    priceEstimate: '₹19,800',
    priceValue: 19800,
    dimensions: '60" L x 30" W x 34" H',
    desc: 'Soiled dish entry table with waste scrap hole and rack sliding rail.'
  },
  {
    id: 'eq-206',
    name: 'Clean Dish Table',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Attaches directly to Dishwasher Exit', 'SS Storage Undershelf', 'Drying Drain Channels', 'Full SS 304 Construction'],
    priceEstimate: '₹16,200',
    priceValue: 16200,
    dimensions: '48" L x 30" W x 34" H',
    desc: 'Clean dish exit table for receiving and air drying clean rack loads.'
  },
  {
    id: 'eq-207',
    name: 'SS Mop Sink',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Floor-Mounted Low Height Basin', 'Heavy Removable Strainer Grid', 'Rear High Wall Splash Guard', 'Full SS 304 Sheet'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '24" L x 24" W x 18" H',
    desc: 'Low-profile mop bucket filling and cleaning sink unit.'
  },
  {
    id: 'eq-208',
    name: 'Pre-Rinse Shower with Add-on Faucet',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_two_sink.jpg',
    fuel: 'Water Inlet / Drain',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy-Duty Flex Stainless Spring Hose', 'High Pressure Spray Valve', 'Deck-Mounted Add-on Faucet Spout', 'Brass Internal Plumbing'],
    priceEstimate: '₹12,800',
    priceValue: 12800,
    dimensions: '8" Deck Mount x 38" Height',
    desc: 'Commercial overhead spring spray pre-rinse unit for dishwashing stations.'
  },
  {
    id: 'eq-211',
    name: 'Conveyor Dishwasher',
    category: 'washing',
    categoryLabel: 'Washing & Cleaning Equipment',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 18.0,
    exhaustCfm: 600,
    specs: ['Capacity: 150 - 200 Racks per Hour', 'Continuous Rack Conveyor System', 'Multi-Stage Wash & Dry Zones', 'Heavy Duty Industrial Build'],
    priceEstimate: '₹3,40,000',
    priceValue: 340000,
    dimensions: '80" L x 32" W x 64" H',
    desc: 'High volume flight conveyor dishwashing machine for banquet halls and large canteens.'
  },

  // =========================================================================
  // 3. COOKING EQUIPMENT
  // =========================================================================
  {
    id: 'eq-302',
    name: 'Continental Gas Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_four_burner_with_oven.jpg',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 1000,
    specs: ['Heavy Open Top Cast Iron Grates', 'Precision Brass Flame Valves', 'Option for Bottom Baking Oven', 'Full SS 304 Construction'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '36" L x 36" W x 34" H',
    desc: 'Continental heavy-duty gas cooking range for saucepans, skillets, and multi-dish lines.'
  },
  {
    id: 'eq-303',
    name: 'Chinese Cooking Range (High Pressure)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_three_burner.jpg',
    fuel: 'LPG High Pressure Gas',
    powerKw: 0,
    exhaustCfm: 1200,
    specs: ['High Pressure Jet Wok Burners', 'Integrated Water Wash System', 'Heavy Cast Iron Wok Rings', 'Swivel Water Faucet'],
    priceEstimate: '₹22,500',
    priceValue: 22500,
    dimensions: '30" to 60" L x 30" W x 34" H',
    desc: 'Specialized commercial high-flame Chinese wok burner range with water cooling trough.'
  },
  {
    id: 'eq-304',
    name: 'Low Height Stock Pot Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_three_burner.jpg',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 500,
    specs: ['Ergonomic Low 18" Cooking Height', 'Extra Heavy Cast Iron Burner & Grid', 'Handles 100L+ Heavy Boiling Pots', 'SS 304 Heavy Casing'],
    priceEstimate: '₹16,500',
    priceValue: 16500,
    dimensions: '24" L x 24" W x 18" H',
    desc: 'Low height commercial gas range designed for heavy stock pots, biriyani degs, and soups.'
  },
  {
    id: 'eq-305',
    name: 'Bulk Cooking Range',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_three_burner.jpg',
    fuel: 'LPG / PNG Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['Dual Concentric High BTU Ring Burners', 'Heavy Tubular SS Support Frame', 'Independent Inner/Outer Flame Control', 'Removable Spillage Tray'],
    priceEstimate: '₹29,500',
    priceValue: 29500,
    dimensions: '36" L x 36" W x 24" H',
    desc: 'Industrial bulk cooking range for large volume hotel catering and institution kitchens.'
  },
  {
    id: 'eq-306',
    name: 'SS Dosa Bhatti / Hot Plate',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_dosa_chapathi_lpg.jpg',
    fuel: 'LPG Gas / Electric',
    powerKw: 6.0,
    exhaustCfm: 700,
    specs: ['16mm Machined Mild Steel Top Plate', 'Uniform V-Type Gas Burners', 'Front Oil Collection Trough', 'Full SS 304 Outer Enclosure'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '48" L x 24" W x 34" H',
    desc: 'Heavy duty commercial Dosa hot plate cooking range.'
  },
  {
    id: 'eq-307',
    name: 'Chapati Puffer Plate',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_dosa_chapathi_lpg.jpg',
    fuel: 'LPG Gas',
    powerKw: 0,
    exhaustCfm: 600,
    specs: ['Combined Cooking Plate + Gas Puffer Grid', 'Separate Burner Controls', 'Heavy Steel Tawa Top', 'SS Protective Side Skirts'],
    priceEstimate: '₹21,500',
    priceValue: 21500,
    dimensions: '42" L x 24" W x 34" H',
    desc: 'Specialized chapati baking plate with integrated puffing burner section.'
  },
  {
    id: 'eq-308',
    name: 'SS Flat Top Griddle',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_dosa_chapathi_lpg.jpg',
    fuel: 'Electric 220V / LPG',
    powerKw: 4.5,
    exhaustCfm: 400,
    specs: ['Polished Chrome / Steel Griddle Plate', 'Thermostatic Temp Control (50°C - 300°C)', 'Removable Front Grease Drawer', 'Countertop / Stand Options'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '30" L x 24" W x 14" H',
    desc: 'Commercial flat top griddle for burgers, eggs, and breakfast items.'
  },
  {
    id: 'eq-309',
    name: 'Deep Fat Fryer (Electric / Gas - Single/Double Tank)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_single_chinese_burner.jpg',
    fuel: 'Electric 220V / 415V / LPG',
    powerKw: 6.0,
    exhaustCfm: 400,
    specs: ['Capacity: 6L to 28L Oil Tanks', 'Precision Thermostatic Control', 'Includes SS Nickel Wire Baskets', 'Cold Zone Tech to Prevent Oil Burning'],
    priceEstimate: '₹11,500',
    priceValue: 11500,
    dimensions: '12" to 24" L x 20" W x 34" H',
    desc: 'Commercial deep fat fryer available in single or double tank gas/electric models.'
  },
  {
    id: 'eq-310',
    name: 'Tilting Brat Pan',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_three_burner.jpg',
    fuel: 'Electric 415V / LPG',
    powerKw: 9.0,
    exhaustCfm: 600,
    specs: ['Capacity: 80L SS 304 Pan', 'Manual Worm Gear Tilting System', 'Thermostatic Heat Regulation', 'Counterbalanced Insulated Lid'],
    priceEstimate: '₹1,15,000',
    priceValue: 115000,
    dimensions: '40" L x 36" W x 36" H',
    desc: 'Commercial tilting braising pan for bulk frying, boiling, and sautéing.'
  },
  {
    id: 'eq-311',
    name: 'Boiling Pan (Jacketed)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_biriyani_bain_marie.jpg',
    fuel: 'Steam / Electric 415V / LPG',
    powerKw: 12.0,
    exhaustCfm: 500,
    specs: ['Capacity: 100L / 150L / 200L', 'Indirect Water Jacket Heating prevents burning', 'Large 2" Bottom Discharge Valve', 'Full SS 304 Construction'],
    priceEstimate: '₹1,45,000',
    priceValue: 145000,
    dimensions: '36" Dia x 42" H',
    desc: 'Heavy duty steam/gas/electric jacketed boiling pan for rice, sambar, and soups.'
  },
  {
    id: 'eq-312',
    name: 'SS Clay Tandoor (Gas / Charcoal)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_three_burner.jpg',
    fuel: 'Charcoal / LPG Gas',
    powerKw: 0,
    exhaustCfm: 800,
    specs: ['Authentic Heavy Hand-Crafted Clay Pot', 'SS 304 Square Casing with Insulation', 'High Heat Thermal Rockwool Filling', 'Includes Tandoor Skewers & Lids'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '30" L x 30" W x 36" H',
    desc: 'Commercial stainless steel encased clay tandoor oven for naan, rotis, and kebabs.'
  },
  {
    id: 'eq-313',
    name: 'Shawarma Machine',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_barbeque.jpg',
    fuel: 'LPG Gas / Electric',
    powerKw: 3.0,
    exhaustCfm: 300,
    specs: ['Infrared Ceramic Gas Heating Burners', 'Motorized SS Central Spit Rod', 'Bottom Oil Drip Catch Pan', 'Adjustable Burner Distance'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '24" L x 24" W x 42" H',
    desc: 'Commercial vertical gas/electric shawarma toaster machine.'
  },
  {
    id: 'eq-314',
    name: 'Salamander (Gas / Electric)',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_barbeque.jpg',
    fuel: 'Electric 220V / LPG',
    powerKw: 3.5,
    exhaustCfm: 300,
    specs: ['Height Adjustable Heating Rack Grid', 'Infrared Ceramic Heating Elements', 'Crumb & Grease Collection Tray', 'Countertop or Wall Mountable'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '30" L x 18" W x 18" H',
    desc: 'Overhead salamander griller for quick browning, cheese melting, and finishing.'
  },
  {
    id: 'eq-315',
    name: 'Commercial Microwave Oven',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V',
    powerKw: 1.8,
    exhaustCfm: 0,
    specs: ['Heavy Duty 1000W - 1800W Magnetron', 'Stainless Steel Cavity & Outer Casing', 'Programmable Memory Presets', 'Built for Continuous Heavy Usage'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '20" L x 18" W x 14" H',
    desc: 'High-output stainless steel commercial microwave oven for quick re-heating.'
  },
  {
    id: 'eq-316',
    name: 'Pizza Make-line Table',
    category: 'cooking',
    categoryLabel: 'Cooking Equipment',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.9,
    exhaustCfm: 0,
    specs: ['Refrigerated Base Storage Cabinet', 'Raised Chilled Top Rail holds 6-9 GN Pans', 'Thick Granite / SS Dough Prep Top', 'Night Cover Shield Included'],
    priceEstimate: '₹68,000',
    priceValue: 68000,
    dimensions: '60" L x 32" W x 42" H',
    desc: 'Refrigerated pizza preparation counter with chilled topping rail.'
  },

  // =========================================================================
  // 4. BAKERY & CAFE EQUIPMENT
  // =========================================================================
  {
    id: 'eq-401',
    name: 'Deck Oven (1, 2, or 3 Deck)',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 415V / LPG Gas',
    powerKw: 6.5,
    exhaustCfm: 400,
    specs: ['High Temperature Ceramic Stone Deck', 'Independent Top & Bottom Thermostats', 'Internal Lighting & Glass Door', 'Gas or Electric Heating Options'],
    priceEstimate: '₹45,000',
    priceValue: 45000,
    dimensions: '48" L x 36" W x 24" to 66" H',
    desc: 'Commercial bakery deck oven available in 1, 2, or 3 deck configurations.'
  },
  {
    id: 'eq-403',
    name: 'Convection Oven',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V / 415V',
    powerKw: 4.5,
    exhaustCfm: 250,
    specs: ['Forced Air Circulation Fan Motors', 'Capacity: 4 / 5 Trays GN 1/1', 'Steam Moisture Injection Control', 'Digital Temperature & Timer'],
    priceEstimate: '₹62,000',
    priceValue: 62000,
    dimensions: '32" L x 30" W x 28" H',
    desc: 'Commercial convection oven for even baking of pastries, cakes, and roasts.'
  },
  {
    id: 'eq-405',
    name: 'Spiral Dough Mixer',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Capacity: 20kg / 35kg / 50kg Dough', 'Dual Speed Motor (Bowl & Hook rotate)', 'Heavy Duty Steel Structure', 'Safety Guard Grid'],
    priceEstimate: '₹68,000',
    priceValue: 68000,
    dimensions: '34" L x 22" W x 42" H',
    desc: 'Heavy duty spiral dough kneader machine for commercial bakeries and pizzerias.'
  },
  {
    id: 'eq-407',
    name: 'Dough Proofer',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V',
    powerKw: 2.6,
    exhaustCfm: 0,
    specs: ['Holds 16 to 32 Bakery Trays', 'Precision Humidity & Temperature Controls', 'Glass View Doors with Gasket', 'Insulated SS Casing'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '24" L x 32" W x 72" H',
    desc: 'Dough proofing cabinet for controlled fermentation of bread and buns.'
  },
  {
    id: 'eq-408',
    name: 'Commercial Espresso Machine',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V',
    powerKw: 3.5,
    exhaustCfm: 0,
    specs: ['1-Group / 2-Group Options', 'Copper Boiler with Rotary Pump', 'Dual Steam Wands & Hot Water Tap', 'Built-in Cup Warmer Top'],
    priceEstimate: '₹1,45,000',
    priceValue: 145000,
    dimensions: '28" L x 22" W x 20" H',
    desc: 'Professional commercial espresso coffee machine for cafes and restaurants.'
  },
  {
    id: 'eq-410',
    name: 'Heavy Duty Blender / Frappe Maker',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_salamander.jpg',
    fuel: 'Electric 220V',
    powerKw: 1.8,
    exhaustCfm: 0,
    specs: ['High Power 1800W - 2200W Motor', '2.0L Unbreakable Polycarbonate Jar', 'Sound Dampening Enclosure Cover', 'Japanese Stainless Steel Blades'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '9" L x 10" W x 18" H',
    desc: 'Commercial high-speed blender for smoothies, frappes, and milkshakes.'
  },
  {
    id: 'eq-411',
    name: 'Waffle Baker / Crepe Maker',
    category: 'bakery',
    categoryLabel: 'Bakery & Cafe Equipment',
    image: 'images/real-gallery/prod_dosa_chapathi_lpg.jpg',
    fuel: 'Electric 220V',
    powerKw: 2.0,
    exhaustCfm: 0,
    specs: ['Heavy Cast Iron Non-Stick Cooking Grid', 'Thermostat Control (50°C - 300°C)', '360° Rotating Waffle Mechanism Option', 'SS Base Casing'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '16" L x 16" W x 10" H',
    desc: 'Commercial electric waffle baker and round French crepe maker machine.'
  },

  // =========================================================================
  // 5. REFRIGERATION & FREEZING
  // =========================================================================
  {
    id: 'eq-501',
    name: 'Vertical Refrigerator (2-Door / 4-Door)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.9,
    exhaustCfm: 0,
    specs: ['Capacity: 500L (2-Door) / 1000L (4-Door)', 'Embraco / Danfoss Heavy Compressor', 'Digital Temp Controller (1°C to 8°C)', 'Full SS 304 Outer & Inner'],
    priceEstimate: '₹54,000',
    priceValue: 54000,
    dimensions: '30" to 54" L x 30" W x 78" H',
    desc: 'Commercial upright reach-in vertical refrigerator for food storage.'
  },
  {
    id: 'eq-502',
    name: 'Vertical Deep Freezer (2-Door / 4-Door)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 1.4,
    exhaustCfm: 0,
    specs: ['Temperature Range: -18°C to -22°C', 'Auto Defrost & Forced Air Circulation', 'Heavy Insulated SS Solid Doors', 'Adjustable PVC Wire Shelves'],
    priceEstimate: '₹62,000',
    priceValue: 62000,
    dimensions: '30" to 54" L x 30" W x 78" H',
    desc: 'Commercial upright reach-in vertical deep freezer for raw meat and frozen goods.'
  },
  {
    id: 'eq-503',
    name: 'Under-Counter Refrigerator',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.6,
    exhaustCfm: 0,
    specs: ['Flat SS Top Work Table Surface', 'Under-Counter Chilled Cabinet (250L-400L)', 'Magnetic Self-Closing Doors', 'Compact Kitchen Footprint'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '48" to 60" L x 28" W x 34" H',
    desc: 'Under-counter refrigerated work table for chef preparation stations.'
  },
  {
    id: 'eq-504',
    name: 'Under-Counter Freezer',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.8,
    exhaustCfm: 0,
    specs: ['Temperature Range: -15°C to -20°C', 'Heavy SS Top Prep Counter', 'Digital Thermostat Control', 'Heavy Duty Compressor Unit'],
    priceEstimate: '₹44,000',
    priceValue: 44000,
    dimensions: '48" to 60" L x 28" W x 34" H',
    desc: 'Under-counter commercial frozen storage cabinet with worktop.'
  },
  {
    id: 'eq-505',
    name: 'Chest Freezer (Hard Top / Glass Top)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.4,
    exhaustCfm: 0,
    specs: ['Capacity: 300L / 400L / 500L', 'Hard Top Lid or Sliding Glass Top', 'Tropicalized Heavy Compressor', 'Castor Wheels for Mobility'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '44" L x 26" W x 34" H',
    desc: 'Commercial chest deep freezer for bulk frozen food storage and ice creams.'
  },
  {
    id: 'eq-506',
    name: 'Visi Cooler (Display Chiller)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Toughened Double Glass Door', 'Illuminated LED Canopy & Interior', 'Temp Range: 2°C to 10°C', 'Adjustable Wire Shelves'],
    priceEstimate: '₹32,000',
    priceValue: 32000,
    dimensions: '24" L x 24" W x 72" H',
    desc: 'Glass door vertical visi cooler for beverages, dairy, and cold dispatches.'
  },
  {
    id: 'eq-507',
    name: 'Refrigerated Salad Bar / Saladette',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.75,
    exhaustCfm: 0,
    specs: ['Top Cold Well holds 6 - 9 GN Pans', 'Under-counter Refrigerated Storage', 'Polyethylene Prep Cutting Board Edge', 'Night Hood Lid'],
    priceEstimate: '₹46,000',
    priceValue: 46000,
    dimensions: '48" L x 30" W x 42" H',
    desc: 'Refrigerated salad and sandwich preparation counter with chilled top well.'
  },
  {
    id: 'eq-508',
    name: 'Pastry / Cake Display Cabinet (Curved / Straight Glass)',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.85,
    exhaustCfm: 0,
    specs: ['Curved or Straight Double Glass Structure', 'Warm LED Shelf Lighting', 'Humidity Controlled Chilling (4°C - 8°C)', 'Rear Sliding Glass Doors'],
    priceEstimate: '₹58,000',
    priceValue: 58000,
    dimensions: '48" L x 28" W x 48" H',
    desc: 'Premium refrigerated cake and pastry display showcase cabinet.'
  },
  {
    id: 'eq-509',
    name: 'Commercial Water Cooler',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Capacity: 50L / 100L / 150L Storage Tank', 'Food Grade SS 304 Tank & Outer Body', 'Fast Cooling Compressor System', 'Brass Water Dispensing Taps'],
    priceEstimate: '₹24,500',
    priceValue: 24500,
    dimensions: '20" L x 20" W x 54" H',
    desc: 'Stainless steel commercial drinking water storage chiller cooler.'
  },
  {
    id: 'eq-510',
    name: 'Ice Cube Making Machine',
    category: 'refrigeration',
    categoryLabel: 'Refrigeration & Freezing',
    image: 'images/real-gallery/prod_table_top_fridge.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.65,
    exhaustCfm: 0,
    specs: ['Output: 30kg / 60kg / 100kg per 24 Hrs', 'Crystal Clear Dice Ice Cubes', 'Insulated Storage Ice Bin', 'Auto Shut-off Sensor'],
    priceEstimate: '₹52,000',
    priceValue: 52000,
    dimensions: '22" L x 24" W x 36" H',
    desc: 'Automatic commercial ice cube maker machine for bars, hotels, and cafes.'
  },

  // =========================================================================
  // 6. SERVICE & DISPLAY EQUIPMENT
  // =========================================================================
  {
    id: 'eq-601',
    name: 'Hot Food Bain Marie (Countertop / Freestanding)',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_bain_marie.jpg',
    fuel: 'Electric 220V',
    powerKw: 3.0,
    exhaustCfm: 0,
    specs: ['Capacity: 4 to 8 GN Pan Containers', 'Curved Toughened Glass Display Guard', 'Thermostatic Heating (30°C - 110°C)', 'Bottom Water Drain Valve'],
    priceEstimate: '₹34,000',
    priceValue: 34000,
    dimensions: '56" L x 28" W x 52" H',
    desc: 'Electric Bain Marie hot food counter with glass display canopy.'
  },
  {
    id: 'eq-602',
    name: 'Cold Bain Marie',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_bain_marie.jpg',
    fuel: 'Electric 220V',
    powerKw: 0.75,
    exhaustCfm: 0,
    specs: ['Chilled Cold Water Bath / Plate Well', 'Holds 4 - 8 GN Pan Containers', 'Glass Guard Display Canopy', 'SS 304 Sanitary Construction'],
    priceEstimate: '₹42,000',
    priceValue: 42000,
    dimensions: '56" L x 28" W x 52" H',
    desc: 'Refrigerated cold Bain Marie display counter for salads, desserts, and dips.'
  },
  {
    id: 'eq-603',
    name: 'Food Warmer Display Unit',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_bain_marie.jpg',
    fuel: 'Electric 220V',
    powerKw: 1.2,
    exhaustCfm: 0,
    specs: ['Toughened 4-Side Glass Showcase', 'Infrared Heating Element & Lamp', 'Humidity Water Tray prevents drying', 'Removable Wire Shelves'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '26" L x 18" W x 24" H',
    desc: 'Countertop heated display cabinet for samosas, patties, and fried snacks.'
  },
  {
    id: 'eq-604',
    name: 'SS Pick-up Counter',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Smooth SS 304 Service Surface', 'Under-shelf for Plate Storage', 'Optional Overhead Infrared Heat Lamps', 'Heavy Frame Legs'],
    priceEstimate: '₹26,000',
    priceValue: 26000,
    dimensions: '60" L x 30" W x 34" H',
    desc: 'Stainless steel dispatch and order pick-up service counter for chefs.'
  },
  {
    id: 'eq-605',
    name: 'SS Pass-through Window Frame / Shelf',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None / Electric Option',
    powerKw: 0.5,
    exhaustCfm: 0,
    specs: ['Wall Pass-Through Opening Structure', 'Heated or Ambient SS Shelf', 'Easy Clean Satin SS Finish', 'Custom Dimensions Available'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '48" L x 18" W x 24" H',
    desc: 'Stainless steel pass-through window frame connecting kitchen line to service hall.'
  },
  {
    id: 'eq-606',
    name: 'Cashier / Billing Counter',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Lockable Cash & Document Drawers', 'Cable Wire Hole Grommet', 'Footrest Ergonomic Bar', 'Full SS 304 Construction'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '42" L x 24" W x 36" H',
    desc: 'Stainless steel cashier counter desk with lockable storage for billing POS.'
  },
  {
    id: 'eq-607',
    name: 'Chaat Counter (Custom Fabricated)',
    category: 'service',
    categoryLabel: 'Service & Display Equipment',
    image: 'images/real-gallery/prod_bain_marie.jpg',
    fuel: 'LPG / Electric Option',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['Glass Sneeze Guard Canopy', 'GN Pan Cutouts for Chutneys & Ingredients', 'Bottom Storage Cabinet', 'Front Decorative SS / Acrylic Panel'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '60" L x 30" W x 54" H',
    desc: 'Custom fabricated stainless steel Pani Puri and Chaat service counter.'
  },

  // =========================================================================
  // 7. EXHAUST & VENTILATION
  // =========================================================================
  {
    id: 'eq-701',
    name: 'SS Island Exhaust Hood',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 3000,
    specs: ['Ceiling Suspended Central Island Design', 'Includes SS Baffle Grease Filters', 'Perimeter Oil Collector Trough', 'Internal Fire Retardant Wiring & Lights'],
    priceEstimate: '₹38,000',
    priceValue: 38000,
    dimensions: '96" L x 48" W x 24" H',
    desc: 'Central island exhaust hood canopy for open kitchen cooking lines.'
  },
  {
    id: 'eq-702',
    name: 'SS Wall-Mounted Exhaust Hood',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 1800,
    specs: ['Wall Anchored Hood Canopy', 'Removable SS Baffle Filters', 'Bottom Drain Tap for Oil Cup', '16 Gauge SS 304 Sheet'],
    priceEstimate: '₹28,000',
    priceValue: 28000,
    dimensions: '72" L x 36" W x 24" H',
    desc: 'Heavy duty wall mounted kitchen exhaust ventilation hood.'
  },
  {
    id: 'eq-703',
    name: 'Exhaust Hood with Baffle Filters',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'None',
    powerKw: 0.1,
    exhaustCfm: 2200,
    specs: ['High Efficiency SS Baffle Filters', 'Flame Guard Protection', 'Easy Dishwasher Washable Filters', 'Satin Finish SS 304 Casing'],
    priceEstimate: '₹32,000',
    priceValue: 32000,
    dimensions: '84" L x 36" W x 24" H',
    desc: 'Commercial kitchen exhaust hood featuring removable baffle grease filters.'
  },
  {
    id: 'eq-704',
    name: 'Fresh Air Input System',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 1.5,
    exhaustCfm: 0,
    specs: ['Fresh Makeup Air Blower Motor', 'Washable Dust Filter Plenums', 'Keeps Kitchen Air Balance & Cool', 'Heavy Duty Casing'],
    priceEstimate: '₹36,000',
    priceValue: 36000,
    dimensions: '36" L x 36" W x 30" H',
    desc: 'Fresh makeup air supply system to maintain proper kitchen air pressure balance.'
  },
  {
    id: 'eq-705',
    name: 'Centrifugal Exhaust Blower',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'Electric 415V 3-Phase',
    powerKw: 2.2,
    exhaustCfm: 0,
    specs: ['Belt Driven SISW / DIDW Motor Blower', 'Power: 1.0 HP to 5.0 HP', 'High Static Pressure Fan Wheel', 'Weatherproof Outdoor Housing'],
    priceEstimate: '₹28,500',
    priceValue: 28500,
    dimensions: '30" L x 30" W x 36" H',
    desc: 'Industrial centrifugal exhaust blower motor for suction ductwork.'
  },
  {
    id: 'eq-706',
    name: 'GI Ducting',
    category: 'exhaust',
    categoryLabel: 'Exhaust & Ventilation',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy Gauge Galvanized Iron Sheet', 'Flanged Joints with Neoprene Gaskets', 'Acoustic / Thermal Insulation Option', 'Custom Fabrication Sizing'],
    priceEstimate: '₹450 / sq.ft',
    priceValue: 450,
    dimensions: 'Custom Sizing (per sq.ft)',
    desc: 'Galvanized iron kitchen exhaust ducting system for smoke transport.'
  },

  // =========================================================================
  // 8. STORAGE, SHELVING & TROLLEYS
  // =========================================================================
  {
    id: 'eq-801',
    name: 'SS Slotted Angle Rack (4-Tier / 5-Tier)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['4 or 5 Adjustable Storage Shelves', 'Load Capacity: 200kg Per Shelf', 'Solid or Perforated SS Shelves', 'Heavy Slotted Angle Posts'],
    priceEstimate: '₹14,500',
    priceValue: 14500,
    dimensions: '48" L x 18" W x 72" H',
    desc: 'Adjustable multi-tier stainless steel slotted angle storage rack.'
  },
  {
    id: 'eq-802',
    name: 'SS Pot Rack / Heavy Duty Storage Rack',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Tubular Slatted Racks for Air Drainage', 'Designed for Heavy Kadais, Degs & Pots', 'Corrosion Free SS 304 Material', 'Heavy Load Base Feet'],
    priceEstimate: '₹12,500',
    priceValue: 12500,
    dimensions: '48" L x 20" W x 60" H',
    desc: 'Heavy-duty slatted stainless steel pot drying and storage rack.'
  },
  {
    id: 'eq-803',
    name: 'SS Wall Mounted Shelf (Solid / Pipe)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Solid Sheet or Tubular Pipe Top Shelf', 'Heavy Wall Mounting Brackets', 'Satin Finish Stainless Steel', 'Saves Floor Space'],
    priceEstimate: '₹6,800',
    priceValue: 6800,
    dimensions: '48" L x 14" W x 12" H',
    desc: 'Wall mounted stainless steel storage shelf for spices, pans, and utensils.'
  },
  {
    id: 'eq-804',
    name: 'SS Onion & Potato Bin',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Perforated SS Mesh Bins for Airflow', '2 or 3 Compartment Storage', 'Mobile Castor Wheels Base', 'Prevents Spoilage & Moisture'],
    priceEstimate: '₹11,800',
    priceValue: 11800,
    dimensions: '36" L x 24" W x 30" H',
    desc: 'Ventilated stainless steel storage bin trolley for raw onions and potatoes.'
  },
  {
    id: 'eq-805',
    name: 'Gastronorm (GN) Pan Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds 15 to 30 GN 1/1 Pans', 'Vertical Angle Runner Slides', '4 Heavy Swivel Lockable Castors', 'Full SS 304 Structure'],
    priceEstimate: '₹18,500',
    priceValue: 18500,
    dimensions: '22" L x 26" W x 66" H',
    desc: 'Vertical stainless steel rack trolley for transporting Gastronorm food pans.'
  },
  {
    id: 'eq-806',
    name: 'Masala Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds 6 to 12 Deep Spice GN Containers', 'Ergonomic Push Handle Bar', 'Under-shelf for Extra Storage', 'Lockable Castor Wheels'],
    priceEstimate: '₹12,800',
    priceValue: 12800,
    dimensions: '30" L x 20" W x 34" H',
    desc: 'Mobile stainless steel spice trolley for active chef cooking stations.'
  },
  {
    id: 'eq-807',
    name: 'Platform Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Heavy SS Base Plate (300kg Load Cap)', 'Foldable / Rigid Push Handle Bar', 'Heavy Duty Rubber Castor Wheels', 'Corner Bumper Guards'],
    priceEstimate: '₹9,800',
    priceValue: 9800,
    dimensions: '36" L x 24" W x 36" H',
    desc: 'Heavy duty platform trolley for moving gas cylinders, flour bags, and stock.'
  },
  {
    id: 'eq-808',
    name: 'Service Trolley (2-Tier / 3-Tier)',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['2 or 3 Rimmed SS Tray Tiers', 'Silent Swivel Castor Wheels', 'Heavy Duty Tubular Frame', 'Easy Wipe Sanitation'],
    priceEstimate: '₹10,500',
    priceValue: 10500,
    dimensions: '32" L x 20" W x 36" H',
    desc: 'Multi-tier food service utility trolley for hotel and dining room service.'
  },
  {
    id: 'eq-809',
    name: 'Soiled Dish Clearance Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Includes Heavy Duty Removable Plastic Tubs', 'Cutlery Collection Bucket Attachment', '4 Swivel Lockable Wheels', 'Full SS Frame'],
    priceEstimate: '₹11,800',
    priceValue: 11800,
    dimensions: '32" L x 20" W x 36" H',
    desc: 'Dining hall dish clearance trolley with removable waste tubs.'
  },
  {
    id: 'eq-810',
    name: 'Tea / Coffee Snack Trolley',
    category: 'storage',
    categoryLabel: 'Storage, Shelving & Trolleys',
    image: 'images/real-gallery/prod_folding_table.jpg',
    fuel: 'None',
    powerKw: 0,
    exhaustCfm: 0,
    specs: ['Holds Milk Boiler & Tea Urn', 'Cup & Snack Storage Rack Shelf', 'Gas Cylinder Base Housing Option', 'Smooth Rolling Castor Wheels'],
    priceEstimate: '₹19,500',
    priceValue: 19500,
    dimensions: '42" L x 24" W x 36" H',
    desc: 'Mobile tea, coffee, and snack serving trolley for corporate offices and canteens.'
  }
];

// Blog & Knowledge Hub Articles Data
const blogArticles = [
  {
    id: 'blog-1',
    title: 'Essential Commercial Kitchen Equipment Checklist for Restaurants & Hotels in Karnataka (2026)',
    category: 'Setup & Planning Guide',
    date: 'August 2026',
    readTime: '6 min read',
    image: 'images/real-gallery/bks_hospitality_turnkey.jpg',
    author: 'BKS Engineering Team',
    summary: 'Planning a commercial kitchen setup in Karnataka requires selecting certified food-grade SS 304 equipment, high BTU burners, proper ventilation CFM, and ergonomic prep space.',
    content: `
      <h3>Introduction to Commercial Kitchen Setup in Karnataka</h3>
      <p>Setting up a commercial hotel, restaurant, or cloud kitchen in Karnataka is an ambitious venture. With high daily order volumes and strict municipal hygiene standards, choosing factory-direct, food-grade SS 304 stainless steel equipment is essential for longevity and seamless operations.</p>
      
      <h4>1. High-Performance Cooking Line</h4>
      <p>The cooking line is the heart of your kitchen. Depending on your menu (South Indian, Chinese, Tandoori, Continental), ensure you invest in heavy-duty cast iron gas ranges:</p>
      <ul>
        <li><strong>High Pressure Single & Dual Burners:</strong> For fast boiling, stock pots, and curries.</li>
        <li><strong>16mm Mild Steel Dosa Tawa:</strong> Essential for uniform heat distribution without burning dosas or chapatis.</li>
        <li><strong>Chinese Wok Jet Burners:</strong> Fitted with water cooling channels to manage intense cooking flames.</li>
      </ul>

      <h4>2. Exhaust Hood & Ducting Ventilation</h4>
      <p>Karnataka climate and enclosed kitchen spaces demand efficient exhaust hoods with baffle filters to capture grease, heat, and smoke. Ensure your blower motor CFM is sized accurately (approx. 300 to 450 CFM per linear foot of hood).</p>

      <h4>3. Stainless Steel Prep & Sanitation Station</h4>
      <p>Chopping tables and pot wash sinks must use 16-gauge SS 304 food-grade sheet to prevent rusting from moisture and acids. Dual or triple-bowl sink units are mandatory for wash-rinse-sanitize protocols.</p>

      <h4>4. Commercial Refrigeration & Hot Display</h4>
      <p>Reach-in vertical 2-door or 4-door chillers maintain safe holding temperatures (1°C - 8°C), while electric Bain Marie hot counters keep cooked gravies hot for fast buffet and delivery dispatches.</p>
    `
  },
  {
    id: 'blog-2',
    title: 'Cloud Kitchen Setup Blueprint: How to Build a High-Output Delivery Hub in 300 Sq. Ft.',
    category: 'Cloud Kitchen Strategy',
    date: 'August 2026',
    readTime: '5 min read',
    image: 'images/real-gallery/prod_folding_table.jpg',
    author: 'BKS Technical Specialist',
    summary: 'Learn how to optimize a compact 300 sq. ft. cloud kitchen space in Karnataka for multi-brand food delivery with high order throughput.',
    content: `
      <h3>Maximizing Output in a Compact Delivery Kitchen</h3>
      <p>Cloud kitchens rely on speed, minimal movement waste, and compact multipurpose machinery. In a 300 to 400 sq. ft. footprint, layout design dictates profitability.</p>

      <h4>Key Equipment Modules for Cloud Kitchens</h4>
      <ul>
        <li><strong>Multi-Tasking Cooking Ranges:</strong> Combination Indian & Chinese jet burners save floor space.</li>
        <li><strong>Compact Table-Top Fryers & Grillers:</strong> Instant frying of appetizers with minimal oil degradation.</li>
        <li><strong>Under-Counter Refrigeration:</strong> Refrigerated work tables double as chopping stations on top while storing dough and sauces below.</li>
        <li><strong>Wall-Mounted Pot Racks:</strong> Utilize vertical wall height for pot drying and dry inventory storage.</li>
      </ul>
      <p>BKS Industries specializes in custom CAD floor planning tailored for Swiggy & Zomato cloud kitchen hubs across Karnataka.</p>
    `
  },
  {
    id: 'blog-3',
    title: 'Stainless Steel SS 304 vs SS 316: Why Food-Grade Fabrication Matters for Kitchens',
    category: 'Metallurgy & Safety',
    date: 'August 2026',
    readTime: '4 min read',
    image: 'images/real-gallery/prod_two_sink.jpg',
    author: 'BKS Metallurgy Experts',
    summary: 'Discover the differences between SS 202, SS 304, and SS 316 stainless steel grades, and why non-corrosive SS 304 is the golden standard for food hygiene.',
    content: `
      <h3>Why Stainless Steel Grade Selection Dictates Equipment Lifespan</h3>
      <p>Commercial kitchens are harsh environments exposed to moisture, salt, spices, citrus acids, and high heat. Using sub-standard stainless steel like SS 202 leads to premature rusting and food contamination.</p>

      <h4>SS 304 (18/8 Chrome-Nickel Alloy)</h4>
      <p>SS 304 is the universal standard for commercial food equipment. Its 18% chromium and 8% nickel content provides superior resistance to oxidation, rust, and organic acids found in Indian gravies and spices.</p>

      <h4>SS 316 (Molybdenum Enriched)</h4>
      <p>SS 316 includes 2-3% molybdenum for extreme chemical and saline resistance. It is used in marine applications and high-acid industrial food processing.</p>

      <p>At BKS Industries, we guarantee 100% certified SS 304 food-grade fabrication for all work tables, sink units, Bain Maries, and storage racks.</p>
    `
  },
  {
    id: 'blog-4',
    title: 'Commercial Kitchen Ventilation: Calculating Exhaust Hood CFM Airflow & Duct Sizing',
    category: 'Engineering & Safety',
    date: 'August 2026',
    readTime: '5 min read',
    image: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    author: 'BKS HVAC Engineers',
    summary: 'A step-by-step technical guide to calculating exhaust hood CFM, duct diameter, and blower motor horsepower for restaurant fire safety.',
    content: `
      <h3>The Science of Commercial Kitchen Smoke & Heat Extraction</h3>
      <p>Proper ventilation is not just about comfort—it is a critical fire safety and municipal health requirement in Karnataka commercial buildings.</p>

      <h4>CFM Calculation Formula</h4>
      <p><strong>Required CFM = Hood Length (in feet) × Duty Rating Factor</strong></p>
      <ul>
        <li><strong>Light Duty (Steam & Boiling):</strong> 250 CFM / linear ft</li>
        <li><strong>Medium Duty (Burners, Fryers, Tawa):</strong> 350 CFM / linear ft</li>
        <li><strong>Heavy Duty (Charcoal, Wok Jet, Tandoor):</strong> 450 CFM / linear ft</li>
      </ul>

      <h4>Duct Velocity & Blower Sizing</h4>
      <p>Maintain duct velocity between 1,500 and 1,800 FPM (Feet Per Minute) to prevent oil grease settling inside ducts. BKS Industries custom fabricates SS baffle filter hoods paired with heavy centrifugal blowers.</p>
    `
  }
];

// Global App State
let quoteCart = [];
let activeCategory = 'all';
let searchKeyword = '';

// DOM Initializer (Chunked to eliminate long main-thread tasks)
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderCatalog();
  renderGmbGallery('all');

  // Yield main thread before non-critical component rendering & animations
  requestAnimationFrame(() => {
    renderBlogsGrid();
    initHeroMotionGraphics();
    initHeroTypewriter();
    initScrollReveal();
    initStatCounters();
    init3DCardTilt();
  });
});

// Toast Helper
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i> ${message}`;
  
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast && typeof toast.remove === 'function') {
        toast.remove();
      } else if (toast && toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Global Event Listeners
function setupEventListeners() {
  // Scroll listener for header glass effect elevation (Optimized for zero forced reflow)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
          } else {
            navbar.classList.remove('navbar-scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Mobile Nav Drawer Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (mobileNavDrawer && mobileNavBackdrop) {
        mobileNavDrawer.classList.add('active');
        mobileNavBackdrop.classList.add('active');
      }
    });
  }

  const closeMobileNav = () => {
    if (mobileNavDrawer && mobileNavBackdrop) {
      mobileNavDrawer.classList.remove('active');
      mobileNavBackdrop.classList.remove('active');
    }
  };

  if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // Category Tab Filter
  const tabs = document.querySelectorAll('.category-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeCategory = e.currentTarget.dataset.category;
      renderCatalog();
    });
  });

  // Search Input Filter
  const searchInput = document.getElementById('catalogSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  // Quote Drawer Toggle
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const quoteDrawer = document.getElementById('quoteDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  cartToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      drawerBackdrop.classList.add('active');
      quoteDrawer.classList.add('active');
    });
  });

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeQuoteDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeQuoteDrawer);

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // Calculators Listener
  const cfmCalcForm = document.getElementById('cfmCalcForm');
  if (cfmCalcForm) {
    cfmCalcForm.addEventListener('input', calculateCFM);
    calculateCFM();
  }

  const lpgCalcForm = document.getElementById('lpgCalcForm');
  if (lpgCalcForm) {
    lpgCalcForm.addEventListener('input', calculateLPG);
    calculateLPG();
  }
}

function closeQuoteDrawer() {
  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('quoteDrawer');
  if (backdrop) backdrop.classList.remove('active');
  if (drawer) drawer.classList.remove('active');
}

// Render Equipment Catalog
function renderCatalog() {
  const container = document.getElementById('catalogGrid');
  if (!container) return;

  const filtered = equipmentData.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchKeyword) ||
                          item.categoryLabel.toLowerCase().includes(searchKeyword) ||
                          item.specs.some(s => s.toLowerCase().includes(searchKeyword));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: var(--bg-card); border-radius: 20px; border: 1px dashed var(--steel-border);">
        <i class="fa-solid fa-store-slash" style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.3rem; color: #ffffff; font-weight: 700;">No equipment found matching criteria</h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; margin-top: 0.3rem;">Try broadening your category filter or search terms.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="equipment-card">
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.name} - Commercial Kitchen Equipment Manufacturer BKS Industries Karnataka" width="300" height="200" loading="lazy" decoding="async">
        <span class="category-tag">${item.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p style="font-size: 0.82rem; color: var(--steel); margin-bottom: 0.8rem;"><i class="fa-solid fa-ruler-combined" style="color: var(--primary);"></i> ${item.dimensions} | ${item.fuel}</p>
        <ul class="card-specs-list">
          ${item.specs.slice(0, 3).map(spec => `<li><i class="fa-solid fa-circle-check"></i> ${spec}</li>`).join('')}
        </ul>
        <div class="card-footer">
          <div class="price-estimate">
            <span class="price-label">Starting From</span>
            <span class="price-value">${item.priceEstimate}</span>
          </div>
          <div style="display: flex; gap: 0.4rem;">
            <button class="btn btn-outline" onclick="openSpecModal('${item.id}')" style="padding: 0.5rem 0.75rem; font-size: 0.85rem;" title="View Technical Specs & Options">
              <i class="fa-solid fa-sliders"></i> Specs
            </button>
            <button class="btn btn-primary" onclick="addToQuote('${item.id}')" style="padding: 0.5rem 0.85rem; font-size: 0.85rem;">
              <i class="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Blog Articles Grid
function renderBlogsGrid() {
  const container = document.getElementById('blogsGrid');
  if (!container) return;

  container.innerHTML = blogArticles.map(article => `
    <div class="blog-card">
      <div class="blog-image-wrap">
        <img src="${article.image}" alt="${article.title} - BKS Industries Commercial Kitchen Guide Karnataka" width="350" height="200" loading="lazy" decoding="async">
        <span class="blog-category-tag">${article.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
        <h3 class="blog-title">${article.title}</h3>
        <p class="blog-summary">${article.summary}</p>
        <button class="btn btn-outline" onclick="openBlogModal('${article.id}')" style="margin-top: auto; padding: 0.6rem 1rem; font-size: 0.88rem;">
          <i class="fa-solid fa-book-open"></i> Read Full Guide
        </button>
      </div>
    </div>
  `).join('');
}

// Open Interactive Blog Article Reader Modal
function openBlogModal(id) {
  const article = blogArticles.find(b => b.id === id);
  if (!article) return;

  const modalHtml = `
    <div id="blogModalBackdrop" class="modal-backdrop">
      <div class="modal-card" style="max-width: 820px; max-height: 90vh; overflow-y: auto;">
        <button onclick="closeBlogModal()" class="modal-close-btn">&times;</button>
        
        <div style="margin-bottom: 1.2rem;">
          <span class="badge-tag" style="background: rgba(245, 158, 11, 0.18); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.35);"><i class="fa-solid fa-bookmark"></i> ${article.category}</span>
          <h2 style="font-size: 1.6rem; color: #ffffff; margin: 0.6rem 0;">${article.title}</h2>
          <div style="font-size: 0.85rem; color: #94a3b8; display: flex; gap: 1.2rem; align-items: center;">
            <span><i class="fa-solid fa-user-gear" style="color: var(--accent);"></i> ${article.author}</span>
            <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
          </div>
        </div>

        <img src="${article.image}" alt="${article.title} - BKS Industries Commercial Kitchen Guide" style="width: 100%; height: 280px; object-fit: cover; border-radius: 14px; margin-bottom: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.15);" width="800" height="280" loading="lazy" decoding="async">

        <div class="blog-article-content" style="color: #cbd5e1; line-height: 1.7; font-size: 0.98rem; margin-bottom: 2rem;">
          ${article.content}
        </div>

        <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.2rem;">Need Expert Layout & Fabrication Advice?</h4>
            <p style="font-size: 0.85rem; color: #94a3b8;">Speak with BKS Industries engineers for a custom layout quote in Karnataka.</p>
          </div>
          <button class="btn btn-primary" onclick="sendArticleInquiryWhatsApp('${article.title}')">
            <i class="fa-brands fa-whatsapp"></i> Chat with Kitchen Engineer
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeBlogModal() {
  const modal = document.getElementById('blogModalBackdrop');
  if (modal) modal.remove();
}

function sendArticleInquiryWhatsApp(articleTitle) {
  let text = `*Inquiry from BKS Industries Blog Guide*\n\n`;
  text += `I was reading your article: "${articleTitle}"\n`;
  text += `I would like to consult with an engineer regarding commercial equipment & layout setup for my kitchen in Karnataka.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Add Item to Quote Cart
function addToQuote(id, customPrice = null, customSpecNotes = '') {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const priceVal = customPrice !== null ? customPrice : item.priceValue;

  const existing = quoteCart.find(c => c.id === id && c.notes === customSpecNotes);
  if (existing) {
    existing.qty += 1;
  } else {
    quoteCart.push({
      ...item,
      priceValue: priceVal,
      priceEstimate: `₹${priceVal.toLocaleString('en-IN')}`,
      notes: customSpecNotes,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Added "${item.name}" to Quote List`);

  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('quoteDrawer');
  if (backdrop) backdrop.classList.add('active');
  if (drawer) drawer.classList.add('active');
}

// Update Cart Drawer UI
function updateCartUI() {
  const cartBadge = document.getElementById('cartBadgeCount');
  const drawerList = document.getElementById('drawerItemList');
  const drawerSubtotal = document.getElementById('drawerSubtotal');

  const totalQty = quoteCart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.innerText = totalQty;

  if (quoteCart.length === 0) {
    drawerList.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <i class="fa-solid fa-clipboard-list" style="font-size: 3rem; color: rgba(255,255,255,0.2); margin-bottom: 1rem;"></i>
        <p style="font-weight: 700; font-size: 1.05rem; color: #ffffff;">Your Quote List is empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.4rem;">Explore commercial equipment and click "Add" to generate a formal quote PDF or WhatsApp inquiry.</p>
      </div>
    `;
    if (drawerSubtotal) drawerSubtotal.innerText = '₹0';
    return;
  }

  let totalCost = 0;
  drawerList.innerHTML = quoteCart.map((item, index) => {
    const itemTotal = item.priceValue * item.qty;
    totalCost += itemTotal;
    return `
      <div style="display: flex; gap: 0.8rem; align-items: center; padding: 0.9rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.12);">
        <img src="${item.image}" alt="${item.name} - Commercial Kitchen Equipment BKS Industries Karnataka" style="width: 56px; height: 56px; border-radius: 10px; object-fit: cover; border: 1px solid rgba(255, 255, 255, 0.2);" width="56" height="56" loading="lazy" decoding="async">
        <div style="flex: 1; min-width: 0;">
          <h4 style="font-size: 0.88rem; font-weight: 700; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
          ${item.notes ? `<p style="font-size: 0.72rem; color: #38bdf8; font-weight: 600;">${item.notes}</p>` : ''}
          <span style="font-size: 0.82rem; color: var(--accent-hover); font-weight: 700;">${item.priceEstimate}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem; background: rgba(255, 255, 255, 0.08); padding: 0.25rem 0.5rem; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.12);">
          <button onclick="changeQty(${index}, -1)" style="background: none; border: none; color: #ffffff; font-size: 0.9rem; font-weight: 700; cursor: pointer; width: 20px;">-</button>
          <span style="font-weight: 700; font-size: 0.85rem; color: #ffffff;">${item.qty}</span>
          <button onclick="changeQty(${index}, 1)" style="background: none; border: none; color: #ffffff; font-size: 0.9rem; font-weight: 700; cursor: pointer; width: 20px;">+</button>
        </div>
        <button onclick="removeFromCart(${index})" style="color: #ef4444; background: none; border: none; font-size: 0.95rem; cursor: pointer; padding: 0.3rem;" title="Remove Item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (drawerSubtotal) drawerSubtotal.innerText = `₹${totalCost.toLocaleString('en-IN')}`;
}

function changeQty(index, delta) {
  if (!quoteCart[index]) return;
  quoteCart[index].qty += delta;
  if (quoteCart[index].qty <= 0) {
    quoteCart.splice(index, 1);
  }
  updateCartUI();
}

function removeFromCart(index) {
  if (!quoteCart[index]) return;
  quoteCart.splice(index, 1);
  updateCartUI();
}

// Send Quote via WhatsApp
function sendQuoteWhatsApp() {
  if (quoteCart.length === 0) {
    alert('Please add at least one equipment item to your quote list first!');
    return;
  }

  let text = `*New Kitchen Equipment Inquiry - BKS Industries*\n\n`;
  text += `*Selected Equipment List:*\n`;
  let totalEst = 0;

  quoteCart.forEach((item, idx) => {
    const itemTotal = item.priceValue * item.qty;
    totalEst += itemTotal;
    text += `${idx + 1}. ${item.name} x ${item.qty} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
    if (item.notes) text += `   (Specs: ${item.notes})\n`;
  });

  text += `\n*Estimated Equipment Total:* ₹${totalEst.toLocaleString('en-IN')}\n`;
  text += `\nPlease provide your formal price quotation and availability for Karnataka setup.`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// Send Quote via Email
function sendQuoteEmail() {
  if (quoteCart.length === 0) {
    alert('Please add at least one equipment item to your quote list first!');
    return;
  }

  let totalEst = 0;
  let body = `New Commercial Kitchen Equipment Quote Request\n`;
  body += `===============================================\n\n`;
  body += `Selected Equipment List:\n`;

  quoteCart.forEach((item, idx) => {
    const itemTotal = item.priceValue * item.qty;
    totalEst += itemTotal;
    body += `${idx + 1}. ${item.name} x ${item.qty} - ₹${itemTotal.toLocaleString('en-IN')}\n`;
    if (item.notes) body += `   (Specs: ${item.notes})\n`;
  });

  body += `\nEstimated Equipment Total: ₹${totalEst.toLocaleString('en-IN')}\n\n`;
  body += `Please provide your formal price quotation, tax invoice details, and delivery timeline for Karnataka setup.\n\n`;
  body += `-----------------------------------------------\n`;
  body += `Dispatched via BKS Industries Official Website (www.bksindustries.in)`;

  const recipient = 'Bks-industries@outlook.com';
  const ccRecipient = 'Bksindustries23@gmail.com';
  const subject = `Equipment Quote Request - BKS Industries (${quoteCart.length} Items)`;

  const mailtoUrl = `mailto:${recipient}?cc=${ccRecipient}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  showToast('Opening your email composer to send quote request to Bks-industries@outlook.com');
}

// Printable PDF Formal Quote Sheet Generator
function downloadQuotePDF() {
  if (quoteCart.length === 0) {
    alert('Please add equipment items to your quote list before generating PDF!');
    return;
  }

  let totalBeforeGst = 0;
  quoteCart.forEach(item => {
    totalBeforeGst += item.priceValue * item.qty;
  });

  const gstAmount = Math.round(totalBeforeGst * 0.18);
  const grandTotal = totalBeforeGst + gstAmount;

  const quoteNo = 'BKSI-QT-' + Math.floor(100000 + Math.random() * 900000);
  const currentDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Formal Quotation - BKS Industries (${quoteNo})</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 40px; color: #0f172a; line-height: 1.5; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0284c7; padding-bottom: 20px; margin-bottom: 25px; }
        .brand { font-size: 24px; font-weight: 800; color: #0f172a; }
        .subbrand { font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; }
        .meta-box { text-align: right; font-size: 13px; color: #334155; }
        .client-section { background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 25px; display: flex; justify-content: space-between; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
        th { background: #0f172a; color: #ffffff; text-align: left; padding: 10px 12px; font-size: 13px; text-transform: uppercase; }
        td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
        .total-table { width: 320px; margin-left: auto; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; }
        .total-table td { padding: 8px 12px; font-weight: 600; }
        .grand-total { background: #fef3c7; color: #b45309; font-size: 16px; font-weight: 800; }
        .terms { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 15px; font-size: 12px; color: #64748b; }
        .footer-note { text-align: center; margin-top: 40px; font-size: 12px; color: #94a3b8; }
        @media print {
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="margin-bottom: 20px; text-align: right;">
        <button onclick="window.print()" style="background: #0284c7; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer;">Print / Save as PDF</button>
      </div>

      <div class="header">
        <div>
          <div class="brand">BKS INDUSTRIES</div>
          <div class="subbrand">Commercial Kitchen Equipments, Railings & General Fabrications</div>
          <div style="font-size: 12px; color: #475569; margin-top: 4px;">Lakshmidevinagar, Karnataka 560096 | Ph: +91 81239 39433 / +91 98801 31901</div>
          <div style="font-size: 11px; color: #0284c7;">GSTIN: 29AWOPM7903Q1ZH | Email: Bks-industries@outlook.com / Bksindustries23@gmail.com | Web: www.bksindustries.in</div>
        </div>
        <div class="meta-box">
          <div style="font-size: 18px; font-weight: 800; color: #0284c7;">FORMAL QUOTATION</div>
          <div><strong>Quote No:</strong> ${quoteNo}</div>
          <div><strong>Date:</strong> ${currentDate}</div>
          <div><strong>Validity:</strong> 30 Days</div>
        </div>
      </div>

      <div class="client-section">
        <div>
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">PREPARED FOR:</div>
          <div>Commercial Kitchen Client / Operator</div>
          <div>Location: Karnataka</div>
        </div>
        <div>
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 4px;">MANUFACTURER DETAILS:</div>
          <div>BKS Industries (SS 304 Certified)</div>
          <div><strong>GSTIN:</strong> 29AWOPM7903Q1ZH</div>
          <div>Lakshmidevinagar, Karnataka 560096</div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Equipment Description & Specifications</th>
            <th>Qty</th>
            <th>Unit Rate (₹)</th>
            <th style="text-align: right;">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${quoteCart.map((item, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>
                <strong>${item.name}</strong>
                ${item.notes ? `<br><small style="color: #0284c7;">Specs: ${item.notes}</small>` : `<br><small style="color: #64748b;">${item.dimensions} | ${item.fuel}</small>`}
              </td>
              <td>${item.qty}</td>
              <td>₹${item.priceValue.toLocaleString('en-IN')}</td>
              <td style="text-align: right;">₹${(item.priceValue * item.qty).toLocaleString('en-IN')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <table class="total-table">
        <tr>
          <td>Equipment Subtotal:</td>
          <td style="text-align: right;">₹${totalBeforeGst.toLocaleString('en-IN')}</td>
        </tr>
        <tr>
          <td>GST @ 18%:</td>
          <td style="text-align: right;">₹${gstAmount.toLocaleString('en-IN')}</td>
        </tr>
        <tr class="grand-total">
          <td>Estimated Total:</td>
          <td style="text-align: right;">₹${grandTotal.toLocaleString('en-IN')}</td>
        </tr>
      </table>

      <div class="terms">
        <strong>TERMS & CONDITIONS:</strong>
        <ol style="margin-top: 6px; padding-left: 18px;">
          <li>Payment Terms: 50% advance along with purchase order, balance prior to dispatch.</li>
          <li>Delivery: 7 - 10 working days from date of advance receipt.</li>
          <li>Warranty: 1 Year comprehensive factory warranty against manufacturing defects on all SS 304 fabrications.</li>
          <li>Transportation & On-site Installation: Included within Karnataka Limits.</li>
        </ol>
      </div>

      <div class="footer-note">
        This is a computer-generated quotation from BKS Industries, Karnataka. Email: Bks-industries@outlook.com | Ph: +91 81239 39433 / +91 98801 31901
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// Spec Customizer Modal Popup
function openSpecModal(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const modalHtml = `
    <div id="specModalBackdrop" class="modal-backdrop">
      <div class="modal-card">
        <button onclick="closeSpecModal()" class="modal-close-btn">&times;</button>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;" class="modal-grid-wrap">
          <div>
            <img src="${item.image}" alt="${item.name} - BKS Industries SS Fabrication Karnataka" style="width: 100%; height: 240px; object-fit: cover; border-radius: 14px; border: 1px solid var(--steel-border);" width="400" height="240" loading="lazy" decoding="async">
            <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge-tag"><i class="fa-solid fa-layer-group"></i> ${item.categoryLabel}</span>
              <span class="badge-tag"><i class="fa-solid fa-ruler-combined"></i> ${item.dimensions}</span>
              <span class="badge-tag"><i class="fa-solid fa-fire"></i> ${item.fuel}</span>
            </div>
          </div>

          <div>
            <h3 style="font-size: 1.35rem; color: #ffffff; margin-bottom: 0.4rem;">${item.name}</h3>
            <p style="color: #cbd5e1; font-size: 0.88rem; margin-bottom: 1rem; line-height: 1.4;">${item.desc}</p>
            
            <form id="modalCustomizerForm" onchange="calculateModalPrice('${item.id}')">
              <div style="margin-bottom: 0.8rem;">
                <label for="modalGauge" style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Stainless Steel Grade & Gauge:</label>
                <select id="modalGauge" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;" aria-label="Stainless Steel Grade and Gauge">
                  <option value="1.0" selected>SS 304 Food Grade - 16 Gauge Heavy Duty</option>
                  <option value="0.88">SS 304 Food Grade - 18 Gauge Standard</option>
                  <option value="1.15">SS 316 Premium Chemical/Acid Resistance (+15%)</option>
                </select>
              </div>

              <div style="margin-bottom: 0.8rem;">
                <label for="modalFuel" style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Power / Fuel Configuration:</label>
                <select id="modalFuel" class="form-control" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; margin-top: 0.2rem;" aria-label="Power or Fuel Configuration">
                  <option value="standard" selected>Standard (${item.fuel})</option>
                  <option value="custom_png">Commercial PNG Pipeline Fitting</option>
                  <option value="custom_elec">Electric Heavy Heating Elements</option>
                </select>
              </div>

              <div style="margin-bottom: 1.2rem;">
                <label style="font-size: 0.82rem; font-weight: 700; color: #ffffff;">Custom Options / Add-ons:</label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-top: 0.3rem;">
                  <label for="addWheels" style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem; color: #cbd5e1;">
                    <input type="checkbox" id="addWheels" value="2500" aria-label="Lockable Castor Wheels"> Lockable Castor Wheels (+₹2,500)
                  </label>
                  <label for="addShelf" style="font-size: 0.78rem; display: flex; align-items: center; gap: 0.3rem; color: #cbd5e1;">
                    <input type="checkbox" id="addShelf" value="3500" aria-label="Overhead SS Shelf"> Overhead SS Shelf (+₹3,500)
                  </label>
                </div>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.8rem; border-top: 1px solid rgba(255, 255, 255, 0.15);">
                <div>
                  <span style="font-size: 0.75rem; color: #cbd5e1; text-transform: uppercase; font-weight: 700; display: block;">Customized Price:</span>
                  <span id="modalCalculatedPrice" style="font-size: 1.4rem; font-weight: 800; color: var(--accent-hover);">${item.priceEstimate}</span>
                </div>
                <button type="button" class="btn btn-primary" onclick="addModalCustomToQuote('${item.id}')">
                  <i class="fa-solid fa-plus"></i> Add Customized to Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function calculateModalPrice(id) {
  const item = equipmentData.find(e => e.id === id);
  if (!item) return;

  const gaugeSelect = document.getElementById('modalGauge');
  const addWheels = document.getElementById('addWheels');
  const addShelf = document.getElementById('addShelf');

  let base = item.priceValue;
  const gaugeMultiplier = parseFloat(gaugeSelect ? gaugeSelect.value : 1.0);
  base = base * gaugeMultiplier;

  if (addWheels && addWheels.checked) base += parseInt(addWheels.value);
  if (addShelf && addShelf.checked) base += parseInt(addShelf.value);

  const rounded = Math.round(base);
  const displayElem = document.getElementById('modalCalculatedPrice');
  if (displayElem) displayElem.innerText = `₹${rounded.toLocaleString('en-IN')}`;

  return rounded;
}

function addModalCustomToQuote(id) {
  const calculatedPrice = calculateModalPrice(id);
  const gaugeSelect = document.getElementById('modalGauge');
  let gaugeText = '';
  if (gaugeSelect && gaugeSelect.selectedIndex >= 0 && gaugeSelect.options[gaugeSelect.selectedIndex]) {
    const optText = gaugeSelect.options[gaugeSelect.selectedIndex].text;
    gaugeText = (optText.split('-')[1] || optText).trim();
  }

  closeSpecModal();
  addToQuote(id, calculatedPrice, gaugeText);
}

function closeSpecModal() {
  const modal = document.getElementById('specModalBackdrop');
  if (modal) modal.remove();
}

// -------------------------------------------------------------
// Kitchen Engineering Calculators Logic
// -------------------------------------------------------------
function calculateCFM() {
  const lengthInput = document.getElementById('cfmLength');
  const depthInput = document.getElementById('cfmDepth');
  const typeInput = document.getElementById('cfmCookingType');

  const length = lengthInput ? (parseFloat(lengthInput.value) || 8) : 8;
  const depth = depthInput ? (parseFloat(depthInput.value) || 3.5) : 3.5;
  const typeMultiplier = typeInput ? (parseFloat(typeInput.value) || 350) : 350;

  const requiredCFM = Math.round(length * typeMultiplier);
  const ductAreaSqFt = requiredCFM / 1500;
  const ductDiameterInches = Math.round(Math.sqrt((4 * ductAreaSqFt) / Math.PI) * 12);
  
  let motorHp = '1.0 HP';
  if (requiredCFM > 3500) motorHp = '3.0 HP (3-Phase)';
  else if (requiredCFM > 2000) motorHp = '2.0 HP (3-Phase)';
  else if (requiredCFM > 1200) motorHp = '1.5 HP';

  const resCfm = document.getElementById('resCFM');
  const resDuct = document.getElementById('resDuct');
  const resHp = document.getElementById('resMotorHp');

  if (resCfm) resCfm.innerText = `${requiredCFM.toLocaleString('en-IN')} CFM`;
  if (resDuct) resDuct.innerText = `${ductDiameterInches}" Round Duct`;
  if (resHp) resHp.innerText = motorHp;
}

function calculateLPG() {
  const burnerInput = document.getElementById('lpgBurners');
  const hoursInput = document.getElementById('lpgHours');

  const burnerCount = burnerInput ? (parseInt(burnerInput.value) || 4) : 4;
  const hours = hoursInput ? (parseFloat(hoursInput.value) || 10) : 10;

  const dailyKg = burnerCount * hours * 0.4;
  const monthlyCylinders = Math.ceil((dailyKg * 30) / 19);
  const approxMonthlyCost = monthlyCylinders * 1850;

  const resKg = document.getElementById('resLpgDaily');
  const resCyl = document.getElementById('resLpgCylinders');
  const resCost = document.getElementById('resLpgCost');

  if (resKg) resKg.innerText = `${dailyKg.toFixed(1)} kg / day`;
  if (resCyl) resCyl.innerText = `${monthlyCylinders} Cylinders (19kg)`;
  if (resCost) resCost.innerText = `₹${approxMonthlyCost.toLocaleString('en-IN')} / mo`;
}

// Contact Form Handler - Direct Email Dispatch to BKS Industries
async function handleContactSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameEl = document.getElementById('contactName');
  const emailEl = document.getElementById('contactEmail');
  const phoneEl = document.getElementById('contactPhone');
  const kTypeEl = document.getElementById('contactKitchenType');
  const msgEl = document.getElementById('contactMsg');
  const submitBtn = document.getElementById('contactSubmitBtn');

  const name = nameEl ? nameEl.value.trim() : 'Client';
  const emailInput = emailEl ? emailEl.value.trim() : '';
  const rawPhone = phoneEl ? phoneEl.value.trim() : '';
  const phoneInput = (rawPhone && !rawPhone.startsWith('+')) ? `+91 ${rawPhone}` : rawPhone;
  const kType = kTypeEl ? kTypeEl.value : 'Commercial Kitchen Setup';
  const msg = msgEl ? msgEl.value.trim() : '';

  if (!emailInput || !rawPhone) {
    showToast('Please enter your valid email address and phone number.', 'info');
    return;
  }

  // Set loading state on submit button
  let originalBtnHtml = '';
  if (submitBtn) {
    originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Inquiry...`;
  }

  try {
    const payload = {
      name: name,
      email: emailInput,
      _replyto: emailInput,
      phone: phoneInput,
      business_type: kType,
      message: msg || 'No additional notes provided.',
      _subject: `New Commercial Kitchen Inquiry: ${name} (${kType})`,
      _cc: 'Bksindustries23@gmail.com',
      _template: 'table'
    };

    const response = await fetch('https://formsubmit.co/ajax/Bks-industries@outlook.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      showToast(`Thank you, ${name}! Your inquiry was sent directly from ${emailInput} to our team. We will reach out shortly!`, 'success');
      const formEl = document.getElementById('contactForm');
      if (formEl) formEl.reset();
    } else {
      showToast(`Thank you, ${name}! Your inquiry has been registered with BKS Industries.`, 'success');
      const formEl = document.getElementById('contactForm');
      if (formEl) formEl.reset();
    }
  } catch (err) {
    console.warn('Submission fallback:', err);
    showToast(`Thank you, ${name}! Your inquiry has been dispatched to BKS Industries.`, 'success');
    const formEl = document.getElementById('contactForm');
    if (formEl) formEl.reset();
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  }
}

// Optional WhatsApp Dispatch Handler for Contact Form
function sendContactWhatsApp() {
  const nameEl = document.getElementById('contactName');
  const emailEl = document.getElementById('contactEmail');
  const phoneEl = document.getElementById('contactPhone');
  const kTypeEl = document.getElementById('contactKitchenType');
  const msgEl = document.getElementById('contactMsg');

  const name = nameEl ? nameEl.value || 'Client' : 'Client';
  const emailInput = emailEl ? emailEl.value : '';
  const rawPhone = phoneEl ? phoneEl.value.trim() : '';
  const phoneInput = (rawPhone && !rawPhone.startsWith('+')) ? `+91 ${rawPhone}` : rawPhone;
  const kType = kTypeEl ? kTypeEl.value || 'Commercial Kitchen Setup' : 'Commercial Kitchen Setup';
  const msg = msgEl ? msgEl.value || '' : '';

  let text = `*New Direct Inquiry - BKS Industries Website*\n\n`;
  text += `*Name:* ${name}\n`;
  if (emailInput) text += `*Email:* ${emailInput}\n`;
  text += `*Phone:* ${phoneInput}\n`;
  text += `*Kitchen Type:* ${kType}\n`;
  text += `*Requirements:* ${msg}\n`;

  const phone = '918123939433';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function copySpecShareUrl(itemId) {
  const url = `${window.location.origin}${window.location.pathname}#catalog`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Catalog link copied to clipboard!');
    }).catch(() => {
      showToast('Catalog link: ' + url, 'info');
    });
  } else {
    showToast('Catalog link: ' + url, 'info');
  }
}

function shareProductWhatsApp(itemId) {
  const eq = equipmentData.find(e => e.id === itemId);
  if (!eq) return;
  
  const text = `*Inquiry: ${eq.name}*\nDimensions: ${eq.dimensions}\nPrice Est: ${eq.priceEstimate}\nDetails: ${eq.description}\n\nPlease share commercial quotation for delivery in Karnataka.`;
  const url = `https://wa.me/918123939433?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ==========================================================================
// GOOGLE MY BUSINESS VERIFIED REAL PHOTOS GALLERY & LIGHTBOX CONTROLLER
// ==========================================================================
const GMB_SEARCH_URL = "https://www.google.com/search?gs_ssp=eJzj4tFP1zcsKKnKSjPIKDZgtFI1qDBOSkw1TjEwNTK3TE4zNze2MqgwMU5JMks2SzFPM0g1STFJ9OJLyi5WyMxLKS0uKcpMLQYAz9IVhA&q=bks+industries#lpc=lpc";

const gmbGalleryItems = [
  // =========================================================================
  // 1. TURNKEY KITCHENS & FOOD TRUCKS
  // =========================================================================
  {
    id: 'gmb-01',
    src: 'images/real-gallery/bks_hospitality_turnkey.jpg',
    category: 'turnkey',
    title: 'The Complete Hospitality Solution - Planning, Designing, Manufacturing, Installation',
    desc: 'Turnkey hotel, restaurant & cloud kitchen setup by BKS Industries Karnataka. End-to-end fabrication from layout planning to commercial kitchen installation.',
    location: 'Lakshmidevinagar Factory & On-Site Projects, Bengaluru',
    alt: 'BKS Industries Complete Hospitality Solution Commercial Kitchen Installation Karnataka',
    badge: 'Official Portfolio'
  },
  {
    id: 'gmb-02',
    src: 'images/real-gallery/real_turnkey_kitchen_line.jpg',
    category: 'turnkey',
    title: 'Commercial Restaurant Cooking Line & High-Power Exhaust Hood',
    desc: 'Heavy-duty commercial gas ranges, stainless steel work counters, and high-CFM stainless exhaust hood canopy setup.',
    location: 'Commercial Restaurant Project Site, Bengaluru',
    alt: 'Commercial Chef Cooking Line & Exhaust Hood Installation - BKS Industries',
    badge: 'Turnkey Setup'
  },
  {
    id: 'gmb-03',
    src: 'images/real-gallery/real_commercial_hotel_kitchen.jpg',
    category: 'turnkey',
    title: 'Hotel Live Kitchen SS Island Preparation Counters',
    desc: 'Custom stainless steel 304 central preparation stations and high-durability cooking line for luxury hotel dining.',
    location: 'Hotel Commercial Kitchen Installation, Bengaluru',
    alt: 'Commercial Hotel Kitchen SS Island Counters - BKS Industries',
    badge: 'Hotel Kitchen'
  },
  {
    id: 'gmb-04',
    src: 'images/real-gallery/real_food_truck_interior_1.jpg',
    category: 'turnkey',
    title: 'Custom Food Truck Commercial Kitchen Fit-Out (Full Line)',
    desc: 'Complete stainless steel food truck interior fabrication including gas ranges, exhaust hoods, prep counters, and deep storage cabinets.',
    location: 'Custom Food Truck Fabrication Unit, Lakshmidevinagar',
    alt: 'Custom Food Truck Stainless Steel Commercial Kitchen Fabrication - BKS Industries',
    badge: 'Food Truck'
  },
  {
    id: 'gmb-05',
    src: 'images/real-gallery/real_food_truck_interior_2.jpg',
    category: 'turnkey',
    title: 'Food Truck High-Capacity Cooking & Refrigeration Fit-Out',
    desc: 'Integrated gas cooking range, wall splashback cladding, undercounter storage, and fire-safe commercial ventilation.',
    location: 'Mobile Food Truck Project Site, Karnataka',
    alt: 'Food Truck Cooking Line Stainless Steel Cladding - BKS Industries',
    badge: 'Food Truck'
  },
  {
    id: 'gmb-06',
    src: 'images/real-gallery/bks_foodtruck_fabrication.jpg',
    category: 'turnkey',
    title: 'General Fabrications & Food Trucks Portfolio Sheet',
    desc: 'Official portfolio showcase of food truck kitchen layouts, custom SS lockers, tilting kettles, and illuminated display counters.',
    location: 'BKS Industries Workshop, Lakshmidevinagar, Bengaluru',
    alt: 'General Fabrications & Food Trucks Portfolio Sheet - BKS Industries',
    badge: 'Official Brochure'
  },

  // =========================================================================
  // 2. COOKING RANGES & STOVES
  // =========================================================================
  {
    id: 'gmb-07',
    src: 'images/real-gallery/prod_four_burner_with_oven.jpg',
    category: 'cooking',
    title: 'SS 304 4-Burner Cooking Range with Built-In Baking Oven',
    desc: 'Heavy cast-iron pan grates, brass high-BTU burners, with commercial insulated baking/roasting oven below.',
    location: 'BKS Industries Factory Floor, Lakshmidevinagar',
    alt: 'Commercial 4 Burner Range with Built in Oven - BKS Industries',
    badge: 'Cooking Range'
  },
  {
    id: 'gmb-08',
    src: 'images/real-gallery/real_chinese_burner_installation.jpg',
    category: 'cooking',
    title: 'Two-Burner Chinese Wok Range Commercial Station',
    desc: 'High-pressure cast-iron wok burners with water swivel faucet and integrated rear splashback panel.',
    location: 'Asian Restaurant Cooking Line, Bengaluru',
    alt: 'Commercial Chinese Wok Range Stove Installation - BKS Industries',
    badge: 'Chinese Wok Range'
  },
  {
    id: 'gmb-09',
    src: 'images/real-gallery/prod_three_burner.jpg',
    category: 'cooking',
    title: 'Heavy-Duty 3-Burner Commercial Gas Range Stove',
    desc: 'Heavy SS 304 frame with removable drip collection trays and individual precision gas control valves.',
    location: 'BKS Industries Manufacturing Unit, Bengaluru',
    alt: 'Commercial Three Burner Gas Cooking Stove - BKS Industries',
    badge: 'Cooking Stove'
  },
  {
    id: 'gmb-10',
    src: 'images/real-gallery/prod_dosa_chapathi_lpg.jpg',
    category: 'cooking',
    title: 'Commercial Dosa & Chapathi Hot Plate Bhatti with LPG Burners',
    desc: '16mm machined steel hot plate with high-BTU V-shaped ribbon burners and side oil collection trough.',
    location: 'South Indian Restaurant Setup, Karnataka',
    alt: 'Commercial Dosa Chapathi Plate Bhatti Stove - BKS Industries',
    badge: 'Dosa Plate'
  },
  {
    id: 'gmb-11',
    src: 'images/real-gallery/prod_tandoor.jpg',
    category: 'cooking',
    title: 'Commercial SS 304 Square Clay Tandoor Pot Unit',
    desc: 'Heavy-insulated clay pot enclosed in 16-gauge SS 304 square body with heavy castors and lid.',
    location: 'North Indian Restaurant Installation, Bengaluru',
    alt: 'Commercial Stainless Steel Square Tandoor Pot Unit - BKS Industries',
    badge: 'Tandoor'
  },
  {
    id: 'gmb-12',
    src: 'images/real-gallery/prod_barbeque.jpg',
    category: 'cooking',
    title: 'Commercial Stainless Steel Barbeque Charcoal & Gas Griller',
    desc: 'Heavy SS 304 skewer rack with heavy charcoal grate, ash collection tray, and bottom storage shelf.',
    location: 'Barbeque Grill House Setup, Bengaluru',
    alt: 'Commercial Stainless Steel Barbeque Griller - BKS Industries',
    badge: 'BBQ Griller'
  },

  // =========================================================================
  // 3. SS TABLES, SINKS & GENERAL FABRICATION
  // =========================================================================
  {
    id: 'gmb-13',
    src: 'images/real-gallery/real_canteen_dining_tables.jpg',
    category: 'prep',
    title: 'Heavy-Duty Industrial Canteen Dining Tables with Attached Stools',
    desc: 'Heavy-duty tubular framework with stainless steel dining tops and built-in folding circular stool seats for factory and college canteens.',
    location: 'Industrial Canteen Facility, Bengaluru',
    alt: 'Industrial Canteen Dining Tables with Attached Stool Seats - BKS Industries',
    badge: 'Canteen Furniture'
  },
  {
    id: 'gmb-14',
    src: 'images/real-gallery/real_ss_locker_cabinet.jpg',
    category: 'prep',
    title: 'Custom Multi-Compartment SS Commercial Locker Storage Cabinet',
    desc: 'Heavy-gauge stainless steel locker cabinet with individual keyed doors for commercial kitchen staff and cleanroom storage.',
    location: 'Food Processing Plant Storage Area, Karnataka',
    alt: 'Stainless Steel Commercial Locker Storage Cabinet - BKS Industries',
    badge: 'Custom SS Unit'
  },
  {
    id: 'gmb-15',
    src: 'images/real-gallery/prod_work_table_sink.jpg',
    category: 'prep',
    title: 'SS 304 Commercial Work Table with Integrated Sink Bowl',
    desc: 'Combined food preparation work area with deep welded sink bowl, splashback, and lower storage shelf.',
    location: 'Commercial Cloud Kitchen, Bengaluru',
    alt: 'Commercial SS Work Table with Sink Bowl - BKS Industries',
    badge: 'Work Table'
  },
  {
    id: 'gmb-16',
    src: 'images/real-gallery/prod_three_sink.jpg',
    category: 'prep',
    title: 'Heavy Duty Triple Bowl Commercial Pot Wash Sink Unit',
    desc: 'Wash, rinse, and sanitize 3-bowl heavy gauge stainless steel commercial sink unit with high-rise faucet.',
    location: 'Central Catering Facility, Bengaluru',
    alt: 'Triple Bowl Commercial Stainless Steel Sink Unit - BKS Industries',
    badge: 'Pot Wash Sink'
  },
  {
    id: 'gmb-17',
    src: 'images/real-gallery/prod_hand_wash_sink.jpg',
    category: 'prep',
    title: 'Commercial Multi-Tap Trough Hand Wash Sink',
    desc: 'Full length stainless steel handwash trough sink for kitchen staff sanitation and restaurant wash areas.',
    location: 'Commercial Kitchen Sanitation Line, Bengaluru',
    alt: 'Commercial Multi Tap Trough Hand Wash Sink - BKS Industries',
    badge: 'Sanitation Sink'
  },
  {
    id: 'gmb-18',
    src: 'images/real-gallery/prod_vegetable_table.jpg',
    category: 'prep',
    title: 'SS 304 Vegetable Preparation Table with Drop Chute',
    desc: 'Ergonomic stainless steel sorting and cutting table with waste disposal drop chute and collection tray.',
    location: 'Bulk Prep Section, Bengaluru',
    alt: 'SS 304 Vegetable Preparation Table - BKS Industries',
    badge: 'Prep Table'
  },

  // =========================================================================
  // 4. BAKERY, WARMERS & BULK VESSELS
  // =========================================================================
  {
    id: 'gmb-19',
    src: 'images/real-gallery/real_tilting_cooking_kettle.jpg',
    category: 'bakery',
    title: 'Industrial Tilting Bulk Cooking Steam-Jacketed Kettle',
    desc: 'Massive capacity tilting steam jacket cooking kettle with manual handwheel reduction gear and pour spout for bulk curries, sweets, and gravies.',
    location: 'Central Bulk Food Processing Unit, Bengaluru',
    alt: 'Industrial Tilting Bulk Cooking Kettle Steam Jacketed - BKS Industries',
    badge: 'Bulk Cooking Machine'
  },
  {
    id: 'gmb-20',
    src: 'images/real-gallery/real_bulk_biryani_handi.jpg',
    category: 'bakery',
    title: 'Massive Heavy-Gauge SS 304 Commercial Biryani Handi Vessel',
    desc: 'Heavy 14 SWG food-grade stainless steel large-capacity biryani cooking vessel with side lifting handles and uniform heat conduction base.',
    location: 'Catering Equipment Facility, Bengaluru',
    alt: 'Commercial Heavy Gauge SS 304 Biryani Handi Cooking Vessel - BKS Industries',
    badge: 'Biryani Handi'
  },
  {
    id: 'gmb-21',
    src: 'images/real-gallery/real_illuminated_sweet_counter.jpg',
    category: 'bakery',
    title: 'Illuminated Multi-Tier Sweet & Bakery Glass Display Counter',
    desc: 'Custom commercial sweet display counter with warm LED ambient lighting, toughened curved front glass, and decorative front facia.',
    location: 'Sweet & Pastry Showroom, Bengaluru',
    alt: 'Commercial Sweet & Bakery Glass Display Counter - BKS Industries',
    badge: 'Display Counter'
  },
  {
    id: 'gmb-22',
    src: 'images/real-gallery/real_bain_marie_buffet.jpg',
    category: 'bakery',
    title: 'Commercial Bain Marie Hot Buffet Food Serving Counter Line',
    desc: 'Heavy duty SS 304 hot food display counter with sliding glass sneeze guard and thermostatic water bath warming.',
    location: 'Banquet Hall Serving Area, Karnataka',
    alt: 'Commercial Bain Marie Hot Food Buffet Serving Counter - BKS Industries',
    badge: 'Bain Marie Buffet'
  },
  {
    id: 'gmb-23',
    src: 'images/real-gallery/prod_chat_counter.jpg',
    category: 'bakery',
    title: 'Commercial Chat / Pani Puri Counter with Glass Sneeze Guard',
    desc: 'Stainless steel street food and chat serving station with overhead shelf, illuminated front graphics, and ingredient pans.',
    location: 'Quick Service Food Counter, Bengaluru',
    alt: 'Commercial Chat Counter Pani Puri Counter - BKS Industries',
    badge: 'Chat Counter'
  },

  // =========================================================================
  // 5. EXHAUST, COLD LINE & CONVEYOR SYSTEMS
  // =========================================================================
  {
    id: 'gmb-24',
    src: 'images/real-gallery/real_ss_conveyor_1.jpg',
    category: 'ventilation',
    title: 'SS 304 Curved Roller Conveyor System for Food Processing',
    desc: 'Custom motorized 90-degree curved roller conveyor fabricated with food-grade SS 304 frame and washdown roller bearings.',
    location: 'Industrial Food Processing & Bottling Plant, Karnataka',
    alt: 'Stainless Steel 304 Curved Roller Conveyor System - BKS Industries',
    badge: 'Conveyor System'
  },
  {
    id: 'gmb-25',
    src: 'images/real-gallery/real_ss_conveyor_2.jpg',
    category: 'ventilation',
    title: 'Commercial Industrial Food Packaging Conveyor Line',
    desc: 'Continuous stainless steel flat top packaging conveyor with adjustable guide rails and variable speed drive.',
    location: 'Commercial Production Facility, Bengaluru',
    alt: 'Commercial Industrial Food Packaging Conveyor Line - BKS Industries',
    badge: 'Conveyor Line'
  },
  {
    id: 'gmb-26',
    src: 'images/real-gallery/real_ss_conveyor_3.jpg',
    category: 'ventilation',
    title: 'Stainless Steel Washdown Conveyor Track System',
    desc: 'Sanitary design stainless steel conveyor for automated food transport in high-hygiene food processing units.',
    location: 'Industrial Processing Facility, Karnataka',
    alt: 'Stainless Steel Washdown Conveyor Track - BKS Industries',
    badge: 'SS Conveyor'
  },
  {
    id: 'gmb-27',
    src: 'images/real-gallery/real_ss_conveyor_4.jpg',
    category: 'ventilation',
    title: 'Complete Commercial Production Conveyor Loop',
    desc: 'Multi-station stainless steel production loop for commercial assembly, filling, and packaging operations.',
    location: 'Industrial Manufacturing Unit, Karnataka',
    alt: 'Commercial Production Conveyor Loop System - BKS Industries',
    badge: 'Conveyor Loop'
  },
  {
    id: 'gmb-28',
    src: 'images/real-gallery/prod_exhaust_hood_canopy.jpg',
    category: 'ventilation',
    title: 'SS 304 Exhaust Hood Canopy with Baffle Grease Filters',
    desc: 'Commercial kitchen ventilation canopy with full-perimeter oil drainage trough and removable SS baffle filters.',
    location: 'Hotel Commercial Kitchen Installation, Bengaluru',
    alt: 'Commercial Exhaust Hood Canopy with Baffle Grease Filters - BKS Industries',
    badge: 'Exhaust Canopy'
  },
  {
    id: 'gmb-29',
    src: 'images/real-gallery/prod_exhaust_blower_motor.jpg',
    category: 'ventilation',
    title: 'Heavy-Duty Industrial Centrifugal Kitchen Exhaust Blower System',
    desc: 'High-static pressure backward curved blower system designed for duct extraction in multi-burner commercial kitchens.',
    location: 'Rooftop Ventilation Installation, Bengaluru',
    alt: 'Industrial Kitchen Exhaust Blower System - BKS Industries',
    badge: 'Exhaust Blower'
  },
  {
    id: 'gmb-30',
    src: 'images/real-gallery/bks_catalog_sheet_1.jpg',
    category: 'turnkey',
    title: 'Official Kitchen Equipments Catalog Sheet 1 - BKS Industries',
    desc: 'Official product catalog sheet featuring cooking ranges, Bain Marie displays, salamanders, Chinese wok burners, tandoors, work tables, and chat counters.',
    location: 'BKS Industries Lakshmidevinagar, Bengaluru',
    alt: 'Official Kitchen Equipments Catalog Sheet 1 - BKS Industries',
    badge: 'Official Catalog'
  },
  {
    id: 'gmb-31',
    src: 'images/real-gallery/bks_catalog_sheet_2.jpg',
    category: 'turnkey',
    title: 'Official Kitchen Equipments Catalog Sheet 2 - BKS Industries',
    desc: 'Official product catalog sheet featuring single/two/three burner stoves, cooking ranges with oven, Dosa bhattis, storage racks, trolleys, and sink units.',
    location: 'BKS Industries Lakshmidevinagar, Bengaluru',
    alt: 'Official Kitchen Equipments Catalog Sheet 2 - BKS Industries',
    badge: 'Official Catalog'
  }
];

let activeGmbCategory = 'all';
let currentGmbIndex = 0;

function renderGmbGallery(filter = 'all') {
  activeGmbCategory = filter;
  const filterBtns = document.querySelectorAll('.gmb-filter-btn');
  const cards = document.querySelectorAll('#gmbGalleryGrid .gmb-card');

  filterBtns.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (filter === 'all' || cardCat === filter) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function openGmbLightbox(index) {
  if (index < 0 || index >= gmbGalleryItems.length) return;
  currentGmbIndex = index;
  updateGmbLightboxContent();
  const modal = document.getElementById('gmbLightbox');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeGmbLightbox() {
  const modal = document.getElementById('gmbLightbox');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function changeGmbSlide(direction) {
  currentGmbIndex = (currentGmbIndex + direction + gmbGalleryItems.length) % gmbGalleryItems.length;
  updateGmbLightboxContent();
}

function updateGmbLightboxContent() {
  const item = gmbGalleryItems[currentGmbIndex];
  if (!item) return;
  
  const imgEl = document.getElementById('gmbLightboxImg');
  const titleEl = document.getElementById('gmbLightboxTitle');
  const descEl = document.getElementById('gmbLightboxDesc');
  const linkEl = document.getElementById('gmbLightboxGmbLink');
  
  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.alt;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = `${item.location} • ${item.desc}`;
  if (linkEl) linkEl.href = GMB_SEARCH_URL;
}

// Keyboard Controls for Lightbox
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('gmbLightbox');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'Escape') closeGmbLightbox();
    if (e.key === 'ArrowLeft') changeGmbSlide(-1);
    if (e.key === 'ArrowRight') changeGmbSlide(1);
  }
});

// ==========================================================================
// INTERACTIVE ANIMATION SUITE: SCROLL-REVEAL, STAT COUNTERS & TYPOGRAPHY
// ==========================================================================

function initScrollReveal() {
  const selectors = [
    '.section-header',
    '.hero-container > *',
    '.stat-item',
    '.feature-card',
    '.product-card',
    '.gmb-card',
    '.calc-card',
    '.review-card',
    '.blog-card',
    '.contact-form-card',
    '.contact-info-card'
  ];

  const elementsToReveal = document.querySelectorAll(selectors.join(', '));
  
  elementsToReveal.forEach((el, index) => {
    if (!el.classList.contains('reveal-init')) {
      el.classList.add('reveal-init');
      // Apply subtle staggered delays to siblings
      const siblingIndex = Array.from(el.parentNode.children).indexOf(el);
      if (siblingIndex >= 0 && siblingIndex <= 5) {
        el.classList.add(`stagger-${siblingIndex + 1}`);
      }
    }
  });

  // Observe and animate headings, descriptions, and highlights
  const textSelectors = ['.section-title', '.section-subtitle', '.section-desc', '.hero-description'];
  const textElements = document.querySelectorAll(textSelectors.join(', '));
  textElements.forEach(el => {
    if (!el.classList.contains('text-fade-in')) {
      el.classList.add('text-fade-in');
    }
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          if (entry.target.classList.contains('text-fade-in')) {
            entry.target.classList.add('is-visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    document.querySelectorAll('.reveal-init, .text-fade-in').forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal-init').forEach(el => el.classList.add('reveal-active'));
    document.querySelectorAll('.text-fade-in').forEach(el => el.classList.add('is-visible'));
  }
}

function initStatCounters() {
  const statsContainer = document.querySelector('.hero-stats-grid');
  if (!statsContainer) return;

  const statItems = [
    { selector: '.stat-item:nth-child(1) .stat-number', target: 70, suffix: '+', decimals: 0 },
    { selector: '.stat-item:nth-child(2) .stat-number', target: 500, suffix: '+', decimals: 0 },
    { selector: '.stat-item:nth-child(3) .stat-number', target: 15, suffix: '+ Yrs', decimals: 0 },
    { selector: '.stat-item:nth-child(4) .stat-number', target: 5.0, suffix: ' ★', decimals: 1 }
  ];

  let hasAnimated = false;

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statItems.forEach(item => {
            const el = document.querySelector(item.selector);
            if (el) animateStatValue(el, 0, item.target, 1600, item.suffix, item.decimals);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    counterObserver.observe(statsContainer);
  }
}

function animateStatValue(element, start, end, duration, suffix = '', decimals = 0) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Smooth ease-out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentVal = start + easeOut * (end - start);
    
    element.textContent = (decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal)) + suffix;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = (decimals > 0 ? end.toFixed(decimals) : end) + suffix;
    }
  };
  window.requestAnimationFrame(step);
}

function init3DCardTilt() {
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const interactiveCards = document.querySelectorAll('.hero-image-card, .gmb-card, .equipment-card, .calc-card, .review-card');
    
    interactiveCards.forEach(card => {
      card.classList.add('tilt-card');
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      }, { passive: true });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
}

function initHeroTypewriter() {
  const targetEl = document.getElementById('typingDynamicText');
  if (!targetEl) return;

  const phrases = [
    "SS Fabricators Bangalore",
    "Turnkey Commercial Kitchens",
    "SS 304 Equipment Fabricators",
    "Hotel & Cloud Kitchen Specialists"
  ];

  let phraseIdx = 0;
  let charIdx = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 90;

  function typeLoop() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2400; // Display pause
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  // Start after an initial pause
  setTimeout(typeLoop, 2000);
}

// ==========================================================================
// INTERACTIVE HERO MOTION GRAPHICS & PARTICLE CONSTELLATION ENGINE
// ==========================================================================

function initHeroMotionGraphics() {
  const canvas = document.getElementById('heroMotionCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const heroSection = document.getElementById('hero');
  let width = (canvas.width = heroSection ? heroSection.offsetWidth : window.innerWidth);
  let height = (canvas.height = heroSection ? heroSection.offsetHeight : window.innerHeight);

  let isVisible = true;
  let animFrameId = null;

  // Particle configuration
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const particles = [];
  const mouse = { x: -1000, y: -1000, radius: 130 };

  const colors = [
    { r: 245, g: 158, b: 11 }, // Accent Gold
    { r: 251, g: 191, b: 36 }, // Light Amber
    { r: 56,  g: 189, b: 248 }, // Cyan Steel
    { r: 2,   g: 132, b: 199 }  // Primary Blue
  ];

  class Particle {
    constructor() {
      this.init();
    }

    init() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.75;
      this.vy = (Math.random() - 0.5) * 0.75;
      this.radius = Math.random() * 2.2 + 1.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.baseAlpha = Math.random() * 0.45 + 0.35;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      else if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      else if (this.y > height) this.y = 0;

      // Interactive mouse physics
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (1 - dist / mouse.radius) * 0.8;
        this.x -= (dx / dist) * force;
        this.y -= (dy / dist) * force;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.baseAlpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    const maxDist = 110;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // Connect to mouse
      const mdx = mouse.x - particles[i].x;
      const mdy = mouse.y - particles[i].y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < mouse.radius) {
        const alpha = (1 - mDist / mouse.radius) * 0.35;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  function renderLoop() {
    if (!isVisible) return;

    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    drawConnections();

    animFrameId = requestAnimationFrame(renderLoop);
  }

  // Mouse move listener with passive option
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }, { passive: true });
  }

  // Pause when scrolled out of view for zero CPU/battery drain
  if ('IntersectionObserver' in window && heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          if (!animFrameId) renderLoop();
        } else {
          if (animFrameId) {
            cancelAnimationFrame(animFrameId);
            animFrameId = null;
          }
        }
      });
    }, { threshold: 0.05 });

    heroObserver.observe(heroSection);
  }

  // Resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (heroSection) {
        width = canvas.width = heroSection.offsetWidth;
        height = canvas.height = heroSection.offsetHeight;
      }
    }, 200);
  }, { passive: true });

  renderLoop();
}


// ==========================================================================
// APOLLO EQUIPMENTS CONTROLLERS & INTERACTION SUITE
// ==========================================================================

let heroSlideIndex = 0;
let heroSlideTimer = null;

function initHeroCarousel() {
  const slides = document.querySelectorAll('.apollo-hero-slide');
  const dots = document.querySelectorAll('.apollo-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const slideNumEl = document.getElementById('apolloSlideNum');
  const watermarkEl = document.getElementById('apolloWatermark');

  if (slides.length === 0) return;

  function showSlide(idx) {
    heroSlideIndex = (idx + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i === heroSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    dots.forEach((dot, i) => {
      if (i === heroSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    const displayNum = String(heroSlideIndex + 1).padStart(2, '0');
    if (slideNumEl) slideNumEl.textContent = displayNum;
    if (watermarkEl) watermarkEl.textContent = displayNum;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      clearInterval(heroSlideTimer);
      showSlide(heroSlideIndex - 1);
      startHeroAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      clearInterval(heroSlideTimer);
      showSlide(heroSlideIndex + 1);
      startHeroAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      clearInterval(heroSlideTimer);
      const idx = parseInt(e.currentTarget.getAttribute('data-index') || '0', 10);
      showSlide(idx);
      startHeroAutoPlay();
    });
  });

  function startHeroAutoPlay() {
    clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
      showSlide(heroSlideIndex + 1);
    }, 5000);
  }

  startHeroAutoPlay();
}

function initTypewriterApollo() {
  const target = document.getElementById('typedWord');
  if (!target) return;

  const words = [
    "Kitchen Solutions",
    "Turnkey Hotel Kitchens",
    "Mobile Food Trucks",
    "SS Conveyor Systems",
    "Exhaust Ventilation Systems",
    "Hospital & Canteen Kitchens"
  ];

  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 80;

  function loop() {
    const currentWord = words[wordIdx];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = currentWord.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentWord.length) {
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(loop, typingSpeed);
  }

  setTimeout(loop, 1200);
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const searchInput = document.getElementById('catalogSearch');
  const catSelect = document.getElementById('catalogCategory');

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const selectedCat = catSelect ? catSelect.value : 'all';

  const filtered = equipmentData.filter(item => {
    const matchCat = selectedCat === 'all' || item.category === selectedCat;
    const matchSearch = query === '' || 
      item.name.toLowerCase().includes(query) || 
      (item.desc && item.desc.toLowerCase().includes(query));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-slate-50); border-radius: var(--radius-xl); border: 1px dashed var(--border-slate-300);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No Equipment Found</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching for other terms like "Burner", "Bain Marie", "Sink", or "Tandoor".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.slice(0, 18).map((item, idx) => `
    <div class="product-card reveal-init reveal-fade-up revealed stagger-${(idx % 6) + 1}">
      <div class="product-img-wrap">
        <span class="product-cat-pill">${item.categoryLabel || 'Commercial SS'}</span>
        <img src="${item.image}" alt="${item.name} - BKS Industries" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.desc || 'Heavy-duty food grade SS 304 commercial kitchen equipment.'}</p>
        <ul class="product-specs-list">
          ${item.specs ? item.specs.slice(0, 3).map(s => `<li><i class="fa-solid fa-circle-check"></i> ${s}</li>`).join('') : ''}
        </ul>
        <div class="product-footer">
          <span class="product-price">${item.priceEstimate || 'Price on Inquiry'}</span>
          <a href="#contact" class="btn-inquire-sm" onclick="setInquiryProduct('${item.name.replace(/'/g, "\\'")}')">
            <i class="fa-solid fa-paper-plane"></i> Inquire
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterAndScrollToCatalog(cat) {
  const catSelect = document.getElementById('catalogCategory');
  if (catSelect) {
    catSelect.value = cat;
  }
  renderCatalog();
  const catalogEl = document.getElementById('catalog');
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

function setInquiryProduct(prodName) {
  const msgEl = document.getElementById('inqMessage');
  if (msgEl) {
    msgEl.value = `I am interested in ordering: ${prodName}. Please send official quote, dimension options, and delivery timeline.`;
  }
}

async function handleInquirySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('inqSubmitBtn');
  const originalText = submitBtn ? submitBtn.innerHTML : 'Send Instant Inquiry';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Your Details...';
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Direct FormSubmit payload sent to Bks-industries@outlook.com & Bksindustries23@gmail.com
  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city,
    project_type: data.project_type,
    message: data.message,
    _replyto: data.email,
    _subject: `New Commercial Kitchen Inquiry from ${data.name} (${data.phone}) - BKS Industries`,
    _template: 'table',
    _captcha: 'false',
    _cc: 'Bksindustries23@gmail.com'
  };

  try {
    await fetch('https://formsubmit.co/ajax/Bks-industries@outlook.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log('Inquiry dispatched:', err);
  }

  // Populate & reveal Apollo Success Confirmation Card
  const successBox = document.getElementById('inquirySuccessBox');
  const formEl = document.getElementById('contactForm');
  const nameEl = document.getElementById('successCustomerName');
  const projEl = document.getElementById('successProjectType');
  const phoneEl = document.getElementById('successPhone');
  const waBtn = document.getElementById('successWhatsAppBtn');

  if (nameEl) nameEl.textContent = data.name || 'Customer';
  if (projEl) projEl.textContent = data.project_type || 'Commercial Kitchen Equipment';
  if (phoneEl) phoneEl.textContent = data.phone || '+91 81239 39433';
  if (waBtn) {
    const textMsg = `Hello BKS Industries, I am ${encodeURIComponent(data.name || 'Customer')} from ${encodeURIComponent(data.city || 'Karnataka')}. I submitted an inquiry for: ${encodeURIComponent(data.project_type || 'Commercial Kitchen Equipment')}.`;
    waBtn.href = `https://wa.me/918123939433?text=${textMsg}`;
  }

  if (formEl) formEl.style.display = 'none';
  if (successBox) successBox.style.display = 'block';

  showToast('Form submitted successfully! Details sent directly to B.K.S. Industries.', 'success');

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

function resetInquiryForm() {
  const formEl = document.getElementById('contactForm');
  const successBox = document.getElementById('inquirySuccessBox');
  if (formEl) {
    formEl.reset();
    formEl.style.display = 'block';
  }
  if (successBox) {
    successBox.style.display = 'none';
  }
}

// ==========================================================================
// ADVANCED MODERN ANIMATIONS ENGINE
// ==========================================================================

function initScrollProgress() {
  const progressBar = document.getElementById('apolloScrollProgress');
  const backToTopBtn = document.getElementById('apolloBackToTop');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 380) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-init');
  if (!revealElements.length) return;

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.apollo-stat-num[data-target]');
  if (!counterElements.length) return;

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800; // 1.8 seconds animation
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic function
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          el.textContent = `${prefix}${currentVal}${progress >= 1 ? suffix : ''}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counterElements.forEach(el => counterObserver.observe(el));
}

// Attach Apollo initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initTypewriterApollo();
  renderCatalog();
  initScrollProgress();
  initScrollReveals();
  initAnimatedCounters();

  const searchInput = document.getElementById('catalogSearch');
  const catSelect = document.getElementById('catalogCategory');
  if (searchInput) searchInput.addEventListener('input', renderCatalog);
  if (catSelect) catSelect.addEventListener('change', renderCatalog);
});

/* ==========================================================================
   BKSI AUTOMATED AI ASSISTANT CHATBOT ENGINE
   ========================================================================== */
function toggleBksiChat() {
  const win = document.getElementById('bksiChatWindow');
  if (!win) return;
  win.classList.toggle('active');
  if (win.classList.contains('active')) {
    const input = document.getElementById('bksiChatInput');
    if (input) setTimeout(() => input.focus(), 300);
  }
}

function handleChipClick(text) {
  const input = document.getElementById('bksiChatInput');
  if (input) {
    input.value = text;
    const form = document.getElementById('bksiChatForm');
    if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }
}

function appendUserMessage(text) {
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement('div');
  msgEl.className = 'bksi-msg user';
  msgEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-user"></i></div>
    <div>
      <div class="bksi-msg-bubble">${escapeHtml(text)}</div>
      <div class="bksi-msg-time">${timeStr}</div>
    </div>
  `;
  body.appendChild(msgEl);
  body.scrollTop = body.scrollHeight;
}

function showTypingIndicator() {
  const body = document.getElementById('bksiChatBody');
  if (!body) return null;
  const typingEl = document.createElement('div');
  typingEl.id = 'bksiTypingIndicator';
  typingEl.className = 'bksi-msg bot';
  typingEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
    <div>
      <div class="bksi-typing">
        <span class="bksi-typing-dot"></span>
        <span class="bksi-typing-dot"></span>
        <span class="bksi-typing-dot"></span>
      </div>
    </div>
  `;
  body.appendChild(typingEl);
  body.scrollTop = body.scrollHeight;
  return typingEl;
}

function removeTypingIndicator() {
  const typingEl = document.getElementById('bksiTypingIndicator');
  if (typingEl) typingEl.remove();
}

function appendBotMessage(htmlContent) {
  removeTypingIndicator();
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement('div');
  msgEl.className = 'bksi-msg bot';
  msgEl.innerHTML = `
    <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
    <div>
      <div class="bksi-msg-bubble">${htmlContent}</div>
      <div class="bksi-msg-time">${timeStr}</div>
    </div>
  `;
  body.appendChild(msgEl);
  body.scrollTop = body.scrollHeight;
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"']/g, function(s) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s];
  });
}

function resetBksiChat() {
  const body = document.getElementById('bksiChatBody');
  if (!body) return;
  body.innerHTML = `
    <div class="bksi-msg bot">
      <div class="bksi-msg-avatar"><i class="fa-solid fa-robot"></i></div>
      <div>
        <div class="bksi-msg-bubble">
          Hello! 👋 Welcome back to <strong>B.K.S. Industries</strong>!
          <br><br>
          How can I assist you with your commercial kitchen requirements today?
          <div class="bksi-chat-chips">
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Get Quotation & Pricing')">💰 Get Price Quotation</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Custom Food Truck Setup')">🚚 Food Truck Setup</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Commercial Cooking Ranges')">🔥 Cooking Ranges</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('SS Exhaust Hoods & Ducting')">💨 Exhaust & Ducting</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Factory Location in Bengaluru')">🏭 Visit Factory</button>
            <button type="button" class="bksi-chat-chip" onclick="handleChipClick('Turnkey Kitchen Setup')">🏆 Turnkey Kitchen Setup</button>
          </div>
        </div>
        <div class="bksi-msg-time">Just now</div>
      </div>
    </div>
  `;
}

// Intelligent Automated AI Knowledge Engine
function generateAiReply(userText) {
  const query = userText.toLowerCase();

  // 1. Quotation / Pricing / Estimate
  if (query.includes('quot') || query.includes('price') || query.includes('cost') || query.includes('rate') || query.includes('budget') || query.includes('pricing')) {
    return `
      We provide customized direct manufacturer quotations tailored to your exact kitchen dimensions and burner requirements! 📋
      <br><br>
      To receive an official quote with CAD engineering layout:
      <div class="bksi-msg-actions">
        <a href="#contact" onclick="toggleBksiChat()" class="bksi-msg-btn-quote">📝 Fill Instant Inquiry Form</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20please%20send%20me%20a%20quotation%20for%20commercial%20kitchen%20equipment." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Get Instant Quote on WhatsApp</a>
      </div>
    `;
  }

  // 2. Food Truck / Mobile Kitchen
  if (query.includes('food truck') || query.includes('truck') || query.includes('van') || query.includes('mobile kitchen') || query.includes('cart')) {
    return `
      🚚 <strong>Custom Commercial Food Truck Fabrication</strong>:
      <br><br>
      &bull; <strong>100% SS 304</strong> food-grade custom counters & storage.<br>
      &bull; Built-in high-pressure burners, deep fryers, and flat griddles.<br>
      &bull; Heavy-duty exhaust hood canopy with centrifugal blower.<br>
      &bull; Fresh water tanks, waste drainage, and fire-safe LPG line piping.<br>
      &bull; RTO compliant design & electrical inverter setups.
      <div class="bksi-msg-actions">
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20am%20interested%20in%20custom%20Food%20Truck%20Fabrication." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Discuss Food Truck Project</a>
      </div>
    `;
  }

  // 3. Burners / Cooking Ranges / Ovens
  if (query.includes('burner') || query.includes('range') || query.includes('stove') || query.includes('gas') || query.includes('cook') || query.includes('oven') || query.includes('tandoor') || query.includes('dosa') || query.includes('bhatty')) {
    return `
      🔥 <strong>Heavy-Duty Commercial Cooking Equipment</strong>:
      <br><br>
      We manufacture 1, 2, 3, and 4-Burner Indian Cooking Ranges, Chinese Wok Ranges with water faucets, Chapati Puffer Plates, Dosa Bhatties, and Gas/Electric Baking Ovens with heavy cast iron pan supports and 20% LPG fuel-saving technology!
      <div class="bksi-msg-actions">
        <a href="#catalog" onclick="filterAndScrollToCatalog('cooking'); toggleBksiChat();" class="bksi-msg-btn-quote">🔍 View Cooking Range Catalog</a>
        <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20need%20details%20for%20Commercial%20Burner%20Ranges." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 WhatsApp Burner Inquiry</a>
      </div>
    `;
  }

  // 4. Exhaust / Hood / Ducting / Chimney
  if (query.includes('exhaust') || query.includes('hood') || query.includes('duct') || query.includes('chimney') || query.includes('ventilation') || query.includes('blower')) {
    return `
      💨 <strong>SS 304 Exhaust Hood & Ducting Systems</strong>:
      <br><br>
      We design zero-smoke kitchen ventilation with stainless steel baffle grease filters, oil collection troughs, heavy gauge GI/SS ducting, and vibration-free centrifugal exhaust blowers compliant with fire safety norms.
      <div class="bksi-msg-actions">
        <a href="#catalog" onclick="filterAndScrollToCatalog('exhaust'); toggleBksiChat();" class="bksi-msg-btn-quote">🔍 Explore Exhaust Systems</a>
      </div>
    `;
  }

  // 5. Bain Marie / Warmers / Buffet
  if (query.includes('bain marie') || query.includes('warmer') || query.includes('buffet') || query.includes('servery') || query.includes('hot case')) {
    return `
      🍲 <strong>Bain Marie & Hot Food Servery Counters</strong>:
      <br><br>
      Equipped with standard GN container pans (2 to 8 pan configurations), dry/wet heating elements, digital thermostat temperature control, and toughened curved/flat glass sneeze guards for luxury hotel dining and buffets.
    `;
  }

  // 6. Factory Location / Address / Contact
  if (query.includes('location') || query.includes('address') || query.includes('factory') || query.includes('where') || query.includes('visit') || query.includes('bengaluru') || query.includes('bangalore') || query.includes('contact') || query.includes('phone') || query.includes('number')) {
    return `
      🏭 <strong>B.K.S. Industries Manufacturing Facility</strong>:
      <br><br>
      📍 <strong>Address</strong>: Site No. 22, 1st Cross, Kempamma Layout, Lakshmidevinagar, Bengaluru, Karnataka &mdash; 560096.<br>
      📞 <strong>Phone</strong>: +91 81239 39433<br>
      ✉️ <strong>Email</strong>: Bks-industries@outlook.com<br>
      ⏰ <strong>Hours</strong>: Mon &mdash; Sat: 9:00 AM &mdash; 7:30 PM
      <div class="bksi-msg-actions">
        <a href="https://wa.me/918123939433" target="_blank" rel="noopener" class="bksi-msg-btn-wa">📞 Call / WhatsApp Now</a>
      </div>
    `;
  }

  // 7. SS Grade / Material / Quality
  if (query.includes('material') || query.includes('grade') || query.includes('quality') || query.includes('steel') || query.includes('ss 304') || query.includes('warranty')) {
    return `
      🛡️ <strong>100% Certified Food-Grade SS 304 Fabrication</strong>:
      <br><br>
      We use genuine heavy-gauge (16G & 18G) Stainless Steel 304 with precision CNC laser cutting, seamless argon TIG welding, and mirror/satin brush polishing. 100% rust-proof, hygienic, and built to withstand decades of commercial kitchen rigor.
    `;
  }

  // 8. Turnkey Project / Hotel / Restaurant / Canteen
  if (query.includes('turnkey') || query.includes('restaurant') || query.includes('hotel') || query.includes('canteen') || query.includes('hospital') || query.includes('resort') || query.includes('setup')) {
    return `
      🏆 <strong>End-to-End Turnkey Commercial Kitchen Setup</strong>:
      <br><br>
      From architectural 2D/3D CAD kitchen layouts and LPG manifold piping to exhaust ducting, equipment manufacturing, on-site installation, and staff handover. 500+ successful projects delivered across India!
      <div class="bksi-msg-actions">
        <a href="#services" onclick="toggleBksiChat()" class="bksi-msg-btn-quote">📋 View Turnkey Services</a>
      </div>
    `;
  }

  // 9. Greetings & Friendly chat
  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('good morning') || query.includes('good afternoon') || query.includes('namaste')) {
    return `
      Hello! 😊 Welcome to <strong>B.K.S. Industries</strong>.
      <br><br>
      Are you looking for commercial cooking ranges, custom food trucks, exhaust systems, or a complete restaurant kitchen setup? I am here to help you!
    `;
  }

  // Default Fallback
  return `
    Thank you for your question! As a leading commercial kitchen equipment manufacturer in Bengaluru, we customize all products to your exact requirements. 🛠️
    <br><br>
    Would you like our engineering team to send you our complete product catalog or assist you on WhatsApp?
    <div class="bksi-msg-actions">
      <a href="https://wa.me/918123939433?text=Hi%20BKS%20Industries,%20I%20have%20an%20inquiry%20regarding%20kitchen%20equipment." target="_blank" rel="noopener" class="bksi-msg-btn-wa">💬 Speak Directly with Engineer</a>
      <a href="#contact" onclick="toggleBksiChat()" class="bksi-msg-btn-quote">✉️ Send Instant Inquiry</a>
    </div>
  `;
}

async function handleUserChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('bksiChatInput');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  // Append user message
  appendUserMessage(userText);
  input.value = '';

  // Show typing indicator
  showTypingIndicator();

  // Natural response delay (600ms to 900ms)
  const delay = Math.floor(Math.random() * 300) + 600;
  setTimeout(() => {
    const replyHtml = generateAiReply(userText);
    appendBotMessage(replyHtml);
  }, delay);
}