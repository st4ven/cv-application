const Personal = ({handleInfo}) => {
    return (
        <>
        <div className="title">Personal Details</div>
            <div className="boxed">
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
            </div>
        </>
    )
}

export default Personal;