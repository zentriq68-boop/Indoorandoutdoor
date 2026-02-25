import { Product, Category, TeamMember } from './types';

export const CATEGORIES: Category[] = [
  {
    "id": "fishing",
    "name": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-1-r35size-1qty=10.png",
    "description": "Rods, reels, fresh bait, and tackle for the local species."
  },
  {
    "id": "camping",
    "name": "Camping",
    "image": "/product-photos-and-products/windproof-campine-stove-k-203-r150.jpeg",
    "description": "Tents, sleeping bags, and gas equipment for the dunes."
  },
  {
    "id": "braai",
    "name": "Braai",
    "image": "/product-photos-and-products/lks-snoek-braai-grid-r323.jpeg",
    "description": "Grids, tongs, wood, and spices for the perfect fire."
  },
  {
    "id": "kitchen",
    "name": "Kitchen",
    "image": "/product-photos-and-products/owsom-4pc-pot-set-small-r199.jpeg",
    "description": "Cast iron pots, enamelware, and daily essentials."
  },
  {
    "id": "hardware",
    "name": "Hardware",
    "image": "/product-photos-and-products/dingqi-claw-hammer-700g-r120.png",
    "description": "Tools, hardware, and safety gear for every project."
  },
  {
    "id": "fashion",
    "name": "Fashion",
    "image": "/product-photos-and-products/handbag-cotton-road-r399.jpeg",
    "description": "Stylish bags, hats, and accessories for the West Coast."
  },
  {
    "id": "arts",
    "name": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-40x50cm-leopard-r138.png",
    "description": "Canvas, paints, and brushes for your creative side."
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "tile-trowel-r58",
    "name": "Tile Trowel",
    "price": 58,
    "category": "Hardware",
    "image": "/product-photos-and-products/tile-trowel-r58.png",
    "rating": 5.0,
    "reviews": 0,
    "description": "Professional quality Tile Trowel for your tiling projects."
  },
  {
    "id": "plastering-trowel-r58",
    "name": "Plastering Trowel",
    "price": 58,
    "category": "Hardware",
    "image": "/product-photos-and-products/plastering-trowel-r58.png",
    "rating": 5.0,
    "reviews": 0,
    "description": "Durable Plastering Trowel for smooth finishing."
  },
  {
    "id": "t-line-fishing-line-100kg-r95",
    "name": "T-Line 100kg Fishing Line",
    "price": 95,
    "category": "Fishing",
    "image": "/product-photos-and-products/t-line-100kg-r95.png",
    "rating": 5.0,
    "reviews": 0,
    "description": "High-strength T-Line 100kg fishing line, 1.5mm x 100m."
  },
  {
    "id": "canvas-3pc-set-r150",
    "name": "Canvas 3pc Set",
    "price": 150,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/canvas-3pc-set-r150.png",
    "rating": 5.0,
    "reviews": 0,
    "description": "Beautiful Canvas 3pc set for your art and decor."
  },
  {
    "id": "adrenaline-bite-alarm-large-r99",
    "name": "Adrenaline Bite Alarm Large",
    "price": 99,
    "category": "General",
    "image": "/product-photos-and-products/adrenaline-bite-alarm-large-r99.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Adrenaline Bite Alarm Large for your outdoor and indoor needs."
  },
  {
    "id": "aluminium-lunch-box-1500ml-r190",
    "name": "Aluminium Lunch Box 1500ml",
    "price": 190,
    "category": "Kitchen",
    "image": "/product-photos-and-products/aluminium-lunch-box-1500ml-r190.jpeg",
    "rating": 4.5,
    "reviews": 17,
    "description": "Quality Aluminium Lunch Box 1500ml for your outdoor and indoor needs."
  },
  {
    "id": "aluminium-lunch-box-800ml-r140",
    "name": "Aluminium Lunch Box 800ml",
    "price": 140,
    "category": "Kitchen",
    "image": "/product-photos-and-products/aluminium-lunch-box-800ml-r140.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Aluminium Lunch Box 800ml for your outdoor and indoor needs."
  },
  {
    "id": "artist-brush-wooden-r42",
    "name": "Artist Brush Wooden",
    "price": 42,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/artist-brush-wooden-r42.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Artist Brush Wooden for your outdoor and indoor needs."
  },
  {
    "id": "bag-carry-cotton-road-zip-r180",
    "name": "Bag Carry Cotton Road Zip",
    "price": 180,
    "category": "Fashion",
    "image": "/product-photos-and-products/bag-carry-cotton-road-zip-r180.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Bag Carry Cotton Road Zip for your outdoor and indoor needs."
  },
  {
    "id": "bag-w-p-protea-cotton-r-r158",
    "name": "Bag W P Protea Cotton R",
    "price": 158,
    "category": "Fashion",
    "image": "/product-photos-and-products/bag-w-p-protea-cotton-r-r158.jpeg",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Bag W P Protea Cotton R for your outdoor and indoor needs."
  },
  {
    "id": "beam-trace--2-r15",
    "name": "Beam Trace #2",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/beam-trace-2-r15.jpeg",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Beam Trace #2 for your outdoor and indoor needs."
  },
  {
    "id": "bolt-cutter-350mm-dingqi-r240",
    "name": "Bolt Cutter 350mm Dingqi",
    "price": 240,
    "category": "Hardware",
    "image": "/product-photos-and-products/bolt-cutter-350mm-dingqi-r240.png",
    "rating": 4.5,
    "reviews": 17,
    "description": "Quality Bolt Cutter 350mm Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "bolt-cutter-600mm-r400",
    "name": "Bolt Cutter 600mm",
    "price": 400,
    "category": "Hardware",
    "image": "/product-photos-and-products/bolt-cutter-600mm-r400.png",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Bolt Cutter 600mm for your outdoor and indoor needs."
  },
  {
    "id": "braid-loomis-8x-150m-r149",
    "name": "Braid Loomis 8x 150m",
    "price": 149,
    "category": "Fishing",
    "image": "/product-photos-and-products/braid-loomis-8x-150m-r149.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Braid Loomis 8x 150m for your outdoor and indoor needs."
  },
  {
    "id": "bream-trace-float--2-r20",
    "name": "Bream Trace Float #2",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/bream-trace-float-2-r20.jpeg",
    "rating": 4.5,
    "reviews": 21,
    "description": "Quality Bream Trace Float #2 for your outdoor and indoor needs."
  },
  {
    "id": "camping-cutlery-set-steel-r290",
    "name": "Camping Cutlery Set Steel",
    "price": 290,
    "category": "Camping",
    "image": "/product-photos-and-products/camping-cutlery-set-steel-r290.jpeg",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Camping Cutlery Set Steel for your outdoor and indoor needs."
  },
  {
    "id": "caulking-gun-dingqi-225mm-r80",
    "name": "Caulking Gun Dingqi 225mm",
    "price": 80,
    "category": "Hardware",
    "image": "/product-photos-and-products/caulking-gun-dingqi-225mm-r80.png",
    "rating": 4.5,
    "reviews": 18,
    "description": "Quality Caulking Gun Dingqi 225mm for your outdoor and indoor needs."
  },
  {
    "id": "circle-hook--2-adrenalin-r17-size-2-10-pcs",
    "name": "Circle Hook #2 Adrenalin",
    "price": 17,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-2-adrenalin-r17size-210-pcs.png",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Circle Hook #2 Adrenalin for your outdoor and indoor needs."
  },
  {
    "id": "circle-hook--2-0-adrenalin-r19-10pcs-size-2-0",
    "name": "Circle Hook #2/0 Adrenalin",
    "price": 19,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-2-0-adrenalin-r1910pcssize-2-0.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Circle Hook #2/0 Adrenalin for your outdoor and indoor needs."
  },
  {
    "id": "circle-hook-size--4-0-adrenaline-r27-10pcs-size-4-0",
    "name": "Circle Hook Size #4/0 Adrenaline",
    "price": 27,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-size-4-0-adrenaline-r2710pcssize-4-0.png",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Circle Hook Size #4/0 Adrenaline for your outdoor and indoor needs."
  },
  {
    "id": "circle-hook-size-6-0-adrenaline-r42-10pcs",
    "name": "Circle Hook Size 6/0 Adrenaline",
    "price": 42,
    "category": "Fishing",
    "image": "/product-photos-and-products/circle-hook-size-6-0-adrenaline-r4210pcs.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Circle Hook Size 6/0 Adrenaline for your outdoor and indoor needs."
  },
  {
    "id": "combination-pliers-dingqi-r90",
    "name": "Combination Pliers Dingqi",
    "price": 90,
    "category": "Hardware",
    "image": "/product-photos-and-products/combination-pliers-dingqi-r90.png",
    "rating": 4.5,
    "reviews": 23,
    "description": "Quality Combination Pliers Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "cotton-road-purse-windpump-smal-r180",
    "name": "Cotton Road Purse Windpump Smal",
    "price": 180,
    "category": "Fashion",
    "image": "/product-photos-and-products/cotton-road-purse-windpump-smal-r180.jpeg",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Cotton Road Purse Windpump Smal for your outdoor and indoor needs."
  },
  {
    "id": "dingqi-claw-hammer-700g-r120",
    "name": "Dingqi Claw Hammer 700g",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-claw-hammer-700g-r120.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Dingqi Claw Hammer 700g for your outdoor and indoor needs."
  },
  {
    "id": "dingqi-pipe-cutter-42mm-r124",
    "name": "Dingqi Pipe Cutter 42mm",
    "price": 124,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-pipe-cutter-42mm-r124.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Dingqi Pipe Cutter 42mm for your outdoor and indoor needs."
  },
  {
    "id": "dingqi-sprayer-r120",
    "name": "Dingqi Sprayer",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/dingqi-sprayer-r120.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Dingqi Sprayer for your outdoor and indoor needs."
  },
  {
    "id": "earmuf-dingqi-r65",
    "name": "Earmuf Dingqi",
    "price": 65,
    "category": "Hardware",
    "image": "/product-photos-and-products/earmuf-dingqi-r65.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Earmuf Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "elf-drift-trace-hook--4-r20",
    "name": "Elf Drift Trace Hook #4",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/elf-drift-trace-hook-4-r20.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Elf Drift Trace Hook #4 for your outdoor and indoor needs."
  },
  {
    "id": "elf-drift-trace-hook--6-r25",
    "name": "Elf Drift Trace Hook #6",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/elf-drift-trace-hook-6-r25.jpeg",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Elf Drift Trace Hook #6 for your outdoor and indoor needs."
  },
  {
    "id": "epoxy-ab-dingqi-r24",
    "name": "Epoxy Ab Dingqi",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/epoxy-ab-dingqi-r24.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Epoxy Ab Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "fishing-beads--5-r20",
    "name": "Fishing Beads #5",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/fishing-beads-5-r20.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Fishing Beads #5 for your outdoor and indoor needs."
  },
  {
    "id": "fishing-glo-beads-5mm-20-s-r15",
    "name": "Fishing Glo Beads 5mm 20's",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/fishing-glo-beads-5mm-20s-r15.png",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Fishing Glo Beads 5mm 20's for your outdoor and indoor needs."
  },
  {
    "id": "folding-shovel-camping-r140",
    "name": "Folding Shovel Camping",
    "price": 140,
    "category": "Camping",
    "image": "/product-photos-and-products/folding-shovel-camping-r140.jpeg",
    "rating": 4.5,
    "reviews": 21,
    "description": "Quality Folding Shovel Camping for your outdoor and indoor needs."
  },
  {
    "id": "hand-pump-dingqi-r170",
    "name": "Hand Pump Dingqi",
    "price": 170,
    "category": "Hardware",
    "image": "/product-photos-and-products/hand-pump-dingqi-r170.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Hand Pump Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "handbag-cotton-road-r399",
    "name": "Handbag Cotton Road",
    "price": 399,
    "category": "Fashion",
    "image": "/product-photos-and-products/handbag-cotton-road-r399.jpeg",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Handbag Cotton Road for your outdoor and indoor needs."
  },
  {
    "id": "heat-gun-2000w-dingqi-r380",
    "name": "Heat Gun 2000w Dingqi",
    "price": 380,
    "category": "Hardware",
    "image": "/product-photos-and-products/heat-gun-2000w-dingqi-r380.png",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Heat Gun 2000w Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "hole-saw-set-5pc-dingqi-r86",
    "name": "Hole Saw Set 5pc Dingqi",
    "price": 86,
    "category": "Hardware",
    "image": "/product-photos-and-products/hole-saw-set-5pc-dingqi-r86.png",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Hole Saw Set 5pc Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "hook-remover-adrenalin-r75",
    "name": "Hook Remover Adrenalin",
    "price": 75,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-remover-adrenalin-r75.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Hook Remover Adrenalin for your outdoor and indoor needs."
  },
  {
    "id": "hook-sharpener-adrenaline-r30",
    "name": "Hook Sharpener Adrenaline",
    "price": 30,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-sharpener-adrenaline-r30.png",
    "rating": 4.5,
    "reviews": 23,
    "description": "Quality Hook Sharpener Adrenaline for your outdoor and indoor needs."
  },
  {
    "id": "hook-spearpoint--10-0-r25",
    "name": "Hook Spearpoint #10/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-10-0-r25.jpeg",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Hook Spearpoint #10/0 for your outdoor and indoor needs."
  },
  {
    "id": "hook-spearpoint--11-0-r25",
    "name": "Hook Spearpoint #11/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-11-0-r25.jpeg",
    "rating": 4.5,
    "reviews": 18,
    "description": "Quality Hook Spearpoint #11/0 for your outdoor and indoor needs."
  },
  {
    "id": "hook-spearpoint--12-0-r25",
    "name": "Hook Spearpoint #12/0",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/hook-spearpoint-12-0-r25.jpeg",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Hook Spearpoint #12/0 for your outdoor and indoor needs."
  },
  {
    "id": "hooks-r5-10pc",
    "name": "Hooks",
    "price": 5,
    "category": "Fishing",
    "image": "/product-photos-and-products/hooks-r5-10pc.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Hooks for your outdoor and indoor needs."
  },
  {
    "id": "insulated-s-driver-dingqi-r160",
    "name": "Insulated S/driver Dingqi",
    "price": 160,
    "category": "Hardware",
    "image": "/product-photos-and-products/insulated-s-driver-dingqi-r160.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Insulated S/driver Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "khoki-lighter-highclass-zip-r70",
    "name": "Khoki Lighter Highclass Zip",
    "price": 70,
    "category": "Camping",
    "image": "/product-photos-and-products/khoki-lighter-highclass-zip-r70.png",
    "rating": 4.5,
    "reviews": 20,
    "description": "Quality Khoki Lighter Highclass Zip for your outdoor and indoor needs."
  },
  {
    "id": "kingfisher-hook--2-0-r42",
    "name": "Kingfisher Hook #2/0",
    "price": 42,
    "category": "Fishing",
    "image": "/product-photos-and-products/kingfisher-hook-2-0-r42.jpeg",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Kingfisher Hook #2/0 for your outdoor and indoor needs."
  },
  {
    "id": "knife-sharpener-adrenaline-r40",
    "name": "Knife Sharpener Adrenaline",
    "price": 40,
    "category": "General",
    "image": "/product-photos-and-products/knife-sharpener-adrenaline-r40.png",
    "rating": 4.5,
    "reviews": 21,
    "description": "Quality Knife Sharpener Adrenaline for your outdoor and indoor needs."
  },
  {
    "id": "land-it-hook--9-0-5pc-r21",
    "name": "Land/it Hook #9/0 5pc",
    "price": 21,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hook-9-0-5pc-r21.jpeg",
    "rating": 4.5,
    "reviews": 21,
    "description": "Quality Land/it Hook #9/0 5pc for your outdoor and indoor needs."
  },
  {
    "id": "land-it-hooks--10-0-5pcs-r27",
    "name": "Land/it Hooks #10/0 5pcs",
    "price": 27,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hooks-10-0-5pcs-r27.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Land/it Hooks #10/0 5pcs for your outdoor and indoor needs."
  },
  {
    "id": "land-it-hooks--12-0-5pc-r29",
    "name": "Land/it Hooks #12/0 5pc",
    "price": 29,
    "category": "Fishing",
    "image": "/product-photos-and-products/land-it-hooks-12-0-5pc-r29.jpeg",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Land/it Hooks #12/0 5pc for your outdoor and indoor needs."
  },
  {
    "id": "level-40cm-r120",
    "name": "Level 40cm",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-40cm-r120.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Level 40cm for your outdoor and indoor needs."
  },
  {
    "id": "level-60cm-r130",
    "name": "Level 60cm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-60cm-r130.png",
    "rating": 4.5,
    "reviews": 20,
    "description": "Quality Level 60cm for your outdoor and indoor needs."
  },
  {
    "id": "level-80cm-r150",
    "name": "Level 80cm",
    "price": 150,
    "category": "Hardware",
    "image": "/product-photos-and-products/level-80cm-r150.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Level 80cm for your outdoor and indoor needs."
  },
  {
    "id": "lk-s-304-stainless-steel-grid-r756",
    "name": "Lk's 304 Stainless Steel Grid",
    "price": 756,
    "category": "Braai",
    "image": "/product-photos-and-products/lks-304-stainless-steel-grid-r756.jpeg",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Lk's 304 Stainless Steel Grid for your outdoor and indoor needs."
  },
  {
    "id": "lk-s-snoek-braai-grid-r323",
    "name": "Lk's Snoek Braai Grid",
    "price": 323,
    "category": "Braai",
    "image": "/product-photos-and-products/lks-snoek-braai-grid-r323.jpeg",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Lk's Snoek Braai Grid for your outdoor and indoor needs."
  },
  {
    "id": "long-nose-pliers-dingqi-r76",
    "name": "Long Nose Pliers Dingqi",
    "price": 76,
    "category": "Hardware",
    "image": "/product-photos-and-products/long-nose-pliers-dingqi-r76.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Long Nose Pliers Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "luminous-glowbead-10x17mm-r15",
    "name": "Luminous Glowbead 10x17mm",
    "price": 15,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-10x17mm-r15.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Luminous Glowbead 10x17mm for your outdoor and indoor needs."
  },
  {
    "id": "luminous-glowbead-6x10mm-r10-green",
    "name": "Luminous Glowbead 6x10mm",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-6x10mm-r10-green.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Luminous Glowbead 6x10mm for your outdoor and indoor needs."
  },
  {
    "id": "luminous-glowbead-6x10mm-r10",
    "name": "Luminous Glowbead 6x10mm",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/luminous-glowbead-6x10mm-r10.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Luminous Glowbead 6x10mm for your outdoor and indoor needs."
  },
  {
    "id": "mackerel-trace-r65-you-get-2",
    "name": "Mackerel Trace",
    "price": 65,
    "category": "Fishing",
    "image": "/product-photos-and-products/mackerel-trace-r65you-get-2.png",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Mackerel Trace for your outdoor and indoor needs."
  },
  {
    "id": "multimeter-dingqi-digital-r90",
    "name": "Multimeter Dingqi Digital",
    "price": 90,
    "category": "Hardware",
    "image": "/product-photos-and-products/multimeter-dingqi-digital-r90.png",
    "rating": 4.5,
    "reviews": 17,
    "description": "Quality Multimeter Dingqi Digital for your outdoor and indoor needs."
  },
  {
    "id": "mustad-fishing-hooks--2-0-r38",
    "name": "Mustad Fishing Hooks #2/0",
    "price": 38,
    "category": "Fishing",
    "image": "/product-photos-and-products/mustad-fishing-hooks-2-0-r38.jpeg",
    "rating": 4.5,
    "reviews": 20,
    "description": "Quality Mustad Fishing Hooks #2/0 for your outdoor and indoor needs."
  },
  {
    "id": "mustad-fishing-hooks--5-0-r60",
    "name": "Mustad Fishing Hooks #5/0",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/mustad-fishing-hooks-5-0-r60.jpeg",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Mustad Fishing Hooks #5/0 for your outdoor and indoor needs."
  },
  {
    "id": "offshore-squid-10cm-glow-r50",
    "name": "Offshore Squid 10cm Glow",
    "price": 50,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-10cm-glow-r50.png",
    "rating": 4.5,
    "reviews": 20,
    "description": "Quality Offshore Squid 10cm Glow for your outdoor and indoor needs."
  },
  {
    "id": "offshore-squid-12cm-glow-r60-green",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60-green.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Offshore Squid 12cm Glow for your outdoor and indoor needs."
  },
  {
    "id": "offshore-squid-12cm-glow-r60-red",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60-red.png",
    "rating": 4.5,
    "reviews": 23,
    "description": "Quality Offshore Squid 12cm Glow for your outdoor and indoor needs."
  },
  {
    "id": "offshore-squid-12cm-glow-r60",
    "name": "Offshore Squid 12cm Glow",
    "price": 60,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-12cm-glow-r60.png",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Offshore Squid 12cm Glow for your outdoor and indoor needs."
  },
  {
    "id": "offshore-squid-15cm-pink-r70",
    "name": "Offshore Squid 15cm Pink",
    "price": 70,
    "category": "Fishing",
    "image": "/product-photos-and-products/offshore-squid-15cm-pink-r70.png",
    "rating": 4.5,
    "reviews": 12,
    "description": "Quality Offshore Squid 15cm Pink for your outdoor and indoor needs."
  },
  {
    "id": "oil-paint-12colors-r60",
    "name": "Oil Paint 12colors",
    "price": 60,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/oil-paint-12colors-r60.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Oil Paint 12colors for your outdoor and indoor needs."
  },
  {
    "id": "owsom-4pc-pot-set-small-r199",
    "name": "Owsom 4pc Pot Set Small",
    "price": 199,
    "category": "Kitchen",
    "image": "/product-photos-and-products/owsom-4pc-pot-set-small-r199.jpeg",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Owsom 4pc Pot Set Small for your outdoor and indoor needs."
  },
  {
    "id": "owsom-outdoor-four-piece-pot-set-r156",
    "name": "Owsom Outdoor Four/piece Pot Set",
    "price": 156,
    "category": "Kitchen",
    "image": "/product-photos-and-products/owsom-outdoor-four-piece-pot-set-r156.jpeg",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Owsom Outdoor Four/piece Pot Set for your outdoor and indoor needs."
  },
  {
    "id": "packable-cotton-road-hat-r90",
    "name": "Packable Cotton Road Hat",
    "price": 90,
    "category": "Fashion",
    "image": "/product-photos-and-products/packable-cotton-road-hat-r90.jpeg",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Packable Cotton Road Hat for your outdoor and indoor needs."
  },
  {
    "id": "paint-by-number-30x30cm-giraffe-r88",
    "name": "Paint By Number 30x30cm Giraffe",
    "price": 88,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-30x30cm-giraffe-r88.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Paint By Number 30x30cm Giraffe for your outdoor and indoor needs."
  },
  {
    "id": "paint-by-number-40x50cm-leopard-r138",
    "name": "Paint By Number 40x50cm Leopard",
    "price": 138,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-number-40x50cm-leopard-r138.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Paint By Number 40x50cm Leopard for your outdoor and indoor needs."
  },
  {
    "id": "paint-by-numer-40x40cm-cat-r112",
    "name": "Paint By Numer 40x40cm Cat",
    "price": 112,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/paint-by-numer-40x40cm-cat-r112.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Paint By Numer 40x40cm Cat for your outdoor and indoor needs."
  },
  {
    "id": "palette-set-6pc-r25",
    "name": "Palette Set 6pc",
    "price": 25,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/palette-set-6pc-r25.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Palette Set 6pc for your outdoor and indoor needs."
  },
  {
    "id": "pipe-wrench-10--dingqi-r140",
    "name": "Pipe Wrench 10' Dingqi",
    "price": 140,
    "category": "Hardware",
    "image": "/product-photos-and-products/pipe-wrench-10-dingqi-r140.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Pipe Wrench 10' Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "pipe-wrench-200mm-r99",
    "name": "Pipe Wrench 200mm",
    "price": 99,
    "category": "Hardware",
    "image": "/product-photos-and-products/pipe-wrench-200mm-r99.png",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Pipe Wrench 200mm for your outdoor and indoor needs."
  },
  {
    "id": "plier-pipe-dingqi-r110",
    "name": "Plier Pipe Dingqi",
    "price": 110,
    "category": "Hardware",
    "image": "/product-photos-and-products/plier-pipe-dingqi-r110.png",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Plier Pipe Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "poprivet-dingqi-large-r170",
    "name": "Poprivet Dingqi Large",
    "price": 170,
    "category": "Hardware",
    "image": "/product-photos-and-products/poprivet-dingqi-large-r170.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Poprivet Dingqi Large for your outdoor and indoor needs."
  },
  {
    "id": "poprivet-dingqi-small",
    "name": "Poprivet Dingqi Small",
    "price": 0,
    "category": "Hardware",
    "image": "/product-photos-and-products/poprivet-dingqi-small.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Poprivet Dingqi Small for your outdoor and indoor needs."
  },
  {
    "id": "portable-lamp-r140",
    "name": "Portable Lamp",
    "price": 140,
    "category": "Camping",
    "image": "/product-photos-and-products/portable-lamp-r140.jpeg",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Portable Lamp for your outdoor and indoor needs."
  },
  {
    "id": "pva-feeding-bags-60x-120mm-r25",
    "name": "Pva Feeding Bags 60x 120mm",
    "price": 25,
    "category": "Fashion",
    "image": "/product-photos-and-products/pva-feeding-bags-60x-120mm-r25.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Pva Feeding Bags 60x 120mm for your outdoor and indoor needs."
  },
  {
    "id": "pva-feeding-bags-80x-120mm-r27",
    "name": "Pva Feeding Bags 80x 120mm",
    "price": 27,
    "category": "Fashion",
    "image": "/product-photos-and-products/pva-feeding-bags-80x-120mm-r27.png",
    "rating": 4.5,
    "reviews": 23,
    "description": "Quality Pva Feeding Bags 80x 120mm for your outdoor and indoor needs."
  },
  {
    "id": "pva-mesh-5m-37mm-refill-r99",
    "name": "Pva Mesh 5m 37mm Refill",
    "price": 99,
    "category": "General",
    "image": "/product-photos-and-products/pva-mesh-5m-37mm-refill-r99.png",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Pva Mesh 5m 37mm Refill for your outdoor and indoor needs."
  },
  {
    "id": "pvc-householg-glove-n-c-r24",
    "name": "Pvc Householg Glove N/c",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/pvc-householg-glove-n-c-r24.png",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Pvc Householg Glove N/c for your outdoor and indoor needs."
  },
  {
    "id": "reel-loomis-x-tide-400-r495",
    "name": "Reel Loomis X Tide 400",
    "price": 495,
    "category": "Fishing",
    "image": "/product-photos-and-products/reel-loomis-x-tide-400-r495.png",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Reel Loomis X Tide 400 for your outdoor and indoor needs."
  },
  {
    "id": "safety-gloves-dingqi-r24",
    "name": "Safety Gloves Dingqi",
    "price": 24,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-gloves-dingqi-r24.png",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Safety Gloves Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "safety-goggles-dingqi-r55",
    "name": "Safety Goggles Dingqi",
    "price": 55,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-goggles-dingqi-r55.png",
    "rating": 4.5,
    "reviews": 20,
    "description": "Quality Safety Goggles Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "safety-goggles-r55-dingqi",
    "name": "Safety Goggles",
    "price": 55,
    "category": "Hardware",
    "image": "/product-photos-and-products/safety-goggles-r55-dingqi.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Safety Goggles for your outdoor and indoor needs."
  },
  {
    "id": "scraper-150mm-r40",
    "name": "Scraper 150mm",
    "price": 40,
    "category": "General",
    "image": "/product-photos-and-products/scraper-150mm-r40.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Scraper 150mm for your outdoor and indoor needs."
  },
  {
    "id": "screwdriver-11pc-dingqi",
    "name": "Screwdriver 11pc Dingqi",
    "price": 0,
    "category": "Hardware",
    "image": "/product-photos-and-products/screwdriver-11pc-dingqi.png",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Screwdriver 11pc Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "screwdriver-set-dingqi-7p-r44",
    "name": "Screwdriver Set Dingqi 7p",
    "price": 44,
    "category": "Hardware",
    "image": "/product-photos-and-products/screwdriver-set-dingqi-7p-r44.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Screwdriver Set Dingqi 7p for your outdoor and indoor needs."
  },
  {
    "id": "shad-trace-double-red-r25",
    "name": "Shad Trace Double Red",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/shad-trace-double-red-r25.jpeg",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Shad Trace Double Red for your outdoor and indoor needs."
  },
  {
    "id": "shifting-dingqi-200mm-r100",
    "name": "Shifting Dingqi 200mm",
    "price": 100,
    "category": "Hardware",
    "image": "/product-photos-and-products/shifting-dingqi-200mm-r100.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Shifting Dingqi 200mm for your outdoor and indoor needs."
  },
  {
    "id": "shifting-dingqi-250mm-r140",
    "name": "Shifting Dingqi 250mm",
    "price": 140,
    "category": "Hardware",
    "image": "/product-photos-and-products/shifting-dingqi-250mm-r140.png",
    "rating": 4.5,
    "reviews": 12,
    "description": "Quality Shifting Dingqi 250mm for your outdoor and indoor needs."
  },
  {
    "id": "side-cutter-dingqi-180mm-r100",
    "name": "Side Cutter Dingqi 180mm",
    "price": 100,
    "category": "Hardware",
    "image": "/product-photos-and-products/side-cutter-dingqi-180mm-r100.png",
    "rating": 4.5,
    "reviews": 13,
    "description": "Quality Side Cutter Dingqi 180mm for your outdoor and indoor needs."
  },
  {
    "id": "soldering-iron-40w-dingqi-r134",
    "name": "Soldering Iron 40w Dingqi",
    "price": 134,
    "category": "Hardware",
    "image": "/product-photos-and-products/soldering-iron-40w-dingqi-r134.png",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Soldering Iron 40w Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "south-africa-cotton-road-hat-denim-r96",
    "name": "South Africa Cotton Road Hat Denim",
    "price": 96,
    "category": "Fashion",
    "image": "/product-photos-and-products/south-africa-cotton-road-hat-denim-r96.jpeg",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality South Africa Cotton Road Hat Denim for your outdoor and indoor needs."
  },
  {
    "id": "spinner-dbl-30g-s-b-adrenalin-r45",
    "name": "Spinner Dbl 30g S B Adrenalin",
    "price": 45,
    "category": "Fishing",
    "image": "/product-photos-and-products/spinner-dbl-30g-s-b-adrenalin-r45.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Spinner Dbl 30g S B Adrenalin for your outdoor and indoor needs."
  },
  {
    "id": "spinner-dbl-30g-sil-adrenalin-r45",
    "name": "Spinner Dbl 30g Sil Adrenalin",
    "price": 45,
    "category": "Fishing",
    "image": "/product-photos-and-products/spinner-dbl-30g-sil-adrenalin-r45.png",
    "rating": 4.5,
    "reviews": 23,
    "description": "Quality Spinner Dbl 30g Sil Adrenalin for your outdoor and indoor needs."
  },
  {
    "id": "split-ring-scissors-r39",
    "name": "Split Ring Scissors",
    "price": 39,
    "category": "General",
    "image": "/product-photos-and-products/split-ring-scissors-r39.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Split Ring Scissors for your outdoor and indoor needs."
  },
  {
    "id": "swivel-3way-linx--2-r40-size-2-qty-10",
    "name": "Swivel 3way Linx #2",
    "price": 40,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-2-r40size-2qty=10.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Swivel 3way Linx #2 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-3way-linx--2-size-2-qty-10",
    "name": "Swivel 3way Linx #2 Size 2 Qty=10",
    "price": 0,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-2-size-2-qty=10.png",
    "rating": 4.5,
    "reviews": 6,
    "description": "Quality Swivel 3way Linx #2 Size 2 Qty=10 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-3way-linx--6-r25-r25",
    "name": "Swivel 3way Linx #6",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-3way-linx-6-r25-r25.png",
    "rating": 4.5,
    "reviews": 10,
    "description": "Quality Swivel 3way Linx #6 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--1-46kg-r25-size-1-10pcs",
    "name": "Swivel Barrel #1 46kg",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-1-46kg-r25-size-110pcs.png",
    "rating": 4.5,
    "reviews": 21,
    "description": "Quality Swivel Barrel #1 46kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--1-0-53kg-r28-10pcs",
    "name": "Swivel Barrel #1/0 53kg",
    "price": 28,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-1-0-53kgr2810pcs.png",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Swivel Barrel #1/0 53kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--2-46kg-r25-size-2-10-pcs",
    "name": "Swivel Barrel #2 46kg",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-2-46kgr25.size-210-pcs.png",
    "rating": 4.5,
    "reviews": 12,
    "description": "Quality Swivel Barrel #2 46kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--2-0-r38-55kg-10-pcs",
    "name": "Swivel Barrel #2/0",
    "price": 38,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-2-0-r3855kg10-pcs.png",
    "rating": 4.5,
    "reviews": 12,
    "description": "Quality Swivel Barrel #2/0 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--4-30kg-r20-size-4-10pcs",
    "name": "Swivel Barrel #4 30kg",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-4-30kg-r20-size-410pcs.png",
    "rating": 4.5,
    "reviews": 18,
    "description": "Quality Swivel Barrel #4 30kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--6-27kg-r18-part-2",
    "name": "Swivel Barrel #6 27kg",
    "price": 18,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-6-27kg-r18-part-2.png",
    "rating": 4.5,
    "reviews": 14,
    "description": "Quality Swivel Barrel #6 27kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel--6-27kg-r18",
    "name": "Swivel Barrel #6 27kg",
    "price": 18,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-6-27kg-r18.png",
    "rating": 4.5,
    "reviews": 15,
    "description": "Quality Swivel Barrel #6 27kg for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel-linx--8-r20-size-6-qty-10",
    "name": "Swivel Barrel Linx #8",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-linx-8-r20size-6qty=10.png",
    "rating": 4.5,
    "reviews": 11,
    "description": "Quality Swivel Barrel Linx #8 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel-linx--8-r20-size-8-qty-10",
    "name": "Swivel Barrel Linx #8",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-linx-8-r20size-8qty=10.png",
    "rating": 4.5,
    "reviews": 17,
    "description": "Quality Swivel Barrel Linx #8 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel-lx--1-r35-size-1-qty-10",
    "name": "Swivel Barrel Lx #1",
    "price": 35,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-1-r35size-1qty=10.png",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Swivel Barrel Lx #1 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-barrel-lx--4-r20",
    "name": "Swivel Barrel Lx #4",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-barrel-lx-4-r20.png",
    "rating": 4.5,
    "reviews": 24,
    "description": "Quality Swivel Barrel Lx #4 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-snap--2-r30-size-2-25kg-10-pcs",
    "name": "Swivel Snap #2",
    "price": 30,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-2-r30-size-225kg10-pcs.png",
    "rating": 4.5,
    "reviews": 8,
    "description": "Quality Swivel Snap #2 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-snap--4-r25-size-4-25kg-10pcs",
    "name": "Swivel Snap #4",
    "price": 25,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-4-r25-size-425kg10pcs.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Swivel Snap #4 for your outdoor and indoor needs."
  },
  {
    "id": "swivel-snap--6-r20-size-6-18kg-10pcs",
    "name": "Swivel Snap #6",
    "price": 20,
    "category": "Fishing",
    "image": "/product-photos-and-products/swivel-snap-6-r20-size-618kg10pcs.png",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Swivel Snap #6 for your outdoor and indoor needs."
  },
  {
    "id": "tesco-fine-paint-brush-6--r50",
    "name": "Tesco Fine Paint Brush(6)",
    "price": 50,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/tesco-fine-paint-brush6-r50.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Tesco Fine Paint Brush(6) for your outdoor and indoor needs."
  },
  {
    "id": "tin-snip-dingqi-250mm-r130-s",
    "name": "Tin Snip Dingqi 250mm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/tin-snip-dingqi-250mm-r130-s.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Tin Snip Dingqi 250mm for your outdoor and indoor needs."
  },
  {
    "id": "tin-snip-dingqi-250mm-r130",
    "name": "Tin Snip Dingqi 250mm",
    "price": 130,
    "category": "Hardware",
    "image": "/product-photos-and-products/tin-snip-dingqi-250mm-r130.png",
    "rating": 4.5,
    "reviews": 7,
    "description": "Quality Tin Snip Dingqi 250mm for your outdoor and indoor needs."
  },
  {
    "id": "trace--3-r10",
    "name": "Trace #3",
    "price": 10,
    "category": "Fishing",
    "image": "/product-photos-and-products/trace-3-r10.jpeg",
    "rating": 4.5,
    "reviews": 12,
    "description": "Quality Trace #3 for your outdoor and indoor needs."
  },
  {
    "id": "tube-cutter-3-30mm-r94",
    "name": "Tube Cutter 3/30mm",
    "price": 94,
    "category": "Hardware",
    "image": "/product-photos-and-products/tube-cutter-3-30mm-r94.png",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Tube Cutter 3/30mm for your outdoor and indoor needs."
  },
  {
    "id": "turbo-gas-lighter-r388",
    "name": "Turbo Gas Lighter",
    "price": 388,
    "category": "Camping",
    "image": "/product-photos-and-products/turbo-gas-lighter-r388.jpeg",
    "rating": 4.5,
    "reviews": 9,
    "description": "Quality Turbo Gas Lighter for your outdoor and indoor needs."
  },
  {
    "id": "vice-grip-250mm-dingqi-r120",
    "name": "Vice Grip 250mm Dingqi",
    "price": 120,
    "category": "Hardware",
    "image": "/product-photos-and-products/vice-grip-250mm-dingqi-r120.png",
    "rating": 4.5,
    "reviews": 18,
    "description": "Quality Vice Grip 250mm Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "water-paints-tube-12-r52",
    "name": "Water Paints Tube 12",
    "price": 52,
    "category": "Arts & Crafts",
    "image": "/product-photos-and-products/water-paints-tube-12-r52.png",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Water Paints Tube 12 for your outdoor and indoor needs."
  },
  {
    "id": "windproof-campine-stove-k-203-r150",
    "name": "Windproof Campine Stove K/203",
    "price": 150,
    "category": "Camping",
    "image": "/product-photos-and-products/windproof-campine-stove-k-203-r150.jpeg",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Windproof Campine Stove K/203 for your outdoor and indoor needs."
  },
  {
    "id": "wire-stripper-dingqi-r79",
    "name": "Wire Stripper Dingqi",
    "price": 79,
    "category": "Hardware",
    "image": "/product-photos-and-products/wire-stripper-dingqi-r79.png",
    "rating": 4.5,
    "reviews": 16,
    "description": "Quality Wire Stripper Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "wire-stripper-l-d-dingqi-r49",
    "name": "Wire Stripper L/d Dingqi",
    "price": 49,
    "category": "Hardware",
    "image": "/product-photos-and-products/wire-stripper-l-d-dingqi-r49.png",
    "rating": 4.5,
    "reviews": 6,
    "description": "Quality Wire Stripper L/d Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "working-glove-dingqi-r30",
    "name": "Working Glove Dingqi",
    "price": 30,
    "category": "Hardware",
    "image": "/product-photos-and-products/working-glove-dingqi-r30.png",
    "rating": 4.5,
    "reviews": 22,
    "description": "Quality Working Glove Dingqi for your outdoor and indoor needs."
  },
  {
    "id": "wsom-outdoor-bento-pot-r155",
    "name": "Wsom Outdoor Bento Pot",
    "price": 155,
    "category": "Kitchen",
    "image": "/product-photos-and-products/wsom-outdoor-bento-pot-r155.jpeg",
    "rating": 4.5,
    "reviews": 19,
    "description": "Quality Wsom Outdoor Bento Pot for your outdoor and indoor needs."
  },
  {
    "id": "wsom-outdoor-one-piece-pot-set-kettle-r199",
    "name": "Wsom Outdoor One/piece Pot Set Kettle",
    "price": 199,
    "category": "Kitchen",
    "image": "/product-photos-and-products/wsom-outdoor-one-piece-pot-set-kettle-r199.jpeg",
    "rating": 4.5,
    "reviews": 18,
    "description": "Quality Wsom Outdoor One/piece Pot Set Kettle for your outdoor and indoor needs."
  },
  {
    "id": "wsom-table-camping-r320",
    "name": "Wsom Table Camping",
    "price": 320,
    "category": "Camping",
    "image": "/product-photos-and-products/wsom-table-camping-r320.jpeg",
    "rating": 4.5,
    "reviews": 5,
    "description": "Quality Wsom Table Camping for your outdoor and indoor needs."
  }
];

export const TEAM: TeamMember[] = [];
