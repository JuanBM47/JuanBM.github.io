const translations = {
  es: {
    navWork:"Proyectos",navAbout:"Sobre mí",navContact:"Contacto",navCta:"Hablemos",
    heroEyebrow:"DESARROLLADOR DE VIDEOJUEGOS · UNITY",heroTitle:"Creo mundos.<br><em>Construyo</em> cómo se juegan.",
    heroIntro:"Soy desarrollador de videojuegos centrado en Unity, programación y creación de experiencias interactivas. Aquí reúno proyectos, experimentos y todo lo que voy construyendo.",
    heroButton:"Explorar proyectos",heroSecondary:"Conóceme",heroMeta1:"ESPAÑA",heroMeta2:"UNITY · C# · 3D",heroBottom:"PORTFOLIO · 2026",
    workEyebrow:"TRABAJO SELECCIONADO",workTitle:"Proyectos<span class='accent'>.</span>",workNote:"Ideas que toman forma a través del código, el diseño y la experimentación.",
    featuredLabel:"PROYECTO DESTACADO",project1Title:"El último farero",project1Desc:"Experiencia arcade 3D en la que mantener la luz del faro orientada correctamente es esencial. Un proyecto personal en desarrollo para explorar control, precisión y respuesta visual.",
    inProgress:"EN DESARROLLO",viewCode:"Ver código",comingSoon:"PRÓXIMAMENTE",project2Title:"Tu próximo proyecto",project2Desc:"Sustituye este bloque por otro proyecto, prototipo o experimento.",project3Title:"Otro proyecto",project3Desc:"Puedes mostrar aquí trabajos de Blender, diseño 3D o prototipos.",
    aboutEyebrow:"UN POCO SOBRE MÍ",aboutTitle:"Detrás del<br>proyecto<span class='accent'>.</span>",aboutLead:"Me interesa todo el proceso de crear un videojuego: desde una idea inicial hasta convertirla en una experiencia interactiva.",
    aboutBody:"Mi formación está relacionada con la animación 3D, los videojuegos y los entornos interactivos. Trabajo principalmente con Unity y C#, y también utilizo Blender para modelado y creación de contenido 3D. Me gusta aprender por mi cuenta, resolver problemas y trabajar de forma colaborativa.",
    skillsLabel:"HERRAMIENTAS Y ÁREAS",contactEyebrow:"CONTACTO",contactTitle:"¿Creamos algo<br><em>interesante</em>?",contactCopy:"Estoy abierto a conocer equipos, colaborar en proyectos y descubrir nuevas oportunidades.",
    footerText:"DISEÑADO Y DESARROLLADO CON CURIOSIDAD.",footerRights:"TODOS LOS DERECHOS RESERVADOS"
  },
  en: {
    navWork:"Projects",navAbout:"About",navContact:"Contact",navCta:"Get in touch",
    heroEyebrow:"GAME DEVELOPER · UNITY",heroTitle:"I create worlds.<br><em>I build</em> how they play.",
    heroIntro:"I'm a game developer focused on Unity, programming and interactive experiences. This is where I share my projects, experiments and the things I'm building.",
    heroButton:"Explore projects",heroSecondary:"About me",heroMeta1:"SPAIN",heroMeta2:"UNITY · C# · 3D",heroBottom:"PORTFOLIO · 2026",
    workEyebrow:"SELECTED WORK",workTitle:"Projects<span class='accent'>.</span>",workNote:"Ideas taking shape through code, design and experimentation.",
    featuredLabel:"FEATURED PROJECT",project1Title:"The Last Lighthouse Keeper",project1Desc:"A 3D arcade experience where keeping the lighthouse beam correctly aligned is essential. A personal work-in-progress exploring control, precision and visual feedback.",
    inProgress:"IN DEVELOPMENT",viewCode:"View code",comingSoon:"COMING SOON",project2Title:"Your next project",project2Desc:"Replace this block with another project, prototype or experiment.",project3Title:"Another project",project3Desc:"Showcase Blender work, 3D design or prototypes here.",
    aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"Behind the<br>project<span class='accent'>.</span>",aboutLead:"I'm interested in the whole process of making a game: from an initial idea to turning it into an interactive experience.",
    aboutBody:"My background is in 3D animation, video games and interactive environments. I mainly work with Unity and C#, and also use Blender for modelling and 3D content creation. I enjoy learning independently, solving problems and collaborating with others.",
    skillsLabel:"TOOLS & FOCUS AREAS",contactEyebrow:"CONTACT",contactTitle:"Let's make<br>something <em>great</em>.",contactCopy:"I'm open to meeting teams, collaborating on projects and exploring new opportunities.",
    footerText:"DESIGNED AND BUILT WITH CURIOSITY.",footerRights:"ALL RIGHTS RESERVED"
  }
};
let currentLang = "es";
const langToggle = document.getElementById("langToggle");
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langToggle.innerHTML = lang === "es" ? 'EN <span>↗</span>' : 'ES <span>↗</span>';
  langToggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "es" ? "en" : "es"));
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
