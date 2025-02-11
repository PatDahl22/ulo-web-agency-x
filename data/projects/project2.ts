export const Overview = [
    {
      title: "Goal",
      description: "Develop an e-commerce platform for a fashion brand that sells clothes and shoes.",
    },
    {
      title: "Frameworks:",
      description: "ReactJS with Vite and TailwindCSS.",
    },
    {
      title: "Focus Areas:",
      description: "User friendliness, accessibility (WCAG standards), and future further development."
    },
    {
      title: "Timeline:",
      description: "5 weeks.",
    },
    {
      title: "Team Size:",
      description: "5 people",
      points: ["Yasin", "Banafsheh", "Pat", "Ella", "Marsel"],
    }
  ];
  
  export const DesignProcess = [
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
  ];
  
  export const UserResearch = [
    {
      title: "User Research",
      description: "",
      points: [
        "We interview potential users to understand their needs and behaviors so we can ensure that design and features meet user expectations.",
        "During the user survey, interviews and surveys were conducted to understand what the target group is looking for in an e-commerce platform.",
        "It turned out that users value fast and easy navigation, clear product descriptions and a hassle-free checkout process."
      ],
      img: "",
    }
  ];
  
  export const Personas = [
    {
      title: "Lisa Andersson",
      overview: "32 years old, lives in Stockholm, works as a project manager.",
      preferences:
        "Shop for clothes quickly and easily online without being overwhelmed by too much information.",
      needs: "Fast navigation, easy filtering and clear product information.",
      challenges: "Loses patience with complicated buying processes.",
    },
  ];
  
  export const Assignment = [
    {
      title: "Assignment",
      description:
        "The task is to create a complete e-commerce application with features such as product pages, filtering, shopping cart and checkout. We must ensure a good user experience and optimize both design and functionality to meet users' needs.",
    },
  ];
  
  export const PainPoints = [
    {
      title: "Pain Points",
      description: "To prioritize solutions that improve the user experience, we identify problems through research:",
      points: [
        "Difficult to navigate websites",
        "Poor product overview",
        "Unclear purchase flows"
      ],
      img: "",
    }
  ];
  
  
  export const KeyFeatures = [
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
  ];
  
  export const StylingSystem = [
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
      img: "/wsColors.png",
    },
    {
      title: "Background grayscales",
      description: "",
      points:
        "From bg-gray-500 to bg-gray-950: used for different levels of contrast, sections and hierarchical visual elements.",
      img: "",
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
  ];
  
  export const ResponsiveDesign = [
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
  ];
  
  export const ResponsivenessAndAvailability = [
    {
      title: "Responsiveness and Availability",
      points: [
        "All colors follow the WCAG standard for sufficient contrast between text and background.",
        "Header and body sizes adjust based on screen size.",
        "All buttons and form fields have focus indicators for non-mouse users.",
        "ARIA labels are used on buttons and forms for screen reader support.",
      ],
    },
  ];
  
  export const Development = [
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
  ];
  
  export const Mockup = [
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
    }
  ];
  
  export const CodeExamples = [
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
  ];
  
  export const Todobetter = [
    {
      title: "Authentication:",
      description: "Authentication is used to ensure that users can log in and manage their accounts or orders securely. We can use JSON Web Tokens (JWT) to authenticate users and store a login token in the browser's localStorage or sessionStorage.",
    },
    {
      title: "Registration:",
      description: "When a user creates an account, their information is sent to an API endpoint (/registry). If the registration is successful, the user can login.",
    },
    {
      title: "Login:",
      description: "The user's login information is sent to an API endpoint (/login), and on success a token is stored in localStorage.",
    },
    {
      title: "Protect API calls with authentication:",
      description: "For protected calls, for example when the user sees his order history, the token is sent in the Authorization header.",
    },
    {
      title: "Create an Order:",
      description: "When the user clicks 'Confirm purchase', the shopping cart information is sent to the backend. On order history, users should be able to see their previous orders by retrieving their order history from the backend.",
    }
  ];
  
  export const ChallengesandImprovements = [
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
  ];