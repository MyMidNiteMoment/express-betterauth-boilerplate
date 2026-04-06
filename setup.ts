#!/usr/bin/env node

/**
 * Quick setup script to verify database connection and run migrations
 */

import http from 'http';
import app from './src/app';
import { env } from './src/config/env.config';
import { testConnection, closeDatabase } from './src/config/database.config';
import { logger } from './src/utils/logger.util';
import setupDatabase from './src/bootstrap/database-setup';

async function setup() {
  console.log('🚀 Starting Express + Better-Auth setup...\n');

  try {
    // Test database connection
    console.log('📡 Testing database connection...');
    const dbConnected = await testConnection();
    
    if (!dbConnected) {
      console.error('❌ Failed to connect to database');
      process.exit(1);
    }
    console.log('✅ Database connection successful!\n');

    // Setup database (tables, migrations)
    console.log('🗄️  Setting up database schema...');
    await setupDatabase();
    console.log('✅ Database setup complete!\n');

    // Close connection after setup
    await closeDatabase();

    console.log('✨ Setup completed successfully!');
    console.log(`\nTo start the server, run: npm run dev`);
    console.log(`Server will listen on: http://localhost:${env.PORT}\n`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    await closeDatabase();
    process.exit(1);
  }
}

setup();
