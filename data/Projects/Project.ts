import Project from "@/type/Project";
import BorgoProject from "./Borgo";
import ScheduleyProject from "./Scheduley";

const Projects: Project[] = [
  {
    id: "1",
    title: "SOUND CORE",
    description: "A Market Place For Music Producers",
    longDescription:
      "SoundCore is a comprehensive digital marketplace designed specifically for music producers. It provides a centralized platform for users to discover, preview, and purchase audio products, bridging the gap between sound creators and buyers. The platform features robust vendor profiles, streamlined collection management, and an optimized, high-performance browsing experience.",
    image: [
      "/projects/images/soundcore/landingpage.png",
      "/projects/images/soundcore/signinpage.png",
      "/projects/images/soundcore/signuppage.png",
      "/projects/images/soundcore/becomeaproducerpage.png",
      "/projects/images/soundcore/browsepage.png",
      "/projects/images/soundcore/detailpage.png",
      "/projects/images/soundcore/collectionpage.png",
      "/projects/images/soundcore/checkoutpage.png",
      "/projects/images/soundcore/scankhqr.png",
      "/projects/images/soundcore/orderdetailpage.png",
      "/projects/images/soundcore/dashboardpage.png",
      "/projects/images/soundcore/profilepage.png",
      "/projects/images/soundcore/managesoundpage.png",
      "/projects/images/soundcore/uploadpage.png",
      "/projects/images/soundcore/requestpage.png",
      "/projects/images/soundcore/reviewpage.png",
      "/projects/images/soundcore/Screenshot 2026-06-08 164017.png",
    ],
    github: "https://github.com/ChouMonyrith/frontend-soundcore",
    vercel: "https://vercel.com/ithcs-projects-603f1631",
    tags: [
      "NextJs",
      "JavaScript",
      "Tailwind",
      "KHQR",
      "Spatie Laravel",

      "MySQL",
      "Laravel",
    ],
    features: [
      "Browse thousands of high-quality audio products",
      "Listen to previews and demos before purchasing",
      "Streamlined checkout with instant delivery",
      "Instant access to purchased products",
      "Integrated payment gateway powered by KHQR",
      "User-friendly search and filtering system",
      "Responsive design for seamless mobile and desktop experience",
    ],
    timeline: "November 2025 - January 2026 (3 Months)",
    role: "Lead Full-Stack Developer (solo)",
  },
  BorgoProject,
  ScheduleyProject,
];

export default Projects;
