export const siteConfig = {
  name: "Rishabh Sharma Vemuri",
  title: "Software Engineer Intern @ LexisNexis",
  description: "CS + Stats @ UNC Chapel Hill",
  accentColor: "#000000ff",
  social: {
    email: "rishabhsvemuri@gmail.com",
    linkedin: "https://linkedin.com/in/rishabhvemuri",
    github: "https://github.com/rishabhsvemuri",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Python", "Python", "C", "C++", "Java"],
  projects: [
    {
      name: "Multimodal Robotic Task Planner",
      description: [
        "Developing a modular task planning framework for robotic joint applications, constructing dynamic scene graphsfrom real-time object detection and classification and implementing inverse kinematics.", 
        "Implemented a Graph Neural Network to model spatial and semantic relationships, predicting optimal manipulation routes and improving task efficiency."],
      url: "https://github.com/rishabhsvemuri",
      skills: ["Python", "Torch", "Yolo", "OpenCV"],
    },
    {
      name: "Algorithmic Trader",
      description: [
        "Leveraged SP500 data for an unsupervised learning trading strategy with a K-Means clustering algorithm in Python. Integrated derivatives pricing for financial modeling.", 
        "Collected data, built model, and backtested with Pandas, Numpy, yfinance, Scikit-Learn for model validation."],
      url: "https://github.com/rishabhsvemuri",
      skills: ["Python", "Torch", "Numpy", "Pandas"],
    },
    {
      name: "On the Grid",
      description: [
        "A web application with a customizable user interface allowing users to create organizations of news sources on a grid with REST APIs and Angular.", 
        "Location-based filtering allows users to stay updated with news across various regions simultaneously."],
      url: "https://github.com/rishabhsvemuri",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "LexisNexis",
      orgURL: "https://www.lexisnexis.com/en-us",
      title: "Software Engineer Intern",
      dateRange: "June 2025 - Present",
      description: [
        "Worked on the CaseMap+ AI product by developing AWS Lambda workers for asynchronous processing, workflow optimization, and high-coverage testing with 95%+ unit and integration test coverage.",
        "Integrated secure document transfer with Relativity using OAuth 2.0 and AWS across the frontend and backend. Implemented PKCE with secrets management and .NET to strengthen cryptographic protection by 50%."
      ],
    },
    {
      company: "Phanstiel Lab",
      orgURL: "http://phanstiel-lab.med.unc.edu/",
      title: "Software Engineer Research Intern",
      dateRange: "Jan. 2024 - Present",
      description: [
        "Leading the development of a full stack cross-platform desktop application for genomic data visualization and analysis using the plotgardener R package. Built with Node.js, Electron, and React for biostatisticians.",
        "Developed an AI-powered Python parser with NLTK to streamline extraction of genomic documentation by 30%.",
        "Presented a talk on the project at the Posit 2025 conference; writing a peer-reviewed publication as first-author."
      ],
      references: [
        {
          name: "Repo",
          link: "https://github.com/rishabhsvemuri/pgUI"
        },
        {
          name: "Posit Talk",
          link: "https://www.youtube.com/watch?v=PW_liIFne2g&t=1s",
        }
      ]
    },
    {
      company: "1893 Brand Studio",
      orgURL: "https://1893.dailytarheel.com/",
      title: "Web Development Team Lead",
      dateRange: "Sept. 2022 - Jan. 2024",
      description: [
        "Led a team of 4 student developers in a client-facing environment to design, develop, and deploy 7 SEO-optimized websites, improving clients’ digital engagement by up to 45%. Collaborated with 5 other teams in the agency.",
        "Built wireframes with Figma and responsive client-specific websites with JavaScript, HTML/CSS, Angular, React."
      ],
      references: [
        {
          name: "Spicy 9",
          link: "https://www.spicy9chapelhill.com/"
        },
        {
          name: "WakeEd Partnership",
          link: "https://www.wakeed.org/"
        },
        {
          name: "1893 Brand Studio",
          link: "https://1893.dailytarheel.com/"
        }
      ]
    },
  ],
  education: [
    {
      school: "University of North Carolina at Chapel Hill",
      degree: "B.S. Computer Science, B.S. Statistics and Analytics",
      dateRange: "2022 - 2026",
      selectedCoursework: [
        "Data Structures and Algorithms", 
        "Algorithms and Analysis", 
        "Machine Learning", 
        "Computer Vision", 
        "Robotics", 
        "Probability", 
        "Optimization", 
        "Models of Language and Computation",
        "3D Computer Graphics",
      ]
    },
  ],
};
