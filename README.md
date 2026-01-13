🚀 Lumina

An AI-first platform for creating content, images, and ideas — faster.

Lumina is a full-stack AI SaaS application that brings together multiple AI tools into one clean, modern dashboard. From generating images and articles to reviewing resumes and sharing creations with the community, Lumina is built to streamline creative workflows.

🌍 Live Application

👉 Try it here:
🔗 https://quick-ai-gray-eight.vercel.app/

✨ What Lumina Does

Lumina helps you:

Generate AI images from text prompts

Edit images (background & object removal)

Write long-form articles with AI

Create catchy blog titles

Review and improve resumes (PDF supported)

Share creations publicly with the community

All features are bundled into a single, secure, user-friendly platform.

🧠 Core Features
AI Utilities

🎨 Image Generation – prompt-based image creation

🧼 Background Removal – clean image cutouts

✂️ Object Removal – erase unwanted elements

✍️ Article Writer – long-form AI writing

📰 Blog Title Generator – SEO-friendly ideas

📄 Resume Review – AI-based resume feedback

Platform Features

🔐 Authentication & user management

📊 Personal dashboard for saved creations

🌐 Community page to explore public work

⚡ Real-time AI responses

📱 Fully responsive UI

Infrastructure & Security

☁️ Secure media storage

📎 PDF parsing and processing

🧱 Scalable backend architecture

🔁 REST-based API design

🛠️ Technology Stack
Frontend

React 19

Vite

Tailwind CSS

Axios

React Router DOM

Lucide Icons

React Hot Toast

React Markdown

Clerk Authentication

Backend

Node.js

Express 5

PostgreSQL (Neon)

OpenAI API

Cloudinary

Multer

PDF-Parse

Deployment & Services

Vercel (Frontend)

Neon (Database)

Cloudinary (Media)

Clerk (Auth)

🧩 Project Structure
QuickAI/
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   ├── assets/         # Static files
│   │   └── utils/          # Helpers & configs
│
├── server/                 # Backend (Express)
│   ├── configs/            # DB, Cloudinary, Multer
│   ├── controllers/        # Business logic
│   ├── routes/             # API endpoints
│   ├── middlewares/        # Auth & guards
│   └── server.js           # App entry

🚦 Getting Started
Requirements

Node.js (v18+)

npm

PostgreSQL database

OpenAI API key

Cloudinary account

Clerk account

Setup Instructions
1. Clone the repository
git clone https://github.com/yourusername/QuickAI.git
cd QuickAI

2. Install dependencies
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

Environment Configuration
Client (.env)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_BASE_URL=http://localhost:3000

Server (.env)
OPENAI_API_KEY=sk-...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
DATABASE_URL=...
CLERK_SECRET_KEY=sk_test_...
PORT=5000

Run Locally
# Backend
cd server
npm run server

# Frontend
cd client
npm run dev

🤖 AI Capabilities Breakdown
Image Intelligence

Prompt-to-image generation

High-quality outputs

Style & size control

Image Editing

Background removal

Object removal

Clean and accurate results

Text & Documents

AI-written articles

Blog title suggestions

Resume scoring & feedback

PDF text extraction

🔌 API Overview
AI Endpoints (/api/ai)
Method	Route	Purpose
POST	/generate-image	Image generation
POST	/remove-background	Background removal
POST	/remove-object	Object removal
POST	/write-article	Article generation
POST	/generate-titles	Blog titles
POST	/review-resume	Resume analysis
User Endpoints (/api/users)
Method	Route	Purpose
GET	/profile	User profile
POST	/creations	Save creation
GET	/creations	User creations
GET	/community	Public feed
🚀 Deployment Notes

Frontend deployed on Vercel

Backend deployed with environment-based config

PostgreSQL hosted on Neon

Media handled via Cloudinary

📈 Performance Highlights

Lighthouse score ~95

Optimized bundle size

Fast AI response times

Mobile-first design

Secure auth flow

🤝 Contributions

Contributions are welcome.

Fork the repo

Create a feature branch

Commit your changes

Push to your fork

Open a pull request

📄 License

This project is licensed under the ISC License.

📬 Contact & Support

📧 Email: frontend.master@outlook.com

🐙 GitHub: https://github.com/luukogod

<div align="center">
Lumina ✨

Create faster. Think bigger. Build smarter with AI.

Made with ❤️ using the PERN stack

</div>