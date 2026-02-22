import { useEffect, useRef } from "react";
import { TABS } from "../data/tabs.js";

export default function TabBar({ active, onChange }) {
  const pillRef = useRef(null);
  const barRef  = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const idx = TABS.findIndex(t => t.id === active);
    const btn = btnRefs.current[idx];
    const bar = barRef.current;
    const pill = pillRef.current;
    if (!btn || !bar || !pill) return;

    const bRect = bar.getBoundingClientRect();
    const bBtn  = btn.getBoundingClientRect();

    pill.style.width  = bBtn.width  + "px";
    pill.style.transform =
      `translateX(${bBtn.left - bRect.left - 4}px)`;
  }, [active]);

  return (
    <div className="tab-bar" ref={barRef}>
      <div ref={pillRef} className="tab-pill" style={{width:0}} />

      {TABS.map((t, i) => (
        <button
          key={t.id}
          ref={el => btnRefs.current[i] = el}
          className={`tab-btn${active === t.id ? " active" : ""}`}
          onClick={() => onChange(t.id)}
        >
          <span className="tab-icon">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}