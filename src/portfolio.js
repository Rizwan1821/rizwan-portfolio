/* Personal portfolio content */

const settings = {
  isSplash: true,
};

const seo = {
  title: "Rizwan Abdul | Cybersecurity Portfolio",
  description:
    "Cybersecurity undergraduate focused on security operations, network security, digital forensics, packet analysis, and security investigation techniques.",
  og: {
    title: "Rizwan Abdul | Cybersecurity Portfolio",
    type: "website",
  },
};

const greeting = {
  title: "Rizwan Abdul",
  logo_name: "RizwanAbdul",
  nickname: "Cybersecurity Undergraduate",
  subTitle:
    "Cybersecurity undergraduate focused on Security Operations, Network Security, Digital Forensics, Threat Detection, Incident Response, and Security Analysis.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/Rizwan1821",
  githubProfile: "https://github.com/Rizwan1821",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Rizwan1821",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:rizwanabdul8227@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Network Security, Security Monitoring, Vulnerability Assessment, Incident Response Fundamentals",
        "⚡ Digital Forensics, Threat Analysis, Authentication & Access Control",
        "⚡ Security investigation techniques and forensic collection workflows",
      ],
      softwareSkills: [
        { skillName: "Wireshark", fontAwesomeClassname: "simple-icons:wireshark", style: { color: "#1679A7" } },
        { skillName: "Kali Linux", fontAwesomeClassname: "simple-icons:kalilinux", style: { color: "#557C94" } },
        { skillName: "Linux", fontAwesomeClassname: "simple-icons:linux", style: { color: "#FCC624" } },
        { skillName: "DCFLDD", fontAwesomeClassname: "simple-icons:linux", style: { color: "#555555" } },
        { skillName: "LiME", fontAwesomeClassname: "simple-icons:linux", style: { color: "#555555" } },
      ],
    },
    {
      title: "Networking & Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ TCP/IP, HTTP, DNS, IP Addressing, Ports & Protocols, Packet Analysis",
        "⚡ Network Traffic Monitoring and client-server communication",
        "⚡ Linux, Kali Linux, Windows, Process Management, Memory Management, File Systems, CPU Scheduling",
      ],
      softwareSkills: [
        { skillName: "TCP/IP", fontAwesomeClassname: "simple-icons:internetexplorer", style: { color: "#1976D2" } },
        { skillName: "HTTP", fontAwesomeClassname: "simple-icons:googlechrome", style: { color: "#4285F4" } },
        { skillName: "DNS", fontAwesomeClassname: "simple-icons:cloudflare", style: { color: "#F38020" } },
        { skillName: "Linux", fontAwesomeClassname: "simple-icons:linux", style: { color: "#FCC624" } },
        { skillName: "Windows", fontAwesomeClassname: "simple-icons:windows", style: { color: "#0078D4" } },
      ],
    },
    {
      title: "Programming & Databases",
      fileName: "FullStackImg",
      skills: [
        "⚡ Python, Java, C, JavaScript, and SQL",
        "⚡ PostgreSQL, MySQL, DBMS, SQL Queries, and Database Design",
        "⚡ HTML, CSS, JavaScript, React, Node.js, FastAPI, and REST APIs",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "Java", fontAwesomeClassname: "simple-icons:openjdk", style: { color: "#007396" } },
        { skillName: "C", fontAwesomeClassname: "simple-icons:c", style: { color: "#A8B9CC" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#336791" } },
        { skillName: "React", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "Node.js", fontAwesomeClassname: "devicon-plain:nodejs-wordmark", style: { color: "#339933" } },
        { skillName: "FastAPI", fontAwesomeClassname: "simple-icons:fastapi", style: { color: "#009688" } },
      ],
    },
    {
      title: "Security Tools & Platforms",
      fileName: "DesignImg",
      skills: [
        "⚡ Wireshark, Kali Linux, VS Code, Postman, Git/GitHub, pgAdmin, and Termux",
        "⚡ Packet capture, network traffic inspection, memory acquisition, and disk imaging",
        "⚡ Evidence handling fundamentals, volatile data analysis, and security experimentation",
      ],
      softwareSkills: [
        { skillName: "VS Code", fontAwesomeClassname: "simple-icons:visualstudiocode", style: { color: "#007ACC" } },
        { skillName: "Postman", fontAwesomeClassname: "simple-icons:postman", style: { color: "#FF6C37" } },
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
        { skillName: "GitHub", fontAwesomeClassname: "simple-icons:github", style: { color: "#181717" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#336791" } },
      ],
    },
  ],
};

const competitiveSites = { competitiveSites: [] };

const degrees = {
  degrees: [
    {
      title: "Swarnandhra College of Engineering and Technology, Narsapur",
      subtitle: "B.Tech — Cybersecurity",
      logo_path: "education.svg",
      alt_name: "Swarnandhra College of Engineering and Technology",
      duration: "Expected Graduation: 2027",
      descriptions: [
        "⚡ Relevant Coursework: Computer Networks, Operating Systems, DBMS, Cybersecurity, Digital Forensics, Programming, Web Technologies.",
        "⚡ Cybersecurity-focused undergraduate with hands-on exposure to network traffic analysis, Linux environments, and forensic investigation techniques.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cyber Security",
      subtitle: "Project — Embrizon Technologies",
      logo_path: "education.svg",
      certificate_link: "",
      alt_name: "Cyber Security",
      color_code: "#26323899",
    },
    {
      title: "Integrating AI in Web & Application Development",
      subtitle: "Practical Workshop — Mentorly",
      logo_path: "education.svg",
      certificate_link: "",
      alt_name: "Mentorly Workshop",
      color_code: "#1565C099",
    },
    {
      title: "Cyber Security",
      subtitle: "Hands-on Workshop — Synthoquest Pvt. Limited",
      logo_path: "education.svg",
      certificate_link: "",
      alt_name: "Synthoquest Cyber Security Workshop",
      color_code: "#6A1B9A99",
    },
  ],
};

const experience = {
  title: "Hands-on Security Experience",
  subtitle: "Security Practice & Investigation Work",
  description:
    "Hands-on cybersecurity work covering network traffic inspection, Linux and Kali Linux experimentation, digital forensics, RAM acquisition, disk imaging, and security investigation fundamentals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Security Projects",
      experiences: [
        {
          title: "Network Traffic Analysis & Security Monitoring",
          company: "Independent Security Project",
          company_url: "",
          logo_path: "education.svg",
          duration: "Hands-on Project",
          location: "Cybersecurity Lab",
          description:
            "Captured and analyzed network packets using Wireshark. Inspected HTTP traffic, filtered packets using source and destination IP addresses, examined Apache and MySQL communication, and used packet-level analysis to understand protocols, ports, endpoints, and communication flows.",
          color: "#1679A7",
        },
        {
          title: "Digital Forensics & Memory Analysis",
          company: "Independent Security Project",
          company_url: "",
          logo_path: "education.svg",
          duration: "Hands-on Project",
          location: "Linux / Kali Linux",
          description:
            "Practiced volatile memory acquisition and disk imaging concepts using LiME and DCFLDD. Studied evidence integrity, forensic collection workflows, Linux-based forensic environments, and evidence collection and analysis fundamentals.",
          color: "#455A64",
        },
        {
          title: "UrbanSeva — Community Service Platform",
          company: "Web Development Project",
          company_url: "",
          logo_path: "education.svg",
          duration: "Project",
          location: "Web / Backend",
          description:
            "Designed a web platform connecting users with local service providers. Developed backend functionality for profile management and administrative operations, with server-side logic, data handling, API-based communication, and access-control considerations.",
          color: "#2E7D32",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Cybersecurity Projects",
  description:
    "Selected projects and practical work aligned with my cybersecurity, networking, digital forensics, and web development experience.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "network-traffic-analysis",
      name: "Network Traffic Analysis & Security Monitoring",
      description:
        "Wireshark-based packet capture and analysis covering HTTP traffic, source/destination IP filtering, Apache and MySQL communication, protocols, ports, endpoints, and traffic flows.",
      languages: [
        { name: "Wireshark", iconifyClass: "simple-icons:wireshark" },
        { name: "TCP/IP", iconifyClass: "simple-icons:internetexplorer" },
        { name: "HTTP", iconifyClass: "simple-icons:googlechrome" },
      ],
    },
    {
      id: "digital-forensics-memory-analysis",
      name: "Digital Forensics & Memory Analysis",
      description:
        "Hands-on forensic exercises involving volatile memory acquisition, disk imaging, evidence integrity, and Linux-based evidence collection using LiME and DCFLDD.",
      languages: [
        { name: "Kali Linux", iconifyClass: "simple-icons:kalilinux" },
        { name: "LiME", iconifyClass: "simple-icons:linux" },
        { name: "DCFLDD", iconifyClass: "simple-icons:linux" },
      ],
    },
    {
      id: "urbanseva",
      name: "UrbanSeva — Community Service Platform",
      description:
        "Web platform for connecting users with local service providers, including profile management, administrative operations, server-side logic, API communication, and access-control considerations.",
      languages: [
        { name: "Node.js", iconifyClass: "devicon-plain:nodejs-wordmark" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "REST APIs", iconifyClass: "simple-icons:fastapi" },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "No publications listed on the current resume.",
  avatar_image_path: "projects_image.svg",
};

const publications = { data: [] };

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "r1-logo.svg",
    description:
      "Open to opportunities related to Security Operations, Security Analysis, Network Security, Threat Detection, Incident Response, Digital Forensics, Vulnerability Assessment, Cloud Security, and Application Security.",
  },
  blogSection: {
    title: "GitHub",
    subtitle: "Explore my code and projects on GitHub.",
    link: "https://github.com/Rizwan1821",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Availability",
    subtitle: "Open to cybersecurity opportunities",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "6301238079",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
