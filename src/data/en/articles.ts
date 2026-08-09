// ── Deep-dive Wiki Articles (English) ───────────────────────────────────────
// English translation of WIKI_ARTICLES. Same ids and structure.
// Sources: BOKU Vienna, AGES, GeoSphere Austria, LK NÖ/Bgld, FiBL, Heistinger,
// Kreuter, Palme (HBLFA Schönbrunn), Bio Austria

import type { WikiArticle } from '../wikiArticles';

export const WIKI_ARTICLES_EN: WikiArticle[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // SOIL
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'boden',
    title: `Understanding your soil`,
    subtitle: `Soil types, soil life, pH and how to improve your soil`,
    color: '#f59e0b',
    sourceIds: ['boku', 'heistinger', 'kreuter', 'bio-austria'],
    relatedArticles: ['kompost', 'duengung', 'mulchen'],
    sections: [
      {
        title: `What is soil?`,
        content: `Soil is not dead dirt but a living system. A teaspoon of healthy garden soil contains more micro-organisms than there are people on Earth: 1–10 billion bacteria, 10,000–100,000 fungal threads, 10,000–50,000 protozoa. These organisms break down organic matter, make nutrients available to plants and protect roots from disease. Your most important goal as a gardener is not to feed plants, but to look after the soil.`,
        details: [
          `Mineral components (45%): sand (>0.063 mm), silt (0.002–0.063 mm), clay (<0.002 mm). The ratio determines the soil type.`,
          `Organic matter / humus (5%): dead plant material at various stages of decomposition. Humus stores water and nutrients.`,
          `Water (25%): held in the pores between soil particles. Too much = waterlogging (root rot). Too little = drought stress.`,
          `Air (25%): roots breathe! Compacted soil has too little air. That is why you should never walk on wet soil.`,
          `Soil life: earthworms (aeration + humus), mycorrhizal fungi (extend the root network by a factor of 100–1000), bacteria (nitrogen fixation, nutrient cycle).`,
        ],
        tip: `Simple soil test: squeeze a handful of moist soil together. Falls apart at once = too sandy. Can be rolled into a sausage = too clayey. Holds together loosely and crumbles when you open your hand = perfect crumb structure.`,
        sourceNote: `BOKU Vienna, Institute of Soil Research. Scheffer/Schachtschabel: Textbook of Soil Science (18th edition)`,
      },
      {
        title: `Soil types in Austria`,
        content: `Austria has extremely varied soils. In the east (Vienna, Burgenland, Weinviertel) chernozems and cambisols on loess dominate: deep, humus-rich, calcareous, ideal for vegetables. In the Alpine foreland: cambisols, often loamy and heavier. In Alpine valleys: often stony and shallow. In the Marchfeld: the most fertile arable soils in Austria (black earth). In the Seewinkel: salt-affected soils (solonchak/solonetz).`,
        details: [
          `Chernozem / black earth: the most fertile soil type in Central Europe. 3–6% humus content, deep (>60 cm), good water-holding capacity. Found in: Marchfeld, Weinviertel, northern Burgenland.`,
          `Cambisol: the most common soil type. Moderately humus-rich (2–4%), medium water retention. A good vegetable-garden soil if regularly improved with compost.`,
          `Rendzina: on limestone. Shallow, lime-rich (pH 7–8). Good for herbs (thyme, rosemary), problematic for blueberries (which need acidic soil).`,
          `Pseudogley: a waterlogging soil (water cannot drain away). Recognisable by rusty-grey mottling in the subsoil. Solution: raised beds or drainage.`,
          `Alluvial soil: near watercourses, periodically flooded. Very fertile, but with a flood risk. The Marchfeld floodplains are legendary vegetable soils.`,
        ],
        tip: `AGES offers soil analyses for home gardens (about 30–50 EUR). These measure pH, humus content, nutrients (NPK) and heavy metals. Recommended before growing vegetables for the first time, especially on former industrial sites or unfamiliar plots.`,
        sourceNote: `AGES soil health: ages.at/themen/umwelt/boden. Austrian soil survey: bodenkarte.at`,
      },
      {
        title: `pH: the quiet success factor`,
        content: `The pH value determines which nutrients a plant can take up. At pH 6.0–7.0 almost all the main nutrients are optimally available. Too acidic (<5.5): aluminium becomes toxic, phosphorus gets locked up. Too alkaline (>7.5): iron, manganese and zinc become insoluble, and plants show chlorosis (yellow leaves with green veins). Most vegetables prefer pH 6.0–7.0. The soils in eastern Austria tend to be calcareous (pH 7.0–7.5), which still works well for most vegetables.`,
        details: [
          `pH 5.0–5.5 (acidic): ideal for blueberries, cranberries, rhododendrons. Too acidic for most vegetables.`,
          `pH 5.5–6.0 (slightly acidic): good for potatoes (less scab!), strawberries.`,
          `pH 6.0–6.5 (mildly acidic to neutral): ideal for almost all vegetables, especially cabbage, lettuce, beans.`,
          `pH 6.5–7.0 (neutral): perfect for tomatoes, bell peppers, cucumbers, carrots, onions.`,
          `pH 7.0–7.5 (slightly alkaline): still fine for most vegetables. Typical of limestone sites in Lower Austria/Burgenland.`,
          `pH >7.5 (alkaline): problematic. Iron chlorosis in fruit trees. Remedy: acidic compost, conifer needle litter, sulphur.`,
          `Measuring: pH test strips (5 EUR), pH meter (20–50 EUR), or AGES laboratory analysis (the most accurate method).`,
          `Correcting downwards (acidifying): elemental sulphur (50–100 g/m²), conifer-needle mulch, acidic peat (though ecologically questionable).`,
          `Correcting upwards (liming): carbonate lime (200–400 g/m²), seaweed lime, wood ash (carefully! max. 100 g/m²/year).`,
        ],
        warning: `pH changes work slowly (months to years). Never correct by more than 0.5 pH units per season. Changing it too quickly harms soil life.`,
        sourceNote: `BOKU Vienna soil science. AGES soil-analysis recommendations.`,
      },
      {
        title: `Improving your soil: practical steps`,
        content: `Whatever soil you have, it can be improved. The universal remedy is organic matter. Compost, mulch, green manure and earthworms are your tools. In 2–3 years any neglected soil turns into fertile garden soil.`,
        details: [
          `Heavy clay soil: work in sand (a 5–10 cm layer, mixed in with a digging fork), compost (5–10 cm/year), green manure with deep-rooting plants (lupin, oil radish). NEVER work wet clay soil!`,
          `Sandy soil: compost (plenty! 10+ cm/year), work in loam or clay meal (bentonite, 2–5 kg/m²), mulch against drying out. Sandy soils need more frequent, smaller feeds (nutrients wash out quickly).`,
          `Compacted soil: deep-rooting green manure (lupin, oil radish), a mulch layer, do NOT dig it over (makes it worse in the long run). Earthworms do the work if you feed them (mulch!).`,
          `New garden on building-site soil: often the topsoil has been stripped off. Have topsoil delivered (a 30 cm layer), or build raised beds. First season: green manure and building up compost.`,
          `Waterlogging: install drainage (perforated pipe, 30–40 cm deep, in a gravel bed, with a slope), or build raised beds. Raised beds are the simplest solution for problem soils.`,
        ],
        tip: `The golden rule of soil improvement: never dig, always mulch. Digging destroys the soil structure and kills earthworms. Instead, lay organic material ON TOP and the soil organisms will work it in by themselves.`,
        sourceNote: `Kreuter, M.-L.: Der Biogarten. FiBL leaflet on soil improvement.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // IRRIGATION
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'bewaesserung',
    title: `Irrigation in detail`,
    subtitle: `When, how much, which method, and what plants really need`,
    color: '#06b6d4',
    sourceIds: ['heistinger', 'kreuter', 'lk-noe', 'zamg'],
    relatedArticles: ['boden', 'mulchen'],
    sections: [
      {
        title: `How much water do plants need?`,
        content: `On a hot summer day a tomato plant transpires 2–3 litres of water. A pumpkin can need up to 5 litres. Per square metre of vegetable bed, reckon on 15–25 litres per week at the height of summer. In Vienna, with 673 mm of annual rainfall (climate normal 1991–2020, Hohe Warte station), rain covers only about half the demand during the main season (May–August, those 4 months alone bring 297 mm). The rest has to come from irrigation.`,
        details: [
          `Rule of thumb: 20 L/m²/week for heavy feeders (tomato, pumpkin, courgette) in summer.`,
          `10–15 L/m²/week for moderate feeders (carrot, lettuce, kohlrabi).`,
          `5–10 L/m²/week for light feeders (herbs, onions, garlic).`,
          `Young plants: little, but often (roots are still shallow).`,
          `Established plants: rarely, but deeply (encourages deep root growth).`,
          `Raised beds dry out 2–3x faster than ground-level beds!`,
          `Mulch reduces evaporation by 30–50%.`,
          `Vienna-specific: July/August can be dry and hot (up to 36 °C). In those weeks, water daily.`,
        ],
        tip: `The finger test: push a finger 5 cm into the soil. Does it feel moist? Don't water. Dry? Water. It really is that simple. Overwatering is just as harmful as drought!`,
        sourceNote: `LK NÖ irrigation guide. GeoSphere Austria climate data for Vienna.`,
      },
      {
        title: `Irrigation methods compared`,
        content: `Not every method is equally efficient. Drip irrigation delivers water straight to the root with minimal evaporation. A watering can is flexible but labour-intensive. Sprinklers lose up to 40% through evaporation and wet the leaves (fungal diseases!).`,
        details: [
          `Drip irrigation: 90–95% efficiency. Water straight to the root, no wet leaves. Ideal for row crops (tomatoes, bell peppers, cucumbers). Gardena Micro-Drip or soaker hose. Investment: 50–150 EUR for 20 m². Pays for itself in one season through water and time savings.`,
          `Soaker hose / drip hose: the simplest form of drip irrigation. A porous hose that releases water along its whole length. Lay it under mulch for maximum efficiency.`,
          `Watering can (10 L): 70–80% efficiency. Flexible, targeted. Ideal for seedlings (fine rose), balcony, raised beds. Downside: labour-intensive above 10 m².`,
          `Garden hose with spray head: 60–70% efficiency. Quick for large areas. Risk: too much at once, superficial, erosion. Never water with a full jet.`,
          `Sprinkler / lawn sprinkler: 40–60% efficiency. Evaporation loss 30–40%. Wets the leaves (fungi!). NOT recommended in the vegetable garden.`,
          `Ollas (clay pots): an old method, a new trend. Unglazed clay pots buried in the soil, filled with water. Water seeps slowly through the clay wall. Ideal for single plants (tomatoes, pumpkin). Efficiency close to 100%.`,
          `Smart irrigation (Gardena, Netafim): timer + moisture sensors. Automatic, water-saving. Perfect for holidays. Investment: 100–300 EUR.`,
        ],
        tip: `The best combination: a soaker hose under mulch, controlled by a timer (30–60 min in the morning). This is the professional method that market gardeners use too.`,
        sourceNote: `FiBL leaflet on irrigation in organic vegetable growing.`,
      },
      {
        title: `When to water?`,
        content: `The time of day is crucial. The morning (6–9 a.m.) is ideal: the plant can take up the water before the heat arrives, and wet leaves dry off quickly. Watering at midday wastes water (evaporation) and, in full sun, can cause scorch marks (the water-lens effect on leaves is disputed, but evaporation loss is real). Evening watering is fine as the second-best option, but wet leaves overnight encourage fungal diseases (late blight on tomatoes, mildew on cucumbers).`,
        details: [
          `Ideal: 6–9 a.m. Water is taken up, leaves dry off.`,
          `Fine: 6–8 p.m. Less evaporation than at midday, but the fungal risk rises.`,
          `Avoid: 11 a.m.–3 p.m. Maximum evaporation, high water loss.`,
          `Exception: if there is a risk of heat death (a wilting plant, >35 °C) water immediately, whatever the time!`,
          `In the greenhouse: water in the morning, then ventilate at once. High humidity + warmth = perfect fungal conditions.`,
          `Automatic timers: set them to 5–6 a.m. (done before you even get up).`,
        ],
        warning: `NEVER water tomatoes from above. Wet leaves + warmth = late blight (Phytophthora infestans). Always water at the base, close to the stem. The same goes for potatoes (the same disease).`,
        sourceNote: `Heistinger, A.: Handbuch Bio-Gemüse. LK NÖ plant protection service.`,
      },
      {
        title: `Collecting rainwater`,
        content: `Rainwater is better than tap water: softer (less lime), free, and at room temperature (no cold shock for cucumbers!). In Vienna 673 mm of rain falls per year (climate normal 1991–2020). On a 30 m² roof that is 15,000–19,500 litres a year. A 1000 L water butt covers the demand of a 10 m² vegetable garden for about 6 weeks of drought.`,
        details: [
          `Water butts (200–500 L): the simplest solution. Connect to the downpipe (rain collector set 15–30 EUR). Put a lid on (mosquitoes!).`,
          `IBC container (1000 L): second-hand 20–50 EUR on classifieds sites. Stand it on a pallet (gravity pressure for the garden hose). Cover it (algae form in the light).`,
          `Cistern (2,000–10,000 L): an underground tank for large gardens. Investment 1,000–5,000 EUR + installation. Partly subsidised in Lower Austria and Burgenland.`,
          `Vienna water yield: with a 30 m² roof area and 673 mm of rain/year: 20,190 L free. That covers ~60% of the annual demand of a 20 m² vegetable garden.`,
          `Water quality: rainwater from roof surfaces is safe for vegetables (except from lead roofs or freshly tarred surfaces). If in doubt, let the first 5 minutes of rain run off (dirt).`,
        ],
        tip: `Minimum setup: 1 IBC container (1000 L) on the gutter. Cost: 30–80 EUR. In Vienna it pays for itself in 2–3 years at a tap-water price of about 2 EUR/m³.`,
        sourceNote: `GeoSphere Austria, Vienna-Hohe Warte station, climate normal 1991–2020 (annual rainfall 673 mm). Vienna Waterworks tariff info.`,
      },
      {
        title: `Irrigation on the balcony`,
        content: `Balcony plants in pots and boxes dry out far faster than bed plants: the volume of soil is limited, the sun heats the pots from all sides, and wind dries them out further. On hot days watering twice a day may be needed (morning + evening). Self-watering pots with a water reservoir (e.g. Lechuza) are a good investment.`,
        details: [
          `Terracotta pots: they look lovely, but dry out fastest (porous). Better: plastic or glazed ceramic.`,
          `Large pots are better than small ones: a 30 L pot stays moist 5x longer than a 5 L pot.`,
          `Saucers: catch surplus water, which the plant draws back up. But: after 30 min pour off any standing water (waterlogging/mosquitoes).`,
          `Self-watering systems: Blumat clay cones (8–15 EUR each), Gardena balcony set (30–80 EUR), DIY with PET bottles (free).`,
          `For holidays: Blumat cones in an IBC/bucket, or ask a neighbour (the most reliable drip hose in the world).`,
          `Your balcony setup: pumpkin and eggplant need LOTS of water. Lettuce less, but regularly. Watering twice a day above 25 °C is right.`,
        ],
        tip: `Lettuce on the balcony benefits enormously from watering twice a day, as you have found yourself. Shallow roots + limited soil volume = rapid drying out.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // COMPOST
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'kompost',
    title: `Composting`,
    subtitle: `Black gold: making your own compost, turning it right, applying it correctly`,
    color: '#f59e0b',
    sourceIds: ['kreuter', 'heistinger', 'bio-austria'],
    relatedArticles: ['boden', 'duengung', 'mulchen'],
    sections: [
      {
        title: `Why compost?`,
        content: `Compost is the most important product of your garden, not the vegetables. A working compost turns kitchen scraps, weeds, leaves and grass clippings into the best fertiliser in the world: humus-rich, nutrient-rich, full of micro-organisms, pH-neutral. Compost improves every soil type: sandy soil holds water better, clay soil becomes looser. And it is free.`,
        details: [
          `Nutrient content (scientific): 12 kg nitrogen, 8 kg phosphorus, 13 kg potassium per tonne of dry matter. Per litre: 9 g N, 4.2 g P₂O₅, 7.8 g K₂O (Hortipendium/KTBL).`,
          `Nitrogen availability: only 3–5% of the N in compost is available to plants in the year of application (the rest mineralises slowly over years). Phosphorus: 10–20% immediately available. Potassium: 30–50% immediately available.`,
          `Mature compost has a pH of 6.5–7.5 (perfect for vegetables). Plus billions of micro-organisms per gram.`,
          `A 4-person household produces 200–400 kg of compostable waste per year. That becomes 80–150 kg of compost.`,
          `Composting reduces residual waste by 30–50%. In Vienna that saves on refuse charges and CO₂.`,
          `Recommended application rate (trial results): 3 L of mature compost per m² covers the nutrient demand of almost all crops. Heavy feeders: up to 5–10 L/m². Light feeders: 1–2 L/m² or none.`,
        ],
        tip: `The best time to apply compost: spring (March/April), when the beds are being prepared. Apply a 3–5 cm layer and rake it in LIGHTLY, do not dig it under.`,
        sourceNote: `Bio Austria composting guidelines. Kreuter, M.-L.: Der Biogarten, compost chapter.`,
      },
      {
        title: `Setting up compost properly`,
        content: `A good compost needs the right mix of "brown" (carbon-rich) and "green" (nitrogen-rich) material in a 3:1 ratio (brown:green). Too much green (grass clippings) = it stinks and turns to mush. Too much brown (wood chips) = it rots extremely slowly. The right mix heats up to 50–65 °C and kills weed seeds and pathogens.`,
        details: [
          `BROWN (carbon-rich, C:N > 30): dry leaves, straw, wood chips, cardboard (unprinted), sawdust, egg boxes.`,
          `GREEN (nitrogen-rich, C:N < 20): kitchen scraps (vegetable trimmings, coffee grounds, tea bags), fresh grass clippings, weeds (WITHOUT seeds!), nettles.`,
          `IDEAL: alternating layers (10 cm green, 10 cm brown). Like a lasagne.`,
          `NEVER compost: meat/fish (rats!), cooked food (rats!), dog/cat faeces (parasites), diseased plants (the disease survives), walnut leaves (inhibit growth), treated wood.`,
          `Compost needs air: don't pack it too tightly, turn it occasionally.`,
          `Compost needs moisture: it should feel like a wrung-out sponge. Too dry = decomposition stops. Too wet = it stinks (anaerobic rot).`,
          `Location: partly shaded (not full sun = dries out), on soil (not on concrete = earthworms come up from below), at least 1 m from the property boundary.`,
        ],
        tip: `Accelerator: a shovelful of finished compost or garden soil between the layers = a starter culture for micro-organisms. Works like a sourdough starter in bread-making.`,
        sourceNote: `Heistinger, A.: Handbuch Bio-Gemüse, compost chapter. Bio Austria composting leaflet.`,
      },
      {
        title: `Hot composting vs. cold rotting`,
        content: `There are two approaches: hot composting (thermophilic composting) is fast (8–12 weeks), kills weed seeds and diseases, but needs attention and volume. Cold rotting (garden compost) is simple (pile material on and wait), but takes 6–12 months and kills no seeds.`,
        details: [
          `Hot composting: set up at least 1 m³ at once. It heats up to 55–65 °C. Turn after 3–4 weeks. Ready after 8–12 weeks. Advantage: fast, hygienic, kills seeds.`,
          `Cold rotting: add material continuously. Temperature 20–35 °C. No special care needed. Takes 6–12 months. Downside: weed seeds survive.`,
          `Worm composting: Eisenia fetida (composting worms) in a box. Ideal for balcony gardeners and small amounts. Worm humus is the most nutrient-rich compost of all.`,
          `Bokashi: fermentation without air (a Japanese method). Works even with cooked leftovers. Bury the fermented material in the soil afterwards.`,
          `Maturity test: smell a handful. Finished compost smells of forest soil, not of rot. Cress test: sow cress on the compost. Does it germinate and grow? Then the compost is mature.`,
        ],
        warning: `Never apply unripe (still warm, smelly) compost directly to plants! The breakdown products damage roots. Always do the maturity test.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FEEDING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'duengung',
    title: `Organic feeding`,
    subtitle: `Nettle liquid feed, compost, mulch and what plants really need`,
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter', 'fibl', 'bio-austria'],
    relatedArticles: ['kompost', 'boden', 'mulchen'],
    sections: [
      {
        title: `The three main nutrients: N-P-K`,
        content: `Every fertiliser is described by three figures: N (nitrogen), P (phosphorus), K (potassium). Nitrogen = leaf growth (green, lush foliage). Phosphorus = root and flower development. Potassium = fruit formation and resilience. Too much of any one is harmful: overdone nitrogen produces huge leaves but no fruit. In the organic garden, compost supplies all three in a balanced ratio.`,
        details: [
          `Nitrogen (N): drives leaf growth. Deficiency = yellow lower leaves, weak growth. Excess = huge leaves, little fruit, aphid susceptibility. Natural N sources: compost, nettle liquid feed, horn shavings, legumes (which fix N from the air!).`,
          `Phosphorus (P): roots, flowers, fruit set. Deficiency = purple discolouration of the leaves, poor flowering. Rarely deficient in Austrian soils. Natural P sources: compost, bone meal.`,
          `Potassium (K): fruit quality, frost resistance, cell stability. Deficiency = brown leaf margins, soft fruit. Natural K sources: compost, wood ash (carefully! raises pH), comfrey liquid feed.`,
          `Calcium (Ca): cell-wall stability. Deficiency = blossom-end rot on tomatoes (a black patch at the base). Often not a Ca deficiency in the soil but a transport problem caused by irregular watering.`,
          `Magnesium (Mg): a component of chlorophyll. Deficiency = leaves turn yellow between the veins (interveinal chlorosis). Natural Mg sources: Epsom salts (10 g/L of watering water).`,
        ],
        tip: `In the organic garden: compost is your base fertiliser (it covers everything). Nettle liquid feed as a nitrogen booster for heavy feeders. You won't need more in the first year.`,
        sourceNote: `FiBL leaflet on feeding in organic vegetable growing. Heistinger: Handbuch Bio-Gemüse.`,
      },
      {
        title: `Making your own organic fertilisers`,
        content: `The best fertilisers grow in your garden. Nettles, comfrey and horsetail provide high-quality plant liquid feeds for free. Add to these compost (the universal fertiliser), mulch (a long-term fertiliser) and green manure (a living fertiliser).`,
        details: [
          `Nettle liquid feed: 1 kg fresh nettles + 10 L water. Leave to stand for 10–14 days (it stinks!), stirring daily. Strain and pour. Nutrient content (undiluted): 0.5–1.5% N, 0.3–0.7% K, 0.02–0.1% P. Dilution: 1:10 for heavy feeders, 1:20 for moderate feeders, 1:50 for foliar feeding (spraying). The N is mainly present as ammonium (quickly available). Apply every 2 weeks.`,
          `Comfrey liquid feed: same method as nettle. Rich in potassium. Ideal for tomatoes and bell peppers from fruit set onwards.`,
          `Horsetail decoction: 100 g dried horsetail + 5 L water, soak for 24 hours, simmer for 30 min. Dilute 1:5 and spray. The silica it contains strengthens cell walls. Trials by the Bavarian State Research Centre for Agriculture (LfL) show that in the early stages horsetail slows the progress of late blight, but full efficacy was not established. Use preventively, not as a cure.`,
          `Horn shavings: a slow-acting nitrogen fertiliser. Rake in 50–100 g/m². Works for 3–6 months. For heavy-feeder beds in spring.`,
          `Wood ash: potassium-rich. Max. 100 g/m²/year. Raises pH! Not on lime-loving soils (>pH 7). Only wood ash, never coal or paper ash.`,
          `Coffee grounds: slightly acidic (pH 6.5), contain nitrogen, potassium, phosphorus. Scatter directly on the beds or add to compost. Earthworms love coffee grounds.`,
          `Eggshells: a calcium source. Crush and work in. Acts slowly (months). Does NOT help acutely against blossom-end rot (that is a watering problem).`,
        ],
        warning: `NEVER apply nettle liquid feed undiluted! It burns roots. Always dilute 1:10. And: liquid feed stinks appallingly. Put a lid or a hessian sack over it, and warn the neighbours.`,
        sourceNote: `Kreuter, M.-L.: Der Biogarten, chapter on plant tonics. Bio Austria feeding guidelines.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MULCHING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'mulchen',
    title: `Mulching`,
    subtitle: `The most powerful technique that most beginners skip`,
    color: '#1e3a5f',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['boden', 'bewaesserung', 'kompost'],
    sections: [
      {
        title: `What is mulch and why does it matter so much?`,
        content: `Mulch is a layer of organic material (straw, grass clippings, leaves, wood chips) on the soil surface. In nature there is no bare soil: forests have a layer of leaf litter, meadows a sward of grass. Bare soil dries out, erodes, crusts over and loses nutrients. Mulch imitates the natural state and so solves 5 problems at once.`,
        details: [
          `1. Evaporation protection: mulch reduces water evaporation by 30–50%. On a 20 m² bed that saves 200–400 L of water per week at the height of summer.`,
          `2. Weed suppression: 5–8 cm of mulch blocks the light for weed seeds. 80–90% less weeding!`,
          `3. Soil-temperature regulation: 5–8 °C cooler in summer, 3–5 °C warmer in winter. Roots do not like temperature extremes.`,
          `4. Erosion protection: heavy rain washes bare soil away. Mulch cushions the impact.`,
          `5. Encouraging soil life: earthworms love mulch as food. Under 5 cm of mulch there are 5–10x more earthworms than without.`,
        ],
        tip: `The golden rule of mulching: a 5–8 cm layer, but NEVER right against the plant stem (or it will rot). Leave a "mulch collar" of 3–5 cm around each stem.`,
        sourceNote: `FiBL leaflet on mulching in vegetable growing. Kreuter: Der Biogarten.`,
      },
      {
        title: `Mulch materials compared`,
        content: `Not every material suits every purpose. Grass clippings are nitrogen-rich but rot in a thick layer. Straw is ideal for tomatoes and strawberries. Wood chips are better on paths than on vegetable beds (they lock up nitrogen as they rot).`,
        details: [
          `Straw: the classic for vegetable beds. Loose, light-blocking, rots at a moderate pace. Ideal for tomatoes, strawberries ("Strawberry"!), potatoes. Note: it can contain cereal weed seeds.`,
          `Grass clippings: free and nitrogen-rich. 3–5 cm maximum (thicker = it rots and stinks). Always let it dry off first (1–2 days), then spread it. Not on beds with carrots (a hiding place for slugs).`,
          `Leaves: ideal for winter mulch. Onto empty beds in autumn. Oak leaves are acidic (good for blueberries), beech leaves neutral. Leave them whole (don't shred) as winter protection.`,
          `Wood chips / bark mulch: for paths and berry bushes, NOT for vegetable beds (they lock up nitrogen as they rot = yellow plants). Exception: composted wood chips (>6 months old).`,
          `Compost: fertiliser + mulch in one. A 2–3 cm layer. Ideal for heavy-feeder beds.`,
          `Newspaper/cardboard: 2–3 layers under straw as a weed barrier. Only unprinted paper/brown cardboard. Rots within one season.`,
          `Living mulch: white clover between cabbage rows, nasturtium under fruit trees. Covers the soil AND fixes nitrogen.`,
        ],
        warning: `Never put fresh wood chips on vegetable beds! Their decomposition draws nitrogen from the soil (a "nitrogen lock-up"). The result: yellow, struggling plants. Use them only after 6–12 months of composting.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PLANT PROTECTION
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'pflanzenschutz',
    title: `Organic plant protection`,
    subtitle: `Beneficial insects, companion planting, plant tonics and what really helps`,
    color: '#ef4444',
    sourceIds: ['fibl', 'heistinger', 'kreuter', 'ages', 'bio-austria'],
    relatedArticles: ['boden', 'mulchen'],
    sections: [
      {
        title: `The principle: prevent rather than fight`,
        content: `In the organic garden there are no "enemies" that must be destroyed. Pests and diseases are symptoms of an imbalance. Healthy soil, the right crop rotation, companion planting and biodiversity prevent 80% of all problems. The remaining 20% are manageable.`,
        details: [
          `Healthy soil = healthy plants. Plants in good soil have stronger defences (secondary plant compounds).`,
          `Crop rotation: never the same thing (or the same family) in the same place two years running. Soil-borne pathogens die off without a host plant.`,
          `Companion planting: different plants side by side confuse pests (scents) and use the space better.`,
          `Biodiversity: a garden with 20+ plant species has fewer pests than one with 3 species. More niches = more beneficial insects.`,
          `Tolerance: a few individual aphids are NOT a problem. They are food for ladybirds and hoverflies. Only act when there is a mass infestation.`,
        ],
        tip: `Before you use any product (even an organic one!): wait 5 days and observe. Nature often solves the problem itself (ladybirds eat aphids, rain washes mites off). For up-to-date warnings: warndienst.at (AGES + the Chambers of Agriculture) sends free pest alerts by email.`,
        sourceNote: `FiBL leaflet on plant protection in organic vegetable growing. Bio Austria guidelines. AGES plant health warning service: warndienst.at`,
      },
      {
        title: `The most important pests in Austria`,
        content: `These are the pests you will most often meet in the Austrian vegetable garden. Most can be kept in check with simple means.`,
        details: [
          `Aphids (Aphidoidea): the commonest pest. They suck plant sap and excrete honeydew (a sticky film → sooty mould). Control: encourage beneficial insects (ladybirds! one larva eats 400 aphids), spray nettle liquid feed (1:20), and for heavy infestations use potash soap (soft soap 20 g/L).`,
          `Slugs (especially the Spanish slug): problem #1 for lettuce, cabbage, young plants. Control: slug barrier (physical, 100% effective, 5–10 EUR/m), beer traps (attract and drown them), nematodes (Phasmarhabditis hermaphrodita), collecting them in the evening, runner ducks (the best solution, but: runner ducks).`,
          `Cabbage white butterfly (Pieris brassicae): caterpillars strip cabbage, kohlrabi and broccoli bare. Control: put fine-mesh insect protection netting (3–5 EUR/m²) on from the very start. Organic: Bacillus thuringiensis (Bt product, FiBL-listed).`,
          `Carrot fly (Psila rosae): maggots eat tunnels in carrots. Control: insect protection netting from sowing, companion planting with onions (the scent confuses the fly), shifting sowing dates (avoid the 2nd generation in August).`,
          `Colorado potato beetle (Leptinotarsa decemlineata): yellow-and-black striped, strips potato and eggplant leaves bare. Control: hand-picking (regularly!), a Bt product for mass infestations, neem oil.`,
          `Spider mites (Tetranychidae): tiny, with webs on the undersides of leaves. Typical in dry heat (greenhouse!). Control: raise humidity (misting), introduce predatory mites (Phytoseiulus persimilis).`,
          `Flea beetles (Psylliodes/Phyllotreta): small black beetles that eat tiny holes in cabbage/radish/rocket leaves. Control: keep moist (flea beetles like it dry), fleece, companion planting with lettuce.`,
        ],
        tip: `Insect protection nets are the best investment in the vegetable garden. 3–5 EUR/m², buy once, use for years. They protect against cabbage white butterfly, carrot fly, leek moth and even hail. Put them on right at the start, not once the damage is done. Organic products (approved in Austria, BAES plant-protection register): Bacillus thuringiensis (Bt) against caterpillars, NeemAzal (azadirachtin) against sucking/biting pests, potash soap against aphids. Copper products against fungi (with quantity limits).`,
        sourceNote: `AGES plant protection service. BAES plant-protection register (baes.gv.at). FiBL inputs list. Bio Austria.`,
      },
      {
        title: `The most important diseases`,
        content: `In the damp Central European climate, fungal diseases are the commonest group of diseases. Most can be avoided through good ventilation, dry leaves and crop rotation.`,
        details: [
          `Late blight (Phytophthora infestans): THE tomato killer. Brown patches on leaves, then on fruit. Encouraged by: moisture on the leaves, warm nights (>10 °C), dense stands. Prevention: NEVER water from above, ventilate well (space the leaves!), remove the lower leaves, spray horsetail decoction PREVENTIVELY (effective in the early stages, no longer once the infestation is severe). Copper is approved in organic growing but problematic (a heavy metal, it accumulates in the soil, max. 3 kg/ha/year). Remove affected parts at once → residual waste, NEVER compost.`,
          `Powdery mildew (Erysiphales): a white coating on the upper leaf surfaces. Typical on courgettes and cucumbers in late summer. Prevention: resistant varieties, good ventilation. Remove affected leaves. A milk-water spray (1:9) helps preventively.`,
          `Downy mildew (Peronosporales): a greyish-purple coating on the undersides of leaves, yellow patches on top. Attacks lettuce, spinach, onions, basil. Prevention: resistant varieties, wider spacing, watering in the morning.`,
          `Clubroot (Plasmodiophora brassicae): swellings on cabbage roots, the plant wilts. A soil fungus that survives 15+ years! Prevention: strict crop rotation (min. 7 years without a brassica in the same place), pH >7 (lime), don't carry over infected soil.`,
          `Grey mould (Botrytis cinerea): a grey fuzz on fruit (strawberries, tomatoes, lettuce). Prevention: good ventilation, strawberries on straw, pinching out tomato side-shoots. Remove affected fruit at once.`,
          `Late blight of potato: like late blight on tomatoes, it also attacks potatoes. The tubers rot in the soil. Prevention: resistant varieties, never plant tomatoes and potatoes side by side.`,
        ],
        warning: `NEVER put diseased plant parts on the compost! Most fungal spores survive composting (except in hot composting above 65 °C). Put affected material in the residual waste or burn it.`,
        sourceNote: `AGES plant protection service Vienna. FiBL leaflets on plant diseases. LK NÖ warning service.`,
      },
      {
        title: `Encouraging beneficial insects`,
        content: `A garden full of beneficial creatures needs hardly any plant protection. Ladybirds, lacewings, hoverflies, parasitic wasps, ground beetles, spiders, birds and hedgehogs keep pests naturally in check. Your job: give them a home.`,
        details: [
          `Ladybirds: one larva eats 400–800 aphids! Overwinters under leaves, in cavities, in insect hotels. Encourage them: leave leaf/brushwood piles, hang up an insect hotel.`,
          `Lacewings: the larvae ("aphid lions") eat even more aphids than ladybirds. Overwinter in crevices, lofts. Encourage them: log piles, insect hotel.`,
          `Hoverflies: they look like wasps but are harmless. The larvae eat aphids. Encourage them: flowering herbs (let dill, coriander, parsley flower!).`,
          `Earwigs: they eat aphids and other small insects. Encourage them: upturned flowerpots stuffed with straw on stakes = an earwig house.`,
          `Ground beetles: night-active soil dwellers that eat slug eggs and larvae. Encourage them: ground cover (mulch), dead wood.`,
          `Hedgehogs: they eat slugs, chafer grubs, insects. Encourage them: a pile of leaves in a corner, a gap in the fence (10x10 cm), no poison in the garden.`,
          `Birds (tits, robins): they eat caterpillars, aphids, slugs. Encourage them: nest boxes, a water dish, a natural hedge.`,
        ],
        tip: `The simplest way to encourage beneficial insects: leave a strip of the garden "wild". Nettles, elder, dead wood, leaf piles: that is a 5-star hotel for beneficial creatures.`,
        sourceNote: `Bio Austria guide to beneficial insects. AGES list of beneficial insects for Austria.`,
      },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════════
  // RAISING PLANTS / INDOOR SOWING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'anzucht',
    title: `Indoor sowing & sowing`,
    subtitle: `Germinating seeds properly, pricking out, hardening off and planting out`,
    color: '#22c55e',
    sourceIds: ['heistinger', 'arche-noah', 'palme'],
    relatedArticles: ['boden', 'duengung'],
    sections: [
      {
        title: `Why sow indoors?`,
        content: `Austria has a short outdoor season (May–October). Heat-loving plants such as tomatoes, bell peppers, chilli and eggplant need a 6–10 week head start on the windowsill to fruit in summer. Without indoor sowing, bell peppers in Vienna never ripen and chilli is impossible. The investment: 2 bags of seed compost, seed pots and a sunny window.`,
        details: [
          `INDOOR SOWING ESSENTIAL (can't be done otherwise in Austria): tomato (from mid-March), bell pepper (from late February!), chilli (from January!), eggplant (from late February), celeriac (from February), cape gooseberry (from February).`,
          `INDOOR SOWING OPTIONAL (faster, but direct sowing works too): lettuce, kohlrabi, cabbage, cucumber, courgette, pumpkin, basil.`,
          `DIRECT SOWING ONLY (won't tolerate transplanting): carrot, radish, pea, bean, spinach, rocket, dill, parsley.`,
          `When to start? Count backwards: planting-out date (16 May, after the Ice Saints) minus the indoor-sowing period. Tomatoes 6–8 weeks = sow mid-March. Bell peppers 10–12 weeks = sow late February.`,
        ],
        tip: `Beginner's mistake no. 1: sowing too early! If you sow tomatoes in January, by March you have 50 cm tall, leggy plants that get no light. Mid-March is soon enough for tomatoes.`,
      },
      {
        title: `Germination conditions`,
        content: `Seeds germinate under specific conditions. The three factors: temperature, moisture, light (or darkness). Most vegetable seeds germinate at 18–25 °C in evenly moist soil. Some need special treatment.`,
        details: [
          `Warmth germinators (22–28 °C): bell pepper, chilli, eggplant, cucumber, pumpkin, basil. A heat mat under the seed tray helps enormously (15–30 EUR, reusable).`,
          `Normal germinators (18–22 °C): tomato, lettuce, kohlrabi, cabbage. Normal room temperature is enough.`,
          `Cold germinators (5–15 °C): parsley, chives, wild garlic. They germinate poorly in warmth. Stratify outdoors or in the fridge.`,
          `Light germinators (don't cover the seed!): lettuce, basil, celeriac, parsley, dill. Just press the seed down, don't cover it with soil.`,
          `Dark germinators (cover the seed): tomato, bell pepper, cucumber, bean, sweetcorn. Cover with 0.5–3 cm of soil.`,
          `Germination time varies: radish 3–5 days. Tomato 7–14 days. Bell pepper 10–21 days. Parsley 21–28 days (!). Celeriac 14–28 days. Patience!`,
          `Substrate: low-nutrient seed compost (not ordinary potting compost - too much fertiliser burns seedlings). Coir swell-pellets work well.`,
        ],
        warning: `Ordinary potting compost is TOO nutrient-rich for seedlings. The high salt concentration burns the delicate roots. Always use special seed/potting compost (3–5 EUR/10 L).`,
        sourceNote: `Heistinger, A.: Handbuch Bio-Gemüse. Arche Noah sowing guide.`,
      },
      {
        title: `Pricking out, hardening off, planting out`,
        content: `Pricking out = moving the seedlings into larger individual pots. Hardening off = gradually getting them used to outdoor temperatures. Planting out = finally setting them in the bed. Each step matters, and none may be skipped.`,
        details: [
          `Pricking out: when the 2nd true pair of leaves appears (not the seed leaves!). Move singly into 7–9 cm pots. Set tomatoes deeper than before (they form roots on the stem). Bell peppers/eggplants NOT deeper (they rot!).`,
          `Hardening off: 7–10 days before planting out. Days 1–3: 2 hours outside in the shade. Days 4–6: 4–6 hours, partly shaded. Days 7–10: all day outside, including in the sun. Bring them in at night if it is below 10 °C.`,
          `Planting out: after the Ice Saints (16 May). In the evening or in cloudy weather. Water the planting hole well. Not in full midday sun. Protect with fleece for the first few nights if cold threatens.`,
          `Keep to the spacing: too close = disease, lack of light, competition. Tomatoes 60–70 cm, bell peppers 40–50 cm, lettuce 25 cm, courgette 100 cm.`,
          `Watering in: after planting, water THOROUGHLY (5 L per plant). Then don't water for 2–3 days (the roots should grow downwards).`,
        ],
        tip: `Plants that have not been hardened off and go straight from the windowsill into the open ground suffer sunburn and cold shock. Hardening off is as important as germination itself.`,
        sourceNote: `Palme, W.: Gemüse und Kräuter im Hausgarten. Arche Noah growing guide.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SEED
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'saatgut',
    title: `Seed: choosing & where to buy`,
    subtitle: `Open-pollinated varieties, F1 hybrids, organic seed and where to buy in Austria`,
    color: '#3b82f6',
    sourceIds: ['arche-noah', 'heistinger'],
    relatedArticles: ['anzucht'],
    sections: [
      {
        title: `Open-pollinated vs. F1 hybrid`,
        content: `There is a fundamental difference: open-pollinated varieties you can propagate yourself (save the seed, sow it again next year). F1 hybrids are crosses of two inbred lines that have higher yield or disease resistance, but their offspring segregate wildly. In the home garden, open-pollinated varieties are the better choice: more diverse flavour, independence, and you help preserve old crop diversity.`,
        details: [
          `Open-pollinated: the offspring come true to type. You can save the seed and sow it next year. More flavour diversity, often more robustly adapted to the site. Downside: sometimes a lower yield than hybrids.`,
          `F1 hybrid: a cross of two pure lines. The first generation: uniform, often higher-yielding, disease-resistant. Downside: seed from the F1 fruit gives an F2 generation that segregates (unusable). Buy new every year.`,
          `Organic seed: propagated from organic growing. No chemical seed treatment. In Austria compulsory for organic holdings. Recommended for home gardens but not required.`,
          `CMS hybrid: cytoplasmic male sterility produced by cell fusion. Controversial in the organic sector (is it still "natural breeding"?). Widespread in supermarket vegetables.`,
        ],
        tip: `For beginners: start with open-pollinated varieties from Arche Noah or ReinSaat. The flavour is usually better than supermarket hybrids. And you learn how seed-saving works along the way.`,
        sourceNote: `Arche Noah: variety handbook. Heistinger, A.: Handbuch Samengärtnerei.`,
      },
      {
        title: `Where to buy seed in Austria`,
        content: `Austria has excellent seed sources for the home garden. Arche Noah is unique worldwide in preserving old crop varieties.`,
        details: [
          `Arche Noah (arche-noah.at): the most important source. Thousands of open-pollinated vegetable, herb and flower varieties, one of the largest private variety archives in Europe. Since March 2026 with a new online "variety portal" (formerly the variety handbook). Membership from 32 EUR/year. Annual spring sale (April–May) in Schiltern near Langenlois (Lower Austria): 200+ fruit trees, 35+ tomato varieties, 25+ bell pepper/chilli varieties. Seed festival every February in Vienna.`,
          `ReinSaat (reinsaat.at): 700+ open-pollinated varieties in organic and Demeter quality. Founded in 1998 by Demeter farmers. A family business in St. Leonhard/Hornerwald (Lower Austria). Certified: Demeter, Bio Austria, EU organic (AT-BIO-301). Excellent quality, regionally adapted breeding.`,
          `Samen Maier (samen-maier.at): a broad organic-seed shop from Austria. Vegetables, herbs, flowers. A good choice for beginners.`,
          `SATIVA (sativa.bio): Swiss organic seed, readily available in Austria. A strong vegetable and herb range. Especially good tomato varieties.`,
          `Austrosaat / bellaflora: conventional seed in the DIY store. F1 hybrids dominate. Fine for beginners, but open-pollinated diversity is missing.`,
          `Seed swaps: the Arche Noah seed swap (every February in Vienna). Spring sale April–May in Schiltern. Local gardeners' meet-ups. Facebook groups ("Saatgut-Tausch Österreich").`,
          `Saving your own seed: tomato, bell pepper, bean, pea = easy (self-pollinating). Carrot, onion, cabbage = difficult (cross-pollinating, they need isolation).`,
        ],
        sourceNote: `Arche Noah: arche-noah.at. ReinSaat: reinsaat.at.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SELF-SUFFICIENCY
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'selbstversorgung',
    title: `Planning for self-sufficiency`,
    subtitle: `How much area per person, which crops, eating from your own garden all year round`,
    color: '#22c55e',
    sourceIds: ['heistinger', 'palme', 'palme-winter', 'kreuter'],
    relatedArticles: ['konservierung', 'winteranbau', 'fruchtfolge-plan', 'obstanbau'],
    sections: [
      {
        title: `How much area does self-sufficiency need?`,
        content: `The classic rule of thumb: 30–40 m2 of vegetable area per person for good self-supply of fresh vegetables from May to October. For year-round self-sufficiency including storage and preserving, reckon on 60–80 m2 per person. Add to that fruit trees (10–15 m2 each), berry bushes and herbs. A family of four therefore needs 250–350 m2 of productive garden to be largely independent of the supermarket for fruit and vegetables.`,
        details: [
          `Level 1 - nibbling garden (5–15 m2): herbs, lettuce, radishes, tomatoes, strawberries. A supplement to shopping. Doable on a balcony too.`,
          `Level 2 - basic supply (30–50 m2): fresh vegetables May–October. Tomatoes, bell peppers, cucumbers, courgettes, lettuce, carrots, onions, beans, herbs. Plus preserving for winter.`,
          `Level 3 - extended supply (60–100 m2): year-round with storage (potatoes, carrots, beetroot, onions, pumpkin) plus a greenhouse for winter salads.`,
          `Level 4 - largely self-sufficient (120–200 m2 per person): cereals (wheat, rye), pulses for drying, fruit trees, nuts. Requires considerable work.`,
          `Balcony (3–8 m2): surprisingly much is possible! 4–6 tomato plants, lettuce, herbs, strawberries, bell peppers. One tomato plant yields 3–5 kg.`,
          `Your setup (garden ~200 m2 + balcony + greenhouse): ideal for level 3. With the new greenhouse, year-round supply is realistic.`,
        ],
        tip: `Start with level 2 and build up. Better to manage 30 m2 well than 100 m2 in chaos. In the second year you will know what works and can expand deliberately.`,
        sourceNote: `Heistinger, A.: Handbuch Bio-Gemüse. Various self-sufficiency guides.`,
      },
      {
        title: `The most important crops for the self-sufficient`,
        content: `Not every vegetable is equally valuable for self-sufficiency. What matters is: calorie content (fills you up), storability (bridges the winter), yield per area and effort. Potatoes, pumpkin, beans, carrots and onions are the "Big Five" of self-sufficiency.`,
        details: [
          `Potatoes: the king of self-sufficiency. 300–500 kg/100 m2. Storable until spring. 4–6 kg of seed potatoes give 40–60 kg of harvest. A favourable calorie-per-area ratio.`,
          `Pumpkin/courgette: enormously productive. 1 pumpkin plant = 5–15 kg. Hokkaido keeps 3–6 months. Butternut up to 12 months.`,
          `Beans (dried): a protein source! Scarlet runner beans, borlotti, white beans. Dry them and store for years. 1–2 kg/10 m2 dry weight.`,
          `Carrots: 3–5 kg/m2 possible. Storable in moist sand in the cellar until March. Succession sowing March–July = fresh for months.`,
          `Onions: 2–4 kg/m2. Stored airy and dry, they keep until February. Onion sets = the easiest crop of all.`,
          `Beetroot: 2–3 kg/m2. Stored in sand until February. Extremely nutritious (iron, folic acid).`,
          `Garlic: autumn planting (October) = large bulbs in July. Plait, hang up, keeps until spring.`,
          `Tomatoes: THE preserving vegetable. 5–10 kg per plant. Sugo, ketchup, dried tomatoes keep 1+ years.`,
          `Lettuce/spinach/chard: no calorie value, but vitamins and minerals all year (greenhouse!). Succession sowing.`,
          `Cabbage (white, red): sauerkraut! 5–8 kg per plant. Fermented, it keeps all winter. Traditional Austrian preserving.`,
        ],
        tip: `To begin with: focus on the crops you actually eat regularly. There is no point storing 50 kg of beetroot if you don't like it.`,
        sourceNote: `Heistinger: Handbuch Bio-Gemüse. Kreuter: Der Biogarten.`,
      },
      {
        title: `The self-sufficient grower's yearly cycle`,
        content: `Self-sufficiency is not a project but a cycle. Every season has its tasks, and the secret is the overlap: while you harvest tomatoes in July, you sow the autumn crops at the same time. While you store pumpkins in October, you plant garlic for next year.`,
        details: [
          `JANUARY–FEBRUARY: planning + ordering seed. Start chilli/bell pepper indoors. Greenhouse: harvest winter salads. Check the store.`,
          `MARCH–APRIL: sow tomatoes/cucumbers/pumpkin indoors. Outdoors: peas, carrots, radishes, lettuce. Prepare the beds. Apply compost.`,
          `MAY: THE planting month. After the Ice Saints, everything goes out. Sow beans, sweetcorn. Mulch. Start irrigation.`,
          `JUNE: the first big harvest (strawberries, lettuce, kohlrabi). Keep succession sowing going. First round of preserving (strawberry jam).`,
          `JULY–AUGUST: peak harvest. Bottle tomato sugo (10 kg+). Pickle cucumbers. Freeze beans. Dry herbs. At the same time: sow lamb's lettuce and spinach for autumn!`,
          `SEPTEMBER: harvest and store pumpkin. Roast and freeze bell peppers. Set up sauerkraut. Plant garlic for next year.`,
          `OCTOBER: store carrots, beetroot and celeriac in sand boxes. Clear the beds. Sow green manure. Protect the fig tree.`,
          `NOVEMBER–DECEMBER: harvest greenhouse salads. Enjoy the stores. Plan for next year. Study seed catalogues.`,
        ],
        tip: `Keep a garden diary (or use this Garden Hub!). Note down: what you sowed and when, what grew well, what didn't work, weather data. In 2–3 years you will know YOUR garden and YOUR microclimate better than any book.`,
      },
      {
        title: `Calorie sums: is the garden enough?`,
        content: `An adult needs about 2000–2500 kcal/day. Vegetables alone won't provide that (too few calories per kg). The realistic calorie providers in the garden are potatoes (770 kcal/kg), dried beans (3300 kcal/kg!), pumpkin (260 kcal/kg) and sweetcorn (860 kcal/kg). Self-sufficiency does not mean 100% from the garden. It means: growing your own vegetables, herbs, fruit and part of your carbohydrates, and buying in cereals, oil and dairy.`,
        details: [
          `Potatoes: 770 kcal/kg. At 400 kg of harvest = 308,000 kcal. Covers one person for ~170 days at a 50% potato share.`,
          `Dried beans: 3300 kcal/kg. 20 kg of harvest = 66,000 kcal. Plus high-quality protein (21 g/100 g).`,
          `Pumpkin: 260 kcal/kg. 50 kg of harvest = 13,000 kcal. Keeps 3–12 months.`,
          `Sweetcorn: 860 kcal/kg. In Austria more as polenta or animal feed. Small amounts are realistic.`,
          `Tomatoes: 180 kcal/kg. Calorically irrelevant, but as sugo the basis of countless meals.`,
          `Realistically: a 100 m2 vegetable garden supplies 50–70% of your vegetable needs and 10–20% of your total calorie needs.`,
          `Supplement: cereals (bread, pasta), oil, milk/cheese, eggs are bought in. That is fine and normal.`,
        ],
        sourceNote: `Nutrient data: Austrian Nutrient Table (ÖNWT), University of Vienna.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PRESERVING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'konservierung',
    title: `Preserving & keeping`,
    subtitle: `Bottling, fermenting, drying, freezing, storing: how to bridge the winter`,
    color: '#ef4444',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['selbstversorgung', 'winteranbau'],
    sections: [
      {
        title: `Why preserve?`,
        content: `In July/August a well-run garden produces more than a family can eat. At the same time, from December to February it provides almost nothing (except the greenhouse). Preserving is the bridge: what is too much in summer is made to keep for winter. The methods have been proven for centuries and need no special equipment. A big pan, preserving jars and a cellar are enough.`,
        details: [
          `Bottling (preserving jars): keeps 1–5 years. Ideal for tomatoes, compotes, chutneys, sugo, letscho, jams.`,
          `Fermenting (lactic fermentation): keeps 6–12 months. Sauerkraut, kimchi, fermented beans, salt-brined cucumbers. Bonus: probiotics!`,
          `Drying: keeps 1–2 years. Herbs, tomatoes, chilli, apples, mushrooms. Air, oven or dehydrator.`,
          `Freezing: keeps 6–12 months. Beans, peas, berries, herb ice cubes, bell peppers, spinach.`,
          `Storing (fresh): keeps 2–6 months. Potatoes, carrots, beetroot, celeriac, apples, pumpkin, onions, garlic.`,
          `Pickling in vinegar/oil: keeps 6–12 months. Cornichons, mixed pickles, dried tomatoes in oil, garlic in oil.`,
        ],
        tip: `Start with the easiest: bottle tomato sugo and dry herbs. These are the two methods with the best effort-to-result ratio.`,
      },
      {
        title: `Bottling (preserving)`,
        content: `Bottling is the most reliable method for acidic foods (tomatoes, fruit, chutneys). The principle: food is packed into sterile jars, sealed, and pasteurised by heating to 85–100 °C. The vacuum that forms seals the jar. Correctly bottled preserves keep for several years in cool, dark storage.`,
        details: [
          `Equipment: a large pan (at least 30 cm deep), preserving jars or twist-off jars, a preserving funnel (5 EUR), a jar lifter (optional). Total investment: 30–50 EUR.`,
          `Tomato sugo: 5 kg tomatoes → 2–3 L sugo. Skin the tomatoes (blanch briefly), purée, cook for 30 min with salt, basil, garlic. Fill hot into sterilised jars, turn upside down.`,
          `Letscho: THE Burgenland recipe. Bell peppers (3 kg) + tomatoes (2 kg) + onions (1 kg). Chop, simmer for 30 min, fill hot. Keeps 1–2 years.`,
          `Jam: fruit + sugar (1:1 or 2:1) + lemon juice. Bring to the boil, boil hard for 4 min, fill hot. Set test: a drop on a cold plate, does it set? Done.`,
          `Chutney: fruit/vegetables + vinegar + sugar + spices. Green tomato chutney at the end of the season is a classic.`,
          `Sterilising: jars 10 min in boiling water or at 130 °C in the oven. Lids only briefly in hot water (rubber!). Seal immediately after filling.`,
          `Acidity is decisive: acidic foods (pH <4.6): the water-bath method is enough. Low-acid foods (beans, meat, vegetable stock): need a pressure canner (120 °C) or added vinegar.`,
        ],
        warning: `NEVER bottle low-acid foods (beans, courgettes, meat) in a water bath alone! Risk of botulism (Clostridium botulinum). Either use a pressure canner (115–120 °C) or add vinegar/citric acid (pH <4.6).`,
        sourceNote: `Heistinger: Handbuch Bio-Gemüse, chapter on preserving. German Federal Institute for Risk Assessment (BfR) recommendations.`,
      },
      {
        title: `Fermenting (lactic fermentation)`,
        content: `Fermenting is humanity's oldest preserving method and is currently enjoying a renaissance. Lactic acid bacteria (naturally present on the vegetables) convert sugar into lactic acid. The low pH preserves the vegetables and produces probiotics that support gut health. Sauerkraut is the best-known example, but almost any vegetable can be fermented.`,
        details: [
          `Sauerkraut: THE Austrian classic. 10 kg white cabbage + 200 g salt (2%). Shred, pound until the juice runs, press into a fermenting crock, weigh it down, ferment for 3–6 weeks at 18–22 °C. Then store cool (cellar, fridge).`,
          `Salt-brined cucumbers (lactic, not vinegar!): small firm cucumbers + brine (30 g salt/L water) + dill + garlic + horseradish. 5–7 days at room temperature, then cool. THIS is the traditional salt-brined cucumber.`,
          `Kimchi: Chinese cabbage + winter radish + chilli + ginger + fish sauce (or soy sauce for a vegan version). Korean, but wonderfully doable with Austrian Chinese cabbage.`,
          `Fermented beans: cooked beans in brine. After 5–7 days they taste umami-like.`,
          `Basic rule: 2–3% salt relative to the weight of the vegetables. Too little salt = rot. Too much = fermentation stops.`,
          `Fermenting crock vs. jar: a crock (ceramic with a water channel) is ideal for large amounts (10+ kg sauerkraut). Preserving jars (1–2 L) for small amounts and experiments.`,
          `Signs of good fermentation: bubbles rise (CO2), a sour smell, slightly cloudy brine. NO mould on the surface (always keep it under the liquid!).`,
        ],
        tip: `Starter recipe: 1 small white cabbage (1 kg). Shred finely. 20 g salt over it. Knead/pound for 5 min until the juice runs. Press into a 1 L jar (vegetables UNDER the liquid!). Screw the lid on loosely. 5–7 days at room temperature. Then into the fridge. There's your first sauerkraut!`,
        sourceNote: `Sandor Katz: The Art of Fermentation. Various Austrian fermenting workshops.`,
      },
      {
        title: `Drying and dehydrating`,
        content: `Drying removes water from the food and so stops the growth of bacteria and mould. Dried herbs, tomatoes, chilli and apples keep 1–2 years and take up hardly any space. The simplest method is air-drying (hang bunches of herbs upside down), the most reliable a dehydrator or the oven.`,
        details: [
          `Drying herbs: hang bunches upside down in a warm, airy place (not in the sun!). Basil, oregano, thyme, rosemary, sage. Dry in 5–7 days. Put into jars.`,
          `Drying tomatoes: halve, remove the seeds, cut side up on a baking tray. Salt over them. At 60–70 °C in the oven for 8–12 hours (oven door ajar). Or in the dehydrator at 60 °C, 12–18 hrs.`,
          `Drying chilli: thread whole pods on a string, hang in a warm place. 2–3 weeks. Or in the oven at 50 °C, 6–8 hrs.`,
          `Apple rings: remove the core, cut into 5 mm slices, dip in lemon water (against browning). In the oven at 60 °C, 6–8 hrs. Or hang on a string (traditional).`,
          `Dehydrator: investment 40–100 EUR. Advantage: even temperature, more energy-efficient than the oven. Recommendation: a model with temperature control (not just on/off).`,
          `Storage: dried goods in airtight jars (no plastic). Cool, dark. Moisture is the enemy. Silica gel sachets help.`,
        ],
        tip: `Basil salt: dried basil with coarse salt in the mortar. Fantastic on bruschetta, pasta, focaccia. A home-made gift!`,
      },
      {
        title: `Storing: the root cellar`,
        content: `Before the fridge, the root cellar was the standard method: cool (2–8 °C), damp (80–95% humidity), dark and frost-free. Many vegetables keep 3–6 months under these conditions: potatoes, carrots, beetroot, celeriac, apples, pumpkin, onions, garlic. If you have no root cellar, you can use a cool cellar room, an unheated garage or even an earth clamp.`,
        details: [
          `Potatoes: dark (light = green = solanine = poisonous!), 4–8 °C, damp. In hessian sacks or open wooden crates. Don't store next to apples (ethylene promotes sprouting). Keeps 4–6 months.`,
          `Carrots: pack in moist sand, in wooden crates in the cellar. 0–4 °C, 90%+ humidity. Keeps 3–5 months. Twist off the tops first (they draw out water!).`,
          `Beetroot: like carrots in sand. Leave 2 cm of stalk on (or it "bleeds"). Keeps 3–4 months.`,
          `Celeriac: in sand, like carrots. Keeps 2–3 months. Alternatively: freeze in slices.`,
          `Pumpkin: dry, 10–15 °C (warmer than other stored vegetables!). Hokkaido: 3–4 months. Butternut: up to 12 months. Always leave the stalk on.`,
          `Onions + garlic: dry, airy, 5–15 °C. Hang up in nets or plaits. Keeps 4–8 months.`,
          `Apples: 0–4 °C, 90% humidity. Wrap each one in newspaper. Check regularly (1 rotten apple spoils the basket). Not next to potatoes (ethylene). Keeps 2–5 months depending on the variety.`,
          `Earth clamp: a hole in the garden (50 cm deep), line with straw, vegetables in, straw over, soil on top. A natural root cellar. The traditional method for carrots and potatoes.`,
        ],
        tip: `No cellar? An unheated garage, a balcony insulated box (a polystyrene crate with a lid), or a cold stairwell. A temperature logger (10 EUR online) helps you find the best spot.`,
        sourceNote: `Kreuter: Der Biogarten, chapter on storage. Traditional storage methods of Lower Austria.`,
      },
      {
        title: `Freezing: tips and tricks`,
        content: `Freezing is the fastest and most vitamin-preserving method. Important: BLANCH vegetables before freezing (30–60 seconds in boiling water, then into iced water). This stops the enzymes that would otherwise destroy flavour, colour and vitamins.`,
        details: [
          `Beans: trim, cut into 3 cm pieces. Blanch 2 min. Refresh in iced water. Drain, freeze in portions. Keeps 10–12 months.`,
          `Peas: shell them. Blanch 1 min. Refresh. Pre-freeze on a baking tray (30 min), then into bags. They pour out as loose as shop-bought frozen peas.`,
          `Bell peppers: deseed, cut into strips. Do NOT blanch. Pre-freeze on a baking tray. Into bags. Or: roast, skin, then freeze.`,
          `Spinach/chard: blanch 30 sec. Squeeze out (or you get ice crystals). Form into portion balls. Freeze. Or: as a pesto with oil in ice-cube trays.`,
          `Berries: pre-freeze in a single layer on a baking tray (1 hr). Then tip into bags. That way they don't stick together.`,
          `Herbs: chop finely, into ice-cube trays, top up with olive oil, freeze. 1 herb ice cube = 1 portion for sauces and soups.`,
          `Labelling: ALWAYS write the contents + date on it. In 6 months you won't know whether that's spinach or nettles.`,
          `Freezer life: 10–12 months at -18 °C. After that the quality drops (freezer burn), but it is not spoiled.`,
        ],
        warning: `Cucumbers, lettuce, tomatoes (raw), radishes and other watery vegetables do NOT freeze well (they go mushy). Freeze tomatoes only as sugo/sauce.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WINTER GROWING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'winteranbau',
    title: `Winter growing & extending the season`,
    subtitle: `Fresh vegetables from November to March: greenhouse, cold frame, fleece and hardy varieties`,
    color: '#06b6d4',
    sourceIds: ['palme', 'palme-winter', 'heistinger'],
    relatedArticles: ['selbstversorgung', 'konservierung'],
    sections: [
      {
        title: `Why winter growing is a game-changer`,
        content: `Most gardeners in Austria grow from May to October and buy from the supermarket from November to April. In years of research, Wolfgang Palme (HBLFA Schönbrunn) has shown that with an unheated greenhouse or polytunnel and the right varieties, you can harvest fresh vegetables all year round in Vienna. In the "Winter vegetable diversity" project (with Bio Austria), more than 150 vegetable varieties suitable for unheated winter growing were identified on 7 organic holdings. No heating, no special technology.`,
        details: [
          `Unheated greenhouse in Vienna: 3–5 °C warmer than outside. Enough for lamb's lettuce, spinach, winter purslane, Asian salads.`,
          `Cold frame: a low box with a glass lid. Even warmer than the greenhouse (small volume = quickly heated). Ideal for radishes, lettuce, kohlrabi from February.`,
          `Fleece: 2–4 °C of protection. Lay it straight over the plants. Costs 2–3 EUR/m. Extends the outdoor season by 3–4 weeks.`,
          `Hardy crops outdoors: kale (-15 °C), lamb's lettuce (-15 °C), winter leek (-15 °C), Jerusalem artichoke, parsnip, winter purslane.`,
          `Principle: in winter you don't "grow", you "harvest". The plants are sown in August/September and grow on through autumn. In winter they stand still, hardly growing, but you can harvest continuously.`,
          `Light minimum: from the winter solstice (21 Dec) the days lengthen again. From mid-January plants respond and begin to grow once more.`,
        ],
        tip: `The simplest way to extend the season: sow lamb's lettuce into the bed or greenhouse in September. It is frost-hardy to -15 °C and provides fresh leaves all winter. No effort, no risk.`,
        sourceNote: `Palme, W.: Ernte mich im Winter (2019). HBLFA Schönbrunn trial results.`,
      },
      {
        title: `The best winter crops for Austria`,
        content: `These crops are proven for winter growing in Austria's climate zone 7a/b. Most are sown in August/September and harvested from November to March.`,
        details: [
          `Lamb's lettuce (Valerianella locusta): the winter star. Frost-hardy to -15 °C. Sow August–September. Harvest November–March. In the greenhouse AND outdoors. No protection needed. Nutty, mild.`,
          `Winter purslane / miner's lettuce (Claytonia perfoliata): frost-hardy to -10 °C. Sow September. Harvest November–March. Still grows at 5 °C. Juicy, crisp, mild. Self-seeds.`,
          `Spinach "Winterriesen": frost-hardy to -10 °C. Sow October. Harvest December–February. Turns sweeter after frost (starch → sugar).`,
          `Asian salads (mizuna, tatsoi, pak choi): frost-hardy to -5 to -10 °C. Sow September. Fast-growing. Varied flavours (mild to mustardy).`,
          `Kale / palm cabbage (Brassica oleracea): frost-hardy to -15 °C. Sow July–August. Harvest November–March. Turns dramatically sweeter after frost. A superfood (more vitamin C than oranges).`,
          `Winter cress / land cress: frost-hardy to -15 °C. Sow August. Harvest November–April. Mustardy, peppery. A wild-herb character.`,
          `Rocket (wild rocket, Diplotaxis): in the greenhouse all year. Grows very slowly in winter but steadily. Sharper than summer rocket.`,
          `Winter leek "Blaugrüner Winter": leave standing in the bed, frost-hardy to -15 °C. Harvest as needed October–March.`,
          `Parsnip: leave in the bed, turns sweeter after frost. Harvest October–March. Mulch deeply for protection.`,
          `Jerusalem artichoke (Helianthus tuberosus): leave the tubers in the soil, dig up as needed. Frost-hardy. Harvest October–March. Note: it spreads!`,
        ],
        sourceNote: `Palme, W.: Ernte mich im Winter. HBLFA Schönbrunn winter-vegetable variety list.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // FRUIT GROWING
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'obstanbau',
    title: `Fruit growing & berries`,
    subtitle: `Fruit trees, berry bushes and wild fruit for the home garden in Austria`,
    color: '#f59e0b',
    sourceIds: ['arche-noah', 'lk-noe', 'lk-bgld'],
    relatedArticles: ['selbstversorgung', 'konservierung'],
    sections: [
      {
        title: `Fruit trees for the home garden`,
        content: `Fruit trees are an investment in the future: 2–4 years to the first worthwhile harvest, but then 30–100 years of cropping. In the Pannonian climate (Vienna, Lower Austria, Burgenland) almost all Central European fruit species thrive superbly. Important: the rootstock and grafting determine the size. For home gardens choose a half-standard or bush tree (not a standard: too large, too slow to crop).`,
        details: [
          `Apple: THE Austrian fruit tree. Varieties: "Kronprinz Rudolf" (an old Austrian variety, Arche Noah), "Topaz" (scab-resistant, organic), "Elstar" (aromatic). 2–3 varieties for mutual pollination. Bush tree: crops from year 3. 30–100 kg/tree at full size.`,
          `Plum: ideal for the Austrian climate. Varieties: "Hauszwetschke" (the standard), "Wangenheims Frühzwetschke" (self-fertile, early), "Bühler" (for Powidl plum butter!). 20–50 kg/tree.`,
          `Apricot: a Wachau star, but also grown in the Pannonian region. Varieties: "Klosterneuburger" (an Austrian breed), "Goldrich". Late-frost risk when flowering in March. Choose a sheltered spot.`,
          `Cherry: sweet cherry needs a pollination partner. Varieties: "Kordia" (large, firm), "Burlat" (early). The sour cherry "Schattenmorelle" is self-fertile. Bird-protection netting needed!`,
          `Pear: heat-loving, ideal for the Pannonian climate. Varieties: "Williams Christ" (for eau de vie!), "Gute Luise", "Conference". They need a pollination partner.`,
          `Fig: increasingly grown in Vienna and Burgenland. "Brown Turkey" is the hardiest variety (-12 °C once established). A house wall = a heat store.`,
          `Nut: walnut needs lots of space (10–15 m crown diameter). Hazelnut is more compact. Both: 5–10 years to cropping.`,
          `Planting time: autumn (October–November) is ideal. The roots establish over winter. Container plants also in spring.`,
        ],
        tip: `For small gardens: columnar fruit or espaliers on the house wall. An espalier apple needs only 30 cm of width and still yields 10–20 kg.`,
        sourceNote: `LK NÖ fruit-growing variety recommendations. Arche Noah variety database. LK Bgld.`,
      },
      {
        title: `Berry bushes: quick cropping`,
        content: `Berries are the instant gratification of the fruit garden: plant in autumn/spring, first harvest the following summer. They need little space, little care and provide vitamin-rich fruit for eating fresh, freezing and for jams.`,
        details: [
          `Strawberries: see the plant encyclopedia. Plant in August for a harvest next year. 300–500 g per plant. Perpetual strawberries crop June–October.`,
          `Raspberries: "Autumn Bliss" (autumn raspberry, easier!) or "Tulameen" (summer raspberry, more aromatic). A support (wire framework). 2–4 kg per running metre.`,
          `Currants: red, white, black. Undemanding, frost-hardy, easy-care. Blackcurrant = the highest vitamin C content of any garden fruit. 3–5 kg/bush.`,
          `Gooseberries: "Invicta" (mildew-resistant), "Hinnonmäki Red" (sweet). Yield: 3–5 kg/bush. Thin out annually.`,
          `Blueberries: they need ACIDIC soil (pH 4.0–5.0)! Plant in rhododendron compost or a raised bed with bark humus. "Bluecrop", "Duke" (self-fertile).`,
          `Blackberries: thornless varieties: "Loch Ness", "Navaho". Enormously productive: 5–10 kg/plant. They need a support. Can spread!`,
          `Aronia (chokeberry): a superfood shrub. Frost-hardy to -30 °C. Undemanding. Berries for juice, jam, drying. 5–8 kg/bush.`,
          `Elderberry: grows almost anywhere, often present wild. Flowers → elderflower cordial/sparkling wine. Berries → juice, jelly. Eat the berries only cooked (slightly poisonous raw).`,
        ],
        tip: `Plant berry bushes along the edge of the plot: they form an edible hedge, save space and look good.`,
        sourceNote: `LK NÖ soft-fruit guide. Arche Noah variety list.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CROP-ROTATION PLAN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'fruchtfolge-plan',
    title: `Crop rotation: the 4-year plan`,
    subtitle: `A detailed rotation plan with an example layout for 4 beds over 4 years`,
    color: '#f59e0b',
    sourceIds: ['heistinger', 'kreuter', 'fibl'],
    relatedArticles: ['boden', 'duengung', 'selbstversorgung'],
    sections: [
      {
        title: `Why crop rotation is indispensable`,
        content: `Every plant family attracts particular pathogens and pests that persist in the soil. If you grow tomatoes in the same place two years running, nematodes, Fusarium and co. have a feast. At the same time, a heavy-feeder monoculture depletes the soil one-sidedly. Crop rotation solves both: pests find no host, and nutrients recover.`,
        details: [
          `Rule 1: never the same FAMILY in the same bed two years running. Tomato → tomato: NO. Tomato → bell pepper: also NO (both Solanaceae). Tomato → bean: YES.`,
          `Rule 2: heavy feeder → moderate feeder → light feeder → green manure/rest. Then start again.`,
          `Rule 3: pulses (beans, peas) leave nitrogen in the soil. Ideal BEFORE heavy feeders.`,
          `Rule 4: brassicas (cabbage, kohlrabi, radish, rocket) have the longest rotation interval: at least 6, better 7 years' break (clubroot / Plasmodiophora brassicae survives as resting spores for 15–20 years in the soil!). In addition: aim for pH >7 (liming), as clubroot is much more aggressive in acidic soil.`,
        ],
        warning: `Clubroot (Plasmodiophora brassicae) is the most dangerous soil-borne disease: affected roots swell up, the plant wilts. The pathogen persists 15–20 years in the soil. Once infected, never grow brassicas in that place again.`,
        sourceNote: `Heistinger: Handbuch Bio-Gemüse, chapter on crop rotation. FiBL leaflet.`,
      },
      {
        title: `4-bed rotation: a practical example`,
        content: `Divide your vegetable garden into 4 equal beds. Each bed passes through all 4 stages over 4 years. At the end of the cycle it all starts again. This system has worked for centuries and is the basis of European agriculture.`,
        details: [
          `BED A - Year 1 HEAVY FEEDERS: tomato, bell pepper, pumpkin, courgette, cucumber, celeriac, cabbage. Compost dressing: 5–10 L/m2. Feed with nettle liquid feed.`,
          `BED B - Year 1 MODERATE FEEDERS: carrot, beetroot, fennel, chard, kohlrabi, lettuce. Compost dressing: 3–5 L/m2.`,
          `BED C - Year 1 LIGHT FEEDERS: beans, peas, herbs, onions, garlic. Compost dressing: 1–2 L/m2 or none. Pulses fix their own nitrogen!`,
          `BED D - Year 1 GREEN MANURE/REST: phacelia, white mustard, clover, alfalfa. Or: potatoes (which need their own bed because of late blight).`,
          `Year 2: everything moves up one position: A→moderate feeders, B→light feeders, C→green manure, D→heavy feeders.`,
          `Year 3: one position further again.`,
          `Year 4: one position further again. After that: the cycle starts over.`,
          `EXCEPTION: perennial crops (strawberries 3 years, asparagus 10+ years, rhubarb 8+ years, herbs) have a fixed place outside the rotation.`,
        ],
        tip: `Draw your bed plan and note each year what was where. In 2–3 years you will have a perfect rotation system. The Garden Hub calendar helps you with this.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // RAISED BED
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'hochbeet',
    title: `Raised bed: planning and building`,
    subtitle: `Material, layering, planting and what to do after 3 years`,
    color: '#1e3a5f',
    sourceIds: ['kreuter', 'heistinger'],
    relatedArticles: ['boden', 'kompost', 'bewaesserung'],
    sections: [
      {
        title: `Why a raised bed?`,
        content: `Raised beds solve the commonest beginner problems in one go: poor soil (you fill your own), slugs (fit a slug edge), back trouble (working height 80 cm), waterlogging (perfect drainage). On top of that comes a bonus: the raised bed composts from within and generates warmth. Plants grow 2–3 weeks faster than in a ground-level bed.`,
        details: [
          `Advantages: good soil regardless of the subsoil. Easy on the back. Fewer slugs. Warmer soil (rotting inside). A 2–3 week head start.`,
          `Disadvantages: more expensive to build (material + filling). Dries out faster (water 2–3x as much as a ground-level bed!). Sinks 10–20 cm in the first year. After 5–7 years the filling must be renewed.`,
          `Dimensions: width max. 120 cm (reachable from both sides). Height: 80 cm (ergonomic). Length: any, 200–400 cm is usual.`,
          `Material: larch (lasts 15–20 years, no wood treatment needed). Douglas fir (12–15 years). Spruce (5–8 years, cheap but short-lived). Never tropical timber. Metal (Corten steel, durable, expensive).`,
          `Cost: build your own in wood 100–200 EUR. Ready-made kit 200–500 EUR. Corten steel 400–1000 EUR. Filling: 50–100 EUR (if you don't have everything from the garden).`,
        ],
        tip: `Untreated larch is the best choice for Austria. It grows here, no import needed, lasts 15–20 years without treatment, turns silver-grey and looks good.`,
      },
      {
        title: `Layering: the lasagne method`,
        content: `A raised bed is not simply filled with soil! It is layered like a lasagne: coarse material at the bottom (rots slowly, generates warmth), fine material on top (planting soil). The rotting of the lower layers supplies nutrients and warmth for 3–5 years.`,
        details: [
          `Layer 1 (bottom, 20 cm): coarse wood, branches, prunings, wood chips. Rots slowly (2–3 years), releasing warmth, and acts as drainage.`,
          `Layer 2 (15 cm): upturned turves, coarse compost, leaves, straw, half-rotted material.`,
          `Layer 3 (10 cm): mature compost, rotted manure (horse or chicken manure, NEVER fresh!). The nutrient turbine.`,
          `Layer 4 (25–30 cm): a mix of good garden soil and mature compost (2:1). The planting layer. This is where the roots grow.`,
          `Optional base: a vole grid at the bottom (13 mm mesh) prevents burrowing.`,
          `Optional slug edge: a copper strip (5 cm wide) or a metal slug edge (overhanging outwards, 45°). 90% slug protection.`,
          `Settling: in the first year the filling sinks 10–20 cm. Simply top up with compost + soil.`,
        ],
        warning: `Never put fresh manure (horse, chicken, cattle) in the planting layer! Fresh manure has too much ammonia and burns roots. Use only well-rotted manure (6+ months old, smelling of soil).`,
        sourceNote: `Kreuter: Der Biogarten. Various raised-bed guides.`,
      },
      {
        title: `Planting and crop rotation in the raised bed`,
        content: `The raised bed has its own dynamic: in the first year the nutrient content is at its highest (fresh rotting), then it falls. So: in year 1 heavy feeders, in year 2 moderate feeders, in year 3 light feeders. In years 4–5 top up and start again.`,
        details: [
          `Year 1 (heavy feeders): tomato, courgette, pumpkin, cucumber, cabbage. The raised bed is now a nutrient bomb. Perfect for hungry plants.`,
          `Year 2 (moderate feeders): carrots, beetroot, chard, kohlrabi, fennel, lettuce. Still well supplied.`,
          `Year 3 (light feeders): beans, peas, herbs, radishes, onions. Fewer nutrients, but enough for light feeders.`,
          `Years 4–5: top up with compost (10 cm), start again with heavy feeders. Or: a complete refill after 5–7 years.`,
          `Spacing in the raised bed: 20% closer than in a ground-level bed is possible (more nutrients, better soil). But don't overdo it: ventilation must be right.`,
          `Watering: raised beds dry out 2–3x faster than ground-level beds! Install a soaker hose or check twice a day. Mulch helps.`,
        ],
        tip: `Raised-bed hack: set trailing strawberry plants on the sides. The space on the outer walls is often wasted, but strawberries trail there perfectly.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // HERBS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'kraeuter',
    title: `The herb garden`,
    subtitle: `Growing, harvesting, drying and using the most important culinary herbs`,
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['konservierung', 'selbstversorgung'],
    sections: [
      {
        title: `Herb basics`,
        content: `Herbs are the most rewarding garden plants: little space, little care, a huge difference in flavour from shop-bought herbs. A 1 m2 herb bed by the kitchen door provides more fresh herbs than a family can use. Most Mediterranean herbs (rosemary, thyme, sage, oregano) are light feeders and prefer poor, free-draining, sunny spots. Moisture-loving herbs (parsley, chives, mint) like it richer and shadier.`,
        details: [
          `SUNNY + DRY + POOR (Mediterranean): rosemary, thyme, oregano, sage, lavender, marjoram. Don't feed! Poor soil = more essential oils = more intense flavour.`,
          `SUNNY TO PARTLY SHADED + MOIST: basil, parsley, chives, dill, coriander, mint. Water regularly. Work in compost.`,
          `Annual herbs (sow new every year): basil, dill, coriander, chervil, savory (summer savory).`,
          `Perennial herbs (plant once, harvest for years): rosemary, thyme, sage, oregano, chives, tarragon, mint, lovage.`,
          `Mint warning: mint spreads aggressively! Always sink it in a pot (without a hole!) in the bed. Otherwise it takes over everything.`,
          `Location: as close as possible to the kitchen door. Whoever won't walk 20 metres in the rain won't harvest. A herb spiral, a balcony box or a 1 m2 bed right by the house entrance.`,
        ],
        tip: `Herb spiral: a spiral bed of stones built up in layers (1.5 m diameter). Dry and sunny at the top (rosemary, thyme), moist and shady at the bottom (parsley, mint). It combines all herb requirements in a minimal area.`,
      },
      {
        title: `Harvesting and preserving herbs`,
        content: `The most important rule: never pick individual leaves off herbs, always cut whole shoot tips. This encourages bushy growth and prevents flowering (flowering herbs lose aroma). It is best to harvest in the morning after the dew but before the midday heat: that is when the essential-oil content is highest.`,
        details: [
          `Drying: tie into bunches, hang upside down in an airy, warm, dark place (NOT in the sun: it destroys the aromas). 5–7 days. Then strip from the stems, put into jars. Keeps 1–2 years.`,
          `Freezing: chop finely, into ice-cube trays, top up with olive oil. 1 cube = 1 portion. Ideal for basil (which dries badly), parsley, chives, dill.`,
          `Pesto: basil + garlic + pine nuts/walnuts + parmesan + olive oil. Freeze in small portions. Also doable with rocket, parsley or wild garlic.`,
          `Herb salt: grind dried herbs with coarse sea salt in a mortar (ratio 1:3). Rosemary salt, thyme salt, herbes-de-Provence salt. A perfect gift!`,
          `Herb vinegar: steep fresh sprigs (tarragon, thyme, rosemary) in a good white-wine vinegar. Leave 2 weeks. Strain. Keeps 1+ year.`,
          `Herb oil: steep dried (not fresh!) herbs in olive oil. Fresh herbs in oil → botulism risk! Always dry or acidify.`,
        ],
        warning: `NEVER steep fresh herbs in oil without acidifying (citric acid/vinegar)! A damp environment + no oxygen + room temperature = ideal botulism conditions (Clostridium botulinum). Dried herbs in oil are safe.`,
        sourceNote: `Heistinger: Handbuch Bio-Gemüse, chapter on herbs. Hygiene Austria food safety.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // COMPANION-PLANTING TABLE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'mischkultur',
    title: `Companion planting: who suits whom?`,
    subtitle: `The complete compatibility table, classic combinations and the Milpa principle`,
    color: '#22c55e',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['fruchtfolge-plan', 'pflanzenschutz', 'selbstversorgung'],
    sections: [
      {
        title: `Why companion planting works`,
        content: `Companion planting is not esotericism but applied ecology. The mechanisms are scientifically proven: (1) scent confusion: carrot flies find carrots by smell. Onions next to them mask that smell. (2) encouraging beneficials: flowering herbs among the vegetables attract hoverflies, whose larvae eat aphids. (3) space efficiency: deep-rooters (tomato) + shallow-rooters (lettuce) don't compete for water. (4) nitrogen transfer: legumes (beans) release nitrogen to neighbouring plants via their root nodules.`,
        details: [
          `Tomato + basil: the classic. Basil is said to repel whitefly and improve the flavour (not proven, but the plants have similar requirements). Both like sun and warmth.`,
          `Carrot + onion: SCIENTIFICALLY PROVEN. Studies show up to an 80% reduction in carrot fly (Psila rosae) infestation when interplanted with onions. The onion's sulphur scents mask the carrot smell. Conversely, the carrot scent deters the onion fly (Delia antiqua). In addition: more beta-carotene in the carrots.`,
          `Pumpkin + sweetcorn + bean (MILPA): the 5000-year-old system of the Three Sisters. Sweetcorn = a support for the bean. Bean = fixes nitrogen for sweetcorn + pumpkin. Pumpkin = covers the soil (weeds, moisture). A perfect system.`,
          `Lettuce + radish: radishes germinate in 5 days and mark the row. Lettuce takes 14 days. By the time the lettuce needs space, the radishes have been harvested. Time-staggered use of the same area.`,
          `Strawberry + garlic: garlic protects strawberries from grey mould (Botrytis). The fungicidal effect of allicin is scientifically proven.`,
          `Tomato + marigold: marigolds release substances through their roots that reduce nematodes in the soil. Demonstrated in studies at Wageningen University.`,
          `Cabbage + celeriac: celeriac confuses cabbage flies and cabbage white butterflies. The cabbage shades the moisture-loving celeriac.`,
        ],
        tip: `Start with the three most proven combos: carrot+onion, tomato+basil, Milpa. With those you can't go wrong and you learn the principle.`,
        sourceNote: `Kreuter: Der Biogarten, companion-planting table (appendix). FiBL leaflet on companion planting. Gertrud Franck: Gesunder Garten durch Mischkultur.`,
      },
      {
        title: `Good neighbours: overview table`,
        content: `This table shows the most important positive combinations. The plants benefit each other through scents, nutrient exchange, space efficiency or the encouragement of beneficial insects.`,
        details: [
          `TOMATO: basil, parsley, carrot, garlic, marigold, lettuce`,
          `BELL PEPPER: tomato, basil, carrot, pot marigold, parsley`,
          `CUCUMBER: bean, dill, lettuce, pea, fennel, cabbage`,
          `PUMPKIN/COURGETTE: bean, sweetcorn (Milpa!), nasturtium, borage`,
          `CARROT: onion (!), leek, tomato, pea, lettuce, chives`,
          `LETTUCE: radish, carrot, bean, pea, strawberry, kohlrabi`,
          `BEAN: sweetcorn, pumpkin, savory (!), strawberry, potato, cucumber`,
          `PEA: carrot, radish, lettuce, cabbage, fennel`,
          `CABBAGE: celeriac, pea, tomato, dill, chamomile, lettuce`,
          `STRAWBERRY: garlic (!), chives, lettuce, spinach, borage`,
          `POTATO: bean, horseradish (!), spinach, kohlrabi`,
          `ONION: carrot (!), strawberry, lettuce, dill, chamomile`,
        ],
        sourceNote: `Kreuter: Der Biogarten, table 15. Heistinger: Handbuch Bio-Gemüse.`,
      },
      {
        title: `Bad neighbours: what to avoid`,
        content: `Some plants inhibit each other: through root secretions (allelopathy), competition for the same nutrients, or because they carry the same diseases.`,
        details: [
          `TOMATO + POTATO: the same diseases (Phytophthora)! Never side by side.`,
          `TOMATO + FENNEL: fennel inhibits almost everything near it (allelopathic).`,
          `BEAN + ONION/GARLIC/LEEK: alliums inhibit the beans' nodule bacteria.`,
          `CUCUMBER + TOMATO (in the greenhouse): different climate needs. Cucumber needs high humidity, tomato low. Separate zones needed.`,
          `PEA + BEAN: the same family, the same diseases. Keep them apart.`,
          `DILL + CARROT: the same family (Apiaceae), they cross and compete.`,
          `FENNEL + almost everything: fennel is the "loner" of the vegetable garden. Its root secretions inhibit many neighbours. Plant it at the bed edge or on its own.`,
          `WALNUT: juglone from walnut leaves and roots inhibits growth within a 10+ m radius. No vegetable beds under walnut trees.`,
        ],
        warning: `NEVER plant tomato and potato side by side! Phytophthora infestans (late blight) attacks both and spreads by airborne spores. An infestation of the potatoes infects the tomatoes within days.`,
        sourceNote: `Kreuter: Der Biogarten. FiBL leaflet on companion planting and crop rotation.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PERMACULTURE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'permakultur',
    title: `Permaculture basics`,
    subtitle: `Lasting systems instead of seasonal labour: forest garden, mulch beds, circular economy`,
    color: '#15803d',
    sourceIds: ['kreuter', 'fibl', 'bio-austria'],
    relatedArticles: ['boden', 'kompost', 'mischkultur', 'selbstversorgung'],
    sections: [
      {
        title: `What is permaculture?`,
        content: `Permaculture (permanent + agriculture/culture) is a design system that imitates natural ecosystems. Instead of digging over the soil every year and growing monocultures, you build lasting, self-sustaining systems. In the home garden that means: perennial plants (berries, fruit trees, herbs) as the basic framework, mulch instead of bare soil, cycles (compost, rainwater), and diversity instead of uniformity. The result: less work with rising yields over the years.`,
        details: [
          `The ethics of permaculture: (1) Earth Care - look after soil, water and biodiversity. (2) People Care - provide for your own supply and community. (3) Fair Share - share surpluses, limit consumption.`,
          `Observe before acting: observe for a whole year before making big changes. Where is there sun, shade, wind? Where does water run to? Which plants grow on their own?`,
          `Zone concept: Zone 0 = the house. Zone 1 = kitchen garden, herbs (visited daily). Zone 2 = vegetable beds, greenhouse (regularly). Zone 3 = fruit trees, berries (occasionally). Zone 4 = wilderness, natural hedge (rarely). Zone 5 = untouched (biodiversity).`,
          `Every element has several functions: a fruit tree provides fruit + shade + windbreak + habitat for beneficial insects + compost material (leaves). A pond: irrigation + biodiversity + frogs (which eat slugs) + microclimate.`,
          `Every function is fulfilled by several elements: water comes from rain + cistern + mains. Nitrogen comes from compost + beans + green manure.`,
        ],
        tip: `You don't have to change everything at once. Start with a single permaculture element: e.g. "never dig again, only mulch." That alone will fundamentally change the soil within 2 years.`,
        sourceNote: `Bill Mollison: Permaculture - A Designers Manual. Sepp Holzer: Der Agrar-Rebell (an Austrian permaculture pioneer).`,
      },
      {
        title: `No-dig / never-dig method`,
        content: `Charles Dowding (UK) and others have shown in long-term trials that beds which are NEVER dug over yield the same as, or better than, dug ones. The reason: digging destroys the soil structure (fungal threads, earthworm channels, the capillary system) that the soil builds up over months. No-dig means: lay compost ON TOP, mulch, and the soil organisms do the rest.`,
        details: [
          `Method: every spring, 3–5 cm of mature compost on the bed surface. Don't work it in! Sow/plant straight into the compost.`,
          `Weeds: when laying out a new bed, put cardboard on the grass, 15 cm of compost on top. The cardboard smothers the grass, worms break it down. Ready to plant after 4–6 weeks.`,
          `Advantages: less work (no digging!), better soil structure, more earthworms, fewer weeds (weed seeds are not brought up), better water retention.`,
          `Long-term result: after 3–5 years of no-dig the soil is dark, crumbly, threaded with earthworm channels and fungal mycelium. The digging fork is out of a job.`,
          `Study: Dowding, C. (2020): a 10-year comparison of dig vs. no-dig. Result: the same yield, 50% less working time, distinctly better soil biology with no-dig.`,
        ],
        tip: `Making a new bed on lawn: mow the grass, 2 layers of cardboard on top (overlapping!), 15 cm of compost on that, done. Plant straight in after 6 weeks. No digging, no removing the lawn.`,
        sourceNote: `Charles Dowding: No Dig Gardening (2022). Long-term field trials at Homeacres Farm, UK.`,
      },
      {
        title: `Forest garden / food forest`,
        content: `A forest garden is an edible ecosystem in 7 layers that imitates the structure of a natural forest. Once established (3–5 years), it produces food with minimal care. For a small home garden a "mini forest garden" of 10–20 m2 with 1–2 fruit trees and layers staggered beneath is enough.`,
        details: [
          `Layer 1 - canopy: apple tree, walnut, cherry (crop + shade + windbreak)`,
          `Layer 2 - small trees: plum, apricot, fig (partly shaded under the large trees)`,
          `Layer 3 - shrubs: currant, raspberry, gooseberry, aronia, elder`,
          `Layer 4 - herb layer: strawberries, wild garlic, sweet woodruff, mint, chives`,
          `Layer 5 - ground cover: wild strawberries, white clover, ground ivy (living mulch)`,
          `Layer 6 - climbers: blackberry, grape, kiwi, runner bean`,
          `Layer 7 - root layer: Jerusalem artichoke, horseradish, parsnip (underground harvest)`,
          `Timescale: plant in year 1, establish in years 2–3, from year 4–5 increasing yield with decreasing care.`,
        ],
        tip: `Mini forest garden for 10 m2: 1 half-standard apple tree + 3 currant bushes beneath + strawberries as ground cover + chives + mint at the edge. After 3 years: fruit, berries, herbs and strawberries with no effort.`,
        sourceNote: `Martin Crawford: Creating a Forest Garden (2010). Robert Hart: Forest Gardening (1996). Sepp Holzer permaculture concepts, Austria.`,
      },
      {
        title: `The circular economy in the garden`,
        content: `In permaculture there is no "waste". Every output of one process is the input of another. Kitchen scraps become compost, compost becomes fertiliser, fertiliser becomes vegetables, vegetable scraps become compost again. Rainwater is collected, mulch reduces evaporation, surplus harvest is preserved or swapped.`,
        details: [
          `Compost cycle: kitchen → compost → bed → kitchen. 200–400 kg kitchen scraps/year/household = 80–150 kg compost = basic feeding for 20–30 m2.`,
          `Water cycle: rain → cistern → drip irrigation → evaporation → rain. With rainwater harvesting: 50–70% of the watering demand covered.`,
          `Mulch cycle: grass clippings + leaves → mulch → soil improvement → better growth → more mulch material.`,
          `Seed cycle: buy seed → plant → save seed → sow next year. With open-pollinated varieties, seed self-sufficiency after 3 years.`,
          `Nutrient cycle: beans fix nitrogen → heavy feeders (tomato) use it → plant remains onto the compost → nutrients back into the soil.`,
          `Surplus cycle: too many courgettes → neighbours/food-sharing → a social network → help with other garden tasks.`,
        ],
        tip: `The first cycle element: a compost. The second: a water butt. With those you have closed the two most important cycles and are saving money and resources from day 1.`,
        sourceNote: `Mollison, B.: Permaculture - A Designers Manual. Bio Austria circular-economy guide.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // CLIMATE CHANGE & THE GARDEN
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'klimawandel',
    title: `Climate change & the garden in Austria`,
    subtitle: `What is changing, what new opportunities and risks arise, and how to adapt`,
    color: '#ef4444',
    sourceIds: ['zamg', 'ages', 'boku'],
    relatedArticles: ['bewaesserung', 'mulchen', 'pflanzenschutz'],
    sections: [
      {
        title: `What has already changed in Austria`,
        content: `Austria is warming twice as fast as the global average. According to GeoSphere Austria, the growing season has lengthened by +13.5 days to an average of 212 days, with the strongest increase measured in the lowlands of northern and eastern Austria. 2024 was the warmest year in Austria's recorded history. For gardeners this means: a longer season, but also new challenges.`,
        details: [
          `Growing season +13.5 days on the Austrian average (GeoSphere Austria). In Vienna/Burgenland even more: up to +20 days.`,
          `Temperature rise: +2.3 °C since 1850 in Austria (global average: +1.2 °C). The Alpine region is warming faster.`,
          `Hot days (>30 °C): in Vienna from 10/year (1960s) to 25–30/year (2020s). Burgenland even more.`,
          `Dry spells: summers are getting drier, heavy rain more frequent but shorter. A less even water supply.`,
          `The frost-free period is lengthening: the last frost in the east now often as early as late March instead of mid-April.`,
          `New pests are arriving: the cotton bollworm (Helicoverpa armigera) from the Mediterranean is already attacking tomatoes and lettuce in Austria (AGES warning).`,
          `Spotted wing drosophila (Drosophila suzukii): in Austria since 2012, attacks berries and stone fruit.`,
        ],
        tip: `The lengthened growing season is an opportunity: you can start earlier (fleece!) and harvest longer (greenhouse!). At the same time you have to mulch more, water more and choose heat-resistant varieties.`,
        sourceNote: `GeoSphere Austria climate status report 2024. AGES plant health warning service. klimawandelanpassung.at`,
      },
      {
        title: `Adaptation strategies for the home garden`,
        content: `For gardeners in eastern Austria, climate change is both a curse and a blessing. Here are the most important adaptations you can put in place today:`,
        details: [
          `SAVING WATER is priority #1: drip irrigation, 8 cm of mulch, collecting rainwater (cistern/IBC), ollas (clay-pot irrigation). Sprinklers are a waste of water.`,
          `HEAT PROTECTION: mulch (lowers soil temperature by 5–8 °C), shading lettuce/spinach with fleece at the height of summer, light colours for raised beds (black boxes get too hot).`,
          `CHOICE OF VARIETY: choose heat- and drought-resistant varieties. "Bolt-resistant" lettuce. Drought-tolerant tomatoes. Arche Noah is deliberately breeding climate-adapted varieties.`,
          `BUILDING SOIL: humus stores 5x its weight in water. 1% more humus = 170,000 L more water retention per hectare. Compost, mulch, green manure = climate adaptation.`,
          `SHIFTING TIMING: sow 1–2 weeks earlier than the traditional calendars (the Ice Saints are shifting). The autumn season is usable 2–3 weeks longer.`,
          `INSECT PROTECTION NETTING: protects at the same time against heat (shading ~15%), hail (a growing risk), and new pests. Multi-function.`,
          `VARIETY DIVERSITY instead of monoculture: if one variety fails (heat, disease), the others still deliver. Never put everything on one card.`,
          `GREENHOUSE as a season-extender: with correct ventilation there is no heat problem. In autumn/winter the game-changer for year-round supply.`,
        ],
        warning: `Traditional growing calendars (e.g. the "farmers' calendar") are based on the climate of 1960–1990. The reality has shifted: the Ice Saints are statistically less relevant, but heavy rain and hail are increasing. Observe YOUR microclimate and adjust the calendar every year.`,
        sourceNote: `klimawandelanpassung.at (Federal Ministry). BOKU Vienna climate research. Arche Noah variety breeding.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GREEN MANURE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'gruenduengung',
    title: `Green manure`,
    subtitle: `A living soil cure: phacelia, mustard, clover and co. as soil improvers and a bee pasture`,
    color: '#22c55e',
    sourceIds: ['fibl', 'heistinger', 'kreuter', 'bio-austria'],
    relatedArticles: ['boden', 'kompost', 'fruchtfolge-plan'],
    sections: [
      {
        title: `What is green manure and why does it matter?`,
        content: `Green manure means: growing plants that are not harvested but worked into the soil (or left as mulch). They improve the soil in 5 ways at once: enriching nutrients (legumes fix ~30–40 kg nitrogen/ha), loosening the soil (deep roots break up compaction), building humus (biomass turns into humus), suppressing weeds (no bare soil) and protecting against erosion.`,
        details: [
          `Legumes (nitrogen fixers): clover, lupin, vetch, field bean. Nodule bacteria on the roots fix atmospheric nitrogen (N₂) and make it available to plants. 30–40 kg N/ha extra. Ideal BEFORE heavy feeders.`,
          `Brassicas (fast growers): white mustard, oil radish, rape. Germinate in 3–5 days, cover the soil quickly. Oil radish breaks up compaction with its taproot. NOTE: not before cabbage/kohlrabi/radish (the same family = clubroot!).`,
          `Phacelia (bee's friend): the best all-round green manure. Related to NO vegetable family (no rotation problem). A fantastic bee pasture. 5–7 weeks to flowering. Sow April–August.`,
          `Buckwheat: not frost-hardy, fast-growing, a bee pasture. Ideal for summer cover on empty beds.`,
          `Winter green manure: winter rye, winter vetch, crimson clover. Sow in September/October, overwinter, work in in spring.`,
        ],
        tip: `Standard recommendation: every bed that stands empty for longer than 3 weeks gets green manure. Easiest: broadcast phacelia seed, press it down, done. Costs 3–5 EUR for 100 m².`,
        sourceNote: `FiBL leaflet on green manure. Bio Austria practical guide. Heistinger: Handbuch Bio-Gemüse.`,
      },
      {
        title: `Green manure in practice: when to sow what`,
        content: `The sowing date determines which green manure makes sense. Here is an overview by season:`,
        details: [
          `SPRING (March–April): before the main crop. White mustard (fast, 4–6 weeks), phacelia. Work in/mow down before the main crop is planted.`,
          `SUMMER (June–August): after early potatoes, after peas, after early cabbage. Buckwheat (heat-loving), phacelia, clover. Covers empty beds in the hot season.`,
          `AUTUMN (August–September): winter green manure after the main harvest. Winter rye, winter vetch + winter rye (a mix!), crimson clover. Grows until frost, overwinters, work in in spring.`,
          `ALL YEAR (living mulch): white clover between cabbage rows, strawberries on a clover sward. Don't work it in, leave it standing permanently.`,
          `Working in: best to mow down 2–3 weeks BEFORE replanting and rake in shallowly (don't dig it in deep!). Or: leave it as mulch (the no-dig method).`,
          `Frost-tender green manure (mustard, phacelia, buckwheat): freezes off in winter and forms a natural mulch layer. In spring simply rake it aside and plant straight in.`,
        ],
        warning: `NEVER use white mustard and oil radish as green manure before brassicas (cabbage, kohlrabi, radish, rocket)! The same family = clubroot risk. Use phacelia, clover or buckwheat instead.`,
        sourceNote: `FiBL leaflet on green manure in vegetable growing. Kreuter: Der Biogarten, chapter on green manure.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SOIL ANALYSIS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'bodenanalyse',
    title: `Soil analysis: how to do it`,
    subtitle: `When, where and how to take soil samples, and what the results mean`,
    color: '#f59e0b',
    sourceIds: ['ages', 'boku', 'lk-noe'],
    relatedArticles: ['boden', 'duengung'],
    sections: [
      {
        title: `When is a soil analysis worthwhile?`,
        content: `A professional soil analysis is worthwhile when: you are laying out a new garden (what is actually in the soil?), the garden is on former industrial/commercial land (heavy metals?), plants grow poorly despite good care (nutrient deficiency? pH problem?), or every 3–5 years as a routine check. For home gardens, AGES offers official soil analyses in Austria.`,
        details: [
          `AGES basic package (Austria): pH, phosphorus, potassium, magnesium, humus content, C/N ratio, lime content, particle-size distribution. Cost: about 282 EUR incl. VAT (as of 2025).`,
          `AGES extension I (heavy metals): arsenic, lead, cadmium, chromium, copper, nickel, mercury, zinc and others. Assessed by intended use (vegetable garden). Cost: about 136 EUR extra.`,
          `AGES extension II (trace elements): recommended if you plan to use it as a vegetable/fruit garden. Shows whether boron, manganese and iron are present in sufficient amounts.`,
          `Alternative: simple pH test strips (5 EUR) or a digital pH meter (20–50 EUR) for a quick check at home.`,
          `AGES contact: bodenbox@ages.at. You are sent a "soil box", fill it with a sample and send it back (return postage included).`,
        ],
        tip: `For most home gardens a quick pH test (5 EUR) is enough as a first step. Only if problems arise or the garden is on unknown soil is the full AGES analysis worthwhile.`,
        sourceNote: `AGES soil investigations: ages.at/umwelt/boden/bodenuntersuchungen. AGES BGPE price list 2025.`,
      },
      {
        title: `Taking a soil sample properly`,
        content: `The sample must be representative: not just from one spot, but as a mixed sample from the whole bed. Wrongly taken samples give useless results.`,
        details: [
          `Timing: spring (before feeding) or autumn (after harvest). Not straight after liming or a compost dressing (wait 3–4 weeks).`,
          `Tools: a spade or soil corer. A clean bucket (not a metal one, which can distort the results).`,
          `Technique: make a spade cut at 10–15 different spots in the bed, taking a thin slice (2 cm) from the side of the top 25 cm. Mix all the slices in the bucket. That is the mixed sample.`,
          `Depth: 0–25 cm for vegetable beds. 0–10 cm for lawn.`,
          `Amount: put about 500 g of the mixed sample into a plastic bag. Label it (date, place, bed name). Let it air-dry (not in the oven!).`,
          `Separate samples: different beds = different samples. Lawn ≠ vegetable bed ≠ orchard meadow.`,
          `AGES soil box: AGES sends a ready-made box with instructions. Fill in the sample, seal it, into the postbox.`,
        ],
        sourceNote: `AGES guide to soil sampling. LK NÖ leaflet on soil investigation.`,
      },
      {
        title: `Interpreting the results`,
        content: `The analysis results come with a rating ("low / medium / high / very high") for each parameter. Here are the most important values and what they mean for your vegetable garden:`,
        details: [
          `pH 6.0–7.0: optimal for vegetables. Below that: add lime. Above (>7.5): sulphur or acidic compost.`,
          `Humus 3–5%: good. Below 2%: apply compost (5–10 L/m²/year). Above 6%: very good, less feeding needed.`,
          `Phosphorus (P₂O₅) "medium" (12–20 mg/100g): ideal. Often too high in home gardens (too much compost!). If "very high": reduce the compost dressing.`,
          `Potassium (K₂O) "medium" (15–25 mg/100g): ideal. If "low": wood ash (careful, pH!) or comfrey liquid feed.`,
          `Magnesium (Mg) "medium": ideal. If "low": Epsom salts (50 g/m²).`,
          `C/N ratio 10–15: good humus quality. Above 20: too much unrotted material (wood chips?). Below 10: very active, quickly mineralising humus.`,
          `Heavy metals: AGES assesses by intended use. Strict limits apply for vegetable gardens. If exceeded: don't grow root vegetables, use raised beds as an alternative.`,
        ],
        tip: `In 90% of home gardens the phosphorus level is too high (too much compost over the years). That is no disaster, but: with very high P, apply less compost and only mulch instead. Nitrogen is supplied by nettle liquid feed.`,
        sourceNote: `AGES soil-analysis assessment schemes. BOKU Vienna Institute of Soil Research.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // NATURAL FERTILISERS: HOME-REMEDY FACT CHECK
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'hausmittel-duenger',
    title: `Natural fertilisers: what really works`,
    subtitle: `Coffee grounds, banana skin, eggshell, wood ash, urine: a fact check with real nutrient values`,
    color: '#f59e0b',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['duengung', 'kompost', 'boden'],
    sections: [
      {
        title: `Overview: what works, what is a myth`,
        content: `The internet is awash with countless "miracle fertilisers" from the kitchen. Some are scientifically sensible, others useless or even harmful. Here is an honest fact check with real nutrient values:`,
        details: [
          `WORKS WELL: compost (universal fertiliser #1), nettle liquid feed (a fast N supplier), comfrey liquid feed (potassium), coffee grounds (slightly acidic, N+K), wood ash (potassium, but raises pH!), horn shavings (a slow N fertiliser).`,
          `WORKS A LITTLE: banana skins (little potassium, better in compost), eggshells (calcium, but works only after months), potato cooking water (minimal potassium+starch).`,
          `DOESN'T WORK/HARMS: milk on leaves (a fungal risk if overdosed), rice/pasta cooking water (barely measurable nutrients), sugar in the watering water (attracts pests), baking soda against mildew (useless against powdery mildew).`,
        ],
        tip: `The truth: compost + nettle liquid feed + mulch are all you need. Kitchen scraps belong ON the compost, not straight on the bed. The compost is the garden's "stomach", which processes everything.`,
      },
      {
        title: `Coffee grounds: the underrated all-rounder`,
        content: `Coffee grounds are indeed a usable fertiliser and one of the few kitchen scraps that can go straight onto the bed. An average household produces 4–8 kg of coffee grounds per year, which is a relevant amount of nutrients.`,
        details: [
          `Nutrient content (Stiftung Warentest): 2% nitrogen (N), 0.4% phosphorus (P), 0.8% potassium (K). Plus magnesium, sulphur and trace elements.`,
          `pH: 6.2–6.8 (slightly acidic). Good for tomatoes, strawberries, blueberries. Don't overdose on lime-loving plants.`,
          `Application: let it dry (risk of mould when wet!), then scatter straight on beds or work it into compost. Max. 50 g/m²/month.`,
          `Earthworms love coffee grounds! Ideal as a lure for the compost.`,
          `NOT directly on seedlings (too much caffeine inhibits germination). Only from the 4th week after sowing.`,
          `Coffee-ground tea: steep 100 g of coffee grounds in 5 L of water overnight. Strain. Watering water for house plants and balcony boxes.`,
        ],
        sourceNote: `Stiftung Warentest 2022: "Coffee grounds and eggshells". Various nutrient analyses.`,
      },
      {
        title: `Wood ash: powerful but risky`,
        content: `Wood ash is the most potassium-rich natural fertiliser and a traditional method in Austria (folk rules!). But: it is a heavy-metal concentrate and raises the pH strongly. Only from untreated wood, and in moderation.`,
        details: [
          `Nutrient content: 5–15% potassium (K₂O), 1–5% phosphorus (P₂O₅), 15–40% calcium (CaO). Plus magnesium, iron, manganese.`,
          `pH effect: STRONGLY alkaline (pH 11–13)! 100 g of wood ash on 1 m² raises the pH by about 0.2 units. On calcareous soils (as in much of Burgenland) do NOT use it!`,
          `Maximum amount: 100 g/m²/year. No more! Heavy metals (cadmium, lead) concentrate in ash.`,
          `ONLY ash from: untreated wood, straw, prunings. NEVER: coal, briquettes, paper, treated/varnished wood, chipboard.`,
          `Best application: on heavy-feeder beds (tomato, pumpkin) in spring. Rake in lightly. Or: into the compost (max. 5% of the compost volume).`,
          `Good combination: wood ash + coffee grounds. Ash raises the pH, coffee grounds lower it. They partly balance out.`,
        ],
        warning: `NEVER put wood ash on acidic soils (blueberries, rhododendrons) or calcareous soils. And NEVER use ash from treated wood, coal or paper (heavy metals, dioxins). Only pure wood ash from the fireplace/stove.`,
      },
      {
        title: `Eggshells: myth vs. reality`,
        content: `Eggshells are 95% calcium carbonate (CaCO₃) and are therefore a lime fertiliser. But: they break down EXTREMELY slowly. Whole eggshells on the bed are almost useless. The trick: grind them finely.`,
        details: [
          `Content: 95% calcium carbonate (the same substance as garden lime). Plus: trace elements (magnesium, phosphorus, strontium).`,
          `Problem: whole eggshells take years to break down. Pieces in the bed are still visible after 2 years.`,
          `Solution: grind eggshells FINELY (mortar, blender, coffee grinder). The powder has 100x more surface area and works much faster.`,
          `Applying the powder: 50–100 g/m²/year. Rake in lightly. Works to raise pH (like lime).`,
          `Slug myth: sharp eggshells around plants as slug protection? USELESS (scientifically disproven). Slugs crawl over eggshells without any trouble.`,
          `Better use: into the compost (crushed). There they speed up decomposition and regulate the pH.`,
          `Not against blossom-end rot on tomatoes! That is not a calcium deficiency in the soil but a transport problem caused by irregular watering. Watering more helps, not more eggshells.`,
        ],
        sourceNote: `Stiftung Warentest 2022. Various horticultural-science sources.`,
      },
      {
        title: `Banana skins: overrated`,
        content: `Banana skins are hyped as a "miracle fertiliser" but are less nutritious than claimed. They belong in the compost, not straight on the bed.`,
        details: [
          `Nutrient content (fresh): about 0.9% potassium (K), 0.1% phosphorus (P), 0.1% magnesium. Nitrogen: barely measurable.`,
          `For comparison: wood ash has 5–15% potassium. Coffee grounds have more nutrients than a banana skin.`,
          `Problem straight on the bed: rots slowly, attracts fruit flies and wasps, looks unsightly.`,
          `Better: CUT banana skins SMALL and into the compost. Or: dry, powder, then scatter as a fertiliser.`,
          `Banana-skin water (steep in water for 48 hrs): minimally effective, does no harm. Fine for house plants, irrelevant for the vegetable garden.`,
          `Pesticide concerns: conventional bananas are heavily treated. Prefer organic bananas, or at least wash them well.`,
        ],
      },
      {
        title: `Urine: the taboo fertiliser with scientific backing`,
        content: `It sounds unpleasant but is scientifically proven: human urine is a high-quality nitrogen fertiliser. Researchers at the Leibniz Institute of Vegetable and Ornamental Crops (IGZ) have shown that recycled urine fertiliser works just as effectively as conventional mineral fertilisers. In the permaculture and self-sufficiency sectors it is increasingly used.`,
        details: [
          `Nutrient content: urea is 50% nitrogen. Urine contains about 6–8 g N/L, 0.5–1 g P/L, 1–2 g K/L. That corresponds to an NPK ratio of 11:1:2.`,
          `Science: the IGZ 2024 study shows: no significant yield differences between urine fertiliser and mineral reference feeding. Plant nutrient uptake at the same level.`,
          `Dilution: ALWAYS dilute 1:10 with water (undiluted it burns roots through its salt content).`,
          `Application: water it onto heavy-feeder beds (tomato, pumpkin, potato). NOT on leafy vegetables (lettuce, spinach: nitrate accumulation) and NOT in the last 4 weeks before harvest.`,
          `Hygiene: fresh urine is virtually germ-free. But: don't use urine from anyone on antibiotics or hormone preparations (the pill!). Otherwise these substances get into the soil and the vegetables.`,
          `The "U-Cycle" research project: is currently looking for test gardeners for the scientific validation of urine fertiliser in the home garden.`,
        ],
        warning: `Do NOT use urine from anyone taking medication (antibiotics, hormones, chemotherapy). These residues get into the soil and plants. Don't apply to leafy vegetables (nitrate). And: always dilute 1:10.`,
        sourceNote: `Leibniz Institute of Vegetable and Ornamental Crops (IGZ), 2024 study. Kraut&Rüben magazine. Permakultur.de.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WEEDS: RECOGNISE, USE, MANAGE
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'unkraut',
    title: `Weeds: recognise, use, manage`,
    subtitle: `Reading indicator plants, harvesting edible wild herbs, defeating root weeds`,
    color: '#22c55e',
    sourceIds: ['kreuter', 'heistinger', 'fibl'],
    relatedArticles: ['boden', 'mulchen', 'pflanzenschutz'],
    sections: [
      {
        title: `Weeds as indicator plants: your soil is talking to you`,
        content: `Before you pull out a single "weed": look at it. Wild herbs are the best soil indicators there are. They tell you for free what a 280 EUR AGES soil analysis would show: whether your soil is acidic or calcareous, nutrient-rich or poor, compacted or loose, moist or dry.`,
        details: [
          `NETTLE (Urtica dioica): indicates nitrogen-rich, humus-rich, well-supplied soil. Where nettles grow, the soil is basically good. Bonus: the best raw material for liquid feed.`,
          `CHICKWEED (Stellaria media): indicates good, humus-rich, moist soil with a balanced pH. Where chickweed grows, everything is right. It is the soil-quality traffic light on GREEN.`,
          `DANDELION (Taraxacum officinale): indicates compacted, calcareous, nitrogen-rich soil. Typical of former lawns. Its deep taproot loosens the soil.`,
          `SORREL (Rumex acetosa): indicates ACIDIC soil (pH <6). If lots of sorrel grows: lime needed (for vegetables).`,
          `FIELD HORSETAIL (Equisetum arvense): indicates compacted, waterlogged soil. Drainage or raised beds needed.`,
          `GROUND ELDER (Aegopodium podagraria): indicates shady, moist, nutrient-rich soil. Often under trees/hedges.`,
          `COUCH GRASS (Elymus repens): indicates compacted, dry soil. Deep loosening (green manure with oil radish) helps.`,
          `CHAMOMILE (Matricaria chamomilla): indicates calcareous, loamy soil. Good for most vegetables.`,
          `FIELD PANSY (Viola arvensis): indicates acidic, lime-poor soil. Liming recommended.`,
          `SHEPHERD'S PURSE (Capsella bursa-pastoris): indicates neutral, moderately nutrient-rich soil. A good all-round indicator.`,
        ],
        tip: `Instead of fighting weeds, first observe for 1–2 weeks what grows. That is a free soil analysis. Chickweed + nettle = perfect soil. Sorrel + horsetail = lime and drain.`,
        sourceNote: `BZL (German Federal Information Centre for Agriculture): indicator plants. Kreuter: Der Biogarten.`,
      },
      {
        title: `Edible wild herbs: weeds into the kitchen`,
        content: `Many "weeds" are more nutritious than cultivated vegetables. Nettle contains more iron than spinach, ground elder more vitamin C than oranges, chickweed more protein than lettuce. Instead of fighting them: eat them up. That saves work and provides vitamins.`,
        details: [
          `NETTLE: use young shoot tips (April–May) like spinach. Blanched, they lose the stinging hairs. Soup, dumpling filling, pesto, crisps (deep-fried). Plus: liquid feed as fertiliser.`,
          `GROUND ELDER: young leaves (March–May) taste of parsley/carrot. Salad, pesto, smoothie, a spinach substitute. Contains 15x more vitamin C than lettuce.`,
          `CHICKWEED: mild and nutty all year. Salad, pesto, on bread. Contains vitamin C, potassium, magnesium, iron. The tastiest wild plant for beginners.`,
          `DANDELION: young leaves (before flowering!) as a salad, slightly bitter. Flowers for dandelion honey (syrup). Roasted roots as a coffee substitute. Buds fully edible.`,
          `WILD GARLIC (Allium ursinum): March–April, before flowering. Pesto, soup, butter. NOTE: risk of confusion with lily of the valley (deadly poisonous!) and autumn crocus (deadly poisonous!). If in doubt: do NOT pick.`,
          `GALLANT SOLDIER (Galinsoga parviflora): cultivated as a vegetable in South America! Mild leaves in salad or cooked.`,
          `RIBWORT PLANTAIN (Plantago lanceolata): crushed leaves on insect stings (cooling, anti-inflammatory). Young leaves in salad.`,
          `GROUND IVY (Glechoma hederacea): intensely aromatic, in small amounts as a seasoning. A traditional wild herb in Austrian cooking.`,
        ],
        warning: `WILD GARLIC: the risk of confusion with lily of the valley and autumn crocus is deadly real. The safest test: rub a leaf, does it smell of garlic? Yes = wild garlic. No = HANDS OFF. If in doubt, better to buy than to forage. Also: fox-tapeworm risk when foraging near the ground. Always wash thoroughly.`,
        sourceNote: `smarticular.net: edible weeds. ZDF wild-herb guide. Various wild-herb field guides.`,
      },
      {
        title: `The 5 most stubborn weeds and how to beat them`,
        content: `Some wild herbs are easy to handle (chickweed: just weed or eat it). Others are real opponents with deep rhizomes and extreme powers of regeneration. Here are the hardest cases and what REALLY helps:`,
        details: [
          `GROUND ELDER (Aegopodium podagraria): every gardener's nightmare. A rhizome network up to 50 cm deep, every fragment regenerates. Do NOT dig it over (it spreads the rhizomes!). The only solution: block the light. 2–3 layers of cardboard + 15 cm of mulch. After 1–2 years it is starved out. Or: accept it and eat it.`,
          `COUCH GRASS (Elymus repens): the rhizomes penetrate even potatoes. Loosen CAREFULLY with a digging fork, pull out the rhizomes (every piece!). The cardboard+mulch method works too. Green manure with oil radish competes successfully.`,
          `FIELD BINDWEED (Convolvulus arvensis): a root system up to 2 m deep (!). It cannot be eradicated. Management: cut off the shoots regularly (this weakens the plant over 2–3 years). Divert it onto a trellis (away from vegetables). Don't dig it over!`,
          `DANDELION (Taraxacum): a taproot up to 30 cm. Dig it out with a dandelion weeder before flowering (the WHOLE root!). If a root fragment remains: it resprouts. Dig regularly, over 2–3 years it declines. Or: harvest the leaves.`,
          `CREEPING BUTTERCUP (Ranunculus repens): creeping runners, forming daughter rosettes. Loosen with a digging fork, remove all the runners. Mulch helps. Indicates moist soil: possibly improve the drainage.`,
        ],
        tip: `The most effective weed control: MULCH. 8 cm of straw/wood chips/grass clippings on the bed blocks 80–90% of weeds. Weed the remaining 10% for 15 minutes once a week: anyone can manage that.`,
      },
      {
        title: `Weed management: strategy, not battle`,
        content: `In the organic garden you don't fight weeds with poison, but with strategy. The goal is not "zero weeds" (impossible and ecologically harmful) but "reducing weeds to a manageable level".`,
        details: [
          `Strategy 1 MULCH: the most powerful weapon. 5–8 cm of organic material (straw, grass clippings, leaves) suppresses 80–90% of seed weeds. Only root weeds penetrate mulch.`,
          `Strategy 2 HOEING/WEEDING: regularly, shallowly, in dry weather. Start small (15 min weekly). Weed seedlings at the 2-leaf stage are the easiest to remove. The bigger they are, the more effort.`,
          `Strategy 3 CARDBOARD: for new beds or stubborn areas. 2–3 layers of cardboard (overlapping!), 15 cm of compost on top. Weeds die under the light blockage. Ready to plant after 6–8 weeks.`,
          `Strategy 4 PLANT DENSELY: closely set crops shade the soil and leave weeds little light. Lettuce, potatoes, pumpkin cover the soil quickly.`,
          `Strategy 5 GREEN MANURE: green up empty beds at once (phacelia, buckwheat). No bare soil = no room for weeds.`,
          `Strategy 6 WEED FABRIC: under paths (not under vegetable beds). Lasts for years. Wood chips or gravel on top.`,
          `NEVER: Roundup/glyphosate or other herbicides in the vegetable garden. Even "organic-suitable" products based on acetic/pelargonic acid are non-selective and damage all plants.`,
        ],
        warning: `NEVER put weeds bearing seed heads on the normal compost! The seeds survive composting (except in hot composting above 65 °C). Into the residual waste, or "cook" them for 2 weeks in a black bag in the sun (solarisation).`,
        sourceNote: `Kreuter: Der Biogarten, chapter on weeds. FiBL leaflet on weed management. Neudorff.at.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GARDEN HACKS: VERIFIED VS. MYTHS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'garten-hacks',
    title: `Garden hacks: what works, what is a myth`,
    subtitle: `Cut-and-come-again, home remedies, social-media tips: scientifically checked`,
    color: '#f59e0b',
    sourceIds: ['heistinger', 'kreuter', 'fibl', 'boku'],
    relatedArticles: ['hausmittel-duenger', 'pflanzenschutz', 'mulchen'],
    sections: [
      {
        title: `Cut-and-come-again: what really regrows`,
        content: `The principle "plant once, harvest several times" does indeed work with many plants, but it is no magic bullet. Studies show: cut-and-come-again lettuce (Lactuca sativa) produces over weeks using the leaf-harvest method, with the plant gaining mass after each cut. What matters: NEVER damage the growing point (the heart).`,
        details: [
          `WORKS SUPERBLY: cut-and-come-again lettuce (harvest the outer leaves, leave the heart standing: weeks of harvest). Chard (cut off the outer stems, regrowth over 6+ months). Kale/palm cabbage (harvest the lower leaves, the top keeps growing, months). Spinach (cut 3 cm above the ground, resprouts 2–3x). Rocket (cut 3 cm above the base, quick regrowth).`,
          `WORKS WELL: basil (cut the shoot tips = branching = MORE leaves, not fewer). Parsley (harvest the outer stems, biennial). Chives (cut close to the ground, resprouts indefinitely). Mint (cutting encourages bushiness).`,
          `WORKS TO A LIMITED EXTENT: head lettuce (only cut-and-come-again types, not heading types). Celery (can regrow from the base, but slowly and weakly). Leek (sends up thin shoots from the stump, hardly practical). Pak choi (can regrow, but often bolts).`,
          `DOESN'T WORK: carrot, radish, beetroot (root vegetables = a one-off harvest). Pumpkin, courgette (harvesting fruit yes, but the plant doesn't "regrow"). Tomato (pinching out side-shoots boosts yield, but that is not the cut-and-come-again principle).`,
          `SCIENCE: study (ScienceDirect 2021): Lactuca sativa cv. Outredgeous under cut-and-come-again harvest: the plants doubled in fresh weight, dry weight and leaf area from the 1st to the 2nd cut. 3 harvests from the same plant over 56 days.`,
        ],
        tip: `The most effective cut-and-come-again combination for the balcony: 1 box of cut-and-come-again lettuce + 1 box of chard + 1 pot of basil + 1 pot of chives. All 4 provide for weeks from a single planting.`,
        sourceNote: `ScienceDirect: Comparison of two controlled-release fertilizer formulations for cut-and-come-again harvest (2021). ResearchGate: Comparison of Two Harvest Methods for Lettuce Production.`,
      },
      {
        title: `Social-media hacks: fact check`,
        content: `Instagram and TikTok are full of "garden hacks" that go viral. Some are brilliant, many are useless or even harmful. Here is a scientific fact check of the most popular:`,
        details: [
          `EGGSHELLS AGAINST SLUGS: DISPROVEN. Slugs crawl over eggshells without any trouble. Tested repeatedly in controlled trials. Eggshells are a lime fertiliser (when ground), but NOT slug protection.`,
          `COFFEE GROUNDS AGAINST SLUGS: DISPROVEN. No detectable deterrent effect in trials. Coffee grounds are a good fertiliser (2% N), but not a slug remedy.`,
          `EGGSHELLS AGAINST BLOSSOM-END ROT ON TOMATOES: DISPROVEN. Blossom-end rot is NOT a calcium deficiency in the soil but a transport problem caused by irregular watering (University of Minnesota Extension). Eggshells break down far too slowly to have any immediate effect. The solution: water EVENLY.`,
          `EPSOM SALTS AS A MIRACLE FERTILISER: PARTLY DISPROVEN. Epsom salts (MgSO4) help ONLY with a proven magnesium deficiency (interveinal chlorosis). Without a deficiency: useless. WITH BLOSSOM-END ROT EVEN HARMFUL: excess magnesium competes with calcium and makes the problem worse.`,
          `MILK AGAINST MILDEW: PARTLY CONFIRMED. Diluted milk (1:9 with water) shows a preventive effect against powdery mildew in some studies. It works through milk proteins + UV light (forming antimicrobial radicals). Not against downy mildew. Overdosing = fungal attack from the milk fat.`,
          `CINNAMON AGAINST DAMPING-OFF: CONFIRMED. Cinnamon has proven antifungal properties. Sprinkled thinly on seed compost, it reduces fungal attack on seedlings (damping-off). One of the few social-media hacks with a scientific basis.`,
          `BANANAS IN THE PLANTING HOLE: OVERRATED. Banana skin contains little potassium (0.9%), rots slowly, attracts fruit flies. Compost is 10x more effective. Throw it in the compost, not into the planting hole.`,
          `WATERING TOMATOES WITH SUGAR: USELESS. Plants cannot take up sugar through their roots. Sugar in the soil attracts ants and fungi. Completely pointless.`,
          `ASPIRIN IN THE WATERING WATER: WEAKLY SUPPORTED. Salicylic acid (in aspirin) can activate plant defences (systemic acquired resistance). The effect in studies is minimal and inconsistent. Nettle liquid feed is more effective and free.`,
          `BAKING SODA AGAINST MILDEW: WEAKLY SUPPORTED. Sodium bicarbonate can raise the pH on leaves superficially and inhibit mildew. The effect is weaker than milk-water and much weaker than sulphur or copper products.`,
        ],
        warning: `Epsom salts for blossom-end rot on tomatoes is COUNTERPRODUCTIVE. Excess magnesium blocks calcium uptake and makes the problem worse. The solution is even watering, not more fertiliser.`,
        sourceNote: `University of Minnesota Extension: Coffee grounds, eggshells and Epsom salts. BBC Science Focus: 7 biggest gardening myths debunked. Oregon State University: Coffee grounds pH research.`,
      },
      {
        title: `The REAL hacks that double your yield`,
        content: `Forget the social-media gimmicks. These techniques are scientifically proven and have the greatest effect on your garden yield:`,
        details: [
          `HACK #1 SUCCESSION SOWING: sow new rows of lettuce + radish every 2–3 weeks. Instead of 5 kg all at once and then nothing more: 12+ weeks of evenly fresh vegetables. Zero cost, maximum effect. This is THE beginner's hack.`,
          `HACK #2 MULCH (8 cm): reduces water evaporation by 30–50%, suppresses 80–90% of weeds, regulates soil temperature (5–8 C cooler in summer), encourages earthworms. A layer of straw costs 5 EUR and saves 50+ hours of weeding per season.`,
          `HACK #3 COMPANION PLANTING CARROT+ONION: scientifically proven: up to 80% less carrot-fly infestation. The onion's sulphur scents mask the carrot smell. Costs nothing extra.`,
          `HACK #4 NETTLE LIQUID FEED: a free, high-quality nitrogen fertiliser from a "weed". 1 kg nettles + 10 L water, ferment for 14 days, dilute 1:10. Replaces any bought N fertiliser for heavy feeders.`,
          `HACK #5 CUT BASIL SHOOT TIPS: never pick individual leaves! Always cut the tip with 2 pairs of leaves. The plant branches and from then on produces TWICE as many leaves. After 3 cuts it is a bushy plant instead of a long stalk.`,
          `HACK #6 PLANT TOMATOES DEEP: set tomatoes deeper than they stood in the pot (up to the seed leaves). Extra roots form on the buried stem = a stronger plant = more yield. Scientifically proven for Solanaceae.`,
          `HACK #7 GREENHOUSE (even a small one): even a 2x3 m greenhouse extends the season by 4–8 weeks on each side. HBLFA Schönbrunn research: 80% more tomato yield in the greenhouse vs. outdoors. And: winter vegetables November–March.`,
          `HACK #8 COMPOST TEA: 1 shovel of mature compost in 10 L of water, aerate for 24–48 hrs (aquarium pump). Water: immediately available micro-organisms + nutrients. Like a probiotic for the soil.`,
          `HACK #9 RAINWATER INSTEAD OF TAP WATER: no lime, no chlorine, room temperature (no cold shock for cucumbers). An IBC container (1000 L, 30–50 EUR second-hand) on the gutter = 60% of the watering demand for free.`,
          `HACK #10 GROUND COVER 365 DAYS: no bare soil, ever. Mulch, green manure, or winter vegetables. Bare soil = erosion + nutrient loss + weeds. Covered soil = humus building + moisture + earthworms.`,
        ],
        tip: `If you only want to put ONE hack into practice: mulch. 8 cm of straw on every bed. That alone saves 50% of watering, 80% of weeding, and improves the soil every year. Everything else is a bonus hack.`,
        sourceNote: `HBLFA Schönbrunn greenhouse trials. FiBL leaflets on mulch + companion planting. Various university studies (Oregon State, Minnesota, Wageningen).`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BEGINNERS: THE 15 COMMONEST MISTAKES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'anfaengerfehler',
    title: `The 15 commonest beginner mistakes`,
    subtitle: `What almost everyone gets wrong and how to get it right from the start`,
    color: '#ef4444',
    sourceIds: ['heistinger', 'kreuter'],
    relatedArticles: ['bewaesserung', 'anzucht', 'boden', 'duengung'],
    sections: [
      {
        title: `Mistakes 1–5: watering, space, timing`,
        content: `These five mistakes are made by 80% of all beginners. The good news: all are easy to avoid once you know them.`,
        details: [
          `MISTAKE 1: OVERWATERING. The #1 killer. Beginners water a little every day = wet surface, dry depth. Roots rot, plants become WEAKER instead of stronger. RIGHT: water less often but DEEPLY (soak 5–10 cm of soil depth). The finger test: finger 5 cm into the soil. Moist? Don't water. Dry? Water. It's that simple.`,
          `MISTAKE 2: PLANTING TOO CLOSE. "There's room for one more tomato!" No. Plants too close compete for light, water, nutrients. The result: all struggle, none crops well. RIGHT: spacings are not suggestions but a minimum. Tomato 60–70 cm, pumpkin 100 cm, lettuce 25 cm. Better fewer plants with full yield.`,
          `MISTAKE 3: SOWING TOO EARLY (INDOOR SOWING). Starting tomatoes indoors in January = long, thin, leggy plants in March that get no light. RIGHT: tomatoes from mid-March (6–8 weeks before planting out). Bell peppers from late February. Not earlier, unless you have grow lights.`,
          `MISTAKE 4: PLANTING OUT TOO EARLY. Frost-tender plants outdoors before the Ice Saints (16 May) = death in one cold night. RIGHT: wait for the Ice Saints. Or: keep fleece ready. In the greenhouse it is safe earlier.`,
          `MISTAKE 5: SOWING EVERYTHING AT ONCE. 20 heads of lettuce at once = 3 weeks of lettuce glut, then nothing more. RIGHT: succession sowing! A small row every 2–3 weeks. 12 weeks of evenly fresh lettuce instead of a flood.`,
        ],
        tip: `Rule of thumb for the first year: better to do 5 crops well than 20 badly. Start with: radish + lettuce + courgette + tomato + herbs. All 5 are beginner-friendly and forgive mistakes.`,
      },
      {
        title: `Mistakes 6–10: soil, fertiliser, care`,
        content: `These mistakes usually happen from the second month on, when the plants are growing and need care:`,
        details: [
          `MISTAKE 6: IGNORING THE SOIL. Throwing seeds into hard, neglected soil and hoping. RIGHT: before the first sowing: loosen the soil (digging fork, NOT spade), work in 3–5 cm of compost, check the pH (test strips 5 EUR). That alone doubles the yield.`,
          `MISTAKE 7: TOO MUCH FERTILISER. "More helps more" = lots of leaves, no fruit, burnt roots, an aphid magnet. Overdone nitrogen produces soft, susceptible tissue. RIGHT: compost as a base fertiliser (3 L/m²). Nettle liquid feed 1:10 for heavy feeders, every 2 weeks. No beginner needs more.`,
          `MISTAKE 8: NOT MULCHING. Bare soil = weeds, evaporation, erosion, temperature swings. RIGHT: 5–8 cm of straw or grass clippings on every bed. Straight after planting. The one step that solves 50% of all problems.`,
          `MISTAKE 9: NOT PINCHING OUT TOMATOES. Un-pinched tomatoes = an impenetrable jungle, little light, small fruit, late blight from lack of ventilation. RIGHT: break out the side-shoots in the leaf axils weekly. Simply nip them off with thumb and forefinger while they are small (under 5 cm).`,
          `MISTAKE 10: IGNORING CROP ROTATION. 3 years of tomatoes in the same bed = a nematode, Fusarium, Phytophthora party. RIGHT: never the same plant family in the same place two years running. Keep a bed plan (Garden Hub helps!).`,
        ],
        tip: `If you get just 3 things right, you are already better than 80% of all beginners: (1) mulching, (2) keeping to the spacing, (3) not overwatering.`,
      },
      {
        title: `Mistakes 11–15: harvest, pests, planning`,
        content: `These mistakes concern the later season and long-term planning:`,
        details: [
          `MISTAKE 11: HARVESTING TOO LATE. Courgettes like footballs, woody radishes, bitter lettuce. Vegetables taste best YOUNG. RIGHT: courgette at 15–20 cm, radish as soon as the root shows, lettuce before it bolts. Check daily during the harvest phase.`,
          `MISTAKE 12: UNDERESTIMATING SLUGS. A single night with slugs can wipe out 20 lettuce plants. RIGHT: slug barrier (a physical barrier, 100% effective), beer traps, collecting in the evening. Preventive: mulch, a dry surface in the evening (water in the morning instead of the evening).`,
          `MISTAKE 13: APHID PANIC. A few individual aphids = NOT an emergency. They are food for ladybirds. RIGHT: wait 5 days and observe. Beneficial insects often sort the problem out themselves. For mass infestations: spray potash soap (20 g/L of water). Never broad-acting insecticides (they kill beneficials too).`,
          `MISTAKE 14: NO GARDEN DIARY. Next year you won't remember: what was where? What worked? When was it sown? RIGHT: make notes. What, where, when, how much yield, what didn't work. The Garden Hub calendar and activities are made exactly for this.`,
          `MISTAKE 15: TOO MUCH AT ONCE. A 200 m² vegetable garden in the first year = overload, frustration, giving up. RIGHT: start small. 10–20 m² in the first year. Expand next year. Better a small garden that brings joy than a big one that causes stress.`,
        ],
        warning: `The very biggest beginner mistake: giving up after the first failure. EVERY gardener has losses in the first year. That is normal and not a failure. In the second year you know your soil, your climate, your microclimate - and everything gets better.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // TROUBLESHOOTING: SYMPTOM → DIAGNOSIS → SOLUTION
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'troubleshooting',
    title: `Troubleshooting: symptom, diagnosis, solution`,
    subtitle: `Does your plant look sick? Here you find the cause and what you can do NOW`,
    color: '#ef4444',
    sourceIds: ['ages', 'fibl', 'heistinger', 'kreuter'],
    relatedArticles: ['pflanzenschutz', 'bewaesserung', 'duengung'],
    sections: [
      {
        title: `Yellow leaves: 8 possible causes`,
        content: `Yellow leaves are the commonest symptom and can have 8 different causes. The position of the yellowing reveals the cause:`,
        details: [
          `LOWER leaves yellow, top green = NITROGEN DEFICIENCY (N). The commonest cause. N is mobile: the plant draws N from old leaves for new growth. SOLUTION: nettle liquid feed 1:10, horn shavings 50 g/m², or top up with compost.`,
          `Leaves yellow BETWEEN the veins (the veins stay green) = MAGNESIUM DEFICIENCY (Mg) or IRON DEFICIENCY (Fe). Interveinal chlorosis. For Mg: Epsom salts (10 g/L of watering water). For Fe: check the pH (above pH 7.5 Fe becomes insoluble).`,
          `Leaves COMPLETELY yellow + wilting = OVERWATERING / WATERLOGGING. The roots rot and can no longer take up water/nutrients. SOLUTION: stop watering at once. Improve the drainage. For pot plants: repot, remove the rotten roots.`,
          `Yellow leaves + poor growth in YOUNG plants = COLD. Below 10 C many vegetables stop growing. Bell pepper below 15 C = yellow leaves. SOLUTION: fleece, greenhouse, or simply wait until it warms up.`,
          `Yellow patches/patterns on leaves = A VIRUS (tobacco mosaic, cucumber mosaic etc.) or FUNGUS (downy mildew: yellow patches on top, grey coating beneath). VIRUS: no cure, remove the affected plant. FUNGUS: remove the affected leaves, ventilate better.`,
          `Yellow leaves ONLY on tomatoes in August/September = NORMAL. Autumn ageing. Remove the lower leaves anyway (ventilation, late-blight prevention).`,
          `Yellow leaves in the POT/BALCONY BOX = often a NUTRIENT DEFICIENCY (limited soil, depleted). SOLUTION: liquid fertiliser (organic vegetable fertiliser) every 2 weeks. Or nettle liquid feed 1:10.`,
          `Yellow leaves on blueberries = almost ALWAYS the pH too high (>5.5). SOLUTION: top up with rhododendron compost, water only with rainwater, conifer-needle mulch.`,
        ],
        tip: `Diagnostic aid: where are the yellow leaves? BOTTOM = nitrogen. BETWEEN veins = magnesium/iron. EVERYWHERE = water/cold/virus. In the pot = nutrient deficiency. That covers 90% of cases.`,
      },
      {
        title: `Wilting plants: 5 causes`,
        content: `When plants wilt, everyone immediately thinks of a lack of water. But there are 5 possible causes, and 2 of them get worse with MORE water:`,
        details: [
          `CAUSE 1: LACK OF WATER (commonest). Soil dry on the finger test. SOLUTION: water deeply (5 L per plant). Then mulch. By the next day the plant recovers.`,
          `CAUSE 2: OVERWATERING / ROOT ROT. The soil is WET, the plant wilts anyway. The roots are brown/mushy instead of white. SOLUTION: do NOT water any more! Improve the drainage. For pot plants: repot into dry soil, cut away the rotten roots.`,
          `CAUSE 3: HEAT WILT. Plants wilt at midday in great heat (>32 C), recover in the evening. That is NORMAL and not an emergency. The plant is regulating its transpiration. SOLUTION: only water if it is STILL wilting in the evening. Midday wilt is fine.`,
          `CAUSE 4: FUSARIUM/VERTICILLIUM WILT (fungus). The plant wilts one-sidedly or completely, the soil is moist. The vascular bundles in the stem are brown (cut test). NO CURE. Remove and dispose of the affected plant (residual waste, NOT compost). Keep to the crop rotation.`,
          `CAUSE 5: ROOT DAMAGE. Vole, chafer grub, nematodes. The plant wilts with no obvious reason. Dig it up and check the roots. SOLUTION: a vole grid, plant nematode-hostile marigolds, crop rotation.`,
        ],
        warning: `CRITICAL: a wilting plant + moist soil = do NOT water even more! That is the opposite of a lack of water. Overwatering (root rot) kills more plants than drought. ALWAYS do the finger test before watering.`,
      },
      {
        title: `Holes in leaves: what is eating my plants?`,
        content: `Holes in leaves have various culprits. The type of damage reveals the offender:`,
        details: [
          `LARGE, IRREGULAR HOLES + SLIME TRAILS = SLUGS. They feed at night, leaving a silvery trail. IMMEDIATE MEASURE: collect them in the evening (from dusk with a torch). LONG-TERM: slug barrier, water in the morning instead of the evening, mulch (ironically: it attracts slugs, but the benefit outweighs this).`,
          `SMALL ROUND HOLES (1–2 mm, like shotgun pellets) = FLEA BEETLES. Typical on cabbage, radish, rocket. They jump away when you touch them. SOLUTION: keep moist (flea beetles like it dry), fleece/insect protection netting, a fine dusting of rock flour.`,
          `LEAVES SKELETONISED (only the veins left) = CATERPILLARS (cabbage white caterpillars, green, on the leaf undersides). SOLUTION: hand-picking. Insect protection netting from the start. For mass infestations: Bacillus thuringiensis (Bt, organic).`,
          `HOLES + A SILVERY/BRONZE LEAF SURFACE = THRIPS. Tiny insects (1 mm) that suck at cells. SOLUTION: blue sticky traps, predatory mites (Amblyseius cucumeris), neem oil.`,
          `NOTCHES IN THE LEAF MARGIN (crescent-shaped) = VINE WEEVIL. Nocturnal, it eats notches in the leaf margin. The larvae in the soil eat roots (worse!). SOLUTION: nematodes (Heterorhabditis bacteriophora) against the larvae in the soil. Collect them in the evening.`,
          `HOLES IN FRUIT (tomato, bell pepper) = NOCTUID CATERPILLARS (tomato moth/cotton bollworm). They bore into fruit. SOLUTION: insect protection netting, Bt products, pheromone traps. AGES warning: the cotton bollworm (Helicoverpa armigera) is spreading in Austria due to climate change.`,
        ],
        tip: `Diagnostic trick: into the garden at night with a torch. Most leaf-eating pests are nocturnal. Slugs, caterpillars, vine weevils: catch them all in the act from dusk.`,
        sourceNote: `AGES plant health warning service. FiBL pest list. Kreuter: Der Biogarten.`,
      },
      {
        title: `White/grey coating on leaves: mildew`,
        content: `A white or grey coating is almost always mildew, but there are 2 DIFFERENT diseases that are treated completely differently:`,
        details: [
          `POWDERY MILDEW (Erysiphales): a white, mealy coating on the UPPER LEAF SURFACE. Appears in DRYNESS + warmth. Typical: courgette, pumpkin, cucumber in late summer. MEASURES: remove the affected leaves. Spray milk-water (1:9) preventively. Lime-sulphur products (organic-approved). Choose resistant varieties. Don't overreact: in August mildew on courgettes is NORMAL and the plant still crops for weeks.`,
          `DOWNY MILDEW (Peronosporales): yellow patches on the UPPER LEAF SURFACE, a greyish-purple coating on the LEAF UNDERSIDE. Appears in WET + cool conditions. Attacks: lettuce, spinach, onion, basil. MEASURES: wider spacing (ventilation!), water in the morning (leaves dry off), copper products (organic-approved, but a heavy metal). Resistant varieties.`,
          `IMPORTANT DIFFERENCE: powdery mildew = a dryness disease (more water helps). Downy mildew = a wet disease (less water helps). Confusing them leads to it GETTING WORSE.`,
          `LATE BLIGHT (Phytophthora infestans, on tomatoes): NOT mildew, but often confused with it. Brown patches (not white!) on leaves and fruit. Spreads explosively in rain + warmth. IMMEDIATE MEASURE: remove affected leaves/fruit and into the residual waste (NOT compost!). Never water from above. A greenhouse gives the best protection.`,
        ],
        tip: `Simple diagnosis: coating on the UPPER SIDE, in DRYNESS = powdery mildew. Coating on the UNDERSIDE, in WET = downy mildew. BROWN patches on tomatoes = late blight (Phytophthora). Three different diseases, three different treatments.`,
        sourceNote: `AGES plant protection service. FiBL leaflets on mildew/late blight. Kreuter: Der Biogarten.`,
      },
      {
        title: `Emergency checklist: plant in trouble`,
        content: `A quick decision aid when something is wrong:`,
        details: [
          `PLANT WILTS → finger test: soil dry? → water. Soil wet? → do NOT water, check the drainage. Recovers in the evening? → just heat wilt, no problem.`,
          `YELLOW LEAVES AT THE BOTTOM → nitrogen deficiency → nettle liquid feed 1:10`,
          `YELLOW LEAVES BETWEEN THE VEINS → magnesium deficiency → Epsom salts 10 g/L`,
          `HOLES IN LEAVES → check at night → slugs: collect/barrier. Flea beetles: keep moist. Caterpillars: Bt product.`,
          `WHITE COATING ON TOP → powdery mildew → remove leaves, milk-water 1:9`,
          `GREY COATING UNDERNEATH → downy mildew → spacing, keep drier, copper`,
          `BROWN PATCHES ON TOMATOES → late blight → remove at once, never water from above`,
          `BLACK PATCH AT THE BASE OF THE TOMATO → blossom-end rot → water more evenly (NOT more calcium!)`,
          `LEAVES CURL UP → heat/drought stress (normal for bell pepper/tomato), cold (<10 C), or a virus (if one-sided)`,
          `PLANT DOESN'T GROW → too cold (<10 C), waterlogging, pH problem, nutrient deficiency. Test the soil.`,
          `SEEDLING KEELS OVER (damping-off) → too wet, too cold, sown too densely. Ventilate better, water less, sprinkle cinnamon.`,
          `FLOWERS DROP (tomato/bell pepper) → night temperature <10 C, heat stress >35 C, or water stress. Stabilise the conditions.`,
        ],
        tip: `In 90% of cases the causes are mundane: too much water, too little water, too cold, or a nutrient deficiency. Exotic diseases and pests are rare. First rule out the simple causes.`,
        sourceNote: `Various sources: AGES, FiBL, Heistinger, Kreuter. Compiled as a quick reference.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SELF-SUFFICIENT: STORAGE AND SUPPLY CALENDAR
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'vorratskalender',
    title: `Supply calendar: eating from the garden all year`,
    subtitle: `Month by month: what you harvest fresh, what comes from the store, and what you have preserved`,
    color: '#f59e0b',
    sourceIds: ['heistinger', 'palme', 'palme-winter', 'kreuter'],
    relatedArticles: ['selbstversorgung', 'konservierung', 'winteranbau'],
    sections: [
      {
        title: `The supply gap: February–April`,
        content: `The greatest challenge for the self-sufficient is not summer (there is too much then) but late winter/early spring. February to April is the "hunger gap": stored vegetables are running out, and nothing is growing in the garden yet. Closing this gap is the masterpiece of self-sufficiency.`,
        details: [
          `JANUARY: store: potatoes, carrots, beetroot, celeriac (in sand), pumpkin (dry), onions, garlic. Preserves: tomato sugo, letscho, jam, sauerkraut, pickled cucumbers. Freezer: beans, peas, berries, spinach, herb cubes. Greenhouse: lamb's lettuce, winter purslane, spinach (fresh!).`,
          `FEBRUARY: the store gets thinner. Potatoes start to sprout (rub off the sprouts, still edible). Check carrots/beetroot (remove any rotten ones). The sauerkraut barrel is running low. Greenhouse: lamb's lettuce, purslane still harvestable. Fresh greens are now worth their weight in gold.`,
          `MARCH: the HUNGER GAP begins. The store is almost empty (only pumpkin, onions, garlic, preserves left). BUT: the first fresh harvest! Wild garlic (wild), chives (sprouting), winter leek (still standing in the bed). Greenhouse: the last lamb's lettuce harvest. From mid-March: first radishes + rocket sown in the greenhouse.`,
          `APRIL: the gap closes. Fresh: radishes (greenhouse), rocket, spinach (the first direct sowing germinates), rhubarb. Bridging: preserves, frozen stores, the last pumpkin.`,
          `MAY–OCTOBER: fresh supply. From May there is no problem any more. The harvest exceeds demand from July. NOW preserve for next winter!`,
          `NOVEMBER–DECEMBER: harvest: winter leek, kale, lamb's lettuce, greenhouse salads. The store freshly filled: potatoes, carrots, beetroot, pumpkin, onions. Preserves freshly bottled. The best time of year for the self-sufficient.`,
        ],
        tip: `The hunger gap (Feb–April) is closed with 3 strategies: (1) greenhouse winter salads (lamb's lettuce, purslane), (2) storable vegetables (pumpkin keeps until April!), (3) dividing up preserves and frozen stores strategically (don't eat everything in December).`,
        sourceNote: `Palme: Ernte mich im Winter. Heistinger: Handbuch Bio-Gemüse. Kreuter: Der Biogarten.`,
      },
      {
        title: `Bottling: the 5 most important recipes for the self-sufficient`,
        content: `These 5 preserving recipes form the backbone of the winter supply. All are safe (pH <4.6) and keep 1–3 years. Together they cover sauces, side dishes, breakfast and snacks.`,
        details: [
          `RECIPE 1: TOMATO SUGO (10-litre batch). Wash 10 kg tomatoes, quarter them. Soften in a big pan for 30 min. Pass through a mouli ("Flotte Lotte"). Cook down for 30 min with salt (2 tsp/L), basil, garlic until creamy. Fill HOT into sterilised jars (1 cm headspace), seal at once, turn upside down. Tomato pH: 4.0–4.5 (safe for hot filling). Keeps: 2–3 years cool + dark.`,
          `RECIPE 2: LETSCHO (Burgenland classic). 3 kg bell peppers (red, deseeded, in strips) + 2 kg tomatoes (skinned, diced) + 1 kg onions (rings) + 3 tbsp oil + salt + pepper + sugar. Sweat the peppers + onions for 15 min. Add the tomatoes, simmer for 30 min. Fill HOT. pH: <4.5 (tomatoes + peppers). Keeps 1–2 years.`,
          `RECIPE 3: SAUERKRAUT (20 kg batch for winter). Finely shred 20 kg white cabbage. Scatter 400 g salt (2% of the weight) over it. Knead/pound WITH YOUR HANDS until plenty of juice runs (20–30 min). Press into a fermenting crock or 10 L bucket. Weight on top (a water-filled bag inside a bag). Ferment for 3–6 weeks at 18–22 C (bubbles = fermentation active). Do NOT open during fermentation! Then store cool (cellar, fridge). Keeps: 6–12 months.`,
          `RECIPE 4: SALT-BRINED CUCUMBERS (lactic). Wash small firm cucumbers, do NOT peel. Brine: 50 g salt per 1 L water. Fill jars with cucumbers, and between them: dill heads, garlic cloves, pieces of horseradish, mustard seeds, bay. Pour on the brine (the cucumbers must be completely covered). Seal loosely. 5–7 days at room temperature. Then store cool. Keeps: 6–12 months. Not to be confused with vinegar cucumbers (a different process).`,
          `RECIPE 5: STRAWBERRY/CURRANT JAM. 1 kg fruit + 500 g preserving sugar 2:1 + 2 tbsp lemon juice. Bring to the boil, boil hard for 4 min, skim. Set test: a drop on a cold plate, does it set = done. HOT into sterilised jars, seal at once, turn upside down. Keeps: 2+ years.`,
        ],
        warning: `BOTULISM SAFETY: tomatoes (pH 4.0–4.5) and fruit (pH 3.0–4.0) are SAFE for hot filling (water bath, 85–100 C). Low-acid foods (beans pH 5–6, meat pH 5–7, vegetable stock) are NOT safe for hot filling: they need a pressure canner (115–120 C) or added vinegar/citric acid (bringing them below pH 4.6). Clostridium botulinum produces its toxin ONLY at pH >4.6 in an oxygen-free environment. Below 4.6 you are safe.`,
        sourceNote: `Steiermarkgarten.at: safe bottling. Wurzelwerk: avoiding botulism. Kraut&Rüben: bottling guide.`,
      },
      {
        title: `Storage conditions by vegetable type`,
        content: `Every stored vegetable has different requirements for temperature and humidity. Wrong storage = rot or drying out within weeks.`,
        details: [
          `POTATOES: 4–8 C, 85–90% humidity, DARK (light = solanine formation = green = poisonous). In hessian sacks or open crates. NOT next to apples (ethylene promotes sprouting). Keeps: 4–6 months. Rub off the sprouts regularly.`,
          `CARROTS: 0–2 C, 95%+ humidity. In moist sand in wooden crates (sand storage). Twist off the tops (don't cut: it draws out moisture). Keeps: 3–5 months.`,
          `BEETROOT: like carrots. 0–2 C, sand. Leave 2 cm of stalk (or it "bleeds"). Keeps: 3–4 months.`,
          `CELERIAC: in sand like carrots. 0–2 C. Keeps: 2–3 months. Alternatively: freeze in slices.`,
          `PARSNIP/SALSIFY: best left in the bed and dug up as needed (frost-hardy!). Or like carrots in sand. Keeps in the cellar: 2–3 months.`,
          `PUMPKIN: 10–15 C (!), DRY (50–60% humidity). Important: warmer than other stored vegetables! Leave the stalk on. Lay on a shelf, don't stack. Hokkaido: 3–4 months. Butternut: up to 12 months (!). Musquée: 6–9 months.`,
          `ONIONS: 5–15 C, dry, airy. Hang up in nets or as plaits. Keeps: 4–8 months (storage varieties up to 10 months).`,
          `GARLIC: 5–15 C, dry, airy. Plait or in nets. Keeps: 6–9 months (autumn-planted keeps longer than spring-planted).`,
          `APPLES: 0–4 C, 85–90% humidity. Wrap each one in newspaper. Check regularly (1 rotten = all rotten). NOT next to potatoes or cabbage (ethylene!). Keeps depending on variety: "Topaz" 3 months, "Boskoop" 5 months.`,
          `CABBAGE: 0–2 C, 90% humidity. Hang whole heads upside down or on a shelf. Keeps: 2–3 months. Or: as sauerkraut 6–12 months.`,
          `NUTS (walnut, hazelnut): in net bags, dry, cool. Dry for 2–3 weeks after harvest. Keeps: 12+ months (unshelled).`,
        ],
        tip: `No cellar? Alternatives: an unheated garage (often 4–10 C in winter), an earth clamp (a hole in the garden, 50 cm deep, straw inside, soil on top), an insulated box on the balcony (a polystyrene crate with a lid, padded with straw), a cold stairwell. A temperature logger (10 EUR) helps you find the best spot.`,
        sourceNote: `Kreuter: Der Biogarten, chapter on storage. Heistinger: Handbuch Bio-Gemüse. Traditional storage methods of Lower Austria/Burgenland.`,
      },
      {
        title: `Supply master plan: amounts for 2 people, 1 year`,
        content: `A concrete quantity plan for largely self-sufficient supply (vegetables + fruit) for 2 people over a whole year. Cereals, oil and dairy are bought in.`,
        details: [
          `STORED VEGETABLES (store fresh): 100 kg potatoes (20 m2 grown). 30 kg carrots (8 m2). 15 kg beetroot (5 m2). 10 kg celeriac (3 m2). 20 kg onions (5 m2). 5 kg garlic (5 m2). 40 kg pumpkin (10 m2, about 4–6 pumpkins). 10 kg apples (1–2 trees).`,
          `BOTTLING (jars): 30 L tomato sugo (from about 30 kg tomatoes = 6–8 plants). 10 L letscho (8 kg bell peppers + 5 kg tomatoes). 10 L pickled cucumbers. 5 L jam (various berries + fruit). 5 L chutneys / relishes.`,
          `FERMENTING: 20 kg sauerkraut (= 20 kg white cabbage). 5 L lactic cucumbers.`,
          `FREEZING: 10 kg beans (blanched). 5 kg peas. 5 kg berries (raspberry, currant, strawberry). 5 kg spinach/chard (portioned). 2 kg herb cubes (in ice-cube trays + olive oil).`,
          `DRYING: 2 kg dried tomatoes. 1 kg dried herbs (basil, oregano, thyme, rosemary, sage). 0.5 kg dried chilli pods.`,
          `GREENHOUSE (fresh winter harvest): lamb's lettuce, winter purslane, spinach, Asian salads (Nov–March): about 10 kg of fresh vegetables in total.`,
          `OUTDOORS (winter harvest): kale, winter leek, parsnip (Nov–March): about 10 kg.`,
          `TOTAL GROWING AREA: about 80–100 m2 of vegetables + 10–15 m2 of greenhouse + fruit trees/berries. Plus a herb bed 3–5 m2.`,
          `WORKLOAD: summer: 5–8 hrs/week of gardening + 2–3 weekends of bottling/pickling. Winter: 1–2 hrs/week. Realistic alongside a full-time job if well planned.`,
        ],
        tip: `In the first year, start with half. 50 m2 + greenhouse + 3 bottling weekends. In the second year you will know what works and can scale up. Perfection comes with experience, not with planning.`,
        sourceNote: `Own calculation based on yield data (Heistinger, fryd.app yield calculator) and DGE dietary recommendations.`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SCIENTIFICALLY PROVEN GARDEN TECHNIQUES
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'wissenschaft-techniken',
    title: `Scientifically proven garden techniques`,
    subtitle: `What research has really shown: mycorrhiza, earthworms, marigolds, biochar, hügelkultur`,
    color: '#3b82f6',
    sourceIds: ['boku', 'fibl', 'heistinger'],
    relatedArticles: ['boden', 'pflanzenschutz', 'mischkultur', 'permakultur', 'garten-hacks'],
    sections: [
      {
        title: `Mycorrhiza: the invisible root network`,
        content: `Mycorrhizal fungi are your plants' most powerful allies, and most gardeners know nothing about them. The fungal threads (hyphae) connect with plant roots and extend their nutrient reach by a factor of 100–1000. In return, the fungus receives sugar from the plant. This symbiosis has existed for 450 million years and affects 80–90% of all land plants.`,
        details: [
          `EFFECT (scientifically proven): phosphorus uptake raised by 200–500% (fungal hyphae reach P sources that roots cannot). Increased tolerance of drought (the fungal network transports water from a larger soil volume). Increased tolerance of pathogens (competitive displacement of pathogenic fungi). Plants CONNECTED via the fungal network: they can exchange warning signals and even nutrients (the "Wood Wide Web").`,
          `VEGETABLES that benefit from mycorrhiza: tomato, bell pepper, carrot, onion, garlic, potato, cucumber, bean, pea, strawberry, asparagus, lettuce, fennel.`,
          `VEGETABLES that form NO mycorrhiza: brassicas (cabbage, kohlrabi, radish, rocket, broccoli), goosefoot family (spinach, chard, beetroot), knotweed family (rhubarb, buckwheat). These families have other strategies for nutrient uptake.`,
          `ENCOURAGE: don't dig (digging tears the mycelial network apart!), mulch (fungi love organic material), crop rotation with mycorrhizal partners, no phosphorus over-feeding (with a surplus of P the plant doesn't need the fungus and ends the symbiosis).`,
          `DESTROY: deep digging, chemical fungicides, high phosphorus feeding, bare soil (without living roots the network dies).`,
          `Buy a mycorrhiza inoculant? Commercially available mycorrhiza products (10–20 EUR) can speed up the start but are NOT necessary if the soil is healthy. In an undug soil with crop rotation the fungi are already present.`,
        ],
        tip: `The simplest way to encourage mycorrhiza: don't dig. That alone protects the existing fungal network. Combined with mulch and crop rotation, a strong mycorrhizal system builds itself up in 2–3 years.`,
        sourceNote: `Free University of Berlin: mycorrhiza research. BioMyc Environment: mycorrhiza in vegetable growing. Kraut&Rüben: beneficial fungi. International literature on AMF (arbuscular mycorrhiza).`,
      },
      {
        title: `Earthworms: the best workers in the garden`,
        content: `A single earthworm produces 3–5 kg of worm casts (worm humus) per year, the most nutrient-rich natural fertiliser in the world. A healthy garden soil is home to 100–400 earthworms per square metre. They aerate the soil with their channels (infiltration +100–400%), break down organic material, and produce clay-humus complexes that store nutrients.`,
        details: [
          `PERFORMANCE (quantified): Lumbricus terrestris (common earthworm) digs channels up to 3 m deep (!). 100–400 worms/m2 in healthy soil. Per worm 3–5 kg of casts/year (the richest substrate in the soil). The soil's infiltration rate +100–400% through worm channels. Per hectare per year: 40–100 tonnes of soil passed through the worm gut.`,
          `ENCOURAGE: mulch is the #1 worm food (straw, leaves, grass clippings). Never dig (it cuts worms up and destroys the channels). Apply compost. No pesticides/herbicides. Keep the soil moist (worms breathe through their skin - dryness = death). Coffee grounds on the beds (worms love it).`,
          `HARM: digging/ploughing (LfL Bavaria: mechanical working leads to sharp population declines). Soil compaction (heavy machinery, treading in the wet). Mineral fertiliser (acidifies the soil). Metaldehyde-based slug pellets (poisonous to worms too - iron(III) phosphate is worm-safe).`,
          `Soil compaction is especially harmful to earthworms: the pressure reduces the pore spaces that earthworms need to move about and make channels.`,
          `WORM COMPOSTING (vermicomposting): Eisenia fetida (composting worms, NOT Lumbricus!) in a box with kitchen scraps. Produces the most concentrated natural fertiliser. NPK 5x higher than normal compost. Ideal for balcony gardeners.`,
        ],
        tip: `Worm test: push a digging fork 30 cm into the soil, turn the clod over, count the worms. Under 5 worms per spade cut = the soil needs more organic material (mulch, compost). Over 10 worms = excellent.`,
        sourceNote: `LfL Bavaria: earthworm populations. Agrarheute: earthworms build humus. University of Hohenheim: earthworm research. Hypersoil: soil formation.`,
      },
      {
        title: `Marigolds against nematodes: proven by the Julius Kühn Institute`,
        content: `The nematode effect of marigolds (Tagetes) is one of the best-documented garden techniques of all. The Julius Kühn Institute (JKI, the German Federal Research Centre for Cultivated Plants) has researched the mechanism in detail and demonstrated a reduction of migratory root nematodes (Pratylenchus spp.) by up to 95%.`,
        details: [
          `MECHANISM (JKI): marigold roots secrete terthiophenes (sulphur-containing compounds) that attract nematodes. The nematodes penetrate the root. The marigold responds with peroxidase production + sulphur compounds from the endodermis → the nematodes are killed INSIDE the root. Brilliant: the plant actively attracts the pest and then kills it.`,
          `EFFECTIVENESS: Tagetes patula (the low French marigold) shows the best effect. Reduction of Pratylenchus nematodes by up to 95% (JKI). 3 months of growing for optimal effect (intensive rooting needed).`,
          `APPLICATION: grow marigolds as a pre- or post-crop on beds that have had nematode problems (weak growth despite good supply, stunted roots). Let them grow for 3 months, then work in. OR: as edge planting between vegetable rows (a continuous effect).`,
          `LIMITATION: works mainly against MIGRATORY root nematodes (Pratylenchus). Against CYST-forming nematodes (Heterodera, Globodera on potatoes) the effect is smaller. Against root-knot nematodes (Meloidogyne) marigold is NOT effective.`,
          `BONUS: marigolds attract hoverflies, ladybirds and other beneficial insects (the flowers). Visually attractive in the vegetable bed.`,
        ],
        tip: `A universal tip: plant Tagetes patula at the edge of every vegetable bed. Costs 2 EUR of seed, reduces nematodes, attracts beneficial insects, and looks good. Win-win-win.`,
        sourceNote: `Julius Kühn Institute (JKI): growing marigolds to control plant-parasitic nematodes. Land&Forst: nematode control with marigolds.`,
      },
      {
        title: `Biochar / Terra Preta: promising but nuanced`,
        content: `Biochar is the attempt to recreate the legendary Terra Preta (black earth) of the Amazon: soils that were enriched over 2000+ years ago by indigenous peoples with charcoal, compost and kitchen scraps and are still extremely fertile today. The research picture is promising but nuanced.`,
        details: [
          `WHAT IT IS: biochar is wood/biomass charred without oxygen at 400–700 °C (pyrolysis). A porous structure (like a sponge), a huge surface area (300–500 m2/g), very stable (persists for centuries in the soil).`,
          `PROVEN BENEFITS (meta-analysis Switzerland, 37 studies): available soil water +28%. Field capacity +20%. Especially effective on sandy, nutrient-poor soils. CO2 storage in the soil (the carbon stays stable for centuries).`,
          `LIMITATIONS: a positive yield effect has so far been shown mainly on nutrient-poor tropical soils. On nutrient-rich European soils (like the chernozem in Burgenland!) the effect is SMALLER or not detectable. The Swiss Federal Office for the Environment (2026): no yield increase yet demonstrated in Swiss agriculture. Long-term effects on soil organisms are unclear.`,
          `IMPORTANT: NEVER work biochar into the soil pure! Uncharged char first WITHDRAWS nutrients from the soil (adsorption). ALWAYS "charge" it first: mix biochar into compost (10% by volume), compost for 4–8 weeks, THEN apply.`,
          `FOR NUTRIENT-RICH SOILS (e.g. northern Burgenland/Lower Austria): the soils in eastern Austria are often already fertile and humus-rich. Biochar brings LESS here than on poor sandy soil. If you want to try it: mix 5–10% biochar into the compost. Don't expect a miracle cure.`,
        ],
        warning: `NEVER scatter biochar pure on beds! Uncharged char first withdraws nutrients from the soil (adsorption). Always let it "charge" in compost for 4–8 weeks first. And: on already good soils (chernozem) the effect is minimal.`,
        sourceNote: `Biochar meta-analysis Switzerland (37 studies): water retention +28%. Naturefund: biochar studies. Swiss BAFU 2026. FiBL inputs list: biochar listed.`,
      },
      {
        title: `Hügelkultur: Sepp Holzer's legacy`,
        content: `Hügelkultur (mound culture) is a technique made known by the Austrian permaculture pioneer Sepp Holzer (Krameterhof, Lungau, 1100–1500 m altitude). The principle: logs and branches are piled up, covered with compost and soil, and planted. The rotting wood stores water (like a sponge), releases warmth and nutrients for years, and increases the growing area.`,
        details: [
          `CONSTRUCTION: dig a trench (30–50 cm). Lay in logs/thick branches. Thinner branches on top. Turves (upside down). Half-finished compost. Mature soil (15–20 cm). The result: a mound 1–1.5 m high. Plant on the sides and top.`,
          `ADVANTAGES: the wood stores water like a sponge (after 1–2 years fully soaked, it releases it slowly). Rotting generates warmth (a microclimate 2–3 °C warmer than the surroundings). Increases the growing area by 30–50% (the mound shape = more surface). 15–20 years of nutrient supply through slow wood decomposition.`,
          `SCIENTIFIC ASSESSMENT: BOKU Vienna visited the Krameterhof in 1995 and confirmed it as a "permaculture model farm". Quantitative yield studies specifically on hügelkultur are, however, rare. The individual mechanisms (water storage in dead wood, warmth release through rotting) are scientifically proven; the combination as "hügelkultur" is more experiential knowledge than laboratory science.`,
          `FOR DRY SITES: in the dry Pannonian climate the water-storage function could be interesting. A mini mound bed (1 x 3 m) as an experiment: a thick branch core, compost on top, pumpkin on top, lettuce on the sides.`,
          `SEPP HOLZER: runs the Krameterhof in the Lungau (Salzburg) at 1100–1500 m altitude. Grows stone fruit, vegetables and cereals at altitudes that really should not allow it. Uses microclimate effects (ponds as heat stores, rock reflectors) to shift the winter-hardiness zone. His books: "Der Agrar-Rebell" (2002), "Sepp Holzers Permakultur" (2004).`,
        ],
        sourceNote: `BOKU Vienna visit to the Krameterhof 1995. Sepp Holzer: Der Agrar-Rebell. Wikipedia: Holzer Permaculture.`,
      },
      {
        title: `Trap cropping: sacrificial plants as pest traps`,
        content: `Trap cropping is a scientifically proven technique: you plant a "sacrificial plant" that is more attractive to the pest than the main crop. The pest concentrates on the trap and leaves the vegetables alone.`,
        details: [
          `NASTURTIUM as an aphid trap: nasturtium is more attractive to aphids than almost any vegetable. Plant at the edge of the vegetable bed → aphids go to the nasturtium instead of the beans/bell peppers. Bonus: the flowers + leaves of nasturtium are edible (peppery like cress).`,
          `MUSTARD/RAPE as a flea-beetle trap: flea beetles prefer mustard to cabbage/radish. A row of mustard at the bed edge → flea beetles concentrate there. Remove the sacrificial plant after 3–4 weeks (along with the flea beetles).`,
          `MARIGOLD as a nematode trap: (see above) actively attracts nematodes and kills them in the root. Up to 95% reduction (JKI).`,
          `POT MARIGOLD (Calendula) as a whitefly trap: whitefly prefers pot marigolds. Bonus: pot marigold flowers are edible and medicinally usable (calendula ointment).`,
          `Studies show: polyculture (many different plants) reduces pest pressure generally by 30–50% compared with monoculture. The reason: pests find their host plant harder in a "jungle" of scents than in a pure row.`,
        ],
        tip: `The simplest way to start: nasturtium + marigold at the edge of every vegetable bed. Both are edible, both actively protect, both attract beneficial insects. Cost: 3 EUR of seed.`,
        sourceNote: `ATTRA (National Center for Appropriate Technology): Companion Planting & Botanical Pesticides. Virginia Tech: Companion Planting in Gardening. Study on marigold volatiles vs. aphids (2005).`,
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BEGINNERS: THE FIRST 12 MONTHS
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'erste-schritte',
    title: `Your first vegetable garden: step by step`,
    subtitle: `From nothing to harvest in 12 months: what you do when, and what you should NOT do`,
    color: '#22c55e',
    sourceIds: ['heistinger', 'kreuter', 'palme'],
    relatedArticles: ['anfaengerfehler', 'selbstversorgung', 'boden'],
    sections: [
      {
        title: `What you need in the FIRST year (and what you don't)`,
        content: `In the first year you need less than you think. No greenhouse, no tractor, no 50 different seeds. You need: a patch of soil (3–10 m²), 5 kinds of seed, compost, water, and patience.`,
        details: [
          `YOU NEED: a spade or digging fork, a watering can (10 L), 5 kinds of seed (radish, cut-and-come-again lettuce, courgette, dwarf bean, herbs), 1 bag of compost (40 L), straw or grass clippings for mulching. Total cost: 30–50 EUR.`,
          `YOU DON'T NEED (in the first year): a greenhouse, a cold frame, fertiliser (except compost), pesticides, 30 different varieties, a raised bed, expensive tools, a soil analysis (unless you suspect contamination).`,
          `AREA: 3–5 m² to start. That sounds small, but is enough for: 1 row of radishes, 1 row of lettuce, 2 courgette plants, 1 row of dwarf beans, 1 corner of herbs. Expand in the second year.`,
          `LOCATION: the sunniest spot you have (at least 6 hrs of direct sun). Close to the house (you go there more often if it isn't far). A water supply nearby.`,
          `PREPARING THE BED: (1) remove the lawn or lay cardboard over it, (2) loosen the soil to 20 cm depth (digging fork, NOT digging over), (3) scatter 3–5 cm of compost and rake it in lightly. Done.`,
        ],
        tip: `The 5 most beginner-friendly crops (in this order): (1) radish (4 weeks, indestructible), (2) cut-and-come-again lettuce (6 weeks, cut-and-come-again), (3) courgette (1 plant = 20+ fruit), (4) dwarf beans (direct sowing, no support), (5) chives (plant and forget). With those you have fresh vegetables from June to October.`,
      },
      {
        title: `Monthly plan for beginners (Austria, zone 7)`,
        content: `A concrete plan for your first gardening year. Only the simplest crops, only the most important tasks.`,
        details: [
          `MARCH: prepare the bed (loosen, compost). Direct-sow radish + lettuce. Sow peas (optional).`,
          `APRIL: 2nd batch of radish + lettuce. Plant herbs (chives, parsley). Prepare the bed for May.`,
          `MAY (FROM THE 16th!): set out courgette young plants (2 are enough!). Direct-sow dwarf beans. Tomato (buy a young plant if not sown indoors).`,
          `JUNE: the first harvest! Radish, lettuce, herbs. Water + apply mulch. Succession sowing: new lettuce.`,
          `JULY: harvest courgette DAILY (15–20 cm!). Harvest beans. Pinch out tomatoes. Water, water, water.`,
          `AUGUST: harvest tomatoes! Harvest courgette. Harvest beans. Sow lamb's lettuce (for autumn). Bottle tomato sugo.`,
          `SEPTEMBER: the last tomatoes, beans, courgettes. Lamb's lettuce grows. Clear the bed, set up compost.`,
          `OCTOBER: harvest lamb's lettuce (into the winter!). Cover the bed with mulch/green manure. Plant garlic.`,
          `NOVEMBER–FEBRUARY: harvest lamb's lettuce if present. Study seed catalogues. Plan for next year.`,
          `Average workload: 2–3 hours per week in summer, 30 min in winter. That is doable alongside a full-time job.`,
        ],
        sourceNote: `Based on Heistinger: Handbuch Bio-Gemüse and Kreuter: Der Biogarten, simplified for beginners.`,
      },
      {
        title: `Yield planning: how much do you harvest per m2?`,
        content: `So you can plan realistically, here are the average yields per square metre for the most important crops (home-garden level, not professional growing):`,
        details: [
          `POTATO: 3–5 kg/m2 (early potatoes less, storage potatoes more). 10 m2 = 30–50 kg = 3–4 months of potato supply for 2 people.`,
          `TOMATO: 5–10 kg/m2 (at 3–4 plants/m2 in the greenhouse up to 15 kg/m2). 5 plants = 25–50 kg of tomatoes = 20+ L of sugo.`,
          `COURGETTE: 5–10 kg/plant (!). 2 plants on 2 m2 = 10–20 kg. More than a family can eat.`,
          `PUMPKIN: 5–15 kg/plant. 2 plants on 4 m2 = 10–30 kg. Hokkaido keeps 3–6 months.`,
          `LETTUCE: 3–5 kg/m2 (succession sowing: 4 batches per season). 3 m2 = 10–15 kg = fresh lettuce March–November.`,
          `CARROT: 3–5 kg/m2. 5 m2 = 15–25 kg. Stored in sand until March.`,
          `ONION: 2–4 kg/m2. 5 m2 = 10–20 kg. Stored airy until February.`,
          `BEAN (dried): 200–400 g/m2 dry weight. 10 m2 = 2–4 kg of dried beans = protein for months.`,
          `CABBAGE: 5–8 kg/plant. 5 plants on 5 m2 = 25–40 kg = 10+ L of sauerkraut.`,
          `BEETROOT: 2–3 kg/m2. 3 m2 = 6–9 kg. Stored in sand until February.`,
          `GARLIC: 0.5–1 kg/m2. 5 m2 = 2.5–5 kg. Plaited, it keeps until spring.`,
          `STRAWBERRY: 0.3–0.5 kg/plant. 20 plants on 4 m2 = 6–10 kg.`,
          `YIELD RULE: 2–3 kg of vegetables per m2 per year is a good home-garden average. With intensive growing (succession sowing, greenhouse, good soil) 4–6 kg/m2 is possible.`,
        ],
        tip: `Planning for 2 people (self-sufficiency May–October + storing for winter): 20 m2 potatoes + 10 m2 heavy feeders (tomato, courgette, pumpkin) + 10 m2 root vegetables (carrots, beetroot, onions) + 5 m2 lettuce/leafy greens + 5 m2 beans/peas + 5 m2 herbs = 55 m2 total area.`,
        sourceNote: `Yield calculator fryd.app. Heistinger: Handbuch Bio-Gemüse. DGE calorie needs.`,
      },
      {
        title: `The 5 best crops for ABSOLUTE beginners`,
        content: `These 5 plants are almost indestructible, productive and show quick results. Start with them and expand in the second year.`,
        details: [
          `NO. 1: RADISH. Direct sowing, 4 weeks to harvest. No starting indoors, no transplanting. Just seeds into the soil, keep moist, harvest. Perfect for children and anyone who wants quick results. Risk: virtually zero. The only mistake: harvesting too late (then woody).`,
          `NO. 2: CUT-AND-COME-AGAIN LETTUCE / BABY LEAF MIX. Direct sowing or young plants. 6 weeks to first harvest. Cut-and-come-again: harvest the outer leaves, the heart keeps growing. Weeks of harvest from one sowing. Risk: slugs (slug barrier) and heat (bolts above 25 C - grow in the shade or in spring/autumn).`,
          `NO. 3: COURGETTE. Set out 1–2 young plants from mid-May. One plant provides 15–25 fruit over 3 months. Extremely productive. Needs space (1 m²) and water. Risk: mildew in August (normal, the plant crops anyway). Harvest DAILY at 15–20 cm!`,
          `NO. 4: DWARF BEANS. Direct sowing from mid-May (frost = death, so wait for the Ice Saints). No support needed (unlike climbing beans). Harvest every 2–3 days. Improves the soil (a nitrogen fixer). Risk: sowing too early (frost), harvesting too late (tough pods).`,
          `NO. 5: CHIVES + BASIL. Chives: plant once, harvest for years. Zero care. Basil: next to tomatoes, harvest the shoot tips. The herb duo for every beginner. Risk: basil dies below 10 C, chives are indestructible.`,
        ],
        tip: `If even these 5 are too much for you: start with just radish and chives. Radish gives you the quick success (4 weeks!), chives the long-term one (years). Next year you expand with lettuce and courgette.`,
      },
    ],
  },
];

export const WIKI_ARTICLE_MAP_EN = Object.fromEntries(WIKI_ARTICLES_EN.map(a => [a.id, a]));
