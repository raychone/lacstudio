# Five-system integration

The portfolio consumes the existing `designRegistry` and the existing `DesignProvider`; it does not create a second theme provider. Tactile remains the default. The selected design persists under `lac-design-system.active-design`, validates saved values through the registry, and is reflected in the `design` query parameter.

The switcher is a keyboard-accessible radio group in the shared header. Selecting a design preserves the current path, project slug and query string; it changes only `design`. It does not scroll the page or replace form fields. All motion is disabled by the provider's reduced-motion state.

Visual mapping:

- Tactile: warm cream, sage, rounded material depth.
- Nocturne: deep navy, lavender and luminous glass-like surfaces.
- Editorial: paper, ink, serif display type and fine rules.
- Brutalist: off-white, near-black, safety orange and hard mechanical edges.
- Playground: warm canvas, electric blue, lime/coral accents and organic geometry.

The five styles are intentionally distinct, but their shared layout dimensions are defined only once in the layout contract.
