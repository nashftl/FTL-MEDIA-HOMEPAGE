# Website Build Plan

This document outlines the plan for building the web services portfolio website based on the provided Figma designs.

## 1. Project Setup & Structure

- [ ] We will use the existing Vite + React + Tailwind CSS setup. The project structure will be organized as follows to maintain clarity and scalability.

### Folder Structure:

```
/
|-- public/
|   |-- vite.svg
|-- src/
|   |-- assets/
|   |   |-- images/
|   |   |   |-- hero-image.png
|   |   |   |-- project-1.png
|   |   |   |-- project-2.png
|   |   |   |-- ... (other project images)
|   |   |-- icons/
|   |   |   |-- logo.svg
|   |   |   |-- music-icon.svg
|   |   |   |-- utility-icon.svg
|   |   |   |-- web-design-icon.svg
|   |   |   |-- small-business-icon.svg
|   |   |   |-- sun-icon.svg
|   |   |   |-- social-icons.svg
|-- |
|-- components/
|   |   |-- Header.jsx
|   |   |-- Hero.jsx
|   |   |-- Services.jsx
|   |   |-- TechnicalExpertise.jsx
|   |   |-- FeaturedProjects.jsx
|   |   |-- Testimonials.jsx
|   |   |-- ContactForm.jsx
|   |   |-- Footer.jsx
|   |   |-- Button.jsx           # Reusable button component
|   |   |-- SectionTitle.jsx     # Reusable section title component
|-- App.jsx
|-- index.css                # For global styles and Tailwind imports
|-- main.jsx
|-- ... (config files)
```

## 2. Component Breakdown

The website will be broken down into the following reusable React components:

- [x] ** 1. `Header.jsx`**

  - **Purpose:** Main navigation bar.
  - **Elements:**
    - Logo (`WS Web Services`).
    - Navigation links (`Home`, `Services`, `Skills`, `Portfolio`, `Testimonials`, `Contact`).
    - Theme toggle button (light/dark mode).
    - "Get Started" button.
  - **Functionality:**
    - Sticky/fixed positioning on scroll.
    - Smooth scrolling to corresponding sections.
    - Responsive hamburger menu for mobile.

- [x] ** 2. `Hero.jsx`**

  - **Purpose:** The main landing section.
  - **Elements:**
    - Headline: "Professional Web Services for Every Need".
    - Sub-headline with a brief description.
    - "View My Work" button.
    - "Explore Services" button.
    - Image collage/graphic on the right.
    - Key stats section: "50+ Projects Completed", "4 Service Categories", "100% Client Satisfaction".

- [x] ** 3. `Services.jsx`**

  - **Purpose:** To showcase the four main service areas.
  - **Elements:**
    - Section Title: "Services That Drive Results".
    - Four service cards (Music, Utility, Web Design, Small Business).
    - Each card contains:
      - An icon.
      - Service title.
      - A brief description.
      - A list of specific offerings.

- [x] ** 4. `TechnicalExpertise.jsx`**

  - **Purpose:** To list the technologies and tools used.
  - **Elements:**
    - Section Title: "Technical Expertise".
    - Four category boxes (Frontend, Backend, Music Tech, Tools & Platform).
    - Each box contains a list of technology tags (e.g., React, Node.js, Web Audio API, Docker).
  - *Note:* Refined card styling with darker borders, darker tag backgrounds, adjusted padding, `font-semibold` for headings, and `text-gray-500` for tags for a sleeker, more minimalistic look.

- [x] ** 5.`FeaturedProjects.jsx`**
    - *Note:* Implemented filtering functionality based on category and tech tags, with dynamic button styling for the active filter.

  - **Purpose:** A gallery of selected projects.
  - **Elements:**
    - Section Title: "Featured Projects".
    - Filter buttons (`All`, `Music`, `Utility`, `Web Design`, `Small Business`).
    - A grid of project cards.
    - Each card contains:
      - Project image.
      - Category tag.
      - Project title and description.
      - Technology tags.
      - "Live Demo" button.
      - "Code" button/link.
  - **Functionality:**
    - Filtering logic to show/hide projects based on the selected category (All, Music, Utility, Web Design, Small Business).
    - Projects will also be implicitly categorized by their Frontend/Backend technology tags.
    - "Live Demo" links will point to Netlify deployments.
    - "Code" links will point to GitHub repositories.

- [ ] ** 6.`Testimonials.jsx`**

  - **Purpose:** To display client feedback.
  - **Elements:**
    - Section Title: "Client Success Stories".
    - A grid of testimonial cards.
    - Each card contains:
      - Star rating.
      - Client quote.
      - Client avatar, name, and company.

- [ ] ** 7. `Contact.jsx`**

  - **Purpose:** Contact information and form.
  - **Elements:**
    - Section Title: "Let's Work Together".
    - Left side with contact details:
      - Email
      - Phone
      - Location
      - Response Time
    - Right side with a contact form:
      - Name (input)
      - Email (input)
      - Subject (input)
      - Message (textarea)
      - "Send Message" button.

- [ ] ** 8. `Footer.jsx`**
  - **Purpose:** The website footer.
  - **Elements:**
    - Logo and brief company description.
    - Links columns (Services, Quick Links, Connect).
    - Social media icons.
    - Copyright notice (`© 2025 Web Services. All rights reserved.`).

## 3. Asset Management

- [ ] **Images:** All images from the Figma design will be optimized for the web and stored in `src/assets/images/`.
- [ ] **Icons:** Icons will be sourced (e.g., from a library like Heroicons or created as SVGs) and placed in `src/assets/icons/`. This includes the main logo, service icons, and social media icons.

## 4. Styling Plan

- [ ] **Framework:** We will use Tailwind CSS for all styling, leveraging its utility-first approach.
- [ ] **Global Styles:** `src/index.css` will contain base styles, font imports, and Tailwind CSS layer directives (`@tailwind base;`, `@tailwind components;`, `@tailwind utilities;`).
- [ ] **Colors:** The color palette from the Figma design (primarily dark backgrounds with white/light-gray text and accent colors) will be configured in `tailwind.config.js` for easy reuse.
- [ ] **Fonts:** The specific fonts used in the design will be imported (e.g., from Google Fonts) in the main `index.html` or `index.css`.
- [ ] **Responsiveness:** All components will be built with a mobile-first approach, using Tailwind's responsive breakpoints (`sm`, `md`, `lg`, `xl`).

## 5. Build & Development Workflow

- [x] 1.  **Component Scaffolding:** Create empty files for all components listed in section 2.
- [x] 2.  **Static Markup:** Build out the JSX for each component with static, hardcoded content to match the design. (Includes adding `aria-label` for accessibility and visually hidden headings where appropriate.)
- [x] 3.  **Styling:** Apply Tailwind CSS classes to style each component.
- [ ] 4.  **Component Integration:** Assemble all components into the main `App.jsx` file.
- [ ] 5.  **Interactivity:** Implement dynamic functionality (e.g., project filtering, form handling, mobile menu).
- [ ] 6.  **Testing:** Perform manual testing across different browsers and screen sizes to ensure responsiveness and functionality.
