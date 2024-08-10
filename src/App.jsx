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

  const handleInput = e => {
    const {id, value} = e.target;
    setUserInfo({
      ...userInfo,
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
              <div className="names">
                <div className="first">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="Jake" onChange={handleInput}></input>
                </div>

                <div className="last">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Ryan" onChange={handleInput}></input>
                </div>
              </div>

              <div className="phone">
                <label htmlFor="phoneNum">Phone Number</label>
                  <input type="text" id="phoneNum" placeholder="123-456-7890" onChange={handleInput}></input>
              </div>

              <div className="email">
                <label htmlFor="emailAdd">Email Address</label>
                  <input type="text" id="emailAdd" placeholder="jake@su.edu" onChange={handleInput}></input>
              </div>

              <div className="linked">
                <label htmlFor="linkedIn">LinkedIn</label>
                  <input type="text" id="linkedIn" placeholder="linkedin.com/in/jake" onChange={handleInput}></input>
              </div>

              <div className="github">
                <label htmlFor="githubLink">Github</label>
                  <input type="text" id="githubLink" placeholder="github.com/jake" onChange={handleInput}></input>
              </div>
            </form>
          </div>

          <button className="education">Education</button>
      </div>

      <div className="other">
          <div className="paper">
          {userInfo.firstName}, {userInfo.lastName}, {userInfo.phoneNum}, {userInfo.emailAdd}, {userInfo.linkedIn}, {userInfo.githubLink};
          </div>
      </div>
    </>
  )
}

export default App;
