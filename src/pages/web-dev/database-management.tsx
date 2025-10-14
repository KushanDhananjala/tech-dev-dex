import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContent from '../../components/MDXContent';
import { ArrowLeft, Database } from 'lucide-react';

const DatabaseManagement = () => {
  return (
    <>
      <SEO
        title="Database Management"
        description="Master database management with SQL and NoSQL databases. Learn PostgreSQL, MongoDB, Redis, and database optimization techniques for scalable applications."
        keywords={[
          'database management',
          'SQL databases',
          'NoSQL databases',
          'PostgreSQL',
          'MongoDB',
          'Redis',
          'database optimization',
          'database design',
          'data modeling',
          'database performance'
        ]}
        type="article"
        image="/images/web-dev/database-management.svg"
        url="/web-dev/database-management"
        section="Web Development"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/web-dev" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Web Dev
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl mb-6">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Database Management
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Master SQL and NoSQL databases with PostgreSQL, MongoDB, Redis, and optimization techniques
            </p>
          </div>

          {/* MDX Content */}
          <div className="max-w-4xl mx-auto">
            <MDXContent 
              content={{
                title: "Database Management: SQL and NoSQL Guide",
                description: "Master database management with SQL and NoSQL databases. Learn PostgreSQL, MongoDB, Redis, database design, optimization, and security.",
                author: "TechDevDex Team",
                date: "2024-12-15",
                category: "Web Development",
                tags: ["Database", "SQL", "NoSQL", "PostgreSQL", "MongoDB", "Redis"],
                readTime: "22 min",
                featured: true,
                rating: 5,
                content: `
# Database Management: Mastering Data Storage

Database management is crucial for building scalable applications. This comprehensive guide covers SQL and NoSQL databases, optimization techniques, and best practices.

## Types of Databases

### SQL Databases (Relational)

**Characteristics:**
- ACID compliance
- Structured data with relationships
- SQL query language
- Strong consistency
- Vertical scaling

**Popular Options:**
- PostgreSQL
- MySQL
- SQLite
- Microsoft SQL Server

### NoSQL Databases (Non-Relational)

**Characteristics:**
- Flexible schema
- Horizontal scaling
- Various data models
- Eventual consistency
- High performance

**Types:**
- Document (MongoDB)
- Key-Value (Redis)
- Column-family (Cassandra)
- Graph (Neo4j)

## PostgreSQL - The Advanced SQL Database

### Getting Started

\`\`\`bash
# Install PostgreSQL
# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib

# macOS
brew install postgresql

# Start PostgreSQL service
sudo service postgresql start
\`\`\`

### Basic Operations

\`\`\`sql
-- Create database
CREATE DATABASE myapp;

-- Connect to database
\\c myapp;

-- Create table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email, age) VALUES 
    ('John Doe', 'john@example.com', 30),
    ('Jane Smith', 'jane@example.com', 25);

-- Query data
SELECT * FROM users WHERE age > 25;
\`\`\`

## MongoDB - Document Database

### Getting Started

\`\`\`bash
# Install MongoDB
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS
brew install mongodb-community

# Start MongoDB
sudo service mongod start
\`\`\`

### Basic Operations

\`\`\`javascript
// Connect to MongoDB
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('myapp');

// Create collection and insert documents
const users = db.collection('users');

// Insert single document
await users.insertOne({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    },
    hobbies: ['reading', 'gaming', 'coding'],
    createdAt: new Date()
});
\`\`\`

## Redis - In-Memory Database

### Getting Started

\`\`\`bash
# Install Redis
# Ubuntu/Debian
sudo apt-get install redis-server

# macOS
brew install redis

# Start Redis
redis-server
\`\`\`

### Basic Operations

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

// String operations
await client.set('user:1', JSON.stringify({ name: 'John', email: 'john@example.com' }));
const user = await client.get('user:1');

// Hash operations
await client.hSet('user:1', 'name', 'John Doe');
await client.hSet('user:1', 'email', 'john@example.com');
const userName = await client.hGet('user:1', 'name');
\`\`\`

## Database Design Patterns

### Normalization (SQL)

\`\`\`sql
-- First Normal Form (1NF) - Atomic values
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Second Normal Form (2NF) - No partial dependencies
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Database Optimization

### Query Optimization

\`\`\`sql
-- Use EXPLAIN to analyze queries
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'john@example.com';

-- Optimize with proper indexing
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);

-- Use LIMIT for large result sets
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;
\`\`\`

### Connection Pooling

\`\`\`javascript
// Node.js with pg (PostgreSQL)
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 20, // Maximum number of connections
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});
\`\`\`

## Security Best Practices

### SQL Injection Prevention

\`\`\`javascript
// Bad - SQL injection vulnerable
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// Good - Parameterized queries
const query = 'SELECT * FROM users WHERE email = $1';
const result = await client.query(query, [email]);
\`\`\`

## Database Testing

### Unit Tests

\`\`\`javascript
// Database test setup
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

// Test database operations
describe('User Model', () => {
    test('should create a new user', async () => {
        const userData = {
            name: 'John Doe',
            email: 'john@example.com',
            age: 30
        };
        
        const user = new User(userData);
        const savedUser = await user.save();
        
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userData.name);
    });
});
\`\`\`

## Conclusion

Database management is essential for building scalable applications. Choose the right database type based on your data structure, query patterns, and scalability requirements.

**Key Takeaways:**
- Understand the differences between SQL and NoSQL
- Design your database schema carefully
- Implement proper indexing for performance
- Use connection pooling for efficiency
- Plan for backup and disaster recovery
- Monitor database performance regularly
- Implement security best practices

---

*Ready to explore API development? Check out our [API Development](/web-dev/api-development) guide for building robust APIs.*`
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatabaseManagement;
