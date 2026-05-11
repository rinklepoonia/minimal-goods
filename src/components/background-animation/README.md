# Premium Animated Background

A cinematic, Awwwards-inspired animated website background built with Next.js, GSAP, Three.js, and modern web technologies.

## Features

✨ **Fullscreen WebGL Background** - Fixed 3D scene with floating spheres and particles
🎬 **Cinematic Animations** - GSAP-powered scroll-triggered effects
🖱️ **Mouse Interactions** - Custom cursor and mouse-reactive 3D elements
📜 **Smooth Scrolling** - Lenis integration for buttery-smooth scroll
🎨 **Premium Design** - Blur gradients, noise overlay, and depth effects
📱 **Fully Responsive** - Optimized for mobile and desktop
⚡ **Performance Optimized** - 60fps animations with efficient rendering

## Tech Stack

- **Next.js 15** - React framework
- **GSAP + ScrollTrigger** - Animation library
- **Lenis** - Smooth scroll
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Tailwind CSS** - Styling

## Components

### BackgroundScene.jsx
Main 3D background with:
- Animated distorted spheres
- Floating particles
- Mouse movement interaction
- Scroll-based camera movement
- Gradient overlays and noise texture

### SmoothScroll.jsx
Lenis smooth scrolling wrapper with GSAP integration

### Hero.jsx
Hero section with entrance animations and scroll effects

### ContentSection.jsx
Reusable content sections with scroll-triggered animations

### ParallaxText.jsx
Horizontal scrolling text with parallax effect

### MouseFollower.jsx
Custom cursor with smooth following animation

## Usage

Visit `/bg-animation` to see the full experience.

## Customization

### Change Sphere Colors
Edit the `AnimatedSphere` positions and colors in `BackgroundScene.jsx`:
```jsx
<AnimatedSphere position={[-3, 0, -2]} color="#6366f1" speed={0.5} />
```

### Adjust Scroll Speed
Modify Lenis duration in `SmoothScroll.jsx`:
```jsx
const lenis = new Lenis({
  duration: 1.2, // Increase for slower scroll
  // ...
})
```

### Add More Particles
Change particle count in `BackgroundScene.jsx`:
```jsx
<Particles count={150} /> // Increase for more particles
```

## Performance Tips

- Particle count affects performance - adjust based on target devices
- Distortion material is GPU-intensive - reduce distort value if needed
- Mobile devices automatically disable some effects for better performance
- Use Chrome DevTools Performance tab to monitor frame rate

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari (limited WebGL features)
- Mobile browsers (optimized experience)

## Credits

Inspired by modern Awwwards websites like Dala by CraftedByGC.
