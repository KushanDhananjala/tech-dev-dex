import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Clock, Server, Star, User, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SpringBootJava = () => {
  return (
    <>
      <Head>
        <title>Spring Boot: Java Backend Development | TechDevDex</title>
        <meta name="description" content="Enterprise-grade Java applications with Spring Boot framework and microservices. Complete guide to building robust Java backend applications with Spring Boot." />
        <meta name="keywords" content="Spring Boot, Java backend, enterprise development, microservices, Spring framework, Java web development, REST APIs, Spring Security" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Spring Boot: Java Backend Development" />
        <meta property="og:description" content="Enterprise-grade Java applications with Spring Boot framework and microservices. Complete guide to building robust Java backend applications with Spring Boot." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/web-dev/backend-development/spring-boot-java" />
        <meta property="og:image" content="https://techdevdex.com/images/web-dev/backend-development/spring-boot-guide.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Spring Boot: Java Backend Development" />
        <meta name="twitter:description" content="Enterprise-grade Java applications with Spring Boot framework and microservices. Complete guide to building robust Java backend applications with Spring Boot." />
        <meta name="twitter:image" content="https://techdevdex.com/images/web-dev/backend-development/spring-boot-guide.svg" />
        <link rel="canonical" href="https://techdevdex.com/web-dev/backend-development/spring-boot-java" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Spring Boot: Java Backend Development",
            "description": "Enterprise-grade Java applications with Spring Boot framework and microservices. Complete guide to building robust Java backend applications with Spring Boot.",
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
            "datePublished": "2024-11-15",
            "dateModified": "2024-11-15",
            "image": "https://techdevdex.com/images/web-dev/backend-development/spring-boot-guide.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Spring Boot: Java Backend Development
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade Java applications with Spring Boot framework and microservices. Complete guide to building robust Java backend applications with Spring Boot.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">30 min read</span>
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
                src="/images/web-dev/backend-development/spring-boot-guide.svg" 
                alt="Spring Boot Java Backend Development Guide" 
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
                      <h3 className="font-semibold text-slate-900 dark:text-white">Spring Boot Fundamentals</h3>
                      <p className="text-slate-600 dark:text-slate-400">Auto-configuration, starters, and application properties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">RESTful Web Services</h3>
                      <p className="text-slate-600 dark:text-slate-400">Building REST APIs with Spring Web MVC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Data Access & JPA</h3>
                      <p className="text-slate-600 dark:text-slate-400">Spring Data JPA, repositories, and database integration</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Security & Authentication</h3>
                      <p className="text-slate-600 dark:text-slate-400">Spring Security, JWT, and OAuth2 integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Microservices Architecture</h3>
                      <p className="text-slate-600 dark:text-slate-400">Service discovery, configuration, and communication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Testing & Deployment</h3>
                      <p className="text-slate-600 dark:text-slate-400">Unit testing, integration testing, and production deployment</p>
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
              <h2>Introduction to Spring Boot</h2>
              <p>
                Spring Boot is a powerful framework that simplifies the development of 
                production-ready Spring applications. It provides auto-configuration, 
                embedded servers, and a wide range of starter dependencies that make 
                it easy to build enterprise-grade Java applications.
              </p>

              <h2>Why Choose Spring Boot?</h2>
              <p>
                Spring Boot offers several advantages for Java backend development:
              </p>
              <ul>
                <li><strong>Auto-Configuration:</strong> Automatically configures Spring and third-party libraries</li>
                <li><strong>Embedded Servers:</strong> Built-in Tomcat, Jetty, or Undertow servers</li>
                <li><strong>Production Ready:</strong> Health checks, metrics, and externalized configuration</li>
                <li><strong>No Code Generation:</strong> No XML configuration required</li>
                <li><strong>Microservices Ready:</strong> Perfect for building microservices architectures</li>
              </ul>

              <h2>Getting Started with Spring Boot</h2>
              <p>
                Spring Boot applications can be created using Spring Initializr or 
                manually. The framework provides a wide range of starter dependencies 
                for common use cases like web development, data access, and security.
              </p>

              <h3>Project Setup</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// pom.xml dependencies
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>

// Main Application Class
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}
                </pre>
              </div>

              <h2>Building REST APIs</h2>
              <p>
                Spring Boot makes it easy to build RESTful web services using Spring Web MVC. 
                You can create controllers, handle HTTP requests, and return JSON responses 
                with minimal configuration.
              </p>

              <h3>REST Controller Example</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        User updatedUser = userService.update(id, user);
        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUser);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}`}
                </pre>
              </div>

              <h2>Data Access with Spring Data JPA</h2>
              <p>
                Spring Data JPA provides a powerful abstraction over JPA, making it easy 
                to work with databases. You can create repositories with custom query 
                methods and leverage the power of JPA without writing boilerplate code.
              </p>

              <h3>Entity and Repository</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// Entity
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String name;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    // Constructors, getters, and setters
}

// Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    
    List<User> findByNameContainingIgnoreCase(String name);
    
    @Query("SELECT u FROM User u WHERE u.createdAt >= :date")
    List<User> findUsersCreatedAfter(@Param("date") LocalDateTime date);
    
    @Modifying
    @Query("UPDATE User u SET u.name = :name WHERE u.id = :id")
    int updateUserName(@Param("id") Long id, @Param("name") String name);
}

// Service Layer
@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    public User save(User user) {
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }
    
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}`}
                </pre>
              </div>

              <h2>Security with Spring Security</h2>
              <p>
                Spring Security provides comprehensive security features for Spring 
                applications. You can implement authentication, authorization, and 
                protection against common security vulnerabilities.
              </p>

              <h3>Security Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        return http.build();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}

// JWT Token Provider
@Component
public class JwtTokenProvider {
    
    private String secretKey = "mySecretKey";
    private long validityInMilliseconds = 3600000; // 1h
    
    public String createToken(String username, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(username);
        claims.put("roles", roles);
        
        Date now = new Date();
        Date validity = new Date(now.getTime() + validityInMilliseconds);
        
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
}`}
                </pre>
              </div>

              <h2>Microservices with Spring Boot</h2>
              <p>
                Spring Boot is ideal for building microservices architectures. You can 
                use Spring Cloud to implement service discovery, configuration management, 
                and distributed tracing.
              </p>

              <h3>Service Discovery</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// Application Properties
spring.application.name=user-service
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
eureka.instance.prefer-ip-address=true

// Main Application Class
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}

// Feign Client for Service Communication
@FeignClient(name = "order-service")
public interface OrderServiceClient {
    
    @GetMapping("/api/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
    
    @PostMapping("/api/orders")
    Order createOrder(@RequestBody Order order);
}

// Using Feign Client in Service
@Service
public class UserService {
    
    @Autowired
    private OrderServiceClient orderServiceClient;
    
    public UserWithOrders getUserWithOrders(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        List<Order> orders = orderServiceClient.getOrdersByUserId(userId);
        return new UserWithOrders(user, orders);
    }
}`}
                </pre>
              </div>

              <h2>Testing Spring Boot Applications</h2>
              <p>
                Spring Boot provides excellent testing support with @SpringBootTest, 
                @WebMvcTest, and @DataJpaTest annotations. You can write comprehensive 
                unit and integration tests for your applications.
              </p>

              <h3>Testing Examples</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// Integration Test
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase
class UserControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testCreateUser() {
        User user = new User("john@example.com", "John Doe");
        
        ResponseEntity<User> response = restTemplate.postForEntity(
            "/api/users", user, User.class);
        
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody().getId());
    }
    
    @Test
    void testGetAllUsers() {
        userRepository.save(new User("user1@example.com", "User 1"));
        userRepository.save(new User("user2@example.com", "User 2"));
        
        ResponseEntity<List> response = restTemplate.getForEntity(
            "/api/users", List.class);
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2, response.getBody().size());
    }
}

// Unit Test
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void testFindById() {
        User user = new User("test@example.com", "Test User");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        
        Optional<User> result = userService.findById(1L);
        
        assertTrue(result.isPresent());
        assertEquals("test@example.com", result.get().getEmail());
    }
}`}
                </pre>
              </div>

              <h2>Production Deployment</h2>
              <p>
                Spring Boot applications can be deployed using various methods including 
                JAR files, Docker containers, and cloud platforms. The framework provides 
                production-ready features like health checks and metrics.
              </p>

              <h3>Docker Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Dockerfile
FROM openjdk:11-jre-slim

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - DATABASE_URL=jdbc:postgresql://db:5432/myapp
    depends_on:
      - db
  
  db:
    image: postgres:13
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
                <li><strong>Configuration:</strong> Use application.properties for environment-specific settings</li>
                <li><strong>Error Handling:</strong> Implement global exception handling with @ControllerAdvice</li>
                <li><strong>Logging:</strong> Use SLF4J with Logback for comprehensive logging</li>
                <li><strong>Monitoring:</strong> Implement health checks and metrics with Actuator</li>
                <li><strong>Security:</strong> Follow security best practices and keep dependencies updated</li>
                <li><strong>Testing:</strong> Write comprehensive tests for all layers of your application</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Spring Boot is a powerful framework for building enterprise-grade Java 
                applications. Its auto-configuration, embedded servers, and extensive 
                ecosystem make it ideal for both monolithic applications and microservices. 
                With Spring Boot, you can focus on business logic while the framework 
                handles the infrastructure concerns.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringBootJava;
