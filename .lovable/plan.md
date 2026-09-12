# Cinematic Motion Upgrade

## What will improve
- Keep Verdant Studio’s existing dark botanical identity and content unchanged.
- Add a refined opening sequence so the image, moonlight, headline, and supporting copy arrive in a deliberate cinematic rhythm.
- Upgrade the Philosophy centerpiece into a scroll-directed scene with depth, controlled subject movement, glow, and filaments.
- Make the full-width leaf reveal feel organically grown rather than simply uncovered.
- Give services and portfolio items smoother staggered reveals, tactile pointer motion, and more intentional image movement.
- Improve mobile menu transitions and interactive feedback while preserving clear navigation.
- Respect reduced-motion settings and avoid heavy effects on smaller devices.

## Technical details
- Use GSAP timelines and ScrollTrigger for sequenced and scroll-scrubbed storytelling, with React-safe setup and cleanup.
- Use Motion for small state and interaction transitions where it is lighter and clearer.
- Keep existing CSS ambient loops only where they support the scene; remove overlapping transform ownership that could cause jitter.
- Validate desktop and mobile rendering, scrolling, navigation, reduced motion, and runtime/build health.

## Scope
- Frontend motion and presentation only; no branding, copy, backend, or page-structure changes.
