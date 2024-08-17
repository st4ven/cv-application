import { useState } from 'react';
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Example from './components/Data';
import exportPDF from './components/CVExport';

function App() {
  const [userInfo, setUserInfo] = useState(Example.personal);

  const [educations, setEducations] = useState(Example.educations);

  const [experiences, setExperiences] = useState(Example.experiences);

  const [projects, setProjects] = useState(Example.projects);

  const [skills, setSkills] = useState(Example.skills);

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
      degree: "",
      college: "",
      place: "", 
      date: ""
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
      position: "",
      employer: "",
      city: "",
      startDate: "",
      endDate: "",
      task: ""
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
      project: "",
      tools: "",
      builtDate: "",
      desc: ""
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
      skillTitle: "",
      skill: ""
    }])
  }

  const handleDeleteSkills = (i) => {
    let deleteSkills = [...skills];
    deleteSkills.splice(i, 1);
    setSkills(deleteSkills);
  }

  const clearExample = () => {
    setUserInfo({
      firstName: "",
      lastName: "",
      phoneNum: "",
      emailAdd: "",
      linkedIn: "",
      githubLink: ""
    });

    setEducations([]);
    setExperiences([]);
    setProjects([]);
    setSkills([]);
  }

  const loadExample = () => {
    setUserInfo(Example.personal);
    setEducations(Example.educations);
    setExperiences(Example.experiences);
    setProjects(Example.projects);
    setSkills(Example.skills);
  }
  return (
    <div className="page">
      <div className="side">
          <div className="box">
            <Personal handleInfo = {handleInfo} userInfo = {userInfo}/>
            <Education educations={educations} handleAddEducation = {handleAddEducation} handleDeleteEdu = {handleDeleteEdu} handleEducation = {handleEducation}/>
            <Experience experiences={experiences} handleAddExperiences = {handleAddExperiences} handleDeleteExp = {handleDeleteExp} handleExperiences = {handleExperiences}/>
            <Project projects={projects} handleAddProjects = {handleAddProjects} handleDeletePro = {handleDeletePro} handleProjects = {handleProjects}/>
            <Skill skills={skills} handleAddSkills = {handleAddSkills} handleDeleteSkills = {handleDeleteSkills} handleSkills = {handleSkills}/>
          </div>
      </div>

      <div className="other">
        <ul className="buttons">
        <button onClick = {clearExample}>Clear Example</button>
        <button onClick = {loadExample}>Load Example</button>
        </ul>
          <div className="paper">
            <div className="personal-section">
                <h1>{userInfo.firstName + ' ' + userInfo.lastName}</h1>

                <ul>
                  <li>{userInfo.phoneNum}</li>
                  <li>{userInfo.emailAdd}</li>
                  <li>{userInfo.linkedIn}</li>
                  <li>{userInfo.githubLink}</li>
                </ul>
            </div>


            <div className={educations.length > 0 ? "education-section": ''}>
              <h3>{educations.length > 0 && 'Education'}</h3>

              <ul> 
                {educations.map((education, index) => (
                   <li key={index}>
                    <div>
                      <strong>{education.college}</strong>

                      {education.place}
                    </div>

                    <div>
                        <p>{education.degree}</p>

                        <p>{education.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={experiences.length > 0 ? "experience-section": ''}>
              <h3>{experiences.length > 0 && 'Experience'}</h3>

              <ul>
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <div>
                      <strong>{experience.position}</strong>

                      <div>{experience.startDate + ' - ' + experience.endDate}</div>
                    </div>

                    <div>
                        <p>{experience.employer}</p>

                        <p>{experience.city}</p>
                    </div>

                    <div>
                      <ul>
                        {experience.task.split('\n').map((item, index) => (
                          <li key = {index}>{'• ' + item}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={projects.length > 0 ? "project-section": ''}>
              <h3>{projects.length > 0 && "Projects"}</h3>
                <ul> 
                  {projects.map((project, index) => (
                    <li key={index}>
                      <div>
                        <div>
                        <strong>{project.project}</strong>
                        <span>{project.tools}</span>
                        </div>

                        {project.builtDate}
                      </div>

                      <div>
                        <ul>
                          {project.desc.split('\n').map((item, index) => (
                            <li key={index}>{'• ' + item}</li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
            </div>

            <div className={skills.length > 0 ? "skills-section": ''}>
              <h3>{skills.length > 0 && 'Skills'}</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>
                    <strong>{skill.skillTitle + ': '}</strong>
                    {skill.skill}
                  </li>

              ))}
              </ul>
            </div>
          </div>

          <button onClick={exportPDF}className="export">Export to PDF</button>
      </div>
    </div>
  )
}

export default App;
