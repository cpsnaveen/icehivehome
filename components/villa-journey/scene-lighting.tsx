import type { SceneRig } from "./data"

type SceneLightingProps = {
  rig: SceneRig
  weights: number[]
}

/**
 * Relights a room photo for each scene: a dimming layer darkens the room, then
 * LED glows, the TV screen and speaker sound rings are painted back on top.
 * `weights` holds each scene's blend amount so scenes cross-fade on scroll.
 */
export default function SceneLighting({ rig, weights }: SceneLightingProps) {
  const dim = rig.scenes.reduce((sum, scene, i) => sum + scene.dim * weights[i], 0)
  const audio = rig.scenes.reduce((sum, scene, i) => sum + (scene.audio ? weights[i] : 0), 0)

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0" style={{ background: "oklch(0.1 0.03 260)", opacity: dim }} />

      {rig.scenes.map((scene, i) => {
        const w = weights[i]
        if (w <= 0.001) return null
        const glow = rig.glows
          .map((g) => `radial-gradient(ellipse ${g.rx}% ${g.ry}% at ${g.x}% ${g.y}%, ${scene.glow}, transparent 70%)`)
          .join(", ")

        return (
          <div key={scene.id} className="absolute inset-0" style={{ opacity: w }}>
            {scene.glowStrength > 0 && (
              <div
                className={`absolute inset-0 mix-blend-screen ${scene.cycling ? "ih-hue-cycle" : ""}`}
                style={{ backgroundImage: glow, opacity: scene.glowStrength }}
              />
            )}
            {scene.screen && (
              <div
                className={`absolute ${scene.cycling ? "ih-hue-cycle" : ""}`}
                style={{
                  left: `${rig.screen.left}%`,
                  top: `${rig.screen.top}%`,
                  width: `${rig.screen.width}%`,
                  height: `${rig.screen.height}%`,
                  background: scene.screen,
                  boxShadow: `0 0 60px 10px ${scene.glow}`,
                }}
              />
            )}
          </div>
        )
      })}

      {audio > 0.05 &&
        rig.speakers.map((s, i) => (
          <span key={i} className="absolute" style={{ left: `${s.x}%`, top: `${s.y}%`, opacity: Math.min(1, audio) }}>
            {[0, 0.53, 1.06].map((delay) => (
              <span
                key={delay}
                className="ih-sound absolute left-0 top-0 size-16 rounded-full border-2 border-hive md:size-24"
                style={{ animationDelay: `${delay}s` }}
              />
            ))}
          </span>
        ))}
    </div>
  )
}
