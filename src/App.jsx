import { useState } from 'react';
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "Jake",
    lastName: "Ryan",
    phoneNum: "123-456-7890",
    emailAdd: "jake@su.edu",
    linkedIn: "linkedin.com/in/jake",
    githubLink: "github.com/jake",
  })

  const [educations, setEducations] = useState([{
    degree: "Bachelor of Arts in Computer Science, Minor in Business",
    college: "Southwestern University",
    place: "Georgetown, TX",
    date: "May 2021",
  }])

  const [experiences, setExperiences] = useState([{
    position: "Undergraduate Research Assistant",
    employer: "Texas A&M University",
    city: "College Station, TX",
    startDate: "June 2020",
    endDate: "Present",
  }])

  const [projects, setProjects] = useState([{
    project: "Gitlytics",
    tools: "Python, Flask, React, PostgreSQL, Docker",
    builtDate: "June 2020",
  }])

  const [skills, setSkills] = useState([{
    skillTitle: "Languages",
    skill: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R"
  }])

  const handleInfo = e => {
    const {id, value} = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    })
  }
  
  const handleEducation = (e, i) => {
    const {id, value} = e.target;
    let newEducations = [...educations];
    newEducations[i][id] = value;
    setEducations(newEducations);
  }

  const handleAddEducation = () => {
    setEducations([...educations, {
      degree: "Bachelor of Arts in Computer Science, Minor in Business",
      college: "Southwestern University",
      place: "Georgetown, TX",
      date: "May 2021",
    }])
  }

  const handleDeleteEdu = (i) => {
    let deleteEducations = [...educations];
    deleteEducations.splice(i, 1);
    setEducations(deleteEducations);
  }

  const handleExperiences = (e, i) => {
    const {id, value} = e.target;
    let newExperiences = [...experiences];
    newExperiences[i][id] = value;
    setExperiences(newExperiences);
  }

  const handleAddExperiences = () => {
    setExperiences([...experiences, {
      position: "Undergraduate Research Assistant",
      employer: "Texas A&M University",
      city: "College Station, TX",
      startDate: "2020-06",
      endDate: "Present",
    }])
  }

  const handleDeleteExp = (i) => {
    let deleteExperiences = [...experiences];
    deleteExperiences.splice(i, 1);
    setExperiences(deleteExperiences);
  }

  const handleProjects = (e, i) => {
    const {id, value} = e.target;
    let newProjects = [...projects];
    newProjects[i][id] = value;
    setProjects(newProjects);
  }

  const handleAddProjects = () => {
    setProjects([...projects, {
      project: "Gitlytics",
      tools: "Python, Flask, React, PostgreSQL, Docker",
      builtDate: "June 2020",
    }])
  }

  const handleDeletePro = (i) => {
    let deleteProjects = [...projects];
    deleteProjects.splice(i, 1);
    setProjects(deleteProjects);
  }

  const handleSkills = (e, i) => {
    const {id, value} = e.target;
    let newSkills = [...skills];
    newSkills[i][id] = value;
    setSkills(newSkills);
  }

  const handleAddSkills = () => {
    setSkills([...skills, {
      skillTitle: "Languages",
      skill: "Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R"
    }])
  }

  const handleDeleteSkills = (i) => {
    let deleteSkills = [...skills];
    deleteSkills.splice(i, 1);
    setSkills(deleteSkills);
  }

  return (
    <>
      <div className="side">
          <div className="header">CV Application</div>
          <div className="box">
            <Personal handleInfo = {handleInfo}/>
            <Education educations={educations} handleAddEducation = {handleAddEducation} handleDeleteEdu = {handleDeleteEdu} handleEducation = {handleEducation}/>
            <Experience experiences={experiences} handleAddExperiences = {handleAddExperiences} handleDeleteExp = {handleDeleteExp} handleExperiences = {handleExperiences}/>
            <Project projects={projects} handleAddProjects = {handleAddProjects} handleDeletePro = {handleDeletePro} handleProjects = {handleProjects}/>
            <Skill skills={skills} handleAddSkills = {handleAddSkills} handleDeleteSkills = {handleDeleteSkills} handleSkills = {handleSkills}/>
          </div>
      </div>

      <div className="other">
          <div className="paper">
            <div>{userInfo.firstName}, {userInfo.lastName}, {userInfo.phoneNum}, {userInfo.emailAdd}, {userInfo.linkedIn}, {userInfo.githubLink}</div>
          </div>

          <button className="export">Export to PDF</button>
      </div>
    </>
  )
}

export default App;
