export interface Flavor {
  id: string;
  name: string;
  image: string;
  image2?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  flavors: Flavor[];
  description: string;
  keyBenefits?: string[];
  howToUse: string;
  ingredients?: string;
  storage?: string;

  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'creatine-monohydrate',
    name: 'Creatine Monohydrate',
    category: 'amino-acids',
    description: 'Evolab Essentials Creatine Monohydrate in Ice Peach flavor. Each serving delivers 5g of pure creatine monohydrate. Naturally & artificially flavored dietary supplement. Net weight: 300g, 60 servings.',
    flavors: [
      {
        id: 'f1-1',
        name: 'Bluebarry',
        image: '/images/creaatine.png',

      },
      {
        id: 'f1-2',
        name: 'Ice Peach',
        image: '/images/creaatine 2.png',
      },
      
    ],
    keyBenefits: ['Supports increased muscle strength and power output.', 'Enhances athletic performance during high-intensity exercise.', ' Promotes muscle recovery and growth.', 'Helps increase muscle creatine stores for improved training capacity.'],
    howToUse: 'Mix one scoop (5g) with water or your preferred beverage. Consume daily, ideally before or after your workout. Can be taken with or without food.',
    ingredients: '100% Pure Pharmaceutical-Grade Creatine Monohydrate (5g per serving).',
    storage: 'Store in a cool, dry place away from direct sunlight. Keep container tightly sealed.',
    featured: true,
  },
  {
    id: '2',
    slug: 'cream-of-rice',
    name: 'Cream of Rice',
    category: 'carbohydrates',
    description: 'Evolab Nutrition Cream of Rice in Vanilla Cheesecake flavor. Provides 48g of carbohydrates per serving. Naturally & artificially flavored dietary supplement. Net weight: 2kg, 40 servings.',
    flavors: [
      {
        id: 'f2-1',
        name: 'CHOCOLATE CHEESECAKE',
        image: '/images/cream of rise.png',
      },
      {
        id: 'f2-2',
        name: 'VANILLA CHEESECAKE',
        image: '/images/cream of rise - 2.png',
      },
      
    ],
    keyBenefits: ['Provides fast-digesting, clean carbohydrates for sustained energy.', 'Ideal for pre or post-workout fueling. Easy on the digestive system.', 'Supports glycogen replenishment after intense training sessions.', 'Versatile base for smoothies, shakes, or meals. Can be customized with flavors and mix-ins.'],
    howToUse: 'Mix one serving with hot or warm water and stir well until smooth. Best consumed before or after training. Can be enjoyed as a meal or snack at any time of day.',
    ingredients: 'White Rice Flour, Flavouring, Salt, Sucralose.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
    featured: true,
  },
  {
    id: '3',
    slug: 'eaa-plus',
    name: 'EAA Plus',
    category: 'amino-acids',
    description: 'Evolab Essentials EAA Plus in Fruit Burst flavor. Contains 8000mg of Essential Amino Acids (EAA) and 2000mg of Glutamine per serving. Naturally & artificially flavored dietary supplement. Net weight: 500g, 100/50 servings.',
    flavors: [
      {
        id: 'f3-1',
        name: 'FRUIT BURST',
        image: '/images/EAA 1.png',
      },
    ],
    keyBenefits: ['Provides all essential amino acids to support muscle protein synthesis.', 'Glutamine supports muscle recovery and immune function.', 'Helps prevent muscle breakdown during and after training.', 'Promotes hydration and endurance during workouts.'],
    howToUse: 'Mix one scoop with 300-400ml of cold water. Consume during or after your workout. Can also be taken between meals to support amino acid levels throughout the day.',
    ingredients: 'EAA Complex (L-Leucine, L-Lysine, L-Threonine, L-Tryptophan, L-Isoleucine, L-Valine, L-Methionine, L-Phenylalanine, L-Histidine), Maltodextrin, Acid (Citric Acid), Colour (Caramel), Flavouring, Sweetener (Sucralose), Pyridoxine Hydrochloride.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '4',
    slug: 'fuel',
    name: 'FUEL',
    category: 'carbohydrates',
    description: 'Evolab Nutrition Fuel Premium Endurance Formula in Orange flavor. Delivers 50g of carbohydrates per serving. Supports hydration, endurance, and performance. Naturally & artificially flavored dietary supplement. Net weight: 2kg, 40 servings.',
    flavors: [
      {
        id: 'f4-1',
        name: 'ORANGE',
        image: '/images/fuel -1.png',
      },
      
    ],
    keyBenefits: ['Provides sustained energy through high-quality carbohydrates.', 'Enhances endurance and athletic performance.', 'Supports hydration during prolonged exercise.', 'Ideal for endurance athletes and high-intensity training sessions.'],
    ingredients: 'Natural Flavor, Citric Acid, Natural Color (Red Beet), Sucralose.',
    howToUse: 'Mix one serving with water and consume before or during your workout. Adjust water amount based on desired taste intensity. Best used during endurance activities or long training sessions.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
    featured: true,
  },
  {
    id: '5',
    slug: 'legend-pre-workout',
    name: 'LEGEND PRE-WORKOUT',
    category: 'energy-burn',
    description: 'Evolab Essentials Legend Pre Workout in Lemonade flavor. Contains 400mg Caffeine, 4000mg Citrulline, and 4000mg Beta-Alanine per serving. Naturally & artificially flavored dietary supplement. Net weight: 500g, 100/50 servings.',
    flavors: [
      {
        id: 'f5-1',
        name: 'Blueberry ',
        image: '/images/Legend.png',
      },
      {
        id: 'f5-2',
        name: 'Lemonade', 
        image: '/images/pre work lemon.jpg',
      },
    ],
    keyBenefits: ['Boosts energy and mental focus with high-dose caffeine.', ' Citrulline enhances blood flow and muscle pumps.', 'Beta-Alanine reduces fatigue and increases endurance.', 'Maximizes workout performance and training intensity.'],
    ingredients: 'Vitamin C, Niacin, Vitamin B6, Vitamin B12, Selenium, Beta-Alanine, Arginine AKG (of which Arginine, Citrulline Malate, of which Citrulline), Taurine, Caffeine Anhydrous, Alpha-GPC (Alpha-Glyceryl Phosphoryl Choline 50%), Glucuronolactone, Sodium.',
    howToUse: 'Mix one scoop with 250-300ml of cold water. Take 20-30 minutes before your workout. Not recommended for caffeine-sensitive individuals. Do not exceed recommended dose. Avoid use before bedtime.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '6',
    slug: 'whey-protein',
    name: 'Whey Protein',
    category: 'protein',
    description: 'Evolab Nutrition Whey Protein in Banana flavor. Delivers 25g of protein and 7g of EAAs per serving. Naturally & artificially flavored dietary supplement. Net weight: 2kg.',
    flavors: [
      {
        id: 'f6-1',
        name: 'CHOCOLATE MlikSHAKE',
        image: '/images/Whey.png',
      },
      {
        id: 'f6-2',
        name: 'BANANA',
        image: '/images/whey banana.png',
      },
    ],
    keyBenefits: ['Supports muscle growth and repair with high-quality whey protein.', 'Rich in essential amino acids (EAAs) for optimal muscle protein synthesis.', 'Promotes recovery after intense training.', 'Convenient and delicious way to meet daily protein needs.',],
    howToUse: 'Mix one scoop with 200-250ml of water or milk. Consume immediately after your workout for best results. Can also be taken as a protein-rich snack between meals. Shake well before drinking.',
    ingredients: 'Protein Blend (Whey Protein Concentrate, Whey Protein Isolate, Whey Protein Hydrolysate), Natural and Artificial Flavors, Salt, Gum Blend (Cellulose Gum, Xanthan Gum, Carrageenan), Sunflower Lecithin, Sucralose, Acesulfame Potassium, Ground Cinnamon, Lactase, Prohydrolase (Proteases from Bacillus and Pineapple), Dipotassium Phosphate.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '7',
    slug: 'evo-burn',
    name: 'Evo Burn',
    category: 'energy-burn',
    description: 'Evolab Essential Evo Burn in Lemonada flavor. Contains 2000mg L-Carnitine, 500mg Green Tea Extract, and 2000mg CLA per serving. Naturally & artificially flavored dietary supplement. Net weight: 300g, 60 servings.',
    flavors: [
      {
        id: 'f7-1',
        name: 'Lemonade',
        image: '/images/burn.png',
      },
      
    ],
    keyBenefits: ['Supports fat burning and weight management with L-Carnitine.', 'Green Tea Extract boosts metabolism and provides antioxidant support.', 'CLA helps reduce body fat and preserve lean muscle mass.', 'Ideal for those looking to enhance their fat loss journey.' ],
    howToUse: 'Mix one scoop with 250-300ml of cold water. Take once daily, preferably before exercise or in the morning. Best results when combined with a balanced diet and regular exercise program.',
    ingredients: 'CLA 2000mg, L-Carnitine 2000mg, and a blending dosage each of Green Tea, Green Coffee Bean, Nettle Leaf, Garcinia Cambogia, Ginger Root, and Capsicum Extracts. It is rounded out with 5mg of Yohimbine and 5mg of Black Pepper Extract.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '8',
    slug: 'iso-protein',
    name: 'Iso Protein',
    category: 'protein',
    description: 'Evolab Nutrition Iso Protein in Chocolate Milkshake flavor. Delivers 27g of protein and 9g of EAAs per serving. Naturally & artificially flavored dietary supplement. Net weight: 2kg.',
    flavors: [
      {
        id: 'f8-1',
        name: 'CHOCOLATE MILKSHAKE',
        image: '/images/Iso c.png',
      },
    ],
    keyBenefits: ['Supports lean muscle growth and repair with high-quality whey isolate protein.', 'Rich in essential amino acids (EAAs) for optimal muscle protein synthesis.', 'Low in fat and carbohydrates — ideal for lean bulking or cutting phases.', 'Promotes fast recovery after intense training sessions.'],
    howToUse: 'Mix one scoop with 200-250ml of water or milk. Consume immediately after your workout for best results. Can also be taken as a high-protein snack between meals. Shake well before drinking.',
    ingredients: 'Cold Processed Micro & Ultra Filtered Whey Protein Isolate, Long Chain Whey Protein Isolate, and Hydrolyzed Whey Protein Isolate, Natural & Artificial Flavors.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '9',
    slug: 'pump',
    name: 'Pump',
    category: 'energy-burn',
    description: 'Evolab Essentials Pump Pre Workout in Watermelon flavor. Contains 4000mg L-Citrulline, 2000mg L-Arginine, and 3000mg Beta-Alanine per serving. Naturally & artificially flavored dietary supplement. Net weight: 300g, 60/30 servings.',
    flavors: [
      {
        id: 'f9-1',
        name: 'WARTERMELON',
        image: '/images/Pump.png',
      },
      
    ],
        keyBenefits: ['Enhances muscle pumps and blood flow with L-Citrulline and L-Arginine.', ' Beta-Alanine reduces muscle fatigue and improves endurance.', 'Boosts strength and performance during high-intensity training.', 'Delivers explosive power and sustained energy throughout your workout.'],
    howToUse: 'TAdd one serving into 150-250ml of water and mix. Consume 20-30 minutes before your workout to maximize energy and focus..',
    ingredients: 'Vitamin C, Niacin, Vitamin B6, Vitamin B12, Selenium, Beta-Alanine, Arginine AKG (of which Arginine, Citrulline Malate, of which Citrulline), Taurine, Glucuronolactone, Sodium.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
  {
    id: '10',
    slug: 'mass-gainer',
    name: 'Mass Gainer',
    category: 'protein',
    description: 'Evolab Nutrition Mass Gainer – Premium Protein & Clean Carb Blend. Provides 100g Carbs, 70g Protein, 5g Creatine, 20g EAA, and 10g BCAA per serving. Naturally flavored dietary supplement. Net weight: 7kg, 70 servings.',
    flavors: [
      {
        id: 'f10-1',
        name: 'Capsule',
        image: '/images/mass evo.jpg',
        image2: '/images/mass.jpg',
      },
    ],
   keyBenefits: ['Supports solid weight gain and muscle mass & size.', 'Boosts strength and endurance naturally.', ' Promotes muscle building and testosterone support.', 'High protein and carb blend ideal for hard gainers and athletes looking to increase mass.'],
    howToUse: 'Add one scoop of Mass Gainer into 300-400ml of cold water or milk in a shaker cup. Mix well until the powder is fully dissolved. For best results, consume 2-3 servings three times a day in the morning, before or after workout. Ensure you drink enough water throughout the day.',
    ingredients: 'Whey Protein (Whey Protein Concentrate, Whey Protein Isolate, Whey Protein Hydrolysate), Maltodextrin, Oat Flour, Fructose, Starch, Dextrose, Salt, Protease, Sucralose, Potassium, Lactase.',
    storage: 'Store in a cool and dry place. Heat and sunlight may damage the bottle. Made according to international specifications and standards, under the supervision of people specialized in nutrition.',
  },
];

export const categories = [
  { id: 'protein', name: 'Protein', description: 'Whey, Iso, and Mass Gainer' },
  { id: 'amino-acids', name: 'Amino Acids', description: 'Creatine Monohydrate and EAA Plus' },
  { id: 'carbohydrates', name: 'Carbohydrates', description: 'Cream of Rice and Fuel' },
  { id: 'energy-burn', name: 'Energy & Burn', description: 'Legend Pre Workout, Evo Burn, and Pump' },
];
