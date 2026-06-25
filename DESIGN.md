# DESIGN.md

## Project Name

Tudey Coffee Social / Tudey Brew & Kitchen

## Source Reference

This design system is derived from the uploaded Tudey Coffee HTML project:

- `index.html`
- `assets/css/style.css`
- `script.js`
- image assets in `assets/images/`

The current website is a one-page coffee shop landing page with sections for hero, about, menu, signature products, gallery, testimonials, location, and footer.

---

# Design Objective

Create a modern, premium, youthful coffee shop website for Tudey Coffee that feels clean, tropical, cozy, and social.

The website should communicate:

- premium urban coffee experience
- comfortable social space
- warm café lifestyle
- artisan drinks and food
- friendly hangout atmosphere
- strong local café identity in Bogor

The final design should feel like:

> A modern tropical coffee social house where young people can hang out, work, take photos, and enjoy signature coffee.

Avoid making the design feel:

- too corporate
- too dark
- too generic
- too restaurant-like
- too luxury fine dining
- too playful or childish

---

# Brand Personality

The brand should feel:

- warm
- premium
- youthful
- social
- relaxed
- modern
- tropical
- welcoming
- slightly artisan

Tone of voice should be friendly, simple, and lifestyle-oriented.

Example brand phrases:

- Coffee, Friends and good times
- Make Your Day at Tudey
- Lebih dari sekadar kopi
- Sanctuary kopi urban Anda
- Hanya Ada Disini
- Sudut Cerita Dalam Secangkir Kopi

---

# Visual Direction

The current visual direction is:

- Apple-style minimalist layout
- tropical premium coffee aesthetic
- clean white space
- deep green brand color
- subtle coffee brown accent
- rounded modern cards
- large product images
- bento-style gallery
- soft animation and hover interaction

The design should balance:

- clean premium UI
- coffee shop warmth
- tropical leaves and coffee plant accents
- social café lifestyle photography
- strong mobile usability

---

# Color System

## Primary Colors

### Tudey Green

`#1A4B3F`

Used for:

- main brand accent
- primary buttons
- highlighted text
- active navigation
- signature visual identity
- premium tropical feel

### Tudey Green Hover

`#0F2E26`

Used for:

- button hover states
- stronger dark green emphasis
- active interactive states

### Tudey Green Light

`rgba(26, 75, 63, 0.1)`

Used for:

- soft badges
- subtle backgrounds
- icon containers
- light brand highlights

### Coffee Brown Accent

`#8B6F47`

Used for:

- price labels
- secondary highlights
- coffee tone accents
- warm visual contrast

---

## Neutral Colors

### White

`#FFFFFF`

Used for:

- main page background
- cards
- modal content
- clean premium sections

### Gray 50

`#F9FAFB`

Used for:

- soft section backgrounds
- menu/testimonial backgrounds
- subtle content separation

### Gray 100

`#F3F4F6`

Used for:

- hover backgrounds
- modal close button
- image placeholders

### Gray 200

`#E5E7EB`

Used for:

- borders
- dividers
- navbar scrolled border
- card outlines

### Gray 300

`#D1D5DB`

Used for:

- stronger borders
- secondary outlines

### Gray 600

`#6B7280`

Used for:

- body descriptions
- secondary text
- metadata

### Gray 900

`#111827`

Used for:

- primary text
- dark footer
- strong headings

---

# Typography System

## Current Font Direction

The project imports:

- Great Vibes
- Playfair Display
- Inter

The active CSS uses an Apple-style system stack:

```css
-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif
```

## Recommended Typography Usage

### Primary UI Font

Use system sans-serif or Inter for clean readability.

Best for:

- body text
- navigation
- buttons
- cards
- menu descriptions
- location information

### Display / Editorial Font

Use Playfair Display only for selective editorial emphasis if needed.

Best for:

- hero headline accent
- section title accent
- premium campaign headings

### Script Font

Use Great Vibes carefully and sparingly.

Best for:

- decorative accent only
- not for long text
- not for primary navigation or buttons

---

# Type Scale

## Hero Heading

Use large responsive typography:

```css
font-size: clamp(3rem, 6vw, 5rem);
font-weight: 700;
letter-spacing: -0.03em;
line-height: 1;
```

Hero text should feel bold, clean, and highly readable.

## Section Heading

```css
font-size: clamp(2rem, 4vw, 3rem);
font-weight: 700;
line-height: 1.1;
```

## Card Heading

```css
font-size: clamp(1.25rem, 2.5vw, 1.875rem);
font-weight: 600;
```

## Body Text

```css
font-size: clamp(1rem, 2vw, 1rem);
line-height: 1.7;
font-weight: 400;
color: #6B7280;
```

---

# Spacing System

Use the existing spacing scale from the CSS.

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 5rem;
--spacing-3xl: 8rem;
```

## Usage Rules

- Use generous vertical spacing for premium feeling.
- Use `8rem` section padding on desktop.
- Reduce section padding on mobile.
- Keep cards breathable with clear visual separation.
- Avoid cramped grid layouts.

---

# Layout System

## Container

Use a centered max-width layout:

```css
max-width: 1200px;
margin: 0 auto;
padding: 0 2rem;
```

## Section Pattern

Each section should generally follow:

1. section wrapper
2. `.container`
3. `.section-title`
4. section-specific layout/grid

## Layout Style

Use:

- large hero layout
- two-column about section
- card-based menu grid
- signature product cards
- bento gallery layout
- horizontal testimonial carousel
- two-column location section
- dark minimal footer

---

# Page Structure

The current site is a one-page landing page with these sections:

1. Promo Modal
2. Fixed Navigation
3. Mobile Menu
4. Hero
5. About
6. Menu
7. Signature Drinks/Food
8. Photo Gallery
9. Testimonials
10. Location
11. Footer

This structure should be maintained unless the project is expanded into multiple pages.

---

# Section Guidelines

## 1. Promo Modal

Purpose:

- capture Instagram follow
- promote first-purchase discount
- increase social conversion

Current content:

- coffee icon
- “Dapatkan Diskon Spesial!”
- `20% OFF`
- Instagram CTA

Design rules:

- use white modal card
- rounded 24px corners
- dark overlay with blur
- coffee plant decorative background
- strong discount typography
- clear close button
- keep CTA highly visible

Avoid:

- making modal too large on mobile
- hiding close button
- too much text

---

## 2. Navigation

Purpose:

- provide fast section access
- stay visible while scrolling
- keep brand identity visible

Current style:

- fixed top navbar
- transparent on hero
- white blurred background after scroll
- logo changes between white and dark
- desktop nav links
- mobile hamburger menu

Navigation links:

- Beranda
- Tentang
- Menu
- Signature
- Galeri
- Review
- Lokasi

Design rules:

- use fixed position
- keep navbar lightweight
- use backdrop blur only when scrolled
- highlight active link
- keep mobile menu simple and readable

---

## 3. Hero Section

Purpose:

- create strong first impression
- show product identity
- drive users to menu or location

Current content:

- badge: “Coffee, Friends and good times”
- headline: “Make Your Day at Tudey”
- description about coffee, stories, and special drinks
- CTA: “Lihat Menu” and “Cari Lokasi”
- Google rating
- iced coffee product image
- discover arrow

Visual direction:

- premium tropical hero
- strong product focus
- deep green and warm accent
- large headline
- product image as hero visual

Design rules:

- keep hero visually spacious
- headline must be the dominant element
- CTA buttons should appear above the fold
- product image should feel premium and clean
- discover cue should guide users downward

---

## 4. About Section

Purpose:

- explain Tudey Coffee story and philosophy
- add emotional and artisan credibility

Current content:

- “Kisah Kami”
- “Tudey coffee & Social”
- story founded in 2020
- sustainable coffee beans
- urban sanctuary positioning
- CTA to menu

Layout:

- split text and image layout
- large typography
- clean whitespace

Design rules:

- use warm storytelling
- keep paragraphs readable
- use one strong lifestyle/coffee image
- avoid overly formal copy

---

## 5. Menu Section

Purpose:

- present core coffee products
- make prices easy to scan
- encourage exploration

Current products include:

- Espresso Klasik
- Cappuccino Artisan
- Pour Over Single Origin
- Nitro Cold Brew
- Velvet Flat White
- other coffee items

Design rules:

- use rounded menu cards
- product image on top
- text content below
- price as strong coffee-brown accent
- use hover lift interaction
- keep image ratios consistent

Card content should include:

- image
- product name
- short description
- price

---

## 6. Signature Section

Purpose:

- highlight exclusive drinks and food
- create “only at Tudey” appeal
- increase perceived value

Current products include:

- Honey Lavender Latte
- Matcha Espresso Fusion
- Brown Sugar Maple Macchiato
- Spaghetti Aglio Olio
- Nasi Ayam Krispi
- Nasi Beef Saos Mentai

Visual style:

- product-focused cards
- decorative coffee plant assets
- subtle 3D hover/parallax card effect

Design rules:

- make signature cards feel more premium than regular menu cards
- use larger images
- allow more detailed descriptions
- keep pricing visible
- use subtle hover perspective on desktop only

---

## 7. Photo Gallery Section

Purpose:

- show café atmosphere
- support social-media appeal
- create trust through real visuals

Current layout:

- bento grid
- mixed large, tall, wide, and medium tiles
- image overlay labels

Gallery categories:

- Suasana Café
- Latte Art
- Coffee Beans
- Barista at Work
- Café Interior
- Coffee Pour

Design rules:

- use bento layout on desktop
- stack cleanly on mobile
- use dark gradient overlay for text readability
- add subtle image zoom on hover
- maintain warm, natural café imagery

---

## 8. Testimonials Section

Purpose:

- build trust
- show social proof
- reinforce café experience

Current style:

- light gray background
- testimonial cards
- star rating
- avatar initials
- auto-scrolling carousel effect

Design rules:

- keep cards clean and readable
- star rating should be visually clear
- avatar initials should use brand accent background
- movement should be slow and subtle
- avoid distracting fast marquee motion

---

## 9. Location Section

Purpose:

- help visitors find the café
- make contact/reservation easy
- support local SEO

Current content:

- Tudey Social House
- address in Bogor
- email
- phone
- opening hours
- WhatsApp reservation CTA
- embedded Google Maps

Design rules:

- use two-column layout on desktop
- info card on left, map on right
- stack on mobile
- keep address very readable
- WhatsApp CTA must be easy to tap
- map should have rounded corners

---

## 10. Footer

Purpose:

- close the page with brand and navigation
- provide contact and social links

Current style:

- dark gray/black background
- light text
- three-column footer
- social icons
- copyright line

Design rules:

- keep footer minimal and clean
- use strong contrast
- include quick links
- include contact information
- keep social icons visible but not oversized

---

# Component System

Use reusable components:

- Navbar
- MobileMenu
- PromoModal
- Hero
- SectionTitle
- Button
- MenuCard
- SignatureCard
- GalleryBentoGrid
- TestimonialCard
- LocationInfoCard
- MapEmbed
- Footer

Each component should be:

- reusable
- responsive
- accessible
- easy to maintain
- visually consistent with the Tudey brand

---

# Button System

## Primary Button

Use for main actions such as:

- Lihat Menu
- Reservasi
- Follow Instagram

Style:

- Tudey Green background
- white text
- rounded shape
- hover lift
- darker green hover

## Secondary Button

Use for lower-priority actions:

- Cari Lokasi
- Temukan Kopi Kami

Style:

- outline or light background
- green/brown text
- subtle hover fill
- rounded shape

## Interaction

Buttons may use:

- `translateY(-3px)` hover lift
- slight scale `1.02`
- smooth transition

Avoid heavy animations or large scale changes.

---

# Card System

## Menu Cards

Use:

- white background
- subtle border
- rounded corners
- soft shadow
- image top
- content bottom
- hover lift

## Signature Cards

Use:

- larger visual emphasis
- premium spacing
- desktop-only perspective hover
- clear product hierarchy

## Testimonial Cards

Use:

- white background
- subtle border
- readable quote text
- star rating
- avatar initials

---

# Image Direction

Current image assets include:

- Tudey iced coffee hero product
- logo white and dark versions
- coffee plant illustrations
- gallery café atmosphere
- gallery latte art
- gallery coffee beans
- gallery barista work
- gallery café interior
- gallery coffee pour
- food product image for beef mentai
- tropical background assets

Use images that feel:

- warm
- natural
- premium
- café lifestyle oriented
- social-media-friendly
- bright enough for youth market

Avoid images that feel:

- corporate
- cold
- overly dark
- artificial
- fine dining luxury
- generic office stock

---

# Animation System

Current JavaScript includes:

- IntersectionObserver slide-up reveal
- smooth anchor scrolling
- navbar background change on scroll
- active nav link highlighting
- mobile menu open/close
- button hover lift
- menu card z-index interaction
- signature card mousemove perspective/parallax
- promo modal delay and close behavior

## Animation Rules

Use:

- subtle fade-up reveal
- smooth scroll
- hover lift
- image zoom
- light parallax only on desktop
- slow testimonial movement

Avoid:

- heavy 3D
- fast motion
- excessive parallax
- animations that hurt mobile performance
- scroll effects that block normal browsing

Motion should feel:

- smooth
- premium
- calm
- friendly

---

# Responsive Design Rules

Mobile experience is critical.

## Desktop

Use:

- wide hero layout
- two-column sections
- bento gallery
- multi-column menu grid
- full navigation links

## Tablet

Use:

- reduced spacing
- 2-column grids where possible
- simplified hero alignment if needed

## Mobile

Use:

- hamburger menu
- stacked content
- single-column cards
- readable heading sizes
- full-width CTA buttons where appropriate
- optimized images
- map with sufficient height
- modal within viewport

Mobile must prioritize:

- fast loading
- clear CTA
- readable text
- easy navigation
- easy reservation/location access

---

# Accessibility Rules

Ensure:

- every image has descriptive alt text
- buttons and links have clear labels
- mobile menu buttons include aria labels
- color contrast remains readable
- focus states are visible
- modal can close with Escape key
- touch targets are large enough
- text is not embedded only inside images

---

# SEO Direction

Use semantic HTML and local SEO.

Recommended keywords:

- Tudey Coffee
- Tudey Social House
- coffee shop Bogor
- coffee shop Tajur Bogor
- café Bogor
- tempat nongkrong Bogor
- kopi Bogor
- café untuk kerja Bogor
- coffee shop aesthetic Bogor
- coffee and social house

Metadata should include:

- clear page title
- description mentioning Bogor and Tudey Coffee
- local business structured data if possible
- Open Graph image for sharing
- descriptive alt text

---

# Performance Rules

Do:

- optimize all images
- convert large images to WebP/AVIF where possible
- lazy-load below-the-fold images
- keep JavaScript minimal
- avoid unnecessary dependencies
- preload critical hero image if needed
- compress gallery images

Do not:

- use oversized uncompressed images
- add heavy animation libraries unless necessary
- autoplay heavy video
- load too many external fonts
- use excessive blur effects

---

# Code Quality Rules

Do:

- maintain clear class naming
- keep CSS variables centralized
- reuse layout utilities
- keep components modular if converted to Astro/React
- preserve semantic section structure
- keep interactions in `script.js`

Do not:

- duplicate repeated card markup unnecessarily in component-based versions
- use inline styles except for third-party embeds when necessary
- hard-code inconsistent colors outside CSS variables
- break existing anchor navigation
- remove accessibility labels

---

# Recommended Improvements

If improving the current website, prioritize:

1. Replace remote Unsplash images with optimized local assets.
2. Add structured local business schema.
3. Add real Instagram, TikTok, and Google Maps links in footer.
4. Make WhatsApp CTA more visible on mobile.
5. Add menu category filters if the menu grows.
6. Add `loading="lazy"` to non-critical images.
7. Use consistent local image style across all menu cards.
8. Add Open Graph metadata for social sharing.
9. Reduce external font loading if performance becomes an issue.
10. Ensure promo modal does not hurt mobile UX.

---

# Final Experience Goal

The final Tudey Coffee website should feel like:

> A clean, modern, tropical-premium coffee shop website that makes young visitors want to visit, order, take photos, and share the experience.

It should communicate:

- quality coffee
- cozy social atmosphere
- youthful lifestyle
- local Bogor presence
- trustworthy service
- premium but approachable pricing

It should not feel like:

- a generic café template
- an old restaurant website
- a corporate profile
- a fine dining site
- a cluttered promotional page
