import { Product, Category, TeamMember } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'fishing',
    name: 'Fishing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZPNVHrHlMI9ED-8v8PA5-UJlg0iG9vbwxWooynOHdi2YnY-jC6F9WSpvPmRUXIw27RPyeIo6uaNFk0lPCK76KGn_9xcxsrkrsf0SvpkyPs_ghUd_TqJtlAnCVUOoN3VPoMj79xjypHGE_bN7sYcY_bG3gWMN7oZd0vokcges-UOOyDr3p7bABm_MCT9TYh5BG2zx5MODzGk0YnJ6WFsQmOQ6v8Xj8iEUIP4zUDLnXiGzx_gtgjzuN0x7OBCdL9RQCMvzGNeaIJ7A',
    description: 'Rods, reels, fresh bait, and tackle for the local species.'
  },
  {
    id: 'camping',
    name: 'Camping',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbvm6ssConMNuMf8zUwgWA8-cCk4X5JPXxQBPLkvfIuOGpPAHTbSYpQT5tDo3L9wVZ1Ym-Ab8rCSa_LjkUZHD8u2bPdRSipJfHaF-hi_0PihnMyK2nCqQ7PZk5ylbvoXNtbJX6AB1XBIqpDImrrDuNON2ox_lHMTqpzQEA-CBpCg5yn0wlzh_18MryWNlq7ML8hoIzVN2JSBuPUcnxlWsRprr1T5esuFisWnuuuyupxSfFtuXsZSGC7RCT9l5I58hB5iZeUgv9LBQ',
    description: 'Tents, sleeping bags, and gas equipment for the dunes.'
  },
  {
    id: 'braai',
    name: 'Braai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTTGZj_-bqBxaC7ErmTGxBiz1feTthqc86cnaPRVmTqWWMoKLic0qN7mVJ6lkwNQ-cNoyXzSZ9JUS3YvZBbe6TerIbVt33EHu_2CpGGZDgvnsjDfRH4arq-g4H3cMTUzwmeVQ-hQbu4Fbk9fyRwJMWvG26rGeGYqhyet5qKRXzZq5nc7p4vCTPOJnd5ANGJ-khb65IUa4x5LRFb_OH71O1bgpD48HNzYZCAA98Dq263Puf2LajrRjuJoCzki7Wc64XvVJDn1CI2jk',
    description: 'Grids, tongs, wood, and spices for the perfect fire.'
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWw9BS0waHw6aIPt_mngodwZLuXcUFZxiGCoOEAd2M8c8uTE_mY7le-cDkUCgslHJbULANJAHlgg3PiqmfoqmoF5qEqQrzB0AbEVOtt_uk4uFYzrh452gBj0dXPIjp55A-Dj5Olw5ik354s3jItonWG4wvCbif0WD4Iuwj2kAJILnLQH6Hx4ooUzjwRUIlVJJhd-pGMmDlQaahSuMXipzWaCJTm7tadQ1_Vuit7KfQ7G6nF-bsYviMGNfeTPKrrGlTlhdVDl7YBso',
    description: 'Cast iron pots, enamelware, and daily essentials.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'gas-stove-pro',
    name: 'Portable Gas Stove Pro',
    price: 765,
    originalPrice: 899,
    category: 'Camping',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNucGPWy7mnvoJW9QTOBA7IhPs_bypAjdGpEIk0uZN_I3E9zDK5v4bOlhDOjnQKeL9SCgeczsJIDrmMEWWOp-dutB4miz0NEvn4qlnJcdEGXfnPye5XeEbLY6tKHaMKZ1LwrTnJhZURBxPt6-Xofo5uQQWHGUiEEwitwFdRbCT2cObXJ4pMtVkJKqiEuw1EQVwCRUa9L-0Th2iQwjdMNVKfp_k6qLJBfGPfLXhwIEe-h80j8fbxHyq21UFVu5vqpin5yke6wTo5a4',
    rating: 4.5,
    reviews: 12,
    discount: 15,
    description: 'Compact single burner for easy transport. Features automatic piezo ignition and wind shield.'
  },
  {
    id: 'coastal-surf-reel',
    name: 'Coastal Surf Reel 5000',
    price: 1250,
    category: 'Fishing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVHDunEXZHZ16jWIZbVPhaQLV7kTVTZ4KeWNf4q8HQrD4PJSK5jCGvJ35zZBlPq-y3S90QQfzOyDZWVSLzN1aPbT5K8qtdje2HZk3OOzgU6IMDQ7bjTeJGmQKj3E07YiZyD6ugD92SNOZwQPPfLSPCKyLVz1L28uUS7NTO-h-YaIx05zo02k25pqhX2IrHs37wnzybfDdHCRDwINSlt9tthq5q4ZNiwG-GPgFlndU7m6LYzJ1bt5ETdTbuZ1cRyXFIgwx_MWi13MM',
    rating: 5,
    reviews: 8,
    description: 'Engineered specifically for the rugged West Coast conditions, the Coastal Surf 5000 offers superior casting distance and robust drag performance. Its corrosion-resistant graphite body is sealed against saltwater intrusion, making it a reliable companion for catching Galjoen or Steenbras.'
  },
  {
    id: 'braai-set',
    name: 'Premium Stainless Braai Set',
    price: 450,
    category: 'Braai',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIviXPA0ooaonq0OGyVZ5pasuZSWBkp0iWpAlcsT-6oq0vHMtYmIxjsNAAH5RRICNMnK-u3dbOwBdoAHtnQnXh3ATrUAhmOgtBvRHmnn1m6Be5SLY_Sp0hGaJrKJN8t1dmpAchpPCFxc0wCpPu2nMuepK5rdlX_OHkcDxK05aHmmgwRp-0BO0mIR6Jh8Xyf1JWbFd04gkVP4kw4FLJzNx8ApNxFFD2UJQI02b7WjvEBOV4qOCjS9P28hFXRfr8WcQNihx0wCUkiCo',
    rating: 4.5,
    reviews: 15,
    isHot: true,
    description: 'Complete set including long-handle tongs, fork, and spatula in a carrying case.'
  },
  {
    id: 'cast-iron-pot',
    name: 'Cast Iron Pot #3',
    price: 999,
    category: 'Kitchen & Outdoors',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg_IMTddSZ5-LavBeDA31qX8iKOPQNIK-ueByzwyc4_LaN0ytzmXzYf_OBDwml0rnKaHxKoZt6HLSi4cbKJjh7kYCncWk-StDvp68rakG5gGxXfhhy7L14LbCWUlolkrq9KSI7hYL8VgqmOOSwLjG1Q-egLDpHVbjwxRJtG-Yh2QVzNqjSI-jGcEPfEq8GX3fdWyeqwW4N1tuAn1a86k_BDSRpWE8jpSC9i0flGrqOeYKs6OF8eGIYT81i0kukf5Kz_9OMogXMJ8M',
    rating: 5,
    reviews: 32,
    description: 'Traditional 3-legged cast iron pot for authentic open fire cooking. Pre-seasoned.'
  },
  {
    id: 'spin-rod',
    name: 'Graphite Spin Rod 7ft',
    price: 550,
    category: 'Fishing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZPNVHrHlMI9ED-8v8PA5-UJlg0iG9vbwxWooynOHdi2YnY-jC6F9WSpvPmRUXIw27RPyeIo6uaNFk0lPCK76KGn_9xcxsrkrsf0SvpkyPs_ghUd_TqJtlAnCVUOoN3VPoMj79xjypHGE_bN7sYcY_bG3gWMN7oZd0vokcges-UOOyDr3p7bABm_MCT9TYh5BG2zx5MODzGk0YnJ6WFsQmOQ6v8Xj8iEUIP4zUDLnXiGzx_gtgjzuN0x7OBCdL9RQCMvzGNeaIJ7A',
    rating: 4.5,
    reviews: 4,
    description: 'Medium action graphite rod, perfect for lagoon fishing and light surf casting.'
  },
  {
    id: 'dome-tent',
    name: '3-Person Dome Tent',
    price: 1499,
    originalPrice: 1699,
    category: 'Camping',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbvm6ssConMNuMf8zUwgWA8-cCk4X5JPXxQBPLkvfIuOGpPAHTbSYpQT5tDo3L9wVZ1Ym-Ab8rCSa_LjkUZHD8u2bPdRSipJfHaF-hi_0PihnMyK2nCqQ7PZk5ylbvoXNtbJX6AB1XBIqpDImrrDuNON2ox_lHMTqpzQEA-CBpCg5yn0wlzh_18MryWNlq7ML8hoIzVN2JSBuPUcnxlWsRprr1T5esuFisWnuuuyupxSfFtuXsZSGC7RCT9l5I58hB5iZeUgv9LBQ',
    rating: 5,
    reviews: 21,
    description: 'Waterproof with easy setup system. Includes rain fly and carry bag.'
  },
  {
    id: 'wooden-utensils',
    name: 'Wooden Utensil Set',
    price: 220,
    category: 'Kitchen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWw9BS0waHw6aIPt_mngodwZLuXcUFZxiGCoOEAd2M8c8uTE_mY7le-cDkUCgslHJbULANJAHlgg3PiqmfoqmoF5qEqQrzB0AbEVOtt_uk4uFYzrh452gBj0dXPIjp55A-Dj5Olw5ik354s3jItonWG4wvCbif0WD4Iuwj2kAJILnLQH6Hx4ooUzjwRUIlVJJhd-pGMmDlQaahSuMXipzWaCJTm7tadQ1_Vuit7KfQ7G6nF-bsYviMGNfeTPKrrGlTlhdVDl7YBso',
    rating: 4.5,
    reviews: 18,
    description: 'Hand-carved olive wood spoons and spatulas. Perfect for non-stick cookware.'
  },
  {
    id: 'spinner-reel',
    name: 'Lagoon Spinner 2000',
    price: 850,
    category: 'Fishing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVHDunEXZHZ16jWIZbVPhaQLV7kTVTZ4KeWNf4q8HQrD4PJSK5jCGvJ35zZBlPq-y3S90QQfzOyDZWVSLzN1aPbT5K8qtdje2HZk3OOzgU6IMDQ7bjTeJGmQKj3E07YiZyD6ugD92SNOZwQPPfLSPCKyLVz1L28uUS7NTO-h-YaIx05zo02k25pqhX2IrHs37wnzybfDdHCRDwINSlt9tthq5q4ZNiwG-GPgFlndU7m6LYzJ1bt5ETdTbuZ1cRyXFIgwx_MWi13MM',
    rating: 4.5,
    reviews: 6,
    description: 'Lightweight reel specifically designed for smaller lagoon catches and kids.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'johan',
    name: 'Johan Smit',
    role: 'Owner & Founder',
    bio: 'The visionary who started it all. Can tell you the tide schedule from memory.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqnoOTIjlWs3DDmrAZdpSovrOq8NnxEFrcKEMPasib3Uvy5zKoN4s-0IaJxzGgbgI3icGZwJS8aVj51IcQ2WrZZtINv-utzmDH0RiWFTM0hLtv4o3-XJN6caso8CnqKL-hXBlgXzWPqxhHXEa1C4NMW15u3J2dKU88TUrRBgTh62IfhbyhgwkUYU-q8FHPjMNuclX9NFyld8QpD8j0-OrcZl59JnR8aBoKVGi7IRkw2nWtd_-8S9OFhYiIJPCFg_DniB5dl62JMbI'
  },
  {
    id: 'sarah',
    name: 'Sarah van Zyl',
    role: 'Store Manager',
    bio: 'Keeps the ship running smooth. Expert on all things camping and logistics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlWa0ax0vOanjtk6NnUsOacEcU-6J9KF31_ftJozWoLId6zC0nnny7HdZRDQ5wgDeVDKMSSMhwR9kdTJjtJfiJi-pNuG6i8ZUdFjBIb3Wx46VbnkTioXsopexbBA8llmELg1Z1VCSsTdSi1AHBO4gWqjHqBA8qg9N24KBwphR7ijdTOB0OPWdIaFddpDSNxGb4cQInEzAJbWR3CreS_9_Y1ltpSJylCIPhwLdrCS2ya5LhuA2SLldIZs79VwYoO3HWYeaAQciEJuQ'
  },
  {
    id: 'david',
    name: 'David Peterson',
    role: 'Fishing Specialist',
    bio: 'If it swims, David knows how to catch it. Ask him for the secret spots.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJDvxuq9MnvnhAhHY78NFIBY3Jma-Ewp7Zq6564Ei5lH0_cdsrRg9FsO5u1Kn0RgvmI3PYgRzVj4h-RQ2XdTpgMuYZozyOf8b4hRGvI2fNqZS6RvLrR2W5R8Ry5EQFMqoYHCDC2Am7r-AKnMgXTWhychDk2JYrLUJ20iCrVfknidt9LXwJyVkx_9JvpDzEP5LmgviHIgaJKZauwR8T2VtqEiVusylmxk20xnUk_VHzSOqIHH0lX2qpATXCUCyARy6orRR1qw1F7w4'
  },
  {
    id: 'elize',
    name: 'Elize Louw',
    role: 'Home & Braai',
    bio: 'Curates our kitchen collection and knows the best spices for a snoek braai.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLXyH1YU3S2AfxMhr_W-LM1pISsylh_i5zEwAeh1iPbT-jl-Rrmpf6YGVwE0slIHxVtYJfxquTPmrpN4rZ5TBCsuU51vxoCVjuep55ZruZSqmaQRea9kiv_T0jqNqhVxam01rLoryDZuPl6-Ns_mDd4W1vO5-jYWkBvvlGU-qVbrvL62KjlMXzwIOwgb4JbIJm8V3mn9SkxFDnLOOaJ0Jn1VTg9MD1wB_N4kIzFwBkoYhAnug_G3830TKjryQBePjUJ5iUZVaCeZM'
  }
];
