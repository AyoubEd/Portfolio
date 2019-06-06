import React, { Component } from "react";
//Material UI Imports
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { Github, Linkedin } from "@material-ui/icons";
//Components
import Chart from "./helpercomponents/chart";
//Files
import profile from "../content/assets/profile.png";
import { data } from "../resumeInfo";

import "./App.css";

const style = {
  titleName: {
    color: "#000",
    textTransform: "uppercase",
    margin: "5px 0 0 0",
    fontSize: "1.7rem",
    fontWeight: "600",
    fontFamily: "'Times New Roman', Times, serif"
  },
  bar: {
    // backgroundColor: gray,
    flexFlow: "row",
    height: "fit-content",
    fontColor: "white",
    width: "100%",
    margin: "20 15cm 0 15cm",
    borderRadius: "2px"
  },
  textInBar: {
    color: "white",
    marginTop: "20px"
  },
  icon: {
    color: "#000",
    padding: "10px"
  },
  section: {
    margin: "1em 0",
    border: "3px solid",
    padding:"0 5px",
    borderColor: "#000",
    borderRadius: "3px",
    // padding: "0.1em",
    backgroundColor: "lightgray",
    width: "fit-content",
    fontWeight: "bold",
    color: "#000"
  },
  jobs: {
    display: "flex",
    flexFlow: "column"
  },
  projects: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap"
  },
  job: {
    display: "grid",
    flexFlow: "column",
    padding: "0.5em",
    borderLeft: "5px solid",
    borderColor: "#388bff",
    content: "attr(date)",
    marginBottom: "10px",
    backgroundColor: "#F5F5F5"
  },
  tag: {
    fill: "#000 !imporant",
    height: "25px",
    width: "25px",
    borderRadius: "100%",
    marginTop: "6.5px",
    marginLeft: "-22px",
    color: "white",
    fontWeight: "bold"
  },
  jobContent: {
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    alignItems: "flex-start",
    padding: "0 1em"
  },
  videoContainer: {
    flexGrow: 1,
    width: "200px",
    height: "auto",
    alignSelf: "flex-start",
    margin: "0.5em"
  },
  companyTitle: {
    width: "fit-content",
    fontWeight: 600,
    color: "#222",
    fontSize: "1.4875rem",
    // lineHeight: "2.4375rem",
    borderBottom: "0.5px solid white"
  },
  upperCat: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: ".875rem",
    marginLeft: "10px",
    color: "#F19F46",
    "&:hover": {
      color: "#5d93ff",
      cursor: "pointer"
    }
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        className="App"
        onScroll={() => {
          //     const node = ReactDOM.findDOMNode(this);
          // node.scrollTop = node.scrollHeight;
        }}
      >
        <header className="App-header">
          <img src={profile} className="App-logo" alt="profile" />
          <span className={classes.titleName}>Ayoub Ed Dakhly</span>
          <Typography variant="subheading">
            <i>ayoubed@protonmail.com</i>
          </Typography>
          <div>
            <a
              href="https://www.linkedin.com/in/ayoub-eddakhly/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn className={classes.icon} />
            </a>
            <a
              href="https://github.com/AyoubEd"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className={classes.icon} />
            </a>
            <a
              href="https://twitter.com/AyoubEddakhly"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter className={classes.icon} />
            </a>
          </div>
          {/* <div className={classes.bar}>
            <div className={classes.textInBar}>
              <Typography variant="h6" className={classes.textInBar}>
                Software Engineer | Student at the National Institute INPT
              </Typography>
              <div
                style={{
                  fontStyle: "italic",
                  fontSize: "16px",
                  color: "lightgray"
                }}
              >
                Still building for the love of building, and seeking knowledge
                for the love of discovery and sharing.
              </div>
            </div>
          </div> */}
        </header>
        <div>
          <Typography variant="h5" align="left" className={classes.section}>
            Experience
          </Typography>
          <div className={classes.jobs}>
            {!data.jobs && "Undergoing changes"}
            {data.jobs &&
              data.jobs.map((ele, index) => (
                <div className={classes.job} key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexFlow: "row"
                    }}
                  >
                    {/* <div className={classes.tag}>{index + 1}</div> */}
                    {/* <img
                      className={classes.tag}
                      src={require(`../content/assets/${index + 1}.svg`)}
                      alt="alt"
                    /> */}
                    <div className={classes.jobContent}>
                      <div
                        style={{
                          display: "flex",
                          flexFlow: "row",
                          alignItems: "center"
                        }}
                      >
                        <Typography
                          variant="h6"
                          className={classes.companyTitle}
                          style={{ padding: "0 10px" }}
                        >
                          {ele.company}
                        </Typography>
                        <Typography
                          variant="caption"
                          className={classes.upperCat}
                        >
                          {ele.time}
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexFlow: "column",
                          flexGrow: 1,
                          width: "100%",
                          paddingLeft: "10px",
                          alignItems: "flex-start"
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          style={{ fontStyle: "italic", color: "gray" }}
                        >
                          {ele.title}
                        </Typography>
                        <Typography variant="body1" style={{ padding: "5px" }}>
                          {ele.description}
                        </Typography>
                      </div>
                    </div>
                    <img
                      src={require(`../content/assets/${ele.logo}.png`)}
                      alt="logo"
                      style={{ height: "5em" }}
                    />
                  </div>
                </div>
              ))}
          </div>

          <Typography variant="h5" align="left" className={classes.section}>
            Projects
          </Typography>
          <div className={classes.projects}>
            {data.projects.map(ele => (
              <div className={classes.videoContainer}>
                <iframe
                  title={ele.title}
                  src={ele.src}
                  height="auto"
                  width="100%"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            ))}
          </div>

          <Typography variant="h5" align="left" className={classes.section}>
            Blog Posts
          </Typography>
          <Typography variant="h5" align="left" className={classes.section}>
            Extra curriculars
          </Typography>

          <Typography variant="h5" align="left" className={classes.section}>
            About
          </Typography>
          <div
            style={{
              display: "flex",
              flexFlow: "row",
              flexWrap: "wrap",
              alignItems: "flex-start"
            }}
          >
            <div style={{ flex: 1, minWidth: "300px", fontStyle:"italic" }}>
              {data.aboutme.map((ele, index) => (
                <div key={index}>{ele}</div>
              ))}
            </div>
          </div>
          <div>
            <Chart />
            <Typography variant="caption">
              Languages used as reported by Github account.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(App);
