# HISTRONG UI — Desktop Interactive Demo

Deliver a desktop-only, high-fidelity clickable prototype of the approved HISTRONG architectural bamboo fibre panel brand UI designs, faithfully preserving the typography, layouts, proportions, palettes, and imagery from the provided designs while adding interactive functionality.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and interactive preferences were confirmed during Phase 1:
> - **Navigation Structure**: Strict top navigation bar only, matching the exact layout in the PDF (`Home`, `About`, `Project`, `Product`, `Blog`, `Contact`, and social icons/currency selector).
> - **Quantity Estimator**: Fully interactive live calculator on the Product Detail screen with real-time area and panel counts, unit switching (Meters vs Feet), waste percentage, and a working "Add to Quote Shortlist" drawer.
> - **Interactive Enhancements**: Product filter and color swatch switching, contact and inquiry form validation with success modals, multi-branch office switcher on Contact Us, and interactive image zoom / room mockup toggle modals.

---

## 1. Overview & Core Concept

- **What It Does**: A desktop interactive web prototype of HISTRONG's architectural surfaces brand. It provides seamless client-side navigation between all 8 desktop screens identified from the source designs, allowing clients, architects, and management to interact with material collections, test dimension calculators, inspect architectural case studies, switch global branch offices, and submit project inquiries.
- **Target Audience / Persona**: Management, prospective property owners, interior designers, and architects seeking sustainable, high-performance bamboo fibre wall and ceiling panel solutions.
- **Key Value**: Exact visual fidelity to the approved PDF design without generic replacements or mobile-collapsed layouts, paired with realistic desktop interactions.

---

## 2. User Experience & Visual Design

### 8 Desktop Pages Architecture

1. **Home (`/` or `Home` tab)** (PDF p. 1):
   - Hero banner: *"Bamboo fibre interior panels — A natural feeling. A considered finish."* with CTA *"Explore the material"* and jump links (*"Discover the possibilities ↓"*).
   - Who We Are & Metric counter section: *8++ Projects Completed, 5++ Happy Clients, 17 Awards Won, 10 Years Experience*.
   - 9 Advantages carousel/grid: *01 Fire Retardant, 02 Environment-Friendly & Non-Toxic, 03 Speedy Installation, 04 Minimal Maintenance, 05 Waterproof, 06 Termite Resistant, 07 Acoustic Insulation, 08 Thermal Insulation, 09 Highly Customizable Contemporary Designs* with interactive detail modals.
   - Application spaces split: *01 Walls with character* & *02 Ceilings, considered*.
   - Finishes & Customization feature card with specs: *3m Standard lengths, Up to 6m Expandable sizes*, and finish samples.
   - Built Environments gallery with filter tags (*All Work, Residential, Interiors, Commercial, Cultural*).
   - New Collection spotlight cards (*HCZ245T-320, HCZ160S-320, HCZ145T-320* in 淡雅梧桐 Nogal with direct links to Product Detail).
   - Blog highlights grid (6 recent editorial articles).
   - Start a Conversation inquiry form with real-time field validation and location map preview.
   - Global footer with navigation links, collection list, and social profiles.

2. **About HiStrong (`About` tab)** (PDF p. 22):
   - Header with brand intro: *"Eco-friendly materials. Thoughtful interiors. A greener way to shape the spaces we call home."*
   - Editorial story: *"Top Bamboo Fibre Panel Brand in Asia"* and *"Love the earth like how you love your home."*
   - What Drives Us: *Our vision* and *Our mission*.
   - The HiStrong Way: Interactive Core Values grid (**H**olistic Approach, **I**nitiative, **S**tandard, **T**eamwork, **R**apport, **O**rganize, **N**oble, **G**rowth).
   - HiStrong's Philosophy & Team feature (*"Think Efficiently, Act Meticulously"*).
   - Direct CTA to start conversation.

3. **Projects / Case Study: Villa, Alam Sari (`Project` tab)** (PDF p. 4):
   - Project header breadcrumb: `Home / Projects / Luxury Villa`.
   - Editorial hero with architectural photography and project metadata (*Residential villa, Architecture & interior design, Quiet forms. Natural textures.*).
   - Design Approach: *Light as a material, A continuous living landscape, Warmth in the details*.
   - Inside & Out photo gallery: *The Living Space* and *The Terrace*.
   - Interactive Tactile Palette chips: *Honed stone, Warm timber, Muted brass*.
   - Navigation links: *"Back to all projects"* and *"Next project: Town Villa, Taman Siaga"*.
   - Project inquiry callout banner.

4. **Services: Bamboo Fibre Panels (`Services` view / direct link)** (PDF p. 7):
   - Breadcrumb: `Services / Bamboo fibre panels`.
   - What We Do: Section *01 Leading Bamboo Fibre Panel Brand* with *"Enquire about bamboo panels"* CTA.
   - Material & Space architectural study: *Interior walls* and *Ceilings* coordination.
   - Dedicated Services Inquiry Form (*Name, Email, Application area: walls/ceilings/both, Project details*).

5. **Product Collection (`Product` tab)** (PDF p. 10):
   - Breadcrumb: `Home / Product collection`.
   - Category tabs: *HISTRONG Bamboo FibrePanel (BFP)*, *Bamboo Fiber Fluted Panel*, *Integrated Aluminium Ceiling*.
   - Sidebar filters: Finish (*Wood grain [18], Stone effect [8], Solid colour [6]*), Colour tone (*Light & natural, Warm & medium, Dark & rich*), and "Reset all".
   - Color / Tone swatches bar: *All Tones, Charcoal & Slate, Linen & Cream, Morandi Sage, Natural Wood Grain, Metallic & Gold, Pearl White & Marble*.
   - Product grid with hover preview, Chinese & English titles (*淡雅梧桐 Nogal, Natural oak, Smoked walnut, Soft ash*), pricing (RM289.00, RM198.00, Enquire for pricing), and pagination.
   - Application Areas visual showcase (*Living Room, Bedroom, Bathroom / Wet Area, Walkways, Patio & Pergola, Car Porch, Balcony, Roof Eaves*).

6. **Product Detail & Estimator (`HCZ245T-320` view)** (PDF p. 13):
   - Breadcrumb: `Home / Product / Bamboo Fibre Panel / HCZ245T-320` with *"← Back to collection"*.
   - Product header: *HCZ042T-329 半透浅胡桃 / HCZ245T-320 淡雅梧桐 Nogal* with price `RM289.00/panel`.
   - Media viewer with tabs: *Profile & product details* vs *Room mockup*, thumbnail swatch selector, and interactive zoom modal.
   - **Interactive Wall Panel Quantity Estimator**:
     - Unit selector toggle: `METERS` vs `FEET`.
     - Inputs: Wall width (m/ft), Wall height (m/ft), Waste allowance (%).
     - Real-time calculations: Total surface area ($m^2$ or $ft^2$), Assumed panel coverage ($3.600\,m^2$), Panels needed count.
     - Action button: *"ADD MEASUREMENT TO QUOTE SHORTLIST ↗"* which opens the interactive quotation shortlist drawer.
   - Tabs: *Product details*, *Installation & care*, *Related products*.
   - *"Before you begin: From selection to installation"* guidance.
   - Related profiles showcase (*HCZ160S-320, HCZ145T-320*).

7. **Blog Article: Modern Living (`Blog` tab)** (PDF p. 16):
   - Breadcrumb: `← Back to Our Blogs`.
   - Article header: *Thoughtful Spaces — Modern living in a thoughtfully designed home* (HISTRONG, 27 Jan 2022, Press Released).
   - In this article jump links / table of contents.
   - Editorial article typography with photography and pull quotes (*"The most considered spaces leave room for life, rather than asking life to fit around them."*).
   - Related articles grid with direct navigation.

8. **Contact Us (`Contact` tab)** (PDF p. 19):
   - Breadcrumb: `Home / Contact Us`.
   - Branch office switcher tabs:
     1. *MALAYSIA · HQ*: HISTRONG Design (M) Sdn Bhd (Seri Kembangan, Selangor).
     2. *HISTRONG (Shanghai Branch)*: 上海城市家庭体验馆.
     3. *HISTRONG (Penang Kiosk)*: Meng Seong Decoration & Designs.
   - Contact details card with active Waze and Google Maps links, telephone, email, WhatsApp button, and operating hours.
   - Full inquiry form: Name, Contact Number, Email, File upload simulation, Message, and validation.
   - QR Code card: *"Scan here to add contact"* with interactive QR card.
   - Social channels matrix: Facebook, Instagram, YouTube, LinkedIn, TikTok, 小红书, Lemon8.

---

## 3. Visual Identity & Design System

- **Color Palette**:
  - Warm Architectural Neutral Canvas: `#FBFBF9` / `#F8F8F5`
  - Deep Architectural Slate & Header / Footer: `#1A1D20` / `#23272B`
  - Earth Warm Ochre / Accent Gold: `#9E8058` / `#A3835B`
  - Subtle Borders & Hairlines: `#E6E5E0` / `rgba(0, 0, 0, 0.08)`
  - Muted Editorial Text: `#6A6D71`
  - High-Contrast Charcoal Headings: `#1E2226`
- **Typography**:
  - Headings & Editorial Display: Elegant Serif (`Playfair Display`, `Cormorant Garamond`, serif) paired with clean geometric architecture sans (`Plus Jakarta Sans`, sans-serif).
  - Tabular Numerals: `font-mono tabular-nums` for dimensions, pricing (RM), and estimator statistics.
- **Motion & Micro-Interactions**:
  - Subtle page fade-in on screen transitions using Framer Motion (`motion/react`).
  - Card hover lifts and image zoom reveals.
  - Smooth parallax tilt on the hero showcase panel.

---

## 4. Technical Architecture & Component Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    Top Navigation Bar                       │
│  Logo [HISTRONG 海创]  •  Links [Home, About, Project...]  │
└──────────────────────────────┬──────────────────────────────┘
                               │ Current Page State
┌──────────────────────────────▼──────────────────────────────┐
│                       Active Screen                         │
│  ┌─────────────────┬───────────────────┬─────────────────┐  │
│  │   HomeView      │    AboutView      │   ProjectView   │  │
│  ├─────────────────┼───────────────────┼─────────────────┤  │
│  │  ServicesView   │   ProductCatalog  │  ProductDetail  │  │
│  ├─────────────────┼───────────────────┼─────────────────┤  │
│  │    BlogView     │    ContactView    │  ShortlistDrawer│  │
│  └─────────────────┴───────────────────┴─────────────────┘  │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    Global Footer Component                  │
│  Brand Statement • Explore Links • Collection • Socials     │
└─────────────────────────────────────────────────────────────┘
```

### State & Interaction Stores

- `currentPage`: `'home' | 'about' | 'project' | 'services' | 'product' | 'product-detail' | 'blog' | 'contact'`
- `selectedBranch`: `'hq' | 'shanghai' | 'penang'`
- `catalogFilters`: Category, finish type, color tone, search keyword
- `estimatorState`: Unit (`m` vs `ft`), width, height, waste percentage, calculated panels, total area
- `shortlistItems`: Persisted list of measured panels ready for quotation request
- `modalState`: Active image zoom modal, finish detail modal, or quotation submission success modal

---

## 5. Verification Plan

1. **Compilation Check**: Run `compile_applet` to confirm zero TypeScript compilation errors.
2. **Page Navigation Check**: Verify every navigation link in the top bar, footer, and in-page CTA switches correctly between all 8 pages without broken links or reload flicker.
3. **Estimator Math Validation**: Verify wall dimensions correctly calculate area in $m^2$ and $ft^2$, apply waste factor, and calculate panel counts accurately.
4. **Form Interactivity Check**: Test input validation, error messaging, and success feedback on the Contact and Project Inquiry forms.
5. **Interactive Controls**: Test branch switching on Contact Us, category/color filtering in Product Collection, room mockup toggle on Product Detail, and quote shortlist drawer.
