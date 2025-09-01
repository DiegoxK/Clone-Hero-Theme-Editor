# Clone Hero Theme Editor

A modern, web-based, real-time editor for creating and modifying colors.ini theme files for Clone Hero. Built with Next.js, TypeScript, and Zustand.
    
<div>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Zustand-000?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand"/>
  <img src="https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white" alt="Radix UI"/>
</div>

<br/>

<img width="1360" height="768" alt="{B8A485AF-6398-4F6F-ACF7-CFF870809F57}" src="https://github.com/user-attachments/assets/b0f101fd-38e4-43c6-827b-455e8eb69d77" />

## ✨ Key Features

- Real-Time Visual Preview.

- Color Tools.

- Full Undo/Redo Support.

- Import & Export:

- Load existing colors.ini files to edit them.

- Download your new theme as an .ini file.

- Upload your own custom background and highway images to see how your theme looks in your specific setup.

- Dropdown of pre-configured themes.

## 🚀 Tech Stack

- Framework: Next.js (App Router)

- Language: TypeScript

- Styling: Tailwind CSS

- UI Components: shadcn/ui

- State Management: Zustand (with persist and zundo middleware)

## 🏁 Getting Started

Follow these instructions to get a local copy up and running for development.
Prerequisites

    Node.js (v20 or newer)

    pnpm (or npm/yarn)

### Installation

```bash
git clone https://github.com/DiegoxK/clone-hero-theme-editor.git
cd clone-hero-theme-editor
```

### Run the development server:

```bash
pnpm install
pnpm dev
```

## 📋 Available Scripts

```bash
pnpm dev: Starts the development server.

pnpm build: Creates a production-ready build of the application.

pnpm start: Starts the production server.

pnpm presets: This is a special build script. It reads all .ini files from src/lib/presets/ini, automatically migrates them to the latest format, and generates a single TypeScript file (src/lib/presets/index.ts) that the application uses for the theme selector dropdown. Run this script whenever you add or change a preset .ini file.
```

## 🗺️ Future Plans & TODOs

This project is actively being developed. Here are some of the features and improvements planned for the future:

### Core Editor Features

- [ ] **Complete the Drums Tab:**
  - [ ] Create visual preview components for all drum notes (toms, cymbals, kick).
  - [ ] Implement the corresponding color controls in the sidebar.
- [ ] **Whammy & Sustain Effects:**
  - [ ] Add a toggle to preview the `sustain_sp_phrase` color for whammying star notes.

### Application Infrastructure

- [ ] **User Accounts & Database Storage:**
  - [ ] Implement user authentication (e.g., using NextAuth.js or Clerk).
  - [ ] Set up a database (e.g., Supabase, Vercel Postgres) to save user themes.
  - [ ] Create a "My Themes" page for logged-in users to manage their saved themes.
- [ ] **Community Theme Gallery:**
  - [ ] Develop a public page to browse, search, and filter themes created by the community.
  - [ ] Allow users to "like," clone, and download themes created by others.

## 🐞 Known Issues & Potential Improvements

This editor aims to be as accurate as possible, but replicating a game engine's rendering perfectly in a web browser its challenging. Here are a few known visual discrepancies where contributions would be highly valued:

- Hit Flame Accuracy: The striker_hit_flame effect is visually functional but isn't a 1:1 match to the in-game appearance.

- Color Blending for Open Notes: The rendered colors for the note_open and striker_hit_flame_open effects are very close but can appear slightly off compared to the game.

**Contributions are welcome! If you're interested in helping with any of these features, please feel free to open an issue to discuss it.**

## 🙏 Acknowledgements

This project was heavily inspired by the original web-based color editor created by Saadbruno. Many of the initial concepts, INI parsing logic, and the core idea were adapted from his great work.

[Saadbruno's Clone Hero Color Editor](https://github.com/saadbruno/clone-hero-color-editor)

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.


