/**
 * Henna Artistry Website Configuration
 * 
 * Edit this file to customize the brand name, contact info, social links,
 * colors, services, portfolio items, testimonials, and FAQs.
 */

window.BRAND_CONFIG = {
  // SEO & General Brand Info
  brand: {
    name: "EISHAH",               // Short brand name (usually uppercase) used in header/footer logo
    small: "Henna Artistry",      // Tagline under the brand logo
    fullName: "Henna by Eishah",  // Full name of the brand/artist
    title: "Henna by Eishah — Luxury Bridal & Occasion Henna Artistry", // Page browser title
    metaDescription: "Henna by Eishah — bespoke bridal henna, luxury wedding mehndi and private henna artistry. Natural henna, custom artwork, long-lasting stains.",
  },

  // Brand Colors (CSS Variables overrides)
  // Leave empty or comment out to use default website theme colors
  colors: {
    "--ink": "#211712",
    "--ink-soft": "#3a2c22",
    "--ivory": "#f6eedf",
    "--ivory-2": "#efe3cd",
    "--sand": "#e7d3b4",
    "--blush": "#dec3a9",
    "--maroon": "#6b2a1f",
    "--maroon-deep": "#4d1c14",
    "--gold": "#a9834a",
    "--gold-light": "#c9a668",
  },

  // Contact Details & Social Links
  contact: {
    email: "hello@hennabyeishah.com",
    phone: "+44 7000 000 000",
    studio: "By appointment · London, UK",
    whatsappLink: "https://wa.me/447000000000", // Full WhatsApp URL
    instagramLink: "https://www.instagram.com/hennabyeishah",
    instagramHandle: "@hennabyeishah",
    facebookLink: "#",
    twitterLink: "#",
  },

  // Hero Section
  hero: {
    eyebrow: "Luxury Bridal & Occasion Henna",
    titleLines: [
      "Artistry etched",
      "in <em>henna,</em>",
      "worn like heirlooms"
    ],
    subtitle: "Bespoke bridal mehndi and fine henna artistry for weddings, celebrations and private clients — designed to be as unforgettable as the day itself.",
    ctaBookText: "Book Consultation",
    ctaPortfolioText: "View Portfolio",
  },

  // About/Artist Section
  about: {
    eyebrow: "The Artist",
    title: "A quiet devotion<br />to the art of henna.",
    lead: "Every design begins the same way — with a conversation, not a template.",
    description: `Eishah has spent over a decade refining a signature style that sits between tradition and fine art: intricate linework, considered negative space, and motifs drawn to flatter the hand they're placed on. Trained in classical Indo-Arabic technique and shaped by years working closely with brides across the UK, her approach treats each booking as a single, unrepeatable commission.\n\nFrom intimate pre-wedding sittings to full bridal parties of forty guests, the studio's philosophy stays the same: natural henna, unhurried craftsmanship, and a finished stain that deepens beautifully over the days that follow — because a henna design should still feel special on the honeymoon, not just the wedding morning.`,
    badgeValue: "10+",
    badgeLabel: "Years Artistry",
    image: "https://images.unsplash.com/photo-1613798543043-47904e34348b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Eishah applying intricate bridal henna",
    tags: ["Bridal Henna", "Luxury Weddings", "Mehndi Events", "Eid", "Parties", "Private Bookings"],
    stats: [
      { value: "500+", label: "Brides Adorned" },
      { value: "12", label: "UK Cities Served" },
      { value: "98%", label: "Repeat Referrals" },
      { value: "100%", label: "Natural Henna" }
    ]
  },

  // Signature Services Section
  services: {
    eyebrow: "Signature Services",
    title: "Crafted for every kind of celebration.",
    subtitle: "Six ways to bring bespoke henna artistry to your occasion — each tailored in consultation, never off the shelf.",
    list: [
      {
        num: "Bridal",
        title: "Bridal Henna",
        desc: "Full bridal coverage with a custom motif designed around your outfit, jewellery and story."
      },
      {
        num: "Guests",
        title: "Wedding Guests",
        desc: "Elegant application stations for wedding parties and guests, styled to suit the occasion."
      },
      {
        num: "Celebration",
        title: "Party Henna",
        desc: "Refined designs for Eid, engagements and celebrations — quick to apply, lovely to wear."
      },
      {
        num: "Jagua",
        title: "Jagua",
        desc: "A bolder, deeper stain for clients seeking longer-lasting, jet-black finished artwork."
      },
      {
        num: "Corporate",
        title: "Corporate Events",
        desc: "Curated henna experiences for brand activations, product launches and private functions."
      },
      {
        num: "Festivals",
        title: "Festivals",
        desc: "Pop-up henna artistry for festivals and cultural events, bringing craft to a wider audience."
      }
    ]
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "The details that set<br />a commission apart.",
    items: [
      {
        title: "Premium Designs",
        desc: "Original motifs designed around you — never copied, never repeated for another bride.",
        // SVG path for standard star icon
        icon: '<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />'
      },
      {
        title: "Natural Henna",
        desc: "Hand-mixed, chemical-free paste using traditional botanical ingredients on every booking.",
        // SVG path for heart/leaf icon
        icon: '<path d="M12 21c-4-3-8-6.5-8-11a5 5 0 019-3 5 5 0 019 3c0 4.5-4 8-8 11z" />'
      },
      {
        title: "Long-Lasting Stains",
        desc: "A refined cone technique and aftercare guidance for a deep, even stain that lasts for weeks.",
        // SVG path for wave/timeline icon
        icon: '<path d="M12 2v20M4 6l8-4 8 4M4 18l8 4 8-4" />'
      },
      {
        title: "Custom Artwork",
        desc: "Every consultation begins with your story — culture, outfit and personal symbolism included.",
        // SVG path for frame icon
        icon: '<path d="M4 4h16v16H4zM4 9h16M9 20V9" />'
      },
      {
        title: "Professional Experience",
        desc: "A decade of bridal and event artistry across the UK's most prestigious venues.",
        // SVG path for clock icon
        icon: '<path d="M12 8v4l3 2M12 22a10 10 0 100-20 10 10 0 000 20z" />'
      },
      {
        title: "Luxury Client Experience",
        desc: "White-glove booking, styled consultations, and concierge-level care from enquiry to event day.",
        // SVG path for layers icon
        icon: '<path d="M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4" />'
      }
    ]
  },

  // Booking Process Section
  bookingProcess: {
    eyebrow: "Booking Process",
    title: "A calm path to your henna day.",
    subtitle: "Five simple steps carry every client from first message to the moment henna meets skin.",
    steps: [
      {
        dot: "01",
        title: "Inquiry",
        desc: "Share your date, occasion and vision through our contact form or Instagram."
      },
      {
        dot: "02",
        title: "Consultation",
        desc: "A personal call or in-studio meeting to discuss style, coverage and inspiration."
      },
      {
        dot: "03",
        title: "Design Discussion",
        desc: "Bespoke sketches and motif options refined until they feel entirely yours."
      },
      {
        dot: "04",
        title: "Booking Confirmation",
        desc: "Deposit secured, timeline agreed, and every detail confirmed in writing."
      },
      {
        dot: "05",
        title: "Henna Day",
        desc: "Unhurried application, aftercare guidance, and a stain that lasts for weeks."
      }
    ]
  },

  // Testimonials Section
  testimonials: {
    eyebrow: "Testimonials",
    title: "Words from<br />our brides.",
    list: [
      {
        stars: "★★★★★",
        quote: "Eishah made me feel like art itself. The design was more intricate than anything I'd seen — and it was still stunning three weeks after the wedding.",
        author: "Amira K.",
        location: "Bridal Henna, London"
      },
      {
        stars: "★★★★★",
        quote: "From the first consultation to the final touch-up, everything felt considered. Our entire wedding party was in awe of the details.",
        author: "Sana R.",
        location: "Luxury Wedding, Birmingham"
      },
      {
        stars: "★★★★★",
        quote: "The most professional henna experience I've booked. Eishah listened, sketched, and delivered something more beautiful than I imagined.",
        author: "Zara M.",
        location: "Private Booking, Manchester"
      }
    ]
  },

  // Instagram Feed Section
  instagram: {
    eyebrow: "Follow Along",
    // Unsplash photo IDs simulating Instagram posts
    posts: [
      "photo-1684813270065-73dce8b31b92",
      "photo-1684814070823-97e0b9e99c69",
      "photo-1702378154233-9b870ff8f1b3",
      "photo-1730003873829-09b4b16444c1",
      "photo-1583878545451-a83daf591083",
      "photo-1587271598589-3f91d0872f66",
    ]
  },

  // FAQ Section
  faq: {
    eyebrow: "FAQ",
    title: "Good to know<br />before you book.",
    list: [
      {
        q: "How far in advance should I book my bridal henna?",
        a: "For weddings, we recommend booking 4–6 months ahead, especially for peak wedding season (May–September). Consultations can happen earlier to help you plan your full bridal timeline."
      },
      {
        q: "Is the henna you use natural?",
        a: "Yes — every cone is hand-mixed using natural, chemical-free henna paste. We never use \"black henna\" (PPD), which can cause serious skin reactions."
      },
      {
        q: "How long does a bridal henna session take?",
        a: "Full bridal coverage (both hands and feet) typically takes 3–5 hours depending on design complexity. This is discussed in detail during your design consultation."
      },
      {
        q: "Do you travel for destination weddings?",
        a: "Yes, we are available for nationwide and select international bookings. Travel and accommodation are arranged as part of your booking confirmation."
      },
      {
        q: "How do I care for my henna to get the darkest stain?",
        a: "You'll receive a full aftercare card at your appointment — covering paste removal time, natural sealants and the first 48 hours, which matter most for stain depth."
      }
    ]
  },

  // Portfolio Section
  portfolio: {
    eyebrow: "Portfolio",
    title: "A gallery of<br />recent commissions.",
    list: [
      {
        cat: "bridal",
        title: "The Amira Bridal Set",
        tag: "Bridal · London",
        ratio: "4/5",
        img: "photo-1525135850648-b42365991054",
      },
      {
        cat: "party",
        title: "Eid Celebration Motif",
        tag: "Party · Manchester",
        ratio: "1/1",
        img: "photo-1530082625928-db66d39c5a21",
      },
      {
        cat: "jagua",
        title: "Deep Stain Jagua",
        tag: "Jagua · Birmingham",
        ratio: "4/5",
        img: "photo-1619733839322-1e28cdb928a0",
      },
      {
        cat: "bridal",
        title: "Full Bridal Coverage",
        tag: "Bridal · Leeds",
        ratio: "3/4",
        img: "photo-1583878544826-8f8c418033ed",
      },
      {
        cat: "festival",
        title: "Festival Pop-Up Design",
        tag: "Festival · Bristol",
        ratio: "1/1",
        img: "photo-1505932794465-147d1f1b2c97",
      },
      {
        cat: "corporate",
        title: "Brand Activation Henna",
        tag: "Corporate · London",
        ratio: "4/5",
        img: "photo-1556536088-f010a312a8d3",
      },
      {
        cat: "bridal",
        title: "Engagement Party Set",
        tag: "Bridal · Glasgow",
        ratio: "3/4",
        img: "photo-1583878545451-a83daf591083",
      },
      {
        cat: "party",
        title: "Sangeet Night Design",
        tag: "Party · Luton",
        ratio: "1/1",
        img: "photo-1565368114375-ba1a4db7099f",
      },
      {
        cat: "jagua",
        title: "Statement Jagua Sleeve",
        tag: "Jagua · London",
        ratio: "4/5",
        img: "photo-1619734089700-842e56497353",
      },
      {
        cat: "bridal",
        title: "The Zara Bridal Motif",
        tag: "Bridal · Manchester",
        ratio: "3/4",
        img: "photo-1587271598589-3f91d0872f66",
      },
      {
        cat: "festival",
        title: "Summer Festival Stalls",
        tag: "Festival · Leeds",
        ratio: "1/1",
        img: "photo-1572969147844-920fff94e326",
      },
      {
        cat: "corporate",
        title: "Private Client Event",
        tag: "Corporate · Birmingham",
        ratio: "4/5",
        img: "photo-1610313898119-bfb803225bce",
      }
    ]
  }
};
