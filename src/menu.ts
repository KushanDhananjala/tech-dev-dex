export type MenuItem = {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  children?: MenuItem[];
  featured?: boolean;
};

const menu = {
  categories: [
    {
      name: "Tutorials",
      slug: "tutorials",
      description: "Step-by-step guides and coding tutorials",
      icon: "BookOpen",
      children: [
        { name: "Docker Setup Guides", slug: "docker-setup-guides", description: "Container setup and deployment" },
        { name: "Git & GitHub Tutorials", slug: "git-github-tutorials", description: "Version control mastery" },
        { name: "React / Node Deployment", slug: "react-node-deployment", description: "Full-stack deployment guides" },
        { name: "Python Automation", slug: "python-automation", description: "Scripting and automation" },
        { name: "Programming Tips", slug: "programming-tips", description: "Best practices and problem solving" },
        { name: "Web Development", slug: "web-development", description: "Frontend and backend tutorials" },
        { name: "Productivity Tools", slug: "productivity-tools", description: "Development workflow optimization" },
      ],
    },
    {
      name: "Reviews",
      slug: "reviews",
      description: "Honest reviews and comparisons",
      icon: "Star",
      children: [
        { name: "Software Reviews", slug: "software-reviews", description: "Development tools and software" },
        { name: "App Comparisons", slug: "app-comparisons", description: "Side-by-side app analysis" },
        { name: "Gadget Reviews", slug: "gadget-reviews", description: "Hardware and tech gadgets" },
        { name: "AI Tools Review", slug: "ai-tools-review", description: "AI-powered development tools" },
        { name: "Productivity Tools", slug: "productivity-tools-review", description: "Workflow and efficiency tools" },
      ],
    },
    {
      name: "AI & ML",
      slug: "ai-ml",
      description: "Artificial Intelligence and Machine Learning",
      icon: "Brain",
      children: [
        { name: "AI Coding Tools", slug: "ai-coding-tools", description: "AI-powered development assistants" },
        { name: "AI Integration", slug: "ai-integration-tutorials", description: "Adding AI to your applications" },
        { name: "Emerging Languages", slug: "emerging-languages", description: "Latest AI innovations" },
      ],
    },
    {
      name: "Web Dev",
      slug: "web-dev",
      description: "Frontend and backend development",
      icon: "Code",
      children: [
        { name: "Frontend Frameworks", slug: "frontend-frameworks", description: "React, Vue, Angular guides" },
        { name: "Backend Development", slug: "backend-development", description: "Server-side programming" },
        { name: "Database Management", slug: "database-management", description: "SQL and NoSQL databases" },
        { name: "API Development", slug: "api-development", description: "REST and GraphQL APIs" },
        { name: "DevOps & Deployment", slug: "devops-deployment", description: "CI/CD and cloud deployment" },
      ],
    },
    {
      name: "Hardware",
      slug: "hardware",
      description: "Tech gadgets and hardware reviews",
      icon: "Monitor",
      children: [
        { name: "Laptops & PCs", slug: "laptops-pcs", description: "Computer hardware reviews" },
        { name: "Development Setup", slug: "development-setup", description: "Optimal coding environments" },
        { name: "Peripherals", slug: "peripherals", description: "Keyboards, mice, and accessories" },
        { name: "Mobile Devices", slug: "mobile-devices", description: "Smartphones and tablets" },
        { name: "Gaming Hardware", slug: "gaming-hardware", description: "Gaming peripherals and equipment" },
      ],
    },
    {
      name: "Productivity",
      slug: "productivity",
      description: "Tools and tips for better workflow",
      icon: "Zap",
      children: [
        { name: "Development Tools", slug: "development-tools", description: "IDEs, editors, and utilities" },
        { name: "Project Management", slug: "project-management", description: "Team collaboration tools" },
        { name: "Automation Scripts", slug: "automation-scripts", description: "Workflow automation" },
        { name: "Time Management", slug: "time-management", description: "Productivity techniques" },
        { name: "Learning Resources", slug: "learning-resources", description: "Educational platforms and courses" },
      ],
    },
  ] as MenuItem[],
} as const;

export default menu;


