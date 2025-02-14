import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@/components/icons/index"; 

export const gridItems = [
  {
    id: 1,
    title:
      "My designs are tailored to meet both user needs and business goals, delivering results that boost conversions and customer satisfaction.",
    description: "The Outside Scoop",
    icon: React.createElement(IconClipboardCopy, {
      className: "h-4 w-4 text-neutral-500",
    }),
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    icon: React.createElement(IconBoxAlignRightFilled, {
      className: "h-4 w-4 text-neutral-500",
    }),
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    icon: React.createElement(IconSignature, {
      className: "h-4 w-4 text-neutral-500",
    }),
    img: "/b5.svg",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Iterate on designs through agile processes, collaborating closely with clients to refine and enhance user experiences throughout the project lifecycle.",
    description: "The Art of Design",
    icon: React.createElement(IconFileBroken, {
      className: "h-4 w-4 text-neutral-500",
    }),
    img: "/grid.svg",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "",
  },
  {
    id: 5,
    title:
      "Data-driven insights and user testing, design decision is based on real feedback, improving overall usability.",
    description: "The Inside Scoop",
    img: "/b5.svg",
    icon: React.createElement(IconTableColumn, {
      className: "h-4 w-4 text-neutral-500",
    }),
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareImg: "/grid.svg",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    id: 6,
    title: "Let's collaborate!",
    description:
      "I'd love to help elevate your brand with a tailored design strategy.",
    icon: React.createElement(IconArrowWaveRightUp, {
      className: "h-4 w-4 text-neutral-500",
    }),
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
    img: "/p1.png",
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
  journeys: [
    {
      title: "Traveler's Profile Creation",
      description:
        "The app builds a traveler profile based on psychographics, understanding what kind of vacation the user prefers, favorite destinations, and budget preferences. This allows the app to offer tailored travel suggestions.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Based on the traveler's profile, the app provides destination suggestions. Users can compare options, assess costs, and read reviews from other travelers to make informed decisions.",
    },
    {
      title: "Travel Decisions",
      description:
        "Users finalize travel details, such as resort choice, dates, and transportation options. They can also select accommodation options, whether it's a hotel, Airbnb, or staying with someone local.",
    },
    {
      title: "Pre-Travel Preparation",
      description:
        "The app assists with all pre-trip arrangements, such as vaccinations, packing lists, transportation logistics, and currency exchange. It sends reminders for any unfinished tasks, ensuring travelers are fully prepared.",
    },
    {
      title: "Journey to the Resort",
      description:
        "Notifications guide travelers to their departure points with geo-based recommendations. It suggests eateries and tax-free shops at airports or train stations, providing real-time updates to smooth the journey.",
    },
    {
      title: "At the Destination",
      description:
        "Upon arrival, the app offers recommendations for the best restaurants, pubs, attractions, and activities. It helps with social sharing by crafting posts and images for travelers to share.",
    },
    {
      title: "Post-Trip Evaluation",
      description:
        "After the trip, users are prompted to provide feedback. This feedback loop not only helps other users but also improves the app's recommendations and services.",
    },
  ],

  Personas: [
    {
      title: "Eva - Adventurous Traveler",
      overview:
        "Loves exploring new places and enjoys outdoor activities such as hiking, diving, and camping.",
      preferences:
        "Uses apps to research destinations, book accommodations, and compare prices. Relies on reviews from other travelers.",
      needs:
        "Wants an AI assistant that recommends adventure activities, provides real-time weather and terrain updates, and helps plan safe, engaging trips.",
    },
    {
      title: "David - Business Traveler",
      overview:
        "Frequently travels for work, often making last-minute reservations.",
      preferences:
        "Uses apps to research destinations, book accommodations, and compare prices. Relies on reviews from other travelers.",
      needs:
        "Seeks an AI assistant that can manage the entire booking process and provide real-time updates on flight status and traffic conditions.",
    },
    {
      title: "Sophia - Budget Traveler",
      overview:
        "Aims to maximize travel experiences without overspending, focusing on affordable yet high-quality options.",
      preferences:
        "Compares prices, looks for deals, and manages expenses carefully during her trip.",
      needs:
        "Desires an AI assistant to find the best deals on flights, hotels, and activities while providing tips for saving on food and transportation.",
    },
  ],

  Archetypes: [
    {
      title: "Adventure Anton, Age: 25",
      interests: "Outdoor activities like hiking, diving, and camping.",
      techSavvy: "Regularly uses apps to plan adventures and compare prices.",
      needs:
        "Wants an AI assistant that offers recommendations for adventure activities, provides real-time weather updates, and assists with travel planning.",
    },
    {
      title: "Business Anna, Age: 30",
      interests: "Business consultant, traveling frequently for work.",
      techSavvy: "Uses apps to manage last-minute travel bookings and plans.",
      needs:
        "Requires an AI assistant that handles the booking process while providing real-time updates on flight status and traffic conditions.",
    },
  ],

  KeyFeatures: [
    {
      title: "Search & Filtering",
      description:
        "Users can refine searches using filters like price range, room type, location, reviews, and more.",
    },
    {
      title: "Stay Comparison",
      description:
        "Allows users to compare different accommodations side by side for easier decision-making.",
    },
    {
      title: "Interactive Map",
      description:
        "Users can view stays on an interactive map to select locations near their desired travel spots.",
    },
    {
      title: "Booking Management",
      description:
        "After booking, users can easily view or modify reservations, and access booking details like check-in/check-out times.",
    },
    {
      title: "User Reviews & Ratings",
      description:
        "Each stay has reviews from previous guests and an overall rating to help users choose the best option.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Based on previous searches and preferences, the system offers personalized accommodation recommendations.",
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

  ResponsiveDesign: [
    {
      title: "Components Styling Buttons:",
      description:
        "Primary, secondary, and tertiary styles with hover and focus states.<",
    },
    {
      title: "Components Styling Forms:",
      description:
        "Accessible form fields with clear labels and error messages.",
    },
    {
      title: "Components Styling Navigation:",
      description:
        "Responsive and adaptive menus optimized for both desktop and mobile.",
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

  Conclusion: [
    {
      title: "Conclusion",
      description: "",
      points: [
        "TravelBuddy is a ultimate personal travel guide, designed to inspire and assist you in discovering dining options, dream destinations, accommodations, and activities tailored to your preferences.",
        "By combining the power of AI with intuitive usability, personalized recommendations, and geolocation.",
        "TravelBuddy goes beyond the traditional travel assistant.",
        "It anticipates your needs and provides quick, relevant answers with just a tap.",
      ],
      img: "",
    },
  ],

  ChallengesandImprovements: [
    {
      title: "Managing Personalization Without Complexity",
      description:
        "One of our biggest challenges was balancing a personalized experience with simplicity. While we wanted TravelBuddy to offer tailored recommendations, too many customization options initially confused users. To address this, we simplified the interface by introducing guided choices and offering default settings that users could refine over time as they interacted more with the app.",
    },
    {
      title: "Improving Geolocation Accuracy",
      description:
        "Ensuring that location-based suggestions were accurate was critical for the app's success. Early in development, we noticed inconsistencies in geolocation data, particularly in remote areas. To overcome this, we improved our use of geolocation services by switching to more reliable APIs, while also integrating fallback options to ensure users still received relevant recommendations even when precise location data was unavailable.",
    },
    {
      title: "Optimizing the AI for Usability",
      description:
        "The AI assistant was central to our design, but early testing revealed that it occasionally struggled to deliver contextually relevant suggestions. Users sometimes found it slow or requiring too many inputs. After evaluating the AI's natural language processing, we improved its ability to anticipate user needs, refining its decision-making process to deliver faster, more relevant suggestions with minimal effort from the user.",
    },
    {
      title: "Enhancing Mobile Usability",
      description:
        "Given that most users would interact with TravelBuddy via mobile devices, we needed to ensure an optimal experience on smaller screens. During testing, we discovered that button sizes and touch zones weren't user-friendly enough, especially on mobile. We redesigned the interface to include larger, finger-friendly buttons and adjusted the layout for better usability, making sure all interactions could be performed comfortably with one hand.",
    },
    {
      title: "Fine-Tuning Light and Dark Modes",
      description:
        "While offering both light and dark modes was well-received, we encountered some issues with readability and contrast, especially in the dark mode. After gathering feedback from users, we reworked the color schemes to ensure better legibility and visual comfort, creating a smoother experience for users in all lighting conditions.",
    },
    {
      title: "Balancing Notifications and Real-Time Updates",
      description:
        "We faced a challenge in keeping users informed without bombarding them with too many notifications. Initially, users felt overwhelmed by frequent updates, especially during their travels. To improve, we implemented a more intelligent notification system that prioritizes important updates while allowing users to customize how and when they receive alerts, ensuring a less intrusive experience.",
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
