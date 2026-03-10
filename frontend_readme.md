Recommended Website Technical Stack and Solution
1. Front-end Stack

The recommended front-end framework is Next.js, deployed in a self-hosted manner rather than on Vercel. It is well suited for an official company website because it provides strong SEO support, supports a flexible SSR + SSG hybrid rendering model, offers a clean routing structure, and makes it easy to separate static content pages from interactive branded sections. It also integrates very well with the React 3D ecosystem. If the site is mostly static content with only light interaction, Astro is also a strong option, but for a more immersive brand experience with heavier React-based interactions, Next.js remains the better primary choice.

The project should be built with TypeScript for maintainability, type safety, and long-term engineering quality.

For styling, Tailwind CSS is the preferred solution. It is especially suitable for this visual direction because it handles translucent surfaces, backdrop blur, soft gradients, layered shadows, and responsive tuning very effectively. The frosted-glass effect should be understood as a CSS-based implementation, not something provided directly by a UI library.

For the component layer, the recommended combination is shadcn/ui + Radix UI. This stack is ideal for a premium brand website because the team fully owns the component source code, avoids rigid prebuilt visual styles, and can easily turn buttons, cards, dialogs, navbars, and dropdowns into a custom glassmorphism design system. Radix UI also provides a strong accessibility and behavior foundation. Compared with MUI, Ant Design, or Element Plus, this approach avoids spending time overriding heavy default styles.

An additional requirement is internationalization (i18n) with support for both English and Chinese, including language-aware routing, localized content structure, and scalable multilingual page management.

2. 3D and Animation Stack

For 3D rendering, the recommended stack is React Three Fiber + drei. This is suitable for building hero-section abstract forms, floating glass cubes, a minimal luminous AI mascot or cube robot, subtle scene-based parallax, and refined material/light effects such as bloom, depth, and glass-like transmission.

For post-processing, use @react-three/postprocessing for effects such as bloom, depth-of-field, vignette, and very subtle chromatic softness when needed. These effects should be used carefully and minimally, because excessive post-processing reduces clarity and weakens the professional tone of an official website.

For UI motion and interaction, use Framer Motion. It works well for section reveal animations, hover motion, navigation transitions, text fade/slide effects, and lightweight parallax. If the site later requires highly choreographed storytelling sections, GSAP + ScrollTrigger can be introduced, but otherwise the motion stack should remain simple and maintainable.

3. Frosted Glass UI / Component Strategy

There is no truly production-grade component library that solves glassmorphism perfectly out of the box. The correct approach is to build the effect through a combination of:

Base component system: shadcn/ui + Radix UI

Styling system: Tailwind CSS

Custom design tokens, including:

glass background alpha

blur radius

border alpha

elevation

glow strength

gradient family

This token-based approach makes it possible to create a consistent and reusable visual language for glass cards, glass navigation, translucent panels, and other branded UI surfaces.