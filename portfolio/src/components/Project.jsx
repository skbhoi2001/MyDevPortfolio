import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const data = [
  {
    name: "Instagram Clone",
    techStack: ["React","Redux","Material UI","JSON Server"],
    desc: "Instagram is an photo and video sharing social networking service founded by Kevin Systrom and Mike Krieger.It allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.",
    collab: true,
    year: "March 2022",
    team: 3,
    days: 6,
    data:"Username:masaischool,Password:masaischool",
    img: "https://raw.githubusercontent.com/skbhoi2001/Instagram_clone/main/instagram_clone/images/home.png",
    git:"https://github.com/skbhoi2001/Instagram_clone/tree/main/instagram_clone",
    web:"https://happy-curran-36e035.netlify.app"
  },
  {
    name: "Amazon.com Clone",
    techStack: ["React", "Redux", "Material UI","JSON Server"],
    desc: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    collab: true,
    year: "December 2021",
    team: 3,
    days: 7,
    img: "",
    git:"https://github.com/skbhoi2001/Amazon-clone",
    web:"."
  },
  {
    name: "Practo Clone",
    techStack: ["HTML5", "CSS3", "JavaScript", "JSON Server"],
    desc: "Practo is revolutionizing healthcare by enabling consumers to find the best doctors, book instant appointments, consultations, and make better, more informed health decisions.",
    collab: false,
    year: "November 2021",
    team: 3,
    days: 6,
    img: "https://user-images.githubusercontent.com/72690740/147086166-535f3590-d10c-4a59-9feb-85f57286516c.PNG",  
    
    git:"https://github.com/skbhoi2001/practo_clone",
    web:"http://proctoclone.atwebpages.com/"
  },
  
  {
    name: "NiftyPm Clone",
    techStack: ["HTML5","CSS3","JavaScript"],
    desc: "NiftyPm is a Comparison of project management software.",
    collab: true,
    year: "June 2021",
    team: 3,
    days: 5,
    img: "",
    git:"https://github.com/skbhoi2001/niftypm",
    web:""
  },
];

export default function Project() {
  return (
    <div id="project" className={styles.project}>
      <p className={styles.head} >PROJECTS</p>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </div>
  );
}
