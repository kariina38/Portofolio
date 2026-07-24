import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables in .env.local")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const projectsData = [
  {
    title: "PERFINT – Personal Finance Tracker",
    subtitle: "AI-Powered Personal Finance Management Platform",
    description: "An AI-powered personal finance management platform that helps users track income and expenses, manage multiple wallets, set budgets, and receive intelligent financial insights.",
    long_description: "PERFINT is a mobile-first web application designed to simplify personal financial management through AI-driven automation. The platform features an interactive financial dashboard, AI-powered receipt scanning (OCR), spending forecasts, budget management with automated alerts, multi-wallet support, and FinAI, an intelligent financial assistant. It also provides secure authentication using JWT and Two-Factor Authentication (2FA).",
    role: "Full-Stack Developer",
    timeline: "Feb 2026 – May 2026",
    features: [
      "Interactive Financial Dashboard",
      "AI Receipt OCR Scanner",
      "FinAI Financial Assistant",
      "Budget Planning & Spending Alerts",
      "Multi-Wallet Management",
      "Spending Forecast",
      "JWT Authentication & Two-Factor Authentication (2FA)"
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "SQLite", "Google Gemini AI", "Docker", "Nginx"],
    image_url: "/projects/perfint.png",
    github_url: "https://github.com/kariina38/PERFINT",
    demo_url: "https://perfint-swart.vercel.app/"
  },
  {
    title: "Harin Learning",
    subtitle: "Interactive E-Learning Platform & AI Study Assistant",
    description: "An AI-powered e-learning platform that enhances online learning through intelligent study planning, AI assistance, interactive courses, and real-time learning analytics.",
    long_description: "Harin Learning was developed to provide a modern and engaging digital learning experience. The platform enables course management, student enrollment, and community discussions while integrating AI-powered features such as an AI Study Planner and AI Assistant chatbot. It also includes a Teacher Dashboard with real-time analytics for monitoring student engagement, course performance, and revenue.",
    role: "Full-Stack Developer",
    timeline: "May 2026 – July 2026",
    features: [
      "AI Study Planner",
      "AI Assistant Chatbot",
      "Course Management",
      "Student Enrollment",
      "Teacher Dashboard",
      "Real-Time Analytics",
      "Community Discussion",
      "Certificate Generation"
    ],
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenRouter API"],
    image_url: "/projects/harin.jpeg",
    github_url: "https://github.com/Pusri27/AiLearning",
    demo_url: "https://harin-ailearning.vercel.app/"
  },
  {
    title: "FoodLink",
    subtitle: "AI-Powered Food Donation & Distribution Platform",
    description: "A surplus food redistribution platform that connects food donors with social organizations through secure role-based dashboards and real-time distribution management.",
    long_description: "FoodLink was developed to reduce food waste by connecting surplus food providers with social organizations in need. The platform features role-based dashboards for donors, recipients, and administrators, along with real-time food distribution tracking, analytics dashboards, and distribution heatmaps. To ensure data privacy and secure access, the system implements Row Level Security (RLS) using Supabase.",
    role: "Full-Stack Developer (Team Project)",
    timeline: "June 2026 – July 2026",
    features: [
      "Role-Based Dashboard",
      "Food Donation Management",
      "Real-Time Distribution Tracking",
      "Analytics Dashboard & Heatmaps",
      "Secure Authentication",
      "Row Level Security (RLS)"
    ],
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    image_url: "/projects/foodlink.jpeg",
    github_url: "https://github.com/Pusri27/FoodLink",
    demo_url: null
  },
  {
    title: "Tech Museum",
    subtitle: "Digital Technology Exhibition Platform",
    description: "A web-based digital exhibition platform designed to showcase innovative technology projects created by President University students through an interactive and responsive experience.",
    long_description: "Tech Museum was developed to document and promote technology projects from the Informatics and Information Systems programs at President University. As the Front-End Developer, I designed and implemented responsive user interfaces, project catalogs, testimonial pages, project submission forms, and an admin dashboard while ensuring an intuitive user experience across all devices.",
    role: "Front-End Developer",
    timeline: "2025",
    features: [
      "Responsive Digital Exhibition Platform",
      "Student Project Catalog & Detail Pages",
      "Testimonial & Rating System",
      "Project Submission Portal",
      "Daily Inspirational Quotes",
      "Admin Dashboard"
    ],
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
    image_url: "/projects/techmuseum.png",
    github_url: "https://github.com/kariina38/TechMuseum",
    demo_url: "http://techmuseum.great-site.net/"
  },
  {
    title: "IndoorVision – YOLOv11 Instance Segmentation",
    subtitle: "Computer Vision & Deep Learning",
    description: "IndoorVision is a computer vision project developed to perform indoor object instance segmentation using the YOLOv11 segmentation model.",
    long_description: "IndoorVision is a computer vision project developed to perform indoor object instance segmentation using the YOLOv11 segmentation model. The project covers the complete machine learning pipeline, including dataset preprocessing and augmentation with Roboflow, model training in Google Colab, performance evaluation using Precision, Recall, Average Precision (AP), and Mean Intersection over Union (mIoU), and deployment through an interactive Gradio interface for real-time image inference and visualization.",
    role: "Machine Learning Engineer",
    timeline: "2026",
    features: [
      "Indoor object instance segmentation using YOLOv11",
      "Dataset preprocessing and augmentation with Roboflow",
      "Model training and evaluation in Google Colab",
      "Performance metrics (Precision, Recall, AP, mIoU)",
      "Interactive Gradio interface for real-time predictions",
      "Segmentation visualization with overlay comparison"
    ],
    tags: ["Python", "YOLOv11", "Computer Vision", "Deep Learning", "Roboflow", "Google Colab", "Gradio", "OpenCV", "NumPy", "Matplotlib"],
    image_url: "/projects/indoorvision.jpg",
    github_url: null,
    demo_url: null
  },
  {
    title: "SmartAssist – Hybrid E-Commerce Customer Service Chatbot",
    subtitle: "Natural Language Processing & Generative AI",
    description: "SmartAssist is a hybrid AI-powered customer service chatbot designed for e-commerce applications combining speech recognition, intent classification, RAG, and LLMs.",
    long_description: "SmartAssist is a hybrid AI-powered customer service chatbot designed for e-commerce applications. The system combines speech recognition, intent classification, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs) to deliver intelligent and context-aware customer support. My primary contribution focused on developing the speech processing pipeline using Whisper for speech-to-text transcription and implementing the intent classification module, enabling the chatbot to accurately identify customer requests before processing them through the conversational workflow.",
    role: "NLP Engineer (Speech Processing & Intent Classification) Team Project",
    timeline: "2026",
    features: [
      "Speech-to-Text using OpenAI Whisper",
      "Intent classification for customer requests",
      "Hybrid chatbot combining rule-based logic and LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Named Entity Recognition (NER)",
      "Conversation summarization and BART vs PEGASUS model comparison"
    ],
    tags: ["Python", "Natural Language Processing", "Whisper", "Hugging Face", "Streamlit", "RAG", "Generative AI", "Groq API", "Gemini API", "BART", "PEGASUS"],
    image_url: "/projects/smartassist.jpg",
    github_url: null,
    demo_url: null
  }
]

async function seed() {
  console.log("Seeding projects into Supabase...")
  const { data, error } = await supabase.from('projects').insert(projectsData)
  if (error) {
    console.error("Error seeding projects:", error.message)
  } else {
    console.log("Projects successfully seeded into Supabase!")
  }
}

seed()
