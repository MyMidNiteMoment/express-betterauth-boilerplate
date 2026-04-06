# Express + Better-Auth Boilerplate - Setup Guide

✅ **Your project is ready to run!**

## Current Setup Status

- ✅ **Environment Variables**: Configured in `.env` with Neon PostgreSQL connection
- ✅ **Database Connection**: Neon PostgreSQL is connected
- ✅ **Better-Auth Secret**: Set to `stU1BxUNYvL1zd3eZaq0G9F9OifDwMsO`
- ✅ **All Dependencies**: Defined in `package.json`

## Environment Variables

Your `.env` file is configured with:
- **DATABASE_URL**: Neon PostgreSQL connection string
- **BETTER_AUTH_SECRET**: Your authentication secret (32+ characters)
- **BETTER_AUTH_URL**: http://localhost:4000
- **PORT**: 4000
- **Frontend URL**: http://localhost:3000

## Getting Started

### 1. Install Dependencies
```bash
npm install
```
Or with other package managers:
```bash
pnpm install
# or
yarn install
# or
bun install
```

### 2. Run Database Setup
The application will automatically:
- Test the database connection
- Run Better-Auth migrations
- Create required tables

This happens on the first run of `npm run dev`.

### 3. Start the Development Server
```bash
npm run dev
```

The server will start on **http://localhost:4000**

## Available Commands

```bash
# Start development server with auto-reload
npm run dev

# Run type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm run start

# Generate Better-Auth types
npm run auth:generate

# Run Better-Auth migrations manually
npm run auth:migrate
```

## Project Structure

```
src/
├── index.ts                    # Entry point
├── app.ts                      # Express app configuration
├── bootstrap/
│   └── database-setup.ts       # Database initialization & migrations
├── config/
│   ├── env.config.ts           # Environment variable validation
│   ├── database.config.ts      # Database connection setup
│   ├── email.config.ts         # Email transporter configuration
│   └── config.ts               # App configuration
├── middleware/                 # Express middleware
├── routes/                     # API routes
├── utils/
│   ├── auth.ts                 # Better-Auth instance
│   ├── logger.util.ts          # Winston logger setup
│   └── ...                     # Other utilities
└── types/
    └── database.types.ts       # Kysely database types
```

## Key Technologies

- **Framework**: Express.js 5.x
- **Authentication**: Better-Auth 1.6+
- **Database**: PostgreSQL (via Neon)
- **Query Builder**: Kysely (type-safe queries)
- **Validation**: Zod
- **Logger**: Winston
- **Rate Limiting**: express-rate-limit
- **Security**: Helmet, CORS

## Database Schema

Better-Auth automatically creates:
- `user` table - User accounts and profiles
- `session` table - Active user sessions
- `account` table - OAuth/social login connections
- `verification` table - Email verification tokens
- `twoFactors` table - 2FA settings

## Email Configuration

To enable email features (password reset, verification), update `.env`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_SECURE=false
```

## Rate Limiting

Configured in `.env`:
- `RATE_LIMIT_WINDOW_MS`: 900000 ms (15 minutes)
- `RATE_LIMIT_MAX_REQUESTS`: 100 requests per window

## Logging

- **Development**: HTTP, debug, info, warn, error logs
- **Production**: Warn and error logs only
- Logs are stored in `/logs` directory with daily rotation

## Security Features

- ✅ Helmet for HTTP headers
- ✅ CORS configuration
- ✅ Rate limiting per IP
- ✅ Password hashing with bcrypt (configurable rounds)
- ✅ Session-based authentication
- ✅ Input validation with Zod

## Troubleshooting

### Database Connection Failed
- Verify `DATABASE_URL` in `.env` is correct
- Check Neon dashboard for connection status
- Ensure your IP is in the Neon allowlist

### Port Already in Use
Change `PORT` in `.env` to an available port (e.g., 5000)

### Better-Auth Migration Errors
Run migrations manually:
```bash
npm run auth:generate
npm run auth:migrate
```

## Next Steps

1. ✅ Dependencies installed
2. ✅ Environment variables configured  
3. ✅ Database connected
4. ✅ Ready to run: `npm run dev`

## Resources

- [Better-Auth Documentation](https://www.better-auth.com)
- [Express.js Guide](https://expressjs.com)
- [Kysely Documentation](https://kysely.dev)
- [Neon PostgreSQL](https://neon.tech)

---

**Your Express + Better-Auth backend is ready to go! 🚀**
