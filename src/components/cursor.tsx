"use client";

import React, { useState, useEffect } from "react";
import "../style/cursor.css";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({ left: -30, top: -30 });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => handleMouseMove(e));
  }, []);
  const handleMouseMove = (e: globalThis.MouseEvent) => {
    setMousePosition({ left: e.clientX, top: e.clientY });
  };
  return (
    <div
      className="inner-cursor"
      style={{ left: mousePosition.left, top: mousePosition.top }}
    />
  );
}

export default Cursor;
