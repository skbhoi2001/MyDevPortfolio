import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about} >
      <div className={styles.mainContainer}>
        <div
          className={styles.aboutme}
          style={{
            color: "black",
            borderRadius: "1rem 0 0 1rem",
          }}
        >
          <p>ABOUT ME</p>
        </div>
        <div className={styles.para}>
          <p>
            Hola! I am Soumyak Kumar Bhoi, self-developed, motivated with a lump sum
          of skillset.
          </p>
          <p>
          A self-motivated, hard working Full Stack Web Developer with problem solving mindset and have solved 200+ Data Structures & Algorithm problems. Capable of writing production ready code using REACT, REDUX, JavaScript, HTML and CSS. Eager to tackle Web Development challenges to achieve a lasting impact on user experience.I fell in love with the code while writing my first C program. I was first introduced to the coding in my engineering where I learnt C and C++. But at that point I was more passionate towards Web Development using PHP and MySQL.But my drive to learn new things made me stumble upon PHP tutorial videos during the 2020 lockdown, and since then there has been no going back. I have learnt HTML, CSS, JavaScript, React.js and applied this tech stack to build many projects. I am still enthusiastically grabbing on to any programming languages, frameworks, principles etc, and add it to my coding skillset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
