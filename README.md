# 🎨 3D Web Experience - Immersive Design Showcase

A stunning, modern web page featuring advanced 3D graphics, smooth animations, and impressive interactive elements. Built with Three.js, CSS animations, and pure JavaScript.

## ✨ Features

### 🎯 Core Features
- **Three.js 3D Graphics**: Real-time 3D rendering with rotating geometric objects
- **Particle System**: Dynamic particle animations in the background
- **Smooth Animations**: 60FPS performance with fluid transitions
- **Responsive Design**: Works seamlessly on all devices
- **Interactive Elements**: Mouse hover effects and parallax scrolling
- **Modern UI**: Glassmorphism, gradients, and neon colors

### 🌟 Visual Elements

#### Hero Section
- **Dynamic 3D Canvas**: Interactive Three.js scene with rotating objects
- **Animated Typography**: Pop-in text animations with staggered delays
- **Scroll Indicator**: Animated mouse wheel indicating scrollable content
- **CTA Button**: Gradient button with hover effects and glow

#### 3D Cards Showcase
- **Flip Animation**: Cards rotate 180° on hover
- **Geometric Models**: 
  - Rotating Cube with gradient
  - Reflective Sphere
  - Pyramid with shadow effects
  - Torus with glow
- **3D Perspective**: Depth effects based on mouse position
- **Backdrop Blur**: Modern glassmorphic design

#### Features Section
- **Rotating 3D Icons**: Cube, Sphere, Pyramid, Torus models
- **Hover Effects**: Cards lift and glow on interaction
- **Staggered Animations**: Each card appears with a delay
- **Gradient Text**: Eye-catching color transitions

#### Parallax Section
- **Depth Layers**: Multiple layers with different scroll speeds
- **Color Shifts**: Animated gradient background
- **Immersive Content**: Fullscreen presentation

#### Visualization Grid
- **Pulsing Animation**: Items pulse with staggered timing
- **Grid Layout**: Responsive grid that adapts to screen size
- **Interactive Items**: Hover effects with glowing borders
- **Color Gradients**: Modern color schemes

### 🎮 Interactive Features
- **Mouse Follow**: Cards tilt based on cursor position
- **Smooth Scrolling**: Scroll-to-section navigation
- **Keyboard Shortcuts**: Press 'L' to toggle 3D lighting
- **Form Validation**: Contact form with visual feedback
- **Custom Cursor**: Themed cursor with circle indicators

## 🚀 Getting Started

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/kamalesh4044/3d-web-showcase.git
   cd 3d-web-showcase
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in a modern web browser
   open index.html
   ```

### No Build Required!
This project uses CDN-hosted Three.js, so there's no build step needed.

## 🌐 Live Demo

**View the live site:** [https://kamalesh4044.github.io/3d-web-showcase](https://kamalesh4044.github.io/3d-web-showcase)

## 📁 File Structure

```
3d-web-showcase/
├── index.html       # Main HTML structure
├── styles.css       # Comprehensive styling and animations
├── script.js        # Three.js setup and interactions
└── README.md        # This file
```

## 🛠 Technologies Used

- **Three.js** (r128): 3D graphics library
- **CSS3**: Modern animations and effects
  - CSS Grid & Flexbox for layout
  - Keyframe animations
  - 3D transforms
  - Gradient backgrounds
  - Backdrop filters
- **Vanilla JavaScript**: No frameworks required
  - IntersectionObserver for scroll animations
  - Event listeners for interactivity
  - RequestAnimationFrame for smooth performance

## 🎨 Color Scheme

```css
--primary-color: #00d4ff (Cyan)
--secondary-color: #ff00ff (Magenta)
--tertiary-color: #00ff88 (Bright Green)
--accent-color: #ff6b00 (Orange)
--dark-bg: #0a0e27 (Deep Navy)
--light-bg: #1a1f3a (Navy)
```

## 📱 Responsive Breakpoints

- **Desktop**: Full experience with all effects
- **Tablet** (≤ 768px): Optimized layout and animations
- **Mobile** (≤ 480px): Touch-friendly interface
- **Memory Detection**: Reduces effects on low-end devices

## ✨ Animation Showcase

### Entrance Animations
- `fadeInUp`: Fade in while moving up
- `popIn`: Scale and rotate entrance
- `scaleIn`: Grow from small to full size
- `slideDown`: Nav bar slides down on load

### Interactive Animations
- `rotate3d`: 360° rotation on multiple axes
- `gridPulse`: Pulsing glow effect
- `parallaxShift`: Layered scrolling effect
- `scrollWheel`: Animated scroll indicator

### Hover Effects
- Card flip (3D perspective)
- Item scale and glow
- Button elevation
- Text color transition

## 🎮 User Interactions

### Mouse Events
- **Hover Cards**: Tilt based on cursor position
- **Hover Features**: Lift and glow
- **Hover Links**: Underline animations

### Scroll Events
- **Parallax**: Background layers move at different speeds
- **Reveal**: Elements animate in when scrolled into view
- **Fade**: Smooth transitions as you scroll

### Keyboard Shortcuts
- **L**: Toggle 3D scene lighting

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... */
}
```

### Adjust 3D Scene
Modify `script.js` to:
- Change object sizes and positions
- Adjust lighting intensity
- Modify particle count
- Change rotation speeds

### Add Content
Replace placeholder content in `index.html`:
- Add your company name/logo
- Update section titles
- Add custom text content
- Link to your projects

## 📊 Performance

- **60 FPS**: Smooth animations on modern devices
- **WebGL**: Hardware-accelerated 3D rendering
- **Lazy Loading**: Elements animate in on scroll
- **Optimized**: No external dependencies except Three.js
- **Lightweight**: ~50KB total (excluding Three.js)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚫 Known Limitations

- Requires WebGL support for 3D rendering
- Performance depends on device capability
- Some animations disabled on low-end devices
- Best experienced on desktop with modern GPU

## 🎓 Learning Resources

- **Three.js**: https://threejs.org/
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations
- **Web APIs**: https://developer.mozilla.org/en-US/docs/Web/API

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Suggestions:

- Add more 3D models
- Create additional animation effects
- Implement audio reactivity
- Add dark/light mode toggle
- Create variations for different industries

## 🎯 Future Enhancements

- [ ] Audio visualization
- [ ] Touch gestures for mobile
- [ ] Theme switcher
- [ ] More complex 3D models
- [ ] Performance metrics dashboard
- [ ] Accessibility improvements
- [ ] Animation timing controls

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Ensure WebGL is enabled
3. Test on a modern browser
4. Check device performance metrics

## 🌟 Credits

Created with passion for modern web design and 3D graphics.

---

**Enjoy the experience! 🚀✨**

Last Updated: 2026-06-09

---
<br>
<div align="center">
  <a href="https://github.com/kamalesh4044/3d-web-showcase">
    <img src="https://komarev.com/ghpvc/?username=kamalesh4044-3d-web-showcase&label=PROJECT+VIEWS&color=00ff88&style=for-the-badge" alt="Views"/>
  </a>
</div>

