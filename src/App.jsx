import { useState } from 'react';
import './App.css';
import Personal from './components/Personal.jsx';
import Education from './components/Education.jsx';

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
    experiences[i][id] = value;
    setExperiences(newExperiences);
  }

  const handleAddExperiences = () => {
    setExperiences([...experiences, {
      position: "Undergraduate Research Assistant",
      employer: "Texas A&M University",
      city: "College Station, TX",
      startDate: "2020-06",
      endDate: "Present",
      description: "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems. Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data. Explored ways to visualize GitHub collaboration in a classroom setting."
    }])
  }

  const handleDeleteExp = (i) => {
    let deleteExperiences = [...experiences];
    deleteExperiences.splice(i, 1);
    setExperiences(deleteExperiences);
  }

  return (
    <>
      <div className="side">
          <div className="header">CV Application</div>
          <div className="box">
            <Personal handleInfo = {handleInfo}/>
            <Education educations={educations} handleAddEducation = {handleAddEducation} handleDeleteEdu = {handleDeleteEdu} handleEducation = {handleEducation}/>

            <div className="title">Experience</div>
            {experiences.map((e, i) => (
              <div className="boxed" key = {i}>
              <form>

                <button className="remove" onClick={() => handleDeleteExp(i)}>Remove Experience</button>
                <div className="form">
                  <label htmlFor="position">Position Title</label>
                  <input type="text" id="position" placeholder="Undergraduate Research Assistant" onChange={e => handleExperiences(e, i)}></input>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="employer">Company Name</label>
                    <input type="text" id="employer" placeholder="Texas A&M University" onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="city">City Name</label>
                    <input type="text" id="city" placeholder="College Station, TX" onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="together2">
                  <div className="form">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" placeholder="June 2020" onChange={e => handleExperiences(e, i)}></input>
                  </div>

                  <div className="form">
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" id="endDate" placeholder="Present"onChange={e => handleExperiences(e, i)}></input>
                  </div>
                </div>

                <div className="form">
                    <label htmlFor="task">Job Responsibilities</label>
                    <div className="tasks">
                    <input type="text" id="task" placeholder="Developed sum" onChange={e => handleExperiences(e, i)}></input>
                    <button className="delete">X</button>
                  </div>
                </div>

                <button className="job">Add Responsibility</button>
              </form>
              </div>
            ))}

            <div className="centered">
              <button className="add">Add Experience</button>
            </div>
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
