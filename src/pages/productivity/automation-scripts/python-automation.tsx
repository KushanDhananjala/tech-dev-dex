import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const PythonAutomation = () => {
  return (
    <>
      <Head>
        <title>Python Automation: Scripting for Productivity | TechDevDex</title>
        <meta name="description" content="Master Python automation for development productivity. Learn essential libraries, scripting techniques, and automation patterns for common development tasks." />
        <meta name="keywords" content="Python automation, scripting, productivity, development tools, automation libraries, Python scripting" />
      </Head>

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
              Python Automation: Scripting for Productivity
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Master Python automation for development productivity. Learn essential libraries, scripting techniques, and automation patterns for common development tasks.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>17 min read</span>
              <span>•</span>
              <span>Productivity</span>
              <span>•</span>
              <span>Automation</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src="/images/productivity/automation-scripts/python-automation.svg"
              alt="Python Automation for Developers"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>Why Python for Automation?</h2>
            <p>
              Python is an excellent choice for automation due to its simplicity, extensive library ecosystem, and cross-platform compatibility. It&apos;s particularly well-suited for development automation tasks, file processing, and system administration.
            </p>

            <h2>Essential Python Libraries</h2>
            
            <h3>File and Directory Operations</h3>
            <p>
              Libraries for file and directory manipulation:
            </p>
            <ul>
              <li><strong>os:</strong> Operating system interface</li>
              <li><strong>pathlib:</strong> Object-oriented file system paths</li>
              <li><strong>shutil:</strong> High-level file operations</li>
              <li><strong>glob:</strong> Unix shell-style pathname pattern matching</li>
              <li><strong>fnmatch:</strong> Unix shell-style filename matching</li>
            </ul>

            <h3>Text Processing</h3>
            <p>
              Libraries for text manipulation and processing:
            </p>
            <ul>
              <li><strong>re:</strong> Regular expression operations</li>
              <li><strong>string:</strong> String manipulation utilities</li>
              <li><strong>csv:</strong> CSV file reading and writing</li>
              <li><strong>json:</strong> JSON data handling</li>
              <li><strong>yaml:</strong> YAML file processing</li>
            </ul>

            <h3>Network and Web</h3>
            <p>
              Libraries for network operations and web automation:
            </p>
            <ul>
              <li><strong>requests:</strong> HTTP library for Python</li>
              <li><strong>urllib:</strong> URL handling modules</li>
              <li><strong>socket:</strong> Low-level networking interface</li>
              <li><strong>selenium:</strong> Web browser automation</li>
              <li><strong>beautifulsoup4:</strong> HTML/XML parsing</li>
            </ul>

            <h2>File and Directory Automation</h2>
            
            <h3>File Operations</h3>
            <p>
              Automate common file operations:
            </p>
            <pre><code>import os
import shutil
from pathlib import Path

# Create directory
os.makedirs('new_directory', exist_ok=True)

# Copy file
shutil.copy('source.txt', 'destination.txt')

# Move file
shutil.move('old_location.txt', 'new_location.txt')

# Delete file
os.remove('file_to_delete.txt')

# List files
files = os.listdir('.')
for file in files:
    print(file)</code></pre>

            <h3>Directory Operations</h3>
            <p>
              Automate directory management tasks:
            </p>
            <pre><code>from pathlib import Path

# Create directory structure
Path('project/src/modules').mkdir(parents=True, exist_ok=True)

# Find files by pattern
for filepath in Path(&apos;.&apos;).glob(&apos;*.py&apos;):
    print(f&quot;Python file: &#123;filepath&#125;&quot;)

# Recursive file search
for filepath in Path(&apos;.&apos;).rglob(&apos;*.txt&apos;):
    print(f&quot;Text file: &#123;filepath&#125;&quot;)

# Get file information
file_path = Path(&apos;example.txt&apos;)
if file_path.exists():
    print(f&quot;Size: &#123;file_path.stat().st_size&#125; bytes&quot;)
    print(f&quot;Modified: &#123;file_path.stat().st_mtime&#125;&quot;)</code></pre>

            <h2>Text Processing Automation</h2>
            
            <h3>File Processing</h3>
            <p>
              Process text files efficiently:
            </p>
            <pre><code>import re

def process_log_file(filename):
    """Process log file and extract errors"""
    errors = []
    with open(filename, 'r') as file:
        for line_num, line in enumerate(file, 1):
            if 'ERROR' in line:
                errors.append(f&quot;Line &#123;line_num&#125;: &#123;line.strip()&#125;&quot;)
    return errors

def replace_in_file(filename, old_text, new_text):
    """Replace text in file"""
    with open(filename, 'r') as file:
        content = file.read()
    
    content = content.replace(old_text, new_text)
    
    with open(filename, 'w') as file:
        file.write(content)

# Usage
errors = process_log_file('application.log')
replace_in_file('config.txt', 'localhost', 'production-server')</code></pre>

            <h3>CSV and JSON Processing</h3>
            <p>
              Handle structured data files:
            </p>
            <pre><code>import csv
import json

def process_csv_file(filename):
    """Process CSV file and convert to JSON"""
    data = []
    with open(filename, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    
    # Save as JSON
    with open('output.json', 'w') as file:
        json.dump(data, file, indent=2)
    
    return data

def filter_json_data(filename, condition):
    """Filter JSON data based on condition"""
    with open(filename, 'r') as file:
        data = json.load(file)
    
    filtered_data = [item for item in data if condition(item)]
    
    with open('filtered.json', 'w') as file:
        json.dump(filtered_data, file, indent=2)
    
    return filtered_data</code></pre>

            <h2>Web Automation</h2>
            
            <h3>HTTP Requests</h3>
            <p>
              Automate web requests and API calls:
            </p>
            <pre><code>import requests
import json

def fetch_api_data(url, headers=None):
    """Fetch data from API"""
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f&quot;Error fetching data: &#123;e&#125;&quot;)
        return None

def post_data(url, data, headers=None):
    """Post data to API"""
    try:
        response = requests.post(url, json=data, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f&quot;Error posting data: &#123;e&#125;&quot;)
        return None

# Usage
api_data = fetch_api_data('https://api.example.com/data')
if api_data:
    print(f&quot;Fetched &#123;len(api_data)&#125; items&quot;)</code></pre>

            <h3>Web Scraping</h3>
            <p>
              Automate web scraping tasks:
            </p>
            <pre><code>from bs4 import BeautifulSoup
import requests

def scrape_website(url, selector):
    """Scrape data from website"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        elements = soup.select(selector)
        
        data = []
        for element in elements:
            data.append(element.get_text().strip())
        
        return data
    except requests.exceptions.RequestException as e:
        print(f&quot;Error scraping website: &#123;e&#125;&quot;)
        return []

def scrape_links(url):
    """Extract all links from webpage"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        links = soup.find_all('a', href=True)
        
        return [link['href'] for link in links]
    except requests.exceptions.RequestException as e:
        print(f&quot;Error scraping links: &#123;e&#125;&quot;)
        return []</code></pre>

            <h2>System Administration</h2>
            
            <h3>Process Management</h3>
            <p>
              Automate system process management:
            </p>
            <pre><code>import subprocess
import psutil
import time

def run_command(command):
    """Run system command and return output"""
    try:
        result = subprocess.run(
            command, 
            shell=True, 
            capture_output=True, 
            text=True
        )
        return result.stdout, result.stderr, result.returncode
    except Exception as e:
        print(f&quot;Error running command: &#123;e&#125;&quot;)
        return None, None, -1

def monitor_process(process_name):
    """Monitor specific process"""
    for proc in psutil.process_iter([&apos;pid&apos;, &apos;name&apos;, &apos;cpu_percent&apos;]):
        if process_name in proc.info[&apos;name&apos;]:
            print(&quot;Process found: &quot; + proc.info[&apos;name&apos;] + &quot; (PID: &quot; + str(proc.info[&apos;pid&apos;]) + &quot;)&quot;)

def kill_process_by_name(process_name):
    """Kill process by name"""
    for proc in psutil.process_iter(['pid', 'name']):
        if process_name in proc.info['name']:
            try:
                proc.kill()
                print(f&quot;Killed process &#123;proc.info[&apos;name&apos;]&#125; (PID: &#123;proc.info[&apos;pid&apos;]&#125;)&quot;)
            except psutil.NoSuchProcess:
                print(f&quot;Process &#123;proc.info[&apos;name&apos;]&#125; not found&quot;)</code></pre>

            <h3>System Monitoring</h3>
            <p>
              Monitor system resources and performance:
            </p>
            <pre><code>import psutil
import time
import json

def get_system_info():
    # Get comprehensive system information using psutil
    cpu = psutil.cpu_percent(interval=1)
    memory = psutil.virtual_memory()._asdict()
    disk = psutil.disk_usage(&apos;/&apos;)._asdict()
    network = psutil.net_io_counters()._asdict()
    processes = len(psutil.pids())
    # Returns system metrics
    return cpu, memory, disk, network, processes

def monitor_system(duration, interval):
    # Monitor system for specified duration
    start_time = time.time()
    data = []
    
    while time.time() - start_time &lt; duration:
        metrics = get_system_info()
        data.append(metrics)
        time.sleep(interval)
    
    return data

def save_system_log(filename, data):
    """Save system monitoring data to file"""
    with open(filename, 'w') as file:
        json.dump(data, file, indent=2)</code></pre>

            <h2>Database Automation</h2>
            
            <h3>Database Operations</h3>
            <p>
              Automate database operations:
            </p>
            <pre><code>import sqlite3
import pandas as pd

def create_database(db_name):
    """Create SQLite database with tables"""
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

def insert_data(db_name, data):
    """Insert data into database"""
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    
    for record in data:
        cursor.execute(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            (record['name'], record['email'])
        )
    
    conn.commit()
    conn.close()

def query_data(db_name, query):
    """Query data from database"""
    conn = sqlite3.connect(db_name)
    df = pd.read_sql_query(query, conn)
    conn.close()
    return df</code></pre>

            <h2>Email Automation</h2>
            
            <h3>Email Sending</h3>
            <p>
              Automate email operations:
            </p>
            <pre><code>import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

def send_email(sender, recipient, subject, body, attachment=None):
    """Send email with optional attachment"""
    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = subject
    
    msg.attach(MIMEText(body, 'plain'))
    
    if attachment:
        with open(attachment, 'rb') as file:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(file.read())
            encoders.encode_base64(part)
            part.add_header(
                'Content-Disposition',
                f&apos;attachment; filename= &#123;attachment&#125;&apos;
            )
            msg.attach(part)
    
    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender, 'your_password')
        text = msg.as_string()
        server.sendmail(sender, recipient, text)
        server.quit()
        print("Email sent successfully")
    except Exception as e:
        print(f&quot;Error sending email: &#123;e&#125;&quot;)</code></pre>

            <h2>Task Scheduling</h2>
            
            <h3>Automated Task Execution</h3>
            <p>
              Schedule and execute automated tasks:
            </p>
            <pre><code>import schedule
import time
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def daily_backup():
    """Perform daily backup"""
    logging.info("Starting daily backup...")
    # Backup logic here
    logging.info("Daily backup completed")

def weekly_cleanup():
    """Perform weekly cleanup"""
    logging.info("Starting weekly cleanup...")
    # Cleanup logic here
    logging.info("Weekly cleanup completed")

def hourly_monitoring():
    """Perform hourly system monitoring"""
    logging.info("Performing system monitoring...")
    # Monitoring logic here
    logging.info("System monitoring completed")

# Schedule tasks
schedule.every().day.at("02:00").do(daily_backup)
schedule.every().sunday.at("03:00").do(weekly_cleanup)
schedule.every().hour.do(hourly_monitoring)

def run_scheduler():
    """Run the task scheduler"""
    while True:
        schedule.run_pending()
        time.sleep(60)</code></pre>

            <h2>Error Handling and Logging</h2>
            
            <h3>Robust Error Handling</h3>
            <p>
              Implement proper error handling in automation scripts:
            </p>
            <pre><code>import logging
import traceback
from functools import wraps

def setup_logging():
    """Set up logging configuration"""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler('automation.log'),
            logging.StreamHandler()
        ]
    )

def error_handler(func):
    """Decorator for error handling"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logging.error(f&quot;Error in &#123;func.__name__&#125;: &#123;str(e)&#125;&quot;)
            logging.error(traceback.format_exc())
            return None
    return wrapper

@error_handler
def risky_operation():
    """Example of risky operation with error handling"""
    # Some operation that might fail
    result = 1 / 0  # This will raise an exception
    return result</code></pre>

            <h2>Best Practices</h2>
            
            <h3>Code Organization</h3>
            <p>
              Organize automation scripts effectively:
            </p>
            <ul>
              <li><strong>Modular Design:</strong> Break scripts into functions and modules</li>
              <li><strong>Configuration Files:</strong> Use config files for settings</li>
              <li><strong>Error Handling:</strong> Implement comprehensive error handling</li>
              <li><strong>Logging:</strong> Add detailed logging for debugging</li>
              <li><strong>Documentation:</strong> Document functions and scripts</li>
            </ul>

            <h3>Performance Optimization</h3>
            <p>
              Optimize automation scripts for performance:
            </p>
            <ul>
              <li><strong>Batch Operations:</strong> Process multiple items at once</li>
              <li><strong>Async Operations:</strong> Use async/await for I/O operations</li>
              <li><strong>Memory Management:</strong> Manage memory usage efficiently</li>
              <li><strong>Caching:</strong> Cache frequently accessed data</li>
              <li><strong>Resource Cleanup:</strong> Properly close files and connections</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Python automation is a powerful tool for increasing development productivity. By mastering the essential libraries and techniques, you can automate repetitive tasks, streamline workflows, and focus on more important work.
            </p>

            <p>
              Start with simple automation tasks and gradually build more complex solutions. Remember to always test your scripts thoroughly and implement proper error handling and logging for production use.
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
              <Link href="/productivity/automation-scripts/github-actions" className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">GitHub Actions</h4>
                <p className="text-gray-600">Automate workflows with GitHub Actions and CI/CD.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonAutomation;
