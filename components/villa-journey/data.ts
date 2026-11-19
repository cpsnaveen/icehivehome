export type Hotspot = {
  x: number
  y: number
  name: string
  role: string
  image: string
}

export type Room = {
  id: string
  label: string
  title: string
  description: string
  image: string
  alt: string
  focusX: number
  burstFrom: { x: number; y: number }
  hotspots: Hotspot[]
}

export const exterior = {
  image: "/journey/villa-exterior.png",
  alt: "Modern two-storey Dubai villa at blue hour with glowing glass facade, infinity pool and palm trees, Burj Khalifa in the distance",
  zoomOrigin: { x: 57, y: 55 },
}

export const finale = {
  image: "/journey/villa-night.png",
  alt: "Aerial night view of the villa with every room lit, illuminated pool and the Dubai skyline behind",
  hub: { x: 50, y: 50 },
  nodes: [
    { label: "Entrance", x: 30, y: 71 },
    { label: "Living", x: 50, y: 66 },
    { label: "Bedroom", x: 37, y: 58 },
    { label: "Kitchen", x: 68, y: 70 },
    { label: "Suite", x: 64, y: 58 },
    { label: "Terrace", x: 50, y: 79 },
  ],
}

export const rooms: Room[] = [
  {
    id: "entrance",
    label: "Entrance",
    title: "A front door that knows you.",
    description: "Face recognition unlocks, the intercom rings your phone and the camera keeps watch — day and night.",
    image: "/journey/room-entrance.png",
    alt: "Villa entrance at night with walnut pivot door, face recognition smart lock, video intercom and dome camera",
    focusX: 0.62,
    burstFrom: { x: 57, y: 55 },
    hotspots: [
      { x: 58.3, y: 60, name: "3D Face Recognition Smart Lock", role: "Access", image: "/products/lock-face-recognition.jpg" },
      { x: 69.4, y: 55.5, name: "Video Intercom Smart Lock", role: "Intercom", image: "/products/lock-video-intercom.jpg" },
      { x: 67.6, y: 13.8, name: "Wi-Fi Solar Dual-Lens Camera", role: "Surveillance", image: "/products/camera-solar-wifi.jpg" },
    ],
  },
  {
    id: "living",
    label: "Living Room",
    title: "Light, shade and sound in one touch.",
    description: "Curtains glide, cove lighting warms and the TV wakes up — orchestrated from a single wall panel.",
    image: "/journey/room-living.png",
    alt: "Double-height living room with sheer curtains, cove lighting, TV wall and wall-mounted smart control panels",
    focusX: 0.7,
    burstFrom: { x: 62, y: 50 },
    hotspots: [
      { x: 89.5, y: 47, name: '10" Central Control Panel', role: "Whole-home control", image: "/products/control-panel-10in.jpg" },
      { x: 91.5, y: 63, name: "Glass Touch Switch — 3 Gang", role: "Lighting scenes", image: "/products/glass-switch-3g-grey.jpg" },
      { x: 41, y: 38, name: "Motorised Curtain Track Kit", role: "Curtains", image: "/products/curtain-track-kit.jpg" },
      { x: 56, y: 49, name: "Smart IR Universal Remote", role: "TV & climate", image: "/products/ir-blaster.jpg" },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    title: "The kitchen that starts the morning.",
    description: "Coffee brews on schedule, the water heater warms ahead of time and every socket reports its energy.",
    image: "/journey/room-kitchen.png",
    alt: "Modern kitchen with marble island, brass pendants, under-cabinet lighting and a small smart control panel",
    focusX: 0.66,
    burstFrom: { x: 89, y: 50 },
    hotspots: [
      { x: 94, y: 38, name: '4" Smart Control Panel', role: "Room control", image: "/products/control-panel-4in.jpg" },
      { x: 80.6, y: 48.6, name: "Smart Wall Socket with USB", role: "Power & energy", image: "/products/socket-uk-usb.jpg" },
      { x: 57.5, y: 48, name: "Smart Plug", role: "Appliance timers", image: "/products/smart-plug-uk.jpg" },
      { x: 70.5, y: 49.5, name: "Smart Water Heater Switch", role: "Hot water", image: "/products/water-heater-switch.jpg" },
    ],
  },
  {
    id: "bedroom",
    label: "Master Suite",
    title: "Goodnight, in a single word.",
    description: "Blinds lower, lights dim to amber, the AC settles at 22° and the perimeter arms itself.",
    image: "/journey/room-bedroom.png",
    alt: "Master bedroom at night with motorised roller blinds, backlit headboard, gold smart switch and Dubai Marina views",
    focusX: 0.6,
    burstFrom: { x: 50, y: 40 },
    hotspots: [
      { x: 90.8, y: 68, name: "Glass Touch Switch — 2 Gang", role: "Bedside scenes", image: "/products/glass-switch-2g-gold.jpg" },
      { x: 19, y: 20, name: "Tubular Roller Blind Motor", role: "Blackout blinds", image: "/products/roller-blind-motor.jpg" },
      { x: 32, y: 11, name: "Smart IR Universal Remote", role: "Climate", image: "/products/ir-blaster.jpg" },
      { x: 26, y: 46, name: "Smart Vibration Sensor", role: "Window security", image: "/products/vibration-sensor.jpg" },
    ],
  },
  {
    id: "terrace",
    label: "Pool Terrace",
    title: "The outdoors, watched over.",
    description: "Solar cameras cover the garden, landscape lighting follows sunset and the siren stands ready.",
    image: "/journey/room-terrace.png",
    alt: "Pool terrace at night with lit infinity pool, uplit palms, pergola and a solar security camera on the villa wall",
    focusX: 0.55,
    burstFrom: { x: 70, y: 45 },
    hotspots: [
      { x: 92.5, y: 21.5, name: "4G Solar Dual-Lens Camera", role: "Perimeter", image: "/products/camera-solar-4g.jpg" },
      { x: 89, y: 52, name: "Smart Siren Alarm", role: "Deterrence", image: "/products/smart-siren.jpg" },
      { x: 24, y: 42, name: "Framed Touch Switch — 4 Gang", role: "Landscape lighting", image: "/products/framed-switch-4g-rose-gold.jpg" },
    ],
  },
]

export const totalProducts = rooms.reduce((sum, r) => sum + r.hotspots.length, 0)
