# Authentication & Authorization API

## Features

- JWT-based login and registration
- Google OAuth2 login
- Role-based access control (User/Admin)
- MongoDB for database
- Express.js for REST API

## Setup Instructions

1. Clone the repository

```
git clone https://github.com/yourusername/auth-api.git
cd auth-api
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file and configure your environment variables

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

4. Run the server

```
npm run dev
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user and receive JWT
- `GET /api/auth/google` - Google OAuth2 login
- `GET /api/users/profile` - Get current user profile (JWT required)
- `GET /api/users/admin` - Admin-only route (JWT + role required)

## License

MIT
