import { useState } from 'react';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "Jake",
    lastName: "Ryan",
    phoneNum: "123-456-7890",
    emailAdd: "jake@su.edu",
    linkedIn: "linkedin.com/in/jake",
    githubLink: "github.com/jake",
  })

  const [educationInfo, setEduInfo] = useState({
    degree: "Bachelor of Arts in Computer Science, Minor in Business",
    college: "Southwestern University",
    place: "Georgetown, TX",
    date: "May 2021",

  })

  const handleInfo = e => {
    const {id, value} = e.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    })
  }

  const handleEducation = e => {
    const {id, value} = e.target;
    setEduInfo({
      ...educationInfo,
      [id]: value
    })
  }

  return (
    <>
      <div className="side">
          <div className="header">CV Application</div>
          <div className="box">
            <div className="title">Personal Details</div>
            <form>
              <div className="together">
                <div className="form">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Jake" onChange={handleInfo}></input>
                </div>

                <div className="form">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Ryan" onChange={handleInfo}></input>
                </div>
              </div>

              <div className="form">
                <label htmlFor="phoneNum">Phone Number</label>
                  <input type="text" id="phoneNum" placeholder="123-456-7890" onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="emailAdd">Email Address</label>
                  <input type="text" id="emailAdd" placeholder="jake@su.edu" onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="linkedIn">LinkedIn</label>
                  <input type="text" id="linkedIn" placeholder="linkedin.com/in/jake" onChange={handleInfo}></input>
              </div>

              <div className="form">
                <label htmlFor="githubLink">Github</label>
                  <input type="text" id="githubLink" placeholder="github.com/jake" onChange={handleInfo}></input>
              </div>
            </form>

            <div className="title">Education</div>

            <form>
              <div className="form">
                <label htmlFor="degree">Degree Name</label>
                <input type="text" id="degree" placeholder="Bachelor of Arts in Computer Science, Minor in Business" onChange={handleEducation}></input>
              </div>

              <div className="form">
                <label htmlFor="college">School Name</label>
                <input type="text" id="college" placeholder="Southwestern University" onChange={handleEducation}></input>
              </div>

              <div className="together">
              <div className="form">
                <label htmlFor="place">City Name</label>
                <input type="text" id="place" placeholder="Georgetown, TX" onChange={handleEducation}></input>
              </div>

              <div className="form">
                <label htmlFor="date">Graduation Date</label>
                <input type="text" id="date" placeholder="May 2021" onChange={handleEducation}></input>
              </div>
              </div>
            </form>

            <button className="education">Add Education</button>
          </div>
      </div>

      <div className="other">
          <div className="paper">
            <div>{userInfo.firstName}, {userInfo.lastName}, {userInfo.phoneNum}, {userInfo.emailAdd}, {userInfo.linkedIn}, {userInfo.githubLink}</div>
          {educationInfo.degree}, {educationInfo.college}, {educationInfo.place}, {educationInfo.date}
          </div>
      </div>
    </>
  )
}

export default App;
