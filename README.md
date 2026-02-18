# Resume Builder

A modern, full-stack resume builder application that helps users create professional resumes quickly and easily. Built with React, Node.js, Express, and MongoDB.

## Features

- **Multiple Templates** - Choose from 4 professional resume templates
- **Quick Creation** - Build your resume in minutes
- **Instant Download** - Download resumes as PDF
- **Dark Theme** - Modern dark UI with Tailwind CSS
- **User Authentication** - Secure login and registration
- **Save & Edit** - Save multiple resumes and edit anytime
- **AI Assistant** - Smart suggestions for resume content
- **Responsive Design** - Works on all devices

### Frontend

- React 19.1.1
- Tailwind CSS 4.1.13
- Redux Toolkit 2.9.0
- React Router DOM 7.9.3
- Vite 7.1.7
- Lucide React (Icons)
- html2pdf.js

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcrypt
- ImageKit (Image handling)
- Multer (File uploads)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd RESUMEBUILDER
```

2. **Install server dependencies**

```bash
cd server
npm install
```

3. **Install client dependencies**

```bash
cd client
npm install
```

4. **Configure environment variables**

Create `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Run the application**

Start the backend server:

```bash
cd server
npm start
```

Start the frontend development server:

```bash
cd client
npm run dev
```

The application will open at `http://localhost:5173`

```

```
