# Authentication & Authorization API

A Node.js API with JWT authentication, Google OAuth2 login, and role-based access (User/Admin). Built with Express and MongoDB.

## Features
- JWT-based login and registration
- Google OAuth2 login
- Role-based access control
- MongoDB database

## Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/auth-api.git
cd auth-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Run the server
```bash
npm run dev
```

## Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/google`
- `GET /api/users/profile`
- `GET /api/users/admin`
