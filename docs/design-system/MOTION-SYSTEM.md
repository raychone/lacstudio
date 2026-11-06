# Motion system

## Current implementation

Motion is CSS-first, with React state used to select demonstrations, restart entry animations, and run 4.5-second carousel autoplay. No GSAP, Motion, or Framer Motion dependency is installed.

## Principles

1. Motion explains hierarchy, state, or spatial relationship.
2. The material change comes from shadow and opacity before scale.
3. Hover effects must have focus/touch equivalents or remain decorative.
4. Every non-essential effect needs a reduced-motion result.

## Initial token proposal

| Intent | Duration | Easing |
| --- | ---: | --- |
| feedback | 120–180ms | standard ease-out |
| material press/lift | 180–260ms | emphasized ease-out |
| reveal | 360–640ms | soft cubic-bezier |
| scene transition | 560–800ms | emphasized cubic-bezier |
| autoplay | 4.5s | user-pausable |

## Reduced motion

The root `reduce-motion` class is already toggled in the Lab. Phase B will centralize the matching CSS media/query behavior and ensure it disables autoplay, parallax and decorative continuous motion while retaining useful state feedback.
