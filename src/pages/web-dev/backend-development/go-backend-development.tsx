import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Server, Star, Clock, User, CheckCircle, Code, Database, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const GoBackendDevelopment = () => {
  return (
    <>
      <Head>
        <title>Go: High-Performance Backend | TechDevDex</title>
        <meta name="description" content="Build fast and efficient backend services with Go programming language. Complete guide to high-performance backend development with Go, goroutines, and modern web frameworks." />
        <meta name="keywords" content="Go programming, Golang backend, high performance, concurrent programming, goroutines, web services, REST APIs, microservices" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Go: High-Performance Backend" />
        <meta property="og:description" content="Build fast and efficient backend services with Go programming language. Complete guide to high-performance backend development with Go, goroutines, and modern web frameworks." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/web-dev/backend-development/go-backend-development" />
        <meta property="og:image" content="https://techdevdex.com/images/web-dev/backend-development/go-guide.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Go: High-Performance Backend" />
        <meta name="twitter:description" content="Build fast and efficient backend services with Go programming language. Complete guide to high-performance backend development with Go, goroutines, and modern web frameworks." />
        <meta name="twitter:image" content="https://techdevdex.com/images/web-dev/backend-development/go-guide.svg" />
        <link rel="canonical" href="https://techdevdex.com/web-dev/backend-development/go-backend-development" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Go: High-Performance Backend",
            "description": "Build fast and efficient backend services with Go programming language. Complete guide to high-performance backend development with Go, goroutines, and modern web frameworks.",
            "author": {
              "@type": "Organization",
              "name": "TechDevDex"
            },
            "publisher": {
              "@type": "Organization",
              "name": "TechDevDex",
              "logo": {
                "@type": "ImageObject",
                "url": "https://techdevdex.com/logo.png"
              }
            },
            "datePublished": "2024-11-10",
            "dateModified": "2024-11-10",
            "image": "https://techdevdex.com/images/web-dev/backend-development/go-guide.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Go: High-Performance Backend
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Build fast and efficient backend services with Go programming language. Complete guide to high-performance backend development with Go, goroutines, and modern web frameworks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">20 min read</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-slate-700 dark:text-slate-300">TechDevDex Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-slate-700 dark:text-slate-300">4.0 Rating</span>
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
                src="/images/web-dev/backend-development/go-guide.svg" 
                alt="Go High-Performance Backend Development Guide" 
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
                      <h3 className="font-semibold text-slate-900 dark:text-white">Go Fundamentals</h3>
                      <p className="text-slate-600 dark:text-slate-400">Syntax, types, interfaces, and Go modules</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Concurrent Programming</h3>
                      <p className="text-slate-600 dark:text-slate-400">Goroutines, channels, and concurrent patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Web Frameworks</h3>
                      <p className="text-slate-600 dark:text-slate-400">Gin, Echo, and Fiber for building web services</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Database Integration</h3>
                      <p className="text-slate-600 dark:text-slate-400">GORM, database drivers, and connection pooling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Testing & Debugging</h3>
                      <p className="text-slate-600 dark:text-slate-400">Unit testing, benchmarking, and profiling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Production Deployment</h3>
                      <p className="text-slate-600 dark:text-slate-400">Docker, monitoring, and performance optimization</p>
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
              <h2>Introduction to Go Backend Development</h2>
              <p>
                Go (Golang) is a statically typed, compiled programming language designed 
                for simplicity, efficiency, and reliability. It&apos;s particularly well-suited 
                for backend development due to its excellent concurrency support, fast 
                compilation, and built-in networking libraries.
              </p>

              <h2>Why Choose Go for Backend Development?</h2>
              <p>
                Go offers several advantages for backend development:
              </p>
              <ul>
                <li><strong>High Performance:</strong> Compiled language with excellent runtime performance</li>
                <li><strong>Concurrency:</strong> Built-in goroutines and channels for concurrent programming</li>
                <li><strong>Simplicity:</strong> Clean syntax and minimal language features</li>
                <li><strong>Fast Compilation:</strong> Quick build times and efficient binaries</li>
                <li><strong>Rich Standard Library:</strong> Built-in HTTP server, JSON handling, and more</li>
                <li><strong>Cross-Platform:</strong> Single binary deployment across platforms</li>
              </ul>

              <h2>Getting Started with Go</h2>
              <p>
                Go has a simple and clean syntax that makes it easy to learn and use. 
                The language emphasizes readability and maintainability while providing 
                powerful features for concurrent programming.
              </p>

              <h3>Basic Go Program</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/", handler)
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

// Go modules
// go mod init myapp
// go mod tidy`}
                </pre>
              </div>

              <h2>Concurrent Programming with Goroutines</h2>
              <p>
                Go&apos;s concurrency model is based on goroutines (lightweight threads) and 
                channels (communication mechanism). This makes it easy to write concurrent 
                programs that are both efficient and safe.
              </p>

              <h3>Goroutines and Channels</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "fmt"
    "time"
)

func main() {
    // Create a channel
    ch := make(chan string)
    
    // Start goroutines
    go producer("Producer 1", ch)
    go producer("Producer 2", ch)
    go consumer(ch)
    
    // Wait for completion
    time.Sleep(2 * time.Second)
}

func producer(name string, ch chan<- string) {
    for i := 0; i < 5; i++ {
        ch <- fmt.Sprintf("%s: Message %d", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func consumer(ch <-chan string) {
    for msg := range ch {
        fmt.Println("Received:", msg)
    }
}

// Select statement for multiple channels
func selectExample() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() { ch1 <- "from ch1" }()
    go func() { ch2 <- "from ch2" }()
    
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }
}`}
                </pre>
              </div>

              <h2>Web Frameworks for Go</h2>
              <p>
                While Go&apos;s standard library provides excellent HTTP support, web frameworks 
                like Gin, Echo, and Fiber offer additional features for building web applications 
                and APIs.
              </p>

              <h3>Gin Framework Example</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type User struct {
    ID    int    &#96;json:"id"&#96;
    Name  string &#96;json:"name"&#96;
    Email string &#96;json:"email"&#96;
}

var users = []User{
    {ID: 1, Name: "John Doe", Email: "john@example.com"},
    {ID: 2, Name: "Jane Smith", Email: "jane@example.com"},
}

func main() {
    r := gin.Default()
    
    // Middleware
    r.Use(gin.Logger())
    r.Use(gin.Recovery())
    
    // Routes
    r.GET("/users", getUsers)
    r.GET("/users/:id", getUserByID)
    r.POST("/users", createUser)
    r.PUT("/users/:id", updateUser)
    r.DELETE("/users/:id", deleteUser)
    
    r.Run(":8080")
}

func getUsers(c *gin.Context) {
    c.JSON(http.StatusOK, users)
}

func getUserByID(c *gin.Context) {
    id := c.Param("id")
    // Find user logic here
    c.JSON(http.StatusOK, gin.H{"id": id})
}

func createUser(c *gin.Context) {
    var newUser User
    if err := c.ShouldBindJSON(&newUser); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    newUser.ID = len(users) + 1
    users = append(users, newUser)
    c.JSON(http.StatusCreated, newUser)
}`}
                </pre>
              </div>

              <h2>Database Integration</h2>
              <p>
                Go provides excellent database support through the database/sql package and 
                ORMs like GORM. You can work with various databases including PostgreSQL, 
                MySQL, and SQLite.
              </p>

              <h3>GORM Example</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
    "time"
)

type User struct {
    ID        uint      &#96;gorm:"primaryKey"&#96;
    Name      string    &#96;gorm:"size:100;not null"&#96;
    Email     string    &#96;gorm:"uniqueIndex;size:255;not null"&#96;
    CreatedAt time.Time
    UpdatedAt time.Time
}

type Product struct {
    ID          uint   &#96;gorm:"primaryKey"&#96;
    Name        string &#96;gorm:"size:100;not null"&#96;
    Description string
    Price       float64
    UserID      uint
    User        User   &#96;gorm:"foreignKey:UserID"&#96;
}

func main() {
    // Connect to database
    dsn := "host=localhost user=gorm password=gorm dbname=gorm port=9920 sslmode=disable"
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }
    
    // Auto migrate
    db.AutoMigrate(&User{}, &Product{})
    
    // Create user
    user := User{Name: "John Doe", Email: "john@example.com"}
    db.Create(&user)
    
    // Create product
    product := Product{Name: "Laptop", Description: "Gaming laptop", Price: 999.99, UserID: user.ID}
    db.Create(&product)
    
    // Query with associations
    var result User
    db.Preload("Products").First(&result, user.ID)
}`}
                </pre>
              </div>

              <h2>Testing in Go</h2>
              <p>
                Go has excellent built-in testing support with the testing package. You can 
                write unit tests, benchmarks, and integration tests with minimal setup.
              </p>

              <h3>Testing Examples</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "testing"
    "net/http"
    "net/http/httptest"
)

// Unit test
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    if result != expected {
        t.Errorf("Add(2, 3) = %d; want %d", result, expected)
    }
}

func Add(a, b int) int {
    return a + b
}

// HTTP handler test
func TestHandler(t *testing.T) {
    req, err := http.NewRequest("GET", "/", nil)
    if err != nil {
        t.Fatal(err)
    }
    
    rr := httptest.NewRecorder()
    handler := http.HandlerFunc(handler)
    
    handler.ServeHTTP(rr, req)
    
    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }
    
    expected := "Hello, World!"
    if rr.Body.String() != expected {
        t.Errorf("handler returned unexpected body: got %v want %v",
            rr.Body.String(), expected)
    }
}

// Benchmark test
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}

// Run tests
// go test
// go test -v
// go test -bench=.
// go test -cover`}
                </pre>
              </div>

              <h2>Error Handling</h2>
              <p>
                Go uses explicit error handling with the error interface. This approach 
                makes error handling more visible and forces developers to consider 
                error cases.
              </p>

              <h3>Error Handling Patterns</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`package main

import (
    "errors"
    "fmt"
    "log"
)

// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation error in field %s: %s", e.Field, e.Message)
}

// Function that returns an error
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Error handling patterns
func main() {
    // Basic error handling
    result, err := divide(10, 2)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Result:", result)
    
    // Error with custom type
    err = validateUser("", "invalid-email")
    if err != nil {
        switch e := err.(type) {
        case ValidationError:
            fmt.Printf("Validation error: %s\n", e.Message)
        default:
            fmt.Printf("Other error: %s\n", err)
        }
    }
}

func validateUser(name, email string) error {
    if name == "" {
        return ValidationError{Field: "name", Message: "name is required"}
    }
    if email == "" {
        return ValidationError{Field: "email", Message: "email is required"}
    }
    return nil
}`}
                </pre>
              </div>

              <h2>Production Deployment</h2>
              <p>
                Go applications are compiled to single binaries, making deployment 
                straightforward. You can use Docker for containerization and various 
                deployment strategies for production environments.
              </p>

              <h3>Docker Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Dockerfile
# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Final stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates
WORKDIR /root/

COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://user:password@db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
                </pre>
              </div>

              <h2>Best Practices</h2>
              <ul>
                <li><strong>Error Handling:</strong> Always handle errors explicitly and provide meaningful error messages</li>
                <li><strong>Concurrency:</strong> Use goroutines and channels effectively for concurrent operations</li>
                <li><strong>Testing:</strong> Write comprehensive tests including unit, integration, and benchmark tests</li>
                <li><strong>Performance:</strong> Profile your applications and optimize bottlenecks</li>
                <li><strong>Code Organization:</strong> Use packages and interfaces to organize code effectively</li>
                <li><strong>Documentation:</strong> Write clear documentation and use godoc for API documentation</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Go is an excellent choice for backend development, especially when you need 
                high performance, concurrency, and simplicity. Its growing ecosystem, strong 
                community support, and excellent tooling make it ideal for building scalable 
                backend services. Whether you&apos;re building microservices, APIs, or 
                distributed systems, Go provides the tools and performance you need.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoBackendDevelopment;
