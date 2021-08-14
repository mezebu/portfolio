import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { AiFillGithub } from "react-icons/ai";

import styles from "../../../src/App.module.css";
import pic from "../../assets/hpic.jpg";

const Home = () => {
  return (
    <Container>
      <div
        style={{ textAlign: "center" }}
        className="text animate__animated animate__slideInDown"
      >
        <img
          src={pic}
          alt="avatar"
          style={{ height: "200px", borderRadius: "100px" }}
        />
      </div>
      <Grid className={styles.aboutme} col={8}>
        <div>
          <Typography
            variant="h5"
            style={{ fontWeight: "700", textAlign: "center" }}
            className="animate__animated animate__bounceInLeft animate__delay-0.5s"
          >
            Hi, I'm Ezeigwe Henry
          </Typography>
          <Typography
            style={{ textAlign: "center" }}
            className="animate__animated animate__bounceInRight animate__delay-1s"
            gutterBottom
          >
            Frontend Developer
          </Typography>
          <Typography className={styles.abouttxt} gutterBottom>
            Creative frontend developer with year's experience in web
            development. I am fueled by my passion in understanding programming
            languages, front-end frameworks and databases.
          </Typography>
          <Typography className={styles.abouttxt} gutterBottom>
            I consider myself a ‘forever student,’ eager to both build on my
            academic foundations in Web development by staying in tune with the
            latest technologies through continued coursework and professional
            development.
          </Typography>
          <Typography className={styles.abouttxt}>
            My hunger for knowledge and determination to turn information into
            action has contributed to my success.
          </Typography>
        </div>
        <div className={styles.icons}>
          <div className={styles.aboutbtn}>
            <Button
              color="primary"
              variant="contained"
              href="https://drive.google.com/file/d/1r_GhK-mswmQSQ_WirnAquzT7w1D-jfGU/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </Button>
          </div>
          <div className={styles.abouticon}>
            <a
              href="https://github.com/Mezebu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillGithub size="2em" color="black" />
            </a>
          </div>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
