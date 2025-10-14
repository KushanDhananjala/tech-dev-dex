import React from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';

const GitHubActions = () => {
  return (
    <>
      <SEO
        title="GitHub Actions: CI/CD and Workflow Automation"
        description="Master GitHub Actions for CI/CD and workflow automation. Learn about workflows, actions, and best practices for automated development processes."
        keywords={[
          'GitHub Actions',
          'CI/CD',
          'workflow automation',
          'DevOps',
          'continuous integration',
          'continuous deployment',
          'GitHub workflows',
          'automation tools',
          'development automation',
          'CI/CD pipelines'
        ]}
        type="article"
        image="/images/productivity/automation-scripts/github-actions.svg"
        url="/productivity/automation-scripts/github-actions"
        section="Automation Scripts"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/productivity/automation-scripts" className="text-blue-600 hover:text-blue-800">
                ← Back to Automation Scripts
              </Link>
              <div className="text-sm text-gray-500">
                Published: December 12, 2024
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              GitHub Actions: CI/CD and Workflow Automation
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master GitHub Actions for CI/CD and workflow automation. Learn about workflows, actions, and best practices for automated development processes.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>19 min read</span>
              <span>•</span>
              <span>Productivity</span>
              <span>•</span>
              <span>Automation</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/productivity/automation-scripts/github-actions.svg"
              alt="GitHub Actions for Developers"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>What are GitHub Actions?</h2>
            <p>
              GitHub Actions is a continuous integration and continuous deployment (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.
            </p>

            <h2>Core Concepts</h2>
            
            <h3>Workflows</h3>
            <p>
              Workflows are automated procedures that you add to your repository:
            </p>
            <ul>
              <li><strong>YAML Files:</strong> Defined in .github/workflows/ directory</li>
              <li><strong>Triggers:</strong> Can be triggered by events like push, pull request</li>
              <li><strong>Jobs:</strong> Contain one or more steps</li>
              <li><strong>Steps:</strong> Individual tasks that run commands</li>
              <li><strong>Actions:</strong> Reusable units of code</li>
            </ul>

            <h3>Events</h3>
            <p>
              Events that trigger workflows:
            </p>
            <ul>
              <li><strong>push:</strong> Code is pushed to repository</li>
              <li><strong>pull_request:</strong> Pull request is opened or updated</li>
              <li><strong>schedule:</strong> Scheduled using cron syntax</li>
              <li><strong>workflow_dispatch:</strong> Manual trigger</li>
              <li><strong>release:</strong> Release is published</li>
            </ul>

            <h2>Basic Workflow Structure</h2>
            
            <h3>Simple Workflow</h3>
            <p>
              A basic GitHub Actions workflow:
            </p>
            <pre><code>name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test</code></pre>

            <h3>Multi-Job Workflow</h3>
            <p>
              Workflow with multiple jobs:
            </p>
            <pre><code>name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Run tests
      run: npm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build application
      run: npm run build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to production
      run: npm run deploy</code></pre>

            <h2>Popular Actions</h2>
            
            <h3>Essential Actions</h3>
            <p>
              Commonly used GitHub Actions:
            </p>
            <ul>
              <li><strong>actions/checkout:</strong> Checkout repository code</li>
              <li><strong>actions/setup-node:</strong> Setup Node.js environment</li>
              <li><strong>actions/setup-python:</strong> Setup Python environment</li>
              <li><strong>actions/setup-java:</strong> Setup Java environment</li>
              <li><strong>actions/cache:</strong> Cache dependencies</li>
            </ul>

            <h3>Deployment Actions</h3>
            <p>
              Actions for deployment:
            </p>
            <ul>
              <li><strong>actions/deploy-pages:</strong> Deploy to GitHub Pages</li>
              <li><strong>azure/docker-login:</strong> Login to Azure Container Registry</li>
              <li><strong>aws-actions/configure-aws-credentials:</strong> Configure AWS credentials</li>
              <li><strong>google-github-actions/setup-gcloud:</strong> Setup Google Cloud</li>
              <li><strong>actions/upload-artifact:</strong> Upload build artifacts</li>
            </ul>

            <h2>Environment Setup</h2>
            
            <h3>Node.js Projects</h3>
            <p>
              Setup for Node.js applications:
            </p>
            <pre><code>name: Node.js CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js $&#123;&#123; matrix.node-version &#125;&#125;
      uses: actions/setup-node@v3
      with:
        node-version: $&#123;&#123; matrix.node-version &#125;&#125;
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Run linting
      run: npm run lint</code></pre>

            <h3>Python Projects</h3>
            <p>
              Setup for Python applications:
            </p>
            <pre><code>name: Python CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        python-version: [3.8, 3.9, '3.10', '3.11']
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python $&#123;&#123; matrix.python-version &#125;&#125;
      uses: actions/setup-python@v4
      with:
        python-version: $&#123;&#123; matrix.python-version &#125;&#125;
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install -r requirements-dev.txt
    
    - name: Run tests
      run: pytest
    
    - name: Run linting
      run: flake8</code></pre>

            <h2>Advanced Workflow Features</h2>
            
            <h3>Conditional Execution</h3>
            <p>
              Run steps conditionally:
            </p>
            <pre><code>name: Conditional Workflow

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Run tests
      if: github.event_name == 'pull_request'
      run: npm test
    
    - name: Deploy
      if: github.ref == 'refs/heads/main'
      run: npm run deploy</code></pre>

            <h3>Secrets and Environment Variables</h3>
            <p>
              Use secrets and environment variables:
            </p>
            <pre><code>name: Deploy with Secrets

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      env:
        API_KEY: $&#123;&#123; secrets.API_KEY &#125;&#125;
        DATABASE_URL: $&#123;&#123; secrets.DATABASE_URL &#125;&#125;
      run: |
        echo "Deploying with API key: $API_KEY"
        npm run deploy</code></pre>

            <h2>Docker Integration</h2>
            
            <h3>Docker Build and Push</h3>
            <p>
              Build and push Docker images:
            </p>
            <pre><code>name: Docker Build and Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: $&#123;&#123; secrets.DOCKER_USERNAME &#125;&#125;
        password: $&#123;&#123; secrets.DOCKER_PASSWORD &#125;&#125;
    
    - name: Build and push
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          myapp:latest
          myapp:$&#123;&#123; github.sha &#125;&#125;</code></pre>

            <h2>Testing and Quality</h2>
            
            <h3>Code Quality Checks</h3>
            <p>
              Implement comprehensive quality checks:
            </p>
            <pre><code>name: Quality Checks

on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type checking
      run: npm run type-check
    
    - name: Run tests
      run: npm test
    
    - name: Run security audit
      run: npm audit --audit-level high</code></pre>

            <h3>Coverage Reports</h3>
            <p>
              Generate and upload coverage reports:
            </p>
            <pre><code>name: Coverage

on: [push, pull_request]

jobs:
  coverage:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests with coverage
      run: npm run test:coverage
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info</code></pre>

            <h2>Deployment Strategies</h2>
            
            <h3>Blue-Green Deployment</h3>
            <p>
              Implement blue-green deployment:
            </p>
            <pre><code>name: Blue-Green Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to blue environment
      run: |
        echo "Deploying to blue environment"
        # Deploy to blue environment
    
    - name: Run smoke tests
      run: |
        echo "Running smoke tests"
        # Run smoke tests
    
    - name: Switch traffic to blue
      if: success()
      run: |
        echo "Switching traffic to blue"
        # Switch traffic to blue environment
    
    - name: Cleanup green environment
      if: always()
      run: |
        echo "Cleaning up green environment"
        # Cleanup green environment</code></pre>

            <h3>Canary Deployment</h3>
            <p>
              Implement canary deployment:
            </p>
            <pre><code>name: Canary Deployment

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy canary
      run: |
        echo "Deploying canary version"
        # Deploy canary version
    
    - name: Monitor canary
      run: |
        echo "Monitoring canary deployment"
        # Monitor canary deployment
    
    - name: Promote canary
      if: success()
      run: |
        echo "Promoting canary to production"
        # Promote canary to production</code></pre>

            <h2>Best Practices</h2>
            
            <h3>Workflow Organization</h3>
            <p>
              Organize workflows effectively:
            </p>
            <ul>
              <li><strong>Single Responsibility:</strong> One workflow per purpose</li>
              <li><strong>Reusable Actions:</strong> Create reusable actions</li>
              <li><strong>Environment Variables:</strong> Use environment variables</li>
              <li><strong>Secrets Management:</strong> Secure sensitive data</li>
              <li><strong>Documentation:</strong> Document workflow purposes</li>
            </ul>

            <h3>Performance Optimization</h3>
            <p>
              Optimize workflow performance:
            </p>
            <ul>
              <li><strong>Caching:</strong> Cache dependencies and build artifacts</li>
              <li><strong>Parallel Jobs:</strong> Run independent jobs in parallel</li>
              <li><strong>Matrix Strategy:</strong> Use matrix for multiple configurations</li>
              <li><strong>Conditional Steps:</strong> Skip unnecessary steps</li>
              <li><strong>Resource Management:</strong> Use appropriate runner types</li>
            </ul>

            <h2>Security Considerations</h2>
            
            <h3>Secrets Management</h3>
            <p>
              Secure handling of secrets:
            </p>
            <ul>
              <li><strong>Repository Secrets:</strong> Store secrets in repository settings</li>
              <li><strong>Environment Secrets:</strong> Use environment-specific secrets</li>
              <li><strong>Secret Rotation:</strong> Regularly rotate secrets</li>
              <li><strong>Least Privilege:</strong> Grant minimal required permissions</li>
              <li><strong>Audit Logs:</strong> Monitor secret usage</li>
            </ul>

            <h3>Security Scanning</h3>
            <p>
              Implement security scanning:
            </p>
            <pre><code>name: Security Scan

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run security scan
      uses: github/super-linter@v4
      env:
        DEFAULT_BRANCH: main
        GITHUB_TOKEN: $&#123;&#123; secrets.GITHUB_TOKEN &#125;&#125;
    
    - name: Run dependency check
      run: |
        npm audit --audit-level high
        npm audit fix</code></pre>

            <h2>Monitoring and Notifications</h2>
            
            <h3>Workflow Notifications</h3>
            <p>
              Set up workflow notifications:
            </p>
            <pre><code>name: Notify on Failure

on:
  workflow_run:
    workflows: ["CI"]
    types: [completed]

jobs:
  notify:
    if: $&#123;&#123; github.event.workflow_run.conclusion == &apos;failure&apos; &#125;&#125;
    runs-on: ubuntu-latest
    
    steps:
    - name: Notify team
      uses: 8398a7/action-slack@v3
      with:
        status: failure
        channel: '#alerts'
        webhook_url: $&#123;&#123; secrets.SLACK_WEBHOOK &#125;&#125;</code></pre>

            <h2>Conclusion</h2>
            <p>
              GitHub Actions is a powerful platform for automating your development workflows. By mastering the concepts and best practices covered in this guide, you can create efficient, secure, and maintainable CI/CD pipelines.
            </p>

            <p>
              Start with simple workflows and gradually add complexity as needed. Remember to follow security best practices, optimize for performance, and document your workflows for team collaboration.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/productivity/automation-scripts/bash-automation-guide" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bash Automation Guide</h4>
                <p className="text-gray-600">Master bash scripting for automation and productivity.</p>
              </Link>
              <Link href="/productivity/automation-scripts/python-automation" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Python Automation</h4>
                <p className="text-gray-600">Automate tasks with Python scripting and libraries.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GitHubActions;
