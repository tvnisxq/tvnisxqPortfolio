import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "content-alchemist",
    title: "Content Alchemist",
    description: "Autonomous AI agent orchestration framework for Google X Kaggle Capstone, transforming YouTube videos into SEO-optimized blogs, social posts, and newsletters with automated keyframe extraction.",
    longDescription: "Developed autonomous AI agent orchestration framework for Google X Kaggle Capstone, transforming YouTube videos into SEO-optimized blogs, social posts, and newsletters with automated keyframe extraction.\n\n• Engineered sequential pipeline with specialized agents and Master Content Brief compaction\n• Integrated Google Gemini 2.0 Flash, OpenCV, and yt-dlp for efficient multimodal content generation\n• Automated keyframe extraction and content transformation workflow",
    liveLink: "",
    githubLink: "https://github.com/tvnisxq",
    video: "",
    image: "/images/contentalchemist.jpg",
    tags: [
      "Python",
      "AI Agents",
      "Gemini API",
      "Flask",
      "OpenCV",
      "yt-dlp"
    ],
  },
  {
    id: "smoking-status-prediction",
    title: "Smoking Status Prediction",
    description: "ML model predicting smoking status from health data with 85%+ accuracy using advanced feature engineering and XGBoost optimization, deployed via FastAPI with CI/CD pipeline.",
    longDescription: "Built ML model predicting smoking status from health data with 85%+ accuracy using advanced feature engineering and XGBoost optimization, deployed via FastAPI with CI/CD pipeline.\n\n• Implemented advanced feature engineering techniques for improved model performance\n• Optimized XGBoost and Random Forest models for classification\n• Deployed production-ready API with FastAPI and automated CI/CD workflows",
    liveLink: "",
    githubLink: "https://github.com/tvnisxq",
    video: "",
    image: "/images/smoking-prediction.png",
    tags: [
      "XGBoost",
      "Random Forest",
      "FastAPI",
      "Machine Learning",
      "Feature Engineering",
      "CI/CD"
    ],
  },
  {
    id: "stock-prediction-ml",
    title: "Stock Prediction ML Model",
    description: "Engineered supervised ML model for stock price prediction with lag-based features and moving averages, improving accuracy by 30% and implementing regression modeling for production deployment.",
    longDescription: "Engineered supervised ML model for stock price prediction with lag-based features and moving averages, improving accuracy by 30% and implementing regression modeling for production deployment.\n\n• Developed time-series forecasting model with advanced feature engineering\n• Implemented lag-based features and moving averages for improved predictions\n• Achieved 30% improvement in prediction accuracy through model optimization\n• Built production-ready regression model for deployment",
    liveLink: "",
    githubLink: "https://github.com/tvnisxq",
    video: "",
    image: "/images/stock_prediction.jpg",
    tags: [
      "Machine Learning",
      "Time-Series",
      "Regression",
      "Feature Engineering",
      "Python"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
