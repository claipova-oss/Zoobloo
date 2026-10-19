export interface Biome {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  soundType: 'savanna' | 'rainforest' | 'polar' | 'ocean';
  soundLabel: string;
  temperature: string;
  humidity: string;
  keySpecies: {
    name: string;
    scientificName: string;
    iucnStatus: 'Critically Endangered' | 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Least Concern';
    diet: string;
    habitatEnrichment: string;
    funFact: string;
  }[];
  conservationAction: string;
}

export interface RewildingStory {
  id: string;
  species: string;
  scientificName: string;
  image?: string;
  statusThen: string;
  statusNow: string;
  story: string;
  yearMilestone: string;
  keyStrategy: string;
}

export interface DailyScheduleItem {
  time: string;
  title: string;
  category: 'Veterinary' | 'Nutrition' | 'Enrichment' | 'Education' | 'Welfare';
  description: string;
  behindTheScenesDetail: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const ZOO_PILLARS = [
  {
    number: '01',
    title: 'Species Conservation & Genetics',
    summary: 'Modern zoos act as biological arks and genetic repositories through coordinated Species Survival Plans (SSPs).',
    details: 'Through global studbooks, accredited zoos match breeding pairs across continents to maintain genetic diversity in endangered populations, preventing inbreeding depression and holding species ready for rewilding.',
    impactStat: '1,000+ species safeguarded under active survival programs globally',
  },
  {
    number: '02',
    title: 'Scientific Research & Biology',
    summary: 'Non-invasive studies that are impossible in the dense wild provide crucial data for field conservationists.',
    details: 'Zoological scientists study hormone cycles, nutrition kinetics, sensory perception, and disease pathology. Much of what is known about elephant gestation or panda fertility was discovered in accredited zoological laboratories.',
    impactStat: 'Over 2,500 peer-reviewed wildlife biology papers published annually',
  },
  {
    number: '03',
    title: 'Environmental Education & Empathy',
    summary: 'Transforming abstract ecological crises into visceral personal connections that inspire environmental stewardship.',
    details: 'Over 700 million people visit zoos annually. Seeing a living snow leopard or coral ecosystem creates lasting emotional resonance that textbooks or screens cannot replicate, fostering community commitment to conservation.',
    impactStat: '700M+ visitors educated each year, the largest global classroom',
  },
  {
    number: '04',
    title: 'Animal Welfare & Cognitive Enrichment',
    summary: 'Pioneering veterinary medicine, habitat simulation, and psychological enrichment tailored to each animal.',
    details: 'Modern care prioritizes animal choice, mental engagement, and positive reinforcement. Animals are not coerced; they participate voluntarily in their own health screenings, ultrasound scans, and dental checks.',
    impactStat: 'Zero physical punishment: 100% voluntary positive reinforcement training',
  },
];

export const THEN_VS_NOW_COMPARISON = [
  {
    aspect: 'Primary Purpose',
    historic: 'Curiosity, spectacle, imperial prestige, and human entertainment.',
    modern: 'Conservation biology, species preservation, research, and wild habitat protection.',
  },
  {
    aspect: 'Habitat Design',
    historic: 'Sterile concrete pits, barred iron cages, and tiled exhibition boxes.',
    modern: 'Landscape immersion biomes with natural soil, thermal micro-zones, living flora, and hidden moats.',
  },
  {
    aspect: 'Animal Sourcing',
    historic: 'Direct capture and extraction of wild specimens from natural habitats.',
    modern: 'Over 95% of mammals are born within accredited captive networks under international studbook oversight.',
  },
  {
    aspect: 'Daily Life & Care',
    historic: 'Fixed feeding hours, stagnant confinement, and minimal mental stimulation.',
    modern: 'Sensory enrichment, scatter puzzle feeders, social group dynamics, and choice-based indoor/outdoor access.',
  },
  {
    aspect: 'Veterinary Science',
    historic: 'Reactive and rudimentary; little understanding of wild animal diets or mental distress.',
    modern: 'Preventative medicine, specialized pathology, advanced diagnostic imaging, and customized species nutritionists.',
  },
];

export const BIOMES: Biome[] = [
  {
    id: 'savanna',
    name: 'African Savanna Grassland',
    subtitle: 'Expansive open-plains ecosystem simulating the Serengeti & Maasai Mara',
    description: 'Designed as a multi-species shared habitat where herbivores coexist as they would in nature, sharing expansive grazing grounds and watering holes separated by subtle geological contours.',
    image: '/src/assets/images/hero_wildlife_sanctuary_1792412696427.jpg',
    soundType: 'savanna',
    soundLabel: 'Play Savanna Roar & Ambience',
    temperature: '24°C - 32°C',
    humidity: '35% - 50%',
    keySpecies: [
      {
        name: 'African Savanna Elephant',
        scientificName: 'Loxodonta africana',
        iucnStatus: 'Endangered',
        diet: 'Roughage grasses, browse branches, acacia pods, and mineral salt blocks',
        habitatEnrichment: 'Hanging hay nets at varying heights to exercise trunk reach and neck musculature',
        funFact: 'Elephants communicate over miles using low infrasound frequencies below the range of human hearing.',
      },
      {
        name: 'Plains Zebra',
        scientificName: 'Equus quagga',
        iucnStatus: 'Near Threatened',
        diet: 'Coarse grasses, Timothy hay, and botanical pellets',
        habitatEnrichment: 'Sand rolling pits and rotation across different pasture paddocks',
        funFact: 'No two zebras share identical stripes; each pattern acts as a unique biometric fingerprint.',
      },
      {
        name: 'Masai Giraffe',
        scientificName: 'Giraffa tippelskirchi',
        iucnStatus: 'Endangered',
        diet: 'High-perched leafy alfalfa, willow branches, and romaine lettuce',
        habitatEnrichment: 'Vertical puzzle feeders requiring intricate tongue manipulation',
        funFact: 'A giraffe tongue is up to 45 cm long and tinted dark blue-black to prevent sunburn.',
      },
    ],
    conservationAction: 'Funding anti-poaching patrols and community wildlife corridors in Kenya and Tanzania.',
  },
  {
    id: 'rainforest',
    name: 'Tropical Rainforest Canopy',
    subtitle: 'High-humidity multi-tier biodome with dense botanical strata',
    description: 'A micro-climate controlled greenhouse featuring cascading waterfalls, living soil micro-fauna, and suspended aerial walkways, mimicking the complex 3D architecture of Neotropical forests.',
    image: '/src/assets/images/habitat_rainforest_canopy_1792412696815.jpg',
    soundType: 'rainforest',
    soundLabel: 'Play Canopy Warbles & Calls',
    temperature: '26°C - 30°C',
    humidity: '75% - 90%',
    keySpecies: [
      {
        name: 'Jaguar',
        scientificName: 'Panthera onca',
        iucnStatus: 'Near Threatened',
        diet: 'Whole carcass feeding, beef joints, fish, and fortified poultry',
        habitatEnrichment: 'Deep plunge pools for aquatic swimming and scent trails of non-toxic spices',
        funFact: 'Jaguars possess the strongest bite force of any big cat relative to body size, able to pierce turtle shells.',
      },
      {
        name: 'Golden Lion Tamarin',
        scientificName: 'Leontopithecus rosalia',
        iucnStatus: 'Endangered',
        diet: 'Ripe tropical fruits, gum arabic tree secretions, crickets, and mealworms',
        habitatEnrichment: 'Complex flexible rope webs and natural vine ladders to encourage arboreal leaping',
        funFact: 'Nearly one-third of all wild golden lion tamarins descend from individuals born in zoos.',
      },
      {
        name: 'Scarlet Macaw',
        scientificName: 'Ara macao',
        iucnStatus: 'Least Concern',
        diet: 'Raw seeds, nuts in shells, palm fruits, and mineral clay supplements',
        habitatEnrichment: 'Heavy hardwood blocks to encourage natural beak foraging and destruction',
        funFact: 'Macaws can live over 50 years and use their feet like hands to inspect and handle objects.',
      },
    ],
    conservationAction: 'Restoring fragmented Atlantic coastal forests in Brazil through continuous tree replanting corridors.',
  },
  {
    id: 'polar',
    name: 'Polar & Arctic Tundra',
    subtitle: 'Chilled saltwater realms with glacial ledges and snow generation',
    description: 'Engineered sub-surface viewing pools and temperature-regulated rockwork that reflect the harsh extremes of the Arctic circle and Antarctic coastlines.',
    image: '/src/assets/images/zoo_conservation_care_1792412697186.jpg',
    soundType: 'polar',
    soundLabel: 'Play Polar Breeze & Honks',
    temperature: '4°C - 12°C',
    humidity: '40% - 60%',
    keySpecies: [
      {
        name: 'Polar Bear',
        scientificName: 'Ursus maritimus',
        iucnStatus: 'Vulnerable',
        diet: 'High-fat marine nutrition, salmon, herring, lard blocks, and marrow bones',
        habitatEnrichment: 'Massive frozen ice blocks encasing fish, and high-flow current generators in dive tanks',
        funFact: 'Polar bear skin is actually pitch black beneath their translucent hollow hair, soaking up thermal rays.',
      },
      {
        name: 'Gentoo Penguin',
        scientificName: 'Pygoscelis papua',
        iucnStatus: 'Least Concern',
        diet: 'Whole capelin, krill, and small squid dusted with avian vitamins',
        habitatEnrichment: 'Pebble nesting material scattering to stimulate courtship gathering rituals',
        funFact: 'Gentoos are the fastest swimming birds on the planet, reaching underwater speeds of 36 km/h.',
      },
    ],
    conservationAction: 'Satellite tracking of ice-sheet migratory shifts and sea-ice loss research with Arctic universities.',
  },
  {
    id: 'marine',
    name: 'Coastal & Coral Reef Sanctuary',
    subtitle: 'Living benthic reef systems and tidal surge pools',
    description: 'High-volume filtration systems circulating natural seawater, supporting delicate symbiotic corals, invertebrates, and pelagic swimmers.',
    image: '/src/assets/images/rewilding_wildlife_release_1792412697683.jpg',
    soundType: 'ocean',
    soundLabel: 'Play Ocean Whistles & Waves',
    temperature: '22°C - 26°C',
    humidity: '60% - 70%',
    keySpecies: [
      {
        name: 'Green Sea Turtle',
        scientificName: 'Chelonia mydas',
        iucnStatus: 'Endangered',
        diet: 'Eelgrass, sea lettuce, cucumbers, and specialized marine herbivore gels',
        habitatEnrichment: 'Underwater target feeding and floating kelp curtain obstacle courses',
        funFact: 'Female green sea turtles navigate across thousands of open-ocean miles to lay eggs on their natal beach.',
      },
      {
        name: 'Southern Sea Otter',
        scientificName: 'Enhydra lutris nereis',
        iucnStatus: 'Endangered',
        diet: 'Clams, crabs, sea urchins, and squid fed whole in hard shells',
        habitatEnrichment: 'Puzzle feeder balls that require using smooth stones as anvils to crack food open',
        funFact: 'Sea otters have the densest fur in the animal kingdom, with up to 1 million hairs per square inch.',
      },
    ],
    conservationAction: 'Rescuing and rehabilitating stranded sea otter pups and prop-scarred marine turtles for coastal release.',
  },
];

export const REWILDING_STORIES: RewildingStory[] = [
  {
    id: 'condor',
    species: 'California Condor',
    scientificName: 'Gymnogyps californianus',
    statusThen: 'Only 27 individuals remained on Earth in 1987',
    statusNow: 'Over 540 individuals today, with more than 330 flying wild in North America',
    story: 'Facing imminent extinction from lead poisoning and habitat degradation, biologists made the bold decision to bring all 27 remaining wild condors into zoological breeding programs. Through hand-puppet rearing to prevent human imprinting and microchipped tracking, the species was reintroduced across California, Arizona, and Baja California.',
    yearMilestone: '1987 to Present',
    keyStrategy: 'Captive puppet breeding & non-lead ammunition policy advocacy',
  },
  {
    id: 'tamarin',
    species: 'Golden Lion Tamarin',
    scientificName: 'Leontopithecus rosalia',
    statusThen: 'Fewer than 200 survived in fragmented Brazilian Atlantic forests',
    statusNow: 'Over 2,500 thrive in connected forest reserves',
    story: 'Deforestation decimated their canopy habitat. An international coalition of over 140 zoos coordinated an ambitious genetic studbook, breeding healthy family troops and teaching them wild foraging skills in large open-air habitats before flying them to Brazil for reintroduction.',
    yearMilestone: '1983 to Present',
    keyStrategy: 'Canopy canopy corridors, global pedigree registry & local community guardianship',
  },
  {
    id: 'przewalski',
    species: "Przewalski's Wild Horse",
    scientificName: 'Equus ferus przewalskii',
    statusThen: 'Declared completely Extinct in the Wild in 1969',
    statusNow: 'Over 2,000 individuals roaming free across Mongolia and China',
    story: 'The only truly wild horse species never domesticated survived exclusively through 12 founder individuals kept in European zoos. Decades of patient, cooperative zoological breeding brought genetic viability back, culminating in successful herd releases in the Hustai National Park of Mongolia.',
    yearMilestone: '1992 to Present',
    keyStrategy: 'Foundational studbook breeding & steppe grassland ecosystem restoration',
  },
];

export const DAILY_ROUTINE: DailyScheduleItem[] = [
  {
    time: '06:30',
    title: 'Commissary Diet Preparation',
    category: 'Nutrition',
    description: 'Specialized animal nutritionists weigh and slice hundreds of kilograms of fresh produce, species-specific raw browse, formulated pellets, and medical supplements.',
    behindTheScenesDetail: 'Every animal has an individualized nutritional chart calibrated to their weight, age, and metabolic cycle.',
  },
  {
    time: '08:00',
    title: 'Morning Welfare & Habitat Safety Inspections',
    category: 'Welfare',
    description: 'Keepers walk every square meter of each habitat before animal release. Water fountains are tested, barriers checked, and thermal shelters inspected.',
    behindTheScenesDetail: 'Any fallen branch, insect nest, or perimeter irregularity is resolved prior to gates opening.',
  },
  {
    time: '10:30',
    title: 'Cognitive Enrichment & Scatter Foraging',
    category: 'Enrichment',
    description: 'Food is never just placed in a bowl. It is frozen in ice blocks, hidden inside puzzle feeders, or placed high in canopies to stimulate natural foraging instincts.',
    behindTheScenesDetail: 'Enrichment calendars alternate scent trails (cinnamon, lavender), novel objects, and audio recordings daily to prevent boredom.',
  },
  {
    time: '13:30',
    title: 'Voluntary Behavioral Healthcare Training',
    category: 'Veterinary',
    description: 'Keepers work with tigers, sea lions, and apes using positive reinforcement (clickers and rewards) so animals willingly present paws, open mouths, or present hips for vaccinations.',
    behindTheScenesDetail: 'This eliminates the need for stressful darting or physical restraint for routine checkups.',
  },
  {
    time: '16:00',
    title: 'Conservation Studbook & Research Logging',
    category: 'Education',
    description: 'Biologists log daily behavioral data, social interactions, weight changes, and breeding cues into global zoological database systems (ZIMS).',
    behindTheScenesDetail: 'Over 1,200 institutions across 100 countries share this data in real time to coordinate global genetic matches.',
  },
  {
    time: '19:30',
    title: 'Sunset Bedding & Night Cam Welfare Monitoring',
    category: 'Welfare',
    description: 'Animals choose whether to sleep in indoor climate-controlled dens or sheltered outdoor niches. Infrared cameras and temperature sensors track sleep cycles.',
    behindTheScenesDetail: 'Veterinary night-duty teams remain on call 24 hours a day for expectant mothers and geriatric residents.',
  },
];

export const VISITOR_ETIQUETTE = [
  {
    rule: 'Never Feed the Animals Outside Food',
    reason: 'Animals have precise, scientifically calculated diets. Human snacks like bread, candy, or processed chips cause fatal digestive blockages, metabolic bone disease, and choking.',
    positiveBehavior: 'Admire their natural foraging and join official educational feeding demonstrations led by keepers.',
  },
  {
    rule: 'Turn Off Camera Flash',
    reason: 'Sudden high-intensity strobe flashes disorient nocturnal animals, frighten grazing herds, and can trigger aggressive defensive reactions in territorial primates and cats.',
    positiveBehavior: 'Utilize natural ambient light and stabilize your camera against railings without crossing safety glass.',
  },
  {
    rule: 'Keep Voices at an Observational Cadence',
    reason: 'Many prey species possess ultra-sensitive hearing. Screaming or banging on glass creates chronic physiological stress and causes animals to retreat out of sight.',
    positiveBehavior: 'Practice quiet, patient observation; animals will often exhibit fascinating natural behaviors when they feel unthreatened.',
  },
  {
    rule: 'Respect Standoff Barriers & Glass',
    reason: 'Guard rails are calculated by wildlife engineers to protect both human guests and animal health, preventing infectious disease transmission and falls.',
    positiveBehavior: 'Never sit children atop railings or extend selfie poles past safety boundaries.',
  },
  {
    rule: 'Look for Recognized Accreditation (AZA, EAZA, WAZA)',
    reason: 'True accredited modern zoos undergo rigorous third-party audits examining veterinary standards, animal welfare, and conservation contributions.',
    positiveBehavior: 'Support certified non-profit institutions that actively fund wild habitat preservation and species rewilding.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Where does the modern word "Zoo" originate from?',
    options: [
      'An ancient Roman word for concrete arena',
      'Short for "Zoological Garden", derived from Greek zōion (animal) and logos (study)',
      'An acronym invented by 19th-century railroad promoters',
      'The Latin phrase for imperial menagerie',
    ],
    correctIndex: 1,
    explanation: 'Correct! "Zoo" is short for "zoological garden", popularized by the Zoological Society of London when the Regent\'s Park garden opened for scientific research in 1828.',
  },
  {
    id: 2,
    question: 'How do modern accredited zoos perform routine health checks on large animals like elephants or tigers?',
    options: [
      'They dart the animal with anesthetics every single week',
      'They physically rope and restrain the animal',
      'They use positive reinforcement training so the animal chooses to present its feet or mouth voluntarily',
      'They only inspect them through video cameras without direct checkups',
    ],
    correctIndex: 2,
    explanation: 'Modern zoos use voluntary behavioral conditioning! Animals receive treats and praise for cooperating with health checks, eliminating stress and the need for tranquilizers.',
  },
  {
    id: 3,
    question: 'Which critically endangered bird species was completely saved from extinction through a captive breeding and rewilding program?',
    options: [
      'The California Condor (brought back from only 27 birds)',
      'The Dodo Bird',
      'The Passenger Pigeon',
      'The Great Auk',
    ],
    correctIndex: 0,
    explanation: 'The California Condor was down to just 27 birds in 1987. Thanks to zoo-led captive breeding using hand puppets, more than 540 condors exist today with hundreds soaring wild!',
  },
];
