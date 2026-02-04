# Xai – Intelligence Workspace

A high-fidelity interactive product experience prototype demonstrating cutting-edge frontend engineering with advanced motion, 3D interactions, and thoughtful UI/UX design. This project transforms the concept of data intelligence into a visually compelling, fully-interactive single-page application.

## Project Overview

Xai Intelligence Workspace is a premium product prototype built with Next.js, React Three Fiber, Framer Motion, and GSAP. It communicates a clear product narrative: **Raw Data → Structured Analysis → Actionable Insights → Intelligent Automations**.

### Design Philosophy

- **Calm but Powerful**: Dark theme with minimal color palette (primary purple, accent blue-violet, and neutral grays)
- **Technically Confident**: Clean typography (Geist), generous spacing, and intentional micro-interactions
- **Enterprise Focus**: Designed for decision-makers with clear information hierarchy and professional restraint
- **No Marketing Fluff**: Every interaction serves a purpose; the UI itself explains the product

## Technology Stack

### Frontend Framework
- **Next.js 16** (App Router) - Modern React framework with server-side rendering
- **React 19.2** - Latest React with built-in performance optimizations
- **TypeScript** - Type-safe development

### Animation & Motion
- **Framer Motion 12.30** - Declarative animation library for UI choreography
- **GSAP 3.12** - Advanced timeline and scroll-triggered animations
- **React Three Fiber 8.15** - React renderer for Three.js
- **Three.js r128** - 3D graphics library

### UI & Styling
- **Tailwind CSS 4.1** - Utility-first CSS with OKLCH color system
- **Shadcn/ui** - High-quality component library
- **Recharts 2.15** - Composable React chart library

### Data Visualization
- **Recharts** - For dashboard analytics (area, bar, and line charts)
- **Canvas-based rendering** - Custom 3D particles and geometries with Three.js

## Project Structure

```
/
├── app/
│   ├── layout.tsx         
│   ├── page.tsx            
│   └── globals.css        
├── components/
│   ├── layout/
│   │   ├── header.tsx     
│   │   └── footer.tsx     
│   ├── sections/
│   │   ├── hero-section.tsx           
│   │   ├── insight-flow-section.tsx   
│   │   ├── dashboard-section.tsx      
│   │   └── wow-section.tsx            
│   ├── 3d/
│   │   ├── data-transformation.tsx    
│   │   └── interactive-cluster.tsx    
│   └── ui/                
├── lib/
│   └── utils.ts           
├── hooks/
│   └── use-mobile.tsx      
└── package.json            

```

### Setup Instructions

1. **Clone the repository**:
```bash
git clone <https://github.com/Subahan-1D/Xai-Intelligence-Workspace.git>
cd xai-intelligence-workspace
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run development server**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys automatically
4. Environment variables (if any) configured in Vercel dashboard


## Future Enhancement Ideas

1. **Internationalization**: Add multi-language support
2. **Dark/Light Theme Toggle**: Switch themes dynamically
3. **Advanced Analytics**: Integration with real data sources
4. **Customizable Dashboard**: Let users add/remove chart types
5. **Product Animations**: Video showcase of actual features
6. **Accessibility**: Enhanced ARIA labels and keyboard navigation
7. **Mobile Optimization**: Simplified 3D for lower-end devices


## Contact & Support

For questions or feedback:
- Create an issue in the repository
- Email: subahanislam523@gmail.com

---

**Built with ❤️ using Next.js, React Three Fiber, and Framer Motion**
