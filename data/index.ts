export const gridItems = [
  {
    id: 1,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 md:col-span-2 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const navItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  {
    name: "Projects",
    link: "/projects",
    projectLinks: [
      { name: "Project 1", link: "/project1" },
      { name: "Project 2", link: "/project2" },
      { name: "Project 3", link: "/project3" },
      { name: "Project 4", link: "/project4" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

export const projects = [
  {
    id: 1,
    title: "TravelBuddy",
    name: "TravelBuddy",
    des: "Work professionally as a UX/UI designer with Front End skills. Translate user needs into a finished product or service. Use agile methods to participate in a project with a user-centered perspective and oversee web development and complete assigned projects within the professional role.",
    img: "/ReseApp.png",
    iconLists: [
      "/figma.png",
      "/discord.png",
      "/css.png",
      "/html.png",
      "/javascript.png",
    ],
    link: "/project1",
  },
  {
    id: 2,
    name: "Shoes & Stitches",
    title: "Shoes & Stitches, WebShop Application",
    des: "Deepen the knowledge and ability to develop interfaces for both mobile applications and websites using the ReactJS framework. The focus is on optimizing usability, ensuring accessibility and exploring opportunities for further development.",
    img: "/p2.png",
    iconLists: [
      "/figma.png",
      "/discord.png",
      "/css.png",
      "/html.png",
      "/javascript.png",
    ],
    link: "/project2",
  },
  {
    id: 3,
    name: "FemTask",
    title: "FemTask, Web Application",
    des: "Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to transform user insights into targeted solutions that meet specific needs while creating meaningful and engaging user experiences.",
    img: "/p3.png",
    iconLists: [
      "/figma.png",
      "/discord.png",
      "/css.png",
      "/html.png",
      "/javascript.png",
    ],
    link: "/project3",
  },
  {
    id: 4,
    name: "Ullis Fitness & Kroppvård",
    title: "Ullis Fitness & Kroppvård, Web Application",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.PNG",
    iconLists: [
      "/figma.png",
      "/discord.png",
      "/css.png",
      "/html.png",
      "/javascript.png",
    ],
    link: "/project4",
  },
];

export const testimonials = [
  {
    quote:
      "Stylish design for the webshop it really feels like a realistic webshop! The buying flow is very good and you also manage to get me to look at more products than I was originally interested in.",
    name: "Sabina S",
    title: "Program manager",
  },
  {
    quote:
      "Pat was able to quickly identify and solve complex problems. She was always willing to go the extra mile to ensure that our project was a success.",
    name: "Marcus P",
    title: "CEO of Fitness and body health",
  },
  {
    quote:
      "Pat is a very knowledgeable and professional whom I have had the pleasure of working with for many years. Pat is a person with a big and warm heart who really cares about others.",
    name: "Nadia N",
    title: "CEO of NRS Studio AB",
  },
];

export const companies = [
  {
    id: 1,
    name: "NRS Studio AB",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Ullis Fitness & Kroppsvård",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "NRS Stockholm",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Place One",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title:
      "In-depth Interaction Design with Modeling and Requirements Management",
    desc: "I have gained a good understanding of quality assurance and iterative requirements management and tools for this. I have worked on designing digital services and processes for customer and user engagement. I have organized workshops, used impact mapping, and developed key performance indicators to measure effects. Throughout the design process, I have used user-centric methods and worked with information structure and navigation, as well as managed requirements management and ensured accessibility.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development with React",
    desc: "I have developed interactive web and mobile applications in ReactJS, working on retrieving component data, creating custom hooks, and handling exceptions. I have also implemented routing and authentication for users, and built component-based applications using JSX. I have become an expert in using React hooks and knowledge control methods.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX and Interaction Design with an Agile Approach",
    desc: "I have participated in sprint planning, daily stand-ups, and retrospectives, focusing on usability goals and user experience. I have collected and analyzed both qualitative and quantitative data to create wireframes and interactive prototypes. I have worked in agile teams and used empirical analysis methods to assess usability.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UX/UI Designer with Frontend Skills",
    desc: "I have used Figma to design interactive user interfaces and artifacts, using features such as Auto Layout and components. I have also created and maintained simple design systems and adapted interfaces for different devices. I have focused on accessibility and justified my design decisions through careful evaluation.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "Basic Frontend Programming",
    desc: "I have learned the basics of Javascript, HTML and CSS, as well as testing and API management methods. I have built interactive web pages and worked on retrieving and presenting data from CMS. I have also applied WCAG to ensure accessibility in my applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 6,
    title: "IT Tech & Operations",
    desc: "I have gained insights into the role of the Javascript developer in web development projects and investigated common technology stacks. I have learned about system development methodologies such as Scrum and how CD/CI works in agile development. I have also understood the role of the requirements specification and how it is connected to the developer's work.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const Approachs = [
  {
    id: 1,
    title: "User-Focused, Data-Driven, and Seamlessly Integrated",
    icon: "UX/UI Design",
    img: "/creator.png",
    des: "I create intuitive, user-centered designs by combining data insights and user feedback. My approach ensures designs are functional, visually appealing, and meet business goals while being adaptable through agile methodologies.",
  },
  {
    id: 2,
    title: "Clear, Engaging, and Performance-Optimized",
    icon: "Web Design",
    img: "/web.png",
    des: "I design responsive, mobile-first websites that focus on speed, clear navigation, and user engagement. By optimizing for performance and SEO, I ensure your website is both attractive and effective at converting visitors.",
  },
  {
    id: 3,
    title: "Collaborative, Iterative, and Results-Driven",
    icon: "UI/UX Web Design",
    img: "/mobile.png",
    des: "I work closely with clients and users, using an iterative approach to refine designs based on feedback. I focus on clarity, usability, and adaptability to deliver results that improve engagement, conversions, and overall user satisfaction.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];

export const project1Items = {
  HeroImg: [
    {
      id: 1,
      name: "About TravelBuddy",
      img: "/TB-Mobile/HeroImg1.png",
      Link: "#about",
    },
    {
      id: 2,
      name: "My Role",
      img: "/TB-Mobile/HeroImg2.png",
      Link: "#myrole",
    },
    {
      id: 3,
      name: "Problems & Solutions",
      img: "/TB-Mobile/HeroImg3.png",
      Link: "#problems",
    },
    {
      id: 4,
      name: "Persona",
      img: "/TB-Mobile/HeroImg4.png",
      Link: "#persona",
    },
    {
      id: 5,
      name: "Key Features",
      img: "/TB-Mobile/HeroImg5.png",
      Link: "#keyfeatures",
    },
    {
      id: 6,
      name: "User Flow",
      img: "/TB-Mobile/HeroImg6.png",
      Link: "#userflow",
    },
    {
      id: 7,
      name: "UI Design",
      img: "/TB-Mobile/HeroImg7.png",
      Link: "#uidesign",
    },
    {
      id: 8,
      name: "Visual Design",
      img: "/TB-Mobile/HeroImg8.png",
      Link: "#visualdesign",
    },
  ],

  myroles: [
    {
      title: "Typography & Layout",
      description: "Ensured clean, readable text and clear hierarchy.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons1.png",
    },
    {
      title: "Spacing & Padding",
      description:
        "Made sure elements were well-spaced for a visually balanced design.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons2.png",
    },
    {
      title: "Component Structure",
      description: "Helped define reusable UI components for consistency",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icon3.png",
    },
    {
      title: " Accessibility (WCAG)",
      description: "Checked contrast ratios and color accessibility.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons4.png",
    },
    {
      title: "Flow Documentation",
      description:
        "when the application is continued, it can be easily carried out.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons5.png",
    },
    {
      title: "Research",
      description:
        "This process is made so that the requirements and problems obtained meet the target market.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons6.png",
    },
  ],

  Personas1: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-2 row-start-1 row-end-3 xl:col-span-4 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: Eva - Adventurous Traveler",
      description:
        "Eva enjoys outdoor activities like hiking, camping, and diving. She values freedom, adventure, and self-challenge.",
    },
    {
      id: 2,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-4 xl:row-span-1",
      title: "Goals",
      description:
        "Eva wants personalized adventure recommendations and real-time information about terrain and weather conditions at her travel destinations. She struggles with finding reliable, up-to-date travel information tailored to her specific interests.",
    },
    {
      id: 3,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Think & Feel",
      description:
        "Eva seeks freedom and adventure but gets frustrated by lack of relevant information.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "See",
      description:
        "Eva is constantly looking for travel apps that provide detailed information and real-time updates.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Hear",
      description: "She hears tips from other travelers and online reviews.",
    },
    {
      id: 6,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Say & Do",
      description:
        "'I want recommendations for new adventures' — Eva plans and books activities based on her interests.",
    },
  ],

  Personas2: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: David - Business Traveler",
      description:
        "I travel frequently for work and need to book flights, hotels, and transportation at the last minute. I use apps and online booking services to make my reservations and keep track of my travel plans.",
    },
    {
      id: 2,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      title: "Goals",
      description:
        "' For me, it would be very useful if the AI assistant could act as a personal travel assistant that could handle the entire booking process for me, including comparing prices, booking flights and hotels, and keeping track of my travel plans. I would also like the assistant to be able to give me real-time updates on flight status and traffic conditions to help me plan my business trips smoothly and efficiently. '",
    },
    {
      id: 3,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Think & Feel",
      description:
        "Values efficiency and ease in booking travel. Frustrated by last-minute bookings and lack of real-time updates.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "See",
      description:
        "Sees airports, hotels, and booking platforms on his devices.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Hear",
      description: "Hears tips from colleagues on efficient travel planning.",
    },
    {
      id: 6,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Say & Do",
      description:
        "'I need an app to handle my bookings.' Does, books last-minute travel and manages itineraries using apps.",
    },
  ],

  CompetitiveAnalysis: [
    {
      title: "AI-Powered Personalization",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Unlike many apps, TravelBuddy's AI offers real-time personalized recommendations, adapting to the user's preferences.",
    },
    {
      title: "Centralized Platform",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "TravelBuddy combines booking and itinerary management in one seamless platform, eliminating the need to juggle multiple apps.",
    },
  ],

  DesignKeyFeatures: [
    {
      title: "Geo-Based Recommendations",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Real-time tips about local attractions, events, and weather to help users make the most of their destination.",
    },
    {
      title: "Search Filters",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can filter by price, cuisine, or activity type, making the search process more efficient.",
    },
    {
      title: "Craving Input",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "For food-related searches, users can input or select specific cravings, allowing for a more personalized dining experience.",
    },
    {
      title: "Typography & Layout",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "The typography was chosen for readability, with clear hierarchy and legible fonts. Spacing and padding were adjusted to ensure visual balance across the app.",
    },
    {
      title: "Personalized Recommendations",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "AI technology provides tailored travel suggestions based on the user's preferences, budget, and previous trips.",
    },
  ],

  KeyFeatures: [
    {
      title: "Personalized Assistance",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "The app tailors the user's experience by addressing them by name and offering customized services (vacation planning, finding places to stay, eating out, and activities).",
    },
    {
      title: "Custom Search Filters",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can filter dining options by price range, type of cuisine, or specific cravings, enhancing the search experience.",
    },
    {
      title: "Flexibility in Choices",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can either select predefined options or input specific desires (e.g., specific food cravings or types of vacation).",
    },
    {
      title: "Rating System",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Users can rate the app on a scale of 1 to 5 stars and add a review title and detailed feedback to explain their rating. Users have the option to cancel the rating process or send their feedback, giving them control over the process.",
    },
    {
      title: "User Profile",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Profile creation allows the app to personalize recommendations based on preferences, improving the overall user experience.",
    },
  ],

  testingandresults: [
    {
      title: "80%",
      description:
        "Of users found the AI recommendations highly useful for trip planning, significantly reducing decision fatigue.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "90%",
      description:
        "Of users reported that the app's layout was easy to navigate, thanks to clear typography and thoughtful spacing.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "40%",
      description:
        "Reduction in decision-making time, with users feeling less stressed and more organized during the planning process",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
  ],

  StylingSystem: [
    {
      title: "Colors system",
      description:
        "The color system is designed to provide a cohesive tonal palette with clear differentiation for primary, secondary, and tertiary elements. Each color tone supports both light and dark themes, ensuring adaptability across different environments. Accent colors like red (error) and green (success) are used to signal important states and actions. The neutral and neutral variant tones provide a flexible base for backgrounds, surfaces, and text.",
      points: [
        "Dark Background(#0F1512): Provides a modern, sleek background for nighttime or focus modes. ",
        "Light Background(#F5FBF7):Ensures a fresh, clean look for day mode or content-heavy pages.",
        "Text Color(#D9D9D9): Is used to create high readability against both the dark and light backgrounds.",
        "Logo & Hovering Effects(#86D6BE): Enhances the brand identity and provides an engaging hover effect to guide user interactions. ",
        "Shadowing(#86D6BE): Subtle shadows are used to create depth and focus, enhancing important UI elements without overwhelming the user.",
      ],
      img: "",
    },
    {
      title: "Typography",
      description: "Montserrat and Roboto",
      points: [
        "Display: For banners and key sections.",
        "Headings: Used to organize content visually.",
        "Body text: Clear and legible for long-form content.",
        "Labels and buttons: Minimal yet noticeable, ensuring clarity.",
      ],
      img: "",
    },
    {
      title: "SpacingSystem",
      description:
        "The spacing system follows a 4-point grid, scaling from 2px (3xs) to 160px (8xl). This consistency ensures balanced layouts and predictable alignment across all devices.",
      img: "",
    },
  ],

  FutureImprovements: [
    {
      title: "Voice-Based Travel Assistance",
      description:
        "Introducing voice commands to make the app even more user-friendly, especially for users on the go.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Social Media Integration",
      description:
        "Enabling users to share their itineraries and experiences with friends or family.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Deeper AI Insights",
      description:
        "Enhancing the AI to provide even more granular recommendations, such as suggesting specific outdoor activities or events based on weather forecasts.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
    },
  ],

  ReflectionAndChallenges: [
    {
      title: "✨ Managing Personalization Without Complexity",
      description:
        "One of our biggest challenges was balancing a personalized experience with simplicity. While we wanted TravelBuddy to offer tailored recommendations, too many customization options initially confused users. To address this, we simplified the interface by introducing guided choices and offering default settings that users could refine over time as they interacted more with the app.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "✨ Improving Geolocation Accuracy",
      description:
        "Ensuring that location-based suggestions were accurate was critical for the app's success. Early in development, we noticed inconsistencies in geolocation data, particularly in remote areas. To overcome this, we improved our use of geolocation services by switching to more reliable APIs, while also integrating fallback options to ensure users still received relevant recommendations even when precise location data was unavailable.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "✨ Optimizing the AI for Usability",
      description:
        "The AI assistant was central to our design, but early testing revealed that it occasionally struggled to deliver contextually relevant suggestions. Users sometimes found it slow or requiring too many inputs. After evaluating the AI's natural language processing, we improved its ability to anticipate user needs, refining its decision-making process to deliver faster, more relevant suggestions with minimal effort from the user.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "✨ Balancing Notifications and Real-Time Updates",
      description:
        "We faced a challenge in keeping users informed without bombarding them with too many notifications. Initially, users felt overwhelmed by frequent updates, especially during their travels. To improve, we implemented a more intelligent notification system that prioritizes important updates while allowing users to customize how and when they receive alerts, ensuring a less intrusive experience.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "Responsiveness and Availability",
      description:
        "Our system ensures a harmonious, accessible, and responsive design framework that is user-friendly and adaptable to varying contexts.",
      points: [
        "The color system adheres to WCAG standards, ensuring sufficient contrast ratios for text and interactive elements. Both themes (light and dark) are optimized for user comfort in varying lighting conditions.",
        "The typography system supports dynamic resizing for various screen sizes and ensures readability on both small and large displays.",
        "The scalable spacing system adapts fluidly to different screen sizes, maintaining proportionality while ensuring a clean and organized visual hierarchy.",
        "Interactive components include focus indicators and ARIA labels for screen readers, ensuring usability for all users, including those relying on assistive technologies.",
      ],
      img: "",
    },
  ],

  Conclusions: [
    {
      title: "Conclusion",
      description:
        "By addressing user pain points such as decision fatigue, disorganized planning, and lack of personalization, TravelBuddy successfully simplifies the travel planning process, offering users a more seamless and enjoyable experience.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Conclusion",
      description:
        "The app's features, such as AI-driven recommendations, geo-based tips, and centralized booking, make it a unique solution in the travel industry.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
  ],

  userflows: [
    {
      title: "Onboarding :",
      description:
        " Users are greeted and prompted to create an account or log in. They input basic preferences, allowing for personalized recommendations.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Search for Travel Options :",
      description:
        "Users can search for nearby places to stay, dining options, and activities, with recommendations customized based on their profile.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Book & Plan :",
      description:
        "Once users find their ideal options, they can easily book flights, accommodations, and activities—all in one app.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Pre-Travel Checklist & Notifications :",
      description:
        "Users receive timely reminders and updates to ensure they are ready for their trip.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
  ],
};

export const project2Items = {
  Overview: [
    {
      title: "Goal",
      description:
        "Develop an e-commerce platform for a fashion brand that sells clothes and shoes.",
    },
    {
      title: "Frameworks:",
      description: "ReactJS with Vite and TailwindCSS.",
    },
    {
      title: "Focus Areas:",
      description:
        "User friendliness, accessibility (WCAG standards), and future further development.",
    },
    {
      title: "Timeline:",
      description: "5 weeks.",
    },
    {
      title: "Team Size:",
      description: "5 people",
      points: ["Yasin", "Banafsheh", "Pat", "Ella", "Marsel"],
    },
  ],

  DesignProcess: [
    {
      title: "Design Process",
      description: "",
      points: [
        "The design process is based on a user-centered methodology where we started with research to understand the target group's needs and problems.",
        "This was followed by wireframes and prototypes created in Figma, and development is iterative with continuous testing and improvement.",
        "The process is agile with the help of a Kanban board, which provides structure and flexibility in the work. ",
        "To keep the project organized and deliver on time, we divided five weeks into different phases (research, design, development, testing, iteration).",
      ],
      img: "",
    },
  ],

  UserResearch: [
    {
      title: "User Research",
      description: "",
      points: [
        "We interview potential users to understand their needs and behaviors so we can ensure that design and features meet user expectations.",
        "During the user survey, interviews and surveys were conducted to understand what the target group is looking for in an e-commerce platform.",
        "It turned out that users value fast and easy navigation, clear product descriptions and a hassle-free checkout process.",
      ],
      img: "",
    },
  ],

  Personas: [
    {
      title: "Lisa Andersson",
      overview: "32 years old, lives in Stockholm, works as a project manager.",
      preferences:
        "Shop for clothes quickly and easily online without being overwhelmed by too much information.",
      needs: "Fast navigation, easy filtering and clear product information.",
      challenges: "Loses patience with complicated buying processes.",
    },
  ],

  Assignment: [
    {
      title: "Assignment",
      description:
        "The task is to create a complete e-commerce application with features such as product pages, filtering, shopping cart and checkout. We must ensure a good user experience and optimize both design and functionality to meet users' needs.",
    },
  ],

  PainPoints: [
    {
      title: "Pain Points",
      description:
        "To prioritize solutions that improve the user experience, we identify problems through research:",
      points: [
        "Difficult to navigate websites",
        "Poor product overview",
        "Unclear purchase flows",
      ],
      img: "",
    },
  ],

  KeyFeatures: [
    {
      title: "Product list and filtering",
      description:
        "Products are displayed in a grid format with images, prices and short descriptions. Users can filter the products based on category, price range or size. This improves the user experience by allowing the user to quickly find relevant products, especially in large catalogs.",
    },
    {
      title: "Responsive design",
      description:
        "The website is optimized for both desktop and mobile users. The layout automatically adjusts based on screen size using TailwindCSS classes like sm: and lg:, ensuring a consistent experience regardless of device.",
    },
    {
      title: "Smooth shopping cart flow",
      description:
        "The shopping cart is easily managed by adding, removing and updating quantities directly in the shopping cart view. The user can clearly see the total price and quickly proceed to payment without being faced with unnecessary steps or confusing interfaces.",
    },
  ],

  StylingSystem: [
    {
      title: "Styling-system Overview",
      description: "",
      points: [
        "A design system is a collection of rules, components and guidelines that ensure consistency in design and user experience. We focus on colors, typography, spacing and layout customizations suitable for an e-commerce website.",
        "To create a consistent and user-friendly website. Users should quickly understand and navigate the page without visual disturbances.",
        "The combination of a strong accent color (orange) with neutral gray scales gives a professional and modern feel. This design system balances energy and elegance, which is important for a model-based e-commerce.",
      ],
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: [
        "Orange(#F25D10): Used for CTA (Call to Action) buttons, drawing users' attention to important interactions such as 'Buy Now' or 'Subscribe'.",
        "Green(#32A850): For success messages, for example after a purchase or a successful login.",
        "White(#FFFFFF): For backgrounds and text surfaces to create clear contrast.",
      ],
      img: "",
    },
    {
      title: "Background grayscales",
      description: "",
      points:
        "From bg-gray-500 to bg-gray-950: used for different levels of contrast, sections and hierarchical visual elements.",
      img: "/wsColors.png",
    },
    {
      title: "Typography: 'Poppins'",
      description:
        "This typeface is modern, easy to read and provides a sense of professionalism and playfulness suitable for fashion brands.",
      points: [
        "Display 1 & 2 Desktop: For large headlines and banners, making it easy to grab attention.",
        "Subheading: For subsections and category titles, guiding the user visually.",
        "Body: For body text and product descriptions; easy to read in long blocks of text.",
        "Mobile styling: Smaller text sizes to ensure content doesn't feel overwhelming or crowded on small screens.",
      ],
      img: "/wsTypografi.png",
    },
    {
      title: "Spacing System",
      description:
        "Grid System: 4-point grid: All elements, from buttons to text spacing, are based on multiples of 4. For example, the padding around a button might be 8px, while the spacing between headers and text might be 16px. It provides a unified design that feels balanced and makes it easy to adjust the design for different screen sizes.",
      img: "/WsGridSystem.png",
    },
  ],

  ResponsiveDesign: [
    {
      title: "Responsive Design:",
      description:
        "We do less padding and adjusted spacing to utilize smaller screens effectively for mobile devices. On the desktop device, we provide more air between sections to improve readability.",
    },
    {
      title: "Components Styling Buttons:",
      description:
        "We use large buttons with an orange background (CTAs, such as 'Add to Cart') for primary buttons and darker colors for less important actions such as 'Read More' or secondary buttons so that users can immediately understand what an important action is.",
    },
    {
      title: "Components Styling Labels:",
      description:
        "We create small indicators, for example the size of shoes or clothes, to help users quickly find the right option.",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "Responsiveness and Availability",
      points: [
        "All colors follow the WCAG standard for sufficient contrast between text and background.",
        "Header and body sizes adjust based on screen size.",
        "All buttons and form fields have focus indicators for non-mouse users.",
        "ARIA labels are used on buttons and forms for screen reader support.",
      ],
    },
  ],

  Development: [
    {
      title: "Development with React 'Vite'",
      description:
        "In order for us to develop an e-commerce application that contains basic functions, we need to create a list of products to be retrieved from an API. We use apiLinks to an external site, to only download products and product pages.",
      points: [
        "We manage a flow for the shopping cart in your application using state/local storage.",
        "It shows the product in detail and information about a product.",
        "This can be solved with the help of route parameters Links to an external site. ",
        "We create code that enables the user to add products to a shopping cart. ",
        "Shopping cart displays an overview of the shopping cart with the option to change the number or remove products and to complete the purchase.",
        "As well as a simple page that shows a summary of the purchase.",
      ],
      img: "/Handling2.png",
    },
  ],

  Mockup: [
    {
      title: "Lo-fil",
      img: "/APIcalls.png",
    },
    {
      title: "Mobile mockup",
      img: "/APIcalls.png",
    },

    {
      title: "Desktop mockup",
      img: "/APIcalls.png",
    },
  ],

  CodeExamples: [
    {
      title: "API calls to retrieve products",
      img: "/APIcalls.png",
    },
    {
      title: "View shopping cart and checkout process",
      img: "/View.png",
    },
    {
      title: "Handling of shopping cart with local state",
      img: "/Handlings.png",
    },
    {
      title: "Product detail page with route parameters",
      img: "/ProductDetail.png",
    },
    {
      title: "Handling of Orders",
      img: "/HandlingOfOrders.png",
    },
  ],

  Todobetter: [
    {
      title: "Authentication:",
      description:
        "Authentication is used to ensure that users can log in and manage their accounts or orders securely. We can use JSON Web Tokens (JWT) to authenticate users and store a login token in the browser's localStorage or sessionStorage.",
    },
    {
      title: "Registration:",
      description:
        "When a user creates an account, their information is sent to an API endpoint (/registry). If the registration is successful, the user can login.",
    },
    {
      title: "Login:",
      description:
        "The user's login information is sent to an API endpoint (/login), and on success a token is stored in localStorage.",
    },
    {
      title: "Protect API calls with authentication:",
      description:
        "For protected calls, for example when the user sees his order history, the token is sent in the Authorization header.",
    },
    {
      title: "Create an Order:",
      description:
        "When the user clicks 'Confirm purchase', the shopping cart information is sent to the backend. On order history, users should be able to see their previous orders by retrieving their order history from the backend.",
    },
  ],

  ChallengesandImprovements: [
    {
      title: "API integration for product data",
      description:
        "The integration with an external API is crucial for displaying product data. Challenges include handling errors, such as network issues, and ensuring fast data loading. The solution includes caching and fallback notifications to improve the user experience.",
    },
    {
      title: "Optimize performance for large product lists",
      description:
        "As the directory grows, load times and rendering performance can become problematic. To handle this, lazy loading is implemented, where only visible products are loaded first, and pagination to limit the number of products displayed at the same time.",
    },
  ],
};

export const project3Items = {
  journeys: [
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
  ],

  Personas: [
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
  ],

  Archetypes: [
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
  ],

  KeyFeatures: [
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
  ],

  StylingSystem: [
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
  ],

  ResponsiveDesign: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
  ],

  Conclusion: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },
  ],

  ChallengesandImprovements: [
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },

    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },

    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
  ],
};

export const project4Items = {
  journeys: [
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
    {
      title: "Traveler's Profile Creation",
      description: "",
    },
  ],

  Personas: [
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
    {
      title: "Eva - Adventurous Traveler",
      overview: "",
      preferences: "",
      needs: "",
    },
  ],

  Archetypes: [
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
    {
      title: "Adventure Anton, Age: 25",
      interests: "",
      techSavvy: "",
      needs: ".",
    },
  ],

  KeyFeatures: [
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
    {
      title: "Search & Filtering",
      description: "",
    },
  ],

  StylingSystem: [
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
    {
      title: "Colors system",
      description: "",
      points: "",
      img: "",
    },
  ],

  ResponsiveDesign: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
  ],

  Conclusion: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },
  ],

  ChallengesandImprovements: [
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },

    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },

    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
    {
      title: "Managing Personalization Without Complexity",
      description: "",
    },
  ],
};
