import { Product, Category, TeamMember } from './types';

export const CATEGORIES: Category[] = [
  {
    "id": "fishing",
    "name": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-1-r35size-1qty=10.webp",
    "description": "Rods, reels, fresh bait, and tackle for the local species."
  },
  {
    "id": "camping",
    "name": "Camping",
    "image": "/product-photos-and-products/windproof-campine-stove-k-203-r150.webp",
    "description": "Tents, sleeping bags, and gas equipment for the dunes."
  },
  {
    "id": "braai",
    "name": "Braai",
    "image": "/product-photos-and-products/lks-snoek-braai-grid-r323.webp",
    "description": "Grids, tongs, wood, and spices for the perfect fire."
  },
  {
    "id": "kitchen",
    "name": "Kitchen",
    "image": "/product-photos-and-products/owsom-4pc-pot-set-small-r199.webp",
    "description": "Cast iron pots, enamelware, and daily essentials."
  },
  {
    "id": "hardware",
    "name": "Hardware",
    "image": "/product-photos-and-products/dingqi-claw-hammer-700g-r120.webp",
    "description": "Tools, hardware, and safety gear for every project."
  },
  {
    "id": "fashion",
    "name": "Fashion",
    "image": "/product-photos-and-products/handbag-cotton-road-r399.webp",
    "description": "Stylish bags, hats, and accessories for the West Coast."
  },
  {
    "id": "arts",
    "name": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-40x50cm-leopard-r138.webp",
    "description": "Canvas, paints, and brushes for your creative side."
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "tile-trowel-r58",
    "name": "Tile Trowel",
    "price": 58,
    "category": "Hardware",
    "image": "/product-photos-and-products/tile-trowel-r58.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Professional quality Tile Trowel for your tiling projects."
  },
  {
    "id": "plastering-trowel-r58",
    "name": "Plastering Trowel",
    "price": 58,
    "category": "Hardware",
    "image": "/product-photos-and-products/plastering-trowel-r58.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Durable Plastering Trowel for smooth finishing."
  },
  {
    "id": "t-line-fishing-line-100kg-r95",
    "name": "T-Line 100kg Fishing Line",
    "price": 95,
    "category": "Fishing",
    "image": "/product-photos-and-products/t-line-100kg-r95.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "High-strength T-Line 100kg fishing line, 1.5mm x 100m."
  },
  {
    "id": "canvas-3pc-set-r150",
    "name": "Canvas 3pc Set",
    "price": 150,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/canvas-3pc-set-r150.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Beautiful Canvas 3pc set for your art and decor."
  },
  {
    "id": "adrenaline-bite-alarm-large-r99",
    "name": "Adrenaline Bite Alarm Large",
    "price": 99,
    "category": "General",
    "image": "/product-photos-and-products/adrenaline-bite-alarm-large-r99.webp",
    "rating": 4.5,
    "reviews": 15,
    "brand": "Adrenaline",
    "description": "Electronic bite alarm with loud alert tone and LED indicator. Great for carp and freshwater fishing sessions on the West Coast."
  },
  {
    "id": "aluminium-lunch-box-1500ml-r190",
    "name": "Aluminium Lunch Box 1500ml",
    "price": 190,
    "category": "Kitchen",
    "image": "/product-photos-and-products/aluminium-lunch-box-1500ml-r190.webp",
    "rating": 4.5,
    "reviews": 17,
    "description": "Durable 1500ml aluminium lunch box, perfect for packing meals on camping trips or workdays. Lightweight and easy to clean."
  },
  {
    "id": "aluminium-lunch-box-800ml-r140",
    "name": "Aluminium Lunch Box 800ml",
    "price": 140,
    "category": "Kitchen",
    "image": "/product-photos-and-products/aluminium-lunch-box-800ml-r140.webp",
    "rating": 4.5,
    "reviews": 5,
    "description": "Compact 800ml aluminium lunch box ideal for light snacks or kids' lunches. Sturdy construction with a secure lid."
  },
  {
    "id": "artist-brush-wooden-r42",
    "name": "Artist Brush Wooden",
    "price": 42,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/artist-brush-wooden-r42.webp",
    "rating": 4.5,
    "reviews": 16,
    "description": "Wooden-handle artist brush with soft bristles for oil, acrylic, and watercolour painting. Comfortable grip for detailed work."
  },
  {
    "id": "bag-carry-cotton-road-zip-r180",
    "name": "Bag Carry Cotton Road Zip",
    "price": 180,
    "category": "Fashion",
    "image": "/product-photos-and-products/bag-carry-cotton-road-zip-r180.webp",
    "rating": 4.5,
    "reviews": 5,
    "brand": "Cotton Road",
    "description": "Stylish Cotton Road carry bag with secure zip closure. Spacious interior with multiple pockets for everyday essentials."
  },
  {
    "id": "bag-w-p-protea-cotton-road-r158",
    "name": "Bag W P Protea Cotton Road",
    "price": 158,
    "category": "Fashion",
    "image": "/product-photos-and-products/bag-w-p-protea-cotton-road-r158.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Cotton Road",
    "description": "Beautiful Cotton Road waterproof bag with a proudly South African Protea print. Perfect accessory for the West Coast lifestyle."
  },
  {
    "id": "beam-trace--2-r15",
    "name": "Beam Trace #2",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/beam-trace-2-r15.webp",
    "rating": 4.5,
    "reviews": 24,
    "description": "Pre-tied beam trace rig in size #2, ready for rock and surf fishing. Strong nylon leader with quality hooks for consistent catches."
  },
  {
    "id": "bolt-cutter-350mm-dingqi-r240",
    "name": "Bolt Cutter 350mm Dingqi",
    "price": 240,
    "category": "Hardware",
    "image": "/product-photos-and-products/bolt-cutter-350mm-dingqi-r240.webp",
    "rating": 4.5,
    "reviews": 17,
    "brand": "Dingqi",
    "description": "Heavy-duty 350mm bolt cutter with hardened jaws for cutting wire, bolts, and padlocks. Ergonomic non-slip handles."
  },
  {
    "id": "bolt-cutter-600mm-r400",
    "name": "Bolt Cutter 600mm",
    "price": 400,
    "category": "Hardware",
    "image": "/product-photos-and-products/bolt-cutter-600mm-r400.webp",
    "rating": 4.5,
    "reviews": 22,
    "description": "Large 600mm bolt cutter for heavy cutting jobs. Compound leverage design makes cutting thick bolts and chains effortless."
  },
  {
    "id": "braid-loomis-8x-150m-r149",
    "name": "Braid Loomis 8xstrand 30LB 150m",
    "price": 149,
    "category": "Fishing",
    "image": "/product-photos-and-products/braid-loomis-8x-150m-r149.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Loomis",
    "description": "Premium 8-strand braided fishing line, 30LB test in 150m spool. Ultra-smooth casting with minimal stretch for sensitive bite detection."
  },
  {
    "id": "bream-trace-float--2-r20",
    "name": "Bream Trace Float #2",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/bream-trace-float-2-r20.webp",
    "rating": 4.5,
    "reviews": 21,
    "description": "Pre-rigged bream trace with float and size #2 hook. Ideal for estuary and lagoon fishing along the West Coast."
  },
  {
    "id": "camping-cutlery-set-steel-r290",
    "name": "Camping Cutlery Set Stainless Steel",
    "price": 290,
    "category": "Camping",
    "image": "/product-photos-and-products/camping-cutlery-set-steel-r290.webp",
    "rating": 4.5,
    "reviews": 11,
    "description": "Complete stainless steel camping cutlery set including knives, forks, and spoons. Comes in a handy carry pouch for easy packing."
  },
  {
    "id": "caulking-gun-dingqi-225mm-r80",
    "name": "Caulking Gun Dingqi 225mm",
    "price": 80,
    "category": "Hardware",
    "image": "/product-photos-and-products/caulking-gun-dingqi-225mm-r80.webp",
    "rating": 4.5,
    "reviews": 18,
    "brand": "Dingqi",
    "description": "225mm caulking gun with smooth-action trigger for applying sealants and adhesives. Drip-free design keeps your workspace clean."
  },
  {
    "id": "circle-hook--2-adrenalin-r17-size-2-10-pcs",
    "name": "Circle Hook #2 Adrenalin",
    "price": 17,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-2-adrenalin-r17size-210-pcs.webp",
    "rating": 4.5,
    "reviews": 22,
    "brand": "Adrenaline",
    "description": "Pack of 10 size #2 circle hooks designed for catch-and-release. The inward-pointing tip ensures a secure corner-of-mouth hookset."
  },
  {
    "id": "circle-hook--2-0-adrenalin-r19-10pcs-size-2-0",
    "name": "Circle Hook #2/0 Adrenalin",
    "price": 19,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-2-0-adrenalin-r1910pcssize-2-0.webp",
    "rating": 4.5,
    "reviews": 14,
    "brand": "Adrenaline",
    "description": "10-pack of size 2/0 circle hooks by Adrenaline. Ideal for targeting medium gamefish with live or cut bait."
  },
  {
    "id": "circle-hook-size--4-0-adrenaline-r27-10pcs-size-4-0",
    "name": "Circle Hook Size #4/0 Adrenaline",
    "price": 27,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-size-4-0-adrenaline-r2710pcssize-4-0.webp",
    "rating": 4.5,
    "reviews": 11,
    "brand": "Adrenaline",
    "description": "Heavy-duty 4/0 circle hooks in a 10-piece pack. Built for bigger species like kob and steenbras with strong, corrosion-resistant wire."
  },
  {
    "id": "circle-hook-size-6-0-adrenaline-r42-10pcs",
    "name": "Circle Hook Size 6/0 Adrenaline",
    "price": 42,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-size-6-0-adrenaline-r4210pcs.webp",
    "rating": 4.5,
    "reviews": 10,
    "brand": "Adrenaline",
    "description": "Extra-large 6/0 circle hooks for serious rock and surf anglers. 10 per pack, designed for large bait presentations and trophy fish."
  },
  {
    "id": "combination-pliers-dingqi-r90",
    "name": "Combination Pliers Dingqi",
    "price": 90,
    "category": "Hardware",
    "image": "/product-photos-and-products/combination-pliers-dingqi-r90.webp",
    "rating": 4.5,
    "reviews": 23,
    "brand": "Dingqi",
    "description": "Versatile combination pliers for gripping, bending, and cutting wire. Chrome vanadium steel with insulated comfort-grip handles."
  },
  {
    "id": "cotton-road-purse-windpump-small-r180",
    "name": "Cotton Road Purse Windpump Small",
    "price": 180,
    "category": "Fashion",
    "image": "/product-photos-and-products/cotton-road-purse-windpump-smal-r180.webp",
    "rating": 4.5,
    "reviews": 24,
    "brand": "Cotton Road",
    "description": "Charming Cotton Road purse featuring a Karoo windpump design. Compact size with card slots, zip compartment, and snap closure."
  },
  {
    "id": "dingqi-claw-hammer-700g-r120",
    "name": "Dingqi Claw Hammer 700g",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-claw-hammer-700g-r120.webp",
    "rating": 4.5,
    "reviews": 10,
    "brand": "Dingqi",
    "description": "Solid 700g claw hammer with a forged steel head and shock-absorbing fibreglass handle. Great for general construction and DIY."
  },
  {
    "id": "dingqi-pipe-cutter-42mm-r124",
    "name": "Dingqi Pipe Cutter 42mm",
    "price": 124,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-pipe-cutter-42mm-r124.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Dingqi",
    "description": "Precision 42mm pipe cutter for copper, PVC, and aluminium tubing. Ratcheting mechanism provides clean, burr-free cuts."
  },
  {
    "id": "dingqi-sprayer-r120",
    "name": "Dingqi Sprayer",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-sprayer-r120.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Dingqi",
    "description": "Adjustable pressure sprayer for garden use, cleaning, and chemical application. 1-litre capacity with comfortable pump action."
  },
  {
    "id": "earmuf-dingqi-r65",
    "name": "Earmuf Dingqi",
    "price": 65,
    "category": "Hardware",
    "image": "/product-photos-and-products/earmuf-dingqi-r65.webp",
    "rating": 4.5,
    "reviews": 10,
    "brand": "Dingqi",
    "description": "Noise-reducing ear muffs for workshop and construction site safety. Adjustable padded headband for all-day comfort. NRR rated."
  },
  {
    "id": "elf-drift-trace-hook--4-r20",
    "name": "Elf Drift Trace Hook #4",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/elf-drift-trace-hook-4-r20.webp",
    "rating": 4.5,
    "reviews": 5,
    "description": "Ready-to-use elf drift trace with size #4 hook. Designed for light tackle fishing targeting smaller reef species."
  },
  {
    "id": "elf-drift-trace-hook--6-r25",
    "name": "Elf Drift Trace Hook #6",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/elf-drift-trace-hook-6-r25.webp",
    "rating": 4.5,
    "reviews": 9,
    "description": "Elf drift trace rig with size #6 hook for targeting snoek and elf from rocks or boats. Pre-tied for quick rigging."
  },
  {
    "id": "epoxy-ab-dingqi-r24",
    "name": "Epoxy Dingqi",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/epoxy-ab-dingqi-r24.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Dingqi",
    "description": "Two-component epoxy adhesive for bonding metal, wood, ceramics, and plastics. Sets in minutes with a strong, permanent hold."
  },
  {
    "id": "fishing-beads--5-r20",
    "name": "Fishing Beads #5",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/fishing-beads-5-r20.webp",
    "rating": 4.5,
    "reviews": 13,
    "description": "Size #5 fishing beads in assorted colours for rig attraction and bead stops. Essential tackle box accessory."
  },
  {
    "id": "fishing-glo-beads-5mm-20-s-r15",
    "name": "Fishing Glo Beads 5mm 20's",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/fishing-glo-beads-5mm-20s-r15.webp",
    "rating": 4.5,
    "reviews": 9,
    "description": "Pack of 20 luminous glo beads in 5mm. Glow-in-the-dark design attracts fish during low-light conditions."
  },
  {
    "id": "folding-shovel-camping-r140",
    "name": "Folding Shovel Camping",
    "price": 140,
    "category": "Camping",
    "image": "/product-photos-and-products/folding-shovel-camping-r140.webp",
    "rating": 4.5,
    "reviews": 21,
    "description": "Compact folding shovel perfect for camping, digging fire pits, and clearing campsite ground. Lightweight with a carry pouch."
  },
  {
    "id": "hand-pump-dingqi-r170",
    "name": "Hand Pump Dingqi",
    "price": 170,
    "category": "Hardware",
    "image": "/product-photos-and-products/hand-pump-dingqi-r170.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Dingqi",
    "description": "Manual hand pump for inflating tyres, sports balls, and air mattresses. Includes multiple nozzle attachments."
  },
  {
    "id": "handbag-cotton-road-r399",
    "name": "Handbag Cotton Road",
    "price": 399,
    "category": "Fashion",
    "image": "/product-photos-and-products/handbag-cotton-road-r399.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Cotton Road",
    "description": "Spacious Cotton Road handbag with premium faux-leather finish. Multiple compartments and adjustable shoulder strap."
  },
  {
    "id": "heat-gun-2000w-dingqi-r380",
    "name": "Heat Gun 2000w Dingqi",
    "price": 380,
    "category": "Hardware",
    "image": "/product-photos-and-products/heat-gun-2000w-dingqi-r380.webp",
    "rating": 4.5,
    "reviews": 8,
    "brand": "Dingqi",
    "description": "Powerful 2000W heat gun with variable temperature settings for paint stripping, shrink wrapping, and thawing pipes."
  },
  {
    "id": "hole-saw-set-5pc-dingqi-r86",
    "name": "Hole Saw Set 5pc Dingqi",
    "price": 86,
    "category": "Hardware",
    "image": "/product-photos-and-products/hole-saw-set-5pc-dingqi-r86.webp",
    "rating": 4.5,
    "reviews": 5,
    "brand": "Dingqi",
    "description": "5-piece hole saw set for drilling clean holes in wood, plastic, and drywall. Includes arbor and pilot drill bit."
  },
  {
    "id": "hook-remover-adrenalin-r75",
    "name": "Hook Remover Adrenalin",
    "price": 75,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-remover-adrenalin-r75.webp",
    "rating": 4.5,
    "reviews": 10,
    "brand": "Adrenaline",
    "description": "Stainless steel hook remover for safe, easy hook extraction. Essential for responsible catch-and-release fishing."
  },
  {
    "id": "hook-sharpener-adrenaline-r30",
    "name": "Hook Sharpener Adrenaline",
    "price": 30,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-sharpener-adrenaline-r30.webp",
    "rating": 4.5,
    "reviews": 23,
    "brand": "Adrenaline",
    "description": "Diamond-coated hook sharpener to keep your hooks razor-sharp. Compact pocket-sized design for use on the rocks or boat."
  },
  {
    "id": "hook-spearpoint--10-0-r25",
    "name": "Hook Spearpoint #10/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-10-0-r25.webp",
    "rating": 4.5,
    "reviews": 14,
    "description": "Strong spearpoint hook in size 10/0 for heavy surf and rock fishing. Forged steel with a chemically sharpened point."
  },
  {
    "id": "hook-spearpoint--11-0-r25",
    "name": "Hook Spearpoint #11/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-11-0-r25.webp",
    "rating": 4.5,
    "reviews": 18,
    "description": "Spearpoint hook in size 11/0, built for large bait and heavy-duty rigs. Reliable hook-ups on big fish."
  },
  {
    "id": "hook-spearpoint--12-0-r25",
    "name": "Hook Spearpoint #12/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-12-0-r25.webp",
    "rating": 4.5,
    "reviews": 9,
    "description": "Extra-strong 12/0 spearpoint fishing hook for big game surf fishing. Deep-sea rated with anti-corrosion finish."
  },
  {
    "id": "hooks-r5-10pc",
    "name": "Hooks #12-3",
    "price": 5,
    "category": "Fishing",
    "image": "/product-photos-and-products/hooks-r5-10pc.webp",
    "rating": 4.5,
    "reviews": 5,
    "description": "10-piece assorted fishing hook pack in sizes #12 to #3. Essential starter set for freshwater and light saltwater fishing."
  },
  {
    "id": "insulated-s-driver-dingqi-r160",
    "name": "Insulated S/driver Dingqi",
    "price": 160,
    "category": "Hardware",
    "image": "/product-photos-and-products/insulated-s-driver-dingqi-r160.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Dingqi",
    "description": "VDE-rated insulated screwdriver for electrical work. Tested to 1000V with a slip-resistant ergonomic handle."
  },
  {
    "id": "acrylic-paint-set-tubes-r70",
    "name": "Acrylic Paint Set Tubes",
    "price": 70,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/khoki-lighter-highclass-zip-r70.webp",
    "rating": 4.5,
    "reviews": 0,
    "description": "Vibrant acrylic paint set tubes for your art and craft projects."
  },
  {
    "id": "kingfisher-hook--2-0-r42",
    "name": "Kingfisher Hook #2/0",
    "price": 42,
    "category": "Fishing",
    "image": "/product-photos-and-products/kingfisher-hook-2-0-r42.webp",
    "rating": 4.5,
    "reviews": 11,
    "description": "Premium Kingfisher hook in size 2/0 for rock and surf fishing. Needle-sharp point with a wide gape for secure hooksets."
  },
  {
    "id": "knife-sharpener-adrenaline-r40",
    "name": "Knife Sharpener Adrenaline",
    "price": 40,
    "category": "General",
    "image": "/product-photos-and-products/knife-sharpener-adrenaline-r40.webp",
    "rating": 4.5,
    "reviews": 21,
    "brand": "Adrenaline",
    "description": "Compact knife sharpener with carbide and ceramic stages. Quickly restores a sharp edge on fillet knives and kitchen blades."
  },
  {
    "id": "land-it-hook--9-0-5pc-r21",
    "name": "Land/it Hook #9/0 5pc",
    "price": 21,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hook-9-0-5pc-r21.webp",
    "rating": 4.5,
    "reviews": 21,
    "description": "5-piece pack of Land-it hooks in size 9/0. Designed for shark and big game fishing with heavy-gauge wire construction."
  },
  {
    "id": "land-it-hooks--10-0-5pcs-r27",
    "name": "Land/it Hooks #10/0 5pcs",
    "price": 27,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hooks-10-0-5pcs-r27.webp",
    "rating": 4.5,
    "reviews": 5,
    "description": "5 heavy-duty 10/0 Land-it hooks for targeting large species. Forged from high-carbon steel for maximum strength."
  },
  {
    "id": "land-it-hooks--12-0-5pc-r29",
    "name": "Land/it Hooks #12/0 5pc",
    "price": 29,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hooks-12-0-5pc-r29.webp",
    "rating": 4.5,
    "reviews": 7,
    "description": "5-piece pack of extra-large 12/0 Land-it hooks. Built for trophy catches with reinforced eyelet and thick gauge shank."
  },
  {
    "id": "level-40cm-r120",
    "name": "Level 40cm",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-40cm-r120.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "40cm spirit level with magnetic base and 3 vials. Accurate horizontal, vertical, and 45-degree readings for tiling and brickwork."
  },
  {
    "id": "level-60cm-r130",
    "name": "Level 60cm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-60cm-r130.webp",
    "rating": 4.5,
    "reviews": 20,
    "description": "60cm spirit level for medium-scale building and renovations. Shockproof vials with high-visibility markings."
  },
  {
    "id": "level-80cm-r150",
    "name": "Level 80cm",
    "price": 150,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-80cm-r150.webp",
    "rating": 4.5,
    "reviews": 14,
    "description": "Professional-grade 80cm spirit level for larger construction projects. Lightweight aluminium frame with precision-milled surfaces."
  },
  {
    "id": "lk-s-304-stainless-steel-grid-r756",
    "name": "Lk's 304 Stainless Steel Grid (435mmx340mm)",
    "price": 756,
    "category": "Braai",
    "image": "/product-photos-and-products/lks-304-stainless-steel-grid-r756.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "LK's",
    "description": "Premium 304 stainless steel braai grid (435mm×340mm). Rust-resistant and built for decades of weekend braais and snoek smoking."
  },
  {
    "id": "lk-s-snoek-braai-grid-r323",
    "name": "Lk's Snoek Braai Grid (620mmx330mm)",
    "price": 323,
    "category": "Braai",
    "image": "/product-photos-and-products/lks-snoek-braai-grid-r323.webp",
    "rating": 4.5,
    "reviews": 22,
    "brand": "LK's",
    "description": "Iconic LK's snoek braai grid (620mm×330mm). The West Coast classic for braaing whole snoek over open coals. Chrome-plated steel."
  },
  {
    "id": "long-nose-pliers-dingqi-r76",
    "name": "Long Nose Pliers Dingqi",
    "price": 76,
    "category": "Hardware",
    "image": "/product-photos-and-products/long-nose-pliers-dingqi-r76.webp",
    "rating": 4.5,
    "reviews": 15,
    "brand": "Dingqi",
    "description": "Precision long nose pliers for fine gripping, bending wire, and reaching tight spaces. Built from chrome vanadium steel."
  },
  {
    "id": "luminous-glowbead-10x17mm-r15",
    "name": "Luminous Glowbead 10x17mm",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-10x17mm-r15.webp",
    "rating": 4.5,
    "reviews": 13,
    "description": "Luminous glow beads (10×17mm) that charge in sunlight and glow underwater. Attracts fish during dawn, dusk, and night sessions."
  },
  {
    "id": "luminous-glowbead-6x10mm-r10-green",
    "name": "Luminous Glowbead 6x10mm",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-6x10mm-r10-green.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "Small 6×10mm green luminous glow beads for adding visibility to rigs and traces in murky or deep water conditions."
  },
  {
    "id": "luminous-glowbead-6x10mm-r10",
    "name": "Luminous Glowbead 6x10mm",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-6x10mm-r10.webp",
    "rating": 4.5,
    "reviews": 15,
    "description": "Classic 6×10mm luminous glow beads for saltwater rigs. Absorb light and glow for hours to attract curious fish."
  },
  {
    "id": "mackerel-trace-r65-you-get-2",
    "name": "Mackerel Trace",
    "price": 65,
    "category": "Fishing",
    "image": "/product-photos-and-products/mackerel-trace-r65you-get-2.webp",
    "rating": 4.5,
    "reviews": 24,
    "description": "Pre-tied mackerel trace with dual hooks and flasher beads. 2 rigs per pack, ready for jigging or trolling."
  },
  {
    "id": "multimeter-dingqi-digital-r90",
    "name": "Dingqi Contact Voltage Tester",
    "price": 90,
    "category": "Hardware",
    "image": "/product-photos-and-products/multimeter-dingqi-digital-r90.webp",
    "rating": 4.5,
    "reviews": 17,
    "brand": "Dingqi",
    "description": "Non-contact voltage tester for safely detecting live wires. Auto-sensing with LED and buzzer alert indicators."
  },
  {
    "id": "mustad-fishing-hooks--2-0-r38",
    "name": "Mustad Fishing Hooks #2/0",
    "price": 38,
    "category": "Fishing",
    "image": "/product-photos-and-products/mustad-fishing-hooks-2-0-r38.webp",
    "rating": 4.5,
    "reviews": 20,
    "brand": "Mustad",
    "description": "Premium Mustad fishing hooks in size 2/0, trusted by anglers worldwide. Chemically sharpened with superior corrosion resistance."
  },
  {
    "id": "mustad-fishing-hooks--5-0-r60",
    "name": "Mustad Fishing Hooks #5/0",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/mustad-fishing-hooks-5-0-r60.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Mustad",
    "description": "Mustad 5/0 hooks for heavy surf and boat fishing. Ultra-sharp Nor-Tempering point penetrates instantly on the strike."
  },
  {
    "id": "offshore-squid-10cm-glow-r50",
    "name": "Offshore Squid 10cm Glow",
    "price": 50,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-10cm-glow-r50.webp",
    "rating": 4.5,
    "reviews": 20,
    "description": "10cm glow-in-the-dark squid jig for offshore fishing. UV-reactive finish that attracts chokka and squid in deep water."
  },
  {
    "id": "offshore-squid-12cm-glow-r60-green",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60-green.webp",
    "rating": 4.5,
    "reviews": 15,
    "description": "12cm green glow squid jig for deepwater jigging. Luminous body charges quickly and glows brightly to attract squid."
  },
  {
    "id": "offshore-squid-12cm-glow-r60-red",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60-red.webp",
    "rating": 4.5,
    "reviews": 23,
    "description": "12cm red glow offshore squid jig. The red colour works well in deeper water where red wavelengths are absorbed first."
  },
  {
    "id": "offshore-squid-12cm-glow-r60",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60.webp",
    "rating": 4.5,
    "reviews": 11,
    "description": "Standard 12cm glow squid jig for targeting chokka and reef squid. Double-tier stainless steel barb crown for reliable hooksets."
  },
  {
    "id": "offshore-squid-15cm-pink-r70",
    "name": "Offshore Squid 15cm Pink",
    "price": 70,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-15cm-pink-r70.webp",
    "rating": 4.5,
    "reviews": 12,
    "description": "Large 15cm pink squid jig for offshore jigging. Bright pink colour imitates injured baitfish and triggers aggressive strikes."
  },
  {
    "id": "oil-paint-12colors-r60",
    "name": "Oil Paint 12colors",
    "price": 60,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/oil-paint-12colors-r60.webp",
    "rating": 4.5,
    "reviews": 13,
    "description": "12-colour oil paint set with vibrant, blendable pigments. Suitable for canvas, paper, and board. Great for beginners and hobbyists."
  },
  {
    "id": "owsom-4pc-pot-set-small-r199",
    "name": "Owsom 4pc Pot Set Small",
    "price": 199,
    "category": "Kitchen",
    "image": "/product-photos-and-products/owsom-4pc-pot-set-small-r199.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Owsom",
    "description": "Compact 4-piece nesting pot set ideal for camping, hiking, and picnics. Lightweight aluminium with non-stick coating."
  },
  {
    "id": "owsom-outdoor-four-piece-pot-set-r156",
    "name": "Owsom Outdoor Four/piece Pot Set",
    "price": 156,
    "category": "Kitchen",
    "image": "/product-photos-and-products/owsom-outdoor-four-piece-pot-set-r156.webp",
    "rating": 4.5,
    "reviews": 8,
    "brand": "Owsom",
    "description": "4-piece outdoor pot set with foldable handles for easy packing. Hard-anodised aluminium construction stands up to campfire cooking."
  },
  {
    "id": "packable-cotton-road-hat-r90",
    "name": "Packable Cotton Road Hat",
    "price": 90,
    "category": "Fashion",
    "image": "/product-photos-and-products/packable-cotton-road-hat-r90.webp",
    "rating": 4.5,
    "reviews": 14,
    "brand": "Cotton Road",
    "description": "Lightweight packable hat with UPF sun protection. Folds flat for travel and springs back into shape. Perfect for beach days."
  },
  {
    "id": "paint-by-number-30x30cm-giraffe-r88",
    "name": "Paint By Number 30x30cm Giraffe",
    "price": 88,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-30x30cm-giraffe-r88.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "Paint-by-number kit featuring a giraffe design on a 30×30cm canvas. Includes numbered paints and brushes — relaxing creative fun."
  },
  {
    "id": "paint-by-number-40x50cm-leopard-r138",
    "name": "Paint By Number 40x50cm Leopard",
    "price": 138,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-40x50cm-leopard-r138.webp",
    "rating": 4.5,
    "reviews": 16,
    "description": "Larger 40×50cm paint-by-number canvas with a striking leopard portrait. Premium acrylic paints included for vivid colour results."
  },
  {
    "id": "paint-by-numer-40x40cm-cat-r112",
    "name": "Paint By Numer 40x40cm Cat",
    "price": 112,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-numer-40x40cm-cat-r112.webp",
    "rating": 4.5,
    "reviews": 10,
    "description": "Adorable cat-themed paint-by-number kit on 40×40cm canvas. A great gift for art lovers and a relaxing weekend activity."
  },
  {
    "id": "palette-set-6pc-r25",
    "name": "Palette Set 6pc",
    "price": 25,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/palette-set-6pc-r25.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "6-piece plastic palette set for mixing and blending paint colours. Easy to clean with smooth, non-porous surfaces."
  },
  {
    "id": "pipe-wrench-10--dingqi-r140",
    "name": "Pipe Wrench 10' Dingqi",
    "price": 140,
    "category": "Hardware",
    "image": "/product-photos-and-products/pipe-wrench-10-dingqi-r140.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Dingqi",
    "description": "Heavy-duty 10-inch pipe wrench with adjustable jaw. Drop-forged steel construction for maximum torque on plumbing fittings."
  },
  {
    "id": "pipe-wrench-200mm-r99",
    "name": "Pipe Wrench 200mm",
    "price": 99,
    "category": "Hardware",
    "image": "/product-photos-and-products/pipe-wrench-200mm-r99.webp",
    "rating": 4.5,
    "reviews": 8,
    "description": "Compact 200mm pipe wrench for light plumbing and maintenance tasks. Self-tightening jaw grips pipes securely."
  },
  {
    "id": "plier-pipe-dingqi-r110",
    "name": "Plier Pipe Dingqi",
    "price": 110,
    "category": "Hardware",
    "image": "/product-photos-and-products/plier-pipe-dingqi-r110.webp",
    "rating": 4.5,
    "reviews": 11,
    "brand": "Dingqi",
    "description": "Multi-grip pipe pliers with adjustable slip-joint for different pipe sizes. Chrome vanadium steel with anti-slip handles."
  },
  {
    "id": "poprivet-dingqi-large-r170",
    "name": "Poprivet Dingqi Large",
    "price": 170,
    "category": "Hardware",
    "image": "/product-photos-and-products/poprivet-dingqi-large-r170.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Dingqi",
    "description": "Large pop rivet gun for joining sheet metal, leather, and plastic. Comfortable spring-loaded handle reduces hand fatigue."
  },
  {
    "id": "poprivet-dingqi-small",
    "name": "Poprivet Dingqi Small",
    "price": 100,
    "category": "Hardware",
    "image": "/product-photos-and-products/poprivet-dingqi-small.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Dingqi",
    "description": "Compact pop rivet tool for light-duty fastening jobs. Works with standard 2.4mm to 4.8mm rivets."
  },
  {
    "id": "portable-lamp-r140",
    "name": "Portable Lamp",
    "price": 140,
    "category": "Camping",
    "image": "/product-photos-and-products/portable-lamp-r140.webp",
    "rating": 4.5,
    "reviews": 16,
    "description": "Battery-powered portable lamp for camping, power outages, and night fishing. Bright LED light with long battery life."
  },
  {
    "id": "pva-feeding-bags-60x-120mm-r25",
    "name": "Pva Feeding Bags 60x 120mm",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/pva-feeding-bags-60x-120mm-r25.webp",
    "rating": 4.5,
    "reviews": 16,
    "description": "PVA feeding bags (60×120mm) that dissolve in water, releasing groundbait directly at your hook. Essential for carp fishing."
  },
  {
    "id": "pva-feeding-bags-80x-120mm-r27",
    "name": "Pva Feeding Bags 80x 120mm",
    "price": 27,
    "category": "Fishing",
    "image": "/product-photos-and-products/pva-feeding-bags-80x-120mm-r27.webp",
    "rating": 4.5,
    "reviews": 23,
    "description": "Larger 80×120mm PVA bags for bigger bait parcels. Water-soluble material breaks down cleanly leaving no trace in the water."
  },
  {
    "id": "pva-mesh-5m-37mm-refill-r99",
    "name": "Pva Mesh 5m 37mm Refill",
    "price": 99,
    "category": "General",
    "image": "/product-photos-and-products/pva-mesh-5m-37mm-refill-r99.webp",
    "rating": 4.5,
    "reviews": 5,
    "description": "5-metre PVA mesh refill in 37mm width. Fill with groundbait or pellets to create compact sticks that dissolve on the lakebed."
  },
  {
    "id": "pvc-household-glove-n-c-r24",
    "name": "Pvc Household Glove N/c",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/pvc-householg-glove-n-c-r24.webp",
    "rating": 4.5,
    "reviews": 24,
    "description": "Reusable PVC household gloves for cleaning, dishwashing, and gardening. Textured grip with waterproof protection."
  },
  {
    "id": "reel-loomis-x-tide-400-r495",
    "name": "Reel Loomis X Tide 400",
    "price": 495,
    "category": "Fishing",
    "image": "/product-photos-and-products/reel-loomis-x-tide-400-r495.webp",
    "rating": 4.5,
    "reviews": 22,
    "brand": "Loomis",
    "description": "Loomis X Tide 400 spinning reel with 4 ball bearings and smooth drag. Perfect for rock and surf casting on the West Coast."
  },
  {
    "id": "safety-gloves-dingqi-r24",
    "name": "Safety Gloves Dingqi",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-gloves-dingqi-r24.webp",
    "rating": 4.5,
    "reviews": 8,
    "brand": "Dingqi",
    "description": "General-purpose safety gloves with latex-coated palms for improved grip. Breathable back keeps hands cool during extended use."
  },
  {
    "id": "safety-goggles-dingqi-r55",
    "name": "Safety Goggles Dingqi",
    "price": 55,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-goggles-dingqi-r55.webp",
    "rating": 4.5,
    "reviews": 20,
    "brand": "Dingqi",
    "description": "Clear-lens safety goggles with anti-fog ventilation. Protects against dust, debris, and splashes during grinding and drilling."
  },
  {
    "id": "safety-goggles-r55-dingqi",
    "name": "Safety Goggles",
    "price": 55,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-goggles-r55-dingqi.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Dingqi",
    "description": "Wraparound safety goggles with impact-resistant polycarbonate lenses. Comfortable fit over most prescription glasses."
  },
  {
    "id": "scraper-150mm-r40",
    "name": "Scraper 150mm",
    "price": 40,
    "category": "General",
    "image": "/product-photos-and-products/scraper-150mm-r40.webp",
    "rating": 4.5,
    "reviews": 15,
    "description": "Wide 150mm scraper for removing paint, wallpaper, and adhesive residue. Stiff carbon steel blade with a comfortable handle."
  },
  {
    "id": "screwdriver-11pc-dingqi",
    "name": "Screwdriver 11pc Dingqi",
    "price": 60,
    "category": "Hardware",
    "image": "/product-photos-and-products/screwdriver-11pc-dingqi.webp",
    "rating": 4.5,
    "reviews": 8,
    "brand": "Dingqi",
    "description": "Comprehensive 11-piece screwdriver set with Phillips and flathead tips in various sizes. Chrome vanadium shafts with magnetic tips."
  },
  {
    "id": "screwdriver-set-dingqi-7p-r44",
    "name": "Screwdriver Set Dingqi 7p",
    "price": 44,
    "category": "Hardware",
    "image": "/product-photos-and-products/screwdriver-set-dingqi-7p-r44.webp",
    "rating": 4.5,
    "reviews": 14,
    "brand": "Dingqi",
    "description": "7-piece screwdriver set covering everyday Phillips and slotted needs. Hardened tips resist cam-out and stripping."
  },
  {
    "id": "shad-trace-double-red-r25",
    "name": "Shad Trace Double Red",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/shad-trace-double-red-r25.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "Double-hook shad trace rig in red finish for targeting shad, elf, and smaller gamefish. Ready-tied for quick deployment."
  },
  {
    "id": "shifting-dingqi-200mm-r100",
    "name": "Shifting Dingqi 200mm",
    "price": 100,
    "category": "Hardware",
    "image": "/product-photos-and-products/shifting-dingqi-200mm-r100.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Dingqi",
    "description": "200mm adjustable shifting spanner for nuts, bolts, and plumbing fittings. Precision-machined jaw for a snug, no-slip fit."
  },
  {
    "id": "shifting-dingqi-250mm-r140",
    "name": "Shifting Dingqi 250mm",
    "price": 140,
    "category": "Hardware",
    "image": "/product-photos-and-products/shifting-dingqi-250mm-r140.webp",
    "rating": 4.5,
    "reviews": 12,
    "brand": "Dingqi",
    "description": "Larger 250mm adjustable spanner for bigger fasteners and plumbing work. Chrome-plated finish resists rust and corrosion."
  },
  {
    "id": "side-cutter-dingqi-180mm-r100",
    "name": "Side Cutter Dingqi 180mm",
    "price": 100,
    "category": "Hardware",
    "image": "/product-photos-and-products/side-cutter-dingqi-180mm-r100.webp",
    "rating": 4.5,
    "reviews": 13,
    "brand": "Dingqi",
    "description": "180mm diagonal side cutters for cleanly snipping wire, cable ties, and small nails. Hardened cutting edges for long life."
  },
  {
    "id": "soldering-iron-40w-dingqi-r134",
    "name": "Soldering Iron 40w Dingqi",
    "price": 134,
    "category": "Hardware",
    "image": "/product-photos-and-products/soldering-iron-40w-dingqi-r134.webp",
    "rating": 4.5,
    "reviews": 9,
    "brand": "Dingqi",
    "description": "40W soldering iron with fine tip for electronics repair, jewellery work, and hobby projects. Heats up quickly with insulated handle."
  },
  {
    "id": "south-africa-cotton-road-hat-denim-r96",
    "name": "South Africa Cotton Road Hat Denim",
    "price": 96,
    "category": "Fashion",
    "image": "/product-photos-and-products/south-africa-cotton-road-hat-denim-r96.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Cotton Road",
    "description": "Proudly South African denim hat by Cotton Road. Embroidered SA flag detail with adjustable fit. Stylish sun protection."
  },
  {
    "id": "spinner-dbl-30g-s-b-adrenalin-r45",
    "name": "Spinner Dbl 30g S B Adrenalin",
    "price": 45,
    "category": "Fishing",
    "image": "/product-photos-and-products/spinner-dbl-30g-s-b-adrenalin-r45.webp",
    "rating": 4.5,
    "reviews": 14,
    "brand": "Adrenaline",
    "description": "30g double-bladed spinner in silver/blue finish. Creates flash and vibration that triggers predatory strikes from snoek and yellowtail."
  },
  {
    "id": "spinner-dbl-30g-sil-adrenalin-r45",
    "name": "Spinner Dbl 30g Sil Adrenalin",
    "price": 45,
    "category": "Fishing",
    "image": "/product-photos-and-products/spinner-dbl-30g-sil-adrenalin-r45.webp",
    "rating": 4.5,
    "reviews": 23,
    "brand": "Adrenaline",
    "description": "30g silver spinner lure with double blade for maximum flash. Effective for spinning from rocks, piers, and boats."
  },
  {
    "id": "split-ring-scissors-r39",
    "name": "Split Ring Scissors",
    "price": 39,
    "category": "General",
    "image": "/product-photos-and-products/split-ring-scissors-r39.webp",
    "rating": 4.5,
    "reviews": 15,
    "description": "Specialised scissors for opening and attaching split rings to lures and swivels. Spring-loaded with fine pointed tips."
  },
  {
    "id": "swivel-3way-linx--2-r40-size-2-qty-10",
    "name": "Swivel 3way Linx #2",
    "price": 40,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-2-r40size-2qty=10.webp",
    "rating": 4.5,
    "reviews": 14,
    "brand": "Linx",
    "description": "Size #2 three-way swivels for bottom rigs and dropper loops. 10 per pack with smooth rotation to prevent line twist."
  },
  {
    "id": "swivel-3way-linx--2-size-2-qty-10",
    "name": "Swivel 3way Linx #2 Qty=10",
    "price": 40,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-2-size-2-qty=10.webp",
    "rating": 4.5,
    "reviews": 6,
    "brand": "Linx",
    "description": "10-pack of size #2 three-way Linx swivels. Enables multiple hook rigs and sinker attachment without line tangling."
  },
  {
    "id": "swivel-3way-linx--6-r25-r25",
    "name": "Swivel 3way Linx #6",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-6-r25-r25.webp",
    "rating": 4.5,
    "reviews": 10,
    "brand": "Linx",
    "description": "Smaller size #6 three-way swivels for lighter rigs. Smooth nickel-plated brass body with reliable barrel rotation."
  },
  {
    "id": "swivel-barrel--1-46kg-r25-size-1-10pcs",
    "name": "Swivel Barrel #1 46kg",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-1-46kg-r25-size-110pcs.webp",
    "rating": 4.5,
    "reviews": 21,
    "description": "Size #1 barrel swivels rated to 46kg. 10 per pack for building strong surf and rock fishing rigs."
  },
  {
    "id": "swivel-barrel--1-0-53kg-r28-10pcs",
    "name": "Swivel Barrel #1/0 53kg",
    "price": 28,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-1-0-53kgr2810pcs.webp",
    "rating": 4.5,
    "reviews": 24,
    "description": "Heavy-duty 1/0 barrel swivels rated to 53kg breaking strain. 10-pack for rigging up for big gamefish."
  },
  {
    "id": "swivel-barrel--2-46kg-r25-size-2-10-pcs",
    "name": "Swivel Barrel #2 46kg",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-2-46kgr25.size-210-pcs.webp",
    "rating": 4.5,
    "reviews": 12,
    "description": "Size #2 barrel swivels with 46kg capacity. 10-piece pack for everyday rock and surf rig building."
  },
  {
    "id": "swivel-barrel--2-0-r38-55kg-10-pcs",
    "name": "Swivel Barrel #2/0",
    "price": 38,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-2-0-r3855kg10-pcs.webp",
    "rating": 4.5,
    "reviews": 12,
    "description": "Size 2/0 barrel swivels rated to 55kg. 10 per pack for constructing heavy-duty bottom and surf rigs."
  },
  {
    "id": "swivel-barrel--4-30kg-r20-size-4-10pcs",
    "name": "Swivel Barrel #4 30kg",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-4-30kg-r20-size-410pcs.webp",
    "rating": 4.5,
    "reviews": 18,
    "description": "Size #4 barrel swivels rated to 30kg. 10-pack ideal for lighter surf setups and bream rigs."
  },
  {
    "id": "swivel-barrel--6-27kg-r18-part-2",
    "name": "Swivel Barrel #6 27kg",
    "price": 18,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-6-27kg-r18-part-2.webp",
    "rating": 4.5,
    "reviews": 14,
    "description": "Size #6 barrel swivels with 27kg capacity. 10-piece pack suitable for medium-weight traces and bottom rigs."
  },
  {
    "id": "swivel-barrel--6-27kg-r18",
    "name": "Swivel Barrel #6 27kg",
    "price": 18,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-6-27kg-r18.webp",
    "rating": 4.5,
    "reviews": 15,
    "description": "Versatile #6 barrel swivels rated to 27kg. Reliable connection point for traces, sinkers, and hook lengths."
  },
  {
    "id": "swivel-barrel-linx--8-r20-size-6-qty-10",
    "name": "Swivel Barrel Linx #8",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-linx-8-r20size-6qty=10.webp",
    "rating": 4.5,
    "reviews": 11,
    "brand": "Linx",
    "description": "Size #8 Linx barrel swivels. 10-pack of compact, low-profile swivels for finesse and light tackle fishing applications."
  },
  {
    "id": "swivel-barrel-linx--8-r20-size-8-qty-10",
    "name": "Swivel Barrel Linx #8",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-linx-8-r20size-8qty=10.webp",
    "rating": 4.5,
    "reviews": 17,
    "brand": "Linx",
    "description": "10-pack of premium #8 Linx barrel swivels with ultra-smooth rotation. Prevents line twist for cleaner casts and retrieves."
  },
  {
    "id": "swivel-barrel-lx--1-r35-size-1-qty-10",
    "name": "Swivel Barrel Lx #1",
    "price": 35,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-1-r35size-1qty=10.webp",
    "rating": 4.5,
    "reviews": 22,
    "brand": "Linx",
    "description": "Heavy-duty #1 Linx barrel swivels, 10 per pack. Built for strong surf and boat rigs with reliable knot points."
  },
  {
    "id": "swivel-barrel-lx--4-r20",
    "name": "Swivel Barrel Lx #4",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-4-r20.webp",
    "rating": 4.5,
    "reviews": 24,
    "brand": "Linx",
    "description": "Compact #4 Linx barrel swivels for lighter rigs. Clean barrel design ensures tangle-free rotation during retrieval."
  },
  {
    "id": "swivel-snap--2-r30-size-2-25kg-10-pcs",
    "name": "Swivel Snap #2",
    "price": 30,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-2-r30-size-225kg10-pcs.webp",
    "rating": 4.5,
    "reviews": 8,
    "description": "Size #2 snap swivels rated to 25kg. 10 per pack with quick-change snap for fast lure and sinker swaps."
  },
  {
    "id": "swivel-snap--4-r25-size-4-25kg-10pcs",
    "name": "Swivel Snap #4",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-4-r25-size-425kg10pcs.webp",
    "rating": 4.5,
    "reviews": 7,
    "description": "Size #4 snap swivels with 25kg breaking strain. Easy clip-on design for fast leader and trace changes."
  },
  {
    "id": "swivel-snap--6-r20-size-6-18kg-10pcs",
    "name": "Swivel Snap #6",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-6-r20-size-618kg10pcs.webp",
    "rating": 4.5,
    "reviews": 9,
    "description": "Small #6 snap swivels rated to 18kg. 10-pack for light tackle, bait, and lure fishing setups."
  },
  {
    "id": "tesco-fine-paint-brush-6--r50",
    "name": "Tesco Fine Paint Brush(6)",
    "price": 50,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/tesco-fine-paint-brush6-r50.webp",
    "rating": 4.5,
    "reviews": 19,
    "brand": "Tesco",
    "description": "Set of 6 fine-tipped paint brushes for detail work, model painting, and crafts. Soft synthetic bristles with tapered handles."
  },
  {
    "id": "tin-snip-dingqi-250mm-r130-s",
    "name": "Tin Snip Dingqi 250mm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/tin-snip-dingqi-250mm-r130-s.webp",
    "rating": 4.5,
    "reviews": 19,
    "brand": "Dingqi",
    "description": "250mm tin snips for cutting sheet metal, flashing, and ductwork. Straight-cut design with compound leverage action."
  },
  {
    "id": "tin-snip-dingqi-250mm-r130",
    "name": "Tin Snip Dingqi 250mm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/tin-snip-dingqi-250mm-r130.webp",
    "rating": 4.5,
    "reviews": 7,
    "brand": "Dingqi",
    "description": "Left or right offset 250mm tin snips for curved cuts in thin sheet metal, aluminium, and vinyl. Spring-loaded handles."
  },
  {
    "id": "trace--3-r10",
    "name": "Trace #3",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/trace-3-r10.webp",
    "rating": 4.5,
    "reviews": 12,
    "description": "Pre-tied #3 trace for rock and surf fishing. Strong mono leader with a reliable hook and loop knot."
  },
  {
    "id": "tube-cutter-3-30mm-r94",
    "name": "Tube Cutter 3/30mm",
    "price": 94,
    "category": "Hardware",
    "image": "/product-photos-and-products/tube-cutter-3-30mm-r94.webp",
    "rating": 4.5,
    "reviews": 9,
    "description": "Adjustable tube cutter for pipes from 3mm to 30mm diameter. Clean, square cuts on copper, PVC, and thin-wall steel tubing."
  },
  {
    "id": "turbo-gas-lighter-r388",
    "name": "LK's Turbo Gas Lighter",
    "price": 388,
    "category": "Camping",
    "image": "/product-photos-and-products/turbo-gas-lighter-r388.webp",
    "rating": 4.5,
    "reviews": 9,
    "brand": "LK's",
    "description": "Premium LK's turbo gas lighter with powerful windproof jet flame. Perfect for lighting braais, gas stoves, and campfires."
  },
  {
    "id": "vice-grip-250mm-dingqi-r120",
    "name": "Vice Grip 250mm Dingqi",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/vice-grip-250mm-dingqi-r120.webp",
    "rating": 4.5,
    "reviews": 18,
    "brand": "Dingqi",
    "description": "250mm vice grip locking pliers with adjustable jaw width. Locks firmly onto nuts, bolts, and pipe fittings for hands-free holding."
  },
  {
    "id": "water-paints-tube-12-r52",
    "name": "Water Paints Tube 12",
    "price": 52,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/water-paints-tube-12-r52.webp",
    "rating": 4.5,
    "reviews": 19,
    "description": "12-tube watercolour paint set with vivid, blendable colours. Great for painting, journaling, and school art projects."
  },
  {
    "id": "windproof-camping-stove-k-203-r150",
    "name": "Windproof Camping Stove K/203",
    "price": 150,
    "category": "Camping",
    "image": "/product-photos-and-products/windproof-campine-stove-k-203-r150.webp",
    "rating": 4.5,
    "reviews": 16,
    "description": "Windproof camping stove (K/203) with efficient burner design. Cooks in windy conditions where open flames fail. Compact and portable."
  },
  {
    "id": "wire-stripper-dingqi-r79",
    "name": "Wire Stripper Dingqi",
    "price": 79,
    "category": "Hardware",
    "image": "/product-photos-and-products/wire-stripper-dingqi-r79.webp",
    "rating": 4.5,
    "reviews": 16,
    "brand": "Dingqi",
    "description": "Self-adjusting wire stripper for stripping insulation from 0.2mm to 6mm cables. One-handed operation with integrated cutter."
  },
  {
    "id": "wire-stripper-l-d-dingqi-r49",
    "name": "Wire Stripper L/d Dingqi",
    "price": 49,
    "category": "Hardware",
    "image": "/product-photos-and-products/wire-stripper-l-d-dingqi-r49.webp",
    "rating": 4.5,
    "reviews": 6,
    "brand": "Dingqi",
    "description": "Lightweight wire stripper with ergonomic design for comfortable extended use. Strips, cuts, and loops thin wire with precision."
  },
  {
    "id": "working-glove-dingqi-r30",
    "name": "Working Glove Dingqi",
    "price": 30,
    "category": "Hardware",
    "image": "/product-photos-and-products/working-glove-dingqi-r30.webp",
    "rating": 4.5,
    "reviews": 22,
    "brand": "Dingqi",
    "description": "Heavy-duty work gloves with reinforced palm and knuckle protection. Breathable fabric back for comfort during manual labour."
  },
  {
    "id": "wsom-outdoor-bento-pot-r155",
    "name": "Owsom Outdoor Bento Pot",
    "price": 155,
    "category": "Kitchen",
    "image": "/product-photos-and-products/wsom-outdoor-bento-pot-r155.webp",
    "rating": 4.5,
    "reviews": 19,
    "brand": "Owsom",
    "description": "Compact outdoor bento pot with built-in steam tray. Hard-anodised aluminium heats evenly for one-pot camp meals."
  },
  {
    "id": "wsom-outdoor-one-piece-pot-set-kettle-r199",
    "name": "Owsom Outdoor One/piece Pot Set Kettle",
    "price": 199,
    "category": "Kitchen",
    "image": "/product-photos-and-products/wsom-outdoor-one-piece-pot-set-kettle-r199.webp",
    "rating": 4.5,
    "reviews": 18,
    "brand": "Owsom",
    "description": "All-in-one pot set with built-in kettle for boiling water and cooking meals. Nests together for minimal pack space."
  },
  {
    "id": "wsom-table-camping-r320",
    "name": "Owsom Table Camping 56cm",
    "price": 320,
    "category": "Camping",
    "image": "/product-photos-and-products/wsom-table-camping-r320.webp",
    "rating": 4.5,
    "reviews": 5,
    "brand": "Owsom",
    "description": "Foldable 56cm camping table with lightweight aluminium frame. Sets up in seconds and folds flat for car boot storage."
  },
  {
    "id": "loomis-franklin-surge-12-r1380",
    "name": "Loomis & Franklin Surge (3-piece) 12 foot",
    "price": 1380,
    "category": "Fishing",
    "brand": "Loomis & Franklin",
    "image": "/Loomis & Franklin Surge (3-piece) 12 foot R1380.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Premium Loomis & Franklin Surge 3-piece 12 foot rod for serious anglers."
  },
  {
    "id": "loomis-franklin-shore-master-10-r710",
    "name": "Loomis and Franklin Shore Master 3-piece 10 foot",
    "price": 710,
    "category": "Fishing",
    "brand": "Loomis & Franklin",
    "image": "/Loomis and Franklin Shore Master 3-piece 10,12and 14 foot R710,R965,R850.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Loomis and Franklin Shore Master 3-piece 10 foot rod."
  },
  {
    "id": "loomis-franklin-shore-master-12-r965",
    "name": "Loomis and Franklin Shore Master 3-piece 12 foot",
    "price": 965,
    "category": "Fishing",
    "brand": "Loomis & Franklin",
    "image": "/Loomis and Franklin Shore Master 3-piece 10,12and 14 foot R710,R965,R850.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Loomis and Franklin Shore Master 3-piece 12 foot rod."
  },
  {
    "id": "loomis-franklin-shore-master-14-r850",
    "name": "Loomis and Franklin Shore Master 3-piece 14 foot",
    "price": 850,
    "category": "Fishing",
    "brand": "Loomis & Franklin",
    "image": "/Loomis and Franklin Shore Master 3-piece 10,12and 14 foot R710,R965,R850.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Loomis and Franklin Shore Master 3-piece 14 foot rod."
  },
  {
    "id": "okuma-g-force-hd-fiberglass-10-r450",
    "name": "Okuma G-Force HD Fiberglass 10",
    "price": 450,
    "category": "Fishing",
    "brand": "Okuma",
    "image": "/Okuma G-Force HD Fiberglass 10 R450.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Okuma G-Force HD Fiberglass 10 foot rod."
  },
  {
    "id": "okuma-wave-power-pro-12-r1242",
    "name": "Okuma Wave Power Pro 3pc surf spinning rods 24 ton 12ft",
    "price": 1242,
    "category": "Fishing",
    "brand": "Okuma",
    "image": "/okuma Wave Power Pro 3pc surf spinning rods 24 ton R1242 12ft.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Okuma Wave Power Pro 3-piece surf spinning rod 24 ton 12ft."
  },
  {
    "id": "agulhas-xh-10ft-r700",
    "name": "Agulhas XH 10ft",
    "price": 700,
    "category": "Fishing",
    "image": "/product-photos-and-products/agulhas-xh.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Agulhas XH 10ft rod - R700"
  },
  {
    "id": "agulhas-xh-11ft-r760",
    "name": "Agulhas XH 11ft",
    "price": 760,
    "category": "Fishing",
    "image": "/product-photos-and-products/agulhas-xh.webp",
    "rating": 5.0,
    "reviews": 0,
    "description": "Agulhas XH 11ft rod - R760"
  },
  {
    "id": "agulhas-xh-12ft-r830",
    "name": "Agulhas XH 12ft",
    "price": 830,
    "category": "Fishing",
    "image": "/product-photos-and-products/agulhas-xh.jpeg",
    "rating": 5.0,
    "reviews": 0,
    "description": "Agulhas XH 12ft rod - R830"
  }
];

export const TEAM: TeamMember[] = [];

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "GeneralStore",
  "name": "Indoor and Outdoor",
  "image": "https://indoorandoutdoor.co.za/logo.svg",
  "@id": "https://indoorandoutdoor.co.za",
  "url": "https://indoorandoutdoor.co.za",
  "telephone": "+27 72 099 0138",
  "email": "byns@indoorandoutdoor.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47 Churchstreet",
    "addressLocality": "Lambertsbay",
    "addressRegion": "Western Cape",
    "postalCode": "8130",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -32.0936917,
    "longitude": 18.3006816
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ]
};
