export type CategoryId = "switches" | "panels" | "curtains" | "sensors"

export type Category = {
  id: CategoryId
  name: string
  blurb: string
}

export type Product = {
  slug: string
  name: string
  category: CategoryId
  finish?: string
  description: string
  specs: string[]
  image: string
  altImage?: string
}

export const categories: Category[] = [
  {
    id: "switches",
    name: "Smart Switches",
    blurb: "Tempered-glass touch panels in 1 to 4 gangs, finished to match every interior.",
  },
  {
    id: "panels",
    name: "Control Panels",
    blurb: "Wall-mounted touchscreens that put scenes, climate and every device in one place.",
  },
  {
    id: "curtains",
    name: "Curtain & Blind Motors",
    blurb: "Quiet motorised tracks and tubular motors for curtains, rollers and blinds.",
  },
  {
    id: "sensors",
    name: "Sensors & Security",
    blurb: "Detection and alert devices that keep the home aware and protected.",
  },
]

export const products: Product[] = [
  {
    slug: "glass-switch-collection",
    name: "Wi-Fi Glass Touch Switch Series",
    category: "switches",
    finish: "White, Black, Champagne Gold",
    description: "The full touch-switch range shown in context — choose gang count and finish to suit each room.",
    specs: ["1 / 2 / 3 gang", "Wi-Fi", "App & voice control"],
    image: "/products/glass-switch-collection.jpg",
  },
  {
    slug: "glass-switch-1g-black",
    name: "Glass Touch Switch — 1 Gang",
    category: "switches",
    finish: "Classic Black",
    description: "Single-circuit tempered-glass touch switch with a soft blue LED ring.",
    specs: ["1 gang", "Tempered glass", "LED indicator"],
    image: "/products/glass-switch-1g-black.jpg",
  },
  {
    slug: "glass-switch-2g-gold",
    name: "Glass Touch Switch — 2 Gang",
    category: "switches",
    finish: "Champagne Gold",
    description: "Two independently controlled circuits behind a warm champagne-gold glass face.",
    specs: ["2 gang", "Tempered glass", "LED indicator"],
    image: "/products/glass-switch-2g-gold.jpg",
  },
  {
    slug: "glass-switch-3g-white",
    name: "Glass Touch Switch — 3 Gang",
    category: "switches",
    finish: "Simple White",
    description: "Three-circuit touch control in crisp white glass for living and bedroom spaces.",
    specs: ["3 gang", "Tempered glass", "LED indicator"],
    image: "/products/glass-switch-3g-white.jpg",
  },
  {
    slug: "glass-switch-3g-gold",
    name: "Glass Touch Switch — 3 Gang",
    category: "switches",
    finish: "Champagne Gold",
    description: "Three-circuit touch switch with a champagne-gold finish for warmer palettes.",
    specs: ["3 gang", "Tempered glass", "LED indicator"],
    image: "/products/glass-switch-3g-gold.jpg",
  },
  {
    slug: "glass-switch-3g-grey",
    name: "Glass Touch Switch — 3 Gang",
    category: "switches",
    finish: "Space Grey",
    description: "Three-circuit touch switch in understated grey glass for modern interiors.",
    specs: ["3 gang", "Tempered glass", "LED indicator"],
    image: "/products/glass-switch-3g-grey.jpg",
  },
  {
    slug: "framed-switch-1g-white",
    name: "Framed Touch Switch — 1 Gang",
    category: "switches",
    finish: "Pearl White / Aluminium",
    description: "Recessed-button glass panel set in a brushed aluminium frame for a premium feel.",
    specs: ["1 gang", "Aluminium frame", "Tactile key"],
    image: "/products/framed-switch-1g-white.jpg",
  },
  {
    slug: "framed-switch-4g-rose-gold",
    name: "Framed Touch Switch — 4 Gang",
    category: "switches",
    finish: "Rose Gold",
    description: "Four-circuit framed panel with sculpted keys and a rose-gold metal surround.",
    specs: ["4 gang", "Metal frame", "Tactile keys"],
    image: "/products/framed-switch-4g-rose-gold.jpg",
  },
  {
    slug: "control-panel-4in",
    name: "4\" Smart Control Panel",
    category: "panels",
    description: "Compact touchscreen for scenes, lighting colour, weather and time at a glance.",
    specs: ["4\" touchscreen", "Scene modes", "RGB light control"],
    image: "/products/control-panel-4in.jpg",
  },
  {
    slug: "control-panel-10in",
    name: "10\" Central Control Panel",
    category: "panels",
    description: "Whole-home command centre with room views, device tiles and physical side keys.",
    specs: ["10\" display", "Room dashboards", "Side scene keys"],
    image: "/products/control-panel-10in.jpg",
  },
  {
    slug: "curtain-track-kit",
    name: "Motorised Curtain Track Kit",
    category: "curtains",
    description: "Complete kit: aluminium track, silent motor, gliders, brackets, belt and remote.",
    specs: ["Silent motor", "Remote included", "App & voice control"],
    image: "/products/curtain-track-kit.jpg",
  },
  {
    slug: "roller-blind-motor",
    name: "Tubular Roller Blind Motor",
    category: "curtains",
    description: "Wi-Fi tubular motor with brackets and remote, compatible with Alexa and Google.",
    specs: ["Wi-Fi", "Alexa & Google", "Remote included"],
    image: "/products/roller-blind-motor.jpg",
  },
  {
    slug: "vibration-sensor",
    name: "Smart Vibration Sensor",
    category: "sensors",
    description: "Detects vibration and drops with adjustable sensitivity and real-time alerts.",
    specs: ["Adjustable sensitivity", "Low power", "History log"],
    image: "/products/vibration-sensor.jpg",
    altImage: "/products/vibration-sensor-lifestyle.jpg",
  },
  {
    slug: "smart-siren",
    name: "Smart Siren Alarm",
    category: "sensors",
    description: "Loud alarm with 11 selectable tones and an orange LED ring, set from the app.",
    specs: ["11 sounds", "LED ring", "App control"],
    image: "/products/smart-siren.jpg",
  },
]
