"use client"

import React, { useState, useEffect } from 'react';
import '../style/cursor.css'

// type MouseEvent = React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

function Cursor() {
    const [mousePosition, setMousePosition] = useState({left:0,top:0})

		useEffect(() => {
			document. addEventListener('mousemove', (e) => handleMouseMove(e))
		},[])
    const handleMouseMove = (e: globalThis.MouseEvent) => {
        setMousePosition({left:e.pageX,top:e.pageY})
    }
    return ( 
        <div className="inner-cursor" style={{left:mousePosition.left, top:mousePosition.top}}/>
    );
}

export default Cursor;