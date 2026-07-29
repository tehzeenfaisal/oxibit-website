const pins = [
  { id: "ny", left: "22%", top: "38%", color: "#0066FF", label: "Tuxedo, New York" },
  { id: "lahore", left: "66%", top: "54%", color: "#FF5500", label: "Lahore, Pakistan" },
];

/** Decorative grid-map with two labeled pins for the Tuxedo NY / Lahore offices. */
export function OfficeMap() {
  return (
    <div
      aria-hidden="true"
      className="relative mb-6 h-75 overflow-hidden rounded-2xl border border-mist bg-[#fbfcfd]"
      style={{
        backgroundImage:
          "linear-gradient(0deg,rgba(0,102,255,.04),rgba(0,102,255,.04)),repeating-linear-gradient(0deg,#eef2f6 0 1px,transparent 1px 44px),repeating-linear-gradient(90deg,#eef2f6 0 1px,transparent 1px 44px)",
      }}
    >
      {pins.map((pin) => (
        <div key={pin.id} className="absolute" style={{ left: pin.left, top: pin.top }}>
          <span
            className="block size-4.5 rounded-full border-4 border-white"
            style={{ background: pin.color, boxShadow: `0 4px 12px ${pin.color}66` }}
          />
          <span className="absolute top-[-4px] left-6.5 rounded-md border border-mist bg-white px-2.5 py-1 text-[13px] font-semibold whitespace-nowrap text-charcoal shadow-[0_2px_6px_rgba(14,42,71,0.08)]">
            {pin.label}
          </span>
        </div>
      ))}
    </div>
  );
}
