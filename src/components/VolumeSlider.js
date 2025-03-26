import React, { useState, useEffect, useRef } from "react";
import '../assets/CSS/VolumeSlider.css';
import { gsap } from 'gsap';

export const VolumeSlider = () => {

const [volume, setVolume] = useState(0);
  const volumeIconRef = useRef(null);
  const startTimeRef = useRef(null);
  const indicatorRef = useRef(null);

  const maxRotation = -75; // Max rotation angle
  const trackWidth = 200; // Adjust according to your design

  const handleMouseDown = () => {
    startTimeRef.current = Date.now();

    // Animate rotation using GSAP
    gsap.to(volumeIconRef.current, {
      rotation: maxRotation,
      duration: 1.5, // Slow rotation
      ease: "power1.out",
    });
  };

  const handleMouseUp = () => {
    if (!startTimeRef.current) return;

    const holdTime = Date.now() - startTimeRef.current;

    // Map hold time to volume (0-100)
    const newVolume = Math.min(100, (holdTime / 1000) * 100);
    setVolume(Math.round(newVolume));

    // Reset rotation of the icon
    gsap.to(volumeIconRef.current, {
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });

    // Calculate indicator final position
    const finalPosition = (newVolume / 100) * trackWidth; 

    // Animate indicator "throwing" effect
    gsap.fromTo(
      indicatorRef.current,
      { x: -30, y: -50, opacity: 0, scale: 0.5 }, // Start from the icon position
      { x: finalPosition, y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" } // Land smoothly
    );
  };

  return (
    <div id="volume-slider">
    <svg ref={volumeIconRef} id="volume-icon" class="volume-icon" viewBox="-1 0 33 32" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <defs>
        <mask id="circle-mask" x="-1" y="0" width="33" height="32">
            <circle cx="-1" cy="16" r="33" fill="white" id="circle-mask-shape" />
        </mask>

        <mask id="volume-mask" x="-1" y="0" width="33" height="32">
            <path d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439zM13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z" fill="white" mask="url(#circle-mask)"></path>
        </mask>

        <linearGradient id="grad-1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="20%" stop-color="#9a88aa" />
            <stop offset="100%" stop-color="#6e33a5" />
        </linearGradient>
        </defs>

        <path class="volume-icon-bg" fill="#cbc8ce" d="M22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439zM13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"></path>

        <rect x="-1" y="0" width="33" height="32" mask="url(#volume-mask)" fill="url(#grad-1)" />
    </svg>

    <div class="volume-track">
        <span id="volume-indicator" class="volume-indicator" ref={indicatorRef}></span>
        <input type="hidden" name="volume" id="volume-input" value={volume} />
    </div>
    </div>
  );
}