import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {projects.data.map((project) => (
            <GithubRepoCard repo={project} theme={theme} key={project.id} />
          ))}
        </div>
        <Button
          text="View GitHub Profile"
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;
