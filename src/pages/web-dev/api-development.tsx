import React from 'react';
import SEO from '@/components/SEO';
import Link from 'next/link';
import MDXContent from '../../components/MDXContent';
import { ArrowLeft, Zap } from 'lucide-react';

const APIDevelopment = () => {
  return (
    <>
      <SEO
        title="API Development"
        description="Master API development with REST and GraphQL. Learn authentication, rate limiting, documentation, and best practices for building scalable APIs."
        keywords={[
          'API development',
          'REST',
          'GraphQL',
          'API authentication',
          'API documentation',
          'OpenAPI Swagger',
          'rate limiting',
          'security headers',
          'API testing',
          'performance optimization'
        ]}
        type="article"
        image="/images/web-dev/api-development-og.jpg"
        url="/web-dev/api-development"
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              API Development
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Master REST and GraphQL APIs with authentication, documentation, and best practices for scalable development
            </p>
          </div>

          {/* MDX Content */}
          <div className="max-w-4xl mx-auto">
            <MDXContent 
              content={{
                title: "API Development: Building Robust REST and GraphQL APIs",
                description: "Master API development with REST and GraphQL. Learn authentication, rate limiting, documentation, and best practices for building scalable APIs.",
                author: "TechDevDex Team",
                date: "2024-12-15",
                category: "Web Development",
                tags: ["API", "REST", "GraphQL", "Authentication", "Documentation", "Development"],
                readTime: "20 min",
                featured: true,
                rating: 5,
                content: `# API Development: Building Robust APIs

API development is the backbone of modern applications. This comprehensive guide covers REST and GraphQL APIs, authentication, documentation, and best practices.

## What is an API?

An API (Application Programming Interface) is a set of protocols and tools for building software applications. APIs define how software components should interact.

**Types of APIs:**
- **REST APIs** - Representational State Transfer
- **GraphQL APIs** - Query language for APIs
- **gRPC APIs** - High-performance RPC framework
- **WebSocket APIs** - Real-time communication

## REST API Development

### REST Principles

**REST (Representational State Transfer) follows these principles:**
- **Stateless** - Each request contains all necessary information
- **Client-Server** - Separation of concerns
- **Cacheable** - Responses can be cached
- **Uniform Interface** - Consistent API design
- **Layered System** - Hierarchical layers

### HTTP Methods and Status Codes

\`\`\`javascript
// HTTP Methods
GET    /api/users          // Retrieve resources
POST   /api/users          // Create new resource
PUT    /api/users/123      // Update entire resource
PATCH  /api/users/123      // Partial update
DELETE /api/users/123      // Delete resource

// Status Codes
200 OK                    // Success
201 Created               // Resource created
204 No Content            // Success, no content
400 Bad Request           // Client error
401 Unauthorized          // Authentication required
403 Forbidden             // Access denied
404 Not Found             // Resource not found
500 Internal Server Error // Server error
\`\`\`

### Building a REST API with Express.js

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      success: true,
      data: users,
      count: users.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});
\`\`\`

## GraphQL API Development

### GraphQL Basics

GraphQL is a query language and runtime for APIs that provides a complete description of the data in your API.

**Key Features:**
- **Single Endpoint** - One endpoint for all operations
- **Type System** - Strongly typed schema
- **Client-Specified Queries** - Clients request exactly what they need
- **Real-time Subscriptions** - Live data updates

### Setting up GraphQL with Apollo Server

\`\`\`javascript
const { ApolloServer, gql } = require('apollo-server-express');

// Type definitions
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }
\`;

// Resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    }
  }
};
\`\`\`

## API Authentication

### JWT Authentication

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = generateToken(user);
    
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

## API Documentation

### Swagger/OpenAPI Documentation

\`\`\`javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple user management API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
\`\`\`

## Rate Limiting and Security

### Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

// General rate limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', generalLimiter);
\`\`\`

### Security Headers

\`\`\`javascript
const helmet = require('helmet');

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  }
}));
\`\`\`

## API Testing

### Unit Testing with Jest

\`\`\`javascript
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users should return all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
  
  test('POST /api/users should create a new user', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(newUser)
      .expect(201);
    
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe(newUser.name);
  });
});
\`\`\`

## API Performance Optimization

### Caching Strategies

\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

// Cache middleware
const cache = (duration) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    const cached = await client.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      client.setex(key, duration, JSON.stringify(body));
      res.sendResponse(body);
    };
    
    next();
  };
};
\`\`\`

## Conclusion

API development is essential for building scalable applications. Focus on security, performance, and documentation to create robust APIs.

**Key Takeaways:**
- Choose the right API type (REST vs GraphQL)
- Implement proper authentication and authorization
- Use rate limiting and security headers
- Write comprehensive tests
- Document your APIs thoroughly
- Monitor and optimize performance
- Plan for scalability from the beginning

---

*Ready to explore DevOps and deployment? Check out our [DevOps & Deployment](/web-dev/devops-deployment) guide for CI/CD and cloud deployment strategies.*`
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDevelopment;
