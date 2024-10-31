export const projects = {
  personalProyects: [
    {
      name: "MiduHallowCloud",
      web: "https://miduhallowcloud.vercel.app/",
      images: [
        {
          src: "/src/assets/miduhallowcloud.png",
          name: "MiduHallowCloud",
          style: { width: "100%" },
        },
      ],
      gitHub: "https://github.com/DiFernando11/media-hackatoon",
      description: `This project allows you to upload images and transform them with
            artificial intelligence, applying Halloween-themed effects to create
            unique results. Developed for Cloudinary and Midudev's October
            hackathon, it explores how AI can add a spooky, personalized touch
            to your images. Dive into Halloween creativity and transform your
            photos like never before!`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
    },
  ],
  contributionProjects: [
    {
      name: "Banco Provincia",
      web: "https://www.bancoprovincia.bancainternet.com.ar/spa/",
      mobile:
        "https://play.google.com/store/apps/details?id=ar.bapro&hl=es_EC&pli=1",
      images: [
        {
          src: "/src/assets/bancoProvincia.jpg",
          name: "Banco Provincia",
          web: "https://www.bancoprovincia.bancainternet.com.ar/spa/",
        },
      ],
      description: `With our multi-platform application developed in Capacitor, make your transfers easily and securely from any device, whether web or mobile. Access all your financial products in one place, including accounts and cards, and keep your payments and debts up to date efficiently. Manage your finances professionally and at your fingertips!`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
    },
    {
      name: "Cencosud",
      src: "/src/assets/Jumbo.jpg",
      images: [
        {
          src: "/src/assets/jumbo.png",
          web: "https://www.tiendasjumbo.co/",
          name: "Jumbo",
          containerStyle: { width: "100%", backgroundColor: "#029003"},
          style: { height: "150px"},
        },
        {
          src: "/src/assets/sisa.png",
          web: "https://www.santaisabel.cl/",
          name: "Santa Isabel",
          containerStyle: { width: "100%", backgroundColor: "#d1000d"},
          style: { height: "130px", width: "88%" },
        },
        {
          src: "/src/assets/paris.webp",
          web: "https://www.paris.cl/cencosud",
          name: "Paris",
          containerStyle: { width: "100%", backgroundColor: "#184ef8"},
          style: { height: "140px", width: "93%" },
        },
      ],
      visits: [
        {
          name: "Jumbo",
          web: "https://www.tiendasjumbo.co/",
        },
        {
          name: "Santa Isabel",
          web: "https://www.santaisabel.cl/",
        },
        {
            name: "Paris",
            web: "https://www.paris.cl/cencosud",
          },
      ],
      description: `Leading supermarkets in many countries, are applications designed to facilitate your online shopping. As part of the returns team, we manage changes to customer orders, ensuring an efficient process based on order status, return times and product scheduling. Our goal is to provide reliable and timely service for each request.`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
    },
  ],
  schoolProjects: [
    {
      name: "Gameloops",
      images: [
        {
          src: "/src/assets/presentation-gameloop.mp4",
          name: "Gameloops",
          style: { width: "100%" },
        },
      ],
      gitHub: "https://github.com/DiFernando11/gamer-commerce",
      description: `Online video game sales platform project, with secure authentication, integrated payment system and advanced features for game reviews and ratings. It includes customizable filters for optimized search, as well as a complete administration panel to manage the catalog, users and transactions.`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
      src: "/src/assets/presentation-gameloop.mp4",
      isVideo: true,
    },
    {
      name: "Countries",
      images: [
        {
          src: "/src/assets/AppCountries.mp4",
          name: "Countries",
          style: { width: "100%" },
        },
      ],
      gitHub: "https://github.com/DiFernando11/pi-countries-client",
      description: `A project focused on discovering and marking favorite places around the world, with advanced search and filtering options to improve the user experience. Users can easily explore, add and organize their favorite places in their favorite destinations.`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
      src: "/src/assets/presentation-gameloop.mp4",
      isVideo: true,
    },
    {
      name: "Social Network",
      images: [
        {
          src: "/src/assets/Henrry-Gram - Compressed with FlexClip.mp4",
          name: "Social Network",
          style: { width: "100%" },
        },
      ],
      gitHub: "https://github.com/DiFernando11/HenryGram",
      description: `A social networking platform where you can connect with friends, share your interests, and engage in real-time conversations. Users can build their network, post updates, and chat seamlessly to stay connected.`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node"],
      src: "/src/assets/presentation-gameloop.mp4",
      isVideo: true,
    },
  ],
};
