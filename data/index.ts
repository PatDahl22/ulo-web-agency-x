export const gridItems = [
  {
    id: 1,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 2,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-4 md:col-span-3 md:row-span-2 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center",
    img: "/b1.png",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute md:w-96 w-60",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "absolute bottom-0 md:w-96 w-60",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-2",
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
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  {
    name: "Projects",
    link: "/projects",
    projectLinks: [
      { name: "Project 1", link: "/project1" },
      { name: "Project 2", link: "/" },
      { name: "Project 3", link: "/project3" },
      { name: "Project 4", link: "/" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

export const ProjectnavItems = [
  { name: "Problems & Solutions", link: "#problems" },
  { name: "Competitive Analysis", link: "#competitive" },
  { name: "UI Design", link: "#uiDesign" },
  { name: "Visual Design", link: "#visualDesign" },
  { name: "Future Improvements", link: "#futureImprovements" },
  { name: "Conclusions", link: "#conclusions" },
];



export const projects = [
  {
    id: 1,
    title: "TravelBuddy",
    name: "TravelBuddy",
    des: [
      "💼 UX/UI Designer for AI-Powered Travel App (5-Week Project)",
      "👉 Problem: Travelers struggle with overwhelming trip-planning options.",
      "👉 Solution: Designed a clean, AI-driven travel assistant with personalized recommendations.",
      "👉 My Role: Focused on typography, layout, UI components, and accessibility to ensure a smooth user experience.",
      "👉 Impact: Improved decision-making speed by 40% and increased user engagement.",
    ],
    img: "/ReseApp.png",
    link: "/project1",
    area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
  },
  {
    id: 2,
    name: "Shoes & Stitches",
    title: "Shoes & Stitches, WebShop Application",
    des: [
      "💼 XXX",
      "👉 Problem: ",
      "👉 Solution: ",
      "👉 My Role: ",
      "👉 Impact: ",
    ],
    img: "/Ws-bg.png",
    link: "/",
    area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
  },
  {
    id: 3,
    name: "FemTask",
    title: "FemTask, Web Application",
    des: [
      "💼 FamTask is an app that helps busy families organize tasks, reduce stress, and improve communication.",
      "👉 Problem: Parents struggle with task management, leading to stress and disorganization.",
      "👉 Solution: FamTask simplifies chores with a shared checklist, rewards, and a family calendar.",
      "👉 My Role: I led the UX/UI design, creating a user-friendly and accessible interface.",
      "👉 Impact: FamTask reduces stress, boosts collaboration, and encourages kids to take responsibility.",
    ],
    img: "/ft-bg.png",
    link: "/project3",
    area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
  },
  {
    id: 4,
    name: "Ullis Fitness & Kroppvård",
    title: "Ullis Fitness & Kroppvård, Web Application",
    des: [
      "💼 XXX",
      "👉 Problem: ",
      "👉 Solution: ",
      "👉 My Role: ",
      "👉 Impact: ",
    ],
    img: "/p4.PNG",
    link: "/",
    area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
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

export const project3Items = {
  challenges: [
    {
      title: "Disorganization",
      description:
        "Lack of a central system to track tasks and responsibilities.",
      className: "text-neutral-500",
    },
    {
      title: "Miscommunication",
      description:
        "Difficulty coordinating schedules and ensuring everyone is on the same page.",
      className: "text-neutral-500",
    },
    {
      title: "Unequal Burden",
      description:
        "Imbalance in household chores, leading to resentment and conflict.",
      className: "text-neutral-500",
    },
    {
      title: "Motivational Issues",
      description:
        "Difficulty engaging children in household tasks and responsibilities.",
      className: "text-neutral-500",
    },
  ],

  keyuserinsights: [
    {
      title: "Need for Automated Reminders",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents wanted an app that proactively reminded both themselves and their children about upcoming tasks, reducing the need for constant nagging.",
    },
    {
      title: "Desire for a Clear Overview",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Users craved a simple, at-a-glance view of all tasks, assignments, and deadlines.",
    },
    {
      title: "Motivation for Children's Involvement",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents struggled to engage children in household chores without constant reminders or conflict.",
    },
    {
      title: "Shared Lists and Accountability",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents expressed the need for a system that allows children to check off completed tasks, fostering a sense of responsibility and accountability.",
    },
  ],

  Personas: [
    {
      id: 1,
      area: "",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: Nathalia",
      description:
        "A working parent with school-aged children, juggling multiple responsibilities.",
    },
    {
      id: 2,
      area: "",
      title: "Goals",
      description:
        "Streamline household chores, delegate tasks effectively, reduce stress, improve family communication.",
    },
    {
      id: 3,
      area: "",
      title: "Pain Points",
      description:
        "Difficulty keeping track of tasks, constant need for reminders, imbalance in household responsibilities, struggles to motivate children.",
    },
  ],

  initialdesignconcepts: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
      title: "Task Creation and Assignment",
      description:
        "Parents have the ability to assign tasks with set deadlines to children and family members.",
    },
    {
      id: 2,
      area: "sm:col-span-2 md:col-span-1 row-start-1 xl:col-span-2 xl:row-span-1",
      title: "Shared Calendars",
      description: "Centralized schedule view for the whole family.",
    },
    {
      id: 3,
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Progress Tracking",
      description: "Visual representation of task completion.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-3 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Rewards System",
      description: "Motivate children through gamification and incentives.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-3 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Different account user",
      description:
        "For children, focus on what tasks they should focus on. For parent, overview of the task they are assign.",
    },
  ],

  respondingtouserfeedback1: [
    {
      id: 1,
      title: "Responding to user feedback iteration 1",
      des: [
        "👉 Overcrowded Homescreen: The initial design of the homescreen for the app was cluttered and overwhelming.",
        "👉 Calendar Usability: Users expressed they wanted the calendar to only showcase their task, not the family.",
        "👉 Navigation Issues: Users had difficulty navigating back to the main homescreen from certain sections of the app.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
    {
      id: 2,
      title: "Changes implemented iteration 1",
      des: [
        "👉 Simplified homescreen: Removed redundant 'To-Do' and 'Calendar' tabs, consolidating navigation into a bottom bar. Refined color scheme and button layout.",
        "👉 Personalized Calendar View: Filtered calendar view to display only tasks assigned to the specific user.",
        "👉 Improved Navigation: Moved the 'Back' button to a more conventional location in the bottom navigation bar.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
  ],
  respondingtouserfeedback2: [
    {
      id: 1,
      title: "Responding to user feedback iteration 2",
      des: [
        "👉 Ethical consideration: The ethical implications of constantly being reminded of tasks may induce mental anxiety for children.",
        "👉 Ethical consideration: A high volume of bright colors and gamified animated designs may induced cognitive overload for children.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
    {
      id: 2,
      title: "Changes implemented iteration 2",
      des: [
        "👉 Removal of aautomatic reminders: Removed automatic reminders and implemented a notification section where users can check their upcoming tasks on their own terms.",
        "👉 Simplified children's interface: After the first round of user testing of both admins and member accounts, we switched the interface to be more minimal and neutral.",
        "👉 Avatar integration: We decided to integrate custom avatars into the application's UI to provide the user with a friendly face and sense of personalization while minimizing cognitive load.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
  ],

  accessibilityconsiderations: [
    {
      title: "Clear visual hierarchy",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Utilized headings (H1, H2, H3), body text, and text boxes to create a logical content structure for screen readers.",
    },
    {
      title: "Readable font and size",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Selected easily readable fonts and ensured sufficient text size (minimum 16px for body text, 24px for headings) for readability.",
    },
    {
      title: "Descriptive image and icon labels",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Provided descriptive alt text for all images and icons, ensuring screen readers can convey their purpose (implementation planned for the development phase).",
    },
    {
      title: "Clear button labels",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Used clear, concise, and descriptive button labels, avoiding vague terms like 'Click Here.'",
    },
    {
      title: "Sufficient button size and spacing",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Ensured buttons are at least 44x44 pixels with adequate spacing to prevent accidental presses.",
    },
    {
      title: "ARIA Labels (Planned)",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "We plan to implement ARIA attributes during development to further enhance screen reader support and ensure WCAG compliance. We also plan to be extremely aware of any color contrast issues.",
    },
  ],

  KeyFeatures: [
    {
      title: "Role-Based access",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Separate login accounts for parents (admins) and children (members).",
    },
    {
      title: "Shared checklists",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Admin have the access to be able to add family up-keeping tasks on a list.",
    },
    {
      title: "Shared calendar",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Allow parents and children to view a family calendar, children are only to see task assign to themselves.",
    },
    {
      title: "Progress tracking",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Parents have the ability to track their children's progress in the app.",
    },
    {
      title: "Child-Friendly design",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Avatar, Simple, intuitive interface with visual cues (custom avatar).",
    },
    {
      title: "Flexible notifications",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Users are able to access a notification section to see their upcoming tasks.",
    },
  ],

  measuringsuccess: [
    {
      title: "✨ Reduced parental stress levels",
      description: [
        "Decrease in self-reported stress levels among parents after regular app usage (measured on a scale of 1-5).",
        "👉 Target: Reduce stress by at least 1 point on the scale.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "✨ Time savings for parents",
      description: [
        "Reduction in the time parents spend manually tracking chores and reminding children.",
        "👉 Target: Reduce follow-up time by at least 20%.",
      ],
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "✨ Increased task completion by children",
      description: [
        "Increase in the percentage of tasks completed independently by children, without parental reminders.",
        "👉 Target: Increase independent task completion by 70%.",
      ],
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "✨ Improved family communication",
      description: [
        "Increase the harmony of the household and how well tasks are handled.",
        "👉 Target: Min 70% of user report improved communications and tasks where both parent and children feel that tasks are being handled equally.",
      ],
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
  ],

  lessonslearneds: [
    {
      title: "The power of user feedback",
      description:
        "Usability testing and user interviews are essential for identifying design flaws and refining the user experience. Even features we initially thought would be effective (e.g., automatic reminders) needed to be reconsidered based on user feedback.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Ethical design considerations",
      description:
        "It's crucial to consider the potential negative impacts of our designs and make adjustments to mitigate harm. In our case, we removed automatic reminders to prevent anxiety and simplified the children's interface to reduce cognitive load.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Simplicity is key",
      description:
        "A clean, intuitive interface is essential for engaging users of all ages. Even for child-centric designs, simplicity and clarity should be prioritized.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
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

  futuredevelopments: [
    {
      title: "Beta testing",
      description:
        "We will conduct a beta test to gather real-world feedback and refine the app before launch.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Performance and scalability",
      description:
        "The app will be optimized for performance across all devices, ensuring a smooth user experience, even on older phones.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "External calendar integration",
      description:
        "We will add two-way syncing with calendars like Google Calendar to allow families to manage both tasks and events in one place.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
    {
      title: "Continual user feedback",
      description:
        "Post-launch, we will continue collecting feedback to improve FamTask, including adding features like a chores marketplace for kids to pick extra tasks for rewards.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
  ],

  Conclusions: [
    {
      title: "Conclusion",
      description:
        "FamTask is a UX/UI design concept with the potential to significantly improve the lives of busy families. By focusing on user needs, iterating based on feedback, and prioritizing accessibility, we can create a powerful tool that empowers families to collaborate, stay organized, and reduce stress.",
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
