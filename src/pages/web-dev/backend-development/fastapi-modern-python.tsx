import React from 'react';
import SEO from '../../../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Clock, Server, Star, User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FastAPIModernPython = () => {
  return (
    <>
      <SEO
        title="FastAPI: Modern Python APIs"
        description="Create high-performance APIs with FastAPI, automatic documentation, and type hints. Complete guide to building modern Python web APIs with FastAPI framework."
        keywords={[
          'FastAPI',
          'Python APIs',
          'modern web development',
          'automatic documentation',
          'type hints',
          'async programming',
          'high performance APIs',
          'Python web framework',
          'API development',
          'backend development'
        ]}
        type="article"
        image="/images/web-dev/backend-development/fastapi-guide.svg"
        url="/web-dev/backend-development/fastapi-modern-python"
        publishedTime="2024-11-20"
        section="Backend Development"
        tags={['FastAPI', 'Python', 'Backend Development']}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/web-dev/backend-development" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Backend Development
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              FastAPI: Modern Python APIs
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Create high-performance APIs with FastAPI, automatic documentation, and type hints. Complete guide to building modern Python web APIs with FastAPI framework.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">18 min read</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-slate-700 dark:text-slate-300">TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-slate-700 dark:text-slate-300">5.0 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
              <Image 
                src="/images/web-dev/backend-development/fastapi-guide.svg" 
                alt="FastAPI Modern Python APIs Guide" 
                width={800} 
                height={400} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                What You&apos;ll Master
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">FastAPI Fundamentals</h3>
                      <p className="text-slate-600 dark:text-slate-400">Async programming, type hints, and automatic validation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Automatic Documentation</h3>
                      <p className="text-slate-600 dark:text-slate-400">Interactive API docs with Swagger UI and ReDoc</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Data Validation</h3>
                      <p className="text-slate-600 dark:text-slate-400">Pydantic models for request/response validation</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Authentication & Security</h3>
                      <p className="text-slate-600 dark:text-slate-400">JWT, OAuth2, and dependency injection for security</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Database Integration</h3>
                      <p className="text-slate-600 dark:text-slate-400">SQLAlchemy, async database operations, and ORM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Testing & Deployment</h3>
                      <p className="text-slate-600 dark:text-slate-400">Unit testing, async testing, and production deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <h2>Introduction to FastAPI</h2>
              <p>
                FastAPI is a modern, fast (high-performance) web framework for building APIs 
                with Python 3.7+ based on standard Python type hints. It&apos;s designed to 
                be easy to use and learn, fast to code, ready for production, and based on 
                open standards.
              </p>

              <h2>Why Choose FastAPI?</h2>
              <p>
                FastAPI offers several advantages over traditional Python web frameworks:
              </p>
              <ul>
                <li><strong>High Performance:</strong> One of the fastest Python frameworks available</li>
                <li><strong>Automatic Documentation:</strong> Interactive API docs generated automatically</li>
                <li><strong>Type Safety:</strong> Full support for Python type hints</li>
                <li><strong>Easy to Use:</strong> Designed to be intuitive and easy to learn</li>
                <li><strong>Standards Based:</strong> Built on OpenAPI, JSON Schema, and OAuth2</li>
              </ul>

              <h2>Getting Started with FastAPI</h2>
              <p>
                FastAPI is built on top of Starlette for the web parts and Pydantic for the 
                data parts. It provides automatic request validation, serialization, and 
                documentation generation.
              </p>

              <h3>Installation and Basic Setup</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Install FastAPI and Uvicorn
pip install fastapi uvicorn

# Create a simple API
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

# Run the server
# uvicorn main:app --reload`}
                </pre>
              </div>

              <h2>Type Hints and Data Validation</h2>
              <p>
                FastAPI uses Python type hints to automatically validate request data and 
                generate OpenAPI schemas. This provides excellent IDE support and runtime 
                validation with minimal code.
              </p>

              <h3>Pydantic Models</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    is_active: bool = True

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    created_at: datetime
    
    class Config:
        orm_mode = True

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
    tags: List[str] = []`}
                </pre>
              </div>

              <h2>API Endpoints and HTTP Methods</h2>
              <p>
                FastAPI makes it easy to create RESTful APIs with proper HTTP methods, 
                status codes, and response models. You can define complex endpoints with 
                path parameters, query parameters, and request bodies.
              </p>

              <h3>CRUD Operations</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from fastapi import FastAPI, HTTPException, Depends
from typing import List

app = FastAPI()

# In-memory storage (use database in production)
items = []

@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    items.append(item)
    return item

@app.get("/items/", response_model=List[Item])
async def read_items(skip: int = 0, limit: int = 10):
    return items[skip: skip + limit]

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: int):
    if item_id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    return items[item_id]

@app.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: int, item: Item):
    if item_id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    items[item_id] = item
    return item

@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    if item_id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    del items[item_id]
    return {"message": "Item deleted"}`}
                </pre>
              </div>

              <h2>Authentication and Security</h2>
              <p>
                FastAPI provides built-in support for various authentication methods including 
                OAuth2, JWT tokens, and API keys. You can use dependency injection to handle 
                authentication across your application.
              </p>

              <h3>JWT Authentication</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from datetime import datetime, timedelta

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return username`}
                </pre>
              </div>

              <h2>Database Integration</h2>
              <p>
                FastAPI works well with various databases through SQLAlchemy, databases, 
                and other ORMs. You can use both synchronous and asynchronous database 
                operations depending on your needs.
              </p>

              <h3>SQLAlchemy Integration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from sqlalchemy import Column, Integer, String, DateTime, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi import Depends

SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    created_at = Column(DateTime)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=User)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(email=user.email, hashed_password=get_password_hash(user.password))
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user`}
                </pre>
              </div>

              <h2>Testing FastAPI Applications</h2>
              <p>
                FastAPI provides excellent testing support through the TestClient, which 
                allows you to test your API endpoints without running a server. You can 
                write comprehensive unit and integration tests.
              </p>

              <h3>Writing Tests</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from fastapi.testclient import TestClient
import pytest

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}

def test_create_item():
    item_data = {
        "name": "Test Item",
        "description": "A test item",
        "price": 9.99,
        "tax": 1.0,
        "tags": ["test", "example"]
    }
    response = client.post("/items/", json=item_data)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == item_data["name"]
    assert data["price"] == item_data["price"]

def test_read_item():
    response = client.get("/items/0")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert "price" in data`}
                </pre>
              </div>

              <h2>Deployment and Production</h2>
              <p>
                FastAPI applications can be deployed using various methods including 
                Docker, cloud platforms, and traditional servers. Use ASGI servers like 
                Uvicorn or Gunicorn for production deployment.
              </p>

              <h3>Docker Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# requirements.txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
sqlalchemy==2.0.23`}
                </pre>
              </div>

              <h2>Best Practices</h2>
              <ul>
                <li><strong>Type Hints:</strong> Use comprehensive type hints for better IDE support</li>
                <li><strong>Error Handling:</strong> Implement proper exception handling and custom exceptions</li>
                <li><strong>Documentation:</strong> Leverage automatic documentation generation</li>
                <li><strong>Testing:</strong> Write comprehensive tests for all endpoints</li>
                <li><strong>Security:</strong> Implement proper authentication and authorization</li>
                <li><strong>Performance:</strong> Use async/await for I/O operations</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                FastAPI is an excellent choice for building modern Python APIs. Its 
                combination of high performance, automatic documentation, type safety, 
                and ease of use makes it ideal for both small projects and large-scale 
                applications. With its growing ecosystem and community support, FastAPI 
                is becoming the go-to framework for Python API development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastAPIModernPython;
