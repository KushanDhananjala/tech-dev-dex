import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Server, Star, Clock, User, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const PythonDjangoGuide = () => {
  return (
    <>
      <Head>
        <title>Django: Python Web Framework | TechDevDex</title>
        <meta name="description" content="Build robust web applications with Django framework, from basics to advanced features. Complete guide with practical examples and best practices." />
        <meta name="keywords" content="Django, Python web framework, backend development, web applications, Django REST framework, authentication, database models" />
        <meta name="author" content="TechDevDex" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Django: Python Web Framework" />
        <meta property="og:description" content="Build robust web applications with Django framework, from basics to advanced features. Complete guide with practical examples and best practices." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://techdevdex.com/web-dev/backend-development/python-django-guide" />
        <meta property="og:image" content="https://techdevdex.com/images/web-dev/backend-development/django-guide.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Django: Python Web Framework" />
        <meta name="twitter:description" content="Build robust web applications with Django framework, from basics to advanced features. Complete guide with practical examples and best practices." />
        <meta name="twitter:image" content="https://techdevdex.com/images/web-dev/backend-development/django-guide.svg" />
        <link rel="canonical" href="https://techdevdex.com/web-dev/backend-development/python-django-guide" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Django: Python Web Framework",
            "description": "Build robust web applications with Django framework, from basics to advanced features. Complete guide with practical examples and best practices.",
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
            "datePublished": "2024-11-28",
            "dateModified": "2024-11-28",
            "image": "https://techdevdex.com/images/web-dev/backend-development/django-guide.svg"
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
              <Server className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Django: Python Web Framework
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Build robust web applications with Django framework, from basics to advanced features. Complete guide with practical examples and best practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300">22 min read</span>
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
                src="/images/web-dev/backend-development/django-guide.svg" 
                alt="Django Python Web Framework Guide" 
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
                      <h3 className="font-semibold text-slate-900 dark:text-white">Django Fundamentals</h3>
                      <p className="text-slate-600 dark:text-slate-400">MVC pattern, settings, and project structure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Models and Database</h3>
                      <p className="text-slate-600 dark:text-slate-400">ORM, migrations, and database relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Views and Templates</h3>
                      <p className="text-slate-600 dark:text-slate-400">Function-based and class-based views, template system</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Django REST Framework</h3>
                      <p className="text-slate-600 dark:text-slate-400">Building APIs with serializers and viewsets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Authentication & Security</h3>
                      <p className="text-slate-600 dark:text-slate-400">User management, permissions, and security features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Deployment & Production</h3>
                      <p className="text-slate-600 dark:text-slate-400">WSGI, static files, and production deployment</p>
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
              <h2>Introduction to Django</h2>
              <p>
                Django is a high-level Python web framework that encourages rapid development 
                and clean, pragmatic design. Built by experienced developers, it takes care of 
                much of the hassle of web development, so you can focus on writing your app 
                without needing to reinvent the wheel.
              </p>

              <h2>Getting Started with Django</h2>
              <p>
                Django follows the MVT (Model-View-Template) pattern, which is similar to MVC 
                but with Django&apos;s own twist. It provides a robust foundation for building 
                web applications with built-in features for authentication, admin interface, 
                and database management.
              </p>

              <h3>Installation and Project Setup</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`# Install Django
pip install django

# Create a new project
django-admin startproject myproject
cd myproject

# Create an app
python manage.py startapp myapp

# Run the development server
python manage.py runserver`}
                </pre>
              </div>

              <h2>Django Models</h2>
              <p>
                Models are the single, definitive source of information about your data. They 
                contain the essential fields and behaviors of the data you&apos;re storing. 
                Django uses an ORM (Object-Relational Mapping) to interact with the database.
              </p>

              <h3>Defining Models</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']`}
                </pre>
              </div>

              <h2>Django Views</h2>
              <p>
                Views are Python functions that take a web request and return a web response. 
                Django supports both function-based views and class-based views, giving you 
                flexibility in how you structure your application logic.
              </p>

              <h3>Function-Based Views</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'posts/list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'posts/detail.html', {'post': post})

def api_posts(request):
    posts = Post.objects.all()
    data = [{'title': post.title, 'content': post.content} for post in posts]
    return JsonResponse(data, safe=False)`}
                </pre>
              </div>

              <h2>Django REST Framework</h2>
              <p>
                Django REST Framework (DRF) is a powerful and flexible toolkit for building 
                Web APIs. It provides serializers, viewsets, and authentication mechanisms 
                that make it easy to build robust APIs.
              </p>

              <h3>API Serializers and Viewsets</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from rest_framework import serializers, viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)`}
                </pre>
              </div>

              <h2>Authentication and Security</h2>
              <p>
                Django provides a comprehensive authentication system out of the box. It includes 
                user management, permissions, groups, and password hashing. You can also integrate 
                with third-party authentication providers.
              </p>

              <h3>User Authentication</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
    return render(request, 'auth/login.html')

@login_required
def dashboard(request):
    return render(request, 'dashboard.html')`}
                </pre>
              </div>

              <h2>Django Admin Interface</h2>
              <p>
                Django&apos;s admin interface is automatically generated based on your models. 
                It provides a ready-to-use interface for managing your application&apos;s data 
                and can be customized extensively.
              </p>

              <h3>Admin Configuration</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_at']
    list_filter = ['created_at', 'author']
    search_fields = ['title', 'content']
    readonly_fields = ['created_at', 'updated_at']
    
    def get_queryset(self, request):
        return super().get_queryset(request).select_related('author')`}
                </pre>
              </div>

              <h2>Testing in Django</h2>
              <p>
                Django includes a comprehensive test framework that makes it easy to write 
                unit tests, integration tests, and functional tests for your application.
              </p>

              <h3>Writing Tests</h3>
              <div className="bg-slate-900 rounded-lg p-6 my-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`from django.test import TestCase, Client
from django.contrib.auth.models import User
from .models import Post

class PostModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )
    
    def test_post_creation(self):
        post = Post.objects.create(
            title='Test Post',
            content='Test content',
            author=self.user
        )
        self.assertEqual(str(post), 'Test Post')
        self.assertEqual(post.author, self.user)

class PostViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )
    
    def test_post_list_view(self):
        response = self.client.get('/posts/')
        self.assertEqual(response.status_code, 200)`}
                </pre>
              </div>

              <h2>Deployment and Production</h2>
              <p>
                Deploying Django applications to production requires careful configuration of 
                static files, database settings, and security measures. Use WSGI servers like 
                Gunicorn and reverse proxies like Nginx for optimal performance.
              </p>

              <h2>Best Practices</h2>
              <ul>
                <li><strong>Project Structure:</strong> Organize your code with proper app separation</li>
                <li><strong>Settings Management:</strong> Use environment-specific settings files</li>
                <li><strong>Database Optimization:</strong> Use select_related and prefetch_related for queries</li>
                <li><strong>Security:</strong> Keep Django updated and follow security guidelines</li>
                <li><strong>Testing:</strong> Write comprehensive tests for all functionality</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Django is a powerful framework that provides everything needed to build 
                robust web applications. Its &quot;batteries included&quot; philosophy means 
                you have access to authentication, admin interface, ORM, and many other 
                features out of the box. With Django REST Framework, you can easily build 
                APIs that power modern web and mobile applications.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonDjangoGuide;
