// (en haut du fichier)
import Work1 from "../../assets/Aten.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.jpg";
import Work7 from "../../assets/work7.jpg";
import Work8 from "../../assets/work8.jpg";
// Pour test visuel
import TestImg from "../../assets/behance_template_aten.jpg"; // <- une image très différente

export const projectsData = [
  {
    id: 1,
    image: Work1,
    modalImage: TestImg, // Spécifique pour la modal
    title: "Web design",
    category: "app",
    slug: "work-1",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "web" },
  { name: "app" },
  { name: "design" },
];
