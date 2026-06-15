export interface PiercingTipo {
  name: string
  description: string
  image: string
}

export const piercingTipos: PiercingTipo[] = [
  {
    name: "Daith",
    description: "Perforación en el pliegue interno del cartílago del oído. Estética y funcional.",
    image: "/images/perfo/perfo2.jpg",
  },
  {
    name: "Septum",
    description: "Perforación en el tabique nasal. Uno de los estilos más versátiles.",
    image: "/images/perfo/perfo3.jpg",
  },
  {
    name: "Lóbulo",
    description: "La perforación clásica del lóbulo de la oreja. Perfecta para empezar.",
    image: "/images/perfo/perfo4.jpg",
  },
  {
    name: "Diseño",
    description: "Combinaciones personalizadas de múltiples perforaciones con estilo único.",
    image: "/images/perfo/perfo5.jpg",
  },
]

export const piercingGaleria: string[] = Array.from(
  { length: 15 },
  (_, i) => `/images/perfo/portafolio${i + 1}.jpg`,
)
