# Musthaque Ali — Data Analyst & Business Intelligence Broadsheet Portfolio

An award-caliber, vintage broadsheet editorial portfolio website built for **Musthaque Ali** (Data Analyst & NIT Calicut Graduate), designed in the **Miranda** editorial design system (`#e2dedb` parchment background, `#1d1d1b` ink typography, `#cdc6be` bone cream surfaces, `#c03f13` ember stamp accents, and newspaper editorial layout).

---

## 🌟 Key Features & Sections

1. **Top Dispatch Strip & Live Masthead**:
   - Edition volume metadata, live IST date & time, real-time availability status, and one-click dispatch email copying.
   - Prestige newspaper header (*"THE MUSTHAQUE DISPATCH"*) with double rules and navigation anchors.

2. **Breaking News Wire Ticker**:
   - Continuous marquee ticker displaying key achievements, ETL pipeline completion, and sports honors.

3. **Front Page Lead Story (Hero Section)**:
   - Woodblock-inspired display typography (*"TRANSFORMING RAW DATA INTO STRATEGIC BUSINESS ALPHA"*).
   - Executive editorial bio, stylized halftone portrait frame, official NIT Calicut verified seal, and key metrics breakdown.

4. **Special Reports (Interactive Projects)**:
   - **Retail Sales Analytics Dashboard** (Nesto Retail): Interactive revenue vs margin chart, 100K+ row ETL pipeline details, and drill-down modal.
   - **Supply Chain Performance Dashboard** (Power BI): OTIF fulfillment benchmarks and supplier latency scorecard.
   - **E-Commerce Customer & Sales Analysis** (Boscage Leather Goods): Customer repeat cohorts and basket size expansion.
   - **Hybrid Thermal Management of MOSFET using PCMs** (ANSYS CFD): Computational transient cooling curves and numerical analysis.

5. **Interactive SQL Workbench & Data Ledger**:
   - Live query switcher (Category margins, Supplier OTIF, Store velocity, Customer LTV).
   - Syntax-highlighted editor with interactive *"Execute Query"* runner and dynamic ledger table output.

6. **Career Dispatches**:
   - Chronological field reports for **CodeMe Calicut**, **Boscage Leather Goods**, and **Leeblu International**.

7. **Classifieds & Technical Index**:
   - Tabulated skills matrix across SQL, Relational DBs, Power BI, Tableau, Advanced Excel, and ANSYS Simulation.

8. **Education & Athletics Gazette**:
   - NIT Calicut (B.Tech Mechanical Engineering, CGPA 7.24/10).
   - GHSS Vazhakkad (12th Grade: 99.17% | 10th Grade: Full A+).
   - Inter-NIT Football Champion (NIT Jamshedpur) & All India Inter-University Player.
   - Marketing Head, NITC Super League & NCC B-Certificate.

9. **Dispatch Desk (Contact & Download)**:
   - One-click email copy, direct phone wire, interactive contact telegram, and direct download of the official resume PDF (`Musthaque_Ali_Resume.pdf`).

---

## 🚀 How to Run Locally

### Option 1: Open Directly in Browser
Simply double-click [`index.html`](file:///C:/Users/OMEN/.gemini/antigravity/scratch/musthaque-portfolio/index.html) to open in Chrome, Edge, or Firefox.

### Option 2: Run with Local Web Server
Open terminal in the project directory and run:

```bash
# Using Node.js
npx serve . -l 3000

# Or using Python 3
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 📁 File Structure

```
musthaque-portfolio/
├── index.html              # Main single-page broadsheet editorial portfolio
├── package.json            # Project scripts and metadata
├── README.md               # Documentation and guide
├── css/
│   ├── design-tokens.css   # Miranda color palette, typography variables & grid tokens
│   ├── broadsheet.css      # Masthead, column dividers, ticker, and layout rules
│   └── components.css      # Project cards, SQL workbench, classifieds, modals, and dispatch desk
├── js/
│   ├── resume-data.js      # Structured resume dataset
│   ├── data-sandbox.js     # Live SQL simulation & Chart.js visualizations
│   └── main.js             # Live time, modal controller, email copying, and form handling
└── assets/
    ├── avatar.svg          # Stylized editorial portrait illustration
    ├── stamp-nit.svg       # NIT Calicut alumni seal badge
    ├── stamp-data.svg      # Data Analytics & BI certified stamp
    └── Musthaque_Ali_Resume.pdf  # Downloadable PDF resume
```

---

## 🌐 Free Deployment (GitHub Pages / Vercel / Netlify)

1. **GitHub Pages**:
   - Push this directory to a GitHub repository named `musthaque-portfolio`.
   - In repository **Settings** > **Pages**, choose `main` branch root `/` and Save.
2. **Vercel / Netlify**:
   - Drag & drop the `musthaque-portfolio` folder directly into Vercel or Netlify dashboard for instant HTTPS deployment.
