# Portfolio architecture

`/` is the public LAC STUDIO portfolio. `/lab` is the existing Design Lab, rendered by the original `DesignLab` component inside the same `DesignProvider` in `lab` scope.

Public pages use one client composition in `components/portfolio/portfolio-app.tsx`: `PortfolioApp` → `DesignProvider` → `PortfolioContent` → shared header, switcher, page structure and footer. Individual route files provide only the page identity or a published project.

The provider has two scopes. `lab` preserves `design`, `category`, `component`, split-view and comparison URL behavior. `portfolio` reads and writes only `design`; this keeps Lab navigation state out of public URLs. A legacy root URL containing Lab-only state such as `category`, `component`, `compare`, `left` or `right` redirects to `/lab` with its query unchanged.

The five visual treatments are scoped to `.portfolio-{design-id}` in `app/portfolio.css`. Shared geometry lives above those presentation scopes. No portfolio route has a design-specific layout branch.

The browser-safe registry is `content/projects.ts`. The initial draft queue is in `content/projects.private.ts`, which no public route or client component imports. Move an approved, public-safe project entry into `publishedProjects` only when it is ready for publication.
