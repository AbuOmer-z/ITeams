export interface Course {
  name: string;
  credits: number;
  description: string;
  category: 'software-development' | 'web-development' | 'administration-management' | 'networks-cybersecurity' | 'ai-data-science';
  majors: {
    major: 'all' | 'bit' | 'cis' | 'cybersecurity';
    courseType: 'obligatory-faculty' | 'obligatory-specialization' | 'elective-specialization';
  }[];
}

export const courses: Course[] = [
  // Software Development Courses
  {
    name: 'CALCULUS (1)',
    credits: 3,
    description: 'Introduction to calculus including limits, derivatives, and applications.',
    category: 'software-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'DISCRETE MATHEMATICS',
    credits: 3,
    description: 'Mathematical foundations including logic, sets, relations, and combinatorics.',
    category: 'software-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'COMPUTER SKILLS FOR SCIENTIFIC FACULTIES',
    credits: 3,
    description: 'Practical computer skills for academic and scientific applications.',
    category: 'administration-management',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'ADVANCED PROGRAMMING',
    credits: 3,
    description: 'Advanced programming concepts and techniques in modern programming languages.',
    category: 'software-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'DATA STRUCTURES',
    credits: 3,
    description: 'Study of data organization including lists, trees, stacks, and queues.',
    category: 'software-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'DATABASE MANAGEMENT SYSTEMS',
    credits: 3,
    description: 'Introduction to database concepts, models, and SQL.',
    category: 'software-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'FUNDAMENTALS OF IT',
    credits: 3,
    description: 'Overview of information technology concepts, tools, and applications.',
    category: 'administration-management',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },
  {
    name: 'WEB APPLICATIONS DEVELOPMENT (1)',
    credits: 3,
    description: 'Development of interactive and dynamic web applications using front-end technologies.',
    category: 'web-development',
    majors: [
      { major: 'cybersecurity', courseType: 'obligatory-faculty' },
      { major: 'cis', courseType: 'obligatory-faculty' },
      { major: 'bit', courseType: 'obligatory-faculty' },
    ]
  },

  // Obligatory Specialization Courses (BIT)
  {
    name: 'LINEAR ALGEBRA',
    credits: 3,
    description: 'Concepts of vectors, matrices, linear transformations, and systems of linear equations.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'PRINCIPLES OF STATISTICS',
    credits: 3,
    description: 'Statistical methods and applications including probability, distributions, and inference.',
    category: 'ai-data-science',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'DIGITAL LOGIC',
    credits: 3,
    description: 'Fundamentals of logic circuits, Boolean algebra, and digital systems.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'OBJECT ORIENTED PROGRAMMING (1)',
    credits: 3,
    description: 'Object-oriented programming principles using classes, inheritance, and encapsulation.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'INFORMATION SECURITY AND PRIVACY',
    credits: 3,
    description: 'Basic concepts in securing information systems and ensuring user privacy.',
    category: 'networks-cybersecurity',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'THEORY OF ALGORITHMS',
    credits: 3,
    description: 'Analysis and design of algorithms for solving computational problems.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'ARTIFICIAL INTELLIGENCE',
    credits: 3,
    description: 'Introduction to AI including search, reasoning, and learning techniques.',
    category: 'ai-data-science',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'COMPUTER NETWORKS (1)',
    credits: 3,
    description: 'Networking concepts, protocols, and architectures in modern communication systems.',
    category: 'networks-cybersecurity',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'DATA WAREHOUSING AND DATA MINING',
    credits: 3,
    description: 'Data storage strategies and mining techniques for extracting knowledge from data.',
    category: 'ai-data-science',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'SYSTEMS ANALYSIS AND DESIGN',
    credits: 3,
    description: 'Techniques for analyzing user requirements and designing information systems.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'SOFTWARE ENGINEERING',
    credits: 3,
    description: 'Principles and methodologies for software development life cycle management.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'DOCUMENTATION AND ETHICS',
    credits: 3,
    description: 'Professional ethics and documentation standards in information systems.',
    category: 'administration-management',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'MANAGEMENT INFORMATION SYSTEMS',
    credits: 3,
    description: 'Study of systems that manage organizational information for decision-making.',
    category: 'administration-management',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'elective-specialization' },
    ]
  },
  {
    name: 'DECISION SUPPORT SYSTEMS',
    credits: 3,
    description: 'Design and implementation of systems to support business decisions.',
    category: 'administration-management',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'elective-specialization' },
    ]
  },
  {
    name: 'INFORMATION RESOURCES MANAGEMENT',
    credits: 3,
    description: 'Management of IT resources and strategies for effective use of information.',
    category: 'administration-management',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'WEB PUBLISHING',
    credits: 3,
    description: 'Design and implementation of static and dynamic content for web publishing.',
    category: 'web-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'WEB APPLICATIONS DEVELOPMENT (2)',
    credits: 3,
    description: 'Advanced web development with back-end integration and modern frameworks.',
    category: 'web-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
      { major: 'cybersecurity', courseType: 'elective-specialization' },
    ]
  },
  {
    name: 'E-BUSINESS',
    credits: 3,
    description: 'Strategies and technologies for conducting business online.',
    category: 'web-development',
    majors: [
      { major: 'bit', courseType: 'obligatory-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },

  // Elective Specialization Courses (BIT)
  {
    name: 'VISUAL PROGRAMMING',
    credits: 3,
    description: 'Development of graphical user interfaces and event-driven programming.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'elective-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'OBJECT ORIENTED PROGRAMMING (2)',
    credits: 3,
    description: 'Advanced object-oriented techniques including polymorphism and design patterns.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'elective-specialization' },
      { major: 'cis', courseType: 'elective-specialization' },
    ]
  },
  {
    name: 'HUMAN COMPUTER INTERACTION',
    credits: 3,
    description: 'Designing user-centered systems with a focus on usability and experience.',
    category: 'software-development',
    majors: [
      { major: 'bit', courseType: 'elective-specialization' },
      { major: 'cis', courseType: 'obligatory-specialization' },
    ]
  },
  {
    name: 'COMPUTER ASSISTED LEARNING',
    credits: 3,
    description: 'Technologies and approaches for computer-supported education.',
    category: 'ai-data-science',
    majors: [
      { major: 'bit', courseType: 'elective-specialization' },
      { major: 'cis', courseType: 'elective-specialization' },
    ]
  },
  {
    name: 'MACHINE LEARNING',
    credits: 3,
    description: 'Algorithms and models that enable computers to learn from data.',
    category: 'ai-data-science',
    majors: [
      { major: 'bit', courseType: 'elective-specialization' },
      { major: 'cis', courseType: 'elective-specialization' },
      { major: 'cybersecurity', courseType: 'elective-specialization' },
    ]
  }
  // More courses can be added in the same format
];
