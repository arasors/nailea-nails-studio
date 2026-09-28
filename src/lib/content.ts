export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  number: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  detail: string;
  finish: string;
  highlights: { title: string; text: string }[];
  idealFor: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "home-service-nails-bali",
    name: "Home Service Nails in Bali",
    shortName: "Home service",
    number: "01",
    eyebrow: "The Nailea signature",
    seoTitle: "Home Service Nails Bali | Nailea Nails Art Studio",
    seoDescription:
      "Book premium manicure, pedicure and nail art at your Bali villa, hotel or home. Address-based availability is confirmed before every Nailea visit.",
    headline: "A private nail appointment, without leaving your place.",
    intro:
      "Nailea brings a considered nail setup to selected homes, villas and hotels in Bali. You choose the mood and share your location; we confirm travel availability, prepare the right kit and create the look in your own space.",
    detail:
      "The service is designed for privacy and ease, but never at the expense of finish. Appointment timing includes setup, careful prep and a clean pack-down, so the experience feels calm from the first message to the final top coat.",
    finish:
      "Ideal for travellers, residents, small groups and anyone who would rather turn an hour at home into a polished ritual.",
    highlights: [
      { title: "We travel to you", text: "Selected Bali addresses are served by appointment, subject to route and schedule confirmation." },
      { title: "Prepared for your look", text: "Send references in advance so we can bring suitable colours, finishes and tools." },
      { title: "A calmer pace", text: "Enjoy professional nail care in the privacy of your villa, hotel or home." },
    ],
    idealFor: ["Villa and hotel appointments", "Residents with busy schedules", "Holiday prep and small groups"],
    faqs: [
      { question: "Can Nailea visit my villa or hotel?", answer: "Usually, yes, where property access is permitted. Send your full location and preferred time on WhatsApp so we can confirm the route before you book." },
      { question: "Which Bali areas do you cover?", answer: "Nailea travels to selected areas in Bali. Coverage varies with the day, travel time and appointment size, so your address is always confirmed individually." },
      { question: "What should I prepare at home?", answer: "A comfortable seat, a stable table and good light are helpful. We will let you know in advance if your chosen service needs anything else." },
    ],
  },
  {
    slug: "nail-art-bali",
    name: "Nail Art in Bali",
    shortName: "Nail art",
    number: "02",
    eyebrow: "Designed around you",
    seoTitle: "Nail Art Bali | Custom Nail Designs by Nailea",
    seoDescription:
      "Discover custom nail art in Bali, from minimal lines and floral details to expressive layered designs, available through Nailea's mobile service.",
    headline: "Tiny canvases. A look that feels entirely yours.",
    intro:
      "Our nail art starts with a conversation rather than a fixed menu. A saved reference, a fabric colour, your jewellery or the atmosphere of an upcoming event can become the starting point for a balanced set.",
    detail:
      "We edit ideas to suit your nail length, preferred shape and everyday routine. The result might be one precise accent, a soft tonal composition or a more detailed set—with every element chosen to belong together.",
    finish:
      "Share inspiration before the appointment so we can assess complexity, reserve enough time and prepare the closest palette.",
    highlights: [
      { title: "Minimal detail", text: "Fine lines, dots, negative space and restrained accents with room to breathe." },
      { title: "Bespoke composition", text: "A coordinated set shaped around your references rather than copied nail for nail." },
      { title: "Statement finishes", text: "Chrome, cat-eye, dimensional details and layered effects where suitable." },
    ],
    idealFor: ["Personalised holiday nails", "Events, shoots and celebrations", "Clients who save their own references"],
    faqs: [
      { question: "Can you recreate a reference photo?", answer: "A reference helps us understand the direction. We adapt it to your nail shape, available materials and the appointment time, rather than promising an exact copy." },
      { question: "Does detailed nail art take longer?", answer: "Yes. Complexity and the number of decorated nails affect timing, so please share your idea when requesting the appointment." },
      { question: "Can I mix several designs in one set?", answer: "Absolutely. We can build a cohesive mix-and-match set by repeating colours, finishes or small motifs across the hands." },
    ],
  },
  {
    slug: "gel-nails-bali",
    name: "Gel Nails in Bali",
    shortName: "Gel nails",
    number: "03",
    eyebrow: "Gloss with staying power",
    seoTitle: "Gel Nails Bali | Mobile Gel Manicure by Nailea",
    seoDescription:
      "Book glossy gel nails in Bali with careful preparation, refined colour and a mobile appointment at your villa, hotel or home.",
    headline: "Clean colour that keeps pace with Bali days.",
    intro:
      "A gel manicure is for clients who want immediate dry time and a high-shine finish that fits an active schedule. We focus on neat preparation, controlled layers and a shape that complements your hands.",
    detail:
      "Bali's sun, pools and daily activity can be demanding on any manicure. Thoughtful application and sensible aftercare help the finish last well, while correct removal protects the natural nail beneath it.",
    finish:
      "Choose a sheer neutral, saturated colour or a gel base for custom art. We will help narrow the option once we understand your plans and preferred maintenance.",
    highlights: [
      { title: "Refined preparation", text: "Careful cuticle work and shaping establish the clean outline of the manicure." },
      { title: "Curated colour", text: "From translucent pinks to deep tones, colour is selected for the effect you want." },
      { title: "Responsible removal", text: "Avoid peeling product at home; book or request guidance for proper removal." },
    ],
    idealFor: ["Travel and busy itineraries", "Glossy one-colour manicures", "A durable base for nail art"],
    faqs: [
      { question: "How long do gel nails last?", answer: "Wear varies with nail condition, daily activity and aftercare. We can recommend the most suitable approach, but no manicure is immune to impact or prolonged water exposure." },
      { question: "Can I swim after a gel manicure?", answer: "Gel is cured during the appointment, but caring for the surrounding skin and avoiding harsh impact still helps the manicure look its best." },
      { question: "Do you remove existing gel?", answer: "Mention existing product when booking. Removal adds time and may depend on the product currently on your nails." },
    ],
  },
  {
    slug: "manicure-bali",
    name: "Manicure in Bali",
    shortName: "Manicure",
    number: "04",
    eyebrow: "Care in the details",
    seoTitle: "Manicure Bali | Private Home Manicure by Nailea",
    seoDescription:
      "A polished manicure in Bali with shaping, cuticle care and your chosen finish, delivered through Nailea's private mobile nail service.",
    headline: "The quiet luxury of beautifully cared-for hands.",
    intro:
      "A good manicure is visible in the details: an intentional shape, tidy cuticle line and finish that suits the person wearing it. Nailea's approach is unhurried, precise and easy to enjoy at home.",
    detail:
      "You can keep the result natural, add a soft classic colour or use the manicure as a foundation for gel and art. We tailor the appointment to your current nail condition rather than forcing every client through the same routine.",
    finish:
      "Regular care helps hands look polished between events and makes future colour services feel cleaner from the start.",
    highlights: [
      { title: "Shape consultation", text: "We refine length and silhouette in a way that works with your natural nail." },
      { title: "Neat cuticle care", text: "Preparation is adapted to the condition of your hands and the finish selected." },
      { title: "Your level of polish", text: "Choose a natural clean-up, classic colour, gel or a design add-on." },
    ],
    idealFor: ["Natural nail maintenance", "A neat, understated finish", "Preparation before colour or art"],
    faqs: [
      { question: "Can I book a manicure without colour?", answer: "Yes. A clean, natural manicure can focus on shape, cuticle care and a groomed finish without polish." },
      { question: "Should I trim my nails beforehand?", answer: "There is no need. Leave the length in place so we can discuss the best shape at the appointment." },
      { question: "Can nail art be added to a manicure?", answer: "Yes, depending on the base product and design. Share the art direction while booking so enough time can be reserved." },
    ],
  },
  {
    slug: "pedicure-bali",
    name: "Pedicure in Bali",
    shortName: "Pedicure",
    number: "05",
    eyebrow: "Bali-ready feet",
    seoTitle: "Pedicure Bali | At-Home Pedicure by Nailea",
    seoDescription:
      "Refresh and polish your feet with a private pedicure in Bali, available at selected villas, hotels and homes by appointment.",
    headline: "A fresh pedicure for sandals, beaches and slow mornings.",
    intro:
      "Open shoes and tropical days put feet on display. Our pedicure brings nail shaping, considered care and an even finish into a private appointment that fits around your Bali plans.",
    detail:
      "The focus is a clean, polished result rather than a rushed colour change. Tell us about existing product and the finish you want when booking, especially if removal or matching hands and feet is part of the plan.",
    finish:
      "For events and travel days, book with enough time to relax afterwards. Gel can be useful for immediate dry time; classic polish may need a gentler schedule.",
    highlights: [
      { title: "Neat shaping", text: "Toenails are refined for a balanced, comfortable appearance." },
      { title: "Polished finish", text: "Choose a clean natural look, classic polish or gel subject to the requested service." },
      { title: "Private convenience", text: "Enjoy the appointment where you are staying, after address confirmation." },
    ],
    idealFor: ["Holiday and sandal season", "Matching manicure and pedicure", "Pre-event preparation"],
    faqs: [
      { question: "Can I book a manicure and pedicure together?", answer: "Yes. Combining services can make planning easier; share both requests so we can confirm the correct appointment length." },
      { question: "Is gel available for pedicures?", answer: "Gel may be available depending on the booking. Include your preferred finish and any existing product in your WhatsApp message." },
      { question: "Do you provide medical foot care?", answer: "No. Nailea provides cosmetic nail services and cannot diagnose or treat medical conditions. Please consult a qualified health professional where appropriate." },
    ],
  },
  {
    slug: "nail-extensions-bali",
    name: "Nail Extensions in Bali",
    shortName: "Extensions",
    number: "06",
    eyebrow: "Length, shaped with intention",
    seoTitle: "Nail Extensions Bali | Sculpted Sets by Nailea",
    seoDescription:
      "Explore elegant nail extensions in Bali with a shape, length and finish designed around your hands and lifestyle.",
    headline: "A new silhouette, built to feel considered—not excessive.",
    intro:
      "Extensions can add length, correct visual balance or provide a stronger canvas for a special design. We begin with proportion: the shape of your hands, the look you want and how you use them every day.",
    detail:
      "Short almond, soft square and more expressive lengths each create a different mood. Product choice and availability are confirmed during booking, particularly for removals, infills or work over a set created elsewhere.",
    finish:
      "The most elegant extension is the one you can wear confidently. We would rather refine the right length than build a dramatic set that does not fit your routine.",
    highlights: [
      { title: "Proportion first", text: "Shape and length are discussed in relation to your hands and daily comfort." },
      { title: "A canvas for detail", text: "Extensions create room for French lines, chrome and custom art." },
      { title: "Plan maintenance", text: "Growth and wear require timely care; we explain the next step for your chosen set." },
    ],
    idealFor: ["Added length and refined shape", "Occasions and editorial looks", "Detailed designs needing more space"],
    faqs: [
      { question: "Which extension method do you use?", answer: "Available systems may vary. Send a photo of your current nails and desired result so we can confirm the suitable option before booking." },
      { question: "Can you infill another artist's work?", answer: "It depends on the product, condition and structure of the existing set. A clear photo is needed; removal and a fresh set may be recommended." },
      { question: "How long will the appointment take?", answer: "Timing depends on length, removal and design complexity. Extension appointments are generally longer than a simple manicure." },
    ],
  },
  {
    slug: "french-nails-bali",
    name: "French Nails in Bali",
    shortName: "French nails",
    number: "07",
    eyebrow: "A classic, redrawn",
    seoTitle: "French Nails Bali | Modern French Manicure by Nailea",
    seoDescription:
      "Book French nails in Bali, from fine classic white tips to tonal, coloured and modern variations created by Nailea.",
    headline: "The French manicure, sharpened for now.",
    intro:
      "French nails can read clean, playful or quietly graphic depending on the line. We adjust tip width, base opacity and colour contrast so the design feels balanced on your natural length or extensions.",
    detail:
      "A micro French keeps the effect subtle; a curved deep tip adds drama; tonal pinks or unexpected colour make it more personal. Careful symmetry matters, which is why reference images and enough appointment time are useful.",
    finish:
      "The result is familiar without feeling generic—a versatile choice for weddings, work, holidays and everything between them.",
    highlights: [
      { title: "Micro French", text: "An ultra-fine tip for short nails and an understated finish." },
      { title: "Soft classic", text: "A balanced white line paired with a sheer nude or pink base." },
      { title: "Modern colour", text: "Tonal, bright, chrome or mixed tips for a less traditional set." },
    ],
    idealFor: ["Bridal and event nails", "Minimal but detailed sets", "A modern update to a classic"],
    faqs: [
      { question: "Can French tips work on short nails?", answer: "Yes. A fine micro tip can visually define short nails without taking over the available space." },
      { question: "Can I choose a non-white tip?", answer: "Of course. Coloured, tonal and metallic variations can keep the structure of a French manicure while changing its mood." },
      { question: "Is a sheer pink base included?", answer: "Base colour depends on your chosen service and natural nail tone. We will discuss the most flattering level of coverage." },
    ],
  },
  {
    slug: "chrome-nails-bali",
    name: "Chrome Nails in Bali",
    shortName: "Chrome nails",
    number: "08",
    eyebrow: "Light-catching finish",
    seoTitle: "Chrome Nails Bali | Glazed & Metallic Nail Art by Nailea",
    seoDescription:
      "Choose glazed, pearlescent or metallic chrome nails in Bali with a base colour and intensity tailored by Nailea.",
    headline: "A finish that changes every time the light moves.",
    intro:
      "Chrome is less a single colour than a layer of light. Over sheer pink it can feel glazed and delicate; over deeper tones it becomes reflective, dimensional and unmistakably bold.",
    detail:
      "The final effect depends on the base, powder and top layer. We help select a combination that suits your skin tone and intended mood, then keep the surrounding design restrained or add detail where it earns its place.",
    finish:
      "Chrome works across short natural nails, French tips and extensions, making it one of the easiest ways to shift a familiar shape into something special.",
    highlights: [
      { title: "Glazed pearl", text: "A soft, luminous veil over nude, pink or milky tones." },
      { title: "Metallic mirror", text: "Higher-impact reflection over a carefully selected base shade." },
      { title: "Chrome accents", text: "Use the finish on tips, lines or selected nails for a lighter statement." },
    ],
    idealFor: ["Glazed neutral manicures", "Night-out and event sets", "A dimensional French variation"],
    faqs: [
      { question: "Will chrome look the same on every base colour?", answer: "No. The base strongly influences the final tone, which is part of what makes chrome versatile." },
      { question: "Can chrome be subtle?", answer: "Yes. A pearlescent powder over a sheer base creates a softer glazed effect than a full metallic finish." },
      { question: "Can I add chrome to French tips?", answer: "Yes. Chrome tips or a fine chrome line can modernise a French manicure without covering the whole nail." },
    ],
  },
];

export type LocationPage = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  localNote: string;
  planning: string;
  moments: { title: string; text: string }[];
  suggestedServices: string[];
  faqs: Faq[];
};

export const locations: LocationPage[] = [
  {
    slug: "canggu",
    name: "Canggu",
    seoTitle: "Home Nail Service Canggu | Nailea Nails Bali",
    seoDescription: "Request a private manicure, pedicure or nail art appointment at selected Canggu villas and homes, subject to route confirmation.",
    headline: "Nails that arrive at your Canggu address.",
    intro: "Canggu days rarely follow a salon timetable. Nailea's mobile format lets you request a nail appointment around villa check-ins, work calls, surf mornings and dinner plans—without adding another trip through traffic.",
    localNote: "From Berawa to Batu Bolong and Pererenan, routes can change quickly with traffic and the day's schedule. Share a precise pin rather than only the neighbourhood name; we confirm availability before the appointment is accepted.",
    planning: "For a group booking or detailed art, send inspiration and guest count early. That gives us space to plan products, timing and access to your property.",
    moments: [
      { title: "Villa reset", text: "A manicure or pedicure during a quiet afternoon at your stay." },
      { title: "Dinner-ready", text: "Glossy gel or a refined French set planned before an evening out." },
      { title: "Creative detail", text: "Custom art inspired by a look, event or Bali palette." },
    ],
    suggestedServices: ["home-service-nails-bali", "gel-nails-bali", "nail-art-bali"],
    faqs: [
      { question: "Do you cover every part of Canggu?", answer: "Coverage depends on the exact address, traffic, schedule and requested service. Send your location pin for confirmation." },
      { question: "Can you visit a Canggu villa?", answer: "Yes, where the property permits outside service providers and the route is available. Please check access rules with your host." },
    ],
  },
  {
    slug: "seminyak",
    name: "Seminyak",
    seoTitle: "Nail Service Seminyak | Villa & Hotel Nails by Nailea",
    seoDescription: "Plan a mobile nail appointment in Seminyak for your villa or hotel, with manicure, pedicure, gel and nail art by request.",
    headline: "A polished appointment before Seminyak plans begin.",
    intro: "A private nail service works naturally with a Seminyak stay: get ready at your villa, finish a pedicure before sandals go on, or coordinate a small pre-event booking without moving the whole group.",
    localNote: "Hotels and managed villas can have their own visitor policies. Confirm that an outside beauty provider may enter, then send the property name, location pin and room or villa access details privately through WhatsApp.",
    planning: "Evening and event appointments benefit from early booking. Detailed designs, removals and combined hand-and-foot services need more time than a straightforward colour refresh.",
    moments: [
      { title: "Event edit", text: "French, chrome or custom details coordinated with the outfit rather than competing with it." },
      { title: "Holiday polish", text: "Clean gel colour that moves easily from poolside to dinner." },
      { title: "Friends together", text: "A compact group request planned with guest count and services in advance." },
    ],
    suggestedServices: ["manicure-bali", "pedicure-bali", "french-nails-bali"],
    faqs: [
      { question: "Can Nailea come to my Seminyak hotel?", answer: "Potentially, if the hotel allows an external provider. Ask reception first and send us the access details with your request." },
      { question: "Can I book before a wedding or dinner?", answer: "Yes. Leave a comfortable buffer after the appointment and request early so the necessary time can be reserved." },
    ],
  },
  {
    slug: "kerobokan",
    name: "Kerobokan",
    seoTitle: "Home Manicure Kerobokan | Nailea Mobile Nail Service",
    seoDescription: "Book a considered mobile manicure, pedicure or gel nail appointment at selected Kerobokan homes and villas.",
    headline: "Private nail care for unhurried Kerobokan days.",
    intro: "Kerobokan's residential streets and tucked-away villas suit an appointment that comes to you. Nailea creates a calm temporary setup for nail care, then leaves the space as considered as the manicure itself.",
    localNote: "Addresses around Kerobokan can look close on a map while requiring very different routes. A current map pin and a short access note help us give you an accurate availability answer.",
    planning: "Home appointments work best with a stable table, comfortable seating and clear light. If your space is outdoors, choose a sheltered area where dust and wind will not interfere with the finish.",
    moments: [
      { title: "Routine care", text: "Natural nail maintenance without reorganising the rest of your day." },
      { title: "Fresh gel", text: "A clean colour update for travel, work or the weeks ahead." },
      { title: "Hands and feet", text: "A coordinated booking planned as one private appointment." },
    ],
    suggestedServices: ["manicure-bali", "gel-nails-bali", "pedicure-bali"],
    faqs: [
      { question: "What address information do you need?", answer: "Please send a map pin, neighbourhood, useful landmark and any gate or parking note. We only use it to plan and confirm the visit." },
      { question: "Is there a travel fee?", answer: "Any route-related charge should be confirmed during booking, once the address and service are known." },
    ],
  },
  {
    slug: "ubud",
    name: "Ubud",
    seoTitle: "Nail Service Ubud | Mobile Manicure by Nailea Bali",
    seoDescription: "Request a relaxing private nail appointment at selected Ubud stays, with availability confirmed for your exact address.",
    headline: "A quieter nail ritual for your time in Ubud.",
    intro: "In Ubud, the best appointments can feel like part of the pause rather than another errand. A soft natural manicure, tonal gel or delicate art fits easily into an afternoon at your accommodation.",
    localNote: "Ubud covers a wide area and travel times vary significantly beyond the centre. Service is not guaranteed by neighbourhood name alone; we confirm the exact property and route before arranging the visit.",
    planning: "Natural light is beautiful but open-air rooms can bring humidity, insects and dust. A bright indoor or well-screened space gives the product a cleaner working environment.",
    moments: [
      { title: "Natural finish", text: "Groomed nails, sheer colour and a restrained shape." },
      { title: "Botanical detail", text: "Fine floral or organic motifs interpreted with a light hand." },
      { title: "Long-stay upkeep", text: "A maintenance appointment arranged without a trip into town." },
    ],
    suggestedServices: ["home-service-nails-bali", "manicure-bali", "nail-art-bali"],
    faqs: [
      { question: "How far around Ubud do you travel?", answer: "It depends on the day's route. Send the exact accommodation pin and we will confirm whether the visit is practical." },
      { question: "Can I request a very natural look?", answer: "Yes. Sheer shades, clean shaping and subtle art are all part of the design conversation." },
    ],
  },
  {
    slug: "sanur",
    name: "Sanur",
    seoTitle: "Nail Service Sanur | At-Home Manicure & Pedicure",
    seoDescription: "Enjoy manicure, pedicure and gel nail care at selected Sanur homes, villas and hotels with Nailea's mobile service.",
    headline: "Hands and feet ready for easy Sanur days.",
    intro: "Sanur's walkable coast and relaxed pace make a neat manicure-pedicure pairing especially useful. Book at your accommodation, then step into sandals or your next plan without building a salon trip into the day.",
    localNote: "For hotel visits, ask whether external beauty services are permitted and how the provider should enter. For private homes, a precise pin and parking note help keep timing smooth.",
    planning: "If you are travelling onward by boat or flight, avoid placing the appointment too close to departure. A little buffer protects the calm of the service and any classic-polish drying time.",
    moments: [
      { title: "Sandal polish", text: "A tidy pedicure with a colour chosen for your holiday wardrobe." },
      { title: "Matched set", text: "Hands and feet linked through colour, without needing to be identical." },
      { title: "Low-maintenance gel", text: "A glossy finish suited to long-stay routines and travel plans." },
    ],
    suggestedServices: ["pedicure-bali", "manicure-bali", "gel-nails-bali"],
    faqs: [
      { question: "Can I combine manicure and pedicure in Sanur?", answer: "Yes. Mention both services, existing product and your preferred finish so the full appointment time can be planned." },
      { question: "Do you visit beachfront hotels?", answer: "Where the property allows external providers and the route is available. Hotel approval should be checked before the booking is confirmed." },
    ],
  },
  {
    slug: "uluwatu",
    name: "Uluwatu",
    seoTitle: "Nail Service Uluwatu | Villa, Event & Bridal Nails",
    seoDescription: "Request mobile nails in Uluwatu for villas, wedding preparation and private stays, with exact address availability confirmed in advance.",
    headline: "Considered nails for Uluwatu stays and celebrations.",
    intro: "Clifftop plans often come with long drives, villa schedules and events worth dressing for. A mobile nail booking keeps preparation in one place, whether you need a quiet manicure or a coordinated set before a celebration.",
    localNote: "Uluwatu, Bingin, Pecatu and nearby areas involve distinct routes and access conditions. Send the exact villa or hotel pin early; distance, traffic and event timing all affect availability.",
    planning: "Bridal or group requests need a clear service list, inspiration and ready-by time. Nailea can then confirm whether the request fits the team, route and preparation required—without overpromising on the day.",
    moments: [
      { title: "Bridal restraint", text: "Milky tones, modern French lines or delicate art that photographs beautifully." },
      { title: "Golden-hour chrome", text: "A light-catching finish for dinners, parties and destination events." },
      { title: "Villa preparation", text: "A private booking that keeps the group at the property." },
    ],
    suggestedServices: ["french-nails-bali", "chrome-nails-bali", "nail-extensions-bali"],
    faqs: [
      { question: "Do you take bridal bookings in Uluwatu?", answer: "Requests are welcome. Send the date, exact venue, number of people, services and ready-by time as early as possible for a realistic availability check." },
      { question: "Can several guests book together?", answer: "Potentially. Group size and chosen services determine timing, so each guest's request should be outlined before confirmation." },
    ],
  },
];

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  takeaway: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nail-styles-for-a-bali-holiday",
    title: "Nail styles that make sense for a Bali holiday",
    seoTitle: "Best Nail Styles for a Bali Holiday | Nailea Guide",
    description: "A practical guide to choosing Bali holiday nails for beach days, dinners, tropical colour and the amount of maintenance you actually want.",
    category: "Style notes",
    published: "2026-09-18",
    readTime: "5 min read",
    intro: "The best holiday manicure is not simply the brightest set in your saved folder. It needs to work with your itinerary, wardrobe and willingness to maintain it while you are away.",
    sections: [
      { heading: "Start with the rhythm of the trip", paragraphs: ["A week split between pools, beaches and scooter rides asks something different from a destination wedding or a month working from Bali. Consider how much your hands will be in water, whether you need a camera-ready event look and how easily you can schedule care."], points: ["Short gel nails for active itineraries", "Modern French for mixed day-to-night plans", "Extensions or detailed art when the design is part of the occasion"] },
      { heading: "Choose a palette with range", paragraphs: ["Milky pink, warm nude and a fine French tip move easily through a suitcase of outfits. Tropical colour can work just as well when it repeats one tone from your swimwear or accessories instead of trying to match everything."], points: ["Glazed neutrals catch Bali light without dominating", "Coral, hibiscus pink and deep red make confident single-colour choices", "Chrome accents add movement with less visual weight than a full metallic set"] },
      { heading: "Let the nail length be honest", paragraphs: ["A dramatic length can be beautiful, but it should suit your actual plans. If you are surfing, training or travelling with luggage, a shorter almond or soft square shape may stay elegant for longer because it asks less of you."] },
    ],
    takeaway: "Bring references, but also bring your itinerary. A thoughtful nail artist can edit both into a set that still feels good on the final day of the trip.",
  },
  {
    slug: "gel-vs-regular-polish-bali",
    title: "Gel or regular polish in Bali's tropical climate?",
    seoTitle: "Gel vs Regular Nail Polish in Bali | Nailea Guide",
    description: "Compare gel and classic nail polish for Bali weather, swimming, travel schedules, removal and the finish you prefer.",
    category: "Nail care",
    published: "2026-09-10",
    readTime: "6 min read",
    intro: "Heat and humidity do not automatically decide your manicure. The better choice depends on immediate dry time, planned wear, removal and how you treat your hands during the trip.",
    sections: [
      { heading: "Why clients choose gel", paragraphs: ["Gel is cured during the appointment, so you leave without a long drying window. Its glossy surface and wear make it useful for busy holidays, events and clients who do not want to think about small smudges immediately afterwards."], points: ["Immediate cured finish", "Useful for detailed art and chrome", "Requires responsible removal rather than peeling"] },
      { heading: "Why classic polish still has a place", paragraphs: ["Regular polish can be a good fit for a shorter commitment, clients who like changing colour often or anyone who prefers removal at home. The trade-off is a longer drying period and generally less resistance to impact."], points: ["Easy colour changes", "No lamp curing", "Needs time and care before shoes, bags or bed"] },
      { heading: "What Bali changes—and what it does not", paragraphs: ["Pool chemicals, salt water, sunscreen, repeated soaking and physical impact can affect any manicure. A quality application matters, but aftercare and nail condition still shape the outcome. No product makes nails indestructible."] },
    ],
    takeaway: "Choose gel when dry time and longer wear matter most; choose classic polish when flexibility and simple removal matter more. Tell your nail artist how the next week actually looks.",
  },
  {
    slug: "nail-care-in-bali-climate",
    title: "How to care for your nails in Bali's climate",
    seoTitle: "Nail Care Tips for Bali Weather | Nailea Nails",
    description: "Simple nail and cuticle care for Bali's sun, swimming, air conditioning and travel routines—without an overcomplicated kit.",
    category: "Nail care",
    published: "2026-08-28",
    readTime: "5 min read",
    intro: "Bali can mean more water, more sun and more time in air-conditioned rooms than your hands are used to. The answer is not a complicated routine; it is a few consistent habits.",
    sections: [
      { heading: "Oil the skin around the nail", paragraphs: ["A small amount of cuticle oil used regularly helps the surrounding skin feel more comfortable and look cared for. Massage it in at night or after hand washing when you remember."], points: ["Keep a pen-style oil in your bag", "Apply around—not under lifting product", "Pair with hand cream after washing"] },
      { heading: "Treat water exposure as wear", paragraphs: ["Swimming is part of Bali, and your manicure should not stop you enjoying it. Just recognise that long, repeated soaking can contribute to wear. Rinse after pool or sea water, dry well and avoid using softened nails as tools."], points: ["Wear gloves for cleaning products", "Do not pick at a lifted edge", "Book proper removal when the set is ready to come off"] },
      { heading: "Protect the natural nail between sets", paragraphs: ["Damage often happens during impatient removal, not during normal wear. Peeling gel or extensions can take surface layers with it. If you cannot return to the same artist, ask for removal guidance or find a trained professional."] },
    ],
    takeaway: "Oil, moisturise, avoid picking and use your nails gently. Consistency will do more than a shelf full of products used once.",
  },
  {
    slug: "home-nail-service-bali-guide",
    title: "What to expect from a home nail service in Bali",
    seoTitle: "Home Nail Service Bali: What to Expect | Nailea",
    description: "How a mobile nail appointment works in a Bali villa, hotel or home, from location confirmation to space setup and design references.",
    category: "Booking guide",
    published: "2026-08-16",
    readTime: "6 min read",
    intro: "A mobile appointment removes the salon journey, but a little planning helps it feel effortless. The most useful information is your exact location, current nails and desired result.",
    sections: [
      { heading: "Before the booking is confirmed", paragraphs: ["Send the map pin, preferred date and time, requested service and a clear photo if product is already on your nails. For art, add one or two references. This lets the artist assess travel, appointment length and the kit required."], points: ["Ask the villa or hotel about external-provider access", "Mention removal, extensions or damaged product", "List every guest and service for a group request"] },
      { heading: "Creating a good working space", paragraphs: ["A stable table, two comfortable seats and bright light make a real difference. An indoor or screened setting is usually better than an exposed terrace, where wind, dust and humidity can interfere with precision."], points: ["Choose a surface that can be protected", "Keep pets and food away from the station", "Allow access a few minutes before the appointment"] },
      { heading: "After the last top coat", paragraphs: ["The working area is packed down, and you should receive relevant care guidance. If the service uses classic polish, protect drying time. If it uses cured gel, you can leave with a set finish but should still avoid unnecessary impact."] },
    ],
    takeaway: "The better the booking details, the more personal the appointment can be. Share practical information early, then enjoy not having to go anywhere.",
  },
  {
    slug: "minimal-nail-art-ideas-bali",
    title: "Minimal nail art ideas with a Bali point of view",
    seoTitle: "Minimal Nail Art Ideas for Bali | Nailea Style Notes",
    description: "Minimal Bali nail art ideas using fine lines, tropical colour, negative space, pearl chrome and small botanical details.",
    category: "Style notes",
    published: "2026-08-02",
    readTime: "4 min read",
    intro: "Minimal nail art is not the absence of an idea. It is an edit: one line in the right place, a restrained colour relationship or a surface that only reveals itself in changing light.",
    sections: [
      { heading: "Fine tropical colour", paragraphs: ["Try a neutral base with an ultra-thin coral, palm green or ocean-blue tip. The colour gives the set a sense of place without turning every nail into an illustration."], points: ["Micro colour French", "One bright side line", "Alternating tonal tips"] },
      { heading: "Organic detail, not literal scenery", paragraphs: ["A curved line can suggest a wave; a tiny petal can reference frangipani; an irregular dot can feel like stone or sand. Abstracting the reference often creates a more wearable result."], points: ["One botanical accent per hand", "Asymmetric curves", "Negative-space petals"] },
      { heading: "Use finish as the artwork", paragraphs: ["A glazed pearl layer, a narrow chrome edge or a cat-eye effect can create depth without a drawn motif. These looks change with the light, which is why they feel especially at home in Bali."] },
    ],
    takeaway: "Pick one idea and let it repeat quietly. Minimal nail art looks strongest when there is enough untouched space for the detail to matter.",
  },
  {
    slug: "bridal-nails-bali-planning",
    title: "Planning bridal nails for a Bali wedding",
    seoTitle: "Bridal Nails Bali: A Calm Planning Guide | Nailea",
    description: "Plan destination wedding nails in Bali with practical timing, group booking details, trial references and designs that photograph beautifully.",
    category: "Events",
    published: "2026-07-20",
    readTime: "7 min read",
    intro: "Destination wedding nails are a small detail that appear in more photographs than expected: rings, flowers, getting ready, toasts and quiet close-ups. The goal is a set that supports all of them without adding stress.",
    sections: [
      { heading: "Choose the design in context", paragraphs: ["Look at dress fabric, jewellery, bouquet tones and the overall mood—not only isolated nail references. A milky base, refined French or soft chrome can feel distinct once its undertone and shape are tailored to the rest of the look."], points: ["Bring photos in natural light", "Decide whether toenails should match or simply coordinate", "Keep trend-led detail where it still feels like you"] },
      { heading: "Build a realistic schedule", paragraphs: ["Avoid placing the bride's appointment in a crowded final hour. Removal, extensions and detailed art all add time. For a group, collect each person's service choice before asking for availability."], points: ["Send venue pin and access rules", "Include ready-by time, not only preferred start", "Allow buffer for photography and unexpected delays"] },
      { heading: "Prepare for the destination", paragraphs: ["Keep hands moisturised in the days before, but arrive without heavy oils immediately on the nail plate. Do not pick at existing product. If a repair may be needed, send clear photos before the appointment so the artist can plan honestly."] },
    ],
    takeaway: "The calmest bridal manicure is planned with the same clarity as the rest of the beauty schedule: exact location, exact services, enough time and a design that belongs to the whole look.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
