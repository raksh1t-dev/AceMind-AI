# AceMind AI

AI-powered study platform that helps students generate exam-focused notes, revision sheets, viva preparation material, diagrams, and downloadable PDFs using AI.

---

## Features

- AI-powered note generation
- Exam-focused revision sheets
- Viva preparation mode
- Deep study mode
- PDF export functionality
- Credit-based usage system
- Google Authentication (Firebase)
- Notes history tracking
- Stripe payment integration
- Diagram and chart support

---

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- Firebase Authentication

### Payments
- Stripe

---

## Screenshots

### Home Page

![Home](screenshots/home.png)

### Notes Generation

![Notes](screenshots/notes.png)

### Notes History

![History](screenshots/history.png)

### Pricing Page

![Pricing](screenshots/pricing.png)

---

## Installation

### Clone Repository

```bash
git clone YOUR_REPO_URL
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

---

## Environment Variables

### Client (.env)

```env
VITE_FIREBASE_APIKEY=your_key
```

### Server (.env)

```env
MONGO_URI=your_mongodb_uri
STRIPE_SECRET_KEY=your_key
CLIENT_URL=http://localhost:5173
```

---

## Future Improvements

- AI Quiz Generation
- Flashcards
- Study Analytics Dashboard
- Multi-language Support

---

## Author

**Rakshit Tomar**
