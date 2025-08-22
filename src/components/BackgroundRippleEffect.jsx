"use client";;
import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = forwardRef(function BackgroundRippleEffect({
  rows = 9,
  cols = 30,
  cellSize = 52,
  borderColor = "rgba(0,0,0,0.35)",
  fillColor = "rgba(59,130,246,0.18)",
  opacity = 0.75,
  interactive = true,
}, ref) {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const containerRef = useRef(null);

  const triggerAtCell = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols) return;
    setClickedCell({ row, col });
    setRippleKey((k) => k + 1);
  };

  const triggerAtPoint = (clientX, clientY) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const gridWidth = cols * cellSize;
    const gridHeight = rows * cellSize;
    const startX = rect.left + (rect.width - gridWidth) / 2;
    const startY = rect.top + (rect.height - gridHeight) / 2;
    const localX = clientX - startX;
    const localY = clientY - startY;
    const col = Math.floor(localX / cellSize);
    const row = Math.floor(localY / cellSize);
    triggerAtCell(row, col);
  };

  useImperativeHandle(ref, () => ({ triggerAtCell, triggerAtPoint }));

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, height: "100%", width: "100%", pointerEvents: interactive ? "auto" : "none" }}
    >
      <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
        <DivGrid
          key={`base-${rippleKey}`}
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor={borderColor}
          fillColor={fillColor}
          baseOpacity={opacity}
          clickedCell={clickedCell}
          interactive={false}
        />
      </div>
    </div>
  );
});

const DivGrid = ({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = "#3f3f46",
  fillColor = "rgba(14,165,233,0.3)",
  baseOpacity = 0.35,
  clickedCell = null,
}) => {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols]);

  const gridStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    opacity: baseOpacity,
    pointerEvents: "none",
    mixBlendMode: "normal",
  };

  return (
    <div className={cn(className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        let delay = 0;
        let duration = 0;
        if (clickedCell) {
          const distance = Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx);
          delay = Math.max(0, distance * 45);
          duration = 260 + distance * 120;
        }
        return (
          <div
            key={idx}
            className={clickedCell ? "animate-cell-ripple" : undefined}
            style={{
              border: `1px solid ${borderColor}`,
              backgroundColor: fillColor,
              width: cellSize,
              height: cellSize,
              boxShadow: "inset 0 0 36px rgba(0,0,0,0.14)",
              '--delay': `${delay}ms`,
              '--duration': `${duration}ms`,
            }}
          />
        );
      })}
    </div>
  );
};
