import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./TechStack.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export default function TechStack() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      id="skills"
      className={styles.skills}
      data-aos="fade-up"
   
    >
      <p className={styles.head}>TOOLS AND SKILLS</p>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.itemCont}
      >
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png" alt="react"/>
            <h1>React</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"></img>
            <h1>JavaScript</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" alt="typescript"></img>
            <h1>TypeScript</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://play-lh.googleusercontent.com/xcnli9yroXfo3VLg4OgsgXW_OwGadCEEI2tc19OwCV7GKMx3LKXA1rfPE0GlUKqTeyH-" alt="html5"></img>
            <h1>HTML5</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://i.pinimg.com/originals/7f/fd/20/7ffd20b2215bbea4531412826ce8399a.jpg" alt="css3"></img>
            <h1>CSS3</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://blog.telexarsoftware.com/wp-content/uploads/2019/11/logo-redux.png" alt="redux"></img>
            <h1>Redux</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://mui.com/static/logo.png" alt="bootstrap"></img>
            <h1>Material UI</h1>
          </Item>
        </Grid>

        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git"></img>
            <h1>Git</h1>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://blog.qualys.com/wp-content/uploads/2020/10/postman.jpg" alt="postman"></img>
            <h1>Postman</h1>
          </Item>
        </Grid>

        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img height={50} width={60} src="https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj" alt="react"></img>
            <h1>VS Code</h1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
