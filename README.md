# ✨ Lumina

Lumina is a full-stack AI-powered web application that combines multiple creative and productivity tools into one modern interface. It allows users to generate images, write content, review resumes, and explore community creations using AI.

---

## 🌐 Live Demo

🔗 https://quick-ai-gray-eight.vercel.app/

---

## 📌 Features

### 🤖 AI Tools
- Text-to-image generation
- Background removal from images
- Object removal from images
- AI-written articles
- Blog title generation
- Resume review and feedback (PDF supported)

### 👥 Community
- Public feed of published creations
- Like and interact with creations
- Personal dashboard for saved work

### 🔐 User Experience
- Secure authentication with Clerk
- Responsive UI for all screen sizes
- Real-time feedback and notifications

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide Icons
- React Hot Toast
- React Markdown
- Clerk Authentication

### Backend
- Node.js
- Express 5
- PostgreSQL (Neon)
- OpenAI API
- Cloudinary
- Multer
- PDF-Parse

---

## 🧩 Project Structure

```
LUMINA/
├── client/       # React frontend
│   ├── src/
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── utils
│
├── server/       # Express backend
│   ├── configs
│   ├── controllers
│   ├── routes
│   ├── middlewares
│   └── server.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- PostgreSQL database
- OpenAI API key
- Cloudinary account
- Clerk account
- Clipdrop account

---

### Installation

```bash
git clone https://github.com/yourusername/QuickAI.git
cd QuickAI
```

```bash
cd client && npm install
cd ../server && npm install
```

---

### Environment Variables

#### Client (`.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_BASE_URL=http://localhost:3000
```

#### Server (`.env`)
```env
OPENAI_API_KEY=sk-...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLIPDROP_API_KEY=...
DATABASE_URL=...
CLERK_SECRET_KEY=sk_test_...
CLERK_PUBLISHABLE_KEY=pk_test_...
PORT=5000
```

---

### Run Locally

```bash
cd server && npm run server
cd client && npm run dev
```

---

🔌 API Overview

### AI Routes (`/api/ai`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/generate-image` | Generate images from text |
| POST | `/remove-background` | Remove image backgrounds |
| POST | `/remove-object` | Remove objects from images |
| POST | `/write-article` | Generate article content |
| POST | `/generate-titles` | Create blog post titles |
| POST | `/review-resume` | Analyze and score resumes |

### User Routes (`/api/users`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Get user profile |
| POST | `/creations` | Save user creations |
| GET | `/creations` | Get user's creations |
| GET | `/community` | Get community creations |


### 📈 Performance

Fast AI response times
Optimized frontend build
Mobile-friendly layout
Secure authentication flow