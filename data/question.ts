export type QuestionType =
  | "single-select"
  | "scale"
  | "textarea"
  | "ranking"
  | "lead-capture";

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  subtitle?: string;
  options?: string[];
}

export const questions: Question[] = [
  {
    id: "role",
    type: "single-select",
    title: "What best describes your role?",
    options: [
      "Software Engineer",
      "Product Manager",
      "Consultant",
      "Marketing",
      "Sales",
      "HR",
      "Finance",
      "Operations",
      "Founder",
      "Student",
      "Other",
    ],
  },

  {
    id: "experience",
    type: "single-select",
    title: "How many years of experience do you have?",
    options: [
      "0-2 Years",
      "3-5 Years",
      "6-10 Years",
      "10+ Years",
    ],
  },

  {
    id: "income",
    type: "single-select",
    title: "What is your annual income?",
    options: [
      "Below ₹5L",
      "₹5L - ₹10L",
      "₹10L - ₹20L",
      "₹20L - ₹50L",
      "₹50L+",
    ],
  },

  {
    id: "ranking",
    type: "ranking",
    title:
      "Rank these challenges from MOST impactful to LEAST impactful",
    subtitle:
      "Consider time, money, stress, missed opportunities and mental energy.",
  },

  {
    id: "biggest_problem",
    type: "single-select",
    title:
      "If you could magically solve ONE challenge today, what would it be?",
    options: [
      "Career Development",
      "Fitness & Health",
      "Tax & Investment Planning",
      "Email Management",
      "Meeting Notes",
      "Meeting Scheduling",
      "Resume & LinkedIn",
    ],
  },

  {
    id: "frequency",
    type: "scale",
    title:
      "How frequently do you experience this challenge?",
  },

  {
    id: "frustration",
    type: "scale",
    title:
      "How frustrating is this challenge for you?",
  },

  {
    id: "current_solution",
    type: "textarea",
    title:
      "How are you currently solving this problem?",
  },

  {
    id: "satisfaction",
    type: "scale",
    title:
      "How satisfied are you with your current solution?",
  },

  {
    id: "paid_before",
    type: "single-select",
    title:
      "Have you spent money trying to solve this challenge?",
    options: ["Yes", "No"],
  },

  {
    id: "willingness_to_pay",
    type: "single-select",
    title:
      "If a perfect solution existed, how much would you pay monthly?",
    options: [
      "₹0",
      "₹99",
      "₹299",
      "₹499",
      "₹999",
      "₹1999+",
    ],
  },

  {
    id: "open_feedback",
    type: "textarea",
    title:
      "What is the most frustrating part about this challenge?",
  },
  {
  id: "lead_capture",
  type: "lead-capture",
  title: "Get a more personalized report",
  subtitle:
    "Optional. Leave blank to stay anonymous. If you'd like to help shape future solutions, leave your details below.",
}
];