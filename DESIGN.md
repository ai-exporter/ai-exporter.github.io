# PRODUCT VISUAL IDENTITY
Product: AI Chat Exporter Chrome Extension
Vibe/Aesthetic: "Tactile Editorial Engineering" 
Target Emotion: Hand-crafted, premium, highly engineered, physical, and deeply private.

## CORE DIRECTIVES (FATAL ERRORS IF IGNORED)
1. DO NOT CHANGE THE TEXT COPY. You are allowed to change HTML tags, layout, DOM structure, and Tailwind classes, but the actual written text must remain 100% identical to the source file.
2. NO STANDARD SHADOWS. Do not use generic Tailwind shadows (e.g., `shadow-lg`, `shadow-xl`). All shadows must be harsh, 0px blur, solid offset shadows to create a physical "cardboard" effect.
3. NO GRADIENTS OR GLOWS. Stop using default AI "SaaS" aesthetics. Backgrounds are solid or textured. Borders are crisp.

## VISUAL TOKENS & TAILWIND RULES

### 1. Color Palette (Paper & Ink)
- **Background:** `bg-[#FAF9F6]` (Off-white/Alabaster paper) - NEVER use pure white.
- **Text Primary:** `text-[#0F0F0F]` (Inky Black).
- **Surface Cards:** `bg-white` (For floating elements over the off-white background).
- **Accents (Use sparingly for floating cards or highlights):** 
  - Soft Lavender: `bg-[#E5D9F2]`
  - Mint Green: `bg-[#D1E9D2]`
  - Terminal Dark: `bg-[#18181B]` (Only use this for the inside of the JSON/Markdown code preview windows).

### 2. Component Architecture (Physical & Floating)
- **Borders:** Every card, button, and floating UI element MUST have a crisp, solid black border: `border-[1.5px] border-[#0F0F0F]`.
- **Physical Shadows:** Use this exact utility class for floating elements: `shadow-[4px_4px_0_0_#0F0F0F]`.
- **Border Radius:** Use `rounded-xl` for the outer cards to soften the harsh shadows.
- **Asymmetry:** Do not use perfectly symmetrical grids. Stagger elements. Let images or code mockups break out of their containers slightly.

### 3. Typography (Editorial Serif + Code)
- **Headings (H1/H2/H3):** Use a high-end, elegant Serif font (e.g., 'Playfair Display', 'Instrument Serif', or 'Newsreader'). This provides the "Editorial/Magazine" trust factor.
- **Body Text & UI Labels:** Clean, highly legible Sans-Serif (e.g., 'Inter' or system UI).
- **Code/Data Windows:** All Markdown, JSON, and technical terms MUST be rendered in a Monospace font ('JetBrains Mono' or 'Geist Mono') inside dark terminal containers.

### 4. Organic Accents
- Introduce absolute-positioned SVG elements (using raw SVG code in the React components) that look like thin, hand-drawn scribbles, squiggly underlines, or curved arrows pointing to important features (like the "100% Private" badge).
