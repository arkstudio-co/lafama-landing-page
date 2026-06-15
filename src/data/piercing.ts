export interface PiercingTipo {
  name: string
  description: string
  image: string
}

export const piercingTipos: PiercingTipo[] = [
  {
    name: "Daith",
    description: "Perforación en el pliegue interno del cartílago del oído. Estética y funcional.",
    image: "/images/perfo/Daith.jpg",
  },
  {
    name: "Septum",
    description: "Perforación en el tabique nasal. Uno de los estilos más versátiles.",
    image: "/images/perfo/Septum.jpg",
  },
  {
    name: "Lóbulo",
    description: "La perforación clásica del lóbulo de la oreja. Perfecta para empezar.",
    image: "/images/perfo/Lobulo.jpg",
  },
  {
    name: "Diseño",
    description: "Combinaciones personalizadas de múltiples perforaciones con estilo único.",
    image: "/images/perfo/Diseño.jpg",
  },
]

export const piercingGaleria: string[] = Array.from(
  { length: 15 },
  (_, i) => `/images/perfo/portafolio${i + 1}.jpg`,
)
