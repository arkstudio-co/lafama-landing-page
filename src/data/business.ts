export interface BusinessInfo {
  name: string
  tagline: string
  description: string
  address: {
    street: string
    neighborhood: string
    city: string
    department: string
    country: string
    full: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  contact: {
    phone: string
    phoneDisplay: string
    whatsapp: string
    email: string
  }
  hours: {
    days: string
    open: string
    close: string
    display: string
  }
  social: {
    instagram: string
    instagramUrl: string
  }
  google: {
    placeId: string
    rating: number
    reviewCount: number
    mapsUrl: string
    mapsEmbedUrl: string
    directionsUrl: string
    reviewsUrl: string
  }
  stats: {
    tattoosCompleted: number
    yearsExperience: number
  }
  styles: string[]
  images: {
    hero: string
    logo: string
    somos: string
    ubicacion: string
    asesoria: string
    og: string
  }
  seo: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    locale: string
    url: string
  }
}

export const business: BusinessInfo = {
  name: "La Fama Tattoo Estudio",
  tagline: "Tatúate con expertos en el corazón de Medellín",
  description:
    "Vive una experiencia diferente, en un espacio sobrio y tranquilo, atención personalizada y altos estándares de higiene.",

  address: {
    street: "Cra. 43B #8-31",
    neighborhood: "El Poblado",
    city: "Medellín",
    department: "Antioquia",
    country: "Colombia",
    full: "Cra. 43B #8-31, El Poblado, Medellín, Antioquia",
  },

  coordinates: {
    lat: 6.2097068,
    lng: -75.571682,
  },

  contact: {
    phone: "3188433214",
    phoneDisplay: "318 843 32 14",
    whatsapp: "573188433214",
    email: "tattolafama@gmail.com",
  },

  hours: {
    days: "Lun–Dom",
    open: "8:00 AM",
    close: "8:00 PM",
    display: "Lun–Dom · 8:00 AM – 8:00 PM",
  },

  social: {
    instagram: "@lafamatattooestudio",
    instagramUrl: "https://www.instagram.com/lafamatattooestudio",
  },

  google: {
    placeId: "ChIJVYQxWlopRI4RPyxkviH8UoE",
    rating: 5.0,
    reviewCount: 32,
    mapsUrl: "https://www.google.com/maps/place/La+Fama+Tattoo+Estudio,+Cra.+43B+%238-31,+El+Poblado,+Medell%C3%ADn,+Antioquia",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.22493062!2d-75.571682!3d6.2097068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44295a5a318455%3A0x8152fc21be642c3f!2sLa%20Fama%20Tattoo%20Estudio!5e0!3m2!1ses!2sco!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir//La+Fama+Tattoo+Estudio,+Cra.+43B+%238-31,+El+Poblado,+Medell%C3%ADn,+Antioquia",
    reviewsUrl:
      "https://search.google.com/local/reviews?placeid=ChIJVYQxWlopRI4RPyxkviH8UoE&q=La+Fama+Tattoo+Estudio&hl=es&gl=CO",
  },

  stats: {
    tattoosCompleted: 1000,
    yearsExperience: 15,
  },

  styles: ["Realismo", "Fine Line", "Neotradicional", "Blackwork", "Anime"],

  images: {
    hero: "/images/hero-image.JPG",
    logo: "/images/logo.png",
    somos: "/images/somos.png",
    ubicacion: "/images/ubicacion.jpg",
    asesoria: "/images/asesoria-image.jpg",
    og: "/images/hero.jpg",
  },

  seo: {
    title: "La Fama Tattoo Studio | El Poblado, Medellín",
    description:
      "Tatúate con expertos en el corazón de Medellín. Realismo, Fine Line, Neotradicional y Blackwork. Atención personalizada y altos estándares de higiene.",
    ogTitle: "La Fama Tattoo Studio",
    ogDescription:
      "Estudio de tatuajes en El Poblado, Medellín. Expertos en Realismo, Fine Line, Neotradicional y Blackwork.",
    locale: "es_CO",
    url: "https://lafamatattoo.com",
  },
}
