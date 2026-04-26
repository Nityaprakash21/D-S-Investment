import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Premium Riskometer color segments
const segments = [
  { id: 'low', label: 'Low', color: '#22c55e' },
  { id: 'mod-low', label: 'Moderately Low', color: '#a3e635' },
  { id: 'moderate', label: 'Moderate', color: '#facc15' },
  { id: 'mod-high', label: 'Moderately High', color: '#fb923c' },
  { id: 'high', label: 'High', color: '#ef4444' },
];

// Pointing to Moderate (index 2 in 0-indexed array, so middle is 2.5)
const pointerIndex = 2.5;

const Riskometer: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = segments.length;
  // Scaled up SVG dimensions to make the meter bigger
  const svgWidth = 460;
  const svgHeight = 220; // Reduced height to remove empty gap below center
  const centerX = svgWidth / 2;
  const centerY = 210;
  const radius = 170; // Increased radius
  const innerRadius = 80; // Increased inner radius

  // Calculate pointer angle for semi-circle (-Math.PI to 0)
  // Moderate is exactly in the middle (-90 degrees, straight up)
  const pointerAngle = -Math.PI + (pointerIndex / total) * Math.PI;

  return (
    <div className="flex flex-col items-center justify-center w-full mb-8 relative z-0">
      <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-8 w-full relative overflow-visible">
        <div className="flex flex-col items-center relative">
          <svg width="100%" height="auto" viewBox={`0 0 ${svgWidth} ${svgHeight}`} style={{ maxWidth: '460px', overflow: 'visible' }}>

            {/* Arcs (semi-circle) */}
            {segments.map((seg, i) => {
              const startAngle = -Math.PI + (i / total) * Math.PI;
              const endAngle = -Math.PI + ((i + 1) / total) * Math.PI;

              // Outer arc points
              const x1 = centerX + radius * Math.cos(startAngle);
              const y1 = centerY + radius * Math.sin(startAngle);
              const x2 = centerX + radius * Math.cos(endAngle);
              const y2 = centerY + radius * Math.sin(endAngle);

              // Inner arc points
              const x3 = centerX + innerRadius * Math.cos(endAngle);
              const y3 = centerY + innerRadius * Math.sin(endAngle);
              const x4 = centerX + innerRadius * Math.cos(startAngle);
              const y4 = centerY + innerRadius * Math.sin(startAngle);

              const isHovered = hoveredIndex === i;

              return (
                <motion.g
                  key={seg.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
                  transition={{
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    mass: 0.8
                  }}
                  style={{ transformOrigin: `${centerX}px ${centerY}px` }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                >
                  <path
                    d={`M${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} L${x3},${y3} A${innerRadius},${innerRadius} 0 0,0 ${x4},${y4} Z`}
                    fill={seg.color}
                    stroke="white"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  {/* Tooltip effect on hover */}
                  {isHovered && (
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      d={`M${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} L${x3},${y3} A${innerRadius},${innerRadius} 0 0,0 ${x4},${y4} Z`}
                      fill="white"
                    />
                  )}
                </motion.g>
              );
            })}

            {/* Labels placed outside the arcs */}
            {segments.map((seg, i) => {
              const angle = -Math.PI + ((i + 0.5) / total) * Math.PI;
              const labelRadius = radius + 20; // Explicitly pushed outside the border
              let x = centerX + labelRadius * Math.cos(angle);
              let y = centerY + labelRadius * Math.sin(angle);

              let anchor: "start" | "middle" | "end" = "middle";

              // Dynamically adjust text anchors to prevent cutting off text or overlapping
              if (Math.cos(angle) > 0.2) {
                anchor = "start";
                x += 5; // Nudge right
              } else if (Math.cos(angle) < -0.2) {
                anchor = "end";
                x -= 5; // Nudge left
              }

              // Nudge the top label up slightly
              if (Math.abs(Math.sin(angle)) > 0.9) {
                y -= 5;
              }

              return (
                <motion.text
                  key={`label-${seg.id}`}
                  x={x}
                  y={y}
                  textAnchor={anchor}
                  alignmentBaseline="middle"
                  fontSize="16"
                  fontWeight="700"
                  fill={hoveredIndex === i ? seg.color : "#64748b"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: hoveredIndex === i ? 1.1 : 1
                  }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  style={{ pointerEvents: 'none', transformOrigin: `${x}px ${y}px` }}
                >
                  {seg.label}
                </motion.text>
              );
            })}

            {/* Animated Pointer (Needle) */}
            <motion.g
              initial={{ rotate: -180 }}
              animate={{ rotate: (pointerAngle * 180) / Math.PI }}
              style={{ transformOrigin: "50% 50%" }}
              transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.8, mass: 1.2 }}
            >
              {/* Invisible circle to fix the SVG transform-origin bounding box issue */}
              <circle cx={centerX} cy={centerY} r={radius} fill="transparent" />

              {/* Tail extending backwards */}
              <line
                x1={centerX - 10}
                y1={centerY}
                x2={centerX + innerRadius + 5}
                y2={centerY}
                stroke="#1e293b"
                strokeWidth={5}
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
              {/* Arrow head (shorter) */}
              <polygon
                points={`${centerX + innerRadius + 3},${centerY - 8} ${centerX + innerRadius + 3},${centerY + 8} ${centerX + innerRadius + 18},${centerY}`}
                fill="#1e293b"
              />
            </motion.g>

            {/* Center Hub */}
            <circle cx={centerX} cy={centerY} r={14} fill="#1e293b" className="drop-shadow-md" />
            <circle cx={centerX} cy={centerY} r={6} fill="#ffffff" />
          </svg>

          {/* Risk Level Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="mt-6 text-center"
          >
            <motion.span
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-sm cursor-default cursor-pointer"
            >
              Moderate Risk
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Riskometer;
